/*
 * Description: Actions to be called for any interactiable feature
 */

 /* --- actions to be exported to reducers --- */
export const ADD_PROPERTY = 'ADD_PROPERTY';
export const ADD_STAGE = 'ADD_STAGE';
export const UPDATE_CURRENT_STAGE = 'UPDATE_CURRENT_STAGE';


/*** Action to add a new Property ***/
export function addAddress(AddrObject){
  return {
    type: ADD_PROPERTY,
    addresses:{
      addr1: AddrObject.addr1,
      addr2: AddrObject.addr2,
    }
  };
};

/*** Actions to modify the stages navigation component ***/
export function addStage(stage){
  return {
    type: ADD_STAGE,
    stage
  };
};

export function updateCurrentStage(stage){
  return {
    type: UPDATE_CURRENT_STAGE,
    stage
  };
};
