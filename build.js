import statementMaker, {classPrinter} from './src/classPrinterBeta.js';
import openAcssRibbionBar from "./src/acssliveupdate.js";

let ACSS={
pushURL:null,
//compile class and returns class statement i.e .br5px{.br5px{border-radius:5px ;}}
compile:function(classname){
		return this.statementMaker.make(classname);
	},

toString:function(){return "ACSS Object";},
classPrinter:classPrinter,

//takes custom classname and defination  key,value or {key:value} //{'outline-color':'outline-color: blue;'}
//no Psedu or anythings
extend:function(a,b,c){
	this.statementMaker.extend(a,b,c);
},
//Live editor
liveEditor:openAcssRibbionBar,
//close live editor in browser
closeEditor:function(){
	    var ele=document.getElementById("quickChangeBox");
	    if(ele) ele.parentNode.removeChild(ele);
},

appendCss:function(str,group){
	this.classPrinter.appendToStyleTag(this.statementMaker.fromString(str,group));
},
addCustom:function(custom){
	Object.keys(custom).forEach(key=>{
 				this.statementMaker.addCustom(key, custom[key])
 			});




},
statementMaker:statementMaker,

};

//Adding custom color
// ACSS.addCustom('color',customColor);
if(!window.ACSS){
	window.ACSS=ACSS;
}

 window.addEventListener('load',function(){
 	ACSS.classPrinter.run();
 	console.log('ACSS is running');
 });


// if(!window.ACSS){
// 	window.ACSS=ACSS;
// }
// // module.exports=ACSS;


