module.exports.routes = {

    '/': 'HomeController.home',
    // '/playground/:page': 'PlaygroundController.select',
    '/news': 'NewsController.news',
    '/discord': 'RedirectController.discord',

    'GET /calendar': 'CalendarController.calendar',
    'GET /sounds': 'SoundController.sounds',

};
