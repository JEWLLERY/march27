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

    //pdf trial start
function pdfPrintCall(orderNO,partyNames,staff,address){
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
doc.pipe (fs.createWriteStream('./pdfPrint/order'+postfix+'.pdf'))

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

    doc.text('Order',{align: 'center'})
    //party details 
     heightOfHeader += 20; 
     var rigthSide = heightOfHeader; 
    doc.text('PartyName'+":"+partyNames , 10, heightOfHeader)
     heightOfHeader += 20;  
    doc.text('Address'+":"+address, 10, heightOfHeader)
     heightOfHeader += 20;  
    doc.text('City'+':'+pdfPartyCity, 10, heightOfHeader)
       //heightOfHeader += 20;  
    doc.text('Order No'+":"+orderNO , 400, rigthSide)
    rigthSide += 20;
    doc.text('Date'+":"+dateDisplay, 400, rigthSide)
    rigthSide += 20;
    doc.text('Staff'+':'+staff, 400, rigthSide)
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
    var widthHeader = 10;
    textInRowFirst(doc, 'Particulars ', height1,widthHeader);
    widthHeader += 140;
    textInRowFirst(doc, 'Purity', height1,widthHeader);
     widthHeader += 40;
    textInRowFirst(doc, 'Sc.Wt', height1,widthHeader);
     widthHeader += 40;
    textInRowFirst(doc, 'St.Wt', height1,widthHeader);
     widthHeader += 40;
    textInRowFirst(doc, 'NettWt', height1,widthHeader);
     widthHeader += 40;
    textInRowFirst(doc, 'Wastage', height1,widthHeader);
     widthHeader += 50;
    textInRowFirst(doc, 'Rate', height1,widthHeader);
     widthHeader += 40;
    textInRowFirst(doc, 'StAmt', height1,widthHeader);
     widthHeader += 40;
    textInRowFirst(doc, 'Labour', height1,widthHeader);
    widthHeader += 40;
    textInRowFirst(doc, 'Due ', height1,widthHeader);
    widthHeader += 60;
    textInRowFirst(doc, 'Total', height1,widthHeader);
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
            widthBody += 140;
            textInRowFirst(doc, detailsDisplay[j].purity, height1,widthBody);
            widthBody += 40;
            textInRowFirst(doc, detailsDisplay[j].gwt, height1,widthBody);
            widthBody += 40;
            textInRowFirst(doc, detailsDisplay[j].stwt, height1,widthBody);
            widthBody += 40;
            textInRowFirst(doc, detailsDisplay[j].ntwt, height1,widthBody);
            widthBody += 40;
            textInRowFirst(doc, detailsDisplay[j].wastage, height1,widthBody);
            widthBody += 50;
            textInRowFirst(doc, detailsDisplay[j].rate, height1,widthBody);
            widthBody += 40;
            textInRowFirst(doc, detailsDisplay[j].stval, height1,widthBody);
            widthBody += 40;
            textInRowFirst(doc, detailsDisplay[j].labval, height1,widthBody);
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
            textInRowFirst(doc, dateDisplay, height1,widthBody);
            widthBody += 60;
            textInRowFirst(doc, detailsDisplay[j].final, height1,widthBody);
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

     console.log(" heightOfPage line after "+heightOfPage+" doc.y = "+doc.y) 
    heightOfPage += 20;
    doc.y = heightOfPage;
     console.log(" heightOfPage tax to display "+heightOfPage+" doc.y = "+doc.y) 
    doc.text('Tax Amount (Estimated)'+':'+(taxAmount).toFixed(2),{align: 'right'})
    //doc.text('Tax vijay (Estimated)'+':'+'2000.00',150,320)
    heightOfPage += 20;
    doc.y = heightOfPage;
    doc.text('Order Value (Estimated)'+':'+(orderValue).toFixed(2),{align: 'right',})
    heightOfPage += 20;
    doc.y = heightOfPage;
    doc.text('Cash Advance '+':'+2000.00,{align: 'left'})
     heightOfPage += 20;
    doc.y = heightOfPage;
    doc.text('Material Advance '+' '+' Old Gold '+' '+'10gms',{align: 'left'})
      heightOfPage += 40;
    doc.y = heightOfPage;
    doc.text('Party Signature',{align: 'left'})
    .text('For '+pdfMerchantData[0].ShopName,10,heightOfPage,{align: 'right'})

   doc.end()

}// pdfPrintCall


var pdfMerchantData = null;
function merchantDetailsCall(orderNO,partyNames,staff){
  db.merchantDetails.find(function(err,merchantData){
        console.log(merchantData);
        pdfMerchantData = merchantData;
        detailsDisplayCall(orderNO,partyNames,staff)
        //saleCall()
  })
}//merchantDetailsCall
var pdfPartyData = null;
var pdfPartyCity = null;
function partyDetailsCall(orderNO,partyNames,staff){
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


        pdfPrintCall(orderNO,partyNames,staff,pdfPartyData[0].data.address1)
       // detailsDisplayCall(orderNO,partyNames,staff)
        //saleCall()
  })
}//merchantDetailsCall
var detailsDisplay = null;
var taxAmount = 0;
var orderValue = 0;
function detailsDisplayCall(orderNO,partyNames,staff){
  
  db.orders.find({ "orderNO" :orderNO },function(err,detailsDisplayData){
        console.log("length to call in details  "+detailsDisplayData.length);
        detailsDisplay = detailsDisplayData;
        //console.log(detailsDisplayData)
        for (var i = detailsDisplay.length - 1; i >= 0; i--) {
          //Things[i]
             orderValue  = orderValue + parseFloat(detailsDisplay[i].final)
            
             taxAmount = taxAmount + parseFloat(detailsDisplay[i].taxamt)
         
        };
           
        partyDetailsCall(orderNO,partyNames,staff)
       // saleCall(orderNO,partyNames,staff)
  })

}//detailsDisplayCall()

//merchantDetailsCall();
//pdf trial end

app.post('/api/orderDetailsPdf',function(req,res){ 
	console.log(" order details pdf");
	console.log(req.body);
	console.log("   end here  here  ");
	merchantDetailsCall(req.body.orderNO,req.body.partyNames,'staff',);
})
 //merchantDetailsCall("OD1",'viin','staff');
//  end of order print //

 // start material receipt voucher print //
      //materialReceiptCall("OD6","Vinay",'staff',"RV1");
 // listener #1

var pdfMerchantData = null;
var pdfPartyData = null;
var pdfPartyCity = null;
var detailsDisplay = null;

function merchantDetailsCallPrint(orderNO,partyNames,staff){
  db.merchantDetails.find(function(err,merchantData){
        console.log(merchantData);
        pdfMerchantData = merchantData;
        //detailsDisplayCall(orderNO,partyNames,staff)
        //saleCall()
  })
}//merchantDetailsCall

function partyDetailsCallPrint(partyNames){
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


        
  })
}//partyDetailsCall

// var detailsDisplay = null;
// var taxAmount = 0;
// var orderValue = 0;
function detailsDisplayCallPrint(orderNO){
  
  db.transactionDetail.find({  "orderNo" : orderNO },function(err,detailsDisplayData){
        
         console.log("length to call in details  "+detailsDisplayData.length);
         detailsDisplay = detailsDisplayData;
        
  })

}//detailsDisplayCall()


      //eventEmitter.on('connection', listner2);
      eventEmitter.on('connection', function(){
        console.log(" value merchantDetailsCall ")
        
        //merchantDetailsCallPrint()
      });
      eventEmitter.on('connection', function(orderNo,partyName){
        console.log(" orderNO,partyName partyDetailsCall partyDetailsCall ")
        //partyDetailsCallPrint(partyName)
        
      });
      eventEmitter.on('connection', function(orderNo){
        console.log(" orderNO,partyName detailsDisplayCall(orderNO) ")
        detailsDisplayCallPrint(orderNo)
        
      });
     
      eventEmitter.emit('connection','OD6',"Vinay");
      console.log('listner1   trweyruiweruiweweuiweiuerwerui  executed.');
  // end material receipt voucher print //  
      // var async = require('async');

      // async.waterfall([
      //   function(cb){
      //    // nam(inp,cb);
      //     detailsDisplayCallPrint('OD6',cb)
      //   },
      //    function(result,cb){
      //    // nam(result,cb);
      //     partyDetailsCallPrint('vinay',cb)
      //   },
      //   ],function(err,output){
      //     if(err){}
      //   })
}//module.exports