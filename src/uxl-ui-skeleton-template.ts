import {html} from '@polymer/lit-element/lit-element';
import {TemplateResult} from 'lit-html';
import {repeat} from 'lit-html/directives/repeat';
import {guard} from 'lit-html/directives/guard';

const innerTemplate = (props) => html`
    <div class="skeletons animation">
    ${props.items 
        ? repeat(props.items, item => html `
            <div class="skeleton"><div class="skeleton-title"></div><div class="skeleton-content"></div></div>`
        )
        : ``}     
    </div>    
`;
export const template: (props: any) => TemplateResult = innerTemplate;
