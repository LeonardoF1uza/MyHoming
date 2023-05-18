import React from "react";
import { Image, StyleSheet, View,Text } from "react-native";


function Balance(props){
    return(
        <View style={styles.container}>
           
            <View style={styles.valorContainer}>
                <Text style={styles.Valor}>20.00€</Text>
            </View>

            <View style={styles.pessoaContainer}>
            
                <Text style={styles.Pessoa}> Carolina Matias</Text>
                <Text> 15.00€</Text>

                <Text/>
                <Text/>

                <Text style={styles.Pessoa}> Tiago Bartolomeu</Text>
                <Text> 10.00€</Text>

                <Text/>
                <Text/>

                <Text style={styles.Pessoa}> Gonçalo Dias</Text>
                <Text> -5.00€</Text>


            </View>
            
            <TouchableNativeFeedback onPress={() => navigation.navigate('dashboard')}>

            <Image style={styles.returnIcon} source={{uri:"https://icon-library.com/images/return-icon-png/return-icon-png-3.jpg"}}></Image>
            </TouchableNativeFeedback>  
            
       
        </View>

    );
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"grey",
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    valorContainer:{
        position:"absolute",
        
        top:130,
        left:30,
        
    },
    Valor:{
        fontSize:50,
        color:"green"
        
    },
    Pessoa:{
        fontSize:30,
       
        
    },
    pessoaContainer:{
        position:"absolute",
        top:250,
        left:40,
      
    
       
    },
    returnIcon:{
        
        width:50,
        height:50,
        position:"absolute",
        top:40,
        left:30
    },

})

export default Balance;