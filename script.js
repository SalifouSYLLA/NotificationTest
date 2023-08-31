function sendNotification(){
    Notification.requestPermission().then(perm=>{
       if(perm === "granted"){
           new Notification("Example notification",{
               body: "This is more text",
               data:{hello: "world"},
               icon:"logo.png",
               //tag: "welcome message"
           })
       }
    })
}

