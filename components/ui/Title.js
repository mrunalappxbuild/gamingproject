import {Text , StyleSheet} from 'react-native';


//import Colors from '../../constants/colors';

function Title({children}){
   return(
   <Text style={styles.title}>{children}</Text>
   );
}

export default Title;

const styles = StyleSheet.create({
    title:{
        fontFamily:'open-sans-bold',
        fontSize:24,
        //fontWeight:'bold' ,
        color:'white',
        textAlign:'center',
        borderWidth:2,
        borderColor:'white',
        padding:12,
        marginTop:20,
        maxWidth:'80%',
        Width:300
    }
});