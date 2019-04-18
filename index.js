import React , {Component}from 'react';
import Conv from './Src/Conv'

import _ from 'lodash' 
import { isValidElementType  } from "react-is";



RNcomp = (Comp , props)=>{
  // let {cls} = props;
  let stylesObj = Conv.convCls(props);
  // let arr = cls.split(",")
  
  // let aa = {style:[{...((clsStr)=>{
    
  //   var arr = clsStr.split(" ");
  //   var rtnArr = [];
  //   for(var i = 0 ; i <arr.length ; i++){
  //     rtnArr.push(style[arr[i]] ) 
  //   }
  //   return rtnArr;
  //   // // console.log(style);
  //   // console.log(rtnArr);

  //   // for()
  //   //  var s = _.map(arr , (str)=>{
  //   //   return {...style[str]} 
  //   // });
  // })(cls)}]};
  // console.log(style["f1"])
  return (
    <Comp {...props} {...stylesObj} >{props.children}</Comp> 
  )
}

class rnClass{
  // Component = {};
  constructor(){
    
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
        if(isValidElementType(Comp)){
          target[Comp.displayName] = RNcomp.bind(null,Comp);
        }
      }
    } catch (error) {
      console.log(error);
    }
    // if(asName){
    //   console.log(asName); 
    //   console.log(Object.keys(this[asName]) );    
    // }
      
    // console.log(this);       
    
  }


  
}  

export default (new rnClass)

// export default ;