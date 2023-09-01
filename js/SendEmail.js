const SubmitMessage = (ev) => {
    ev.preventDefault()

    const form = ev.target
    const formData = new FormData( form )
    const data = Object.fromEntries( formData.entries() )

    const serviceID = 'service_z85x90i'
    const templateID = 'template_0c0u1ro'

    emailjs
        .send(serviceID, templateID, data)
        .then((res) => {
            form.reset()
            console.log(res)
            alert("Le message a été envoyer")
        })
        .catch((err) => {
            console.log(err)})
}

