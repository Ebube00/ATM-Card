let bName = document.getElementById('bName')
let cName = document.getElementById('name')
let atmN = document.getElementById('atmN')
let cvv = document.getElementById('cvv')
let eDate = document.getElementById('eDate')
let btn = document.getElementById('btn')
let bName1 = document.getElementById('rBName')
let atmN1 = document.getElementById('rAtmN')
let cvv1 = document.getElementById('rCvv')
let date = document.getElementById('rDate')
let name1 = document.getElementById('rName')

btn.addEventListener('click', () => {
    let bNameVal = bName.value
    let nameVal = cName.value
    let atmNVal = atmN.value
    let cvvVal = cvv.value
    let eDateVal = eDate.value
    let a = atmNVal.substring(0,4)
    let b = atmNVal.substring(4,8)
    let c = atmNVal.substring(8,12)
    let d = atmNVal.substring(12,16)
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    bName1.textContent = bNameVal
    bNameVal = ''
    atmN1.textContent = `${a} ${b} ${c} ${d}`
    atmNVal = ''
    name1.textContent = nameVal
    nameVal = 'Card holder name'
    cvv1.textContent = cvvVal
    cvvVal = '***'
    date.textContent = eDateVal
    eDateVal = '00/00'
})