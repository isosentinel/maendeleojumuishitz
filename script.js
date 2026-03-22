const postsContainer = document.getElementById("posts");
const modal = document.getElementById("postModal");
const modalContent = document.getElementById("modalPostContent");

// Static posts array
const posts=[
{id:"1", title:"Msingi wa Uchumi wa Taifa", author:"Deogratius", date:"2026-03-22", category:"kiuchumi", content:"Hapa tunajadili jinsi taifa linavyoweza kuimarisha uchumi kupitia biashara, uwekezaji na sera za kibiashara...", image:"https://picsum.photos/600/350?1", font:"'Roboto', sans-serif"},
{id:"2", title:"Sera za Kisiasa Zinazoathiri Jamii", author:"Deogratius", date:"2026-03-21", category:"kisiasa", content:"Sera za kisiasa ni muhimu katika kuendeleza amani na ushirikiano katika jamii...", image:"https://picsum.photos/600/360?2", font:"'Roboto', sans-serif"},
{id:"3", title:"Uhusiano wa Diplomasia ya Kimataifa", author:"Deogratius", date:"2026-03-20", category:"diplomasia", content:"Diplomasia ina jukumu muhimu katika kudumisha amani na kuimarisha ushirikiano kati ya mataifa...", image:"https://picsum.photos/600/340?3", font:"'Roboto', sans-serif"},
{id:"4", title:"Mchango wa Jamii", author:"Deogratius", date:"2026-03-19", category:"kijamii", content:"Jamii inapaswa kushirikiana na serikali katika maendeleo ya kila sekta ili kuleta matokeo chanya...", image:"https://picsum.photos/600/330?4", font:"'Roboto', sans-serif"},
{id:"5", title:"Sera Muhimu za Taifa", author:"Deogratius", date:"2026-03-18", category:"sera", content:"Sera za taifa zinapaswa kuendana na maendeleo ya watu, kuendeleza uchumi na kuhakikisha usawa...", image:"https://picsum.photos/600/370?5", font:"'Roboto', sans-serif"},
];

// Display posts
function displayPosts(data){
    postsContainer.innerHTML="";
    if(data.length===0){postsContainer.innerHTML=`<p style="text-align:center; font-size:18px;">Hakuna posts kwenye category hii bado.</p>`;return;}
    data.forEach(post=>{
        postsContainer.innerHTML+=`
        <div class="post" onclick="openModal('${post.id}')">
            <img src="${post.image}">
            <div class="content" style="font-family:${post.font}">
                <span class="category-badge">${post.category}</span>
                <h3>${post.title}</h3>
                <p>${post.author} | ${post.date}</p>
                <button onclick="event.stopPropagation(); openModal('${post.id}')">Soma zaidi</button>
            </div>
        </div>`;
    });
}

// Show all posts
function showHome(){displayPosts(posts);}
function filterPosts(cat){displayPosts(posts.filter(p=>p.category===cat));}

// Modal open
window.openModal=function(id){
    const post = posts.find(p=>p.id===id);
    if(!post) return;
    modalContent.innerHTML=`
    <img src="${post.image}">
    <h1>${post.title}</h1>
    <p><strong>${post.author}</strong> | ${post.date}</p>
    <p style="margin-top:15px; line-height:1.7; font-family:${post.font}">${post.content}</p>`;
    modal.classList.add("show");
}
window.closeModal=function(){modal.classList.remove("show");}

// Initial load
showHome();