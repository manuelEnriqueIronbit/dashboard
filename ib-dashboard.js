import { html, LitElement } from 'lit-element';
import style from './ib-dashboard-styles.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-menu-button/paper-menu-button.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

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
            <paper-menu-button>
              <paper-icon-button icon="menu" slot="dropdown-trigger"> <iron-icon icon="vaadin:menu"></iron-icon> </paper-icon-button>
              <paper-listbox slot="dropdown-content">
                <paper-item id="home-s-menu" @click="${this.clickedNavbarPages}">Home</paper-item>
                <paper-item id="employee-s-menu" @click="${this.clickedNavbarPages}">Empleados</paper-item>
                <paper-item id="operations-s-menu" @click="${this.clickedNavbarPages}">Operaciones</paper-item>
                <paper-item id="clients-s-menu" @click="${this.clickedNavbarPages}">Clientes</paper-item>
                <paper-item id="logout-s-menu" @click="${this.clickedNavbarButton}">Salir</paper-item>
              </paper-listbox>
            </paper-menu-button>
            <ul class="main-menu">
              <a id="home" @click="${this.clickedNavbarPages}" class="active"><li>Home</li></a>
              <a id="employee" @click="${this.clickedNavbarPages}"><li>Empleados</li></a>
              <a id="operations" @click="${this.clickedNavbarPages}"><li>Operaciones</li></a>
              <a id="clients" @click="${this.clickedNavbarPages}"><li>Clientes</li></a>
              <a id="logout" @click="${this.clickedNavbarButton}"  class="exit"><li>Salir</li></a>
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
    this.clickedOption(this.dataHandlerPages)
  }

  clickedButtonsRegister(event){
    this.dataHandlerButton = {
      action: event.currentTarget.id,
    }
    this.clickedOption(this.dataHandlerButton)
  }

  clickedNavbarPages(event){
    this.dataHandlerPages = {
      page: event.currentTarget.id,
    }
    this.clickedOption(this.dataHandlerPages)
    this.activeMenu(event)
  }

  clickedMobileMenu(event){
    this.dataHandlerPages = {
      page: event.currentTarget.id,
    }
    this.clickedOption(this.dataHandlerPages)
  }

  clickedNavbarButton(event){
    this.dataHandlerButton = {
      action: event.currentTarget.id,
    }
    this.clickedOption(this.dataHandlerButton)
  }

  clickedOption(object){
    this.dispatchEvent(new CustomEvent('clickedOption', {
      detail: object
    }))
  }

}

window.customElements.define("ib-dashboard", IbDashboard);
