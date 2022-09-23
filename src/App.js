import React from 'react';
import "./App.css";
import UseRefHook from './components/UseRefHook';
import UseStateHook from './components/UseStateHook';
import HookUseState from './components/HookUseState';
import HookUseMemo from './components/HookUseMemo';
import HookUseEffect from './components/HookUseEffect'

function App() {

  return (
    <>
    {/* <UseStateHook/>
    <UseRefHook/>
    <HookUseState/> 
    <HookUseEffect/>*/}
    <HookUseMemo/>
    
    </>
  );
}

export default App;
