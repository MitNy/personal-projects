<script src="https://gist.github.com/e6129c9fd9bc74e814d0?file-pull-and-sync-data-between-google-doc-spreadsheet-and-mysql-gs" type="text/javascript"/>
var connectionName = '168.188.123.125:3306';
var user = 'mitny';
var userPwd = 'skaksdkfdk';
var db = 'mitny';
var instanceUrl = 'jdbc:mysql://' + connectionName;
var dbUrl = instanceUrl + '/' + db;

var sheet = SpreadsheetApp.getActiveSpreadsheet();
var activeSheet = '';
/**
 * Create a new database within a Cloud SQL instance.
 */
/* A1 : 학번
 * B1 : 이름
 * C1 : 세미나 주제
 * D1 세미나 날짜
*/
function database_all() {
  activeSheet = "All";
  SpreadsheetApp.setActiveSheet(sheet.getSheetByName(activeSheet));
  var conn = Jdbc.getConnection(dbUrl, user, userPwd);
  var stmt = conn.createStatement();
  stmt.setMaxRows(1000);
  var results = stmt.executeQuery("SELECT stuID,name,seminarTheme,seminarDate FROM seminar_list ORDER BY seminarDate DESC");
  var i=2;
  while(results.next()) {
    sID = sheet.getRange(activeSheet+"!A"+i);
    sName = sheet.getRange(activeSheet+"!B"+i);
    sTheme = sheet.getRange(activeSheet+"!C"+i);
    sDate = sheet.getRange(activeSheet+"!D"+i);
    sID.setValue(results.getString("stuID"));
    sName.setValue(results.getString("name"));
    sTheme.setValue(results.getString("seminarTheme"));
    sDate.setValue(results.getString("seminarDate"));
    i++;
  }
  results.close();
  stmt.close();
  conn.close();
}

function database_2019() {
  activeSheet = "2019";
  SpreadsheetApp.setActiveSheet(sheet.getSheetByName(activeSheet));
  var conn = Jdbc.getConnection(dbUrl, user, userPwd);
  var stmt = conn.createStatement();
  stmt.setMaxRows(1000);
  var results = stmt.executeQuery("SELECT stuID,name,seminarTheme,seminarDate FROM seminar_list WHERE seminarDate BETWEEN '2019-01-01' AND '2019-12-31' ORDER BY seminarDate DESC");
  var i=2;
  while(results.next()) {
    sID = sheet.getRange(activeSheet+"!A"+i);
    sName = sheet.getRange(activeSheet+"!B"+i);
    sTheme = sheet.getRange(activeSheet+"!C"+i);
    sDate = sheet.getRange(activeSheet+"!D"+i);
    sID.setValue(results.getString("stuID"));
    sName.setValue(results.getString("name"));
    sTheme.setValue(results.getString("seminarTheme"));
    sDate.setValue(results.getString("seminarDate"));
    i++;
  }
  results.close();
  stmt.close();
  conn.close();
}

function database_2018() {
  activeSheet = "2018";
  SpreadsheetApp.setActiveSheet(sheet.getSheetByName(activeSheet));
  var conn = Jdbc.getConnection(dbUrl, user, userPwd);
  var stmt = conn.createStatement();
  stmt.setMaxRows(1000);
  var results = stmt.executeQuery("SELECT stuID,name,seminarTheme,seminarDate FROM seminar_list WHERE seminarDate BETWEEN '2018-01-01' AND '2018-12-31' ORDER BY seminarDate DESC");
  var i=2;
  while(results.next()) {
    sID = sheet.getRange(activeSheet+"!A"+i);
    sName = sheet.getRange(activeSheet+"!B"+i);
    sTheme = sheet.getRange(activeSheet+"!C"+i);
    sDate = sheet.getRange(activeSheet+"!D"+i);
    sID.setValue(results.getString("stuID"));
    sName.setValue(results.getString("name"));
    sTheme.setValue(results.getString("seminarTheme"));
    sDate.setValue(results.getString("seminarDate"));
    i++;
  }
  results.close();
  stmt.close();
  conn.close();
}

function database_2017() {
  activeSheet = "2017";
  SpreadsheetApp.setActiveSheet(sheet.getSheetByName(activeSheet));
  var conn = Jdbc.getConnection(dbUrl, user, userPwd);
  var stmt = conn.createStatement();
  stmt.setMaxRows(1000);
  var results = stmt.executeQuery("SELECT stuID,name,seminarTheme,seminarDate FROM seminar_list WHERE seminarDate BETWEEN '2017-01-01' AND '2017-12-31' ORDER BY seminarDate DESC");
  var i=2;
  while(results.next()) {
    sID = sheet.getRange(activeSheet+"!A"+i);
    sName = sheet.getRange(activeSheet+"!B"+i);
    sTheme = sheet.getRange(activeSheet+"!C"+i);
    sDate = sheet.getRange(activeSheet+"!D"+i);
    sID.setValue(results.getString("stuID"));
    sName.setValue(results.getString("name"));
    sTheme.setValue(results.getString("seminarTheme"));
    sDate.setValue(results.getString("seminarDate"));
    i++;
  }
  results.close();
  stmt.close();
  conn.close();
}

function database_2016() {
  activeSheet = "2016";
  SpreadsheetApp.setActiveSheet(sheet.getSheetByName(activeSheet));
  var conn = Jdbc.getConnection(dbUrl, user, userPwd);
  var stmt = conn.createStatement();
  stmt.setMaxRows(1000);
  var results = stmt.executeQuery("SELECT stuID,name,seminarTheme,seminarDate FROM seminar_list WHERE seminarDate BETWEEN '2016-01-01' AND '2016-12-31' ORDER BY seminarDate DESC");
  var i=2;
  while(results.next()) {
    sID = sheet.getRange(activeSheet+"!A"+i);
    sName = sheet.getRange(activeSheet+"!B"+i);
    sTheme = sheet.getRange(activeSheet+"!C"+i);
    sDate = sheet.getRange(activeSheet+"!D"+i);
    sID.setValue(results.getString("stuID"));
    sName.setValue(results.getString("name"));
    sTheme.setValue(results.getString("seminarTheme"));
    sDate.setValue(results.getString("seminarDate"));
    i++;
  }
  results.close();
  stmt.close();
  conn.close();
}

function main() {
  database_all();
  database_2019();
  database_2018();
  database_2017();
  database_2016();
}
