// @ts-nocheck

import * as projection from "@arcgis/core/geometry/projection";
import Map from "@arcgis/core/Map"
import WebMap from "@arcgis/core/WebMap"
import MapView from "@arcgis/core/views/MapView"
import DistanceMeasurement2D from "@arcgis/core/widgets/DistanceMeasurement2D";
import AreaMeasurement2D from "@arcgis/core/widgets/AreaMeasurement2D";
import Search from "@arcgis/core/widgets/Search";
import Home from "@arcgis/core/widgets/Home";
import Locate from "@arcgis/core/widgets/Locate";
import esriConfig from "@arcgis/core/config";
import request from "@arcgis/core/request";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Field from "@arcgis/core/layers/support/Field";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import SceneView from "@arcgis/core/views/SceneView";
import WebScene from "@arcgis/core/WebScene";
import Weather from "@arcgis/core/widgets/Weather";
import Daylight from "@arcgis/core/widgets/Daylight";
import Geometry from "@arcgis/core/geometry/Geometry"
import Expand from "@arcgis/core/widgets/Expand"


let activeWidget = null; 

const portalUrl = "https://www.arcgis.com";

esriConfig.apiKey = "AAPKef29b82e1d5242c8a5f70a07a2e606efknDZO_U878U9VVvnsoLSl0SDAgJoqHQdE8X1uNJT9H6e0qzR4qYC2yFAcIEB5ykk"

export const initialize = (container) => {

    const map = new Map({
        basemap: "topo-vector"
    });

    const view = new MapView({
        container: container.viewDiv.current,
        map: map,
        center: [112.62, -0.8],
        zoom: 6,
        popup: {
            defaultPopupTemplateEnabled: true
        }
    });

    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer)

    let airport = {
        type: "polygon",
        rings: [
            [-244.8375760, -8.7398712], 
            [-244.8313038, -8.7397214], 
            [-244.8317204, -8.7444028],  
            [-244.8179714, -8.7439537],  
            [-244.8181896, -8.74944968],  
            [-244.8473720, -8.7502979],  
            [-244.8480587, -8.7430023],  
            [-244.8399906, -8.7421540],  
            [-244.8374655, -8.7423960],  
            [-244.8376911, -8.7398324]
        ]
    };
    const aiportAtr = {
        Name: "Airport",
        Description: "Ini bandara lohhh"
    }

     
    let seaport = {
        type: "polygon",
        rings: [
            [-244.7397488, -8.6659897], 
            [-244.7365516, -8.6659473], 
            [-244.7364658, -8.6699989],  
            [-244.7399205, -8.6702535],  
            [-244.7397703, -8.6660322],
        ]
    };
    const seaportAtr = {
        Name: "Seaport",
        Description: "Kalo yg ini pelabuhan"
     }


    const simpleFillSymbol = {
        type: "simple-fill",
        color: [227, 139, 79, 0.8],  // Orange, opacity 80%
        outline: {
            color: [255, 255, 255],
            width: 1
        }
     };

    
    const popupTemplate = {
        title: "{Name}",
        content: "{Description}"
    }

    const airportGraphic = new Graphic({
        geometry: airport,
        symbol: simpleFillSymbol,
        attributes: aiportAtr,
        popupTemplate: popupTemplate

    });

    const seaportGraphic = new Graphic({
        geometry: seaport,
        symbol: simpleFillSymbol,
        attributes: seaportAtr,
        popupTemplate: popupTemplate

    });

    // SAMPLE GRAPHICS LAYER FOR CURRENT PROJECT
    // graphicsLayer.add(airportGraphic);
    // graphicsLayer.add(seaportGraphic);

    for(let i = 0; i < 16; i++){
        const layer = new FeatureLayer({
            url: "https://services3.arcgis.com/JyARPALVPGdEzzgv/arcgis/rest/services/Polygons_CE_Website/FeatureServer/" + i
        });
    
        map.add(layer, 0);
    }

    

    view.ui.move(["zoom"], {
        position: "bottom-left",
        index: 3
    })

    container.distanceButton.current
    .addEventListener("click", function () {
        setActiveWidget(null);
        if (!this.classList.contains("active")) {
            setActiveWidget("distance");
        } else {
            setActiveButton(null);
        }
    });

    container.areaButton.current
    .addEventListener("click", function () {
        setActiveWidget(null);
        if (!this.classList.contains("active")) {
            setActiveWidget("area");
        } else {
            setActiveButton(null);
        }
    });

    function setActiveWidget(type) {
        switch (type) {
            case "distance":
                activeWidget = new DistanceMeasurement2D({
                    view: view
                });

                // skip the initial 'new measurement' button
                activeWidget.viewModel.start();

                view.ui.add(activeWidget, "top-right");
                setActiveButton(container.distanceButton.current);
                break;
            case "area":
                activeWidget = new AreaMeasurement2D({
                    view: view
                });

                // skip the initial 'new measurement' button
                activeWidget.viewModel.start();

                view.ui.add(activeWidget, "top-right");
                setActiveButton(container.areaButton.current);
                break;
            case null:
                if (activeWidget) {
                    view.ui.remove(activeWidget);
                    activeWidget.destroy();
                    activeWidget = null;
                }
                break;
        }
    }

    function setActiveButton(selectedButton) {
        // focus the view to activate keyboard shortcuts for sketching
        view.focus();
        let elements = document.getElementsByClassName("active");
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove("active");
        }
        if (selectedButton) {
            selectedButton.classList.add("active");
        }
    }

    const searchWidget = new Search({            
        view: view                
    });

    view.ui.add(searchWidget, "top-left");

    const homeBtn = new Home({
        view: view
    }, "homeBtn");

    view.ui.add(homeBtn, "top-left");


    const locateBtn = new Locate({
        view: view
    },'locateBtn');

    view.ui.add(locateBtn, "top-left");

    const expand = new Expand({
        view: view,
        content: container.mainWindow.current
    },'uploadExpand');

    view.ui.add(expand, "top-left");

    const toggle = new BasemapToggle({
        view: view,
        nextBasemap: "hybrid"
    });

    view.ui.add(toggle, "bottom-left");

    container.uploadForm.current
    .addEventListener("change", (event) => {
        const fileName = event.target.value.toLowerCase();

        if (fileName.indexOf(".zip") !== -1) {
        //is file a zip - if not notify user
        generateFeatureCollection(fileName);
        } else {
            container.uploadStatus.current.innerHTML =
                '<p style="color:red">Add shapefile as .zip file</p>';
        }
    });

    function generateFeatureCollection(fileName) {
        let name = fileName.split(".");
        // Chrome adds c:\fakepath to the value - we need to remove it
        name = name[0].replace("c:\\fakepath\\", "");

        container.uploadStatus.current.innerHTML =
            "<b>Loading... </b>" + name;

        // define the input params for generate see the rest doc for details
        // https://developers.arcgis.com/rest/users-groups-and-items/generate.htm
        const params = {
            name: name,
            targetSR: view.spatialReference,
            maxRecordCount: 1000,
            enforceInputFileSizeLimit: true,
            enforceOutputJsonSizeLimit: true
        };

        // generalize features to 10 meters for better performance
        params.generalize = true;
        params.maxAllowableOffset = 10;
        params.reducePrecision = true;
        params.numberOfDigitsAfterDecimal = 0;

        const myContent = {
            filetype: "shapefile",
            publishParameters: JSON.stringify(params),
            f: "json"
        };

        // use the REST generate operation to generate a feature collection from the zipped shapefile
        request(portalUrl + "/sharing/rest/content/features/generate", {
            query: myContent,
            body: container.uploadForm.current,
            responseType: "json"
        })
        .then((response) => {
            const layerName =
                response.data.featureCollection.layers[0].layerDefinition.name;
                container.uploadStatus.current.innerHTML =
                "<b>Loaded: </b>" + layerName;
            addShapefileToMap(response.data.featureCollection);
            })
            .catch((error) => {
                container.uploadStatus.current.innerHTML =
                "<p style='color:red;max-width: 500px;'>" + error.message + "</p>";
            });
        }

        function addShapefileToMap(featureCollection) {
            // add the shapefile to the map and zoom to the feature collection extent
            // if you want to persist the feature collection when you reload browser, you could store the
            // collection in local storage by serializing the layer using featureLayer.toJson()
            // see the 'Feature Collection in Local Storage' sample for an example of how to work with local storage
            let sourceGraphics = [];

            const layers = featureCollection.layers.map((layer) => {
                const graphics = layer.featureSet.features.map((feature) => {
                return Graphic.fromJSON(feature);
                });
                sourceGraphics = sourceGraphics.concat(graphics);
                const featureLayer = new FeatureLayer({
                objectIdField: "FID",
                source: graphics,
                fields: layer.layerDefinition.fields.map((field) => {
                    return Field.fromJSON(field);
                })
                });
                return featureLayer;
                // associate the feature with the popup on click to enable highlight and zoom to
            });
            map.addMany(layers);
            view.goTo(sourceGraphics).catch((error) => {
                if (error.name != "AbortError") {
                console.error(error);
                }
            });

            container.uploadStatus.current.innerHTML = "";
        }
    
    return view;
}


