import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import AllColors from "../constants/Colors/colors"

const StudentCard = ({navigation,route}) => {



    const { DataAgain } = route.params;


    return (
        <View style={styles.Container}>
            <View style={styles.Top}>
            <Text style={{ fontSize: 27, fontWeight: "bold", color: AllColors.Color.orange }} >Your <Text style={{ fontSize: 27, fontWeight: "bold", color: AllColors.Color.blue }}>Card</Text></Text>
            </View>


            <View style={styles.Middle}>

                <View style={styles.CardView}>
                    <View style={{ backgroundColor: AllColors.Color.orange, height: 65, width: "100%", flexDirection: "row" }}>

                        <View style={{ width: "33%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                            <View style={{ height: "80%", width: "80%" }} >
                                <Image source={require("../constants/images/home.png")} style={{ width: "100%", height: "100%" }} />
                            </View>
                        </View>

                        <View style={{  width: "67%", height: "100%",alignItems:"flex-start",paddingLeft:5,justifyContent:"center" }}>

                            <Text style={[styles.NormalText,{color:"white"}]} >YOUR IDENTITY CARD</Text>
                            <Text  style={[styles.HeadingText,{color:"white"}]} >{DataAgain.address}</Text>
                            <Text  style={{color:"white",width:"99%",fontSize:11}} >Ph+ {DataAgain.phone} | Email: {DataAgain.email}</Text>

                        </View>




                    </View>



                    <View style={{ height: 190, width: "100%" }}>
                        <ImageBackground source={require("../constants/images/map1.jpg")} style={{ width: "100%", height: "100%", opacity: 0.8, flexDirection: "row" }} >



                            <View style={{ height: "100%", width: "35%", justifyContent: "center", alignItems: "center" }}>

                                <View style={{ height: "65%", width: "80%", marginBottom: "2%" }}>
                                    <Image style={{width:"100%",height:"100%"}} source={require("../constants/images/stu.jpg")} />
                                </View>
                                <View style={{ backgroundColor: "blue", height: "12%", width: "80%", marginTop: "5%" }}>
                                    <Image source={require("../constants/images/barcode.jpg")} style={{ width: "100%", height: "100%" }} />
                                </View>

                            </View>



                            <View style={{ height: "100%", width: "65%" }}>
                                <View style={{ height: "30%", width: "100%", flexDirection: "row" }} >

                                    <View style={{ height: "100%", width: "50%", alignItems: "flex-start", justifyContent: "center", paddingLeft: 20 }}>

                                        <Text style={styles.NormalText} >JB-00{DataAgain.id}</Text>
                                        <Text style={styles.HeadingText} >EMPLOYEE ID</Text>

                                    </View>

                                    <View style={{ height: "100%", width: "50%", alignItems: "flex-start", justifyContent: "center", paddingLeft: 5 }}>

                                        <Text style={styles.NormalText} >JAN 21, 2030</Text>
                                        <Text style={styles.HeadingText} >DATE OF ISSUED</Text>

                                    </View>


                                </View>

                                <View style={{ height: "40%", width: "100%" }} >

                                    <View style={{ height: "50%", width: "100%", alignItems: "flex-start", justifyContent: "center", paddingLeft: 20 }}>

                                        <Text style={[styles.NormalText, { fontSize: 18, color: AllColors.Color.orange }]} >{`${DataAgain.firstname} ${DataAgain.lastname}`}</Text>
                                        <Text style={styles.HeadingText} >NAME</Text>


                                    </View>

                                    <View style={{ flexDirection: "row", width: "100%", height: "50%" }}>
                                        <View style={{ height: "100%", width: "50%", alignItems: "flex-start", justifyContent: "center", paddingLeft: 20 }}>

                                            <Text style={[styles.NormalText, { fontSize: 13 }]} >{DataAgain.dob}</Text>
                                            <Text style={styles.HeadingText} >DOB</Text>

                                        </View>


                                        <View style={{ height: "100%", width: "50%", alignItems: "flex-start", justifyContent: "center", paddingLeft: 25 }}>

                                            <Text style={[styles.NormalText, { fontSize: 13 }]} >{DataAgain.nationality}</Text>
                                            <Text style={styles.HeadingText} >NATIONALITY</Text>

                                        </View>

                                    </View>



                                </View>






                                <View style={{ height: "30%", width: "100%", alignItems: "flex-start", paddingLeft: 20, justifyContent: "center" }} >
                                    <Text style={[styles.HeadingText, { fontSize: 13 }]} >{DataAgain.address}</Text>
                                    <Text style={styles.HeadingText} >City, USA 786758</Text>
                                    <Text style={styles.HeadingText} >ADDRESS</Text>
                                </View>
                            </View>


                        </ImageBackground>
                    </View>

                    <View style={{ backgroundColor: AllColors.Color.orange, height: 10, width: "100%" }}>

                    </View>

                </View>



            </View>




            <View style={styles.Bottom}></View>
        </View>
    )
}


export default StudentCard


const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    Top: {
        height: "33%",
        width: "100%",
        // backgroundColor:"red"
        justifyContent:"center",
        alignItems:"center"
    },
    Middle: {
        height: "33%",
        width: "100%",
        // backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center"
    },
    CardView: {
        height: "98%",
        width: "95%",
        backgroundColor: "grey",
        borderRadius: 5
    },
    HeadingText: {
        fontSize: 12,
        // fontWeight:"bold",
        textAlign: "center"
    },
    NormalText: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center"
    },
    Bottom: {
        height: "33%",
        width: "100%",
        // backgroundColor:"red"
    }
})