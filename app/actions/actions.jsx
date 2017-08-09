export const ADD_PROPERTY = 'ADD_PROPERTY';
export function addAddress(AddrObject){
  return {
    type: ADD_PROPERTY,
    addr1: AddrObject.addr1,
    addr2: AddrObject.addr2,
  }
}
