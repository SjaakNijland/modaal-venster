$(document).ready(function () {
    //halen inhoud weg
var hollywoodInhoud = $('#hollywood').detach();
var madInhoud = $('#mad').detach();
var chamInhoud = $('#cham').detach();
var spaceInhoud = $('#space').detach();
//als je klikt opent het modaal venster
    $('#holThumb').on('click', function () { 
        modaalVenObj.openen({
            inhoud: hollywoodInhoud, breedte: 700});
        })
    $('#madThumb').on('click', function () {
        modaalVenObj.openen({
        inhoud: madInhoud, breedte: 700});
        })

        $('#chamThumb').on('click', function () {
             modaalVenObj.openen({
              inhoud: chamInhoud,  breedte: 700});
            })

                 $('#spaceThumb').on('click', function () {
                    modaalVenObj.openen({
                    inhoud: spaceInhoud, breedte: 700});
                                     })
                                    });