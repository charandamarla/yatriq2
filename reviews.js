(()=>{
'use strict';
const sections={
 home:{title:'Stories from the journey.',summary:'A first look at the YATRIQ planning experience.',reviews:[['Aarav M.',5,'The homepage gave me a clear way to begin planning and compare the trip options.'],['Meera S.',4,'The layout is calm and the budget information is easy to understand.'],['Kiran R.',5,'I liked having the trip types separated and easy to reach.']]},
 national:{title:'India journeys, traveller notes.',summary:'Domestic trip feedback from the National planner.',reviews:[['Sravya P.',5,'The day-wise plan made our India trip easier to organize.'],['Rohit K.',4,'The city route and budget estimate were useful for comparing options.'],['Nandini V.',3,'A helpful starting point, though I would verify all prices before travelling.']]},
 international:{title:'Beyond borders, traveller notes.',summary:'International trip feedback from the Country planner.',reviews:[['Ishaan D.',5,'The country planner helped me think about seasons, transport and attractions.'],['Ananya R.',4,'I liked comparing stay styles and seeing the cost breakdown.'],['Dev S.',4,'The plan is easy to follow, with useful reminders to verify visa rules.']]},
 multi:{title:'Many stops, one connected journey.',summary:'Multi-city and multi-country trip feedback.',reviews:[['Tanya B.',5,'The multi-stop route is a useful way to organize several destinations.'],['Vikram N.',4,'The city-by-city schedule helped me understand the route.'],['Priya J.',3,'A good planning concept; I would add more time between long transfers.']]}
};
const names=['Arjun','Diya','Rahul','Anika','Karthik','Maya','Aditya','Ira','Rohan','Tara','Vivek','Nisha','Kabir','Asha','Varun','Neha','Siddharth','Pooja','Ayaan','Riya','Manav','Ishita','Devika','Nikhil','Sana','Reyansh','Kavya'];
const surnames=['R.','S.','K.','M.','P.','V.','D.','N.','A.','J.'];
const statements={
 home:['The homepage makes it simple to choose a trip type and start planning.','The design feels clean and the trip options are easy to find.','I liked the simple flow and the budget-first approach.','The site gives a useful overview before starting a journey.'],
 national:['The India itinerary is easy to scan and the day-wise schedule is helpful.','The budget breakdown helped me compare transport and stay estimates.','I liked seeing attractions grouped into a practical daily plan.','A useful domestic trip planner, especially as a starting point.'],
 international:['The country planner makes it easier to compare destinations and trip costs.','I liked the attraction-led schedule and the reminder to verify visa details.','The international plan is clear and the budget warning is useful.','The stay options helped me think about balancing comfort and cost.'],
 multi:['The multi-city route gives a clear picture of how the stops connect.','I liked seeing the destinations arranged in day-wise order.','The route planner makes a longer trip feel easier to organize.','The city-by-city schedule is useful for comparing travel pace.']
};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const keyFor=v=>['national','international','multi'].includes(v)?v:'home';
const store=k=>{try{return JSON.parse(localStorage.getItem('yatriq-reviews-'+k)||'[]')}catch(e){return []}};
const avg=list=>list.length?list.reduce((n,r)=>n+Number(r.rating),0)/list.length:0;
const extras=k=>Array.from({length:125},(_,i)=>({name:names[i%names.length]+' '+surnames[(i*3)%surnames.length],rating:(i%5)+1,text:statements[k][i%4],sample:true,generated:true}));
let current='home',allReviews=[],activeRating=0,visible=3,filtersOpened=false;
function allSiteReviews(){return Object.keys(sections).flatMap(k=>sections[k].reviews.map(r=>({rating:r[1]})).concat(extras(k),store(k)));}
function render(view){const sec=document.getElementById('yatriqReviews');if(!sec)return;current=keyFor(view);activeRating=0;visible=3;filtersOpened=false;sec.dataset.reviewPage=current;
 const title=document.getElementById('reviewsTitle'),summary=document.getElementById('reviewsSummaryText');if(title)title.textContent=sections[current].title;if(summary)summary.textContent=sections[current].summary;
 const intro=sec.querySelector('.reviews-intro');if(intro)intro.textContent='Browse illustrative demo reviews or submit your own feedback. Sample reviews are examples, not verified customer testimonials.';
 allReviews=sections[current].reviews.map(r=>({name:r[0],rating:Number(r[1]),text:r[2],sample:true})).concat(extras(current),store(current).map(r=>({...r,sample:false})));
 const wrap=document.querySelector('.review-filter-wrap');if(wrap)wrap.classList.remove('is-open');const status=document.getElementById('reviewFormStatus');if(status)status.textContent='';renderList();
}
function renderList(){const grid=document.getElementById('reviewsGrid');if(!grid)return;const filtered=activeRating?allReviews.filter(r=>Number(r.rating)===activeRating):allReviews;const items=filtered.slice(0,visible);
 grid.innerHTML=items.map(r=>`<article class="review-card"><div class="review-card-head"><span class="review-person">${esc(r.name)}${r.sample?'':' <span class="review-user-label">Your review</span>'}</span><span class="review-tag">${r.sample?'Demo example':'Browser submission'}</span></div><div class="review-rating" aria-label="${r.rating} out of 5 stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)} <small>${r.rating}/5</small></div><p>${esc(r.text)}</p><div class="review-card-foot">${r.sample?'Illustrative demo feedback':'Saved in this browser only'}</div></article>`).join('')||'<p class="review-empty">No reviews match this rating yet.</p>';
 const overall=avg(allSiteReviews()),pageAvg=avg(allReviews),score=document.querySelector('.reviews-score'),stars=document.querySelector('.reviews-stars');if(score)score.textContent=overall.toFixed(1);if(stars){stars.textContent='★'.repeat(Math.round(overall))+'☆'.repeat(5-Math.round(overall));stars.setAttribute('aria-label',overall.toFixed(1)+' out of 5 stars');}
 const count=document.getElementById('reviewsCount');if(count)count.innerHTML=`<span>YATRIQ overall <b>${overall.toFixed(1)}/5</b></span><span>${current==='home'?'Homepage':current==='national'?'National trips':current==='international'?'International trips':'Multi-national trips'} <b>${pageAvg.toFixed(1)}/5</b> · ${allReviews.length} reviews</span>`;
 document.querySelectorAll('[data-review-filter]').forEach(b=>{const selected=Number(b.dataset.reviewFilter)===activeRating;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});
 const more=document.getElementById('reviewsMore');if(more){more.hidden=visible>=filtered.length;more.textContent=more.hidden?'All reviews loaded':`More reviews (${filtered.length-visible} available)`;}
}
window.renderYatriqReviews=render;
document.addEventListener('click',e=>{
 const more=e.target.closest('#reviewsMore');if(more){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();if(!filtersOpened){filtersOpened=true;document.querySelector('.review-filter-wrap')?.classList.add('is-open');visible=Math.min(allReviews.length,30);}else{const filtered=activeRating?allReviews.filter(r=>Number(r.rating)===activeRating):allReviews;visible=Math.min(filtered.length,visible+27);}renderList();return;}
 const filter=e.target.closest('[data-review-filter]');if(filter){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();if(!filtersOpened){filtersOpened=true;document.querySelector('.review-filter-wrap')?.classList.add('is-open');}activeRating=Number(filter.dataset.reviewFilter);visible=Math.min(27,allReviews.filter(r=>Number(r.rating)===activeRating).length);renderList();return;}
},true);
const form=document.getElementById('reviewForm');form?.addEventListener('submit',e=>{e.preventDefault();e.stopPropagation();const fd=new FormData(form),name=String(fd.get('reviewer')).trim(),rating=Number(fd.get('rating')),text=String(fd.get('review')).trim();if(!name||text.length<20||rating<1||rating>5)return;const list=store(current);list.unshift({name,rating,text});try{localStorage.setItem('yatriq-reviews-'+current,JSON.stringify(list));form.reset();render(current);document.getElementById('reviewFormStatus').textContent='Review saved in this browser only; it has not been sent to a server.';}catch(e){document.getElementById('reviewFormStatus').textContent='Could not save in this browser. Check browser storage settings.';}});
render(document.body.dataset.view||new URLSearchParams(location.search).get('view')||'home');
})();
