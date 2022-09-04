import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeBaseProvider,Image, VStack, Heading,Input,Box, Divider, ScrollView } from 'native-base'
import * as Yup from 'yup'
import { Formik } from 'formik'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Signup = ({navigation}) => {

    const signupValidation = Yup.object().shape({
        name:Yup.string().required("Name is Required"),
        email: Yup.string().required("Name is Required"),
        password:Yup.string().required().min(6, "your password must be >= 6 length")
    })

    const signup = async (email,password,name)=>{
        try {
            const userSignup = await auth().createUserWithEmailAndPassword(email,password);
            Alert.alert('User account created & signed in!');
            console.log(userSignup.user.uid);
            firestore()
            .collection('users')
            .doc(userSignup.user.uid)
            .set({
                name: name,
                age: 30,
            })
        } catch (error) {
                if (error.code === 'auth/email-already-in-use') {
                Alert.alert('That email address is already in use!');
                }
                if (error.code === 'auth/invalid-email') {
                    Alert.alert('That email address is invalid!');
                  }
        }
     

    }
  return (
    <View style={{backgroundColor:'black',flex:1}}>
    <NativeBaseProvider>
        
        <VStack style={{flex:1,alignItems:'center',top:180,padding:20}}>
             <Image source={require('../Image/logo.png')} alt='logo' style={{height:55,width:'44%'}} />
       
            <Formik 
            initialValues={{
                name:'',
                email:'',
                password:''
            }}
            onSubmit={(values)=>signup(values.email,values.password,values.name)}
            validationSchema={signupValidation}
            validateOnMount={true}
            >
          
                {
                    ({handleChange,handleBlur,values,handleSubmit,isValid})=>(
                        <VStack space={4} style={{marginTop:30}}>
                        <Input placeholder="Full Name" pl={4} color='white' fontSize='15px'
                        w="100%" bgColor='gray.800' borderWidth={0} height={50}
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                         />      
       
                       <Input placeholder="Phone number,email or username" pl={4} color='white' fontSize='15px'
                        w="100%" bgColor='gray.800' borderWidth={0} height={50} 
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        />      
       
                       <Input placeholder="Password" pl={4} w="100%"  color='white' fontSize='15px' bgColor='gray.800'
                        borderWidth={0} height={50}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        /> 
       
                       <Pressable  onPress={handleSubmit} disabled={!isValid} style={styles.button(isValid)}>
                           <Heading color='white' fontSize={15} fontWeight='500'>Signup</Heading>
                       </Pressable>    
                   </VStack>
                    )
                }
               
            </Formik>
            
            <VStack mt={5}>
                <Heading  textAlign='center' fontSize={14} color='gray.500' fontWeight='400'>Have an account? 
                <Heading color='white' textAlign='center' fontSize={14} fontWeight='600' onPress={()=>navigation.navigate('Login')}> Login.</Heading></Heading>
            </VStack>
            </VStack>
      
           
    </NativeBaseProvider>
</View>
  )
}

export default Signup

const styles = StyleSheet.create({
    button:(isValid)=>(
       { alignItems:'center',
       backgroundColor: isValid ? "#0095f6" : "#0095f64d",
       padding:10,
    }
    )
})