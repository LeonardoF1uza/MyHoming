import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { styles } from "./../../styles/css_light_mode.js";
import * as CONST from "./../../styles/constants.js";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import {
  Profile
} from "iconsax-react-native";


const CalendarScreen = () => {
  const currentDate = new Date().toJSON().slice(0, 10);
  const [days, setDays] = useState({
    '2023-05-14': {
      periods: [
        { color: '#4f8b59' },
        { color: '#e58756' },
        { color: '#b1e1f0' }
      ]
    },
    '2023-05-15': {
      periods: [
        { color: '#4f8b59' },
        { color: '#b1e1f0' }
      ]
    },
    '2023-05-16': {
      periods: [
        { color: '#e58756' },
        { color: '#b1e1f0' }
      ]
    },
    // '2023-05-24': {
    //   periods: [
    //     { color: '#4f8b59' },
    //     { color: '#e58756' },
    //     { color: '#b1e1f0' }
    //   ]
    // },
    // '2023-05-31': {
    //   periods: [
    //     { color: '#4f8b59' },
    //     { color: '#e58756' },
    //     { color: '#b1e1f0' }
    //   ]
    // },
    // '2023-05-17': {
    //   periods: [
    //     { color: '#4f8b59' },
    //     { color: '#e58756' },
    //     { color: '#b1e1f0' }
    //   ]
    // },
    // '2023-05-10': {
    //   periods: [
    //     { color: '#4f8b59' },
    //     { color: '#e58756' },
    //     { color: '#b1e1f0' }
    //   ]
    // },
    // '2023-05-03': {
    //   periods: [
    //     { color: '#4f8b59' },
    //     { color: '#e58756' },
    //     { color: '#b1e1f0' }
    //   ]
    // },
  });

  const handleDayPress = (day) => {
    if (days[day.dateString]) {
      let flag = true;
      for (let i = 0; i < days[day.dateString].periods.length; i++) {
        if (days[day.dateString].periods[i].color === "#c082bd") {
          flag = false;
          break;
        }
      }
      if (flag) {
        let temp = [...days[day.dateString].periods];
        temp.push({ color: '#c082bd' });
        setDays({
          ...days,
          [day.dateString]: {
            periods: temp
          }
        });
      } else {
        let temp = days[day.dateString].periods.filter(period => period.color !== '#c082bd');
        setDays({
          ...days,
          [day.dateString]: {
            periods: temp
          }
        });
      }
    } else {
      setDays({
        ...days,
        [day.dateString]: {
          periods: [{ color: '#c082bd' }]
        }
      });
    }
  };

  return (
    <SafeAreaProvider style={styles.container} >
      <StatusBar style="ligth" />
      <View >
        <Calendar
          style={styles.calendar}
          theme={{
            calendarBackground: '#222',
            dayTextColor: '#fff',
            textDisabledColor: '#555',
            monthTextColor: CONST.lightBlue,
            selectedDayTextColor: '#ffffff',
            todayTextColor: CONST.lightBlue,
            arrowColor: CONST.brownColor,
          }}
          initialDate={currentDate}
          onDayPress={handleDayPress}
          markingType={'multi-period'}
          markedDates={days}
        />
      </View>
      <View style={{ flexDirection: 'column', marginBottom: 30, marginTop: 30, marginLeft: 30, marginRight: 30 }}>
        <View style={{ flexDirection: 'row', marginBottom: 15 }}>
          <Profile size="20" variant='Bold' color='#c082bd' style={{ marginRight: 5 }} />
          <Text style={styles.cardMembersText}>Carolina Martins</Text>
        </View>
        <View style={{ flexDirection: 'row', marginBottom: 15 }}>
          <Profile size="20" variant='Bold' color='#b1e1f0' style={{ marginRight: 5 }} />
          <Text style={styles.cardMembersText}>Tiago Silva</Text>
        </View>
        <View style={{ flexDirection: 'row', marginBottom: 15 }}>
          <Profile size="20" variant='Bold' color='#4f8b59' style={{ marginRight: 5 }} />
          <Text style={styles.cardMembersText}>Sandra Antunes</Text>
        </View>
        <View style={{ flexDirection: 'row', marginBottom: 15 }}>
          <Profile size="20" variant='Bold' color='#e58756' style={{ marginRight: 5 }} />
          <Text style={styles.cardMembersText}>Gonçalo Dias</Text>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default CalendarScreen;
