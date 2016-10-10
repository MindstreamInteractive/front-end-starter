/**
 * Test for WebP support
 * check_webp_feature:
   'feature' can be one of 'lossy', 'lossless', 'alpha' or 'animation'.
   'callback(feature, result)' will be passed back the detection result (in an asynchronous way!)
 *
 * https://developers.google.com/speed/webp/faq
 */

const html = document.documentElement;
const webP = (e, d) => {
    if (d) {
        html.classList.toggle(`webp-${e}`);
    }
};

// Checks for WebP feature support
function checkWebpFeature(feature, callback) {
    const kTestImages = {
        lossy: 'UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA',
        lossless: 'UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==',
        alpha: 'UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==',
        animation: 'UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA'
    };
    const img = new Image();

    img.onload = function() {
        const result = img.width > 0 && img.height > 0;

        callback(feature, result);
    };
    img.onerror = function() {
        callback(feature, false);
    };
    img.src = `data:image/webp;base64,${kTestImages[feature]}`;
}

function checkWebP() {
    checkWebpFeature('lossy', webP);
    checkWebpFeature('lossless', webP);
    checkWebpFeature('alpha', webP);
    checkWebpFeature('animation', webP);
}

export {checkWebP};
