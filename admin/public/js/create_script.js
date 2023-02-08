function qs(element) {
    return document.querySelector(element)
};

window.addEventListener('load', ()=> {
    let form = qs('form')
    let btn_submit = qs('#btn_submit')
    let btn_image = qs('#btn_image')
    let btn_feature = qs('#btn_feature')
    let img_div = qs('.img-input-container')
    let feature_div = qs('.feature-input-container')

    let img_count_click = 4
    btn_image.addEventListener('click', (e)=>{
        e.preventDefault()
        img_count_click++
        img_div.innerHTML += `<input type="text" name="image" placeholder="Image ${img_count_click}">`
        console.log('hola')
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
                    <input type="text" name="feature" readonly value="${feature}">
                    <input type="text" name="feature_value">
                </div>`
        }

        
    })
})