module.exports = function (app) {
	console.log(" print pdf");
	var fs = require('fs');

  var events = require('events');
  var eventEmitter = new events.EventEmitter();

    var mkdirp = require('mkdirp');
    var path = require('path');
    var ObjectID = require('mongodb').ObjectID;
    var mongojs=require('mongojs');
    var Decimal128 = require('mongodb').Decimal128;
    var db=mongojs('inventory',['user','tags','transaction','saleInvoice','mode','transactionDetail','batch','bank',
  'transactionSeriesInvoice','itemrate','item','menu','order','useritem','purity','uom','pct','labcal','useradj',
  'barCodeSummary','stockPointMaster','configurations','inventoryGroupMaster','salesCategoryMaster','itemType','taxrate',
  'items','tax','taxation','inventoryGroupValueNotation','inventoryGroupValueNotationDaily','salesPerson','loginDetails',
  'trHeaders','gIControlTables','history','ledgerActs','ledgeraccounts','mainclasses','maingroups','mcIds',
  'roundOffConfig','sgIds','subgroups','subscribers','trDetails','transactionInvoice','ugIds','updatelist','user',
  'users','merchantDetails','trail','staff','cardType','orders']);

var fileNameOrder = null
   //pdf trial start
function pdfPrintCall(orderNO,partyNames,staff,address){
var PDFDocument, doc;
var fs = require('fs');

//var PdfTable = require('voilab-pdf-table'),
    //PdfDocument = require('pdfkit');

PDFDocument = require('pdfkit');
doc1 = new PDFDocument ;
 
            var datePrint = new Date();
            var day = datePrint.getDate();
            var month = datePrint.getMonth() + 1;
            var year = datePrint.getFullYear();
            var hours = datePrint.getHours(); // => 9
            var minutes = datePrint.getMinutes(); // =>  30
            var seconds = datePrint.getSeconds(); // => 51
                        
            var postfix = hours+'.'+minutes+'.'+seconds+'.'+day + "." + month + "." + year;
            var dateDisplay = day + "/" + month + "/" + year;
            fileNameOrder = 'order'+postfix+'.pdf'
doc1.pipe (fs.createWriteStream('./public/pdfPrint/order'+postfix+'.pdf'))

console.log(pdfMerchantData)
  var heightOfHeader = 20;
doc1.font('Times-Roman')
   .fontSize(15)
   
   .text(pdfMerchantData[0].ShopName, 10, heightOfHeader)
   // heightOfHeader += 20;
   // .text(pdfMerchantData[0].Address[0].Landmark, 10,heightOfHeader)
   heightOfHeader += 20;
   //+" "+pdfMerchantData[0].Address[2].Place
   doc1.text(pdfMerchantData[0].Address[1].Street+" "+pdfMerchantData[0].Address[2].Place, 10,heightOfHeader)
   heightOfHeader += 20;
   doc1.text(pdfMerchantData[0].Address[3].Phone+" "+"/ "+pdfMerchantData[0].Address[4].Mobile, 10, heightOfHeader)
     heightOfHeader += 20;
    doc1.text(pdfMerchantData[0].Address[5].email, 10, heightOfHeader)

doc1.moveDown()

    doc1.text('Order',{align: 'center'})
    //party details 
     heightOfHeader += 20; 
     var rigthSide = heightOfHeader; 
    doc1.text('PartyName'+":"+partyNames , 10, heightOfHeader)
     heightOfHeader += 20;  
    doc1.text('Address'+":"+address, 10, heightOfHeader)
     heightOfHeader += 20;  
    doc1.text('City'+':'+pdfPartyCity, 10, heightOfHeader)
       //heightOfHeader += 20;  
    doc1.text('Order No'+":"+orderNO , 400, rigthSide)
    rigthSide += 20;
    doc1.text('Date'+":"+dateDisplay, 400, rigthSide)
    rigthSide += 20;
    doc1.text('Staff'+':'+staff, 400, rigthSide)
    doc1.save()
    heightOfHeader += 20;
   doc1.moveTo(10, heightOfHeader)
   .lineTo(600,heightOfHeader)
    .fill("black")

    
   //  heightOfHeader += 20;
   //  doc1.fontSize(12)
   //  .moveTo(10, heightOfHeader)
   // .lineTo(600,heightOfHeader)
   //  .fill("black")
//heightOfHeader += 20;
var width1 = 0;
var height1 = heightOfHeader+2;
doc1.fontSize(12)
//table hearder displaying
    var widthHeader = 10;
    textInRowFirst(doc1, 'Particulars ', height1,widthHeader);
    widthHeader += 140;
    textInRowFirst(doc1, 'Purity', height1,widthHeader);
     widthHeader += 40;
    textInRowFirst(doc1, 'Sc.Wt', height1,widthHeader);
     widthHeader += 40;
    textInRowFirst(doc1, 'St.Wt', height1,widthHeader);
     widthHeader += 40;
    textInRowFirst(doc1, 'NettWt', height1,widthHeader);
     widthHeader += 40;
    textInRowFirst(doc1, 'Wastage', height1,widthHeader);
     widthHeader += 50;
    textInRowFirst(doc1, 'Rate', height1,widthHeader);
     widthHeader += 40;
    textInRowFirst(doc1, 'StAmt', height1,widthHeader);
     widthHeader += 40;
    textInRowFirst(doc1, 'Labour', height1,widthHeader);
    widthHeader += 40;
    textInRowFirst(doc1, 'Due ', height1,widthHeader);
    widthHeader += 60;
    textInRowFirst(doc1, 'Total', height1,widthHeader);
//textInRowFirst(doc1, 'Sc.Wt', 300,width1);
       heightOfHeader += 20;
    doc1.fontSize(12)
    .moveTo(10, heightOfHeader)
   .lineTo(600,heightOfHeader)
    .fill("black")

function textInRowFirst(doc1, text, heigth,width) {
  doc1.y = heigth;
  doc1.x = width;
 // width1 += 54;
  doc1.fillColor('black')
  doc1.text(text, {
    paragraphGap: 5,
    indent: 5,
    align: 'justify',
    columns: 1,

  });
  return doc1
}//textInRowFirst
  heightOfHeader += 20;
   var heightOfPage = heightOfHeader;
   var detailsDisplayLength = detailsDisplay.length-1;
   incrementDisplay(detailsDisplayLength,heightOfPage)

      //var increment = 0;
      
    function incrementDisplay (j,height1) {
       //console.log( " before    jjjjjjjjjjjjjjjjjjjjjjjj "+j+ typeof(j))
          if (j>=0) {
             width1 = 0;
             height1 = height1;
              var widthBody = 10;
   
            // orderValue  = parseFloat(orderValue) + parseFloat(detailsDisplay[j].final)
            // taxAmount = taxAmount + parseFloat(detailsDisplay[j].taxamt)
            console.log(  parseFloat(orderValue) +"   orderValue "+"  ijjjjjjjjjjjjjjjjjjjjjjjj "+ parseFloat(detailsDisplay[j].final))
            textInRowFirst(doc1, detailsDisplay[j].itemName, height1,widthBody);
            widthBody += 140;
            textInRowFirst(doc1, detailsDisplay[j].purity, height1,widthBody);
            widthBody += 40;
            textInRowFirst(doc1, detailsDisplay[j].gwt, height1,widthBody);
            widthBody += 40;
            textInRowFirst(doc1, detailsDisplay[j].stwt, height1,widthBody);
            widthBody += 40;
            textInRowFirst(doc1, detailsDisplay[j].ntwt, height1,widthBody);
            widthBody += 40;
            textInRowFirst(doc1, detailsDisplay[j].wastage, height1,widthBody);
            widthBody += 50;
            textInRowFirst(doc1, detailsDisplay[j].rate, height1,widthBody);
            widthBody += 40;
            textInRowFirst(doc1, detailsDisplay[j].stval, height1,widthBody);
            widthBody += 40;
            textInRowFirst(doc1, detailsDisplay[j].labval, height1,widthBody);
             var datePrint = new Date(detailsDisplay[j].date);
            var day = datePrint.getDate();
            var month = datePrint.getMonth() + 1;
            var year = datePrint.getFullYear();
            var hours = datePrint.getHours(); // => 9
            var minutes = datePrint.getMinutes(); // =>  30
            var seconds = datePrint.getSeconds(); // => 51
                        
            //var postfix = hours+'.'+minutes+'.'+seconds+'.'+day + "." + month + "." + year;
            var dateDisplay = day + "/" + month + "/" + year;
            widthBody += 40;  
            textInRowFirst(doc1, dateDisplay, height1,widthBody);
            widthBody += 60;
            textInRowFirst(doc1, detailsDisplay[j].final, height1,widthBody);
            //detailsDisplay.length --;
            heightOfPage += 20;
            detailsDisplayLength -- ;
             console.log(" increment  detailsDisplay.length "+detailsDisplayLength)
           
            incrementDisplay(detailsDisplayLength,heightOfPage) 
          }; 
      
    }//incrementDisplay
    

     console.log(" heightOfPage line before "+heightOfPage)        
   doc1.moveTo(10, heightOfPage += 20)
   .lineTo(600,heightOfPage)
    .fill("black") 
    // heightOfPage += 20
     doc1.y = heightOfPage;
    doc1.x = 10;

     console.log(" heightOfPage line after "+heightOfPage+" doc1.y = "+doc1.y) 
    heightOfPage += 20;
    doc1.y = heightOfPage;
     console.log(" heightOfPage tax to display "+heightOfPage+" doc1.y = "+doc1.y) 
    doc1.text('Tax Amount (Estimated)'+':'+(taxAmount).toFixed(2),{align: 'right'})
    //doc1.text('Tax vijay (Estimated)'+':'+'2000.00',150,320)
    heightOfPage += 20;
    doc1.y = heightOfPage;
    doc1.text('Order Value (Estimated)'+':'+(orderValue).toFixed(2),{align: 'right',})
    heightOfPage += 20;
    doc1.y = heightOfPage;
    doc1.text('Cash Advance '+':'+2000.00,{align: 'left'})
     heightOfPage += 20;
    doc1.y = heightOfPage;
    doc1.text('Material Advance '+' '+' Old Gold '+' '+'10gms',{align: 'left'})
      heightOfPage += 40;
    doc1.y = heightOfPage;
    doc1.text('Party Signature',{align: 'left'})
    .text('For '+pdfMerchantData[0].ShopName,10,heightOfPage,{align: 'right'})

   doc1.end()

}// pdfPrintCall



var fileNameMaterialReceipt = null;

    //pdf trial start
function pdfPrintCallReceipt(orderNO,partyNames,staff,address,voucherNo){
var PDFDocument, doc;
var fs = require('fs');

//var PdfTable = require('voilab-pdf-table'),
    //PdfDocument = require('pdfkit');
   

PDFDocument = require('pdfkit');
doc = new PDFDocument;
 
            var datePrint = new Date();
            var day = datePrint.getDate();
            var month = datePrint.getMonth() + 1;
            var year = datePrint.getFullYear();
            var hours = datePrint.getHours(); // => 9
            var minutes = datePrint.getMinutes(); // =>  30
            var seconds = datePrint.getSeconds(); // => 51
                        
            var postfix = hours+'.'+minutes+'.'+seconds+'.'+day + "." + month + "." + year;
            var dateDisplay = day + "/" + month + "/" + year;
             fileNameMaterialReceipt = 'MaterialReceipt'+postfix+'.pdf'
doc.pipe (fs.createWriteStream('./public/pdfPrint/MaterialReceipt'+postfix+'.pdf'))

console.log(pdfMerchantData)
  var heightOfHeader = 20;
doc.font('Times-Roman')
   .fontSize(15)
   
   .text(pdfMerchantData[0].ShopName, 10, heightOfHeader)
   // heightOfHeader += 20;
   // .text(pdfMerchantData[0].Address[0].Landmark, 10,heightOfHeader)
   heightOfHeader += 20;
   //+" "+pdfMerchantData[0].Address[2].Place
   doc.text(pdfMerchantData[0].Address[1].Street+" "+pdfMerchantData[0].Address[2].Place, 10,heightOfHeader)
   heightOfHeader += 20;
   doc.text(pdfMerchantData[0].Address[3].Phone+" "+"/ "+pdfMerchantData[0].Address[4].Mobile, 10, heightOfHeader)
     heightOfHeader += 20;
    doc.text(pdfMerchantData[0].Address[5].email, 10, heightOfHeader)

doc.moveDown()

    doc.text('Material Receipt Voucher',{align: 'center'})
    //party details 
     heightOfHeader += 40; 
     var rigthSide = heightOfHeader; 
    doc.text('PartyName'+":"+partyNames , 10, heightOfHeader)
     heightOfHeader += 20;  
    doc.text('Address'+":"+address, 10, heightOfHeader)
     heightOfHeader += 20;  
    doc.text('City'+':'+pdfPartyCity, 10, heightOfHeader)
       //heightOfHeader += 20;  
    doc.text('Voucher No'+":"+voucherNo , 400, rigthSide)
    rigthSide += 20;
    doc.text('Date'+":"+dateDisplay, 400, rigthSide)
    // rigthSide += 20;
    // doc.text('Staff'+':'+staff, 400, rigthSide)
    doc.save()
    heightOfHeader += 20;
   doc.moveTo(10, heightOfHeader)
   .lineTo(600,heightOfHeader)
    .fill("black")

    
   //  heightOfHeader += 20;
   //  doc.fontSize(12)
   //  .moveTo(10, heightOfHeader)
   // .lineTo(600,heightOfHeader)
   //  .fill("black")
//heightOfHeader += 20;
var width1 = 0;
var height1 = heightOfHeader+2;
doc.fontSize(12)
//table hearder displaying
    var widthHeader = 12;
    textInRowFirst(doc, 'Particulars ', height1,widthHeader);
    widthHeader += 200;
    textInRowFirst(doc, 'Purity', height1,widthHeader);
     widthHeader += 80;
    textInRowFirst(doc, 'Sc.Wt', height1,widthHeader);
    widthHeader += 80;
    textInRowFirst(doc, 'NettWt', height1,widthHeader);
     widthHeader += 80;
    textInRowFirst(doc, 'Labour', height1,widthHeader);
  
//textInRowFirst(doc, 'Sc.Wt', 300,width1);
       heightOfHeader += 20;
    doc.fontSize(12)
    .moveTo(10, heightOfHeader)
   .lineTo(600,heightOfHeader)
    .fill("black")

function textInRowFirst(doc, text, heigth,width) {
  doc.y = heigth;
  doc.x = width;
 // width1 += 54;
  doc.fillColor('black')
  doc.text(text, {
    paragraphGap: 5,
    indent: 5,
    align: 'justify',
    columns: 1,

  });
  return doc
}//textInRowFirst
  heightOfHeader += 20;
   var heightOfPage = heightOfHeader;
   var detailsDisplayLength = detailsDisplay.length-1;
   incrementDisplay(detailsDisplayLength,heightOfPage)

      //var increment = 0;
      
    function incrementDisplay (j,height1) {
       //console.log( " before    jjjjjjjjjjjjjjjjjjjjjjjj "+j+ typeof(j))
          if (j>=0) {
             width1 = 0;
             height1 = height1;
              var widthBody = 10;
   
            // orderValue  = parseFloat(orderValue) + parseFloat(detailsDisplay[j].final)
            // taxAmount = taxAmount + parseFloat(detailsDisplay[j].taxamt)
            console.log(  parseFloat(orderValue) +"   orderValue "+"  ijjjjjjjjjjjjjjjjjjjjjjjj "+ parseFloat(detailsDisplay[j].final))
            textInRowFirst(doc, detailsDisplay[j].itemName, height1,widthBody);
            widthBody += 200;
            textInRowFirst(doc, detailsDisplay[j].purity, height1,widthBody);
            widthBody += 80;
            textInRowFirst(doc, detailsDisplay[j].gwt, height1,widthBody);
            widthBody += 80;
            textInRowFirst(doc, detailsDisplay[j].ntwt, height1,widthBody);
             widthBody += 80;
            textInRowFirst(doc, detailsDisplay[j].labval, height1,widthBody);
             //detailsDisplay.length --;
            heightOfPage += 20;
            detailsDisplayLength -- ;
             console.log(" increment  detailsDisplay.length "+detailsDisplayLength)
           
            incrementDisplay(detailsDisplayLength,heightOfPage) 
          }; 
      
    }//incrementDisplay
    

     console.log(" heightOfPage line before "+heightOfPage)        
   doc.moveTo(10, heightOfPage += 20)
   .lineTo(600,heightOfPage)
    .fill("black") 
    // heightOfPage += 20
     doc.y = heightOfPage;
    doc.x = 10;

    heightOfPage += 40;
    
    doc.y = heightOfPage;
    doc.text('Party Signature',{align: 'left'})
    .text('For '+pdfMerchantData[0].ShopName,10,heightOfPage,{align: 'right'})
       //console.log(" start fileName fileName fileName fileName "+fileName)
   doc.end()
   //console.log(" end fileName fileName fileName fileName "+fileName)
     // require('child_process').exec(__dirname + "/batchfile.bat", function (err, stdout, stderr) {
                    
     //               if (err) {
     //                 return console.log(err);
     //                }
     //                console.log(" print calls here ")
     //                //setTimeout(deleteFileCall, 2000);
     //                // function deleteFileCall(){
     //                //   fs.unlink('Data/PrnFiles/prnfile.prn');
                 
     //                // }
     //              //  console.log(stdout);
     //         });//require

}// pdfPrintCall


var pdfMerchantData = null;
function merchantDetailsCall(orderNO,partyNames,staff,condition){
  db.merchantDetails.find(function(err,merchantData){
        console.log(merchantData);
        pdfMerchantData = merchantData;
       // if (condition != 'receipt' ) {
          //detailsDisplayCall(orderNO,partyNames,staff,condition)
        // }else{
          // chan //
          partyDetailsCall(orderNO,partyNames,staff,condition)
        // }
        
        //saleCall()
  })
}//merchantDetailsCall
var pdfPartyData = null;
var pdfPartyCity = null;
function partyDetailsCall(orderNO,partyNames,staff,condition){
  db.subscribers.find({ "subscriber" : partyNames},function(err,partyData){
        console.log(" partyDetailsCall ")
        //console.log(partyData);
        pdfPartyData = partyData;
       
        console.log( pdfPartyData[0].data.address1);
        console.log( pdfPartyData[0].data.city1.id);
       var cityId = [ 
                      {"id": 1, "value": "Bengaluru", "type": "fps_city"},
                      {"id": 2, "value": "Mysore", "type": "fps_city"},
                      {"id": 3, "value": "Mangalore", "type": "fps_city"},
                      {"id": 4, "value": "Belgaum", "type": "fps_city"},
                      {"id": 5, "value": "Gulbarga", "type": "fps_city"},
                      {"id": 6, "value": "Davanagere", "type": "fps_city"},
                      {"id": 7, "value": "Bellary", "type": "fps_city"},
                      {"id": 8, "value": "Bijapur", "type": "fps_city"},
                      {"id": 9, "value": "Shimoga", "type": "fps_city"},
                      {"id": 10, "value": "Tumkur", "type": "fps_city"}
                   ]
        for (var i = cityId.length - 1; i >= 0; i--) {
            //console.log("city id "+cityId[i].id)
           
          if (pdfPartyData[0].data.city1.id == cityId[i].id ) {
             pdfPartyCity = cityId[i].value ;
             console.log(cityId[i].value+" "+cityId[i].id+" "+pdfPartyData[0].data.city1.id)
          };
        };
//chan
         detailsDisplayCall(orderNO,partyNames,staff,condition)
   //    
      //  pdfPrintCall(orderNO,partyNames,staff,pdfPartyData[0].data.address1,voucherNo)
       // detailsDisplayCall(orderNO,partyNames,staff)
        //saleCall()
  })
}//partyDetailsCall
var detailsDisplay = null;
var taxAmount = 0;
var orderValue = 0;
var  voucherNo = null;
function detailsDisplayCall(orderNO,partyNames,staff,condition){
  //condition == 'receipt'
  if (condition == 'receipt') {
    db.transactionDetail.find({  "orderNo" : orderNO },function(err,detailsDisplayData){
        
        detailsDisplay = detailsDisplayData;
         voucherNo = detailsDisplayData[0].voucherNo ;
          console.log(voucherNo+"length to call in details  "+detailsDisplayData.length+detailsDisplayData[0].voucherNo);
          pdfPrintCallReceipt(orderNO,partyNames,staff,pdfPartyData[0].data.address1,voucherNo)
      
    })
  }else if(condition == 'order'){

         db.orders.find({ "orderNO" :orderNO },function(err,detailsDisplayData){
        console.log("length to call in details  "+detailsDisplayData.length);
        detailsDisplay = detailsDisplayData;
        //console.log(detailsDisplayData)
        for (var i = detailsDisplay.length - 1; i >= 0; i--) {
          //Things[i]
             orderValue  = orderValue + parseFloat(detailsDisplay[i].final)
            
             taxAmount = taxAmount + parseFloat(detailsDisplay[i].taxamt)
         
        };
        pdfPrintCall(orderNO,partyNames,staff,pdfPartyData[0].data.address1)
         
        //partyDetailsCall(orderNO,partyNames,staff)
       // saleCall(orderNO,partyNames,staff)
  })

  }


}//detailsDisplayCall()

//merchantDetailsCall();
//pdf trial end

app.post('/api/orderDetailsMaterialAdvancePdf',function(req,res){ 
	console.log(" order details pdf");
	console.log(req.body);
	console.log("   end here  here  ");
    //merchantDetailsCall("OD6",'Vinay','staff','order');
  merchantDetailsCall(req.body.orderNO,req.body.partyNames,'staff','order');
   setTimeout(function(){
   console.log(fileNameMaterialReceipt+" "+ fileNameOrder+" result fdyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy ")
    res.json({
      'receiptFile':fileNameMaterialReceipt,
      'orderFile':fileNameOrder
    });
 }, 2000);
	//merchantDetailsCall(req.body.orderNO,req.body.partyNames,'staff',condition);
})
 // merchantDetailsCall("OD6",'Vinay','staff','receipt');
 // merchantDetailsCall("OD6",'Vinay','staff','order');

//  const { spawn } = require('child_process');
// const bat = spawn('cmd.exe', ['./pdfPrint', 'MaterialReceipt18.15.11.2.3.2018.pdf']);
//  end of order print //
app.get('/api/Orderprefixs1234',function(req,res){
//iooppp
  console.log("   start here       here     ")
   merchantDetailsCall("OD6",'Vinay','staff','receipt');
  merchantDetailsCall("OD6",'Vinay','staff','order');
//console.log(" fdyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy ") 
//   var data =fs.readFileSync('./pdfPrint/MaterialReceipt18.15.11.2.3.2018.pdf');
 setTimeout(function(){
   console.log(fileNameMaterialReceipt+" "+ fileNameOrder+" result fdyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy ")
    res.json({
      'receiptFile':fileNameMaterialReceipt,
      'orderFile':fileNameOrder
    });
 }, 2000);
// setTimeout(
//    console.log(fileNameMaterialReceipt+" "+ fileNameOrder+" result fdyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy ")

//  , 3000);
  //merchantDetailsCall(req.body.orderNO,req.body.partyNames,'staff',condition);
})
 // require('child_process').exec(__dirname + "/batchfileCopy.bat", function (err, stdout, stderr) {
                    
 //                   if (err) {
 //                     return console.log(err);
 //                    }
 //                    console.log(" print calls here ")
 //                    //setTimeout(deleteFileCall, 2000);
 //                    // function deleteFileCall(){
 //                    //   fs.unlink('Data/PrnFiles/prnfile.prn');
                 
 //                    // }
 //                  //  console.log(stdout);
 //             });//require

// const { app } = require('electron')
// const PDFWindow = require('electron-pdf-window')

// app.on('ready', () => {
//   const win = new PDFWindow({
//     width: 800,
//     height: 600
//   })
// // C:/Users/user/Desktop/Code/march/Code0203INT/pdfPrint
//   win.loadURL('file://///C://username/desktop/myfile.pdf')
// })
// var data =fs.readFileSync('./pdfPrint/MaterialReceipt18.15.11.2.3.2018.pdf');
// res.contentType("application/pdf");
// res.send(data);
// var nrc = require('node-run-cmd');
// console.log(" errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr ");
// nrc.run('C:/Users/user/Desktop/Code/march/Code0203INT/pdfPrint/MaterialReceipt18.15.11.2.3.2018.pdf').then(function(){ console.log(" cmd cmd cmd ") });


 // receipts pdf print call //    

 // end material receipt voucher print //  
     
}//module.exports