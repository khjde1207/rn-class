import React , {Component , forwardRef}from 'react';
import Conv from './Src/Conv'

import _ from 'lodash' 
import { isValidElementType  } from "react-is";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


let RNcomp = (Component)=>{
  return  forwardRef((props, ref)=>{
      let stylesObj = Conv.convCls(props);
      return <Component ref={ref} {...props} {...stylesObj}>{props.children}</Component>
  })

}
let ignoreKeys =["BackAndroid", "ImageStore", "MaskedViewIOS","Slider","ListView","ViewPagerAndroid","WebView","AlertIOS","NetInfo", "SwipeableListView", "AsyncStorage"];


class rnClass{
  wp = wp;
  hp = hp;
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
            let c = Comp[k];
            
            if(isValidElementType(c)){
              if(_.isArray(Comp)){
                
                 target[c.displayName] =RNcomp(c);                 
                 
              }else{
                target[k] = RNcomp(c);        
               
              } 
            }
          }catch (error) {}
        }
      }else{
          if(asName){
            this[asName]  = RNcomp(Comp) //RNcomp.bind(null,Comp);
          }else{
            target[Comp.displayName] =RNcomp(Comp);
            
          }
      }
    } catch (error) {
      console.log(error);
    }
    
  }
  cls (props){
    return Conv.convCls(props);
  }
  n2cls (propName){
    return Conv.n2Cls(propName);
  }


  
}  
export {
  wp,hp
}
export default (new rnClass)

// export default ;
