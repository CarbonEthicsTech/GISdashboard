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
let activeWidget = null; 

const portalUrl = "https://www.arcgis.com";

esriConfig.apiKey = "AAPKef29b82e1d5242c8a5f70a07a2e606efknDZO_U878U9VVvnsoLSl0SDAgJoqHQdE8X1uNJT9H6e0qzR4qYC2yFAcIEB5ykk"

export const initialize = (container) => {
    const map = new Map({
        basemap: "topo-vector"
    });

    const view = new MapView({
        container: container.current,
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

    graphicsLayer.add(airportGraphic);
    graphicsLayer.add(seaportGraphic);
    
    return view;
}
