import propertyAndValue from "./provertyAndValue.js";
import {deviceHandler, deviceMatch} from "./responsive.js";
import {whileMatchNCall, browserPrefix, selectorMatch} from './selector.js';
// import  {matcher} from "./matcher.js";
import customColor from './static/customColor.js';


export let statementMaker={
	device:null,
	classname:null,
	selector:null,
	propertyAndValue:null,
	hasSuffix:null,
	cache:{
		propertyAndValue:{}
	},
	//it will igonre the classname listed in ignore
	ignore:[],
	custom:{},
	addCustom:function(name,obj){
		if(typeof obj==="object"){
			if(!this.custom[name]) this.custom[name]={};
			for(let key in obj){
				this.custom[name][key]=obj[key];
			}
		}
	},
	//Handle !important !default.....
	handleSuffix:function(classname){
		let match=/[-](i|important)$/;
		if(classname.match(match)) this.hasSuffix=" !important";
		return classname.replace(match,'');

	},//end of Handle suffix

	getPropertyAndValue(classname){
		let result=this.make(classname,null,true);
		if(!result[0] && !result[1]) return result[2];
	},

	make(classname, as,bool){
		//reset old values
		[this.device, this.classname,this.selector,this.propertyAndValue,this.hasSuffix]=[null,null,null,null,null];

		this.classname=as?as:classname;
		// -------------------------responsive----------------takes out device[-|_] mob-, tab_
			if(deviceMatch.test(classname)){
				this.device=deviceMatch.exec(classname)[1];
		 		classname=classname.replace(this.device,"");
			}


		// if(matcher.device.match.test(classname)){
		// 	this.device=matcher.device.call(classname);
		// 	classname=classname.replace(this.device,"");
		// 	}
		//-----------------selector-------------- --hover, -nth, _div_li, __div etc

		let selectorResult=whileMatchNCall(classname);
		this.selector=selectorResult[1];
		classname=selectorResult[0].replace(/^[_-]/,"");


		//------------suffix-flag------ -i,-important
		
			classname=this.handleSuffix(classname);		


			// now pure class name with property and value
		//------------proverty and value---------------
		if(this.cache.propertyAndValue.hasOwnProperty(classname)){
			this.propertyAndValue=this.cache.propertyAndValue[classname];
		}else{
			this.propertyAndValue=propertyAndValue(classname,this.custom);
			if(!this.propertyAndValue) return false;
			this.cache.propertyAndValue[classname]=this.propertyAndValue;
		}

		if(bool===true) return[this.device,this.selector,this.propertyAndValue + (this.hasSuffix?this.hasSuffix:'')];

	 	let statement="."+this.classname+this.selector+"{"+this.propertyAndValue + (this.hasSuffix?this.hasSuffix:'')+ " ;}";

	 	//handle media quries
		 if(this.device){
		 	return deviceHandler(this.device,statement);
		 }

		 return statement;

	},
	extend:function(a,b){
	if(typeof(a) ==='object' ){
		for(let key in a){
			this.cache.propertyAndValue[key]=a[key];
			// if(this.cachstatementMaker.staticClassNames.hasOwnProperty(key)){
			// 	console.error(Key +": already  in use for '"+key+":"+this.statementMaker.staticClassNames[key]+"' Try with another classname" );
			// }else{
			// 	this.statementMaker.staticClassNames[key]=a[key];
			// }
			
		}
	}else{
		if(a && b){
			this.cache.propertyAndValue[a]=b;
		}
	}

},
styleSheetCompiler:function(content){
	 
	
		const match=/[{][\w|#|\-|:|;|$|\*|\/|\.|\(|\)|\s|\\|\"|\%|\!|\,|\']+[}]?/g;

		const m1=/(?<=[{][\s]*)([A-Za-z0-9_-]+)(?=[\s]*[;])/g;
		const m2=/(?<=[;][\s]*)([A-Za-z0-9_-]+)(?=[\s]*[;])/g;
		const m3=/(?<=[;][\s]*)([A-Za-z0-9-_]+)(?=[\s]*[}])/g;
		const m4=/(?<=[\/][\s]*)([A-Za-z0-9-_]+)(?=[\s]*[;|}])/g;
		const m5=/(?<=[\{][\s]*)([A-Za-z0-9-_]+)(?=[\s]*[}])/g;

		return content.replace(/[\n][\s]+/g,"\n").replace(match,(e)=>{
		
			 //1.repalce {.....;
				e=e.replace(m1,(m)=>{
						let result=this.getPropertyAndValue(m);
						return result?'\t'+result:'\n\t/*'+m+'*/';
				});
				//console.log(e);
			
			//2.replace ;.....;
			
			e=e.replace(m2,(m)=>{
					 let result=this.getPropertyAndValue(m);
					return result?'\t'+result:'\n\t/*'+m+'*/';
				});

			// console.log(e);
			// 3.replace ;..}	
			e=e.replace(m3,(m)=>{
					let result= this.getPropertyAndValue(m);
					return result?'\t'+result:'\n\t/*'+m+'*/';
				});

			// 4.replace */..;|}	
			e=e.replace(m4,(m)=>{
					let result= this.getPropertyAndValue(m);
					return result?'\t'+result:'\n\t/*'+m+'*/';
				});

			// 5.replace {...}	
			e=e.replace(m5,(m)=>{
					let result= this.getPropertyAndValue(m);
					return result?'\t'+result:'\n\t/*'+m+'*/';
				});

		 	
		 	 return e;
			
		 });
		
		

	},
	bkstyleSheetCompiler:function(content){
	
		const match=/[{][\w|#|\-|:|;|$|\*|\/|\.|\(|\)|\s|\\|\"|\%|\!|\,|\']+[}]?/g;

		const m1=/(?<=[{][\s]*)([A-Za-z0-9_-]+)(?=[\s]*[;])/g;
		const m2=/(?<=[;][\s]*)([A-Za-z0-9_-]+)(?=[\s]*[;])/g;
		const m3=/(?<=[;][\s]*)([A-Za-z0-9-_]+)(?=[\s]*[}])/g;
		const m4=/(?<=[\/][\s]*)([A-Za-z0-9-_]+)(?=[\s]*[;|}])/g;
		const m5=/(?<=[\{][\s]*)([A-Za-z0-9-_]+)(?=[\s]*[}])/g;

		return content.replace(match,(e)=>{
		
			 //1.repalce {.....;
				e=e.replace(m1,(m)=>{
						let result=this.getPropertyAndValue(m);
						return result?result:m;
				});
				//console.log(e);
			
			//2.replace ;.....;
			
			e=e.replace(m2,(m)=>{
					 let result=this.getPropertyAndValue(m);
					return result?result:m;
				});

			// console.log(e);
			// 3.replace ;..}	
			e=e.replace(m3,(m)=>{
					let result= this.getPropertyAndValue(m);
					return result?result:m;
				});

			// 4.replace */..;|}	
			e=e.replace(m4,(m)=>{
					let result= this.getPropertyAndValue(m);
					return result?result:m;
				});

			// 5.replace {...}	
			e=e.replace(m5,(m)=>{
					let result= this.getPropertyAndValue(m);
					return result?result:m;
				});

		 	//console.log(e);
		 	 return e;
			
		 });

	},
	

	groupForJs:function(string,bool){
		if(!string.trim()) return '';
		let jsStyle={};
		let list=string.trim().split(/\s+/);
		list.forEach((e)=>{
			let pNv="";
			if(this.cache.propertyAndValue.hasOwnProperty(e)){
				pNv=this.cache.propertyAndValue[e]
			}else{
				 pNv=propertyAndValue(e, this.custom);
				if(pNv) this.cache.propertyAndValue[e]=pNv;
			}
			if(!pNv) return "";
			let result=pNv.split(":");
			if(result.length===2){
				let key=result[0].replace(/-([a-z])/g, function(e,a){ return a.toUpperCase();});
				let value=bool===true?result[1].replace(/px$/g,""):result[1];
				if(value.trim().match(/^[\d\.]+$/)){
					value=parseFloat(value);
				}

				jsStyle[key]=value;
			}
		});

		return jsStyle;
	},
	//classnames as string e.g 'fs12px br5px cp'
	groupForStyle:function(str){
		let container="";
		let classList=[];//filtering duplicate classNames
		let list=str.trim().split(/\s+/);
		list.forEach((e)=>{
						
					// this.hasSuffix=null;
					// e=this.handleSuffix(e);
					if(this.cache.propertyAndValue.hasOwnProperty(e)){
						container+=this.cache.propertyAndValue[e]+(this.hasSuffix?this.hasSuffix:'')+" ;\n";
					}else{
						let pNv=propertyAndValue(e,this.custom);
						if(pNv){
						 this.cache.propertyAndValue[e]=pNv;
						 container+=pNv+";";//+ (this.hasSuffix?this.hasSuffix:'')+" ;\n";
						}
					}
					
				
		});

		return container;
	},
	fromString:function(string,group){
		if(group){
			return statementMaker.group(string,group);
		}
		let statement='';
		if(!string.trim()) return false;
		let classList=string.split(/\s+/);
		classList.forEach((eachClass)=>{
			 let result=this.make(eachClass);
			if(result){
				statement+=(result+ "\n");
			}
		});
		return statement;
	},
	group:function(str, as){
		let statement="";
		let container="\n";
		//let classList=[];//to filter duplicate filter
		let list=str.trim().split(/\s+/);
		list.forEach((e)=>{
			// selector:{match:/^([-|_])/,call:null},
			if(selectorMatch || deviceMatch.test(e)){
				let result=this.make(e,as);
				if(result) statement+=result+"\n";
				}else{
					this.hasSuffix=null;
					e=this.handleSuffix(e);
					if(this.cache.propertyAndValue.hasOwnProperty(e)){
						container+="\t"+this.cache.propertyAndValue[e]+(this.hasSuffix?this.hasSuffix:'')+" ;\n";
					}else{
						let pNv=propertyAndValue(e,this.custom);
						if(pNv){
						 this.cache.propertyAndValue[e]=pNv;
						 container+="\t"+pNv+ (this.hasSuffix?this.hasSuffix:'')+" ;\n";
						}
					}
					
				}
		});

		return `${statement} \n .${as} { ${container} }`;

	},
	groupObj:function(obj){

		if(typeof (obj) !== 'object') return false;
		let statement="";

		for(let key in obj){
			let result=this.group( obj[key], key);
			if(result){ statement+=result +"\n"}

		}
		return statement;
	},
};

statementMaker.addCustom('color',customColor);

