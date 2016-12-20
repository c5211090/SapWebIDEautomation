

var fs = require('fs');


////read the console Data

exports.ReadConsole=function(){
console.log("======================================");
console.log("=========Reading from Console=========");
console.log("======================================");

element.all(by.xpath("//*[@id='Console']/div/div/div")).each(function(list) {
	
     list.getText().then(function (text) {
     console.log(text);
	 if((text.includes('(Builder) Build of') && text.includes('completed successfully')) || (text.includes('(Builder) Build of') && text.includes('failed')))
	 {
		 console.log("======================================");
		 console.log("========End of Console Message=========");
		 console.log("======================================");
	 }		 
	 
  });
 });
 var el = element.all(by.xpath("//*[@id='Console']/div/div/div"));
 return el.last().getText();
 
};


//Clear the Console Data
exports.clearconsole = function(tool_el,clearconsole_el){
	tool_el.click();
	clearconsole_el.click();
	}

    API Training Shop Blog About 

    © 2016 GitHub, Inc. Help Support 

