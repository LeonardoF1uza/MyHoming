import React from 'react';
import { View, Text } from "react-native";

import {
    MoneyRecive, ShoppingCart, ArrowRight, Add,DocumentText
} from "iconsax-react-native";


import { styles } from "./../../styles/css_light_mode.js";


function Icon({ name }) {
    switch (name) {
        case "bills":
            return <DocumentText size="25" color="#000" />;
        case "shopping":
            return <ShoppingCart size="25" color="#000" />;
        case "money":
            return <MoneyRecive size="25" color="#000" />;
        case "close":
            return <Add size="25" color="#000" style={{transform: [{ rotate: '45deg' }] }}/>
        default:
            return null;
    }
}

// ---- PRIMARY BUTTONS ----
export const PrimaryButton = ({ text, color, type }) => {
    return (
        <View style={[styles.primaryButton, { backgroundColor: color }]}>
            <Icon name={type} />
            <Text style={styles.primaryButtonText}>{text}</Text>
        </View>
    )
}