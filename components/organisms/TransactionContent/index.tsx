import { useCallback, useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { toast } from 'react-toastify';
import { HistoryTransactionTypes } from '../../../services/data-types';
import { getMemberTransactions } from '../../../services/member';
import ButtonTab from './ButtonTab';
import TableRow from './TableRow';

export default function TransactionContent() {
  const [total, setTotal] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [tab, setTab] = useState('all');

  const getMemberTransactionsAPI = useCallback(async (value) => {
    const response = await getMemberTransactions(value);
    if (response.error) {
      toast.error(response.message);
    } else {
      setTotal(response.data.total);
      setTransactions(response.data.data);
    }
  }, []);

  useEffect(() => {
    getMemberTransactionsAPI('all');
  }, []);

  const onTabClick = (value: string) => {
    setTab(value);
    getMemberTransactionsAPI(value);
  };

  const IMG = process.env.NEXT_PUBLIC_IMG;

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          My Transactions
        </h2>
        <div className="mb-30">
          <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
          <h3 className="text-5xl fw-medium color-palette-1">
            <NumberFormat
              value={total}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </h3>
        </div>
        <div className="row mt-30 mb-20">
          <div className="col-lg-12 col-12 main-content">
            <div id="list_status_title">
              <ButtonTab
                title="All Trx"
                active={tab === 'all'}
                onClick={() => onTabClick('all')}
              />
              <ButtonTab
                title="Success"
                active={tab === 'success'}
                onClick={() => onTabClick('success')}
              />
              <ButtonTab
                title="Pending"
                active={tab === 'pending'}
                onClick={() => onTabClick('pending')}
              />
              <ButtonTab
                title="Failed"
                active={tab === 'failed'}
                onClick={() => onTabClick('failed')}
              />
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="list_status_item">
                {transactions.map((transaction: HistoryTransactionTypes) => {
                  return (
                    <TableRow
                      key={transaction._id}
                      image={`${IMG}/${transaction.historyVoucherTopup.thumbnail}`}
                      title={transaction.historyVoucherTopup.gameName}
                      category={transaction.historyVoucherTopup.category}
                      item={`${transaction.historyVoucherTopup.coinQuantity} ${transaction.historyVoucherTopup.coinName}`}
                      price={transaction.value}
                      status={transaction.status}
                      id={transaction._id}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
