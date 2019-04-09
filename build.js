import statementMaker, {classPrinter} from './src/classPrinter.js';
import openAcssRibbionBar from "./src/acssliveupdate.js";

let ACSS={
pushURL:null,
compile:function(classname){
		return this.statementMaker.make(classname);
	},
toString:function(){return "ACSS Object";},
classPrinter:classPrinter,

extend:function(a,b,c){
	this.statementMaker.extend(a,b,c);
},

liveEditor:openAcssRibbionBar,

closeEditor:function(){
	    var ele=document.getElementById("quickChangeBox");
	    if(ele) ele.parentNode.removeChild(ele);
},
addCustom:function(a,b,c){
this.statementMaker.addCustom(a,b,c);
},
statementMaker:statementMaker,

};

//Adding custom color
// ACSS.addCustom('color',customColor);

 window.addEventListener('load',function(){
 	classPrinter.run();
 });


if(!window.ACSS){
	window.ACSS=ACSS;
}
// // module.exports=ACSS;


