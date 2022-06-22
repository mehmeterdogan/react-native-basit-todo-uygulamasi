import React from 'react'
import AutRout from './AutRout';
import MainRout from './MainRout';
import { useSelector } from 'react-redux';


const AppRout = () => {
    const autStore = useSelector(state=>state.AutReducer);
    

  return (
   <>
    {
        autStore.isLogin ?
        <MainRout />
        :
        <AutRout />
    }
    </>
   
  )
}

export default AppRout
