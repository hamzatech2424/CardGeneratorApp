import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import AllColors from "../constants/Colors/colors"
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux'


const ShowStudentData = ({navigation,route}) => {

   
const { Data } = route.params


    return (
        <View style={styles.Container}>
            <View style={styles.Top}>
            <Text style={{ fontSize: 27, fontWeight: "bold", color: AllColors.Color.orange }} >Your <Text style={{ fontSize: 27, fontWeight: "bold", color: AllColors.Color.blue }}>Details</Text></Text>
            <Text style={{ fontSize: 27, fontWeight: "bold", color: AllColors.Color.orange }} >For <Text style={{ fontSize: 27, fontWeight: "bold", color: AllColors.Color.blue }}>Student Card</Text></Text>
            </View>


            <View style={styles.Middle}>

               
                     <View style={{backgroundColor:"grey",width:"90%",height:"90%",alignItems:"center"}}>
                
                        <View style={{backgroundColor:"lightgrey",width:"95%",height:"11%",marginVertical:10,flexDirection:"row",justifyContent:"space-between"}}>
                            <View style={{width:"40%",height:"100%",justifyContent:"center",alignItems:"center"}}>
                                <Text style={{fontSize:17}} >Name:</Text>
                            </View>
                            <View style={{width:"60%",height:"100%",justifyContent:"center"}}>
                            <Text style={{fontSize:18,fontWeight:"bold"}} >{`${Data.firstname} ${Data.lastname}`}</Text>
                            </View>
                        </View>
        
        
                        <View style={{backgroundColor:"lightgrey",width:"95%",height:"11%",marginVertical:10,flexDirection:"row",justifyContent:"space-between"}}>
                            <View style={{width:"40%",height:"100%",justifyContent:"center",alignItems:"center"}}>
                                <Text style={{fontSize:17}} >Email:</Text>
                            </View>
                            <View style={{width:"60%",height:"100%",justifyContent:"center"}}>
                            <Text style={{fontSize:18,fontWeight:"bold"}} >{Data.email}</Text>
                            </View>
                        </View>
        
        
                        <View style={{backgroundColor:"lightgrey",width:"95%",height:"15%",marginVertical:10,flexDirection:"row",justifyContent:"space-between"}}>
                            <View style={{width:"40%",height:"100%",justifyContent:"center",alignItems:"center"}}>
                                <Text style={{fontSize:17}} >Address:</Text>
                            </View>
                            <View style={{width:"60%",height:"100%",justifyContent:"center"}}>
                            <Text style={{fontSize:18,fontWeight:"bold"}} >{Data.address}</Text>
                            </View>
                        </View>
        
        
                        <View style={{backgroundColor:"lightgrey",width:"95%",height:"11%",marginVertical:10,flexDirection:"row",justifyContent:"space-between"}}>
                            <View style={{width:"40%",height:"100%",justifyContent:"center",alignItems:"center"}}>
                                <Text style={{fontSize:17}} >Nationality:</Text>
                            </View>
                            <View style={{width:"60%",height:"100%",justifyContent:"center"}}>
                            <Text style={{fontSize:18,fontWeight:"bold"}} >{Data.nationality}</Text>
                            </View>
                        </View>
        
        
                        <View style={{backgroundColor:"lightgrey",width:"95%",height:"11%",marginVertical:10,flexDirection:"row",justifyContent:"space-between"}}>
                            <View style={{width:"40%",height:"100%",justifyContent:"center",alignItems:"center"}}>
                                <Text style={{fontSize:17}} >D.O.B:</Text>
                            </View>
                            <View style={{width:"60%",height:"100%",justifyContent:"center"}}>
                            <Text style={{fontSize:18,fontWeight:"bold"}} >{Data.dob}</Text>
                            </View>
                        </View>
        
                        <View style={{backgroundColor:"lightgrey",width:"95%",height:"11%",marginVertical:10,flexDirection:"row",justifyContent:"space-between"}}>
                            <View style={{width:"40%",height:"100%",justifyContent:"center",alignItems:"center"}}>
                                <Text style={{fontSize:17}} >Phone:</Text>
                            </View>
                            <View style={{width:"60%",height:"100%",justifyContent:"center"}}>
                            <Text style={{fontSize:18,fontWeight:"bold"}} >{Data.phone}</Text>
                            </View>
                        </View>
        
        
                        </View>
         
               
                

            </View>




            <View style={styles.Bottom}>
                <View style={{width:"100%",height:"40%",flexDirection:"row",justifyContent:"space-between"}}>

                <View style={[styles.ButtomOuterView,{marginLeft:20}]}>
                    <TouchableOpacity 
                    activeOpacity={0.8}
                     style={[styles.ButtonView,{justifyContent:"center",alignItems:"center",backgroundColor:AllColors.Color.orange}]}
                     onPress={()=>navigation.goBack()}
                     >
                    
                        <Text style={{color:"white",fontSize:19}} >Go Back</Text>
                      
                    </TouchableOpacity>
                </View>



                <View style={[styles.ButtomOuterView,{marginRight:20}]}>
                    <TouchableOpacity 
                    activeOpacity={0.8} 
                    style={styles.ButtonView}
                    onPress={()=>{
                        navigation.navigate("StuCardPage",{DataAgain:Data})
                    }}
                    >
                        <Text style={styles.NAmeText} >Generate Card</Text>
                        <Icon
                            name="chevron-forward"
                            size={25}
                            style={{ width: "100%", color: "white" }}
                        />
                    </TouchableOpacity>
                </View>


                </View>
            </View>
        </View>
    )
}


export default ShowStudentData


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        position: "relative"
    },
    Top: {
        height: "20%",
        width: "100%",
        // backgroundColor:"red",
        justifyContent:"center",
        alignItems:"center"
    },
    Middle: {
        height: "60%",
        width: "100%",
        // backgroundColor:"green",
        justifyContent: "center",
        alignItems: "center"
    },
    AnimationView: {
        height: "50%",
        width: "90%",
        //   backgroundColor:"white"
    },
    ButtomOuterView: {
        height: "80%",
        width: "45%",
     
        // backgroundColor:"blue",
        // marginTop: "5%",
        justifyContent: "center",
        alignItems: "center",
        // position: "absolute",
        // bottom: 95,

    },
    ButtonView: {
        height: "80%",
        width: "90%",
        backgroundColor: "green",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 30,
    },
    NAmeText: {
        paddingLeft: 18,
        color: "white",
        fontSize: 19
    },
    Bottom: {
        height: "20%",
        width: "100%",
        // backgroundColor:"red",
        justifyContent:"center",
        alignItems:"center"
    }
})