 import {statementMaker} from "../src/statementMaker.js";
 export default statementMaker;
 export let classPrinter={
 	unvalidLists:[],
 	classLists:[],
 	styleTagExists:false,


 	styleTag:null,
 	createStyleTag:function(){
		if(this.styleTagExists===true){ return this.styleTag}
			let  styleTag=document.createElement("style");
			styleTag.id="styleAlias";
			document.getElementsByTagName("head")[0].appendChild(styleTag);
			this.styleTag=styleTag;
			this.styleTagExists=true;
			return styleTag;
	},
	//you can always apend a class if you like modify the look here if you want
	appendToStyleTag:function(classStatement){
       let createNewClass=document.createTextNode(classStatement);
      this.createStyleTag().appendChild(createNewClass);

	},
	//compile dom stylesheet 
	//show current style statestatement
	compile:function(){
	  var classes=document.getElementById('styleAlias');
	  if(classes){
	    var preetyPrint=classes.innerHTML.replace(/\}/g,"</br>}</br>").replace(/\{/g,"{</br>&nbsp;&nbsp;&nbsp;&nbsp;");
	    document.write(preetyPrint);
	  }else{
	  	console.warn("There is not ACSS used in this document!!");
	  	alert("Could not found acss statements  in this Document!");
	  }
	},
	
	//print classname of el to style tag; gets statement from statementMaker.make(eachClass);
 	print:function(el){
 				if(!el.getAttribute('class').trim()) return;
 			//check for group
			if(el.getAttribute('acss-group')){
				var result=statementMaker.group(el.getAttribute("class").trim(),el.getAttribute('acss-group'));
				if(result){
					this.appendToStyleTag(result);
					// return true;
				}
			}
			//has-test-group(for live update only)
			if(el.getAttribute('acss-group-test')){
				let result=statementMaker.group(el.getAttribute("class").trim(),el.getAttribute('acss-group-test'));
				let styleTag=document.querySelector("style#"+el.getAttribute('acss-group-test'));
				if(result){
					if(styleTag){
						styleTag.innerHTML="";
						var createNewgroup=document.createTextNode(result);
      						styleTag.appendChild(createNewgroup);
						// return true;
					}else{
						let styleTag=document.createElement("style");
						styleTag.id=el.getAttribute('acss-group-test');
						document.getElementsByTagName("head")[0].appendChild(styleTag);
							var createNewgroup=document.createTextNode(result);
      						styleTag.appendChild(createNewgroup);
					}
				}
			}
				//-----------------------end of for live update
			//get class and trim out whitespaces
			let tmpClassList=el.getAttribute("class");

			if(el.hasAttribute('acss-class')) tmpClassList=tmpClassList+" "+el.getAttribute('acss-class');
			//make array of classname out of string
			if(tmpClassList.trim().length){
				tmpClassList=tmpClassList.trim().split(/\s+/);
				
			//looping class
			tmpClassList.forEach((eachClass)=>{
					//escape reppeated classname

					if(this.classLists.indexOf(eachClass)==-1 && this.unvalidLists.indexOf(eachClass)==-1){
						//add to classlist for refrerence
						this.classLists.push(eachClass);
						
						// var result=compiler.main(eachClass);
						 var result=statementMaker.make(eachClass);
						 // console.log(result);

						if(result){
								this.appendToStyleTag(result);
						}else{
								//not a valid ACSS clasNames
							this.unvalidLists.push(eachClass);
						}
					}
				});

			}

		 
	 //If elemet is cloning classnames
	// ACSSClone(element);

	},//eomain
	run:function(el){
		let $root=el||document;
		

		Array.prototype.forEach.call($root.querySelectorAll('[class]'),(e)=>{
			this.print(e);
		});

	},
 	};





