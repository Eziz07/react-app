import ExpenseItem from "./components/ExpenseItem";
function App() {
  const items = [
    {
      id: 0,
      date: new Date(2023, 3, 7),
      title: "Car insurance",
      amount: 200
    },
    {
      id: 1,
      date: new Date(2023, 7, 10),
      title: "Social media",
      amount: 100
    },
    {
      id: 2,
      date: new Date(2023, 5, 11),
      title: "Sports",
      amount: 234
    }
];
  return (
    <div className="App">
      <h2>My react app</h2>
     
      <ExpenseItem date={items[0].date} title={items[0].title} amount={items[0].amount}></ExpenseItem>
      <ExpenseItem date={items[1].date} title={items[1].title} amount={items[1].amount}></ExpenseItem>
      <ExpenseItem date={items[2].date} title={items[2].title} amount={items[2].amount}></ExpenseItem>

    </div>
  );
}

export default App;
