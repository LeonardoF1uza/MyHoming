import ProfileScreen from "../pages/profile";
import LoginScreen from "../pages/login";
import ListsScreen from "../pages/lists";
import DashboardScreen from "../pages/dashboard";
import CalendarScreen from "../pages/calendar";
import BillsScreen from "../pages/addBills";
import ShoppingScreen from "../pages/addShoping";

import {
    ArrowLeft, Home2, Calendar, ClipboardText, Profile
} from "iconsax-react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {View, Text} from "react-native"

const Tab = createBottomTabNavigator();
const DashboardStack = createStackNavigator();

const MainStack = createStackNavigator();

const DashboardStackNavigation = ({ navigation }) => {
    return (
        <DashboardStack.Navigator
            initialRouteName="HomeDashboard"
            screenOptions={{ animation: "none" }}
        >
            <DashboardStack.Screen
                name="HomeDashboard"
                options={{ headerShown: false }}
                component={DashboardScreen}
            ></DashboardStack.Screen>

            <DashboardStack.Screen
                name="Shopping"
                component={ShoppingScreen} //TODO: CHANGE
                options={{
                    headerShown: true,
                    headerTitle: "",
                    headerStyle: {
                        backgroundColor: "#333", // Set the background color to black
                      },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <View style={{marginLeft: 20, backgroundColor: 'transparent'}}>
                            <ArrowLeft
                                size="24"
                                color="#FFF"
                                onPress={() =>
                                    navigation.navigate("HomeDashboard")
                                }
                            />
                        </View>
                    ),
                }}
            />

            <DashboardStack.Screen
                name="Bills"
                component={BillsScreen} 
                options={{
                    headerShown: true,
                    headerTitle: "",
                    headerStyle: {
                        backgroundColor: "#333", // Set the background color to black
                      },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <View style={{marginLeft: 20, backgroundColor: 'transparent'}}>
                            <ArrowLeft
                                size="24"
                                color="#FFF"
                                onPress={() =>
                                    navigation.navigate("HomeDashboard")
                                }
                            />
                        </View>
                    ),
                }}
            />
        </DashboardStack.Navigator>
    );
};


function Icon({ name }) {
    switch (name) {
        case "dashboard":
            return <View style={{alignItems: 'center'}}>
            <Home2 size="25" color="#DDD" />
            <Text style={{fontSize: 12, color: "#FFF"}}>Painel</Text>
            </View>;
        case "calendar":
            return <View style={{alignItems: 'center'}}>
            <Calendar size="25" color="#DDD" />
            <Text style={{fontSize: 12, color: "#FFF"}}>Ausência</Text>
            </View>;
        case "lists":
            return <View style={{alignItems: 'center'}}>
            <ClipboardText size="25" color="#DDD" />
            <Text style={{fontSize: 12, color: "#FFF"}}>Listas</Text>
            </View>;
        case "profile":
            return <View style={{alignItems: 'center'}}>
            <Profile size="25" color="#DDD"  />
            <Text style={{fontSize: 12, color: "#FFF"}}>Perfil</Text>
            </View>;
        default:
            return null;
    }
}

const TabRoutes = ({}) => {
    return (
        <Tab.Navigator
            initialRouteName="Dashboard"
            screenOptions={{
                headerShown: false,
                tabBarLabelPosition: "below-icon",
                tabBarIconStyle: {
                    padding: 10,
                },
                tabBarStyle: {
                    backgroundColor: "#222",
                    borderTopLeftRadius: 50,
                    borderBottomRightRadius: 50,
                    borderTopRightRadius: 50,
                    borderBottomLeftRadius: 50,
                    borderTopWidth: 0,
                    padding: 20,
                    margin: 20,
                    height: 60,
                    position: "absolute",
                    elevation: 0,
                    opacity: 0.8,
                },
            }}
        >
            <Tab.Screen
                name="Dashboard"
                component={DashboardStackNavigation}
                options={{
                    tabBarLabel: "Painel",
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#CCC",
                    tabBarIcon: ({ focused }) => (
                        <>
                            <View style={{ opacity: focused ? 1 : 0.5 }}>
                            <Icon name="dashboard"/>
                                
                            </View>
                        </>
                    ),
                }}
            />
            <Tab.Screen
                name="Calendar"
                component={CalendarScreen}
                options={{
                    tabBarLabel: "Ausência",
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#DDD",
                    tabBarIcon: ({ focused }) => (
                        <>
                            <View style={{ opacity: focused ? 1 : 0.5 }}>
                            <Icon name="calendar"/>
                            </View>
                        </>
                    ),
                }}
            />
            <Tab.Screen
                name="Lists"
                component={ListsScreen}
                options={{
                    tabBarLabel: "Listas",
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#DDD",
                    tabBarIcon: ({ focused }) => (
                        <>
                            <View style={{ opacity: focused ? 1 : 0.5 }}>
                            <Icon name="lists"  />

                            </View>
                        </>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: "Perfil",
                    tabBarShowLabel: false,
                    tabBarActiveTintColor:"#DDD",
                    tabBarIcon: ({ focused }) => (
                        <>
                            <View style={{ opacity: focused ? 1 : 0.5 }}>
                            <Icon name="profile"  />
                            </View>
                        </>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const MainStackNavigation = () => {
    return (
      <MainStack.Navigator>
      
        <MainStack.Screen
          name="TabRoutes"
          component={TabRoutes}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    );
  };

  export default MainStackNavigation;