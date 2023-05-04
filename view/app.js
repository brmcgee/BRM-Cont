const renderRecordToDisplayCard = function (index) {
  let blog = records[index];
  let blogImage1 = blog.img1;
  let blogImage2 = blog.img2;
  let viewType = document.getElementById('viewStyleSelect');
  let html = smallCardView(blog);

  (!blog.img1.includes("http")) ? blogImage1 = `https://www.brmcontractors.net/${blog.img1}` : blogImage1 = blog.img1;
  (!blog.img2.includes("http")) ? blogImage2 = `https://www.brmcontractors.net/${blog.img2}` : blogImage2 = blog.img2;

  
   html = smallCardView(blog);
   html = bigCardView(blog);

  switch (viewType.value) 
  {
    case 'small':
      html = smallCardView(blog);
      break;
    case 'big':
      html = bigCardView(blog);
      break;
    case 'overlay':
      html = overlayView(blog);
      break;
    default:
      html = smallCardView(blog);
  }

   displayCard.innerHTML += html;
};


const getOptions = function(key, elemID) {
  let elem;
  let parent = document.getElementById(elemID);
  let valueArray = [];

  let el = document.createElement('option');
    el.value = ' ';
    el.innerHTML = ' ';
    el.className = 'select-option';
    parent.appendChild(el);

  for(let x = 0; x < records.length; x++){
    let keyValue = records[x][key].trim();


    if (!valueArray.includes(keyValue)) {
      elem = document.createElement('option');
      elem.value = keyValue;
      elem.innerHTML = keyValue;
      elem.className = 'select-option';
      parent.appendChild(elem);
      valueArray.push(keyValue);
    }
  };
  parent.addEventListener('input', () => {
    searchSelectedKey(elemID, key);
  })
};


const searchSelectedKey = function (elemID, key) {
  clearDisplayCard();
  let selectValue = document.getElementById(elemID).value;
  let filteredSelectValue = selectValue.toLowerCase();
  
  records.forEach((record, index) => {

      let query = record[key];
      let filteredQuery = query.toLowerCase();

      if (filteredQuery.trim() === filteredSelectValue.trim()) {
        renderRecordToDisplayCard(index);
      }
  });

   let selects = document.querySelectorAll('select')
   selects.forEach(i => {
    i.addEventListener('mousedown',clearOptions);
   })   
   
};



const clearDisplayCard = function() {
  displayCard.innerHTML = "";
};

const clearOptions = function () {
  let options = document.querySelectorAll('.select-option');

  options.forEach(x => {
    x.remove();
  });

  loadAllSelectOptions();

};


function loadAllSelectOptions(){
  getOptions('category', 'selectCategory');
  getOptions('title', 'selectTitle');
  getOptions('author', 'selectAuthor');
  getOptions('project', 'selectProject');
  
}


function smallCardView (blog) {
  let blogImage1 = blog.img1;
  let blogImage2 = blog.img2;

  (!blog.img1.includes("http")) ? blogImage1 = `https://www.brmcontractors.net/${blog.img1}` : blogImage1 = blog.img1;
  (!blog.img2.includes("http")) ? blogImage2 = `https://www.brmcontractors.net/${blog.img2}` : blogImage2 = blog.img2;

  let html = `
   
   
  <section class="mx-auto my-5 col-sm-12 col-md-6 col-lg-4" style="max-width: 23rem;">

    <div class="card">
      <div class="card-body d-flex flex-row">
        <img src="${blog.avatar}" class="rounded-circle me-3" height="50px"
          width="50px" alt="${blog.author}" />
        <div>
          <h5 class="card-title font-weight-bold mb-2">${blog.title}</h5>
          <p class="card-text"><i class="far fa-clock pe-2"></i>${blog.date}</p>
        </div>
      </div>
      <div class="bg-image hover-overlay ripple rounded-0" data-mdb-ripple-color="light">
        <img class="img-fluid" src="${blogImage1}"
          alt="Card image cap" />
        <a href="#!">
          <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
        </a>
      </div>
      <div class="card-body">
        <p class="card-text">
          ${blog.body}
        </p>
        <div class="d-flex justify-content-between">
          <div>
            <p class="card-text bg-dark text-light rounded py-1 px-3 fs-4">${blog.category}</p>
          </div>
          <div>
            <i class="fas fa-share-alt text-muted p-md-1 my-1 me-2" data-mdb-toggle="tooltip"
              data-mdb-placement="top" title="Share this post"></i>
            <i class="fas fa-heart text-muted p-md-1 my-1 me-0" data-mdb-toggle="tooltip" data-mdb-placement="top"
              title="I like it"></i>
          </div>
        </div>
      </div>
    </div>
    
  </section>


   `;

   return html;

};

function bigCardView (blog) {
  let blogImage1 = blog.img1;
  let blogImage2 = blog.img2;

  (!blog.img1.includes("http")) ? blogImage1 = `https://www.brmcontractors.net/${blog.img1}` : blogImage1 = blog.img1;
  (!blog.img2.includes("http")) ? blogImage2 = `https://www.brmcontractors.net/${blog.img2}` : blogImage2 = blog.img2;

  let html = `
   
  <div class="card shadow-lg bg-light border border-dark col-sm-12 col-lg-7" style="min-width:auto; width:42rem; margin: 2rem auto;">
    <div class="flex-row-reverse row g-0">
      <div class="col-md-4 mx-auto ps-2">
        <small class="badge bg-dark text-light fs-6">Blog ID ${blog.id}</small> <br>
        <img src="${blogImage1}" class="img-fluid rounded-start mt-3" alt="${blog.title}" style="width:190px;height:200px;">
          <a href="${blogImage1}" class="btn btn-sm btn-secondary m-1">Img 1</a> <br>
        <img src="${blogImage2}" class="img-fluid rounded-start mt-3" alt="${blog.title}" style="width:190px;height:200px;">
        <a href="${blogImage2}" class="btn btn-sm btn-secondary m-1">Img 2</a>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h3 class="card-title">${blog.title}</h3>
            <p class="fs-3 badge bg-dark text-light p-2">${blog.category}</p>
          <p class="card-text">What an awesome transformation on this house. We installed new vinyl siding, soffit and fascia, window wraps and more. This is a 2-story company house so its tall. We handle steep and tall - so give us a call.     </p>
          <p class="card-text">
          <img src="${blog.avatar}" class="img-fluid mx-auto d-block shadow-xl" alt="Profile Picture" style="width:80px;height:80px;border-radius:50%;">
            </p><p class="text-center">${blog.author}<br>
              <small>${blog.date}</small> <br>
              <small>${blog.purpose} / </small>
              <small>${blog.project}</small>               
            </p> 
        </div>
      </div>
    </div>
  </div>
  
  `;


   return html;

}

function overlayView (blog) {
  let blogImage1 = blog.img1;
  let blogImage2 = blog.img2;

  (!blog.img1.includes("http")) ? blogImage1 = `https://www.brmcontractors.net/${blog.img1}` : blogImage1 = blog.img1;
  (!blog.img2.includes("http")) ? blogImage2 = `https://www.brmcontractors.net/${blog.img2}` : blogImage2 = blog.img2;

  let html = `
   
  <div class="col-lg-6 mx-auto d-block mt-2" style="min-width:65%;">
  <div class="p-1 card-overlay card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-l" 
  style="background: linear-gradient(rgba(19, 16, 34, 0.48) 0%, rgba(19, 16, 34, 0.68) 100%) 0% 0% / cover, 
  url(${blog.img1}) center center no-repeat;background-size: cover;">
    <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
      <div class="lc-block pt-5 mt-5 mb-4">
      <h1 class="display-3 text-uppercase  mt-2" style="color:white;font-weight:600;">${blog.category}</h1>
        <h2 class="fw-bold">${blog.title}</h2>
        <p>${blog.body}</p>
      
      <ul class="d-flex  list-unstyled mt-auto ms-auto overlay-link">
        <img src="${blog.avatar}" class="float-start ms-5 rounded-circle" style="width:70px;height:70px;">
        <li class="btn btn-link btn-sm text-white">${blog.author}</li>
      </ul>
      </div>
    </div>
  </div>
</div>

  
  `;


   return html;

}

// render menu select options from db 
document.addEventListener("DOMContentLoaded", loadAllSelectOptions);
