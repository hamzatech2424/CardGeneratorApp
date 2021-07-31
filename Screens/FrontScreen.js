import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import LottieView from 'lottie-react-native'
import AllColors from "../constants/Colors/colors"
import Icon from 'react-native-vector-icons/Ionicons';


const FrontScreen = ({navigation}) => {


    // console.log(AllColors.Color.blue)




    return (
        <View style={styles.Container}>
            <View style={styles.Top}></View>


            <View style={styles.Middle}>

                <View style={styles.AnimationView}>
                    <LottieView source={require("../constants/images/Animation3.json")} autoPlay loop />
                </View>


                <View style={[styles.ButtomOuterView,{marginLeft:20}]}>
                    <TouchableOpacity 
                    activeOpacity={0.8} style={[styles.ButtonView,{backgroundColor:"green"}]}
                     onPress={()=> navigation.navigate("StuForm")}
                     >
                        <Text style={[styles.NAmeText,{width:"80%",textAlign:"center"}]} >Well Come</Text>
                        <Icon
                            name="chevron-forward"
                            size={25}
                            style={{ width: "100%", color: "white" }}
                        />
                    </TouchableOpacity>
                </View>


            </View>




            <View style={styles.Bottom}></View>
        </View>
    )
}


export default FrontScreen


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        position: "relative"
    },
    Top: {
        height: "10%",
        width: "100%",
        // backgroundColor:"red"
    },
    Middle: {
        height: "70%",
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
        height: "8%",
        width: "50%",
        // backgroundColor:"blue",
        marginTop: "5%",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 95,

    },
    ButtonView: {
        height: "80%",
        width: "90%",
        backgroundColor: "green",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 30
    },
    NAmeText: {
        paddingLeft: 18,
        color: "white",
        fontSize: 19
    },
    Bottom: {
        height: "20%",
        width: "100%",
        // backgroundColor:"red"
    }
})