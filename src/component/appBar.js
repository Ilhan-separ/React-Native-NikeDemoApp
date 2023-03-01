import { Text, View,} from 'react-native';
import { normalize } from '../utils/scales.js';



const AppBar = () =>{
    return (
        <View style = {{height:"6.8%",backgroundColor:"rgba(52, 52, 52, 0.0)",width:"100%",justifyContent:"center"}}>
            <Text style = {{padding: normalize(8),fontSize:normalize(18),fontWeight:"bold"}}>Home</Text>
            <View style={{height:1,width:"100%",backgroundColor:"rgba(52, 52, 52, 0.1)"}} ></View>
        </View>
    );
}

export default AppBar