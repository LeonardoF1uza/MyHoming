import React from 'react';
import { View, Text } from "react-native";
import {
    Profile
} from "iconsax-react-native";


import * as CONST from "./../../styles/constants.js";
import { styles } from "./../../styles/css_light_mode.js";


export const Adjustments = ({ first, second, value, color1, color2 }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
            <View style={{ width: (CONST.screenWidth) / 3, flexDirection: 'row' }}>
                <Profile size="20" variant='Bold' color={color1} style={{ marginRight: 2 }} />
                <Text style={styles.cardMembersText}>{first}</Text>

            </View>
            <View style={{ width: (CONST.screenWidth) / 3, flexDirection: 'row' }}>
                <Text style={[styles.cardMembersText, { fontWeight: '400' }]}>deve<Text style={{ fontWeight: '600' }}> {value}</Text>€</Text>
            </View>
            <View style={{ width: (CONST.screenWidth) / 3, flexDirection: 'row' }}>
                <Profile size="20" variant='Bold' color={color2} style={{ marginRight: 2 }} />
                <Text style={styles.cardMembersText}>{second}</Text>
            </View>

        </View>
    )
}