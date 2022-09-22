/**
 * 
 * A ideia do async/await é transformar um código que antes
 * tinha encadeamento, numa ideia um pouco mais sincrona
 * uma visão um pouco mais sincrona
 * 
 * 
 */


//EXECUTAR ESSE CÓDIGO NO https://codesandbox.io/dashboard


 //Pode escrever o try/catch assum
/*async function start() {

   try{
    const response = await fetch('https://api.github.com/users/willmagna')
    const user = await response.json();
    const reposResponse = await fetch(user.repos_url)
    const repos = await reposResponse.json()
    console.log(repos)
  }catch(e){
    console.log(e)
  }

}

start()
*/

//OU ASSim
/*
async function start() {

  const response = await fetch('https://api.github.com/users/willmagna')
  const user = await response.json();
  const reposResponse = await fetch(user.repos_url)
  const repos = await reposResponse.json()
  console.log(repos)

}

start().catch(e => console.log(e))
*/
// E tbm assim, mais concisa

async function start() {
    const url = 'https://api.github.com/users/willmagna';
    const user = await fetch(url).then( r => r.json());
    const userRepos = await fetch(user.repos_url).then( r => r.json());
    console.log(userRepos);
  
  }
  
  start().catch(e => console.log(e));