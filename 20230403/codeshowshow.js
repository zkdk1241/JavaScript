fetch('http://test.api.weniv.co.kr/mall')
  .then(data => data.json())
  .then(data => console.log(data))

fetch('http://test.api.weniv.co.kr/mall')
  .then(data => data.json())
  .then(data =>
    data.forEach(item =>
      console.log(item))
  )


fetch('http://test.api.weniv.co.kr/mall')
  .then(data => data.json())
  .then(data => {
    data.forEach(item => {
      console.log(item.thumbnailImg)
      console.log(item.productName)
      console.log(item.price)
    })
  })

fetch('http://test.api.weniv.co.kr/mall')
  .then(data => data.json())
  .then(data => {
    data.forEach(item => {
      console.log('http://test.api.weniv.co.kr/' + item.thumbnailImg)
      console.log(item.productName)
      console.log(item.price)
    })
  })

fetch('http://test.api.weniv.co.kr/mall')
  .then(data => data.json())
  .then(data => {
    data.forEach(item => {
      const productCard = document.createElement('article')
      const productName = document.createElement('h2')
      const productPrice = document.createElement('p')

      productCard.textContent = item.productCard
      productName.textContent = item.productName
    })
  })
