import { Check, Trash } from 'lucide-react';
import './App.css'
import Counter from './components/Counter'

function App() {
  let greeting = "Namaste"

  let tasks = [
    {
      text: "Go to Market",
      isCompleted: false
    },
    {
      text: "Bring a paper",
      isCompleted: true
    },
    {
      text: "Draw monalisa",
      isCompleted: false
    }
  ]

  const handleChange = () => {
    window.alert('hey')

  }
  const handleDelete = () => {
    window.alert('Deleting')
  }

  return (
    <div className='h-screen w-screen bg-orange-100 flex justify-center items-center'>
      <div className='max-w-2xl w-full bg-white p-5 m-5 rounded-2xl shadow-md'>
        {/* <Counter /> */}
        <h3 className="text-3xl font-bold">Todo App</h3>

        <form action="" className='flex gap-3 my-5'>
          <input type="text" placeholder='Enter todo' className='w-full border border-red-600 p-3 rounded-md' />
          <button type='submit' className='bg-orange-600 text-white p-3 rounded-md'>Submit</button>
        </form>

        <ul className='flex flex-col gap-1'>

          {tasks.map((item, index) => (
            <li key={index} className='flex justify-between items-center bg-orange-100 px-5 py-2 rounded-md' >
              <span className={`${item.isCompleted ? "line-through" : ""}`}>{item.text}</span>
              {/* Ternery Operator */}
              <div className="actions flex gap-3">

                {!item.isCompleted &&
                  <button onClick={handleChange} className='p-2 bg-orange-100 rounded-full hover:bg-orange-600 hover:text-white cursor-pointer'>
                    <Check />
                  </button>
                }


                <button onClick={handleDelete} className='p-2 bg-orange-100 rounded-full hover:bg-orange-600 hover:text-white cursor-pointer'>
                  <Trash />
                </button>
              </div>
            </li>
          ))}


        </ul>
      </div>
    </div >
  )
}

export default App;