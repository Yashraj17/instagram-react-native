import { View, Text } from 'react-native'
import React from 'react'
import { WithAuthNavigation, WithoutAuthNavigation } from './Navigation'
import auth from '@react-native-firebase/auth'
import { useEffect } from 'react'

const AuthNavigation = () => {
    const [isLoggedin ,setIsloggedin] = React.useState(null);
    const handleuser = (user)=>{
        user? setIsloggedin(user) : setIsloggedin(null)
    }
    useEffect(()=>{
        auth().onAuthStateChanged((user)=>handleuser(user))
        // auth().subscribe(handleuser)
    },[])
  return (
    <>
     {
         isLoggedin?  <WithAuthNavigation/> : <WithoutAuthNavigation/> 
     }
    </>
  
  )
}

export default AuthNavigation