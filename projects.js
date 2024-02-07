import { getData } from "./assets.js"

const url = 'https://raw.githubusercontent.com/Patrik930/Portfolio_data/main/portfolio_data.json'

export const projects =()=>{
    getData(url,renderProjects)
}

function renderProjects(data){
    console.log(data);
}