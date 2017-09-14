var request = require('request');
var cheerio = require('cheerio');
var csvWriter = require('csv-write-stream')
var fs = require('fs');

var url = 'https://medium.com';
var jsonUrl=[];
request(url, function(err, resp, body){
  $ = cheerio.load(body);
  links = $('a'); //jquery get all hyperlinks
  $(links).each(function(i, link){
      jsonUrl.push($(link).attr('href'))
  
    
  });

//this is to convert json to csv
  csvdata="";
  seperator=";";
  nl="\n";
  for(a in jsonUrl){
      csvdata+=jsonUrl[a]+nl;
  }
  fs.writeFile("crawler.csv",csvdata,"utf-8",function(err){
if(err){
console.log("error"+err)
}else{
  console.log("completed")
}
});
});