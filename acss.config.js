module.exports={

	input:['test/index.html','test/index2.html'],// can be array of folder or files or both, 
	// input:'path/to/folderORFile',// can be array of folder or files or both, 
	output:'test/css/acss.css', //File must be  manually created first.

	test:/(acss)$/,///(html|htm|acss|php|template)$/,//test  file extention 

	custom:{
		color:{
			'extreme':"olive",

		},
		length:{
			'1cv':'25%'
		}

	},
	//only allowed single classname with property value , no pseduo or medai query allowed
	extend:{
		'color-test':'color: blue;'
		//now you can use it with device or seduo --hover-outline-color
	},

	// group classname in single classname
	group:{
		'container':'p15px border1px-solid-light',
		'row':'m1cv'
	},
	ignore:['fwn'],
	truncate:true,

}