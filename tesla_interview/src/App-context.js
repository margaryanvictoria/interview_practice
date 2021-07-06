import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import PageableTable from './components/PageableTable';
// import PersonContext, { usePerson, usePersonDispatch } from './globalState/PersonContext';
import { ThemeContext } from './globalState/ThemeContext';

export default function App() {
  const [value, setValue] = React.useState(null);
  const providerValue = React.useMemo(() => ({ value, setValue }), [value, setValue]);

  return (
    <div style={{backgroundColor: 'gainsboro', minHeight: '100vh'}}>
      <Router>
        <nav>
          <ul style={{margin: 0}}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about/'>About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <ThemeContext.Provider value={providerValue}>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/' exact>
              <Home />
            </Route>
          </ThemeContext.Provider>
        </Switch>
        {/* <ThemeContext.Provider value={{ value, setValue }}>
          <Route path='/' exact component={Home}/>
          <Route path='/about/' exact component={About}/>
        </ThemeContext.Provider> */}
      </Router>
    </div>
  );
}

{/* <PageableTable /> */ }
{/* <PersonContext>
  <DisplayPerson />
  <UpdatePersonName />
  <UpdatePersonEmail />
</PersonContext> */}

function Home() {
  const { value, setValue } = React.useContext(ThemeContext);

  return (
    <div>
      <pre>{JSON.stringify(value, null, 2)}</pre>
      <button onClick={() => {setValue('home')}}>{value}</button>
    </div>
  );
}

function About() {
  const { value, setValue } = React.useContext(ThemeContext);

  return (
    <div>
      <pre>{JSON.stringify(value, null, 2)}</pre>
      <button onClick={() => setValue('about')}>Change Valueee</button>
    </div>
  );
}



/*
function DisplayPerson() {
  const person = usePerson();

  return (
    <>
      {JSON.stringify(person)}
    </>
  );
}

function UpdatePersonName() {
  const personDispatch = usePersonDispatch();
  const inputRef = React.useRef();

  return (
    <div>
      <input ref={inputRef} placeholder="Name..." />
      <button onClick={() => { personDispatch({ target: usePersonDispatch.TARGETS.NAME, payload: inputRef.current.value }); inputRef.current.value = ''; }}>
        Update
      </button>
    </div>
  );
}

function UpdatePersonEmail() {
  const personDispatch = usePersonDispatch();
  const inputRef = React.useRef();

  return (
    <div>
      <input ref={inputRef} placeholder="Email..." />
      <button onClick={() => { personDispatch({ target: usePersonDispatch.TARGETS.EMAIL, payload: inputRef.current.value }); inputRef.current.value = ''; }}>
        Update
      </button>
    </div>
  );
} */