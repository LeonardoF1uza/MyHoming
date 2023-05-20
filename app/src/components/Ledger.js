import React from "react";
import { StyleSheet, View,Text,Alert} from "react-native";
import { styles } from "../../styles/css_light_mode.js";
import { FontAwesome } from 'react-native-vector-icons';

function Ledger(props){
    return(
        <View style={styles.container2}>

           
            <View style={styles.tasksWrapper}>
                    <View style={styles.header}>
                        <Text style={styles.sectionTitle}>Acertos</Text>
                        <FontAwesome name='money' size={24} color='black' marginTop={5}/>
                    </View>

                        <View style={sty.valorContainer}>
                            <Text style={sty.Balanco}>   
                                <Text>Receber:</Text>
                                <Text style={sty.ValorPositivo}>25.00</Text>
                                <Text>€</Text>
                            </Text> 
                            <Text style={sty.Balanco}>   
                                <Text>Pagar:</Text>
                                <Text style={sty.ValorNegativo}>-5.00</Text>
                                <Text>€</Text>
                            </Text> 
                        </View>
                        <View style={sty.pessoaContainer}>
                            <Text style={sty.Pessoa}>
                                <FontAwesome.Button name="check-square" backgroundColor="#3b5998" onPress={() => Alert.alert('Resolved')}>
                                </FontAwesome.Button>
                                <Text> Carolina Matias</Text>
                                <Text style={sty.ValorPositivo} >   15.00€</Text>
                            </Text>
                            
                            <Text/>
                            <Text/>
                            
                            <Text style={sty.Pessoa}>
                                <FontAwesome.Button name="check-square" backgroundColor="#3b5998" onPress={() => Alert.alert('Resolved')}>
                                </FontAwesome.Button>
                                <Text> Tiago Bartolomeu</Text>
                                <Text style={sty.ValorPositivo} >   10.00€</Text>
                            </Text>
                            
                            <Text/>
                            <Text/>
                        
                            <Text style={sty.Pessoa}>
                                <FontAwesome.Button name="check-square" backgroundColor="#3b5998" onPress={() => Alert.alert('Resolved')}>
                                </FontAwesome.Button>
                                <Text> Gonçalo Dias</Text>
                                <Text style={sty.ValorNegativo} >   -5.00€</Text>
                            </Text>
                         </View>
            </View>
            
        </View>

    );
}

const sty=StyleSheet.create({
   
    valorContainer:{
        position:"absolute",
        
        top:140,
        left:30,
        
    },
    Balanco:{
        fontSize:20,


    },
    ValorPositivo:{
        
        color:"green"
        
    },
    ValorNegativo:{
        
        color:"red"
        
    },
    Pessoa:{
        fontSize:20,
       
        
    },
    pessoaContainer:{
        position:"absolute",
        top:250,
        left:30,
      
    
       
    },
    returnIcon:{
        
        width:50,
        height:50,
        position:"absolute",
        top:40,
        left:30
    },

})

export default Ledger;