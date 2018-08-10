let loadingHtml = (parent,response) =>{
    let htmlStr ="";
    let htmlNum = 0;
    let result = response.value;
    result.forEach((data) => {
        htmlStr +=`     
                    <li contenteditable>${data}</li>
        `
        
        htmlNum = htmlNum + Number(data)
        
    });
  
    htmlStr += `<li class="gather" style="background:rgb(61, 61, 61)">${htmlNum}</li>`
    parent.html(htmlStr);
}