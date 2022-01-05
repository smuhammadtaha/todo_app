import React, { useEffect, useState } from "react"
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity
} from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Input,IconButton,NativeBaseProvider} from 'native-base'
import {
    ScrollView
} from "react-native-gesture-handler";

export const todo = ({route}) => {
    const colors = {
        themeColor: '#4263ec',
        white: '#fff',
        background: '#f4f6fc',
        greyish: '#a4a4a4',
        tint: '#2b49c3'
    }

    const [task,setTask] = useState('');
    const [stamp,setStamp] = useState('');
    const [list,setList] = useState([]);
    const [index , setIndex] = useState(null);
    const [editMode,seteditMode] = useState(false);

    const Add = () =>{
        if(editMode){
            list[index] = task;
            seteditMode(false);
            setIndex(null);
            setTask('');
        }
        else{
        let tempList = [...list];
        tempList.push(task);
        setList(tempList);
        setTask('');
    }

    }

    const Edit = (i) =>{
        seteditMode(true);
        setIndex(i);
        setTask(list[i]);
    }

    const Delete = (i) => {
        const tempList = [...list];
        tempList.splice(i,1);
        setList(tempList);
    };

    useEffect(() =>{
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var hours  = new Date().getHours();
        var min = new Date().getMinutes();
        setStamp(hours + ':' + min + ' ' + date + '/' + month + '/' + year  )
    })


    return ( 
        <NativeBaseProvider>
        <View 
            style = {{
                flex: 1,
                backgroundColor: colors.themeColor
            }} 
        >
        <StatusBar barStyle = "light-content" backgroundColor = {colors.themeColor}/>
         <View style = {
            {
                backgroundColor: colors.themeColor
            }
        } >
        <View style = {
            {
                padding: 16,
                flexDirection: "row",
                justifyContent: 'space-between'
            }
        } >
            <TouchableOpacity>
            <Icon 
                name="chevron-left"
                size={30}
                style={{color:colors.white}}
                />  
            </TouchableOpacity>    

        </View> 
        <View style={{padding:16}}>
            <Text style={{color:colors.white,fontSize:30}}>
                {`Welcome \n${route.params.paramKey}`}
            </Text>
        </View>

        </View>
        <View style={{padding:20,
            flexDirection:'row',
            backgroundColor:colors.background
            }}>
            
            
        </View>
        <ScrollView style={{backgroundColor:colors.background}}>
            {list.map((e,i) => {
                return(
                    <View key={i} style={{
                        backgroundColor:colors.white,
                        flexDirection:'row',
                        marginHorizontal:16,
                        marginVertical:4,
                        borderRadius:20,
                        paddingVertical:20,
                        paddingHorizontal:24,
                        alignItems:'center',
                        justifyContent:'space-between'
                    }}>
                        <View >
                            <Text style={{fontSize:16, color:'#000'}}>{e}</Text>
                            <Text style={{color:colors.greyish}}>{stamp}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity onPress={() => Edit(i)}>
                            <Icon 
                                    name='pencil'
                                    size={30}
                                    style={{color: 'green'}}
                                    />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Delete(i)}>
                            <Icon 
                                    name='trash-can'
                                    size={30}
                                    style={{color: 'red',marginLeft:5}}
                                    />  
                            </TouchableOpacity>
                           
                                 
                        </View>
                    </View>
        
                )
            })}
        </ScrollView>

       <View style={{backgroundColor:colors.white,flexDirection:'row',justifyContent:'space-between'}}>
       <Input variant="rounded" onChangeText={e => setTask(e)} value={task} style={{width:280,margin:10}}  placeholder="Type Someting ..." />
       <IconButton style={{alignSelf:'center',margin:10}}
            colorScheme={colors.white}
            variant='ghost'
            onPress={Add}
            _icon={{
              as: Icon,
              name: "plus",
              color:colors.greyish
            }}
          />
       </View>

        </View>   
        </NativeBaseProvider>
    )
}