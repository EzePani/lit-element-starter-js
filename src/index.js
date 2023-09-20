import {LitElement, css, html} from 'lit';
import './components/header';

export class MyApp extends LitElement {
  static styles = css`
    .boton-enlace {
      display: inline-block;
      padding: 10px 20px;
      background-color: #0074d9;
      color: white;
      text-decoration: none;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #0056b3;
      }
    }
  `;
  render() {
    return html`
      <my-header></my-header>
      <main>
        <p>Esta es la página principal.</p>
        </br>
        <div>
        <button @click=${this._showAlert} part="button">Show alert</button>   
        <a href="/pages/form.js" class="boton-enlace">Ir a la página de formulario</a>
        </div>
       
      </main>
    `;
  }
  _showAlert() {
    alert('Holaa!');
  }
}

customElements.define('my-app', MyApp);
