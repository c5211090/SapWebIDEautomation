var fs = require('fs');

///highlight an element
exports.highlightElement = function(el){
  browser.driver.executeScript("arguments[0].setAttribute('style', 'background: yellow; border: 2px solid red;', arguments[1]);",el.getWebElement());

  
};


//Switch to new window
exports.switchToAnotherWindow = function()
{
  console.log('switch to new window');
  //var mainWindow = browser.getWindowHandle();
	browser.getAllWindowHandles().then(function(handles) {
        mainWindow = handles[0]; //at this point there should be only 1 window
		    console.log(mainWindow);
		});
	browser.getAllWindowHandles().then(function (handles) {      
    handles.forEach(function(handle) {
    if (handle !== mainWindow) {
    	console.log(handle);
        browser.switchTo().window(handle);
        browser.sleep(2000);
        }
      });
});  
};


///open a new window
exports.openNewWindow=function(url)
	{
	browser.executeScript('window.open()').then(function () {
	 browser.getAllWindowHandles().then(function (handles) {
         var secondWindow = handles[1];
          browser.switchTo().window(secondWindow).then(function () {
          browser.get(url);
          browser.sleep(1000);
          	});
		});
 		});	
	};
	
	

//explicit wait	
exports.ExplicitWaitUntil=function(el,waitfor){
	console.log('explicit wait');
	var until = protractor.ExpectedConditions;
	browser.wait(until.visibilityOf(el), waitfor,'Element taking too long to appear...').then(function(present){
    	console.log("Element found");
	});
   };

//fileupload

exports.fileUpload=function(filepath)
{
	//filepath = "ile:///C:/folder/folder1/file.exe"
	shell.run(filepath);
	browser.sleep(10000);
};



// Expand Folder/TreeNode
exports.expandFolder = function(el,foldername)
{
	el.getAttribute('id').then(function(id){
		el.getUI5Attribute('expanded').then(function(expand){
			if(expand=='false')
			{
			element.all(by.xpath("//li[@title='"+foldername+"']")).each(function(list){
			list.getAttribute('id').then(function(listid){
			if(listid == id)
			{
			browser.executeScript("arguments[0].click();", list.getWebElement());
			}
			});
			});
			}
		});
		});
};
	
	
// RightClick for the context menu
exports.rightClick_CntxtMenu = function(el)
{
	browser.actions().mouseMove(el).perform();
	browser.actions().click(protractor.Button.RIGHT).perform(); 
	browser.sleep(10000);
};