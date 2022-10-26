function qs (e){
    return document.querySelector(e)
}

function qsa (e){
    return document.querySelectorAll(e)
}

window.addEventListener('load', ()=>{
    let form = qs('form')
    let btn_image = qs('#btn_image')
    let img_div = qs('.img-input-container')
    let img_inputs = qsa('.img-input')
    let img_src = qsa('.img-src')
    let btn_feature = qs('#btn_feature')
    let feature_div = qs('.feature-input-container')

    for(const value of img_inputs.values()){
        value.addEventListener('input', async (e)=>{
            let new_image = new Image()
            let image = e.path[1].children[0]
            new_image.class = "img-src"
            new_image.src = value.value
            image.parentNode.insertBefore(new_image, image)
            image.parentNode.removeChild(image)
        })
    }

    btn_image.addEventListener('click', (e)=>{
        e.preventDefault()
        let img_count_click = img_div.children.length
        img_count_click++
        img_div.innerHTML+= `
            <div>
                <img src="https://i.postimg.cc/cL6QJWw6/download.png" alt="">
                <input class='img_input' type="text" name="new_image" placeholder="Image ${img_count_click}" value="">
            </div>`
        console.log(btn_image)
        console.log(img_div.children.length)
    })

    btn_feature.addEventListener('click', async (e)=> {
        e.preventDefault()
        const { value: feature } = await Swal.fire({
            title: 'New Feature Name',
            input: 'text',
            inputLabel: 'Feature Name',
            inputPlaceholder: 'Enter Feature Name'
        })
        if (feature) {
            Swal.fire(`Entered feature: ${feature}`)
            feature_div.innerHTML+= `                
                <div>
                    <input type="text" name="new_feature" readonly value="${feature}">
                    <input type="text" name="new_feature_value" >
                </div>`
        }

        
    })
})