import { Grid } from '@material-ui/core';


import Header from './components/Header'
import Content from './components/Content'


function App() {
  return (
    <div className="App">
      <Header />

      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Content />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      
    </div>
  );
}

export default App;
