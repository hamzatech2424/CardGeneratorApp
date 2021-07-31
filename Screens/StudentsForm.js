import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, KeyboardAvoidingView } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import AllColors from "../constants/Colors/colors"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useSelector, useDispatch } from 'react-redux'
import {AddToArray} from "../Redux/Actions"

const StudentsForm = ({navigation}) => {

    const [id, setid] = useState(0)
    const [FormData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        address: "",
        nationality: "",
        dob: "",
        phone: ""
    })

    const [valfirstname, setvalfirstname] = useState(false)
    const [vallastname, setvallastname] = useState(false)
    const [valemail, setvalemail] = useState(false)
    const [valaddress, setvaladdress] = useState(false)
    const [valnationality, setvalnationality] = useState(false)
    const [valdob, setvaldob] = useState(false)
    const [valphone, setvalphone] = useState(false)

    const dispatch = useDispatch()



    const firstnameValidationFunc = () => {
        if (FormData.firstname.length > 2) {
            setvalfirstname(false)
        }
        else {
            setvalfirstname(true)
        }
    }


    const lastnameValidationFunc = () => {
        if (FormData.lastname.length > 2) {
            setvallastname(false)
        }
        else {
            setvallastname(true)
        }
    }


    const emailValidationFunc = () => {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (FormData.email.match(mailformat)) {
            setvalemail(false)
        }
        else {
            setvalemail(true)
        }
    }

    const addressValidationFunc = () => {
        if (FormData.address.length > 10) {
            setvaladdress(false)
        }
        else {
            setvaladdress(true)
        }
    }

    const nationalityValidationFunc = () => {
        if (FormData.nationality.length > 4) {
            setvalnationality(false)
        }
        else {
            setvalnationality(true)
        }
    }

    const dobValidationFunc = () => {

        let isValidDate = Date.parse(`${FormData.dob}`);

        if (isNaN(isValidDate)) {
            setvaldob(true)
        }
        else {
            setvaldob(false)
        }
    }

    const phoneValidationFunc = () => {
        let z = FormData.phone
        if (/^[0-9]+$/.test(z) && FormData.phone.length == 10) {
            setvalphone(false)
        }
        else {
            setvalphone(true)
        }
    }


    const CheckAttheProceedButton = () =>{
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(FormData.email.match(mailformat) && FormData.firstname.length > 2 && FormData.lastname.length > 2 && FormData.address.length > 10 && FormData.nationality.length > 4  ){
              setid(id + 1)
            navigation.navigate("Students", {Data:FormData})
            dispatch(AddToArray(FormData,id))
    
        }
        else if(FormData.email == "" && FormData.firstname == ""  && FormData.lastname == "" && FormData.address == "" && FormData.nationality == "" && FormData.phone == ""  && FormData.dob == "" ){
            alert("Fill all the Fields")
        }
        else {
            alert("Clear the errors first")
        }
    }




    return (
        <View style={styles.Container}>
            <View style={styles.Top}>


                <View style={{ height: "100%", width: "100%", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 27, fontWeight: "bold", color: AllColors.Color.orange }} >Registration <Text style={{ fontSize: 27, fontWeight: "bold", color: AllColors.Color.blue }}>Form</Text></Text>
                </View>
            </View>


            <KeyboardAwareScrollView contentContainerStyle={styles.Middle} >


                <View style={{ height: 85, width: "85%", flexDirection: "column", marginBottom: 10 }}>
                    <View style={{ height: 20, width: "100%" }}>
                        <Text style={{ fontSize: 18, color: "grey" }}>First Name</Text>
                    </View>
                    <View style={{ height: 50, width: "100%", justifyContent: "center" }}>
                        <TextInput
                            placeholder="Your First Name"
                            fontSize={16}
                            style={{ padding: 0, paddingLeft: 5, borderColor: "lightgrey", borderWidth: 1, height: "80%" }}
                            value={FormData.firstname}
                            onChangeText={(txt) => {
                                setFormData({ ...FormData, firstname: txt })
                                firstnameValidationFunc()
                            }}
                        />
                    </View>
                    <View style={{ height: 15, width: "100%" }}>
                        {valfirstname?
                        <Text style={{color:"red"}}>*first name must be greater than 2 letters</Text>
                        :null}
                    </View>
                </View>



                <View style={{ height: 85, width: "85%", flexDirection: "column", marginBottom: 10 }}>
                    <View style={{ height: 20, width: "100%" }}>
                        <Text style={{ fontSize: 18, color: "grey" }}>Last Name</Text>
                    </View>
                    <View style={{ height: 50, width: "100%", justifyContent: "center" }}>
                        <TextInput
                            placeholder="Your Last Name"
                            fontSize={16}
                            style={{ padding: 0, paddingLeft: 5, borderColor: "lightgrey", borderWidth: 1, height: "80%" }}
                            value={FormData.lastname}
                            onChangeText={(txt) => {
                                setFormData({ ...FormData, lastname: txt })
                                lastnameValidationFunc()
                        }}
                        />
                    </View>
                    <View style={{ height: 15, width: "100%" }}>
                        {vallastname?
                        <Text style={{color:"red"}}>*last name must be greater than 2 letters</Text>
                        :null}
                    </View>
                </View>




                <View style={{ height: 85, width: "85%", flexDirection: "column", marginBottom: 10 }}>
                    <View style={{ height: 20, width: "100%" }}>
                        <Text style={{ fontSize: 18, color: "grey" }}>Email</Text>
                    </View>
                    <View style={{ height: 50, width: "100%", justifyContent: "center" }}>
                        <TextInput
                            placeholder="Your Email"
                            fontSize={16}
                            style={{ padding: 0, paddingLeft: 5, borderColor: "lightgrey", borderWidth: 1, height: "80%" }}
                            value={FormData.email}
                            onChangeText={(txt) => { 
                                setFormData({ ...FormData, email: txt })
                                emailValidationFunc()
                        }}
                        />
                    </View>
                    <View style={{ height: 15, width: "100%" }}>
                        {valemail?
                         <Text style={{color:"red"}}>*Must be correctly formatted</Text> 
                        :null}
                       
                    </View>
                </View>



                <View style={{ height: 85, width: "85%", flexDirection: "column", marginBottom: 10 }}>
                    <View style={{ height: 20, width: "100%" }}>
                        <Text style={{ fontSize: 18, color: "grey" }}>Address</Text>
                    </View>
                    <View style={{ height: 50, width: "100%", justifyContent: "center" }}>
                        <TextInput
                            placeholder="Your Address"
                            fontSize={16}
                            style={{ padding: 0, paddingLeft: 5, borderColor: "lightgrey", borderWidth: 1, height: "80%" }}
                            value={FormData.address}
                            onChangeText={(txt) => { 
                                setFormData({ ...FormData, address: txt })
                                addressValidationFunc()
                        }}
                        />
                    </View>
                    <View style={{ height: 15, width: "100%" }}>
                        {valaddress?
                        <Text style={{color:"red"}}>*Address must be greater then 10 letters</Text>
                        :null}
                    </View>
                </View>



                <View style={{ height: 85, width: "85%", flexDirection: "column", marginBottom: 10 }}>
                    <View style={{ height: 20, width: "100%" }}>
                        <Text style={{ fontSize: 18, color: "grey" }}>Nationality</Text>
                    </View>
                    <View style={{ height: 50, width: "100%", justifyContent: "center" }}>
                        <TextInput
                            placeholder="Your Nationality"
                            fontSize={16}
                            style={{ padding: 0, paddingLeft: 5, borderColor: "lightgrey", borderWidth: 1, height: "80%" }}
                            value={FormData.nationality}
                            onChangeText={(txt) => { 
                                setFormData({ ...FormData, nationality: txt })
                                nationalityValidationFunc()
                        }}
                        />
                    </View>
                    <View style={{ height: 15, width: "100%" }}>
                    {valnationality?
                        <Text style={{color:"red"}}>*Nationality must be greter then 3 letters </Text>
                        :null}
                    </View>
                </View>




                <View style={{ height: 85, width: "85%", flexDirection: "column", marginBottom: 10 }}>
                    <View style={{ height: 20, width: "100%" }}>
                        <Text style={{ fontSize: 18, color: "grey" }}>D.O.B</Text>
                    </View>
                    <View style={{ height: 50, width: "100%", justifyContent: "center" }}>
                        <TextInput
                            placeholder="Your Date of Birth e.g mm/dd/yyyy"
                            fontSize={16}
                            style={{ padding: 0, paddingLeft: 5, borderColor: "lightgrey", borderWidth: 1, height: "80%" }}
                            value={FormData.dob}
                            onChangeText={(txt) => { 
                                setFormData({ ...FormData, dob: txt })
                                dobValidationFunc()
                        }}
                        />
                    </View>
                    <View style={{ height: 15, width: "100%" }}>
                    {valdob?
                        <Text style={{color:"red"}}>*Date of birth must be correctly formated e.g 07/03/2001 </Text>
                        :null}
                    </View>
                </View>




                <View style={{ height: 85, width: "85%", flexDirection: "column", marginBottom: 10 }}>
                    <View style={{ height: 20, width: "100%" }}>
                        <Text style={{ fontSize: 18, color: "grey" }}>Phone No</Text>
                    </View>
                    <View style={{ height: 50, width: "100%", justifyContent: "center" }}>
                        <TextInput
                            placeholder="Your Phone No"
                            fontSize={16}
                            style={{ padding: 0, paddingLeft: 5, borderColor: "lightgrey", borderWidth: 1, height: "80%" }}
                            value={FormData.phone}
                            onChangeText={(txt) => { 
                                setFormData({ ...FormData, phone: txt })
                                phoneValidationFunc()
                        }}
                        keyboardType={"numeric"}
                        />
                    </View>
                    <View style={{ height: 15, width: "100%" }}>
                    {valphone?
                        <Text style={{color:"red"}}>*Phone Number must be 11 digits long</Text>
                        :null}
                    </View>
                </View>












                <View style={styles.ButtomOuterView}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={[styles.ButtonView, { backgroundColor: AllColors.Color.orange }]}
                        onPress={() => {
                            CheckAttheProceedButton()
                        }}
                    >
                        <Text style={styles.NAmeText} >Proceed</Text>
                        <Icon
                            name="chevron-forward"
                            size={25}
                            style={{ width: "100%", color: "white", marginLeft: 5 }}
                        />
                    </TouchableOpacity>
                </View>







            </KeyboardAwareScrollView>

        </View>
    )
}


export default StudentsForm


const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    Top: {
        height: 70,
        width: "100%",
        // backgroundColor:"red",
        justifyContent: "center",
        flexDirection: "row"
    },
    Middle: {
        height: 750,
        width: "100%",
        // backgroundColor:"green",
        alignItems: "center"

    },
    ButtomOuterView: {
        height: "6%",
        width: "35%",
        // backgroundColor:"blue",
        marginTop: "5%",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 20,

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



})