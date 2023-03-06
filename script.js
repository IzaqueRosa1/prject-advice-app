let url = "	https://api.adviceslip.com/advice"

fetch(url).then(response => 
    {
        return response.json();
    }).then(adviceData => { 
        const adviceObject = adviceData.slip;
        const advice = adviceObject.advice; /* <- Here the return is the advice */
        const id = `ADVICE #${adviceObject.id}`; /* <- Here the return is the identification of advice */
        
        let content = document.querySelector("#content")
        let title = document.querySelector('#title')
        

        const div = document.createElement('div')
        div.classList.add('advice')
        div.innerHTML = advice

        const p = document.createElement('p')
        p.classList.add('id')
        p.innerHTML = id

        const div2 = document.createElement('div')
        div2.appendChild(p)

        title.appendChild(div2)
        content.appendChild(div)
        

        console.log(id)
        console.log(advice)
    })

    function atualizarPagina() {
        location.reload();
      }