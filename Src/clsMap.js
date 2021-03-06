

let clsMap = {
  //react-native Component 
	cls : "style",
	cccls: "contentContainerStyle",
	incls: "indicatorStyle",
	colcls: "columnWrapperStyle",
	imgcls: "imageStyle",
	prcls : "presentationStyle",
	itemcls : "itemStyle",


  //react-native-elements 
	acls: "avatarStyle",
	bgicls: "backgroundImageStyle",
	badgecls: "badgeStyle",
	btncls: "buttonStyle",
	ccls: "containerStyle",
	dscls: "disabledSelectedStyle",
	dstcls: "disabledSelectedTextStyle",
	dcls: "disabledStyle",
	dtcls: "disabledTitleStyle",
	ecls: "errorStyle",
	fstcls: "featuredSubtitleStyle",
	ftcls: "featuredTitleStyle",
	fcls: "fontStyle",
	iccls: "iconContainerStyle",
	icls: "iconStyle",
	iwcls: "imageWrapperStyle",
	ibcls: "innerBorderStyle",
	
	lcls: "labelStyle",
	lccls: "leftContainerStyle",
	liccls: "leftIconContainerStyle",
	occls: "overlayContainerStyle",
	ocls: "overlayStyle",
	pcls: "placeholderStyle",
	rccls: "rightContainerStyle",
	rcccls: "rightContentContainerStyle",
	riccls: "rightIconContainerStyle",
	rstcls: "rightSubtitleStyle",
	rtcls: "rightTitleStyle",
	sbcls: "selectedButtonStyle",
	stcls: "selectedTextStyle",
	tbcls: "thumbStyle",
	tcls: "titleStyle",
	tkcls: "trackStyle",
	wcls: "wrapperStyle",
	pccls: "PlaceholderContent",

	centerccls : "centerContainerStyle",
	leftccls : "leftContainerStyle",
	rightccls : "rightContainerStyle",

	barcls: "barStyle",
	capcls: "captionStyle",
	divcls: "dividerStyle",
	imgccls: "imageContainerStyle",
	inputcls: "inputStyle",
	inputccls: "inputContainerStyle",

	loadcls: "loadingStyle",
	subtcls: "subtitleStyle",
	textcls: "textStyle",

	//nativebase
	hcls : "headerStyle",
	cntcls : "contentStyle",
	expcls : "expandedIconStyle",
	tbulcls : "tabBarUnderlineStyle",
	tabcls : "tabStyle",
	atabcls : "activeTabStyle",
	atcls : "activeTextStyle",
	tccls : "tabsContainerStyle",
	ulcls : "underlineStyle",
	btntextcls : "buttonTextStyle",
	//react-native-router-flux
	bbtcls : "backButtonTextStyle",
	lbicls : "leftButtonIconStyle",
	lbcls : "leftButtonStyle",
	lbycls : "leftButtonTextStyle",
	nbcls : "navigationBarStyle",
	nbticls : "navigationBarTitleImageStyle",
	rbcls : "rightButtonStyle",
	rbtcls : "rightButtonTextStyle",
	tabbcls : "tabBarStyle",
};
// let opMap = {};
// for(key in clsMap){
// 	opMap[key.replace("cls" , "op")] = clsMap[key];
// } 
let mapCls = {};
for(key in clsMap){
	mapCls[clsMap[key]] = key;
}

// Object.assign(clsMap , opMap, map);  
// Object.assign(clsMap , map);  



// let mapCls = clsConv();

export{
	clsMap ,
	mapCls
}
// styleToCls  = {
//   //react-native Component 
//   contentContainerStyle: "cccls",
// };


