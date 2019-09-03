function doGet(){
  var tmp = HtmlService.createTemplateFromFile("page");

  var url = "https://docs.google.com/spreadsheets/d/1trFxN1I6UT_1pMnObl8R2HowsCfS-qmrv-VFf5M7p3I/edit#gid=0"
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Data");

  var sheet = SpreadsheetApp.openByUrl(url);
  var data = sheet.getDataRange().getValues();
  tmp.Data = data;
  return tmp.evaluate();
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function post(Thing, Name, Skys){
  var url = "https://docs.google.com/spreadsheets/d/1trFxN1I6UT_1pMnObl8R2HowsCfS-qmrv-VFf5M7p3I/edit#gid=0"
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Data");
  ws.appendRow([Thing, Name, Skys]);
}
