import {html} from '@polymer/lit-element/lit-element';
import {TemplateResult} from 'lit-html';

const innerTemplate = (props) => html`
    <div class="skeletons animation">
        <div class="skeleton"><div class="skeleton-title"></div><div class="skeleton-content"></div></div>
        <div class="skeleton"><div class="skeleton-title"></div><div class="skeleton-content"></div></div>
        <div class="skeleton"><div class="skeleton-title"></div><div class="skeleton-content"></div></div>
        <div class="skeleton"><div class="skeleton-title"></div><div class="skeleton-content"></div></div>
        <div class="skeleton"><div class="skeleton-title"></div><div class="skeleton-content"></div></div>
    </div>    
`;
export const template: (props: any) => TemplateResult = innerTemplate;
