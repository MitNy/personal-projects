<script src="https://gist.github.com/e6129c9fd9bc74e814d0?file-pull-and-sync-data-between-google-doc-spreadsheet-and-mysql-gs" type="text/javascript"/>
var connectionName = 'IP:MySQL Port';
var user = '';
var userPwd = '';
var db = '';
var instanceUrl = 'jdbc:mysql://' + connectionName;
var dbUrl = instanceUrl + '/' + db;
var sheet = SpreadsheetApp.getActiveSheet();

function exportDatabase() {
  var conn = Jdbc.getConnection(dbUrl, user, userPwd);
  var stmt = conn.createStatement();
  stmt.setMaxRows(1000);
  var results = stmt.executeQuery("SELECT stuID,name,seminarTheme,seminarDate FROM seminar_list ORDER BY seminarDate DESC");
  var i=2;
  while(results.next()) {
      sID = sheet.getRange(i, 1);
      sName = sheet.getRange(i, 2);
      sTheme = sheet.getRange(i, 3);
      sDate = sheet.getRange(i, 4);
      sID.setValue(results.getString("Column"));
      sName.setValue(results.getString("Column"));
      sTheme.setValue(results.getString("Column"));
      sDate.setValue(results.getString("Column"));
      i++;
  }
  
  results.close();
  stmt.close();
  conn.close(); 
}

