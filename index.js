const path=require('path');
const fs=require('fs');
 // var sass=require('node-sass');

//MAKES CSS STATEMENTS
// const statementMaker=require('./src/statementMaker.js');
require('./lib/statementMaker.js');
const dist=path.join(__dirname,"dist",'acss.js');
// console.log(statementMaker);


let acssCompiler={

	test:/(html|htm|acss|php)$/,
	//cop file in given location
	dist:function(path){
		fs.copyFileSync(dist, path);
	},

	classList:[],
	groups:{},
	statementMaker:statementMaker,
	style:function(a){ return this.statementMaker.groupForStyle(a)},
	styleJs:function(a,b){ return this.statementMaker.groupForJs(a,b)},
	styleJSX:function(a,b){ return this.statementMaker.groupForJs(a,b)},
	input:null,
	output:null,
	append:false,
	regClass:/[\s]+class[\s]*=[\s]*['|"][\s]*([-|_|A-Za-z0-9|\s]+)[\s]*['|"]/, //[1]
	regGroup:/[\s]+acss-group[\s]*=[\s]*['|"][\s]*([-|_|A-Za-z0-9|\s]+)[\s]*['|"]/,//[1]
	regex:/(?<=[<][A-Za-z0-9]+)(([^<.]|\.)*class[\s]*=([^<.]|\.)*)(?=[/]?[>])/g,
	// compileStatement:"/* AliasCSS : This file is compile by AliasCSS Compiler*/\n\n\n",
	extractClassName:function(file){
			let data=fs.readFileSync(file, 'utf-8');
			let found;
			let that=this;
			let classList=[];
			let groups={};
			while((found=this.regex.exec(data))!==null){

				if(this.regClass.test(found)){
					let classNames=this.regClass.exec(found)[1].trim();
					
					 if(!classNames) continue ;
					if(this.regGroup.test(found)){
						
						let group=this.regGroup.exec(found)[1].trim();
			
						if(group){
							if(this.groups.hasOwnProperty(group) && this.groups[group]==classNames){
								//do nothing
							}else{
								this.groups[group]=classNames;
								groups[group]=classNames;
							}
							
						}
					}

					classNames.split(/\s+/).forEach((e)=>{
						if(this.classList.indexOf(e)===-1){
							this.classList.push(e);
							classList.push(e);
						}
					});
				}
			}



			return [classList.sort(), groups];
	},
	compile:function(file){
				let compileStatement='';
				let that=this;
				const [classList,groups]=this.extractClassName(file);
				
				if(classList.length){
					
					// compileStatement=`\n/* AliasCSS : These are classnames compiled  from ${path.basename(file)}*/\n\n`,
					classList.forEach((e)=>{

						if((statement=this.statementMaker.make(e))!==false){

							console.log('\x1b[32m',statement);
							
							compileStatement+=statement+"\n";
						}
						
					});

				}
				for(let key in groups){
						let gpStatement=this.statementMaker.group(groups[key],key);
						compileStatement+=gpStatement+"\n";
				}
				return compileStatement;
	},
	compileStyleSheetRaw:function(file){
		// console.log(this);
		let content=fs.readFileSync(file, 'utf-8');
		let acssStm=this.statementMaker.styleSheetCompiler(content);

		try{
				//var result=sass.renderSync({
					//data:acssStm
				//});
				return acssStm;
			} catch (e){
				console.log("Could not able to compile: Sass render Error: Make sure you have valid acss/scss");
				console.log(e);
				return null;
			}

	},
	compileStyleSheet:function(file,output){
		let compiledContent=this.compileStyleSheetRaw(file);
		if(!compiledContent) return false;

			try {
				
		  		fs.appendFileSync(output, compiledContent);
		  		console.log('\x1b[37m',"Successfully  compiled stylesheet from " + file);
			} catch (err) {
			  console.log('\x1b[31m',"Couldn't able to  compiled acss from " + file);
			  console.log('\x1b[31m', err);
			}

		//return e;
	},
	processArray:function(list){


	},
	processFolder:function(folder){
		const files=fs.readdirSync(folder);

			files.forEach((file)=>{
				const filepath=path.join(folder,file);

				fs.stat(filepath,(err,stats)=>{
					if(err) throw err;
					if(stats.isDirectory()){
						this.processFolder(filepath);
					}else if(stats.isFile()){
						this.writeToFile(filepath);
					}
					})
				})
			

	},
	writeToFile:function(file){
			let compileStatement=null;
			//For styleSheet .acs

			if(!path.extname(file).match(this.test)) return ;
			
			if(path.extname(file)=='.acss'){
				console.log('\x1b[37m','Compiling acss to css: '+ file);
				compileStatement=this.compileStyleSheetRaw(file);

			}else if((compileStatement=this.compile(file))===null){
					return;
				
			}

			
			if(compileStatement===null || !compileStatement) return false;
			 
			try {
				
		  		fs.appendFileSync(this.output, `\n/* AliasCSS : These are classnames compiled  from ${path.basename(file)}*/\n\n`+compileStatement);
		  		console.log("Successfully  compiled acss from " + file);
			} catch (err) {
			  console.log('\x1b[31m',"Couldn't able to append compiled acss from " + file);
			  console.log(err);
			}
	},
	writeStatementToFile:function(content){
			
			 
			try {
				//----------append or not------
				
		  		fs.appendFileSync(this.output, `\n/* AliasCSS : These are classnames compiled group in config.js file}*/\n\n`+content);
		  		console.log("Successfully  compiled acss for  group of config.js"  );
			} catch (err) {
			  console.log('\x1b[31m',"Couldn't able to append compiled acss from  group from config.js ");
			  console.log(err);
			}
	},


	
	run:function(input,output){
		// if(input){
		// 	this.input=input;
		// }
		// if(output){
		// 	this.output=output;
		// }
		
		if(this.input && this.output){
			

		//case 1: if its array
		if(Array.isArray(this.input)){
			this.input.forEach((entry)=>{
				fs.stat(entry,(err,stats)=>{
					if(err) throw err;
					
					if(stats.isDirectory()){
						this.processFolder(entry);
						return;
					}
					if(stats.isFile()){
						this.writeToFile(entry);
						return;
					}
				});
			})

			return;
		}

		//case @: file or folder
		// if(fs.existsSync(this.input)) //console.log('file yes');
		fs.stat(this.input,(err,stats)=>{
		
			if(err) throw err;
		
			if(stats.isDirectory()){
				this.processFolder(this.input);
				return;
			}
			if(stats.isFile()){
				 
				this.writeToFile(this.input);
				return;
			}
		});
		
		}else{
			console.error('\x1b[31m',"Please provide, entry or/and output file/s");
		}
		
	},
	watch:function(){
		console.log('\x1b[37m',"Files are being Watched!");
		if(Array.isArray(this.input)){

			this.input.forEach((entry)=>{
				fs.watch(entry, (eventType, filename) => {
				  if (filename) {
				     console.log(`--processing file : ${filename}`);
				    this.run();
				    // console.log('Done! ');
				  } else {
				    console.log('\x1b[31m','filename not provided');
				  }
				})
			});

		}else{

			fs.watch(this.input, (eventType, filename) => {
			  if (filename) {
			     console.log(`--processing file : ${filename}`);
			    this.run();
			    // console.log('Done! ');
			  } else {
			    console.log('\x1b[31m','filename not provided');
			  }
			})
		}
	},


};
//-------------------Proccess.argv--------------
// let argv=process.argv;
// if(argv[2]){
// 	if(argv[3]){
// 		acssCompiler.run(argv[2],argv[3]);
// 	}else{
// 		acssCompiler.run(argv[2],'acss.css');
// 	}

// 	if(argv.indexOf("--watch")!=-1){
// 		acssCompiler.watch();
// 	}
// }
//-----------------endPA

module.exports=acssCompiler;//end of acssCompiler



