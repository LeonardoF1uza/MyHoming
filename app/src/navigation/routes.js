import ProfileScreen from "../pages/profile";
import LoginScreen from "../pages/login";
import ListsScreen from "../pages/lists";
import DashboardScreen from "../pages/dashboard";
import CalendarScreen from "../pages/calendar";
import {
    ArrowLeft, Home2, Calendar, ClipboardText, Profile
} from "iconsax-react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {View} from "react-native"

const Tab = createBottomTabNavigator();
const DashboardStack = createStackNavigator();

const MainStack = createStackNavigator();
// const CalendarStack = createStackNavigator;
// const ListsStack = createStackNavigator;
// const ProfileStack = createStackNavigator;
// const AuthenticationStack = createStackNavigator;


// const AuthenticationStackNavigation = ({navigation}) => {
//     return(
//         <AuthenticationStack.Navigator 
//             initialRouteName='Login'
//             screenOptions={{animation: 'none'}}>
//                 <AuthenticationStack.Screen 
//                     name='Login'
//                     component={LoginScreen}
//                     options={{headerShown: false}} />

//         </AuthenticationStack.Navigator>
//     )
// }

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
                component={ProfileScreen} //TODO: CHANGE
                options={{
                    headerShown: true,
                    headerTitle: "",
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <View>
                            <ArrowLeft
                                size="24"
                                color="#333333"
                                onPress={() => navigation.navigate("HomeDashboard")}
                            />
                        </View>
                    ),
                }}
            />

            <DashboardStack.Screen
                name="Bills"
                component={ProfileScreen} //TODO: CHANGE
                options={{
                    headerShown: true,
                    headerTitle: "",
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <View>
                            <ArrowLeft
                                size="24"
                                color="#333333"
                                onPress={() =>
                                    navigation.navigate("TeamDashboard")
                                }
                            />
                        </View>
                    ),
                }}
            />
        </DashboardStack.Navigator>
    );
};

const RectangleIndicator = () => {
    return <View style={{width: 50,
        height: 3,
        backgroundColor: "#000",
        borderRadius: 5,
        top: -15,}} />;
  };
  

function Icon({ name }) {
    switch (name) {
        case "dashboard":
            return <Home2 size="26" color="#000" />;
        case "calendar":
            return <Calendar size="26" color="#000" />;
        case "lists":
            return <ClipboardText size="26" color="#000" />;
        case "profile":
            return <Profile size="26" color="#000" />;
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
                tabBarLabelStyle: {
                    position: "absolute",
                    padding: 18,
                    fontWeight: "400",
                    fontSize: 12,
                },
                tabBarIconStyle: {
                    padding: 12,
                },
                tabBarStyle: {
                    backgroundColor: "white",
                    borderTopColor: "transparent",
                    height: 90,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    borderTopColor: "#000",
                    borderTopWidth: 0,
                    position: "absolute",
                    elevation: 0,
                },
                tabStyle: {
                    paddingBottom: 5,
                    paddingTop: 5,
                },
            }}
        >
            <Tab.Screen
                name="Dashboard"
                component={DashboardStackNavigation}
                options={{
                    tabBarLabel: "Painel",
                    tabBarActiveTintColor: "#000",
                    tabBarIcon: ({ focused }) => (
                        <>
                            <View style={{ opacity: focused ? 1 : 0 }}>
                                <RectangleIndicator />
                            </View>
                            <Icon name="dashboard"/>
                        </>
                    ),
                }}
            />
            <Tab.Screen
                name="Calendar"
                component={CalendarScreen}
                options={{
                    tabBarLabel: "Presença",
                    tabBarActiveTintColor: "#000",
                    tabBarIcon: ({ focused }) => (
                        <>
                            <View style={{ opacity: focused ? 1 : 0 }}>
                                <RectangleIndicator />
                            </View>
                            <Icon name="calendar"/>
                        </>
                    ),
                }}
            />
            <Tab.Screen
                name="Lists"
                component={ListsScreen}
                options={{
                    tabBarLabel: "Listas",
                    tabBarActiveTintColor: "#000",
                    tabBarIcon: ({ focused }) => (
                        <>
                            <View style={{ opacity: focused ? 1 : 0 }}>
                                <RectangleIndicator />
                            </View>
                            <Icon name="lists"  />
                        </>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: "Perfil",
                    tabBarActiveTintColor:"#000",
                    tabBarIcon: ({ focused }) => (
                        <>
                            <View style={{ opacity: focused ? 1 : 0 }}>
                                <RectangleIndicator />
                            </View>
                            <Icon name="profile"  />
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