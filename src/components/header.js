import {LitElement, html, css} from 'lit';

export class MyHeader extends LitElement {
  static styles = css`
    header {
      background-color: #333;
      color: white;
      padding: 10px;
    }
  `;

  render() {
    return html`
      <header>
        <h1>Mi Encabezado</h1>
        <!-- Aquí puedes agregar elementos de encabezado adicionales -->
      </header>
    `;
  }
}

customElements.define('my-header', MyHeader);
