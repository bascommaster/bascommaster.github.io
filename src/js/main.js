"use strict";

console.log(`Hello world!`);

const list=document.querySelector(".projects-container--js");

fetch('https://api.github.com/users/bascommaster/repos?sort=updated&direction=desc')
  .then(resp => resp.json())
  .then(resp => {
    const repos=resp;
    for(const repo of repos){
      const {description, homepage, html_url, name}=repo;
      console.log(repo);
      list.innerHTML+=`
        <section class="project">
          <div class="project-items">
            <img src="../assets/img/github.svg" alt="" class="project-items__logo">
            <h3 class="project-items__title">${name}</h3>
            ${
              description ? `<p class="project-items__description">${description}</p>` :`<p class="project-items__description">There is no description for this project 🙂</p>`
            }
            
          </div>
     
          <div class="project-footer">
            ${
              homepage ? `<a class="project-footer__link" href="${homepage}" target="_blank" rel="nofollow noreferrer" title="Demo: ${name}"><i class="fa fa-desktop" aria-hidden="true"></i>Demo</a>` : ''
            }
            
            <a class="project-footer__link line" href="${html_url}" target="_blank" rel="nofollow noreferrer" title="Source code: ${name}"><i class="fa fa-share-alt-square" aria-hidden="true"></i>GitHub</a>
          </div>
        </section>
      `;
    }
  })
  .catch(err=>{
    console.log(err);
  })
