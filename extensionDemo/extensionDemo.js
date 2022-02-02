let $btn = document.getElementById('btn')
let $count = document.getElementById('count')
let timer = setInterval(() => {
    let ifBtnDisabled = $btn.getAttribute('disabled')
    if (ifBtnDisabled !== 'disabled'){
        document.getElementById('link').click()
        clearInterval(timer)
    } else {
        console.log('button disabled...')

    }

}, 500)