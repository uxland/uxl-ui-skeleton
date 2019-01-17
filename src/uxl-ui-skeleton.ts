import {html, LitElement} from '@polymer/lit-element/lit-element';
import {property, customElement} from "@uxland/uxl-polymer2-ts";
import CSS from './uxl-ui-skeleton-styles.js';
import {template as TEMPLATE} from './uxl-ui-skeleton-template.js';
import {skeletonType} from "./index";

@customElement('uxl-ui-skeleton')
export class UxlUiSkeleton extends LitElement {

    render() {
        return html`${CSS} ${TEMPLATE(this)}`;
    }

    @property()
    number: number;

    @property()
    type: skeletonType;
}
