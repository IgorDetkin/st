import { useEffect, useState } from 'react'
import classes from './App.module.scss'
import SearchForm from '../SearchForm/SearchForm'
import SelectSort from '../SelectSort/SelectSort'
import List from '../List/List'
import { ICardProps } from '../Card/Card'
import Header from '../Header/Header'

const App: React.FC = () => {
  const [users, setUsers] = useState<ICardProps[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<ICardProps[]>([]);
  const [searchReq, setSearchReq] = useState<string>('');
  const [sortValue, setSortValue] = useState<string>('standart');
  
  const [searchValue, setSearchValue] = useState<string>('');
  
  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {setUsers(data)})
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getUsers()
  }, []);

  useEffect(() => {
    if(users) {
      setFilteredUsers(
        users.filter((item) => 
        item.name.toLowerCase().includes(searchReq.toLowerCase())
        )
      )
    }
  }, [users, searchReq]);


const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  const value = event.target.value;
  setSortValue(value);
  const sortedUsers = filteredUsers.sort((a, b) => {
    if (value === 'name') {
      return a.name.localeCompare(b.name);
    }
    else if (value === 'email') {
      return a.email.localeCompare(b.email);
    }
    else if (value === 'company') {
      return a.company.name.localeCompare(b.company.name);
    }
    else { 
      return 0
    }
  })
  
  if(value==='standart') {
    setFilteredUsers([...users]);  
  }
  else {
    setFilteredUsers(sortedUsers);
  }
};


const handleUpdate = () => {
  getUsers();
  setSearchValue('');
  setSortValue('standart');

}

  return (
    <>
      <div className={classes.app}>
        <Header
          handleFunc={handleUpdate}
        />
        <main>

        <div className={classes.filter}>
        <SearchForm
          setSearchReq={setSearchReq}
          value={searchValue} 
          setValue={setSearchValue}
        />
        <SelectSort
          value={sortValue}
          onChange={handleChange} 
          options={[
            {value: 'standart', name: 'По умолчанию'},
            {value: 'name', name: 'По имени'},
            {value: 'email', name: 'По email'},
            {value: 'company', name: 'По компании'},
          ]}
        />
        </div>  
        <List
          users={filteredUsers}
        />
        </main>

      </div>
    </>
  )
}

export default App
