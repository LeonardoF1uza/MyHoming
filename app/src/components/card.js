import React from 'react';
import { View, Text, Image } from "react-native";
import {
    Profile
} from "iconsax-react-native";



import { styles } from "./../../styles/css_light_mode.js";


function IMG({ number }) {
    switch (number) {
        case "1":
            return <Image style={styles.imageMembers}
            source={require("./../../resources/images/inclino1.jpg")}
            resizeMode="cover"
            /> ;
        case "2":
            return <Image style={styles.imageMembers}
            source={require("./../../resources/images/inclino2.jpg")}
            resizeMode="cover"
            /> ;
        case "3":
            return <Image style={styles.imageMembers}
            source={require("./../../resources/images/inclino3.jpg")}
            resizeMode="cover"
            /> ;
        default:
            return <Image style={styles.imageMembers}
            source={require("./../../resources/images/inclino4.jpg")}
            resizeMode="cover"
            /> ;
    }
}

export const MembersCard = ({ text, image, color }) => {
    return (
        <View style={[styles.cardMembers]}>
                <IMG number={image}/>
            <View style={{ alignItems: 'center', flexDirection: 'column'}}>
                <Text style={styles.cardMembersText}>{text}</Text>
                <Profile size="20" variant='Bold' color={color} style={{marginTop: 10}}/>

            </View>
        </View>
    )
}