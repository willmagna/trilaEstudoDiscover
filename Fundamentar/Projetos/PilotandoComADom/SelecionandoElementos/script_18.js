const buttonOpenModal = document.getElementById('openModal')

const modalWrapper = document.querySelector('.model-wrapper')

buttonOpenModal.onclick = function(){
    console.log(modalWrapper)
    modalWrapper.classList.remove('invisible');
} 

document.addEventListener('keydown', function(event){
    const isEscKey = event.key === 'Escape'

    if(isEscKey){
        modalWrapper.classList.add('invisible')
    }
})