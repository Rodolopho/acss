//import color from './color.js';
export default function grid( str,custom){
	let result = "";

    str.split('--').forEach((each) => {

        if (each.match(/[_]/)) {
            result += '"'+ each.replace(/[_]/g, " ") + '"';
        } else {
            result += " "+each;
        }
    })

    return result.replace(/[\s]dot/g, " . ");
}



// match:
// 				grid-area
// 				grid-template-areas

// 				grid-template-columns 150px 150px 150px   name name name
// 				grid-template-rows has 


// 				grid-template-areas: "logo stats"
//                        "score stats"
//                        "board board"
//                        "... controls";



//                        grid-template-areas: "a b b"
//                        "a b b";
