import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HobbyList from "../components/hobby/HobbyList";
import { addNewHobby, setActiveHobby } from "../redux/Hobby/HobbyAction";

function HomePage() {
  const dispatch = useDispatch();
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);
  console.log("Hobby list", hobbyList);
  const randomNumber = () => {
    return 1000 + Math.trunc(Math.random() * 9000);
  };
  const handleAddHobbyClick = () => {
    const newID = randomNumber();
    const newHobby = {
      id: newID,
      title: `Hobby ${newID}`,
    };
    const action = addNewHobby(newHobby);
    dispatch(action);
  };
  const handleHobbyClick = (hobby) => {
    const action = setActiveHobby(hobby);
    dispatch(action);
  };

  return (
    <div>
      <h1>REDUX HOOKS - HOME PAGE</h1>
      <button onClick={handleAddHobbyClick}>Random Hobby</button>
      <HobbyList
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
      />
    </div>
  );
}

export default HomePage;
