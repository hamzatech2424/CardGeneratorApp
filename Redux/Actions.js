export const AddToArray = (FormData,id) => {

    return {
      type:"ADD_TO_ARRAY",
      payload:{
        StudentData:FormData,
        // autoIncreid:new Date().getTime().toString(), 
        autoIncreid:id
      }
    }
}



// export const EditStudentData = (fname,lname,address,email,nationality,phone,dob,id) => {

//   return {
//     type:"EDIT_STUDENT_DATA",
//     payload:{
//        firNAme:fname,
//        lasName:lname,
//        add:address,
//        ema:email,
//        nat:nationality,
//        pho:phone,
//        dateofBirth:dob,
//       StudentkiarrayMaeId:id
//     }
//   }
// }



export const EditStudentData = (FormData,id) => {

  return {
    type:"EDIT_STUDENT_DATA",
    payload:{
       UpdatedData:FormData,
      StudentkiarrayMaeId:id
    }
  }
}


