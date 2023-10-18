window.onload = function() {
    const statusText=document.getElementById("statusText");
    
   const ipAddressText=document.getElementById("ipAddressText");
  
   const NetworkStrengthText=document.getElementById("networkStrengthText");
   statusText.textContent='checking...';

   if(navigator.onLine){
       fetch('https://api.ipify.org?format=json')
       .then((response)=>response.json())
       .then((data)=>{
        alert("data---"+JSON.stringify(data))
           ipAddressText.textContent=data.ip;
           statusText.textContent='Connected'

           const connection=navigator.connection;
           const NetworkStrengthText=connection?connection.downlink
           +'Mbps' : 'Unknow';
           networkStrengthText.textContent=NetworkStrengthText;

       })
       .catch(()=>{
           statusText.textContent='Disconected';
           ipAddressText.textContent='-'
           NetworkStrengthText.textContent='-'

       })

   }else{
       statusText.textContent='Disconected';
       ipAddressText.textContent='-'
       NetworkStrengthText.textContent='-'
   
   
   }
   }