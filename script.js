// // let fruits = ["apple", "banana" , "giwi", "peach"]
// // fruits.forEach((item) => {
// //     console.log(item)
// // })

// // let fruits  = ["apple", 
// // "banana", 
// // false, 
// // 13,
// // "hello",
// // ["1", "2" ,"3"],
// // {name: "Peter" , lastname: "Paker"},
// // 12345
// // ];
// // fruits.forEach((item => {
// //     console.log(typeof(item))
// // }))

// // let people = [
// //     {
// //         name: "Peter" ,
// //         lastname: "Paker",
// //         age :34
// //     },
// //     {
// //         name: "lasley" ,
// //         lastname: "Johnson",
// //         age :55
// //     },
// //     {
// //         name: "Sam" ,
// //         lastname: "Cruz",
// //         age :11
// //     },
// //     {
// //         name: "Sadyr" ,
// //         lastname: "Japarov",
// //         age :44
// //     },
// //     {
// //         name: "Vladimir" ,
// //         lastname: "Putin",
// //         age :70
// //     }
// // ]

// // let countainer = document.querySelector('#countainer')

// // people.forEach((item) => {
// //     let person = document.createElement('div');
// //     let name = `${item.name},`;
// //     let lastname= `${item.lastname},`;
// //     let age = item.age;
// //     person.append(name);
// //     person.append(lastname);
// //     person.append(age);
// //     person.append(person);
// // })

// let people = [
//     {
//         name: "Peter" ,
//         resume : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus autem eligendi porro odit libero repellendus qui dolorem corporis laborum, sint eos, cumque blanditiis nostrum possimus numquam dolorum veritatis sunt ipsa.",
//         profession: "html"
//     },
//     {
//         name: "Piotr" ,
//         resume : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus autem eligendi porro odit libero repellendus qui dolorem corporis laborum, sint eos, cumque blanditiis nostrum possimus numquam dolorum veritatis sunt ipsa.",
//         profession : "html"
//     },
//     {
//         name: "Rysia" ,
//         resume : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus autem eligendi porro odit libero repellendus qui dolorem corporis laborum, sint eos, cumque blanditiis nostrum possimus numquam dolorum veritatis sunt ipsa.",
//         profession : "html"
//     },
//     {
//         name: "Aizu" ,
//         resume : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus autem eligendi porro odit libero repellendus qui dolorem corporis laborum, sint eos, cumque blanditiis nostrum possimus numquam dolorum veritatis sunt ipsa.",
//         profession : "html"
//     }]
    
// let countainer = document.querySelector('#countainer')

// people.forEach((item) => {

//     let person = document.createElement('div');
//     let name = `${item.resume},`;
//     let resume = `${item.resume},`;
//     let profession= `${item.profession},`;

//     person.append(name);
//     person.append(resume);
//     person.append(profession);
//     person.append(person);
// });

let base = [
  {
    name: "Ivan",
    age: 22,
    img: "https://st2.depositphotos.com/4431055/7495/i/600/depositphotos_74950191-stock-photo-men-latin-american-and-hispanic.jpg",
    profession: "It-specialist",
    resume: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt est, alias laboriosam voluptatem neque fugit quasi quos sit obcaecati magnam! Dolor dolorem consequuntur quas cupiditate eos voluptates quae nemo esse!"
  },
  {
    name: "Clara",
    age: 19,
    img: "https://bigpicture.ru/wp-content/uploads/2018/12/100faces00.jpg",
    profession: "front-end specialist",
    resume: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt est, alias laboriosam voluptatem neque fugit quasi quos sit obcaecati magnam! Dolor dolorem consequuntur quas cupiditate eos voluptates quae nemo esse!"
  },
  {
    name: "Idai",
    age: 24,
    img: "https://www.komarov.design/content/images/2020/11/image-4.jpeg",
    profession: "It-specialist",
    resume: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt est, alias laboriosam voluptatem neque fugit quasi quos sit obcaecati magnam! Dolor dolorem consequuntur quas cupiditate eos voluptates quae nemo esse!"
  }
]

  let main = document.querySelector('main')
  base.forEach((item) => {

  let div = document.createElement('div');
  let h1 = document.createElement('h1');
  let span = document.createElement('span');
  let h3 = document.createElement('h3');
  let p = document.createElement('p');
  let img = document.createElement('img');

  img.scr = `"${item.img}"`;
  h1.textContent = item.name;
  span.textContent = item.age;
  h3.textContent = item.profession;
  p.textContent= item.resume;

  div.append(img);
  div.append(h1);
  div.append(span);
  div.append(h3);
  div.append(p);

  main.append(div)
});
