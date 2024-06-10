export const formValidation = (name, email, message) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    if (!name || name.length==0) return "Please enter your name"
    if (!isEmailValid) return "Please enter a valid email address"
    if (!message || message.length==0) return "Please enter some message to send"

    return null;
}