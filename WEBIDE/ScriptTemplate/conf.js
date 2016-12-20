exports.config = {
  profile: 'integration',
                
auth: {
  // form based
  'XSA-form': {
    user: 'devx_tech_user',
    pass: 'Abcd1234'
  }
  },   
  //specs:[abc.spec.js]
   
   
  timeouts:{
getPageTimeout : '300000',
idleTimeout : '200000',
  allScriptsTimeout : '200000',
  defaultTimeoutInterval: '300000'
  },
  
  baseUrl : 'https://mo-167390635.mo.sap.corp:53075',
  
  
  // workarounds, remove from here and from test when mentioned issues are resolved
  params: {
    // remove when https://github.wdf.sap.corp/I035254/openui5/issues/4 is fixed
    initialPageLoadWait: 5000
  },

//ignoreSync:true,

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 90000
    },
                
                locators:[{name:'./vyperLocators'}]

};