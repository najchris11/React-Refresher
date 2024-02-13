import Welcome from "./welcome";
function App() {
  const names = ['Jim', 'Jordan', 'Jared']
  // function renderWelcome(name) {
  // }
  return (
    <>
      {/* This open close bracket allows react to return one top level element */}
      <div>
        {/* This firstName will become part of props and is how you can pass information into a component */}
        {names.map(name => <Welcome firstName={name}/>)}
      </div>
      <div></div>
    </>
    
  );
}

export default App;
