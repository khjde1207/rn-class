react-native 에 스타일을 쉽게 쓸수 있게 만든 프로젝트 

react-native-responsive-screen 을 이용하여 모든 디바이스 에 동일한 style 를 사용 가능 할꺼라고 기대함. 


마진 / 패딩 옵션 설명. 


ma-30 ... ma1 .... ma30  : // {margin : -30} , {margin : 1} , {margin : 30} 너비 기준 
ma-h-30 ~ ma-h30 : {margin : -30} //스크린 높이 기준의 30% 

mb[idx] : marginBottom
me[idx] : marginEnd
mh[idx] : marginHorizontal
ml[idx] : marginLeft
mr[idx] : marginRight
ms[idx] : marginStart
mt[idx] : marginTop
mv[idx] : marginVertical

padding 옵션은 m -> p 로 변경 하면 됨. 


너비 / 높이 
w0 ~ w100 : //{width : 0} ... {width : 100}
h0 ~ h100 : //{height : 0} ... {height : 100}

h-w0 ~ h-w0 //{height : 0} ... {height : 100} //너비 기준 
w-h0 ~ w-h0 //{width : 0} ... {width : 100} //너비 기준 

너비 기준과 높이 기준이 있는 이유 : 
<View class ="w10 h-w10" > <-- 이와 같이 너비와 높이 를 동일하게 하여 정사각형 box 를 만들 수 있음. 

min-w[idx]
min-h-w[idx] : {minHeight : [idx]]} // 너비 기준 
min-w-h[idx] : {minWidth : [idx]]} // 높이 기준 

max-w[idx]
max-h[idx]

max-h-w[idx] :{maxHeight : [idx]]} // 너비 기준 
max-w-h[idx] :{maxHeight : [idx]]} // 너비 기준 

sdof : {shadowOffset : {width :, height :  }}

sdof_X_Y : {shadowOffset : {width : X, height : Y }}

위치: 
l[idx]: {left:  [idx]}
r[idx]: {right:  [idx]}
t[idx]: {top:  [idx]}
b[idx]: {bottom:  [idx]}

border : 
bw : {borderWidth : }
bb : {borderBottomWidth : }
bt : {borderTopWidth : }
be : {borderEndWidth : }
bl : {borderLeftWidth : }
br : {borderRightWidth : }
bs : {borderStartWidth : }

r-be : {borderBottomEndRadius:};
r-bl : {borderBottomLeftRadius:};
r-br : {borderBottomRightRadius:};
r-bs : {borderBottomStartRadius:};
r-te : {borderTopEndRadius:};
r-tl : {borderTopLeftRadius:};
r-tr : {borderTopRightRadius:};
r-ts : {borderTopStartRadius:};
r-b : {borderRadius:};

sdo-r  = {shadowRadius:};

flex :

flx1 ~ 10  : {flex : 1} ~ {flex : 10}
flx-1 ~ -10  : {flex : 0.1} ~ {flex : 1}

flxb : flexBasis
flxg : flexGrow
flxs : flexShrink 



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


'bfvv' : {backfaceVisibility : "visible"},
'bfvh' : {backfaceVisibility : "hidden"},

f[idx] : {fontSize : i}; 
lh[idx] : {lineHeight : i}; 

'fw-n' : {fontWeight : "normal"},
'fw-b' : {fontWeight : "bold"},
'fw-1' : {fontWeight : 100},
'fw-2' : {fontWeight : 200},
'fw-3' : {fontWeight : 300},
'fw-4' : {fontWeight : 400},
'fw-5' : {fontWeight : 500},
'fw-6' : {fontWeight : 600},
'fw-7' : {fontWeight : 700},
'fw-8' : {fontWeight : 800},
'fw-9' : {fontWeight : 900},


'tdl-n' : {textDecorationLine :"none"},
'tdl-u' : {textDecorationLine :"underline"},
'tdl-l' : {textDecorationLine :"line-through"},
'tdl-ul' : {textDecorationLine :"underline line-through"},

'of-v' : {overflow: "visible"},
'of-h' : {overflow: "hidden"},

'rsm-s' : {resizeMode : "stretch"},
'rsm-r' : {resizeMode : "repeat"},
'rsm-c' : {resizeMode : "center"},
'rsm-cov' : {resizeMode : "cover"},
'rsm-con' : {resizeMode : "contain"},

rtn[`tlsp${i}`] = {letterSpacing : wp(i)};



color
--------

bgc-[colorName] = {backgroundColor :o }
bc-[colorName] = {borderColor :o }
blc-[colorName] = {borderLeftColor :o }
btc-[colorName] = {borderTopColor :o }
brc-[colorName] = {borderRightColor :o }
bbc-[colorName] = {borderBottomColor :o }
bsc-[colorName] = {borderStartColor :o }
bec-[colorName] = {borderEndColor :o }
tsdoc-[colorName] = {textShadowColor : o};
tint-[colorName] = {tintColor : o};
colorName = {color : o};

https://github.com/khjde1207/rn-class/blob/master/Src/colors.js

Transforms