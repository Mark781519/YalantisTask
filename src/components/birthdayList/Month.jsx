
const monthNames = ["January", "February", "March",  "April", "May", "June",  "July", "August", "September", "October", "November", "December"];
// const d2 = new Date('2019-01-24T06:56:59.249Z');
// console.log(d2.getMonth());

const Month = ({ month }) => {
    return (
        <div className="month_of_birth">
             {monthNames[month]}
        </div>
    );
  }

  export default Month;