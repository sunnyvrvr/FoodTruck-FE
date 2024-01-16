import React, { useEffect, useRef, useState } from 'react';
import Footer from '../layouts/Footer';

export default function AccountBook() {
  const [expenses, setExpenses] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date().toISOString().slice(0, 7));
  const [newExpense, setNewExpense] = useState({ date: currentMonth, location: '', items: [], total: 0 });

  // 월 선택 input이 변경될 때마다 호출되는 함수
  const handleMonthChange = (e) => {
    const selectedMonth = e.target.value;
    setCurrentMonth(selectedMonth);
    setNewExpense({ ...newExpense, date: selectedMonth });
  };

  function getCurrentMonth() {
    // 현재 연도와 월을 YYYY-MM 형식으로 반환
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return `${year}-${month < 10 ? '0' : ''}${month}`;
  }

  useEffect(() => {
    fetch('data/expense.json')
      .then((res) => res.json())
      .then((res) => {
        const filteredExpenses = res.expenses.filter((expense) => expense.date.startsWith(currentMonth));
        console.log(res); // 데이터 확인용
        setExpenses(filteredExpenses);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [currentMonth]);

  const calculateMonthlyTotal = () => {
    const monthlyTotal = expenses.reduce((total, expense) => total + expense.total, 0);
    return monthlyTotal;
  };

  return (
    <div className="flex flex-col h-screen relative">
      <div className="h-92% w-screen flex-1 overflow-y-auto">
        <div className="title text-center mt-4 text-2xl font-weight: 700 font-sans">가계부</div>
      <div className="container mx-auto p-4" style={{ position: 'relative' }}>

          {/* 월 선택 */}
          <div className="text-center mb-4">
            <label className="block mb-2"></label>
            <input
              type="month"
              className="border p-2 rounded-lg"
              value={currentMonth}
              onChange={handleMonthChange}
            />
          </div>
      <div className="bg-gray-400 h-0.5 w-full mt-0.5 mb-1"></div>

          {/* 날짜별 지출 기록 */}
          {expenses.map((expense) => (
            <div key={expense.date} className="border p-1 mb-2">
              <h2 className="font-bold mb-2 italic text-lg">{expense.date}</h2>
              <div className="bg-gray-100 h-0.5 w-full mt-1 mb-1"></div>
              <p>{expense.location}</p>
              <ul>
                {expense.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {/* <p>{item.name} </p> */}
                    {/* <div className="bg-gray-100 h-0.5 w-full mt-1 mb-1"></div> */}
                    <p>
                      <span>{item.description}</span>
                    </p>
                      <span className="ml-30">{item.price} 원</span>
                  </li>
                ))}
              </ul>
              {/* <p className="font-bold mb-4">지출 {expense.item.price}원</p> */}
            </div>
          ))}

          {/* 월 소비 금액 합산 */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-2">월 소비 금액</h2>
          <div className="bg-gray-200 h-0.5 w-full mt-1 mb-1"></div>
            <p className="text-right">{calculateMonthlyTotal()}원</p>
          </div>
        </div>
      </div>

      {/* 푸터 높이 설정 */}
      <Footer className="z-3 absolute bottom-0 h-8%" />
    </div>
  );
}