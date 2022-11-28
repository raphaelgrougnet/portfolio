"use strict";

const regexCourriel =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const form_hire = document.getElementById("form_hire");
const form_contact = document.getElementById("form_contact");

let nom_contact =  document.getElementById("nom_contact");
let email_contact = document.getElementById("email_contact");
let sujet_contact = document.getElementById("sujet_contact");
let message_contact = document.getElementById("message_contact");


let date_hire = document.getElementById("date_hire");
let email_hire = document.getElementById("email_hire");
let message_hire = document.getElementById("message_hire");
let sujet_hire = document.getElementById("sujet_hire");


//Une fonction qui valide les champs du formulaire de contact
function validateContactForm(e) {
    let valid = true;
    if (nom_contact.value === "") {
        nom_contact.classList.add("is-invalid");
        valid = false;
    } else {
        nom_contact.classList.remove("is-invalid");
    }
    if (email_contact.value === "" || !regexCourriel.test(email_contact.value)) {
        email_contact.classList.add("is-invalid");
        valid = false;
    } else {
        email_contact.classList.remove("is-invalid");
    }
    if (sujet_contact.value === "") {
        sujet_contact.classList.add("is-invalid");
        valid = false;
    } else {
        sujet_contact.classList.remove("is-invalid");
    }
    if (message_contact.value === "") {
        message_contact.classList.add("is-invalid");
        valid = false;
    } else {
        message_contact.classList.remove("is-invalid");
    }
    if(valid){
        form_contact.submit();
        form_contact.reset();
    }
    e.preventDefault();

}

//Une fonction qui valide les champs du formulaire hire
function validateHireForm(e) {
    let valid = true;
    if (date_hire.value === "") {
        date_hire.classList.add("is-invalid");
        valid = false;
    } else {
        date_hire.classList.remove("is-invalid");
    }
    if (email_hire.value === "" || !regexCourriel.test(email_hire.value)) {
        email_hire.classList.add("is-invalid");
        valid = false;
    } else {
        email_hire.classList.remove("is-invalid");
    }
    if (sujet_hire.value === "") {
        sujet_hire.classList.add("is-invalid");
        valid = false;
    } else {
        sujet_hire.classList.remove("is-invalid");
    }
    if (message_hire.value === "") {
        message_hire.classList.add("is-invalid");
        valid = false;
    } else {
        message_hire.classList.remove("is-invalid");
    }
    if(valid){
        
        form_hire.submit();
        form_hire.reset();
    }
    e.preventDefault();

}



function initialisation(){
    let btnSubmitHire = document.getElementById("btnSubmitHire");
    if(btnSubmitHire !== null){
        btnSubmitHire.addEventListener("click", validateHireForm, false);
    }
    let btnSubmitContact = document.getElementById("btnSubmitContact");
    if(btnSubmitContact !== null){
        btnSubmitContact.addEventListener("click", validateContactForm, false);
    }
}

window.addEventListener("DOMContentLoaded", initialisation, false);