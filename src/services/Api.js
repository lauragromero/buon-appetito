const ENDPOINT='https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian';


const getDataFetch =()=> fetch(ENDPOINT).then(response => response.json());

export {getDataFetch}