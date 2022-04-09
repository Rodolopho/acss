import {staticClassNames} from "./static/staticClassNames.js";
import {matcher} from "./matcher.js";
import {propertyAlias} from "./static/propertyAlias.js";
import {customStaticClassNames} from "./static/customStaticClassNames.js";

function matchAndCall(classname,match,custom){

let data=matcher.compilers[match].match.exec(classname);

		let property=propertyAlias[data[1]];

		if(property){
			let value=matcher.compilers[match].call(data,custom,classname);
			if(value){
				return property+":"+value;
			}else{
				console.log('\x1b[35m',`Cannot find  value for classname: '${classname} @ ${match}' `);
				return null;
				}
		}else{
			console.log('\x1b[35m',`Cannot find property  for classname: '${classname} @ ${match}' `);
			return null;
		}

}
export default function propertyAndValue(classname,custom){
	if(!custom) custom={};
	// if(classList.hasOwnProperty(classname)) return classname[classname];
	if(staticClassNames.hasOwnProperty(classname)){
		return staticClassNames[classname];
	}else if(customStaticClassNames.hasOwnProperty(classname)){
		return customStaticClassNames[classname];
	//
	}//End of static Classname defination

	// --------------------------
	//---------Dyanamic-Classname--
	//-----------------------------------

	//1.color
	//2.text
		//font content aniname
	//3.number
	//4.

	//FontFeatures
	 if(matcher.compilers.fontFeatureSettings.match.test(classname)){

	 	return matchAndCall(classname,'fontFeatureSettings');

	//content
	}
	else if(matcher.compilers.content.match.test(classname)){
		return matchAndCall(classname,'content');

	//timingFunction	
	}else if(matcher.compilers.timingFunction.match.test(classname)){
		return matchAndCall(classname,'timingFunction');

	//filter
	}else if(matcher.compilers.filter.match.test(classname)){
		return matchAndCall(classname,'filter');

	//color->only check for property 
	}else if(matcher.compilers.color.match.test(classname)){

		return matchAndCall(classname,'color',custom);
		
	//url
	}else if(matcher.compilers.url.match.test(classname)){
		return matchAndCall(classname,'url');
		//shadow
	}else if(matcher.compilers.shadow.match.test(classname)){
		let data=matcher.compilers.shadow.match.exec(classname);
		let property=propertyAlias[data[1]];
		if(property){
			let value=matcher.compilers.shadow.call(classname.replace(data[1],""),custom.color);
			if(value){
				return (property+":"+value).replace("-inset:", ":inset ");
			}else{
				console.log('\x1b[35m',`Cannot find  value for classname: '${classname}' @shadow `);
			}
		}else{
			console.log('\x1b[35m',`Cannot find property for classname: '${classname}' @shadow `);
		}
		//border
	}else if(matcher.compilers.border.match.test(classname)){
		return matchAndCall(classname,'border',custom);
		//transform
	}else if(matcher.compilers.transform.match.test(classname)){
		return matchAndCall(classname,'transform');
		//transition
	}else if(matcher.compilers.transition.match.test(classname)){
		return matchAndCall(classname,'transition');
	//ms s
	}else if(matcher.compilers.time.match.test(classname)){
		return matchAndCall(classname,'time');
		//length
	}else if(matcher.compilers.length.match.test(classname)){
		return matchAndCall(classname,'length',custom);
		
	//number	
	}else if(matcher.compilers.number.match.test(classname)){
		return matchAndCall(classname,'number');
		
	//Font	
	}else if(matcher.compilers.font.match.test(classname)){
		return matchAndCall(classname,'font',custom);
	
	//gradient
	}else if(matcher.compilers.gradient.match.test(classname)){
		return matchAndCall(classname,'gradient',custom);

	//animation
	}else if(matcher.compilers.animation.match.test(classname)){
		return matchAndCall(classname,'animation');
	//grid
	}else if(matcher.compilers.grid.match.test(classname)){
		return matchAndCall(classname,'grid');

	}
	else{
		//console.log('\x1b[35m',`Cannot find property and value for classname: '${classname}' `);
		return null;
	}//ifelse
}//

