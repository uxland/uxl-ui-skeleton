import {html, LitElement, PropertyValues} from '@polymer/lit-element/lit-element';
import {property, customElement} from "@uxland/uxl-polymer2-ts";
import CSS from './uxl-ui-skeleton-styles.js';
import {template as TEMPLATE} from './uxl-ui-skeleton-template.js';
import {skeletonType} from "./index";

@customElement('uxl-ui-skeleton')
export class UxlUiSkeleton extends LitElement {

    render() {
        return html`${CSS} ${TEMPLATE(this)}`;
    }

     get items(){
        return this.number && new Array(this.number);
     }

    @property()
    type: skeletonType;

    @property()
    number: number;

    @property()
    animation: skeletonAnimation;
}
