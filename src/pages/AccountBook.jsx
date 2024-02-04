import React, { useEffect, useState } from 'react';
import Footer from '../layouts/Footer';
import Header from '../layouts/header';
import { accountData } from '../apis/axios';

export default function AccountBook() {
  const [purchaseData, setPurchaseData] = useState([]);
  const id = 'd41a74e1-985a-43d8-92c9-67ab2c7d7e9f'; // 실제 사용자 ID로 대체

  useEffect(() => {
    accountData(id)
      .then((response) => {
        setPurchaseData(response.data.purchase);
      })
      .catch((error) => {
        console.error("계정 데이터를 가져오는 중 오류 발생:", error);
      });
  }, [id]);

  const formatDateString = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month < 10 ? '0' : ''}${month}/${day < 10 ? '0' : ''}${day}/${year}`;
  };

  const calculateTotalSum = () => {
    if (!purchaseData || purchaseData.length === 0) {
      return 0;
    }

    const totalSum = purchaseData.reduce((total, item) => {
      return total + item.itempricesum * item.itemquantity; // itemquantity가 상품의 수량을 나타낸다고 가정합니다.
    }, 0);
    return totalSum;
  };

  return (
    <div className="flex flex-col h-xxl relative w-full">
      <div className="flex-1 overflow-y-auto">
        <Header title={'가계부'} />
        <div className="container mx-auto p-4">
          <div className="bg-orange-200 h-1 w-full mt-0.5 mb-1"></div>

          {/* 소비금액 영역 */}
          {purchaseData.map((purchaseItem) => (
            <div key={purchaseItem.date} className="p-1 mb-2 w-full">
              <h2 className="mb-2 text-sm">{formatDateString(purchaseItem.date)}</h2>
              <div className="bg-gray-100 h-0.5 w-full mt-1 mb-1"></div>

              <p>{purchaseItem.storename}</p>
              <ul>
                <li key={purchaseItem.date} className="flex justify-between">
                  <p>
                    <span>{purchaseItem.iteminformation}</span>
                  </p>
                  <span style={{ marginTop: '10px' }}>{purchaseItem.itemquantity} {purchaseItem.itempricesum} 원</span>
                </li>
              </ul>
              {/* <p className="font-bold mb-4">지출 {expense.item.price}원</p> */}
            </div>
          ))}

          <div className="bg-orange-200 h-1 w-full mt-0.5 mb-1"></div>

          {/* 소비금액 합산 */}
          <div className="mt-8 w-full">
            <h2 className="text-lg font-bold mb-2"> 소비 금액</h2>
            <div className="bg-orange-200 h-1 w-full mt-0.5 mb-1"></div>
            <h2 className="text-right">{calculateTotalSum()} 원</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
