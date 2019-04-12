import React , {Component}from 'react';
import  s from './Datas/styles';
import colorData from './Datas/colors'

import Conv from './Src/Conv'

import { Text} from 'react-native';
import _ from 'lodash' 



let style = Object.assign({}, s , Conv.convColor(colorData));

RNcomp = (Comp , props)=>{
  let {cls} = props;
  let aa = {style:{...style[cls]}};
  return (
    <Comp {...props} {...aa}>{props.children}</Comp> 
  )
}

class rnClass{
  // Component = {};
  constructor(){
    
  }

  addComp(Comp){
    this[Comp.displayName] = RNcomp.bind(null,Comp);

  }


  
}  

export default (new rnClass)

// export default ;