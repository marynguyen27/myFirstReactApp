import { useState } from 'react';
import './App.css';
import { puppyList } from './data.js';

function App() {
  console.log(puppyList);

  const [puppies, setPuppies] = useState(puppyList);

  console.log(puppies);

  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);

  function handleClick(puppyId) {
    setFeatPupId(puppyId);
    console.log(`Puppy with ID ${puppyId} was clicked`);
  }

  return (
    <div className='App'>
      {puppies.map((puppy) => (
        <p
          onClick={() => {
            console.log('puppy id: ', puppy.id);
            setFeatPupId(puppy.id);
          }}
          key={puppy.id}
          className='puppy-name'
        >
          {puppy.name}
        </p>
      ))}
      {featPupId && (
        <div className='featured-puppy'>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
