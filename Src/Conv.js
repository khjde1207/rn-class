import _ from 'lodash' 

class Conv{
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
      rtn[`tint-${k}`] = {tintColor : o};
      rtn[`selc-${k}`] = {selectionColor : o};
      rtn[`tdc-${k}`] = {textDecorationColor : o};
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


}


export default  (new Conv)