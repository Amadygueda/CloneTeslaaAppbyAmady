import React from 'react';
import { View, Text, StyleSheet ,SafeAreaView,useWindowDimensions,Platform,Image,ScrollView,TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Accueil() {
  const [ouvrir ,setOuvrir]=useState(false);
      const [ouvrir1 ,setOuvrir1]=useState(false);
    const [ouvrir2 ,setOuvrir2]=useState(false);
      const [ouvrir3 ,setOuvrir3]=useState(false);
           const [ouvrir4 ,setOuvrir4]=useState(false);

  function press(){
    setOuvrir(!ouvrir)
    console.log(ouvrir)
  }
   function press1(){
    setOuvrir1(!ouvrir1)
    console.log(ouvrir1)
  }
   function press2(){
    setOuvrir2(!ouvrir2)
    console.log(ouvrir2)
  }
    function press3(){
    setOuvrir3(!ouvrir3)
    console.log(ouvrir3)
  }
   function press4(){
    setOuvrir4(!ouvrir4)
    console.log(ouvrir4)
  }
  return (
    <SafeAreaView style={styles.container}>
<ScrollView>
  <StatusBar style='auto'/>
    
        <View style={styles.Titres}>
            <Text style={styles.texte1}>Bienvenue Amady </Text>
           <Text  style={styles.texte2}>Tesla Model X annee 2018</Text>
        </View>
       <View style={styles.Baterie}>
          <View style={styles.km}>
            <Image source={require('../assets/Images/Hearder/Batterie.png')}  />
            <Text  style={styles.textepremier}>428 Km</Text>
          </View>
          <View style={styles.km}>
             <Image source={require('../assets/Images/Hearder/bolt.png')}  />
            <Text  style={styles.textepremier}>Chargement</Text>
               <Text  style={styles.textefin}>Fini dans 12 mn</Text>
          </View>
        </View>
        <View style={styles.Btn}>
          <TouchableOpacity  style={styles.btntuch} onPress={press}>
            {ouvrir && (
                   <Image source={require('../assets/Images/BoutonFemer/1.png')}  style={styles.cadenas} />
                
             )}
              {!ouvrir && (
                  <Image source={require('../assets/Images/BoutonFemer/lock.png')}  style={styles.cadenas} /> 
             )}
             
              </TouchableOpacity>
        <View>
          {ouvrir && (
                   <Text style={styles.btnetxte}>Ouvert</Text>
                
             )}
         {!ouvrir && (
                   <Text style={styles.btnetxte}>Fermer</Text>
                
             )}
          
          </View>
          </View>
      <View style={styles.ImageMan}>
 {ouvrir && (
  <Image source={require('../assets/Images/voiture/5.png')} style={styles.voiture} />
)}

{!ouvrir && !ouvrir1 && !ouvrir2 && (
  <Image source={require('../assets/Images/voiture/1.png')} style={styles.voiture} />
)}

{ouvrir1 && (
  <Image source={require('../assets/Images/voiture/3.png')} style={styles.voiture} />
)}

{ouvrir2 && (
  <Image source={require('../assets/Images/voiture/4.png')} style={styles.voiture} />
)}
{ouvrir4 && (
  <Image source={require('../assets/Images/voiture/5.png')} style={styles.voiture} />
)}


          </View>
       <View style={styles.lescofre}>
       <View style={styles.gauche}>
            <Image source={require('../assets/Images/OptionCofre/Group 10.png')}  />
            <Text style={styles.texteCofre} >Coffre Avant</Text>
       
       </View>

       <View style={styles.Droite}>
          <Image source={require('../assets/Images/OptionCofre/Group 11.png')}  />
            <Text style={styles.texteCofre}>Coffre Arrière</Text>
       </View>
       </View>
        <View style={styles.lesBouton}>
      
             {ouvrir1 && (
                  <TouchableOpacity style={{marginLeft:0,borderWidth:1,width:60,height:40,borderRadius:5,justifyContent:'center',alignItems:'center',backgroundColor:'black'}} onPress={press1}>
                 <Text style={{color:'white'}}>Fermer</Text>
                </TouchableOpacity>
             )}
              {!ouvrir1 && (
             <TouchableOpacity style={{marginLeft:0,borderWidth:1,width:60,height:40,borderRadius:5,justifyContent:'center',alignItems:'center',backgroundColor:'white'}} onPress={press1}>
                 <Text style={styles.lesBoutonT1}>Ouvrir</Text>
                </TouchableOpacity>
             )}
          
    
          <View style={styles.lesBoutonParent2}>
            <TouchableOpacity style={styles.lesBouton2} onPress={press2}>
              <Text style={styles.lesBoutonT2}>Ouvrir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.lesBouton3} onPress={press3}>
              <Text style={styles.lesBoutonT24}>Fermer</Text>
            </TouchableOpacity>
            
            
          </View>
        </View>
        <View style={styles.find}>
         <Text style={styles.findT}>Besoin d aide pour retrouver ta voiture?</Text>
        </View>
         <View style={styles.lesBouton}>
      
         
            <TouchableOpacity style={styles.snone} onPress={press4}>
                 <Image
              source={require('../assets/Images/plusOption/Group 12.png')}
              />
              <Text>Lampe</Text>
            </TouchableOpacity>
             
            <TouchableOpacity style={styles.snone}>
               <Image
              source={require('../assets/Images/plusOption/speakerphone.png')}
              />
              <Text>Alarme</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.snone}>
        <Image
              source={require('../assets/Images/plusOption/location.png')}
              />
              <Text>Localisation</Text>
            </TouchableOpacity>
            
            
     
        </View>
        <View style={styles.teslafin}>
          <View style={styles.teslafinGauche}>
             <Image source={require('../assets/Images/AvantFoter/propeller.png')}  />
             <Text style={styles.teslafinGaucheTexete}> Mode Sentinelle</Text>
          </View>
         <View style={styles.teslafindroite}>
             <TouchableOpacity style={styles.teslafinDroiteBouton}>
             <Text style={styles.teslafinDroiteTexete1}>Allumer</Text>
             </TouchableOpacity>
                <TouchableOpacity style={styles.teslafinDroiteBouton}>
             <Text style={styles.teslafinDroiteTexete2}>Eteindre</Text>
             </TouchableOpacity>
         </View>
        </View>
        <View style={styles.teslafin}>
          <View style={styles.teslafinGauche}>
             <Image source={require('../assets/Images/AvantFoter/user.png')}  />
             <Text style={styles.teslafinGaucheTexete}> Mode Voiturier</Text>
          </View>
         <View style={styles.teslafindroite}>
             <TouchableOpacity style={styles.teslafinDroiteBouton}>
             <Text style={styles.teslafinDroiteTexete12}>Allumer</Text>
             </TouchableOpacity>
                <TouchableOpacity style={styles.teslafinDroiteBouton}>
             <Text style={styles.teslafinDroiteTexete21}>Eteindre</Text>
             </TouchableOpacity>
         </View>
        </View>

        <View style={styles.teslafin}>
          <View style={styles.teslafinGauche}>
             <Image source={require('../assets/Images/AvantFoter/power.png')}  />
             <Text style={styles.teslafinGaucheTexete}> Demareur a distance</Text>
          </View>
         <View style={styles.teslafindroite}>
             <TouchableOpacity style={styles.teslafinDroiteBoutonz}>
             <Text style={styles.teslafinDroiteTexete123}>Allumer</Text>
             </TouchableOpacity>
                
         </View>
        </View>
    

</ScrollView>
   <View style={styles.navigation}>
            <View  style={styles.navigation1}>
              <Image
             source={require('../assets/Images/footers/toggle-right.png')}
             style={{alignSelf:'center'}}
            />
             <Text>Controles</Text>
            </View>

            <View  style={styles.navigation11}>
              <Image
             source={require('../assets/Images/footers/Vector.png')
              
             }
              style={{alignSelf:'center'}}
            />
              <Text style={{color:"rgb(152,164,188)" ,fontSize:15,alignSelf:'center',textAlign:'center'}}>Recharge</Text>
            </View >

            <View  style={styles.navigation1}>
              <Image
             source={require('../assets/Images/footers/propeller (1).png')}
            style={{alignSelf:'center'}}
            />
                 <Text style={{color:"rgb(152,164,188)" ,fontSize:15,alignSelf:'center',textAlign:'center'}}>Climatiseur</Text>
            </View >

            <View  style={styles.navigation10}>
              <Image
             source={require('../assets/Images/footers/loc.png')}
            style={{alignSelf:'center'}}
            />
                 <Text style={{color:"rgb(152,164,188)" ,fontSize:15,alignSelf:'center',textAlign:'center'}}>Localisation</Text>
            </View >

            <View  style={styles.navigation1}>
              <Image
             source={require('../assets/Images/footers/settings.png')}
             style={{alignSelf:'center'}}
            />
              <Text style={{color:"rgb(152,164,188)" ,fontSize:15,alignSelf:'center',textAlign:'center'}}>Reglages</Text>
            </View >

   </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:Platform.select({
      ios:-30,
      android:45
    })
  },
  Titres:{
    alignSelf:'center',
    marginTop:20
  },
  texte1:{
    fontSize:30,
    fontWeight:'500'
  },
  texte2:{
    color:'grey',
    fontSize:15,
    textAlign:'center',
    marginTop:10

  },
  Baterie:{
    alignSelf:'center',
    flexDirection:'row',
    marginTop:25,
    width:320,
    justifyContent:'space-between'
  },
  km:{
    flexDirection:"row",
    justifyContent:'center',
    alignItems:"center"
  },
  textepremier:{
    marginLeft:5,
    fontWeight:"700",
    fontSize:13
  },
  textefin:{
    color:'grey',
    fontWeight:'600',
    marginLeft:5
  },
  Btn:{
    alignSelf:'center',
    marginTop:25,
    justifyContent:'center',
    alignItems:'center'
  },
  btntuch:{
    backgroundColor:'black',
    width:50,
    height:50,
    borderRadius:100,
    alignItems:'center',justifyContent:'center'
  },
  cadenas:{
    height:Platform.select({
      ios:24,
      android:28
    }),
    borderWidth:1,
    width:25
  },
  btnetxte:{
    marginTop:13,
    fontSize:15,
    fontWeight:'600'
  },
ImageMan: {
  alignSelf: 'center',
  height: 200,
  width: 360,
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  position: 'relative',
},
  voiture: {
  position: 'absolute',
  height:Platform.select({
  ios:  140,
  android: 190
}),
  width:Platform.select({
  ios:290,
  android: 360
})
},
  voiture5:{
    position:'absolute',
    height:190,
    width:360,
    borderWidth:1,
    zIndex:10
  },
  lescofre:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"center",
  },
  gauche:{
    flexDirection:'row',
    marginLeft:20,
    alignContent:"center",
    justifyContent:'center'
  },
   Droite:{
    flexDirection:'row',
    marginRight:20,
     alignContent:"center",
    justifyContent:'center'
  },
  texteCofre:{
    marginLeft:10,
    fontWeight:'500',
    marginTop:5,
    fontSize:15
  },
  lesBouton:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:15,
   borderBottomWidth:1,
   paddingBottom:15,
   marginLeft:20,
    marginRight:20
  },
  lesBouton2:{

  },
  lesBoutonParent2:{
        flexDirection:"row",
 
        width:125,
            borderRadius:5,
                height:28,
                justifyContent:"center",
                alignItems:"center",
                marginTop:5


  },
  lesBouton11:{
    marginLeft:19,
    width:60,
    height:40,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
  },
  lesBouton3:{
    borderWidth:1,
    width:"50%",
        height:40,
      backgroundColor:"black",
        justifyContent:"center",
                alignItems:"center",
                borderTopRightRadius:5,
                borderBottomRightRadius:5

  },
  lesBouton2:{
     borderWidth:1,
    width:"50%",
    height:40,
    justifyContent:"center",
                alignItems:"center",
                borderTopLeftRadius:5,
                borderBottomLeftRadius:5
   
  },
  lesBoutonT24:{
    color:'white'
  },
  find:{
    alignSelf:'center',
    marginTop:12,
  },
   findT:{
    color:'grey'
  },
  snone:{
    flexDirection:'row',
    borderWidth:1,
    height:38,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    paddingLeft:5,
     paddingRight:5
  },
navigation:{
  flexDirection:'row',
  justifyContent:'space-between',
    marginLeft:8,
        marginRight:8,

},
navigation10:{
  marginTop:6
},
navigation11:{
  marginTop:4
},
lesBoutonParent200:{
  alignSelf:'flex-end',
  flexDirection:"row",
  width:111,
  marginRight:15,
  marginTop:10,

},
teslafin:{
  flexDirection:'row',
  justifyContent:'space-between',
  marginTop:7,
  marginLeft:15,
    marginRight:15
},
teslafinGauche:{
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center'
},
teslafinGaucheTexete:{
  fontSize:16,
  fontWeight:"500",
  marginLeft:5
},
teslafindroite:{
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  height:38,
  marginRight:5,
  width:120
},
teslafinDroiteTexete1:{
  color:'white',
  backgroundColor:'black',
  height:"100%",
  width:60,
  justifyContent:'center',
  alignItems:'center',
  textAlign:'center',
  flexDirection:'row',
  borderTopLeftRadius:8,
  borderBottomLeftRadius:8,
  paddingTop:8
},
teslafinDroiteTexete2:{
  color:'black',
  height:"100%",
  width:60,
  justifyContent:'center',
  alignItems:'center',
  textAlign:'center',
  flexDirection:'row',
  paddingTop:8,
 borderBottomRightRadius:8,
 borderWidth:1,
  borderTopRightRadius:8
},
teslafinDroiteTexete12:{
   color:'black',
  height:"100%",
  width:60,
  justifyContent:'center',
  alignItems:'center',
  textAlign:'center',
  flexDirection:'row',
  borderTopLeftRadius:8,
  borderBottomLeftRadius:8,
  paddingTop:8,
  borderWidth:1

},
teslafinDroiteTexete21:{
  color:'white',
  height:"100%",
  width:60,
  justifyContent:'center',
  alignItems:'center',
  textAlign:'center',
  flexDirection:'row',
  paddingTop:8,
 borderBottomRightRadius:8,
 borderWidth:1,
  borderTopRightRadius:8,
  backgroundColor:'black'

},
  
teslafinDroiteBoutonz:{
  width:101,
 height:38,
 borderRadius:8,
 backgroundColor:"#dc2935",
 justifyContent:'center',
 alignItems:'center',
 flexDirection:"row"

},
teslafinDroiteTexete123:{
  color:'white',
  fontWeight:'600'
}

});