import React, { useEffect, useState } from 'react'
import css from '../../components/todos/Todos.module.css'
import { easeIn, motion } from 'framer-motion'

const getLocalData = () => {
  const lists = localStorage.getItem("worktodo");
  if (lists) {
    return JSON.parse(lists);
  }
  else {
    return []
  }
}


const Work = ({ title, e }) => {
  const [inputdata, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [isEditItem, setIsEditItem] = useState("");

  // Add Item function
  const addItem = () => {
    if (!inputdata) {
      alert("please fill the input data")
    }
    // else if(inputdata ){
    //     setItems(
    //         items.map((curElem) =>{
    //             if(curElem.id === isEditItem){
    //                 return{...curElem,name:inputdata}
    //             }
    //             return curElem
    //         })

    //     )
    //     setInputData("")
    //     setIsEditItem("");
    // }
    else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputdata,
      }
      setItems([...items, myNewInputData])
      setInputData("")
    }
  }

  //edit the items

  const editItem = (index) => {
    const item_todo_edited = items.find((curElem) => {
      return curElem.id === index;
    });

    setInputData(item_todo_edited.name)
    setIsEditItem(index);
  }

  //Deleting Item
  const deleteItem = (index) => {
    const updatedItems = items.filter((curElem) => {
      return curElem.id != index;
    })
    setItems(updatedItems);
  }

  //removeall

  const removeAll = () => {
    setItems([]);
  }

  //addlocalStorage

  useEffect(() => {
    localStorage.setItem("worktodo", JSON.stringify(items))
  }, [items])

  return (
    <div className={css.container}

    >
      <div className={css.heading}>
        Work
      </div>
      <div className={css.Inputbar}>
        <input type="text" placeholder='Write a new Task'
          value={inputdata}
          onChange={(event) => setInputData(event.target.value)}
        />
        <img src="./plus.svg" alt="" onClick={addItem} />
      </div>
      {
        items.map((curElem) => {
          return (
            <motion.div className={css.todocontainer} key={curElem.id}
              initial={{ y: 70 }}
              animate={{ y: 1,}}
              exit={{ y: 0 }}
            >
              <div className={css.left}>
                <input type="checkbox" key={curElem.id} />
                <span className={css.task}>{curElem.name}</span>
              </div>

              <img src="./plus.svg" alt="" className={css.cross} onClick={() => deleteItem(curElem.id)} />

            </motion.div>

          )
        })
      }
    </div>
  )
}

export default Work