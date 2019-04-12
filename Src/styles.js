import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


getMarginPadding = ()=>{
  let rtn = {};
  for(var i = -30 ; i <= 30 ; i += 0.2){
    let idx = Math.round(i);
    rtn[`ma${idx}`]   = {margin : wp(i)};
    rtn[`ma-w${idx}`] = {margin : wp(i)};
    rtn[`ma-h${idx}`] = {margin : hp(i)};
    rtn[`mb${idx}`]   = {marginBottom : hp(i)};
    rtn[`me${idx}`]   = {marginEnd : wp(i)};
    rtn[`mh${idx}`]   = {marginHorizontal : wp(i)};
    rtn[`ml${idx}`]   = {marginLeft : wp(i)};
    rtn[`mr${idx}`]   = {marginRight : wp(i)};
    rtn[`ms${idx}`]   = {marginStart : wp(i)};
    rtn[`mt${idx}`]   = {marginTop : hp(i)};
    rtn[`mv${idx}`]   = {marginVertical : hp(i)};

    rtn[`pa${idx}`]   = {padding : wp(i)};
    rtn[`pa-w${idx}`] = {padding : wp(i)};
    rtn[`pa-h${idx}`] = {padding : hp(i)};
    rtn[`pb${idx}`]   = {paddingBottom : hp(i)};
    rtn[`pe${idx}`]   = {paddingEnd : wp(i)};
    rtn[`ph${idx}`]   = {paddingHorizontal : wp(i)};
    rtn[`pl${idx}`]   = {paddingLeft : wp(i)};
    rtn[`pr${idx}`]   = {paddingRight : wp(i)};
    rtn[`ps${idx}`]   = {paddingStart : wp(i)};
    rtn[`pt${idx}`]   = {paddingTop : hp(i)};
    rtn[`pv${idx}`]   = {paddingVertical : hp(i)};

    rtn[`ma${idx}%`]   = {margin : `${idx}%`};
    rtn[`ma-w${idx}%`] = {margin : `${idx}%`};
    rtn[`ma-h${idx}%`] = {margin : `${idx}%`};
    rtn[`mb${idx}%`]   = {marginBottom : `${idx}%`};
    rtn[`me${idx}%`]   = {marginEnd : `${idx}%`};
    rtn[`mh${idx}%`]   = {marginHorizontal : `${idx}%`};
    rtn[`ml${idx}%`]   = {marginLeft : `${idx}%`};
    rtn[`mr${idx}%`]   = {marginRight : `${idx}%`};
    rtn[`ms${idx}%`]   = {marginStart : `${idx}%`};
    rtn[`mt${idx}%`]   = {marginTop : `${idx}%`};
    rtn[`mv${idx}%`]   = {marginVertical : `${idx}%`};

    rtn[`pa${idx}%`]   = {padding : `${idx}%`};
    rtn[`pa-w${idx}%`] = {padding : `${idx}%`};
    rtn[`pa-h${idx}%`] = {padding : `${idx}%`};
    rtn[`pb${idx}%`]   = {paddingBottom : `${idx}%`};
    rtn[`pe${idx}%`]   = {paddingEnd : `${idx}%`};
    rtn[`ph${idx}%`]   = {paddingHorizontal : `${idx}%`};
    rtn[`pl${idx}%`]   = {paddingLeft : `${idx}%`};
    rtn[`pr${idx}%`]   = {paddingRight : `${idx}%`};
    rtn[`ps${idx}%`]   = {paddingStart : `${idx}%`};
    rtn[`pt${idx}%`]   = {paddingTop : `${idx}%`};
    rtn[`pv${idx}%`]   = {paddingVertical : `${idx}%`};

    rtn[`zidx${idx}`] = {zIndex : idx}
  }
  return rtn;
}
function getSize () {
  let rtn = {};
  for(var i = 0 ; i <= 100 ; i++){
    rtn[`h${i}`] = {height : hp(i)};
    rtn[`w${i}`] = {width : wp(i)};
    rtn[`h-w${i}`] = {height : wp(i)};
    rtn[`w-h${i}`] = {width : hp(i)};


    rtn[`min-h${i}`] = {minHeight : hp(i)};
    rtn[`min-w${i}`] = {minWidth : wp(i)};
    rtn[`min-h-w${i}`] = {minHeight : wp(i)};
    rtn[`min-w-h${i}`] = {minWidth : hp(i)};

    rtn[`max-h${i}`] = {maxHeight : hp(i)};
    rtn[`max-w${i}`] = {maxWidth : wp(i)};
    rtn[`max-h-w${i}`] = {maxHeight : wp(i)};
    rtn[`max-w-h${i}`] = {maxWidth : hp(i)};

    rtn[`h${i}%`] = {height : `${i}%` };
    rtn[`w${i}%`] = {width : `${i}%` };
    rtn[`h-w${i}%`] = {height : `${i}%` };
    rtn[`w-h${i}%`] = {width : `${i}%` };

    rtn[`min-h${i}%`] = {minHeight : `${i}%` };
    rtn[`min-w${i}%`] = {minWidth : `${i}%` };
    rtn[`min-h-w${i}%`] = {minHeight : `${i}%` };
    rtn[`min-w-h${i}%`] = {minWidth : `${i}%` };

    rtn[`max-h${i}%`] = {maxHeight : `${i}%` };
    rtn[`max-w${i}%`] = {maxWidth : `${i}%` };
    rtn[`max-h-w${i}%`] = {maxHeight : `${i}%` };
    rtn[`max-w-h${i}%`] = {maxWidth : `${i}%` };

    rtn[`l${i}`] = {left : wp(i) };
    rtn[`r${i}`] = {right : wp(i) };
    rtn[`l${i*-1}`] = {left : wp(i*-1) };
    rtn[`r${i*-1}`] = {right : wp(i*-1) };

    rtn[`t${i}`] = {top : hp(i)};
    rtn[`b${i}`] = {bottom : hp(i)};
    rtn[`t${i*-1}`] = {top : hp(i*-1)};
    rtn[`b${i*-1}`] = {bottom : hp(i*-1)};


  }
  return rtn;
}
function getBorder () {
  let rtn = {};
  for(var i = 0 ; i <= 100 ; i++){
    rtn[`bw${i}`] = {borderWidth : wp(i)}
    rtn[`bb${i}`] = {borderBottomWidth : wp(i)}
    rtn[`bt${i}`] = {borderTopWidth : wp(i)}
    rtn[`be${i}`] = {borderEndWidth : wp(i)}
    rtn[`bl${i}`] = {borderLeftWidth : wp(i)}
    rtn[`br${i}`] = {borderRightWidth : wp(i)}
    rtn[`bs${i}`] = {borderStartWidth : wp(i)}
  }

  return rtn;
}

function getFlex(){
  let rtn = {};
  for(var i = 0 ; i <= 10 ; i++){
    rtn[`flx${i}`] = {flex : i};
    rtn[`flx-${i}`] = {flex : i/10};
    
    rtn[`flxb${i}`] = {flexBasis : i};
    rtn[`flxb-${i}`] = {flexBasis : i/10};

    rtn[`flxg${i}`] = {flexGrow : i};
    rtn[`flxg-${i}`] = {flexGrow : i/10};

    rtn[`flxs${i}`] = {flexShrink : i};
    rtn[`flxs-${i}`] = {flexShrink : i/10};
  }
  return rtn;
}
export default {
  ...getMarginPadding(),
  ...getSize(),
  ...getBorder(),
  ...getFlex(),
  "po-ab" : {position : "absolute"},
  "po-re" : {position : "relative"},
  "po-full" : {position : "absolute" , left : 0 , top : 0 , right : 0 , bottom : 0},

  "ac-s" : {alignContent : 'flex-start'},
  "ac-e" : {alignContent : 'flex-end'},
  "ac-c" : {alignContent : 'center'},
  "ac-t" : {alignContent : 'stretch'},
  "ac-sb" : {alignContent : 'space-between'},
  "ac-sa" : {alignContent : 'space-around'},

  "ai-s" : {alignItems : 'flex-start'},
  "ai-e" : {alignItems : 'flex-end'},
  "ai-c" : {alignItems : 'center'},
  "ai-t" : {alignItems : 'stretch'},
  "ai-b" : {alignItems : 'baseline'},
  
  "as-a" : {alignSelf : 'auto'},
  "as-s" : {alignSelf : 'flex-start'},
  "as-e" : {alignSelf : 'flex-end'},
  "as-c" : {alignSelf : 'center'},
  "as-t" : {alignSelf : 'stretch'},
  "as-b" : {alignSelf : 'baseline'},

  "dp-flx" : {display : "flex"},
  "dp-none" : {display : "none"},

  "flx-col" : {flexDirection : "row"},
  "flx-row" : {flexDirection : "column"},
  "flx-colr" : {flexDirection : "row-reverse"},
  "flx-rowr" : {flexDirection : "column-reverse"},

  "flx-w" : {flexWrap : "wrap"},
  "flx-nw" : {flexWrap : "nowrap"},

  "jc-s" : {justifyContent : 'flex-start'},
  "jc-e" : {justifyContent : 'flex-end'},
  "jc-c" : {justifyContent : 'center'},
  "jc-sb" : {justifyContent : 'space-between'},
  "jc-sa" : {justifyContent : 'space-around'},
  "jc-se" : {justifyContent : 'space-evenly'},
  

}


// layout-props 에서 아직 사용 해보지 않은 속성. 쓸일이 있을지는 모름. 
// aspectRatio
// direction
// overflow
// start
// end
