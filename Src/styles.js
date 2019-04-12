import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default {
  ...getMargin,



}


getMargin = ()=>{
  let rtn = {};
  for(var i = 0 ; i < 30 ; i+=0.2){
    rtn[`ma${i}`]   = {margin : wp(i)};
    rtn[`ma-w${i}`] = {margin : wp(i)};
    rtn[`ma-h${i}`] = {margin : hp(i)};
    rtn[`mb${i}`]   = {marginBottom : hp(i)};
    rtn[`me${i}`]   = {marginEnd : wp(i)};
    rtn[`mh${i}`]   = {marginHorizontal : wp(i)};
    rtn[`ml${i}`]   = {marginLeft : wp(i)};
    rtn[`mr${i}`]   = {marginRight : wp(i)};
    rtn[`ms${i}`]   = {marginStart : wp(i)};
    rtn[`mt${i}`]   = {marginTop : hp(i)};
    rtn[`mv${i}`]   = {marginVertical : hp(i)};
  }
  return rtn;
}