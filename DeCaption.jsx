//create and duplicate document
app.activeDocument.duplicate(app.activeDocument.name);
var docRef = app.activeDocument;

//pull the IPTC data from the file
var strCaption = docRef.info.caption;
var strAuthor = docRef.info.author;
var strCompany = docRef.info.credit;

//regular expressions to remove the pre and post parts of the caption
var preRegEx = /(.*--)/g;
var postRegEx = new RegExp("\\s\\(" + strAuthor + "\/" + strCompany + "+.*");

//remove the unnecessary caption portions and trim leading spaces
strCaption = strCaption.replace(preRegEx,"");
strCaption = strCaption.replace(postRegEx,"");
strCaption = strCaption.replace(/ */,"");

//write the caption to the file
docRef.info.caption = strCaption;
