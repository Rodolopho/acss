const path=require('path');
const fs=require('fs');
const fg=require('fast-glob');

 //compiler return statement i.e .class{property:value}
require('./lib/statementMaker.js');

const dist=path.join(__dirname,"dist",'acss.js');



let acssCompiler={
	//not required as we have glob pattern
	// test:/(.*)$/,
	//cop file in given location
	dist:function(path){
		fs.copyFileSync(dist, path);
	},

	newRegex:/[\s](acss-)?class(Name)?=['|"]([\w-_\s]+)['|"]([\s]acss-group=['|"][\s]*([\w-_]+)[\s]*['|"])?/,
	newRegexGlobal:/[\s](acss-)?class(Name)?=['|"]([\w-_\s]+)['|"]([\s]acss-group=['|"][\s]*([\w-_]+)[\s]*['|"])?/g,

	//it will hold allthe classname list that hadbeen alreay compiled
	classList:[],
	//it hold he group and their classnmaes
	groups:{},
	//compiles and return statemnt i.e .class{property:value}
	statementMaker:statementMaker,
	//return property:value for style="" attribute inputs classnames as strings
	style:function(a){ return this.statementMaker.groupForStyle(a)},
	 // return {borderRadius:'5px'} , js version 
	styleJs:function(a,b){ return this.statementMaker.groupForJs(a,b)},
	//same as above 
	styleJSX:function(a,b){ return this.statementMaker.groupForJs(a,b)},
	//init input
	input:null,
	//init output
	output:null,
	 //not in use rt now
	 //append:false,
	// compileStatement:"/* AliasCSS : This file is compile by AliasCSS Compiler*/\n\n\n",

	// return classLists, groups from given file, extracts classnames and return array
	extractClassName:function(file){
			let data=fs.readFileSync(file, 'utf-8');
			let classList=[];
			let groups={};

			//step 1: find class="" acss-group=""
			let matched=data.match(this.newRegexGlobal);

			 if( matched===null) return [[],{}];

			 	matched.forEach((match)=>{
			 		  let extraction=match.match(this.newRegex);
			 		 let classNames=extraction[3];
			 		 let group=extraction[5];

			 		 if(group){
						if(this.groups.hasOwnProperty(group) && this.groups[group]==classNames){
								//do nothing
						}else{
							this.groups[group]=classNames;
							groups[group]=classNames;
						}
					}

					classNames.split(/\s+/).forEach((e)=>{
						if(this.classList.indexOf(e)===-1){
							this.classList.push(e);
							classList.push(e);
						}
					});
			 		
			 	})
			
			return [classList.sort(), groups];
	},
	//--------------Main----------------------
	//compiles given file and return css statement
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
	//write css statement to css file
	writeToFile:function(file){
			let compileStatement=null;

			// if(!path.extname(file).match(this.test)) return ;
			
			if((compileStatement=this.compile(file))===null) return
					
			if(compileStatement===null || !compileStatement) return false;
			 
			try {
				
		  		fs.appendFileSync(this.output, `\n/* AliasCSS : These are classnames compiled  from ${path.basename(file)}*/\n\n`+compileStatement);
		  		console.log("Successfully  compiled acss from " + file);
			} catch (err) {
			  console.log('\x1b[31m',"Couldn't able to append compiled acss from " + file);
			  console.log(err);
			}
	},
	//for config.js file 
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


	// ----------------Laucher----------------
	//initialize input and output file and run the program
	run:function(input,output){
		// if(input){
		// 	this.input=input;
		// }
		// if(output){
		// 	this.output=output;
		// }
		
		if(this.input && this.output){
		this.input=fg.sync(this.input,{ dot: true });
		 if(this.input.length==0){
		 	console.error('Not a Valid input: No files found wtih the given input: Please Check your input @congif file');
		 	return;
		 }
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
	// watch foe this.input
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



