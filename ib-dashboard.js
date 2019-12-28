import { html, LitElement } from 'lit-element';
import style from './ib-dashboard-styles.js';

class IbDashboard extends LitElement {
  static get properties() {
    return {
      imageClient: {
        type: String,
        attribute: "image-client"
      },
      imageEmployee: {
        type: String,
        attribute: "image-employee"
      },
      imageOperation: {
        type: String,
        attribute: "image-operation"
      },
      logo: String,
      dataHandlerPages: Object,
      dataHandlerButton: Object
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.imageClient = '';
    this.imageEmployee = '';
    this.imageOperation = '';
    this.logo = '';
    this.dataHandlerPages = {};
    this.dataHandlerButton = {};
  }

  render() {
    return html`
        <header>
          <nav>
            <img src="${this.logo}">
            <ul>
              <a id="home" @click="${this.clickedNavbarPages}" class="active"><li>Home</li></a>
              <a id="employee" @click="${this.clickedNavbarPages}"><li>Empleados</li></a>
              <a id="operations" @click="${this.clickedNavbarPages}"><li>Operaciones</li></a>
              <a id="clients" @click="${this.clickedNavbarPages}"><li>Clientes</li></a>
              <a id="logout"  @click="${this.clickedNavbarButton}" class="exit"><li>Salir</li></a>
            </ul>
          </nav>
        </header>
        <main>
          <section class="dashboard">
            <div class="dashboard-employee">
              <div @click="${this.clickedButtons}" id="employee-page" class="dashboard-employee-card">
                <img src="${this.imageEmployee}">
                <p>Empleados</p>
              </div>
              <button @click="${this.clickedButtonsRegister}" id="register-employee">Registro</button>
            </div>
            <div class="dashboard-operations">
              <div @click="${this.clickedButtons}" id="operations-page" class="dashboard-operations-card">
                <img src="${this.imageOperation}">
                <p>Operaciones</p>
              </div>
            </div>
            <div class="dashboard-clients">
              <div @click="${this.clickedButtons}" id="clients-page" class="dashboard-clients-card">
                <img src="${this.imageClient}">
                <p>Clientes</p>
              </div>
              <button @click="${this.clickedButtonsRegister}" id="register-client">Registro</button>
            </div>
          </section>
        </main>
  `;}

  clickedButtons(event){
    this.dataHandlerPages = {
      page: event.currentTarget.id,
    }
    this.getObject(this.dataHandlerPages)
  }

  clickedButtonsRegister(event){
    this.dataHandlerButton = {
      action: event.currentTarget.id,
    }
    this.getObject(this.dataHandlerButton)
  }

  clickedNavbarPages(event){
    this.dataHandlerPages = {
      page: event.currentTarget.id,
    }
    this.getObject(this.dataHandlerPages)
  }

  clickedNavbarButton(event){
    this.dataHandlerButton = {
      action: event.currentTarget.id,
    }
    this.getObject(this.dataHandlerButton)
  }

  getObject(object){
    this.dispatchEvent(new CustomEvent('get-object', {
      detail: object
    }))
  }

}

window.customElements.define("ib-dashboard", IbDashboard);
