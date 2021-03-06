var launch_all=document.getElementById('launch-all');

launch_all.addEventListener('click',function(){
    UpdateLinks();
});
var urls=[]
function UpdateLinks(){
    for(var i in urls){
        window.open(urls[i]);
    }
}

var name_field=document.getElementById('name')
var website=document.getElementById('website')
var github=document.getElementById('github')
var linkedin=document.getElementById('linkedin')
var twitter=document.getElementById('twitter')
var facebook=document.getElementById('facebook')
var edit_btn=document.getElementById('edit')

var keys=["name","website","github","linkedin","twitter","facebook"];

chrome.storage.sync.get(keys,function(links){
    if(!chrome.runtime.error){
        if(links.name){
            name_field.innerHTML=links.name;
        }
        if(links.website){
            website.href=links.website;
            urls.push(links.website)
        }
        else{
            website.addEventListener('click',function(event){
                event.preventDefault();
            })
        }
        if(links.github){
            github.href=links.github;
            urls.push(links.github)
        }
        else{
            github.addEventListener('click',function(event){
                event.preventDefault();
            })
        }
        if(links.linkedin){
            linkedin.href=links.linkedin;
            urls.push(links.linkedin)
        }
        else{
            linkedin.addEventListener('click',function(event){
                event.preventDefault();
            })
        }
        if(links.twitter){
            twitter.href=links.twitter;
            urls.push(links.twitter)
        }
        else{
            twitter.addEventListener('click',function(event){
                event.preventDefault();
            })
        }
        if(links.facebook){
            facebook.href=links.facebook;
            urls.push(links.facebook)
        }
        else{
            facebook.addEventListener('click',function(event){
                event.preventDefault();
            })
        }
    }
})