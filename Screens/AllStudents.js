import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import LottieView from 'lottie-react-native'
import AllColors from "../constants/Colors/colors"
import Icon from 'react-native-vector-icons/Ionicons';
import { FadeInFromBottomAndroidSpec } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs";
import { useSelector, useDispatch } from 'react-redux'
import Summary from "./Summary";

const AllStudents = ({ navigation, route }) => {




    const ReduxSayData = useSelector((state) => state.Reducer.arrayOfData)

    console.log(ReduxSayData, "redux say data")


    return (
        <View style={styles.Container}>
            <View style={styles.Top}>
                <Text style={{ fontSize: 27, fontWeight: "bold", color: AllColors.Color.orange }} >All <Text style={{ fontSize: 27, fontWeight: "bold", color: AllColors.Color.blue }}>Students</Text></Text>

            </View>


            <View style={styles.Middle}>



               {
                   ReduxSayData.map((val,index)=>{
                         return(
                         <Summary key={index} propData={val}  />
                         )
                   })
               }







            </View>




            <View style={styles.Bottom}>
                <View style={{ width: "100%", height: "40%", flexDirection: "row", justifyContent: "center" }}>

                    <View style={[styles.ButtomOuterView, { marginLeft: 20 }]}>
                        <TouchableOpacity activeOpacity={0.8}
                         style={[styles.ButtonView, { backgroundColor: AllColors.Color.blue }]} 
                         onPress={()=>navigation.navigate("StuForm")}
                         >
        
                            <Text style={[styles.NAmeText, { width: "80%", textAlign: "center" }]} >Add More</Text>
                        </TouchableOpacity>
                    </View>



                </View>
            </View>
        </View>
    )
}


export default AllStudents


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        position: "relative"
    },
    Top: {
        height: "20%",
        width: "100%",
        // backgroundColor:"red",
        justifyContent: "center",
        alignItems: "center"
    },
    Middle: {
        height: "60%",
        width: "100%",
        // backgroundColor: "green",
        // justifyContent: "center",
        alignItems: "center"
    },
    AnimationView: {
        height: "50%",
        width: "90%",
        //   backgroundColor:"white"
    },
    ButtomOuterView: {
        height: "80%",
        width: "80%",
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
        justifyContent:"center",
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
        justifyContent: "center",
        alignItems: "center"
    }
})