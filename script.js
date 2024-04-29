$(document).ready(function(){
    $(window).scroll(function(){
        // Script de barre de navigation collante lors du défilement
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // Script pour afficher/masquer le bouton de retour en haut de page
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });


     // Script de glissement vers le haut
     $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // Désactivation du défilement fluide lors du clic sur le bouton de glissement vers le haut
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // Réapplication du défilement fluide lors du clic sur les éléments du menu
        $('html').css("scrollBehavior", "smooth");
    });

    // Script pour basculer le menu/barre de navigation - version mobile
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Script d'animation de texte en saisie
    var typed = new Typed(".typing", {
        strings: ["Scientist", "Reseacher", "Datascientist", "Biomedical Engeneer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Scientist", "Researcher", "Datascientis", "Biomedical Engeneer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    $("#btn_experienceModal").click(function(event) {
        event.preventDefault();
        this.blur();
        $("#experienceModal").modal({
            fadeDuration: 400,
        });
    });

    // Détection du défilement de la page
    $(window).on('scroll', function() {
        var scrollPosition = $(this).scrollTop(); // Position de défilement actuelle

        // Parcourir chaque section pour vérifier si elle est visible
        $('section.menu-section').each(function() {
            var sectionTop = $(this).offset().top - 444; // Position de la section par rapport au haut de la page
            var sectionHeight = $(this).outerHeight(); // Hauteur de la section

            // Vérifier si la section est visible dans la fenêtre visible
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                var targetId = $(this).attr('id'); // Récupérer l'ID de la section visible
                // Mettre à jour la classe active dans le menu
                $('.navbar ul#menu-items li').removeClass('active'); // Supprimer la classe active de tous les liens du menu
                $('.navbar ul#menu-items li').find('a[href="#' + targetId + '"]').parent().addClass('active'); // Ajouter la classe active au lien correspondant
            }
        });
    });
});