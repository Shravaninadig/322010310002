import logo from './logo.svg';
import './App.css';

function App() {
  const trains = [
    {
      name: 'xyz',
      location: 'goa',
      source: 'bangalore',
      destination: 'vizag',
      timings: 'Timings A',
    },
    {
      name: 'stv',
      location: 'bangalore',
      source: 'bangalore',
      destination: 'ooty',
      timings: 'Timings B',
    },
    // Add more train data as needed
  ];
 return (
    <div className="App">
      <div className="App-header">
        <img src="https://images.unsplash.com/photo-1527684651001-731c474bbb5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="Train Logo" className="train-logo" />
        <h1>RailPlanner</h1>
        <input type="text" placeholder="Search" />
      </div>
      <div className="App-content">
        {trains.map((train, index) => (
          <div className="train-card" key={index}>
            <h2>{train.name}</h2>
            <p>Location: {train.location}</p>
            <p>Source: {train.source}</p>
            <p>Destination: {train.destination}</p>
            <p>Timings: {train.timings}</p>
            <img src="https://5.imimg.com/data5/LN/DR/RV/SELLER-25686744/rail-ticket-booking-500x500.png" alt="Book Logo" className="book-logo" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;