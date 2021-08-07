(function ($) {

    $('#send').on('click', function(e) {
        e.preventDefault();
        result = checkForm();
        if (result.error) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: result.message,
                showConfirmButton: false,
                timer: 1500
              })
        } else {

            


            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Message envoyé avec succès !!!',
                showConfirmButton: false,
                timer: 1500
              })
              $('#contact-form')[0].reset();
        }
        
    })

    function checkForm() {
        result = {
            error: false, message: ""
        }
        
        if ($('#name').val() == "" ) {
            result.error = true;
            result.message = "Veuillez précisez le nom SVP !"
        } else if($('#email').val() == "") {
            result.error = true;
            result.message = "Adresse email incorrect !"
        } else if($('#phone').val() == "") {
            result.error = true;
            result.message = "Numéro de téléphone incorrect !"
        } else if($('#subject').val() == "") {
            result.error = true;
            result.message = "Veuillez précisez l'objet SVP !"
        } else if($('#content').val() == "") {
            result.error = true;
            result.message = "Contenu du message incorrect !"
        } else {
            result.error = false;
        }

        return result;
    }

}(jQuery));