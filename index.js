const macbook = [
    {id:1,title: 'Macbook Pro', price: 1554, img: 'https://reviewed-com-res.cloudinary.com/image/fetch/s--saK2nRv---/b_white,c_fill,cs_srgb,f_auto,fl_progressive.strip_profile,g_xy_center,q_auto,w_1200,x_833,y_803/https://reviewed-production.s3.amazonaws.com/1588384493638/macbook-hero-ii.jpg'},
    {id:2,title: 'Macbook air', price: 1454, img: 'https://www.lifewire.com/thmb/zITKquO-LUzbYQQZ-8HehYrEwC8=/1500x1500/filters:fill(auto,1)/Macbook-Air_HeroSquare-b01f607ff65345dcbe5b74a357f1a76b.jpg'},
    {id:3,title: 'Macbook Pro', price: 1754, img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16touch-silver-select-201911?wid=892&hei=820&&qlt=80&.v=1572825196932'},
]

const card = macbook => `
    <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="${macbook.img}" class="card-img-top" alt="${macbook.title}">
          <div class="card-body">
            <h5 class="card-title">${macbook.title}</h5>
            <a href="#" class="btn btn-primary" data-btn = 'price' data-id = "${macbook.id}">Show price</a>
            <a href="#" class="btn btn-primary" data-btn = 'remove' data-id = "${macbook.id}">Remove</a>
          </div>
        </div>
    </div>
`
function render() {
    const html = macbook.map(card).join('')
    document.querySelector('#card').innerHTML = html
}
render()


const newModal =  $.modal({
    title: 'New Modal',
    width: '600px',
    closable: true,
    footerButtons: [
        {text: 'Close',type: 'primary', handler() {
                newModal.close()
            }
        }
    ]
})


document.addEventListener('click',event =>{
    event.preventDefault()
    const btnType = event.target.dataset.btn
    const elementId = +event.target.dataset.id
    const macBook = macbook.find( el => el.id === elementId)
    if (btnType === 'price'){
        newModal.setContent(`
            <p>${macBook.title} price: <strong>${macBook.price}</strong> </p>
        `)
        newModal.open()
    }else if (btnType === 'remove'){
        $.confirm({
            title: 'Are you sure?',
            content: `<p>You are remove <strong>${macBook.title}</strong> </p>`
        }).then( ()=>{
            console.log('remove')
        }).catch( ()=>{
            console.log('cancel')
        })
    }
})
