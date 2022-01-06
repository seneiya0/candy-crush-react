import { useState, useEffect } from 'react'

const width = 8 
const candyColors = [
  'blue',
  'green',
  'orange',
  'purple',
  'red',
  'yellow'
]


function App() {

  const [currentColorArrangement, setCurrentColorArrangement] = useState([])

  function createBoard(){
    const randomColorArrangement = []
    for (let i = 0; i < width * width; i++){
      const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
      randomColorArrangement.push(randomColor)
    }
    setCurrentColorArrangement(randomColorArrangement)
  }

  useEffect(() => {
      createBoard()
  }, [])


  console.log(currentColorArrangement)

  return (
    <div className='App'>
      <div className='game'>
        {currentColorArrangement.map((candyColor, index) => (
          <img 
          key={index}
          style={{backgroundColor: candyColor}}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
