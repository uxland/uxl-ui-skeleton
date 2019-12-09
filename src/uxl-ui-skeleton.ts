import { html, LitElement, property, customElement, css, unsafeCSS } from 'lit-element';
import styles from './uxl-ui-skeleton-styles.scss';
import { template } from './uxl-ui-skeleton-template';
import { skeletonAnimation, skeletonType } from './index';
/**
 * Uxl-ui-skeleton
 * @csspart wrapper - List wrapper
 * @csspart item - item container
 * @csspart item__header - item header
 * @csspart item__body - item body
 */
@customElement('uxl-ui-skeleton')
export class UxlUiSkeleton extends LitElement {
  render() {
    return html`
      ${template(this)}
    `;
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  get items() {
    if (typeof this.number == 'string') return this.number && Array.from(Array(parseInt(this.number)).keys());
    else return this.number && Array.from(Array(this.number).keys());
  }

  @property()
  type: skeletonType;

  @property()
  number: string;

  @property()
  animation: skeletonAnimation = 'intermitent';

  @property()
  classifier: string;
}
