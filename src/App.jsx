import config from './config/config.js'

function App() {
    // console.log(import.meta.env.VITE_VAL);
    console.log(config.appWriteUrl);
    
  return (
    <>
      <p>hello ghost</p> 
    </>
  )
}

export default App
