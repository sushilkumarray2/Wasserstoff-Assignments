import './App.css';
import User from './Components/User Page/User';
import Dashboard from './Components/Dashboard Page/Dashboard';
import Topic from './Components/Topic Page/Topic';
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import { useState } from 'react';

function App() {

  const [user, setUser] = useState("");
  const [topicName, setTopicName] = useState("");
  const [topicDetails, settopicDetails] = useState([]);
  const [topicID, setTopicID] = useState("");
  const [topicList, setTopicList] = useState([])

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<User user={user} setUser={setUser} setTopicList={setTopicList} />} exact />
            <Route path='/dashboard' element={<Dashboard setTopicName={setTopicName} settopicDetails={settopicDetails} topicList={topicList} setTopicList={setTopicList} setTopicID={setTopicID} user={user} />} />
            <Route path='/dashboard/add_topic' element={<Topic topicName={topicName} topicDetails={topicDetails} setTopicList={setTopicList} topicList={topicList} topicID={topicID} />} />
          </Routes>
        </BrowserRouter>
        
      </div>
  );
}

export default App;