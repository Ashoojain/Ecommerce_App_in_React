
import './App.css';
import Cart from './pages/Cart';
import {Routes , Route} from 'react-router-dom'
import Main  from './Main.js'
function App() {
  return (
    <div>
<Routes>
<Route path='/' element={<Main />}/>
<Route path='/product' element={<Cart />} />
</Routes>
 
    </div>
  );
}

export default App;
