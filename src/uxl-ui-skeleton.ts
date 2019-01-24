import {html, LitElement} from 'lit-element/lit-element';
import {property, customElement} from "lit-element/lib/decorators";
import CSS from './uxl-ui-skeleton-styles.js';
import {template as TEMPLATE} from './uxl-ui-skeleton-template.js';
import {skeletonAnimation, skeletonType} from "./index";

@customElement('uxl-ui-skeleton')
export class UxlUiSkeleton extends LitElement {

    render() {
        return html`${CSS} ${TEMPLATE(this)}`;
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
