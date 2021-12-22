import React from 'react';
import './App.css';

function App() {

  const ONE_BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  const TWO_BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  const THREE_BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  const FOUR_BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1559160581-44bd4222d397?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  const FIVE_BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1203&q=80";
  // const DEFAULT_BACKGROUND_IMAGE = "";

  const backgroundsList = [
    {id: 1, backgroundImg: ONE_BACKGROUND_IMAGE,   panelName: "Portfolio Item One"}, 
    {id: 2, backgroundImg: TWO_BACKGROUND_IMAGE,   panelName: "Portfolio Item Two"},
    {id: 3, backgroundImg: THREE_BACKGROUND_IMAGE, panelName: "Portfolio Item Three"},
    {id: 4, backgroundImg: FOUR_BACKGROUND_IMAGE,  panelName: "Portfolio Item Four"},
    {id: 5, backgroundImg: FIVE_BACKGROUND_IMAGE,  panelName: "Portfolio Item Five"},
  ];

  const parsedBackgrounds = Array.isArray(backgroundsList) && backgroundsList.map(background => 
    <div 
      className="panel active" 
      key={background.id}
      style={{backgroundImage: `url(${background.backgroundImg})`}}
    >
      <h3 >{background.panelName}</h3>
    </div>
  );


  return (
    <div className="container">
      {parsedBackgrounds}
      {/* <div 
        className={`panel  ${'active'}`}
        style={{backgroundImage: `url(${ONE_BACKGROUND_IMAGE})`}}>
        <h3>Portfolio Item One</h3>
      </div>

      <div 
        className={`panel  ${''}`}
        style={{backgroundImage: `url(${TWO_BACKGROUND_IMAGE})`}}>
        <h3>Portfolio Item Two</h3>
      </div>

      <div 
        className={`panel  ${''}`}
        style={{backgroundImage: `url(${THREE_BACKGROUND_IMAGE})`}}>
        <h3>Portfolio Item Three</h3>
      </div>

      <div 
        className={`panel  ${''}`}
        style={{backgroundImage: `url(${FOUR_BACKGROUND_IMAGE})`}}>
        <h3>Portfolio Item Four</h3>
      </div>

      <div 
        className={`panel  ${''}`}
        style={{backgroundImage: `url(${FIVE_BACKGROUND_IMAGE})`}}>
        <h3>Portfolio Item Five</h3>
      </div> */}

    </div>
  );
}

export default App;
