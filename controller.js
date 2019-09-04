
var date = new Date();



btnConnect.addEventListener('click',function(e){
  e.preventDefault();
  console.log("Connecting ..");
  // var broker = document.getElementById("broker");
  var connBroker = document.getElementById("status");
  client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
  client.on("connect", function(){
      connBroker.value = "Successfully Connected!"
  })

  client.on("message", function (topic,payload) {
    

    console.log("Recieved topic ( " + topic + ") ; payload ( " + payload +")")

  })

})


btnPublish.addEventListener('click',function(e){
  e.preventDefault();
  console.log('Published')
  var topicPublish = document.getElementById("topics");
  var payload = document.getElementById("payload").value;
  client.on("message", function (topic,payload) {
    var table = "<tr><td>"+topic+"</td>"+
               "<td>"+payload+"</td>"+
               "<td>"+date+"</td></tr>"

      $('tbody').append(table);
  })
 
  client.publish("mqtt/"+topicPublish.value,payload);


})


btnSubscribe.addEventListener('click',function(e){
  e.preventDefault();
  console.log('Subscribe')
  var topicSubscribe = document.getElementById("topic_s");
  client.subscribe("mqtt/"+topicSubscribe.value);
  console.log( " Subscribe topic (" + topicSubscribe.value + ")")
})





