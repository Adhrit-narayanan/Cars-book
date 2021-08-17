var images=["https://tse2.mm.bing.net/th?id=OIP.0yM1yn-jPsnrKzngNE3wpwHaEK&pid=Api&P=0&w=331&h=187",
            "https://tse3.mm.bing.net/th?id=OIP.tJvWnSViQ1rbPZXI-Q-fRQHaE8&pid=Api&P=0&w=279&h=187",
            "https://www.carscoops.com/wp-content/uploads/2020/08/Range-Rover-Evoque-1b.jpg",
            "https://tse4.mm.bing.net/th?id=OIP.KFNCoNTe1EVKAg1XkH43qgHaEK&pid=Api&P=0&w=332&h=187",
            "https://tse2.mm.bing.net/th?id=OIP.hsVEagAwDe80cU3PU_zqJwHaE7&pid=Api&P=0&w=274&h=184",
            "http://www.carblogindia.com/wp-content/uploads/2017/06/mahindra-xuv-700-images-side-profile.jpg",
            "https://tse2.mm.bing.net/th?id=OIP.lbkGzh75pxG5LV-8GNpO8gHaEI&pid=Api&P=0&w=271&h=153",
            "https://tse3.mm.bing.net/th?id=OIP.hAH0bZihwvt8HkO2ygAeZAHaE8&pid=Api&P=0&w=261&h=175",
            "https://tse2.mm.bing.net/th?id=OIP.XtSNafhLkImSuHmEVdmTawHaFj&pid=Api&P=0&w=254&h=191"
];
var i = 0;
function nextpicture() {
  if(i == 9)
    {
      i=0;
}
  document.getElementById("code").src = images[i];
  i++;}