import _ from 'lodash' 
import {clsMap ,mapCls} from './clsMap'  
import  styles from '../Datas/styles';
import colorData from '../Datas/colors'


let style ;
class Conv{
  constructor(){

    style = Object.assign({}, styles , this.convColor(colorData));

  }
  getStyle (){
    return style;
  }
  addColor(color, name){
    let v = {};  
    v[name] = color;
    style = Object.assign({}, style , this.convColor(v));    
  }
  convColor(colors){ 
    let rtn = {};
    _.forEach(colors , (o, k )=>{
      rtn[`bgc-${k}`] = {backgroundColor :o }
      rtn[`bc-${k}`] = {borderColor :o }
      rtn[`blc-${k}`] = {borderLeftColor :o }
      rtn[`btc-${k}`] = {borderTopColor :o }
      rtn[`brc-${k}`] = {borderRightColor :o }
      rtn[`bbc-${k}`] = {borderBottomColor :o }
      rtn[`bsc-${k}`] = {borderStartColor :o }
      rtn[`bec-${k}`] = {borderEndColor :o }
      rtn[`tsdoc-${k}`] = {textShadowColor : o};
      rtn[`sdoc-${k}`] = {shadowColor : o};
      rtn[`tint-${k}`] = {tintColor : o};
      rtn[`selc-${k}`] = {selectionColor : o};
      rtn[`tdc-${k}`] = {textDecoratiojnColor : o};
      rtn[`phtc-${k}`] ={placeholderTextColor : o};
      rtn[`subtc-${k}`] ={subtitleColor : o};
      rtn[`tc-${k}`] = {titleColor : o};
      rtn[`uc-${k}`] = {underlayColor:o};

      //react-native-elements 
      rtn[`chkc-${k}`] =  {checkedColor : o}
      rtn[`unchkc-${k}`] =  {uncheckedColor : o}
      rtn[`rec-${k}`] =  {reverseColor : o}
      rtn[`winbgc-${k}`] =  {windowBackgroundColor:o};
      rtn[`iconc-${k}`] =  {iconColor:o};
      rtn[`hic-${k}`] =  {highlightColor:o};
      rtn[`poc-${k}`] =  {pointerColor:o};
      rtn[`statusc-${k}`] =  {androidStatusBarColor:o};
      rtn[`phic-${k}`] = {placeholderIconColor : o}
      rtn[`seldc-${k}`] = {selectedColor : o};
      rtn[k] = {color : o};
    })  
    return rtn;
  }

  convCls(props){
    let rtn = {};
    _.forEach(props , (str, key)=>{
      let clsKey = clsMap[key];
      if(clsKey){
        rtn[clsKey] = [];
        let arr = str.split(" ")
        _.forEach(arr , function (s) {
          rtn[clsKey].push(style[s]);
        });
        props[clsKey] && rtn[clsKey].push(props[clsKey]); 
        // Object.assign(rtn , props[clsKey]);
        
      }
    });
    // console.log(rtn); 
    return rtn;
  }
  n2Cls(name){
    let rtn = this.convCls({cls : name});
    if(rtn.style.length > 1){
      return this.convCls({cls : name}).style;   
    } 
    return this.convCls({cls : name}).style[0];
  }


}


export default  (new Conv)