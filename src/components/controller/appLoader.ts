import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '54a672fd8a4b4e1e902ec6ac5eeabdbc',
        });
    }
}

export default AppLoader;
