import React , {Component}from 'react';
import Conv from './Src/Conv'

import _ from 'lodash' 
import { isValidElementType  } from "react-is";



RNcomp = (Comp , props)=>{

  let stylesObj = Conv.convCls(props);

  return (
    <Comp {...props} {...stylesObj} >{props.children}</Comp> 
  )
}

class rnClass{
  // Component = {};
  
  constructor(){
    this.Conv = Conv; 
  }
  
  addComp(Comp , asName){
    
    let target =  this;
    if(asName){
      !target[asName]  && (target[asName] = {}); 
      target = target[asName];
      
    } 
    try {
      // console.log(Comp); 
      if(!isValidElementType(Comp)){
        _.forEach(Comp,function(c , k){
          if(isValidElementType(c)){
            if(_.isArray(Comp)){
              target[c.displayName] = RNcomp.bind(null,c);        
            }else{
              target[k] = RNcomp.bind(null,c);        
            } 
          }
        })
      }else{
          if(asName){
            this[asName]  = RNcomp.bind(null,Comp);
          }else{
            target[Comp.displayName] = RNcomp.bind(null,Comp);
            
          }
      }
    } catch (error) {
      console.log(error);
    }
    // console.log(this[asName], "등록 >>>>>>>>>>> " , asName); 
    // if(asName){
      //   console.log(asName); 
    //   console.log(Object.keys(this[asName]) );    
    // }
      
    // console.log(this);       
    
  }
  cls (props){
    return Conv.convCls(props);;
  }


  
}  

export default (new rnClass)

// export default ;