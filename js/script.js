$ ('.mobile-btn') .on('click', function () {
    $ ('.mobile-btn').toggleClass('show');
    $ ('.menu-items').toggleClass('show-menu')
});
$('.menu-items a').on('click', function () {
    $('.menu-items').removeClass('show-menu');
    $('.mobile-btn').removeClass('show');
});
$(document).ready(function () {
    $(".slide-one").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: ["<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
        "<rect opacity=\"0.4\" width=\"60\" height=\"60\" fill=\"white\"/>\n" +
        "<g clip-path=\"url(#clip0)\">\n" +
        "<path d=\"M33.4358 29.5004L26.6615 36.2746C26.4949 36.4412 26.4949 36.7084 26.6615 36.875C26.8281 37.0417 27.0953 37.0417 27.2619 36.875L34.3379 29.799C34.5045 29.6324 34.5045 29.3652 34.3379 29.1986L27.2619 22.1257C27.1802 22.044 27.0702 22 26.9633 22C26.8564 22 26.7464 22.0409 26.6646 22.1257C26.498 22.2923 26.498 22.5595 26.6646 22.7261L33.4358 29.5004Z\" fill=\"white\"/>\n" +
        "</g>\n" +
        "<defs>\n" +
        "<clipPath id=\"clip0\">\n" +
        "<rect x=\"38\" y=\"37\" width=\"15\" height=\"15\" transform=\"rotate(180 38 37)\" fill=\"white\"/>\n" +
        "</clipPath>\n" +
        "</defs>\n" +
        "</svg>\n", "<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
        "<rect opacity=\"0.2\" width=\"60\" height=\"60\" fill=\"white\"/>\n" +
        "<g clip-path=\"url(#clip0)\">\n" +
        "<path d=\"M27.5642 29.4996L34.3385 22.7254C34.5051 22.5588 34.5051 22.2916 34.3385 22.125C34.1719 21.9583 33.9047 21.9583 33.7381 22.125L26.6621 29.201C26.4955 29.3676 26.4955 29.6348 26.6621 29.8014L33.7381 36.8743C33.8198 36.956 33.9298 37 34.0367 37C34.1436 37 34.2536 36.9591 34.3354 36.8743C34.502 36.7077 34.502 36.4405 34.3354 36.2739L27.5642 29.4996Z\" fill=\"white\"/>\n" +
        "</g>\n" +
        "<defs>\n" +
        "<clipPath id=\"clip0\">\n" +
        "<rect x=\"23\" y=\"22\" width=\"15\" height=\"15\" fill=\"white\"/>\n" +
        "</clipPath>\n" +
        "</defs>\n" +
        "</svg>\n"],
    });
});
$(".slide-two").owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    navText: ["<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "<rect width=\"60\" height=\"60\" fill=\"#005FA3\"/>\n" +
    "<g clip-path=\"url(#clip0)\">\n" +
    "<path d=\"M33.4358 29.5004L26.6615 36.2746C26.4949 36.4412 26.4949 36.7084 26.6615 36.875C26.8281 37.0417 27.0953 37.0417 27.2619 36.875L34.3379 29.799C34.5045 29.6324 34.5045 29.3652 34.3379 29.1986L27.2619 22.1257C27.1802 22.044 27.0702 22 26.9633 22C26.8564 22 26.7464 22.0409 26.6646 22.1257C26.498 22.2923 26.498 22.5595 26.6646 22.7261L33.4358 29.5004Z\" fill=\"white\"/>\n" +
    "</g>\n" +
    "<defs>\n" +
    "<clipPath id=\"clip0\">\n" +
    "<rect x=\"38\" y=\"37\" width=\"15\" height=\"15\" transform=\"rotate(180 38 37)\" fill=\"white\"/>\n" +
    "</clipPath>\n" +
    "</defs>\n" +
    "</svg>\n", "<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "<rect opacity=\"0.2\" width=\"60\" height=\"60\" fill=\"#005FA3\"/>\n" +
    "<g clip-path=\"url(#clip0)\">\n" +
    "<path d=\"M27.5642 29.4996L34.3385 22.7254C34.5051 22.5588 34.5051 22.2916 34.3385 22.125C34.1719 21.9583 33.9047 21.9583 33.7381 22.125L26.6621 29.201C26.4955 29.3676 26.4955 29.6348 26.6621 29.8014L33.7381 36.8743C33.8198 36.956 33.9298 37 34.0367 37C34.1436 37 34.2536 36.9591 34.3354 36.8743C34.502 36.7077 34.502 36.4405 34.3354 36.2739L27.5642 29.4996Z\" fill=\"white\"/>\n" +
    "</g>\n" +
    "<defs>\n" +
    "<clipPath id=\"clip0\">\n" +
    "<rect x=\"23\" y=\"22\" width=\"15\" height=\"15\" fill=\"white\"/>\n" +
    "</clipPath>\n" +
    "</defs>\n" +
    "</svg>\n"]
});