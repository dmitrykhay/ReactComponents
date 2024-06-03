
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import { Calendar } from "./components/Calendar";
import { UiFC } from "./components/UiFC";
import { ShopItemClass } from "./components/ShopItemClass";

const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

// const now = new Date(2017, 2, 8);
const now = new Date();

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/1" element={
          <>
            <div className="container">
              <div className="background-element"></div>
              <div className="highlight-window">
                <div className='highlight-overlay'></div>
              </div>
              <div className="window">
                <UiFC item={item} />
              </div>
            </div>
          </>
        } />
        <Route path="/2" element={
          <>
            <div className="container">
              <div className="background-element"></div>
              <div className="highlight-window">
                <div className='highlight-overlay'></div>
              </div>
              <div className="window">
                <ShopItemClass item={item} />
              </div>
            </div>
          </>
        } />
        <Route path="/calendar" element={<Calendar date={now} />} />
      </Routes>
    </Router>
  );
}


// function App() {

//   return (
//     <>
//     <div className="container">
//       <div className="background-element"></div>
//       <div className="highlight-window">
//         <div className='highlight-overlay'></div>
//       </div>
//       <div className="window">
//         <UiFC item={item} />
//       </div>
      
//       <div className="highlight-window">
//         <div className='highlight-overlay'></div>
//       </div>
//       <div className="window">
//         {<ShopItemClass item={item} />}
//       </div>
//     </div>
//     </>
//   )
// }

export default App
