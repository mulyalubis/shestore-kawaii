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




const filterInti = document.querySelectorAll(".filter-inti ul li")
const filterBagian =  document.querySelector('.filter-jenis')
const cardProduct = document.querySelectorAll('.jenis-product .card-product')

const tinggiProduct = document.querySelector('.product')

filterInti.forEach( (filt) => {
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




const filterEmpatBagian = document.querySelectorAll('.filter-jenis ul li')
const containerProduct = document.querySelector('.jenis-product')

filterEmpatBagian.forEach((jenis) => {
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



const allPreview = document.querySelector('.container-preview')
const cardPreview = document.querySelectorAll('.container-preview .card-preview')

cardProduct.forEach((card) => {
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


const closes = document.querySelectorAll('.close i')

closes.forEach((cb) => {
    cb.addEventListener('click', () => {
        allPreview.style.display = 'none'
        cardPreview.forEach((card) => {
            card.style.display = 'none'
        })
    })
})



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



