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
let ignoreKeys =["BackAndroid", "ImageStore", "MaskedViewIOS","Slider","ListView","ViewPagerAndroid","WebView","AlertIOS","NetInfo", "SwipeableListView", "AsyncStorage"];
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
        for (k in Comp){
          try {
            if(_.indexOf(ignoreKeys , k) >= 0 ){continue;}
            c = Comp[k];
            if(isValidElementType(c)){
              if(_.isArray(Comp)){
                target[c.displayName] = RNcomp.bind(null,c);        
              }else{
                target[k] = RNcomp.bind(null,c);        
              } 
            }
          }catch (error) {}
        }
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
    return Conv.convCls(props);
  }
  get (propName){
    return Conv.get(propName);
  }


  
}  

export default (new rnClass)

// export default ;