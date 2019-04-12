import style from './Src/styles'
import colorData from './Src/colors'
import _ from 'lodash'
loadColor  = (colors)=>{ 
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
    rtn[k] = {color : o};

    rtn[`tsdoc-${k}`] = {textShadowColor : o};
    
    rtn[`tint-${k}`] = {tintColor : o};

    
  })  
  return rtn;
};

loadColor(colorData)
export default {
  

  
}  


// export default (new rnClass);