let regExp1 = /^#\D{6}/
console.log(regExp1.test("#ABCDEF"))

let regExp2 = /^((rgb|rgba)(\(\d{1,3}\,\d{1,3}\,\d{1,3})(\,\d{1}.\d{1}|\d{1})?(\)))$/
console.log(regExp2.test('rgb(0,20,200)'))
console.log(regExp2.test('rgba(0,20,200,0.8)'))


let regExp3 =/^(([А-Я]\D)(\d{6}))$/
console.log(regExp3.test("КС111020"))

let regExp4 = /^(([a-zA-Z0-9\_\-\.\,])+)\.(jpg|gif|png)$/
console.log(regExp4.test("photo_NEW-1254.gif"))