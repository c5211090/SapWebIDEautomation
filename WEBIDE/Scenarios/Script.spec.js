var utils = require('./Utils');
describe ( 'Script', function () {



it('step1 - Click on File Menu', function () {
	//*********************Block for sap.ui.unified.MenuItem - Perform Click*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.ui.unified.MenuItem","mProperties":{"text":"File"}},
							"parentProperties":{"metadata":"sap.ui.commons.MenuBar","mProperties":{}},
							"prevSiblingProperties":{},
							"nextSiblingProperties":{"metadata":"sap.ui.unified.MenuItem","mProperties":{"text":"Edit"}},
							"childProperties":{}
							};
var el=element(by.ui5(ui5ControlProperties));
utils.highlightElement(el);
el.click();
//!!*******************************************************************************************************

});


it('step2 -  Click on New', function () {
//*********************Block for sap.ui.unified.MenuItem - Perform Click*****************************************************************
browser.sleep(5000);
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.ui.unified.MenuItem","mProperties":{"text":"New"}},
							"parentProperties":{"metadata":"sap.ui.unified.Menu","mProperties":{}},
							"prevSiblingProperties":{},
							"nextSiblingProperties":{"metadata":"sap.ui.unified.MenuItem","mProperties":{"text":"Close"}},
							"childProperties":{}
							};
var el=element(by.ui5(ui5ControlProperties));
utils.highlightElement(el);
el.click();
//!!*******************************************************************************************************
});


it('step3 - Click on Project from template', function () {
	//*********************Block for sap.ui.unified.MenuItem - Perform Click*****************************************************************
	browser.sleep(5000);
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.ui.unified.MenuItem","mProperties":{"text":"Project from Template"}},
							"parentProperties":{"metadata":"sap.ui.unified.Menu","mProperties":{}},
							"prevSiblingProperties":{"metadata":"sap.ui.unified.MenuItem","mProperties":{"text":"Folder"}},
							"nextSiblingProperties":{},
							"childProperties":{}
							};
var el=element(by.ui5(ui5ControlProperties));
utils.highlightElement(el);
el.click();
//!!*******************************************************************************************************
browser.sleep(10000);
});




});