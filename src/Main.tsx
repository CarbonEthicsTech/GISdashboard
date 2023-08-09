import React, { useEffect, useRef } from "react"
import { initialize } from "./MainScript";

export default function Main(){

    const elementRef = useRef<HTMLInputElement>(null)
   
    useEffect(() => {
        initialize(elementRef)
    }, [])

    return(
        <>
            <script src="https://js.arcgis.com/4.26/"></script>
            <div id="viewDiv" ref={elementRef}></div>
            <div id="searchWidget"></div>
            <div id="homeBtn"></div>
            <div id="locateBtn"></div>
            <div id="uploadExpand"></div>
           
        </>
    )
}