/* font face observer */
const FontFaceObserver = require('fontfaceobserver')
const SourceSansPro = new FontFaceObserver("SourceSansPro-Regular", {
    weight: 400
});
const SourceSansProBold = new FontFaceObserver("urceSansPro-Bold", {
    weight: 500
});

SourceSansPro.load().then(function () {
    document.documentElement.className += " fonts-loaded";
}, function() {
    document.documentElement.className += " fonts-unavailable";
});
SourceSansProBold.load().then(function () {
    document.documentElement.className += " fonts-loaded";
}, function() {
    document.documentElement.className += " fonts-unavailable";
});
