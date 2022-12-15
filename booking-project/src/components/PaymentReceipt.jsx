import React from 'react'
import {Document, Page} from 'react-pdf'
import logo from "../assets/logo.png";
const PaymentReceipt = ({transactionRef, amount,phone, name }) => {
  return (
    <div>
      <Document>
        <Page size="A4">
          <div className="">
            <img src={logo} alt="" className="w-40 h-40" />
            <h1>Payment Receipt</h1>
            <p className="">Transaction ID: {transactionRef}</p>
            <p>Amount: {amount}</p>

            <p>Phone: {phone}</p>

          </div>
        </Page>
      </Document>
    </div>
  );
}

export default PaymentReceipt