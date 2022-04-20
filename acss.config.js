module.exports={

	//input glob patterns, can be array of folder or files or both,

	input: 'tests_/*.html',
	 //Old-Ref:- input:'path/to/folderORFile',// can be array of folder or files or both, 
	

	//File mus be created manually
	output:'tests_/css/acss.css', 

		//Ignoring test as we have golb pattern now
	// test:/(html)$/,///(html|htm|acss|php|template)$/,//test  file extention 

	custom:{
		color:{
			'extreme':"olive",
			'paul':'pinky'

		},
		length:{
			'1cv':'25%'
		}

	},

	//working draft
	define:[],//define classname to be include in the file its like pre define classname: 
	//working draft
	inject:true,//inject @{{acss-inject}} replace it with statements
	//only allowed single classname with property value , no pseduo or medai query allowed
	extend:{
		//in browser-mode you can simply froup class="c-blue" acss-group="color-primary"
		'color-test':'color: blue;'
		//now you can use it with device or seduo --hover-outline-color
	},
	statement:`
	.body{
		color:red;
	}

	`,

	// group classname in single classname
	group:{
		'container':'p15px border1px-solid-light',
		'row':'--hover-m1cv c-red'
	},
	ignore:['fs12px', 'c-red'],

	truncate:true,

}