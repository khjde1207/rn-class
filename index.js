import React , {Component}from 'react';
import  s from './Datas/styles';
import colorData from './Datas/colors'

import Conv from './Src/Conv'

import { Text} from 'react-native';
import _ from 'lodash' 
import { isValidElementType  } from "react-is";



let style = Object.assign({}, s , Conv.convColor(colorData));

RNcomp = (Comp , props)=>{
  let {cls} = props;
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
  console.log(style["f1"])
  return (
    <Comp {...props} >{props.children}</Comp> 
  )
}

class rnClass{
  // Component = {};
  constructor(){
    
  }

  addComp(Comp){
    let self = this;
    // console.log( "]][]]" ,isValidElementType(Comp)); 
    // if(Comp.Icon){
    //   console.log(Comp.Icon.render);
    // }
    try {
      // console.log(Comp); 
      if(!isValidElementType(Comp)){
        _.forEach(Comp,function(c , k){
          if(isValidElementType(c)){
            if(_.isArray(Comp)){
              
              self[c.displayName] = RNcomp.bind(null,c);        
            }else{
              self[k] = RNcomp.bind(null,c);        
            } 
          }
        })
      }else{
        if(isValidElementType(Comp)){
          self[Comp.displayName] = RNcomp.bind(null,Comp);
        }
      }
    } catch (error) {
      console.log(error);
    }
    // console.log(this);       

  }


  
}  

export default (new rnClass)

// export default ;