export const api = {
  getPersonages(url){
    let data = fetch(url)
               .then(res => res.json())
               .then(response => response)
    return data
  }
};