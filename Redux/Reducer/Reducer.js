
const initialState = {
    arrayOfData : []
}


const Reducer = (state = initialState, action) => {

switch(action.type) {

case "ADD_TO_ARRAY":

const {StudentData,autoIncreid} = action.payload
// console.log(StudentData)

return{
    ...state,
    arrayOfData: [
        ...state.arrayOfData,
        {
            id: autoIncreid,
            StudentData,
        }
    ]
}


case "EDIT_STUDENT_DATA":

    const {UpdatedData,StudentkiarrayMaeId} = action.payload

    // console.log(UpdatedData,StudentkiarrayMaeId,"reducersay")

    return{
        ...state,
        arrayOfData: state.arrayOfData.map(item => item.id === StudentkiarrayMaeId ?
            { ...item, StudentData:UpdatedData} 
            : item)
    }





default: return state

  }
  
}




export default Reducer