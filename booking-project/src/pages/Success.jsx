import React from 'react'
import { Link } from 'react-router-dom'
import {PDFDownloadLink} from '@react-pdf/renderer'
import PaymentReceipt from '../components/PaymentReceipt'
const Success = () => {
  return (
    <div className=" text-center mt-10 pt-10 text-lg ">
      <div className="justify-center">
        <h3>Thank you for using our service.</h3>
      </div>
      <div className="justify-center">
        <p>We're so happy you chose us!</p>
      </div>
      <p className="text-center text-blue-500">
        <Link to={"/campus"}> Go back to schools</Link>
      </p>

      {/* <PDFDownloadLink document={<PaymentReceipt />} fileName="receipt.pdf">
        Download receipt
      </PDFDownloadLink> */}
    </div>
  );
}

export default Success