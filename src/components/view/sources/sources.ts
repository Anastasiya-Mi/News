import './sources.css';
import { Source } from '../../../types/type';

class Sources {
    draw(data: Source[]): void {
        const fragment = <DocumentFragment>document.createDocumentFragment();
        const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = <HTMLTemplateElement>sourceItemTemp.content.cloneNode(true);

            (<HTMLTemplateElement>sourceClone.querySelector('.source__item-name')).textContent = item.name;
            (<HTMLTemplateElement>sourceClone.querySelector('.source__item')).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (<HTMLTemplateElement>document.querySelector('.sources')).append(fragment);
    }
}

export default Sources;
