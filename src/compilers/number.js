
export default function number(str,custom){
	if(typeof custom === "object"){
		if(custom.hasOwnProperty(str)) return custom[str];
	}
 return str.replace(/d/,".");

}


// numberonly:{match:/^(aic|cc|f|fg|fs|o|ord|lh|orp|op|zi)([-]?[0-9]+[d]?[0-9]*)$/,
// 			  callFunction:function(each){//console.log("i am a number only");
// 			  var propertyAlias=each.match(this.match)[1],
// 					getProperty=aliasProperty[propertyAlias],
// 					getValue=each.match(this.match)[2];
// 					getValue=getValue.replace(/d/,".");
// 					//fix opacity
// 					if(each.match(/^o[0-9]/) && !getValue.match(/[\.]/)){
// 						if(getValue<11){ getValue=getValue/10;}else{getValue=getValue/100;}
// 					}
// 				return [getProperty,getValue];
// 			  }
// 			},