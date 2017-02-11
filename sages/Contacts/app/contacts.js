var contactTemplate = '';

function evaluate(contact) {
    var result = contactTemplate;
    for (var key in contact) {
            if (contact.hasOwnProperty(key)) {
            result = result.replace('{{' + key + '}}', contact[key]);
        }
    }
    return result;
}

function onContactsLoaded(contacts) {
    var result = '';
    for(var index = 0; index < contacts.length; index++) {
        result = result + evaluate(contacts[index]);
    }
    document.getElementById('contacts').innerHTML = result;
}

function onTemplateLoaded(template) {
    contactTemplate = template;
    get('http://213.32.66.195/contacts', onContactsLoaded, onFailure, true);
}

function onFailure(xhr) {
    console.log(xhr.status);
}



get('template.html', onTemplateLoaded, onFailure);