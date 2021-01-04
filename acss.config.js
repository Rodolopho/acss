module.exports={

	input:['demo'],// can be array of folder or files or both, 
	// input:'path/to/folderORFile',// can be array of folder or files or both, 
	output:'demo/css/acss.css', //File must be  manually created first.

	test:/(html|htm|acss|php|template)$/,//test  file extention 

	custom:{
		color:{
			'extreme':"olive",

		},
		length:{
			'm2rem-1px':'calc(2rem-1px)'
		}

	},
	//only allowed single classname with property value , no pseduo or medai query allowed
	extend:{
		'outline-color':'outline-color: blue;'
	},
	// group classname in single classname
	group:{
		'container':'p15px border1px-solid-light holol',
		'row':'m2rem-1px'
	},
	truncate:true,

}