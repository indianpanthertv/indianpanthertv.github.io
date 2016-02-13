/* AUTHOR : KAVULURU RADHA KRISHNA */

var SchemaHour ={

    /*  9 AM - 9 PM */

    PL0910 : 'PLDcEtgLwQdoo9DxobB8QDEPyNvbPO1iOy',
    PL1011 :'PLDcEtgLwQdopmvr6Hvw7UEshZTyiXGlXN',
    PL1112 :'PLDcEtgLwQdoqhgidK9qibHppcMuRzWC9F',
    PL1213 :'PLDcEtgLwQdorDcvF9jsITZ7WuVxgzr-nF',
    PL1314 :'PLDcEtgLwQdoq09yF68GK75OV_4PjNwM48',
    PL1415 :'PLDcEtgLwQdooYK7ggVamZz8HUqWaeeaEg',
    PL1516:'PLDcEtgLwQdoqgHdkbPAwOxe0TM-MZ2DxC',
    PL1617 :'PLDcEtgLwQdoo_6WydGh6T17NG7-R0g3uY',
    PL1718 :'PLDcEtgLwQdoreDWKKS1VA-kQYpuVGVNr3',
    PL1819 :'PLDcEtgLwQdoq5m4WU41WClDlSF4Lu6pgV',
    PL1920 :'PLDcEtgLwQdooJ_SwuNfCcHgvslu0mbO0D',
    PL2021 :'PLDcEtgLwQdooC3tNFX1S3iX4n8mLP1_3A',
    
    /*  9 PM - 9 AM */


    PL2122 : 'PLDcEtgLwQdoo9DxobB8QDEPyNvbPO1iOy',
    PL2223 :'PLDcEtgLwQdopmvr6Hvw7UEshZTyiXGlXN',
    PL2324 :'PLDcEtgLwQdoqhgidK9qibHppcMuRzWC9F',
    PL2401 :'PLDcEtgLwQdorDcvF9jsITZ7WuVxgzr-nF',
    PL0102 :'PLDcEtgLwQdoq09yF68GK75OV_4PjNwM48',
    PL0203 :'PLDcEtgLwQdooYK7ggVamZz8HUqWaeeaEg',
    PL0304:'PLDcEtgLwQdoqgHdkbPAwOxe0TM-MZ2DxC',
    PL0405 :'PLDcEtgLwQdoo_6WydGh6T17NG7-R0g3uY',
    PL0506 :'PLDcEtgLwQdoreDWKKS1VA-kQYpuVGVNr3',
    PL0607 :'PLDcEtgLwQdoq5m4WU41WClDlSF4Lu6pgV',
    PL0708 :'PLDcEtgLwQdooJ_SwuNfCcHgvslu0mbO0D',
    PL0809 :'PLDcEtgLwQdooC3tNFX1S3iX4n8mLP1_3A'

};




var VideoData={
    
    /*  */
    
    0 : {
        
        link:'7QU1nvuxaMA',title:'Audioslave - Like a Stone (Official Video)',duration:'00:04:59'
        
    },
    1 : {
        
        link:'Mdo_A1Bj67w',title:'Tare Zameen par - Maa- (High Definition)',duration:'00:05:51'
    },
    2 : {
        
        link:'7oYqanTWruE',title:'Mera Jahan',duration:'00:06:02'
    }
    
   
};


/* --------------------------------------------------------------- PLAY LIST ----------------------------------------------*/




PlayList=[1,2,0];



/* --------------------------------------------------------------- PLAY LIST ----------------------------------------------*/



/* --------------------------------------------------------------- TIME FUNCTIONS ----------------------------------------------*/

function getHoursVD(duration){
    
   
    return duration[0]+duration[1];
    
}

function getMinutesVD(duration){



return duration[3]+duration[4];


}

function getSecondsVD(duration){



return duration[6]+duration[7];


}




function getDurationSeconds(endTimesec) //endTimesec is just a variable to indicate dur in seconds 
{
    
    var endTime=parseInt(endTimesec/3600)+":"+parseInt((endTimesec-parseInt(endTimesec/3600)*3600)/60)+":"+parseInt((endTimesec-parseInt(endTimesec/3600)*3600)%60);
    return endTime;
}



function getSecondsDuration(duration){

    
  return  parseInt(getHoursVD(duration))*3600+parseInt(getMinutesVD(duration))*60+parseInt(getSecondsVD(duration));

}

/* -------------------------------------------------------------------------------------------*/
function PLduration(PlayList){
    
    var PLlength= PlayList.length;
    var duration=0;
    for(var i=0;i<PLlength;i++)
    {
        var video=VideoData[PlayList[i]];
        duration=duration+getSecondsDuration(video['duration']);
    }
    return duration;
}

function PlaySimulate(PlayList,startTime){

   // console.log(getSecondsDuration(startTime)+PLduration(PlayList));
    var endTimesec=getSecondsDuration(startTime)+PLduration(PlayList);
    
    var endTime=getDurationSeconds(endTimesec);
    console.log(endTime + "is the ending time");
    
    var simulength=PlayList.length;
    var simupar=0;
    
    var simuarr = Array(simulength);
    
    for(var i=0;i<simulength;i++)
    {
     
        simupar=simupar+getSecondsDuration(VideoData[PlayList[i]]['duration']);
        simuarr[i]=simupar;
        //console.log(simupar);
        
    }
    
    return simuarr;
    
}

function getVideo(PlayList,startTime)
{
    var time= new Date();
   
    var hour = time.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
     var minutes = time.getMinutes();
   minutes = (minutes < 10 ? "0" : "") + minutes;
     var seconds = time.getSeconds();
    seconds = (seconds < 10 ? "0" : "") + seconds;
    
    var prestime= hour+":"+minutes+":"+seconds;
    
    var pres_seconds=getSecondsDuration(prestime);
    var start_seconds=getSecondsDuration(startTime);
    var current_seconds=pres_seconds-start_seconds;
    
    var simuarr=PlaySimulate(PlayList,startTime);
    var simulength=simuarr.length;
    var vidob={};
    for(var i=1;i<simulength-1;i++)
    {
        if(current_seconds<simuarr[i]&&current_seconds>simuarr[i-1]){
        vidob['video']=i;}
        else{
            vidob['video']=0;}
    }
    
    vidob['start']=current_seconds-simuarr[vidob['video']-1];
    return vidob;
    
    
}

/* -------------------------------------------- PLAY PARAMETERS ----------------------------------------------*/
var startTime="17:32:00";

PlaySimulate(PlayList,startTime);
var vidpar=getVideo(PlayList,startTime);





/*-----------------------------------------------------------------------------------------------------------*/

function refresh_playid()
{
    var date = new Date();
    
}



var date = new Date();

var hour = date.getHours();

 hour = (hour < 10 ? "0" : "") + hour;
var next = parseInt(hour)+1;
 next = (next < 10 ? "0" : "") + next;

var Schema = 'PL'+hour+next;


$(document).ready(function()
{
    console.log(Schema);
    var play = VideoData[vidpar['video']]['link'];
    var startwhen=vidpar['star'];
    var sdd=' <iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+play+'?autoplay=1&controls=0&showinfo=0&autohide=1&modestbranding=1&rel=0&start='+startwhen+'" frameborder="0" allowfullscreen></iframe>';
    $("#INDIANPANTHERTV").html(
    
    sdd
    
    );
});