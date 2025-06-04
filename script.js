const atas = document.querySelector('.desain-bagus .atas')
const tengah = document.querySelector('.desain-bagus .tengah')
const bawah = document.querySelector('.desain-bagus .bawah')



document.addEventListener('DOMContentLoaded', function () {
    function infinite() {
        setTimeout(() => {
            bawah.classList.remove('shine-active')
            atas.classList.add('shine-active')
        }, 1500)
        setTimeout(() => {
            atas.classList.remove('shine-active')
            tengah.classList.add('shine-active')
        }, 4000)
        setTimeout(() => {
            tengah.classList.remove('shine-active')
            bawah.classList.add('shine-active')
        }, 6500)
    }

    infinite()

    setInterval(infinite, 9000)
})



// function interaktif product
function filterUtama(cardProduct, filterInti, filterBagian, tinggiProduct) {
    return filterInti.forEach( (filt) => {
        filt.addEventListener('click', () => {
            filterInti.forEach( (i) => {
                i.classList.remove('active')
            })
            filt.classList.add('active')
            tinggiProduct.style.height = '100%'
            filterBagian.style.display = 'block'
            filterBagian.style.animation = 'AnimateFilter 1s ease-out 1'
            const displayFilter = filt.getAttribute('data-pakaian')
            
            const filterBagianActive = document.querySelector('.filter-jenis ul li.active')
            
            let count = 0

            cardProduct.forEach((card) => {
                const pakaian = card.getAttribute('data-pakaian')
                const kategori = card.getAttribute('data-category')

                let isVisible = false

                if (filterBagianActive) {
                    const displayFilterBagian = filterBagianActive.getAttribute('data-filter')
                    if (pakaian === displayFilter && kategori === displayFilterBagian) {
                        isVisible = true
                        count++
                    }
                } else {
                    if (pakaian === displayFilter && count < 4) {
                        isVisible = true
                        count++
                    }
                }

                if (isVisible) {
                    card.classList.add('active')
                    card.style.display = 'block'
                    card.style.animation = 'AnimateFilter .8s linear 1'
                } else {
                    card.classList.remove('active')
                    card.style.display = 'none'
                }
            })
        })
    })
}


function filterEmpat(cardProduct, containerProduct, filterEmpatBagian) {
    return filterEmpatBagian.forEach((jenis) => {
        jenis.addEventListener('click', () => {
            filterEmpatBagian.forEach((f) => {
                f.classList.remove('active')
                f.style.opacity = '.2'
            })
            jenis.classList.add('active')
            jenis.style.opacity = '1'
            containerProduct.setAttribute('data-letak', '')

            const displayProduct = jenis.getAttribute('data-filter')

            cardProduct.forEach((card) => {
                const filterPakaian = document.querySelector(".filter-inti .active").getAttribute("data-pakaian")
                if(card.getAttribute('data-pakaian') == filterPakaian && card.getAttribute('data-category') == displayProduct) {
                    card.style.display = 'block'
                    card.style.animation = 'AnimateFilter .8s linear 1'
                } else {
                    card.style.display = 'none'
                }
            })
        })
})

}


// data product
fetch('data-Json/product.json')
    .then(response => response.json())
    .then(result => {
        let product = ''
        result.forEach((pdt, index) => {
            const loopingName = `${index + 1}`
            product += elemenProduct(pdt, loopingName)

        })

        
        const containerProduct = document.querySelector('.jenis-product')
        containerProduct.innerHTML = product


        const cardProduct = document.querySelectorAll('.jenis-product .card-product');
        const filterInti = document.querySelectorAll(".filter-inti ul li")
        const filterBagian =  document.querySelector('.filter-jenis')
        const tinggiProduct = document.querySelector('.product')
        const filterEmpatBagian = document.querySelectorAll('.filter-jenis ul li')

        filterUtama(cardProduct, filterInti, filterBagian, tinggiProduct)

        filterEmpat(cardProduct, containerProduct, filterEmpatBagian)
    })

function elemenProduct(pdt, loopingName) {
    return `<section class="card-product" data-name="p-${loopingName}" data-pakaian="${pdt.dataPakaian}" data-category="${pdt.dataCategory}">
                            <h2 class="nama-pakaian">${pdt.nama}</h2>
                            <img src="${pdt.img}" alt="">
                            <p class="harga-pakaian">${pdt.harga}</p>
                        </section>`
}

// data preview
fetch('data-Json/preview.json')
    .then(response => response.json())
    .then(result => {
        let preview = ''
        result.forEach((prv, index) => {
            const loopingPreview = index + 1
            preview += productPreview(prv, loopingPreview)
        })

        const allPreview = document.querySelector('.container-preview')
        allPreview.innerHTML = preview

        const cardPreview = document.querySelectorAll('.container-preview .card-preview')
        const cardProduct = document.querySelectorAll('.jenis-product .card-product')

        cardsPreview(allPreview, cardPreview, cardProduct)

        // button close 
        const closes = document.querySelectorAll('.close i')
        
        btnClose(allPreview, cardPreview, closes)

    })

function productPreview(prv, loopingPreview) {
    return `<section class="card-preview" data-preview="p-${loopingPreview}">
                <h3>${prv.name}</h3>
                <img src="${prv.img}" alt="">
                <section class="detail-bahan">
                    <p>${prv.description}</p>
                </section>
                <section class="close">
                    <i class="ph ph-x-circle"></i>
                </section>
            </section>`
}



function cardsPreview(allPreview, cardPreview, cardProduct) {
    return cardProduct.forEach((card) => {
                card.addEventListener('click', () => {
                    allPreview.style.display = 'flex'
                    cardPreview.forEach((preview) => {
                        let nameProduct = preview.getAttribute('data-preview')
                        if(card.getAttribute('data-name') == nameProduct) {
                            preview.style.display = 'grid'
                        }
                    })
                })
            })
}

function btnClose(allPreview, cardPreview, closes) {
    closes.forEach((cb) => {
    cb.addEventListener('click', () => {
        allPreview.style.display = 'none'
        cardPreview.forEach((card) => {
            card.style.display = 'none'
        })
    })
})
}






// preview lengkap paket usaha

const jnsPaket = document.querySelector('.jenis-paket')
const paket = document.querySelectorAll('.jenis-paket .paket')

const containerPrevPaket = document.querySelector('.preview-lengkap-usaha')
const prevPaket = document.querySelectorAll('.preview-product')
const arrowClose = document.querySelectorAll('.arrow-down-close')


paket.forEach((pkt) => {
    pkt.addEventListener('click', () => {
        prevPaket.forEach((prodprev) => {
            if(pkt.getAttribute('data-paket') == prodprev.getAttribute('data-prev-paket')) {
                containerPrevPaket.style.display = 'block'
                prodprev.style.display = 'grid'
                setTimeout(() => {
                    containerPrevPaket.style.transform = 'translateY(0)'
                }, 300)
            }
        })
    })
})


arrowClose.forEach(function(close) {
    close.addEventListener('click', () => {
        prevPaket.forEach((paket) => {
            containerPrevPaket.style.transform = 'translateY(100%)'
            setTimeout(() => {
                containerPrevPaket.style.display = 'none'
                paket.style.display = 'none'
            }, 2700)
        })
    })
})


// transaksi via wa

const pembayaran = () => {
    const containTransaksi = document.querySelector('.transaksi')    
    window.addEventListener('scroll', () => {
        let showTf = window.scrollY
    
        if(showTf > 650) {
            containTransaksi.classList.add('active')
        } else {
            containTransaksi.classList.remove('active')
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    pembayaran()
})


// nav mobile (click)

const home = document.querySelector('.landing-page')
const linkHome = document.querySelector('header figure a')
const linkInti = document.querySelectorAll('header nav ul li a')
const inti = document.querySelectorAll('.clicker')

linkInti.forEach((link) => {
    link.addEventListener('click', () => {
        linkInti.forEach((e) => {
            e.classList.remove('active')
            funcHome()
        })
        inti.forEach((lk) => {
            const tujuan = link.getAttribute('data-link')
            const tujuanLink = lk.getAttribute('data-tujuan')
            if(tujuan === tujuanLink) {
                link.classList.add('active')
            }
        })
    })
})


const funcHome = () => {
    linkHome.addEventListener('click', (e) => {
        linkInti.forEach((lk) => {
            if (linkHome.getAttribute('data-link') == home.getAttribute('data-tujuan')) {
                lk.classList.remove('active')
            }
        })
    })
}