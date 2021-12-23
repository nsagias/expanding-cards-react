import React, { useState } from 'react';
import {
  SET_DEFAULT_PANEL_ACTIVE
 } from './images/backgroundImages.jsx';
 import { backgroundsList }  from './helpers/backgroundLIstData';

interface IBackgroundList {
  id: number;
  backgroundImg: string;
  panelName: string;
  panelActive: string;
}


export default function PaneList() {
  const [panelActive, setPanelActive] = useState<string>(SET_DEFAULT_PANEL_ACTIVE);

  const parsedBackgrounds = Array.isArray(backgroundsList) && backgroundsList.map(background => (
    <div 
      className={`panel ${panelActive === background.panelActive ? 'active' : ''}`}
      onClick={() => setPanelActive(background.panelActive)} 
      key={background.id}
      style={{backgroundImage: `url(${background.backgroundImg})`}}
    >
      <h3 >{background.panelName}</h3>
    </div>
  ));

  return (
    <div className="container">
      {parsedBackgrounds}
    </div>
  );
}