// Please read the README.md to understand what to do. Happy Coding !

async function fetchUserData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      console.log(data)
      return data
    } catch (error) {
      console.error('error', error)
      throw error; 
    }
  }
  const usersData = data;

  const modifydata = {
    method: "POST",
    headers: {
      "Content-Type": "package-lock/json",
      Accept: "package-lock/json",
    },
    body: JSON.stringify({
        Name: user.name,
        Username : user.usernam,
        email : user.email,
        Address : user.address,
        Phone : user.phone,
        Website : user.website,
        Company : user.company
    }),
  };

  console.log(modifydata);

const filteruser=modifydata.filter(user =>user.email.endsWith('.biz'));

console.log(filteruser);

const sortuser=modifydata.slice().sort((a,b) =>a.name.localeCompare(b.name));




