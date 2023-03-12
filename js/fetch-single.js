let url = "https://www.brmcontractors.net/assets/data/brm.json";
async function getBlogs() {
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

let singleCount = 0;
let length = 0;
let totalQuery = document.getElementById("totalQ");

async function renderBlogs(active, option, cla) {
    let blogs = await getBlogs();
    let html = '';
    length = blogs.length;

   
    if (active === "all") {
            
        blogs.forEach(blog => {
          
          if (option === 0) {
            let segment = `
            <div class="card-res">
            <div class="card-image">
              <img src="${blog.img1}">
            </div>
            <div class="card-text">
              <p class="card-meal-type">${blog.category}</p>
              <h2 class="card-title">${blog.title}</h2>
              <p class="card-body">${blog.body}</p>
              <p class="card-body">${blog.author}<span class="ms-3"><small class="text-secondary">${blog.date}</small></span></p>
              <div class="card-price"><img src="${blog.avatar}"></div>
  
              <p class="card-body"></p>
  
            </div>
            <div class="card-avatar"><img src="${blog.img2}"></div>
            </div>    `;
          }

          if (option === 1) {
            let htmlSegment = `
        
            <div class="col-lg-6 mx-auto d-block mt-2" style="min-width:65%;">
            <div class="p-1 card-overlay card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-l" 
            style="background: linear-gradient(rgba(19, 16, 34, 0.48) 0%, rgba(19, 16, 34, 0.68) 100%) 0% 0% / cover, 
            url(${blog.img1}) center center no-repeat;background-size: cover;">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <div class="lc-block pt-5 mt-5 mb-4">
                <h1 class="display-3 text-uppercase  mt-2" style="color:white;font-weight:600;">${blog.category}</h1>
                  <h2 class="fw-bold">${blog.title}</h2>
                  <p>${blog.body}</p>
                
                <ul class="d-flex list-unstyled mt-auto ms-auto overlay-link">
                  <a class="btn btn-link btn-sm text-white" href="" role="button">${blog.author}</a>
                  <img src="https://www.brmcontractors.net/assets/logo/brm-red.ico" class="float-start ms-5" style="height: 50px;border-radius:50px;width:80px;height:80px;">
                </ul>
                </div>
              </div>
            </div>
          </div>            `; 

          }
  
          //filter categories
          let filter = blog.project.toLowerCase();
          let cat = document.getElementById("catData").value;
          if (filter === cat) { html += htmlSegment; }
          // if (cat === "all") { html += htmlSegment; }
    
          // filter card type 
          let author = document.getElementById("authorData").value;
          let aFiltered = blog.author;
          if (aFiltered === author) { html += htmlSegment;}
  
          if (author === "all" && cat === "all") {
            html += htmlSegment;
          }
        });
        let container = document.querySelector('.blog-cards');
        container.innerHTML = html;
        return
    } 

    else {
      let segment = "hello"
        blogs.forEach((blog) => {
          let index = Number(active);
          if (singleCount++ === index) {
            
            // standard 
            if (option === 0) {
              segment = `
              <div class="card-res">
              <div class="card-image">
                <img src="${blog.img1}">
              </div>
              <div class="card-text">
                <p class="card-meal-type">${blog.category}</p>
                <h2 class="card-title">${blog.title}</h2>
                <p class="card-body">${blog.body}</p>
                <p class="card-body">${blog.author}<span class="ms-3"><small class="text-secondary">${blog.date}</small></span></p>
                <div class="card-price"><img src="${blog.avatar}"></div>
    
                <p class="card-body"></p>
    
              </div>
              <div class="card-avatar"><img src="${blog.img2}"></div>
              </div>    `;
            }
            // overlay 
            if (option === 1) {
              segment = `
          
              <div class="mx-auto d-block mt-2" style="min-width:90%;">
              <div class="p-1 card-overlay card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-l" 
              style="background: linear-gradient(rgba(19, 16, 34, 0.48) 0%, rgba(19, 16, 34, 0.88) 100%) 0% 0% / cover, 
              url(${blog.img1}) center center no-repeat;background-size: cover;">
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <div class="lc-block pt-5 mt-5 mb-4">
                  <h1 class="display-3 text-uppercase  mt-2" style="color:white;font-weight:600;">${blog.category}</h1>
                    <h2 class="fw-bold">${blog.title}</h2>
                    <p>${blog.body}</p>
                  
                  <ul class="d-flex list-unstyled mt-auto ms-auto overlay-link">
                    <li><a class="btn btn-link btn-sm text-white" href="" role="button">${blog.author}</a></li>
                    <img src="https://www.brmcontractors.net/assets/logo/brm-red.ico" class="float-start ms-5" style="height: 50px;border-radius:50px;width:80px;height:80px;">
                  </ul>
                  </div>
                </div>
              </div>
            </div>            `; 

            }
            // dark 
            if (option === 2) {
              segment = `
  
              <div class="col-md-6 col-xl-4">
                <div class="card mx-auto d-block blog-item m-3" style="width: 390px;">
                  <div class="rounded-top">
                    <img class="img-fluid" src="${blog.img1}" style="width: 390px; height: 300px; object-fit: cover;"> 
                  </div>
                  <div class="product-header display-4 color-red text-russo">
                    <h4 class="p-3 text-uppercase bg-red btn-rounded ms-2 mt-2 py-1 px-3" 
                    style="position: absolute; top: 1px; color: white;">${blog.category}</h4>
                  </div>
                  <div class="bg-dark d-flex-column align-items-center p-4 p-1">
                    <h4 class="fs-5 text-uppercase text-light me-3 d-flex">${blog.title}
                      <img src="https://www.brmcontractors.net/assets/logo/brm-red.ico" class="img-fluid mx-auto d-block ms-1" style="width: 140px; height: 70px;">
                    </h4>
                    <p class="text-light text-roboto lead">${blog.body}</p>
                  </div><div class="card-user">
                  <div class="user-info bg-secondary">
                    <img src="${blog.avatar}" class="p-2"style="width:60px;height:60px;border-radius:50px;>
                    <a class="text-light text-roboto ps-5 mb-0 pb-0"><span class="text-light ms-3">${blog.author}</span></a>
                    <small class="text-roboto ps-5 small mt-0 pt-0 pb-2 text-light">${blog.date}</small>
                  </div>
                </div>
              </div>
            </div>        
    `; 
            }
            //flip
            if (option === 3) {
              segment = `
              <div class="box-item1">
              <div class="flip-box  col-sm-12 col-md-6  mx-auto d-block">
                <div class="flip-box-front text-center" style="background-image: url('${blog.img2}');">
                  <div class="inner color-white">
                    <h2 class="flip-box-header text-uppercase">${blog.category}</h2>
                    <p>${blog.title}</p>
                    <img src="https://www.brmcontractors.net/assets/logo/brm-red.ico" style="width:50px;height:50px;" alt="" class="flip-box-img">
                  </div>
                </div>
                <div class="flip-box-back text-center" style="background-image: url('${blog.img1}');overflow:hidden">
                  <div class="inner color-white">
                  <h4>${blog.title}</h4>
                  <p>${blog.body}</p>
                  <small><span> <img src="${blog.avatar}" style="width:50px;height:50px;border-radius:50px;" alt="" class="flip-box-img"></span></small>
                  <small>${blog.date}</small>
      
                    
                    <button class="btn-main">${blog.author}</button>
                  </div>
                </div>
              </div>  <br> `;   
            }

            
            html = segment;
            container = document.querySelector(cla);
            container.innerHTML = html;
          }
         
    })
    }

    singleCount = 0;
    totalQuery.innerHTML = renderLength().length;
    totalQuery.style.fontSize = "16px";
}
function randomBlog(selection, cla){
  let random = Math.floor(Math.random() * 40);
  renderBlogs(random, selection, cla);
}


//create blog at index i
let activeIndex = 0;
function blog(i) {
  renderBlogs(i);
}



