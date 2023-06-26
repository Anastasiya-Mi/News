import AppController from '../controller/controller';
import { IRequestSource } from '../../types/type';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        (<HTMLElement>document.querySelector('.sources')).addEventListener('click', (e) =>
            this.controller.getNews(e, (data: IRequestSource) => this.view.drawNews(data))
        );
        this.controller.getSources((data: IRequestSource) => this.view.drawSources(data));
    }
}

export default App;
