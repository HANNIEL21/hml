function Success() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: 'Message Sent successfully'
    })
}

function Error() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'error',
        title: 'Oops! Something Went Wrong'
    })
}

function MissingField() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'info',
        title: 'All Fields Are Required'
    })
}



function SendMail() {
    let form = document.getElementById("contact-form");
    let userName = document.getElementById("user_name");
    let userEmail = document.getElementById("user_email");
    let number = document.getElementById("contact_number");
    let message = document.getElementById("message");



    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (userName.value && userEmail.value && number.value && message.value != "") {
            const params = {
                user_name: userName.value,
                user_email: userEmail.value,
                contact_number: number.value,
                message: message.value,
            }
            
            emailjs.send("service_macr97t", "template_6605q5c", params)
            Success()
        } else {
            MissingField()
        }
    })
}

SendMail()