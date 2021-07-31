import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'


const Summary = ({ propData }) => {

    const dispatch = useDispatch()
    const navigation = useNavigation()





    return (

        <View style={{
            backgroundColor: "white",
            width: "90%",
            height: "15%",
            marginBottom: "5%",
            marginTop: 2,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 2,

        }}>

            <View style={{ width: "100%", height: "60%", justifyContent: "center", alignItems: "center" }}>
                <View style={{ width: "90%", height: "90%", flexDirection: "row" }}>
                    <View style={{ justifyContent: "center", alignItems: "center", width: "10%", height: "100%" }}>
                        <Text>{propData.id}.</Text>
                    </View>

                    <View style={{ width: "40%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                        <Text>{`${propData.StudentData.firstname} ${propData.StudentData.lastname}`}</Text>
                    </View>

                    <View style={{ width: "50%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                        <Text>{propData.StudentData.email}</Text>
                    </View>

                </View>

            </View>

            <View style={{ width: "60%", alignSelf: "center", height: "40%", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                <TouchableOpacity
                    style={{ backgroundColor: "red", width: "40%", height: "70%", justifyContent: "center", alignItems: "center" }}
                    onPress={() => {
                        navigation.navigate("Edit", { Data: propData })
                    }}
                >
                    <Text style={{ color: "white" }}>Edit</Text>
                </TouchableOpacity>







                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("ShowScreen", { Data: propData.StudentData })

                        // console.log("hai")
                    }}
                    style={{ backgroundColor: "green", width: "40%", height: "70%", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "white" }}>View</Text>
                </TouchableOpacity>
            </View>




        </View>

    )
}


export default Summary