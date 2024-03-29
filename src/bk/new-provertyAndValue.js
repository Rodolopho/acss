import {staticClassNames} from "./static/staticClassNames.js";
import {matcher} from "./matcher.js";
import {propertyAlias} from "./static/propertyAlias.js";
import {customStaticClassNames} from "./static/customStaticClassNames.js";

function matchAndCall(classname,matcher,custom){

let data=matcher.compilers[matcher].match.exec(classname);

		let property=propertyAlias[data[1]];

		if(property){
			let value=matcher.compilers[matcher].call(data,custom);
			if(value){
				return property+":"+value;
			}else{
				console.log('\x1b[35m',`Cannot find  value for classname: '${classname} @ ${matcher}' `);
				return null;
				}
		}else{
			console.log('\x1b[35m',`Cannot find property  for classname: '${classname} @ ${matcher}' `);
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

		let data=matcher.compilers.fontFeatureSettings.match.exec(classname);

		let property=propertyAlias[data[1]];

		if(property){
			let value=matcher.compilers.fontFeatureSettings.call(data[2]);
			if(value){
				return property+":"+value;
			}else{
				console.log('\x1b[35m',`Cannot find  value for classname: '${classname} @ fontFeatureSettings' `);
				return null;
				}
		}else{
			console.log('\x1b[35m',`Cannot find property  for classname: '${classname} @ fontFeatureSettings' `);
			return null;
		}

	//content
	}

	else if(matcher.compilers.content.match.test(classname)){
		let data=matcher.compilers.content.match.exec(classname);
		 // console.log('\x1b[35m',data);
		let property=propertyAlias[data[1]];
		if(property){
			let value=matcher.compilers.content.call(data[2],data[3]);
			if(value){
				return property+":"+value;
			}else{
				console.log('\x1b[35m',`Cannot find  value for classname: '${classname} @ content' `);
				return null;
				}
		}else{
			console.log('\x1b[35m',`Cannot find property  for classname: '${classname} @ content' `);
			return null;
		}

	//timingFunction	
	}else if(matcher.compilers.timingFunction.match.test(classname)){
		let data=matcher.compilers.timingFunction.match.exec(classname);
		 // console.log('\x1b[35m',data);
		let property=propertyAlias[data[1]];
		if(property){
			let value=matcher.compilers.timingFunction.call(data[2]);
			if(value){
				return property+":"+value;
			}else{
				console.log('\x1b[35m',`Cannot find  value for classname: '${classname}'@timingFunction `);
				return null;
				}
		}else{
			console.log('\x1b[35m',`Cannot find property  for classname: '${classname}' @timingFunction `);
			return null;
		}

	//filter
	}else if(matcher.compilers.filter.match.test(classname)){
		let data=matcher.compilers.filter.match.exec(classname);
		 // console.log('\x1b[35m',data);
		// let property=(data[1]==="f"?"filter":propertyAlias[data[1]]) //fs12px;
		let property=propertyAlias[data[1]];
		if(property){
			let value=matcher.compilers.filter.call(data[2],data[3]);
			if(value){
				return property+":"+value;
			}else{
				console.log('\x1b[35m',`Cannot find  value for classname: '${classname}' @flter `);
				return null;
				}
		}else{
			console.log('\x1b[35m',`Cannot find property  for classname: '${classname}' @filter `);
			return null;
		}

	//color->only check for property 
	}else if(matcher.compilers.color.match.test(classname)){
		let data=matcher.compilers.color.match.exec(classname);
		let property=propertyAlias[data[1]];
		if(property){
			let value=matcher.compilers.color.call(classname.replace(data[0],""), custom.color);
			if(value){
				return property+":"+value;
			}else{
				console.log('\x1b[35m',`Cannot find  value for classname: '${classname} @color' `);
				return null;
				}
		}else{
			console.log('\x1b[35m',`Cannot find property  for classname: '${classname}' @color `);
			return null;
		}
		
	//url
	}else if(matcher.compilers.url.match.test(classname)){
		let data=matcher.compilers.url.match.exec(classname);
		let property=propertyAlias[data[1]];
		if(property){
			let value=matcher.compilers.url.call(data[2]);
			if(value){
				return property+":"+value;
			}else{
				console.log('\x1b[35m',`Cannot find  value for classname: '${classname}' @url`);
			}
		}else{
			console.log('\x1b[35m',`Cannot find property for classname: '${classname}' @url`);
		}
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
		let data=matcher.compilers.border.match.exec(classname);
		let property=propertyAlias[data[1]];
		if(property){
			let value=matcher.compilers.border.call(data,custom.color);
			if(value){
				return property+":"+value;
			}else{
				console.log('\x1b[35m',`Cannot find  value for classname: '${classname}' @border`);
			}
		}else{
			console.log('\x1b[35m',`Cannot find property for classname: '${classname}' @border`);
		}
		//transform
	}else if(matcher.compilers.transform.match.test(classname)){
		let data=matcher.compilers.transform.match.exec(classname);
		let property=propertyAlias[data[1]];
		if(property){
			let value=matcher.compilers.transform.call(classname.replace(data[1],""));
			if(value){
				return property+":"+value;
			}else{
				console.log('\x1b[35m',`Cannot find  value for classname: '${classname}' @transform `);
			}
		}else{
			console.log('\x1b[35m',`Cannot find property for classname: '${classname}'  @transform`);
		}
		//transition
	}else if(matcher.compilers.transition.match.test(classname)){
		let data=matcher.compilers.transition.match.exec(classname);
		let property=propertyAlias[data[1]];
		if(property){
			let value=matcher.compilers.transition.call(classname.replace(data[1],""));
			if(value){
				return property+":"+value;
			}else{
				console.log('\x1b[35m',`Cannot find  value for classname: '${classname}' @transition`);
			}
		}else{
			console.log('\x1b[35m',`Cannot find property for classname: '${classname}' @transition`);
		}
	//ms s
	}else if(matcher.compilers.time.match.test(classname)){
		let data=matcher.compilers.time.match.exec(classname);
		let property=propertyAlias[data[1]];
		if(property){
			let value=matcher.compilers.time.call(data[2]);
			if(value){
				return property+":"+value;
			}else{
				console.log('\x1b[35m',`Cannot find  value for classname: '${classname}' @time`);
			}
		}else{
			console.log('\x1b[35m',`Cannot find property for classname: '${classname}' @time`);
		}
		//length
	}else if(matcher.compilers.length.match.test(classname)){
		let data=matcher.compilers.length.match.exec(classname);

		let property=propertyAlias[data[1]];
		if(property){
			let value=matcher.compilers.length.call(data[3],custom.length);
			if(value){
				return property+":"+value;
			}else{
				console.log('\x1b[35m',`Cannot find  value for classname: '${classname}' @length`);
			}
		}else{console.log('\x1b[35m',`Cannot find property for classname: '${classname}' @length`);}
	//number	
	}else if(matcher.compilers.number.match.test(classname)){
		let data=matcher.compilers.number.match.exec(classname);
		let property=propertyAlias[data[1]];
		if(property){
			let value=matcher.compilers.number.call(data[2]);
			if(value){
				return property+":"+value;
			}else{
				console.log('\x1b[35m',`Cannot find  value for classname: '${classname}' @number`);
			}
		}else{
			console.log('\x1b[35m',`Cannot find property for classname: '${classname}' @number`);
		}

	//Font	
	}else if(matcher.compilers.font.match.test(classname)){
		let data=matcher.compilers.font.match.exec(classname);
		let property=propertyAlias[data[1]];
		if(property){
			let value=matcher.compilers.font.call(data[2]);
			if(value){
				return property+":"+value;
			}else{
				console.log('\x1b[35m',`Cannot find  value for classname: '${classname}'@font `);
			}
		}else{
			console.log('\x1b[35m',`Cannot find property for classname: '${classname}' @font`);
		}
	//gradient
	}else if(matcher.compilers.gradient.match.test(classname)){
		let data=matcher.compilers.gradient.match.exec(classname);
		// console.log('\x1b[35m',data);
		let property=propertyAlias[data[1]];
		if(property){
			let value=matcher.compilers.gradient.call(data[2],data[7],custom.color);
			if(value){
				return property+":"+value;
			}else{
				console.log('\x1b[35m',`Cannot find  value for classname: '${classname}' @gradient`);
				return null;
				}
		}else{
			console.log('\x1b[35m',`Cannot find property  for classname: '${classname}' @gradient`);
			return null;
		}
		
	//animation
	}else if(matcher.compilers.animation.match.test(classname)){

		let data=matcher.compilers.animation.match.exec(classname);
		// console.log('\x1b[35m',data);
		let property=propertyAlias[data[1]];
		if(property){
			let value=matcher.compilers.animation.call(data[2]);
			if(value){
				return property+":"+value;
			}else{
				console.log('\x1b[35m',`Cannot find  value for classname: '${classname}' @animation`);
				return null;
				}
		}else{
			console.log('\x1b[35m',`Cannot find property  for classname: '${classname}' @animation`);
			return null;
		}


	}else{
		//console.log('\x1b[35m',`Cannot find property and value for classname: '${classname}' `);
		return null;
	}//ifelse
}//

