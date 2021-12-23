import React, { useState } from 'react';
import {
  SET_DEFAULT_PANEL_ACTIVE
 } from './images/backgroundImages.jsx';
 import { backgroundsList }  from './helpers/backgroundLIstData';

export default function PaneList() {

  // const backgroundsList = [
  //   {id: 1, backgroundImg: ONE_BACKGROUND_IMAGE,   panelName: "Portfolio Item One",   panelActive: "one"}, 
  //   {id: 2, backgroundImg: TWO_BACKGROUND_IMAGE,   panelName: "Portfolio Item Two",   panelActive: "two"},
  //   {id: 3, backgroundImg: THREE_BACKGROUND_IMAGE, panelName: "Portfolio Item Three", panelActive: "three"},
  //   {id: 4, backgroundImg: FOUR_BACKGROUND_IMAGE,  panelName: "Portfolio Item Four",  panelActive: "four"},
  //   {id: 5, backgroundImg: FIVE_BACKGROUND_IMAGE,  panelName: "Portfolio Item Five",  panelActive: "five"},
  // ];
  
  const [panelActive, setPanelActive] = useState(SET_DEFAULT_PANEL_ACTIVE);

  const parsedBackgrounds = Array.isArray(backgroundsList) && backgroundsList.map(background => 
    <div 
      className={`panel ${panelActive === background.panelActive ? 'active' : ''}`}
      onClick={() => setPanelActive(background.panelActive)} 
      key={background.id}
      style={{backgroundImage: `url(${background.backgroundImg})`}}
    >
      <h3 >{background.panelName}</h3>
    </div>
  );


  return (
    <div className="container">
      {parsedBackgrounds}
    </div>
  );
}