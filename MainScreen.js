import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { View,ScrollView, ImageBackground, Dimensions, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import { Button,FormControl, Input, NativeBaseProvider} from 'native-base'
import { todo } from './todo';


const MainScreen = ({navigation}) => {


    const [name,setName]= useState(''); 

    const onSubmit = (e) => {
       navigation.navigate('Todo List',{paramKey:name})
    }
    console.log(name)



    return (
        <NativeBaseProvider>

        <ScrollView style={{flex:1,backgroundColor:'#fff'}} showsVerticalScrollIndicator={false}>
            <ImageBackground
             source={require('./Images/backgroundImage.jpg')}
             style={{height:Dimensions.get('window').height / 2.5}}
            >
                <View style={styles.brandView}>
                    
                    <Text>
                      <Icon name='clipboard' color={'#fff'} size={100} />
                    </Text>
                    <Text style={styles.brandViewText}>TODO APP</Text>
                </View>
            </ImageBackground>
            <View style={styles.bottomView}>
                <View style={{padding:40}}>
                    <Text style={{color:'#4632A1',fontSize:19}}>Welcome To Todo App</Text>
                    <View style={{marginTop:50}}>
                        <FormControl style={{borderColor:'#4632A1'}}>
                            <FormControl.Label>Username</FormControl.Label>
                            <Input value={name} onChangeText={(e) => setName(e)} variant="underlined"  placeholder="Enter your name"  />
                        </FormControl>
                    </View>
                    <View style={{height:100,justifyContent:'center',alignItems:'center'}}>
                        <Button onPress={(e) => onSubmit(e)} variant={'outline'} style={styles.Btn}>
                            <Text style={{color:'#3A208E'}}>Click here</Text>
                        </Button>
                        
                        
                    </View>
                </View>
            </View>

        </ScrollView>
        </NativeBaseProvider>

    );
};

export default MainScreen;

const styles = StyleSheet.create({
   brandView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
   }, 
   brandViewText:{
       color:'#fff',
       fontSize: 35,
       fontWeight:'bold',
       textTransform:'uppercase'
   },
   bottomView:{
        flex:1.5,
        backgroundColor:'#fff',
        bottom:60,
        borderTopStartRadius:60,
        borderTopEndRadius:60
   },
   Btn:{
    alignSelf:'center',
    borderColor:'#3A208E' ,
    width: Dimensions.get('window').width / 2,
    justifyContent:'center'
   }

   
});
