import"./horsesWorldMap.css";
import react from"react";
import usMap3 from "./images/usMaps/usMap3.png";
import horseIcon from"./images/horseIcons/horseIcon2.png";


const HorsesWorldMap=()=>{
    const[hiddenNum,setHiddenNum]=react.useState(true);
    const[idahoHovered,setIdahoHovered]=react.useState(false);
    const[maineHovered,setMaineHovered]=react.useState(false);
    const[nevadaHovered,setNevadaHovered]=react.useState(false);
    const[utahHovered,setUtahHovered]=react.useState(false);
    const[wyomingHovered,setWyomingHovered]=react.useState(false);

    return(
        <>
            <div id="mapTitleDiv">
                <h3 id="mapTitle">Follow our impact</h3>
            </div>
            <div>
                <h4 id={hiddenNum?"hiddenNum":"none"}>00</h4>

                <h4 className={!utahHovered?"none":"stateNum"}>40</h4>

                <h4 className={!wyomingHovered?"none":"stateNum"}>7</h4>
                <h4 className={!idahoHovered?"none":"stateNum"}>1</h4>
                <h4 className={!maineHovered?"none":"stateNum"}>3</h4>
                <h4 className={!nevadaHovered?"none":"stateNum"}>1</h4>

                <img id="map1"src={usMap3} alt="USA Map" />

                <img id="idaho" onMouseEnter={()=>{setHiddenNum(false);setIdahoHovered(true);}}onMouseLeave={()=>{setHiddenNum(true);setIdahoHovered(false);}} src={horseIcon} alt="Horse Icon" />

                <img id="maine" onMouseEnter={()=>{setHiddenNum(false);setMaineHovered(true);}}onMouseLeave={()=>{setHiddenNum(true);setMaineHovered(false);}} src={horseIcon} alt="Horse Icon" />


                <img id="nevada" onMouseEnter={()=>{setHiddenNum(false);setNevadaHovered(true);}}onMouseLeave={()=>{setHiddenNum(true);setNevadaHovered(false);}} src={horseIcon} alt="Horse Icon" />

                <img id="utah" onMouseEnter={()=>{setHiddenNum(false);setUtahHovered(true);}}onMouseLeave={()=>{setHiddenNum(true);setUtahHovered(false);}} src={horseIcon} alt="Horse Icon" />
                
                <img id="wyoming" onMouseEnter={()=>{setHiddenNum(false);setWyomingHovered(true);}}onMouseLeave={()=>{setHiddenNum(true);setWyomingHovered(false);}}src={horseIcon} alt="Horse Icon" />
            </div>
        </>
    );
};
export{HorsesWorldMap};