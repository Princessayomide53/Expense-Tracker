

function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
     const day = props.date.toLocaleString('en-US', {month: '2-digit'});
     const year = props.date.getFullYear();

  return ( 
    <div className="border-2 border-white rounded-xl px-10 py-4 bg-[#2a2a2a]">
        <div className="text-white text-2xl font-semibold text-center pb-1">{month}</div>
        <div className="text-white text-xl text-center pb-2">{year}</div>
        <div className="text-white text-5xl font-bold text-center">{day}</div>
      </div>
  )
}

export default ExpenseDate;