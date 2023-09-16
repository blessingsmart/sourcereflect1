import{j as e,L as d,r as o}from"./index-81657c68.js";import{G as m,L as f,F as p,a as j,b,c as w,N}from"./NavBar-6276ee78.js";const v="/assets/heroImage-49029f55.png",S="/assets/heroImage1-cabbd3e8.png",L=()=>e.jsx("div",{className:"h-full bg-gradient-to-r from-green-600 to-lime-600",children:e.jsxs("div",{className:"max-w-screen-lg md:mx-auto mx-10 flex flex-col items-center justify-center pt-5 md:flex-row md:gap-32",children:[e.jsxs("div",{className:"flex flex-col justify-center h-full",children:[e.jsx("h2",{className:"text-4xl sm:text-6xl font-bold text-white mt-20 md:mt-0",children:"Welcome to Sourcereflect"}),e.jsx("p",{className:"text-white py-4 max-w-md",children:"Empowering Nigeria's Fisheries Sector for Socio-Economic Development!"}),e.jsx("div",{children:e.jsx(d,{to:"/",children:e.jsx("button",{className:"group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md border-2 border-white cursor-pointer",children:"PARTNER"})})})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-10 mt-10 md:mt-40 md:pt-56",children:[e.jsxs("a",{href:"https://www.linkedin.com/in/popoola-samson-343129b9",target:"_blank",rel:"noopener noreferrer",className:"relative",children:[e.jsx("div",{className:"bg-white h-60 w-60 p-4 rounded-lg",children:e.jsx("img",{src:v,alt:"my profile",className:"mx-auto mb-10"})}),e.jsxs("button",{className:"absolute bottom-1.5 translate-x-1/4 bg-white border border-blue-500 text-blue-500 px-4 py-2 mt-2 items-center rounded-md",children:["Popoola Samson ",e.jsx("br",{}),e.jsx("p",{className:"font-bold",children:"FOUNDER"})]})]}),e.jsxs("a",{href:"https://www.linkedin.com/in/adedoyin-solomon-3b596b19a",target:"_blank",rel:"noopener noreferrer",className:"relative",children:[e.jsx("div",{className:"bg-white h-60 w-60 p-4 rounded-lg",children:e.jsx("img",{src:S,alt:"my profile",className:"mx-auto mb-10"})}),e.jsxs("button",{className:"absolute bottom-1.5 translate-x-1/4 bg-white border border-blue-500 text-blue-500 px-4 py-2 mt-2 items-center rounded-md",children:["Segun Adedoyin ",e.jsx("br",{}),e.jsx("p",{className:"font-bold",children:"CO-FOUNDER "})]})]})]})]})});function I(s){return m({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"}}]})(s)}function y(s){return m({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]})(s)}function E(s){return m({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"}}]})(s)}const D=({sliderData:s})=>{const[t,l]=o.useState(0),r=s.length,a=!0,i=5e3,c=o.useCallback(()=>{l(t===r-1?0:t+1),console.log("next")},[t,r]),u=()=>{l(t===0?r-1:t-1),console.log("prev")},x=o.useRef(null),h=o.useCallback(()=>{x.current=setInterval(c,i)},[c]);return o.useEffect(()=>(h(),()=>{clearInterval(x.current)}),[a,t,h]),e.jsxs("div",{className:"w-full h-[50vh] relative overflow-hidden",children:[e.jsx(y,{className:"arrow prev absolute z-10 top-[35%] left-2 text-white border-2 border-white rounded-full cursor-pointer hover:bg-white hover:text-gray-700",onClick:u}),e.jsx(E,{className:"arrow next absolute z-10 top-[35%] right-2 text-white border-2 border-white rounded-full cursor-pointer hover:bg-white hover:text-gray-700",onClick:c}),s.map((g,n)=>e.jsx("div",{className:`absolute top-0 left-0 w-full h-full opacity-0 transition-all duration-500 ${n===t?"opacity-100":""}`,children:n===t&&e.jsx("div",{className:"h-full",children:e.jsx("img",{src:g.image,alt:"slide",className:"object-cover w-full h-full rounded-md"})})},n))]})},k="/assets/SLIDE1-1aded8ed.jpeg",F="/assets/SLIDE2-9ce40e3d.jpeg",R="/assets/SLIDE4-b8e6eac9.jpeg",A="/assets/SLIDE5-08aacf33.jpeg",C="/assets/SLIDE6-5ef83c68.jpeg",z="/assets/SLIDE7-f4132417.jpeg",O="/assets/SLIDE8-0f8d4cfd.jpeg",T="/assets/SLIDE9-38c65866.jpeg",H="/assets/SLIDE10-6bee6d7a.jpeg",q="/assets/SLIDE11-b4ab3f5c.jpeg",M="/assets/SLIDE12-6a5796f5.jpeg",P=()=>{const s=[{image:k},{image:F},{image:R},{image:A},{image:C},{image:z},{image:O},{image:T},{image:H},{image:q},{image:M}];return e.jsx("div",{className:"h-full bg-white ",children:e.jsxs("div",{className:"flex sm:flex-row flex-col m-10 sm:m-20 lg:gap-52 gap-10 items-center justify-center",children:[e.jsx(D,{sliderData:s}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"border-t-2 border-gray-500 w-8 p-1"}),e.jsx("div",{className:"text-3xl text-blue-300 inline ",children:"About us"}),e.jsxs("div",{children:[e.jsx("h1",{className:"my-5 text-2xl",children:" Mission"}),e.jsx("p",{className:" text-gray-500",children:"Our primary mission is to provide free training and education to schools, communities, and individuals across Nigeria, focusing on harnessing the country's resources for socio-economic development in the fisheries sector. With expertise in aquarium construction and design, aquaculture, fish feed formulation and production, as well as fish processing, we aim to equip participants with the knowledge and skills necessary to excel in these areas."})]}),e.jsxs(d,{to:"/",className:"flex text-blue-300 cursor-pointer items-center justify-end",children:["See More ",e.jsx(I,{})," "]})]})]})})},B="/assets/Acqurium-b309d09d.jpeg",U="/assets/Fishfeed-7f8f407a.jpeg",W="/assets/smokefish-b82494c5.jpeg",G=()=>{const s=[{id:1,src:B,title:"Acqurium"},{id:2,src:W,title:"Smoked Fish"},{id:3,src:U,title:"Fish Feed"}];return e.jsx("div",{name:"Shop",className:"bg-gradient-to-r from-green-600 to-lime-600 w-full text-white md:h-screen",children:e.jsxs("div",{className:"max-w-screen-lg p-4 mx-auto flex flex-col items-center justify-center w-full h-full ",children:[e.jsxs("div",{className:"py-8 items-center flex flex-col",children:[e.jsx("p",{className:"text-4xl font-bold inline border-b-4 border-gray-500",children:"Shop"}),e.jsx("p",{className:"py-3",children:"Check out some of our products"})]}),e.jsx("div",{className:"grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0",children:s.map(({id:t,src:l,title:r})=>e.jsxs("div",{className:"shadow-md shadow-gray-600 ",children:[e.jsxs("div",{className:"relative",children:[e.jsx("p",{className:"w-full text-center py-3 absolute bottom-0 bg-gradient-to-t from-black to-black/5 ",children:r}),e.jsx("img",{src:l,alt:"products",className:"rounded-lg"})]}),e.jsx("button",{className:"w-full bg-white text-green-600 py-3 rounded-md border-2 border-white duration-200 hover:scale-105",children:"Order Now"})]},t))})]})})},Q=()=>{const s=[{id:1,child:e.jsx(e.Fragment,{children:e.jsx(p,{size:30})}),href:"https://www.twitter.com/sourcereflect1"},{id:2,child:e.jsx(e.Fragment,{children:e.jsx(j,{size:30})}),href:"https://wa.me/message/YL3HPLETTPM5O1?src=qr"},{id:3,child:e.jsx(e.Fragment,{children:e.jsx(b,{size:30})}),href:"https://instagram.com/sourcereflect?igshid=MmIzYWVlNDQ5Yg=="},{id:4,child:e.jsx(e.Fragment,{children:e.jsx(w,{size:30})}),href:"https://www.facebook.com/sourcereflec?mibextid=LQQJ4d"}],t=[{id:1,link:"/",title:"Home"},{id:4,link:"/About",title:"About Us"},{id:5,to:"Shop",title:"Shop"}];return e.jsx("div",{name:"Contact",className:"bg-gradient-to-r from-green-600 to-lime-600 w-full",children:e.jsxs("div",{className:"flex flex-col items-center sm:flex-row p-20 text-white sm:justify-between",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("h1",{className:"md:text-3xl text-lg text-blue-300 pb-5",children:"CONTACT US"}),e.jsx("p",{children:"Email: welldoericon@gmail.com"}),e.jsx("p",{children:"Phone: +234 708 451 9109"})]}),e.jsx("ul",{className:"pt-10 flex flex-col items-center text-center",children:t.map(({id:l,link:r,title:a,to:i})=>e.jsx("li",{className:"cursor-pointer capitalize font-medium hover:scale-105 duration-200",children:i?e.jsx(f,{to:i,smooth:"true",duration:500,className:"cursor-pointer",onClick:()=>scrollTo(i),children:a}):e.jsx(d,{to:r,children:a})},l))}),e.jsxs("div",{className:"flex flex-col items-center mt-10",children:[e.jsx("div",{className:"md:text-3xl text-lg text-blue-300",children:"Get In Touch"}),e.jsx("ul",{className:"flex justify-between items-center  pt-5",children:s.map(({id:l,child:r,href:a})=>e.jsx("li",{className:"hover:scale-105 m-1",children:e.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:r})},l))})]})]})})},$=()=>e.jsxs(e.Fragment,{children:[e.jsx(N,{}),e.jsx(L,{}),e.jsx(P,{}),e.jsx(G,{}),e.jsx(Q,{})]});export{$ as default};
