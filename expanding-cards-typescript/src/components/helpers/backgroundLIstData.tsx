import {
  ONE_BACKGROUND_IMAGE,
  TWO_BACKGROUND_IMAGE,
  THREE_BACKGROUND_IMAGE,
  FOUR_BACKGROUND_IMAGE,
  FIVE_BACKGROUND_IMAGE,
 } from '../images/backgroundImages';

import {IBackgroundList} from '../../backgroundList.model';

export const backgroundsList: IBackgroundList[] = [
  {id: 1, backgroundImg: ONE_BACKGROUND_IMAGE,   panelName: "Portfolio Item One",   panelActive: "one"}, 
  {id: 2, backgroundImg: TWO_BACKGROUND_IMAGE,   panelName: "Portfolio Item Two",   panelActive: "two"},
  {id: 3, backgroundImg: THREE_BACKGROUND_IMAGE, panelName: "Portfolio Item Three", panelActive: "three"},
  {id: 4, backgroundImg: FOUR_BACKGROUND_IMAGE,  panelName: "Portfolio Item Four",  panelActive: "four"},
  {id: 5, backgroundImg: FIVE_BACKGROUND_IMAGE,  panelName: "Portfolio Item Five",  panelActive: "five"},
];