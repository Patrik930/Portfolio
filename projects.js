import { getData } from "./assets.js"

const url = 'https://raw.githubusercontent.com/Patrik930/Portfolio_data/main/portfolio_data.json'

export const projects =()=>{
    getData(url,renderProjects)
}

function renderProjects(data){

    data.forEach(e => {
        console.log(e)
        document.querySelector(".projectsData").innerHTML+=`
        <div class="row">
        <div class="card text-center col">
          <div class="card-header">${e.name}</div>
          <div class="card-body">
            <h5 class="card-title">${e.descr}</h5>

            <a href="${e.github}" target="_blank" class="btn btn-primary"><i class="fa-brands fa-github"></i></a>
            <a href="${e.hosted}" target="_blank" class="btn btn-primary">Go to the website</a>
            <img src="${e.img}" alt="${e.name}"/>
          </div>
        </div>
        `
    });
}