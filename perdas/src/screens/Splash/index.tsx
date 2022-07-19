import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {Logo} from '../../components/Logo';
import {Button} from '../../components/Form/Button';
import { Separator } from './styles';


export default function Splash() {

    function handleNext() {
        console.log('próxima tela')
    }

  return (
      <>
      <View>
     <Logo/>

     <Image source={'../../assets/torneira/torneira.png'} />

      </View>
    <View style={styles.container}>
    
      <Text style={styles.paragraph}>
                Ajude a combater o desperdício de água.
      </Text>

       <Text style={styles.paragraph2}>
      Utilize o aplicativo para enviar a localização de vazamentos visíveis ou outros tipos de perdas de água. 
      </Text>
         
   <View style={styles.alinhar}>
          <Button title='Próximo' onPress={handleNext}/>   
                
   </View>

    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  paragraph: {
    margin: 12,
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  paragraph2: {
    color: 'rgba(0, 0, 0, 0.74)',
    marginTop: 2,
    margin: 24,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  logo: {
    height: 140,
    width: 110,
    marginTop: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  
  alinhar: {
    
    flexDirection: 'row',
    height: 40,
    flex:0,     
    justifyContent:'center', 
    
    }

});
