var dnum =-1;
function timedCount() {
  const d = new Date();
  if(dnum!=d.getDate()){
    dnum = d.getDate();
  }
  postMessage('push '+d.getHours);
  setTimeout("timedCount()",2000);
}

timedCount();