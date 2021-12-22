import React, { useState } from 'react';
import './App.css';

function App() {

  const ONE_BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  const TWO_BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  const THREE_BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  const FOUR_BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1559160581-44bd4222d397?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  const FIVE_BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1203&q=80";
  // const DEFAULT_BACKGROUND_IMAGE = "";

  const backgroundsList = [
    {id: 1, backgroundImg: ONE_BACKGROUND_IMAGE,   panelName: "Portfolio Item One",   panelActive: "one"}, 
    {id: 2, backgroundImg: TWO_BACKGROUND_IMAGE,   panelName: "Portfolio Item Two",   panelActive: "two"},
    {id: 3, backgroundImg: THREE_BACKGROUND_IMAGE, panelName: "Portfolio Item Three", panelActive: "three"},
    {id: 4, backgroundImg: FOUR_BACKGROUND_IMAGE,  panelName: "Portfolio Item Four",  panelActive: "four"},
    {id: 5, backgroundImg: FIVE_BACKGROUND_IMAGE,  panelName: "Portfolio Item Five",  panelActive: "five"},
  ];
  
  const SET_DEFAULT_PANEL_ACTIVE = 'one';
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

export default App;
