//solution 1
var title = 'btn title';
const btn_html = `<div>
    <button type="button" title= ${title}>"button"</button>;
  </div>`;


//solution 2
var num_arr = Array.from(Array(30).keys());
var list_str = [];
for(num in num_arr){
	list_str.push(create_list(num));
}
function  create_list(num){
return `<li id  =${num}  >${num}</li>`;
}
console.log(list_str);

//solution 3

for(num in list_str){
var elm = document.getElementById(num).innerHTML;
 if(elm%2 == 0 && elm!=0){
 console.log(elm);
 }
}

//solution 4
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'check');
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'check');
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'check');
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'check');
});
const promise5 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'check');
});
const promise6 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'check');
});
const promise7 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'check');
});
const promise8 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'check');
});
const promise9 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'check');
});
const promise10 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'check');
});
Promise.all([promise1, promise2, promise3 , promise4, promise5, promise6 ,promise7, promise8, promise9 , promise10]).then((values) => {
  console.log(values);
});


