import './App.css';
import { ComponentRender } from './components/ComponentRender';

// import { ComponentCodeRender } from './components/ComponentRenderer/ComponentCodeRender';

function App() {
    return (
        <div className='flex flex-col items-center'>
            <ComponentRender />
        </div>
    );
}

export default App;
