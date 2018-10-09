//Base
var ssBase = "1IOmsajQsqY6JrI8MEYUPNzlZFTNcOy3Zi0QZbPc6LJQ";
var shDirectorio = "tDirectorio";
var shUEN = "catUEN";
var shPob = "catPoblacion";
var shUbc = "catUbicacion";

function doGet() {
 var html = HtmlService.createTemplateFromFile('index').evaluate()
 .setTitle('Directorio Telefónico | Transpais')
 .setSandboxMode(HtmlService.SandboxMode.NATIVE);
 return html;
//  Logger.log('Cargado')
}

function getConsulta(){
  var tTemporal = new Array(1);
  var sheet = SpreadsheetApp.openById(ssBase).getSheetByName(shDirectorio);
  var lastRow = sheet.getLastRow();
  var range = sheet.getRange("A2:K" + lastRow);
  var values = range.getValues();
  tTemporal = values;
   
  //Logger.log(nombre);
  return tTemporal;
}
