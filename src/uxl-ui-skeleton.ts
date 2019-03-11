import {html, LitElement, property, customElement} from 'lit-element';
import * as styles from './uxl-ui-skeleton-styles.scss';
import {template} from './uxl-ui-skeleton-template';
import {skeletonAnimation, skeletonType} from "./index";

@customElement('uxl-ui-skeleton')
export class UxlUiSkeleton extends LitElement {

    render(){
        return html`<custom-style><style>${styles}</style></custom-style> ${template(this)}`;
    }

     get items(){
        if(typeof this.number == "string")
            return this.number && Array.from(Array(parseInt(this.number)).keys());
        else
            return this.number && Array.from(Array(this.number).keys());
     }

    @property()
    type: skeletonType;

    @property()
    number: string;

    @property()
    animation: skeletonAnimation = "intermitent";

    @property()
    classifier: string;
}
