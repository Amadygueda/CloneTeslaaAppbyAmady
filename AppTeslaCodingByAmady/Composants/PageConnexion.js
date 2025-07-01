import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button ,KeyboardAvoidingView, useWindowDimensions,ScrollView,Image,TextInput,TouchableOpacity,SafeAreaView} from 'react-native';
import { useEffect } from 'react';


export default function PageConnexion({navigation}) {
    const { width, height } = useWindowDimensions();
  return (
    <SafeAreaView  style={styles.container}>
                  <ScrollView contentContainerStyle={styles.container} >
     <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={90}>
            <Image
            source={require('../tesla.png')}
            style={{ width: width < 380 ? 120 : 150, height: 190,  marginTop:100,
                alignSelf:'center'
            }}
            />
            <View style={styles.texteLogo}><Text  style={styles.textefils}>Liez vos applications à votre Tesla en entrant votre (IDCar) personnel.</Text></View>
            <TextInput placeholder='XXX XXX XXX ' style={styles.texteentree} keyboardType='number-pad' maxLength={8}/>

               <TouchableOpacity
        title="Aller à la page D acceuil"
        onPress={() => navigation.navigate('Accueils')} style={styles.Botton}
      >
        <Text style={styles.Textecrit}>Démarrer</Text>
      </TouchableOpacity>
      
     </KeyboardAvoidingView>
    </ScrollView>
 
    </SafeAreaView>
  

  );
}

const styles = StyleSheet.create({
    containerParent:{
        flex:1,
        backgroundColor:"white"

    },
  container: {
    flex:1,
    flexGrow:1,
    backgroundColor: '#fff',

  
  },
  Botton:{
    width:200,
    backgroundColor:'black',
    height:50,
         borderRadius:15,
         alignItems:'center',
         justifyContent:'center',
         flexDirection:'row',
          alignSelf:'center',
              marginTop:40
  },
  Textecrit:{
    color:'white',
    fontSize:22,
    fontWeight:'500'
  },
  texteentree:{
    borderWidth:1,
    width:250,
    height:50,
    alignSelf:'center',
    marginTop:40,
    borderRadius:8,
    textAlign:'center',
    fontSize:18,
    borderColor:'rgba(0, 0, 0, 0.6) '

  },
  texteLogo:{
    width:240,
    height:60,
    alignSelf:'center',
    marginTop:22
  },
  textefils:{
    color:'grey',
    fontWeight:'600',
    textAlign:'center',
    fontSize:16
  }
});
