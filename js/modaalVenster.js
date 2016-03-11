var modaalVenObj = (function () {

    var $window = $(window);
    var $modaalVenster = $('<div class="modaal-venster"/>');
    var $modaalInhoud = $('<div class="modaal-inhoud"/>');
    var $exit = $('<span class="exit">&#10005;</span>');

    $modaalVenster.append($modaalInhoud);

    return {
        centreren: function () {
            //opdracht centreren
            var links = Math.max($window.width() - $modaalInhoud.outerWidth(), 0) / 2;//berkening om te centreren
            var boven = Math.max($window.height() - $modaalInhoud.outerHeight(), 0) / 2;//berkening om te centreren
            $modaalInhoud.css({
                left: links,
                top: boven
            });
        },
        openen: function (instellingen) {
            //opdracht openen
            $modaalInhoud.append(instellingen.inhoud, $exit);
            $modaalInhoud.css({
                width: instellingen.breedte + 'px' || 'auto',
                height: instellingen.hoogte + 'px' || 'auto'
            }).on('click', function (e) {
                e.stopPropagation();
            });
            $modaalVenster.appendTo('body').on('click', modaalVenObj.sluiten);
            modaalVenObj.centreren();
            $exit.on('click', modaalVenObj.sluiten);
            $window.on('resize', modaalVenObj.centreren);
        },
        sluiten: function () {
            //opdracht sluiten
            $modaalInhoud.empty().off('click', modaalVenObj.sluiten);;
            $modaalVenster.detach();
            window.off('resize', modaalVenObj.centreren);

        }
    }
}());