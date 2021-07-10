const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '1000'

    const updateCounter = () => {
        const target = counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target/12000000

        if(c > target) {
            counter.innerText = `${Math.floor(c - increment)}`
            setTimeout(updateCounter, 1000)
        } else {
            counter.innerText = Target
        }
    }
    updateCounter()
})