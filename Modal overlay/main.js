let offerBtn = document.querySelector('.offer')
let AcceptBtn = document.querySelector('.accept')
let close = document.querySelector('.close')
let model = document.querySelector('.model')


function show(){
    model.style.display = "block"
    model.style.transition = "all ease-in-out 0.5s"
    document.addEventListener('click', handleOutsideClick);

}

function handleAccept(){
    let msg = document.createElement('p')
    msg.innerHTML = "Offer Accepted"
    msg.setAttribute("class", "message")
    offerBtn.replaceWith(msg)
    model.style.display = "none"
}

function handleOutsideClick(e){
    if(!model.contains(e.target) && e.target !== offerBtn){
    handleClose()

    }
}

function handleClose(){
    model.style.display = "none"


}