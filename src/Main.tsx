import React, { useEffect, useRef } from "react"
import { initialize } from "./MainScript";

export default function Main(){

    const viewDiv = useRef<HTMLInputElement>(null)
    const distanceButton = useRef<HTMLButtonElement>(null)
    const areaButton = useRef<HTMLButtonElement>(null)
    const uploadForm = useRef<HTMLFormElement>(null)
    const uploadStatus = useRef<HTMLSpanElement>(null)
    const mainWindow = useRef<HTMLDivElement>(null)
   
    useEffect(() => {

        const arrayRef = {
            viewDiv: viewDiv,
            distanceButton: distanceButton,
            areaButton: areaButton,
            uploadForm: uploadForm,
            uploadStatus: uploadStatus,
            mainWindow: mainWindow
        }

        initialize(arrayRef)
    }, [])

    return(
        <>
            <script src="https://js.arcgis.com/4.26/"></script>
            <div id="viewDiv" ref={viewDiv}></div>
            <div id="topbar">
                <button ref={distanceButton} className="action-button esri-icon-measure-line" id="distanceButton" type="button"
                    title="Measure distance between two or more points"></button>
                <button ref={areaButton} className="action-button esri-icon-measure-area" id="areaButton" type="button"
                    title="Measure area"></button>
            </div>
            <div id="searchWidget"></div>
            <div id="homeBtn"></div>
            <div id="locateBtn"></div>
            <div id="uploadExpand"></div>
            <div ref={mainWindow} id="mainWindow">
            <div>
            <div style={{paddingLeft : "4px;"}}>
                <p>Add a zipped shapefile to the map.</p>
                <form ref={uploadForm} encType="multipart/form-data" method="post" id="uploadForm">
                <div className="field">
                    <label className="file-upload">
                    <span><strong>Add File</strong></span>
                    <input type="file" name="file" id="inFile" />
                    </label>
                </div>
                </form>
                <span
                className="file-upload-status"
                style={{ opacity: 1}}
                id="upload-status"
                ref={uploadStatus}
                ></span>
                <div id="fileInfo"></div>
            </div>
            </div>
        </div>
           
        </>
    )
}