import React from "react";
import {View,Text,FlatList} from 'react-native';
import series from '../../SeriesMock.json'


const SeriesPage=props=>{
return(
<View>
    <FlatList
    data={series}

renderItem={({item})=>(


    <View>
        <Text>{item.Key}-{item.title}</Text>
        </View>
)}
    
    
    />
</View>
);

}

export default SeriesPage;