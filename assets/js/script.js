$(document).ready(function() {

    $('#name').on('input',function(e) {
        console.log("Updatedt");
        let message = getWhatsappMessage
        if(message != '') {
            $("#message").val(message);
        }
    });

    

})


function getWhatsappMessage() {
    let name = $("#name").val();
    let message = "";
    if (name) { 
        message = "Hi, I am " + name + "!, and I am reaching out to make an order. Could you kindly provide more details on this?";
    }
    return message;
}

function chatOnWhatsapp() { 
    let name = $("#name").val(); 

    if (!name) { 
        alert("Name is required"); 
        return; 
    }

    let content = getWhatsappMessage(); 
    let whatsapp_url = "https://wa.me/919656473000?text=" + encodeURI(content); 
    window.open(whatsapp_url, '_blank'); 
}