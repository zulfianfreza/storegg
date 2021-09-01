import { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';

export default function CheckoutDetail() {
  const [dataTopup, setDataTopup] = useState({
    verifyID: '',
    nominalItem: {
      price: 0,
      coinQuantity: 0,
      coinName: '',
      _id: '',
    },
    paymentItem: {
      bank: {
        bankName: '',
        name: '',
        noRekening: '',
        _id: '',
      },
      payment: {
        type: '',
        _id: '',
      },
    },
    backAccountName: '',
  });

  useEffect(() => {
    const dataFromLocal = localStorage.getItem('data-topup');
    const dataTopupLocal = JSON.parse(dataFromLocal!);
    setDataTopup(dataTopupLocal);
  }, []);

  const itemPrice = dataTopup.nominalItem.price;
  const tax = dataTopup.nominalItem.price * 0.1;
  const totalPrice = itemPrice + tax;

  return (
    <>
      <div className="purchase pt-md-50 pt-30">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Purchase Details
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Game ID{' '}
          <span className="purchase-details">{dataTopup.verifyID}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Order ID <span className="purchase-details">#GG001</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Item{' '}
          <span className="purchase-details">
            {dataTopup.nominalItem.coinQuantity}{' '}
            {dataTopup.nominalItem.coinName}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Price{' '}
          <span className="purchase-details">
            <NumberFormat
              value={itemPrice}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Tax (10%){' '}
          <span className="purchase-details">
            <NumberFormat
              value={tax}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Total{' '}
          <span className="purchase-details color-palette-4">
            <NumberFormat
              value={totalPrice}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
      </div>
      <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Payment Informations
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Account Name{' '}
          <span className="purchase-details">{dataTopup.backAccountName}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Type{' '}
          <span className="payment-details">
            {dataTopup.paymentItem.payment.type}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Name{' '}
          <span className="payment-details">
            {dataTopup.paymentItem.bank.bankName}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Account Name{' '}
          <span className="payment-details">
            {dataTopup.paymentItem.bank.name}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Number{' '}
          <span className="payment-details">
            {dataTopup.paymentItem.bank.noRekening}
          </span>
        </p>
      </div>
    </>
  );
}
