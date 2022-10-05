export default function (data) {
  return `Title: ${data.title}.

  —-----------------------------------------------------------------------------------------------------------------------
  
  ${data.errorMessage}
  
  Error Details 
  
  LOCAL DATE TIME: ${data.localDateTime}
  
  UTC DATE TIME: ${data.UTCDateTime}
  
  MESSAGE: ${data.message}
  
  CONSOLE LOG ERROR: ${data.consoleLogError}
  
  STACK TRACE: ${data.stackTrace}
  Environment Details
  
  SITE: ${data.site}
  
  CUSTOMER: ${data.customer}
  
  DATABASE: ${data.database}
  
  DEVICE: ${data.device}
  
  OS: ${data.os}
  
  BROWSER: 
  
  ${data.browsers}
  
  USER TYPE: ${data.userType}
  
  USER ID: ${data.userID}
  
  Preconditions
  
  ${data.preconditions}
  
  Steps to reproduce
  
  ${data.stepsToReproduce}
  
  Current behavior
  
  ${data.currentBehavior}
  
  
  
  Expected behavior
  
  ${data.expectedBehavior}
  
  
  Screenshots`;
}
