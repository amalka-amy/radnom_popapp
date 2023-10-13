var popupLink = document.getElementById("popup-link");
var popupWindow = document.getElementById("popup-window");
var closeButton = document.getElementById("close-button");

// Show the pop-up window when the link is clicked

popupLink.addEventListener("click", function(event) {
    event.preventDefault();
    popupWindow.style.display = "block";
    axios
});

// Hide the pop-up window when the close button is clicked

closeButton.addEventListener("click", function() {
    popupWindow.style.display = "none";
});


const axios = require('axios').default;

const options = {
    method: 'POST',
    url: 'https://api.edenai.run/v2/text/question_answer',
    headers: {
        authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNDhmODBmMTgtMDMwMS00NDA2LTljMTctM2Y4MmFlOTQxNTA2IiwidHlwZSI6ImFwaV90b2tlbiJ9.gBGp4jWSBzSQ_GNdbxBOBZI_63R9i0BXaLCcR7APMTw'
    },
    data: {
        providers: 'openai',
        question: 'What is a competitor of Linux?'
    }
}

axios
    .request(options)
    .then((response) => {
        console.log(response.data);
    });