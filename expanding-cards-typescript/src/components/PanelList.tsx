import React, { useState } from 'react';
import {
  SET_DEFAULT_PANEL_ACTIVE
 } from './images/backgroundImages.jsx';
import { backgroundsList }  from './helpers/backgroundLIstData';

export default function PaneList(): object {
  const [panelActive, setPanelActive] = useState<React.SetStateAction<string>>(SET_DEFAULT_PANEL_ACTIVE);

  const parsedBackgrounds: false | JSX.Element[] = Array.isArray(backgroundsList) && backgroundsList.map(background => (
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