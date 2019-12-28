import { css } from 'lit-element';

export default css`
:host {
  display: inline-block;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column; }

:host([hidden]), [hidden] {
  display: none !important; }

*, *:before, *:after {
  box-sizing: inherit;
  font-family: inherit; }

header {
  margin: auto;
  margin-top: 59px;
  width: 704px; }
  header nav {
    width: 100%;
    display: flex;
    align-items: end;
    justify-content: space-evenly; }
    header nav img {
      width: 53px;
      height: 53px; }
    header nav ul {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style-type: none;
      padding: 0;
      margin: 0;
      border-bottom: 0.5px solid #C9C9C9; }
      header nav ul a {
        padding: 12px 17px; }
        header nav ul a.active {
          background-color: #ECEAEA;
          border-radius: 5px; }
        header nav ul a.exit {
          background-image: linear-gradient(180deg, #00EFD1 0%, #00ACEA 100%);
          border-radius: 12px;
          width: 108.36px;
          height: 28.73px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          margin-left: 30px; }

.dashboard {
  padding-top: 205px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center; }
  .dashboard img {
    height: 71.68px;
    width: 71.68px; }
  .dashboard .dashboard-operations {
    padding: 0 80px; }
  .dashboard .dashboard-employee, .dashboard .dashboard-operations, .dashboard .dashboard-clients {
    text-align: center; }
  .dashboard .dashboard-employee-card, .dashboard .dashboard-operations-card, .dashboard .dashboard-clients-card {
    background-color: #FFFFFF;
    border-radius: 24.19px;
    box-shadow: 0 21px 62px 0 rgba(0, 0, 0, 0.1);
    width: 152.32px;
    height: 174.16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 38px;
    flex-direction: column; }
  .dashboard button {
    background-image: linear-gradient(44.3deg, #00BFEF 0%, #00DFD1 100%);
    border: 1.68px solid #00BFEF;
    border-radius: 11.76px;
    width: 102px;
    height: 25.2px;
    color: #FFFFFF;
    font-size: 16.24px;
    font-weight: 700;
    letter-spacing: 0.9px;
    line-height: 19px;
    text-align: center; }
`;
