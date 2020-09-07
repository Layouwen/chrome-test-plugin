$(document).ready(() => {
  const JCatList = $(".service-bd")
  for (let i = 0; i < JCatList.length; i++) {
    // console.log(JCatList)
    console.log(JCatList.children())
    JCatList.children()[i].hover()
  }
  console.log(1)
})

// taobao

const taobaoData = () => {
  const serviceFloat = $(".service-float")
  console.log(serviceFloat[0])
}