(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{129:function(e,t,a){e.exports=a.p+"static/media/react-logo.47ce6e77.png"},145:function(e,t,a){e.exports=a(181)},150:function(e,t,a){},151:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},152:function(e,t){},161:function(e,t,a){e.exports=a.p+"static/media/background.d54a11cd.jpeg"},181:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),o=a.n(l),c=(a(150),a(32)),i=a(7),s=a(8),m=a(10),u=a(9),p=(a(151),a(69),a(70),r.a.Component,function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),n.props.history.push("/")},n.errorInfo=function(e){var t=e.target.name,a=e.target.value;"name"===t&&""===a&&n.setState({errormessage_name:"Full name is Mandatory"}),"email"===t&&""===a&&n.setState({errormessage_email:"email is Mandatory"}),"username"===t&&""===a&&n.setState({errormessage_username:"username is Mandatory"})},n.changeHandler=function(e){n.setState({Uname:e.target.value})},n.state={errormessage_name:"",errormessage_email:"",errormessage_username:"",Uname:""},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"signUp"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"signup-form"},r.a.createElement("h1",null,"Sign Up"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"name",onChange:this.changeHandler,placeholder:"Enter your Name",autoComplete:"off",value:this.state.Uname}),this.state.errormessage_name,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"email",name:"email",onChange:this.changeHandler,placeholder:"Enter Your Email ID",autoComplete:"off"}),this.state.errormessage_email,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"username",onChange:this.changeHandler,placeholder:"Enter Your UserName",autoComplete:"off"}),this.state.errormessage_username,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"password",placeholder:"Enter Password",autoComplete:"off"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"password",placeholder:"Confirm Password",autoComplete:"off"}),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("input",{type:"checkbox"})," I agree to the ",r.a.createElement("strong",null,"Terms of User")),r.a.createElement("p",null,r.a.createElement("button",{style:{backgroundColor:"#D560D5"},onClick:this.errorInfo},"Sign Up"),r.a.createElement("button",null,"Sign in")),r.a.createElement("p",null,"Hello ",this.state.Uname)))))}}]),a}(r.a.Component)),h=(a(152),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function d(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var g=a(48),f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("img",{src:this.props.imageURL,alt:this.props.altText})}}]),a}(n.Component),E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).increment=function(){n.setState((function(e){return{count:e.count+1}}))},n.state={checked:n.props.checked,btnValue:n.props.loginStatus,count:0},n.handleChange=n.handleChange.bind(Object(g.a)(n)),n.changeStatus=n.changeStatus.bind(Object(g.a)(n)),n}return Object(s.a)(a,[{key:"handleChange",value:function(e){var t=e.target.checked;console.log("checked value ::",t),this.setState({checked:t})}},{key:"changeStatus",value:function(e){this.setState({btnValue:!this.state.btnValue})}},{key:"alertChecked",value:function(e){console.log("Checked :: ",e)}},{key:"render",value:function(){var e,t=this;return e=this.state.btnValue?"Click to Logout":"Click to Login",r.a.createElement("div",{className:"imageFormat"},r.a.createElement("button",{className:"btn",onClick:this.increment},"Increment ")," ",r.a.createElement("span",null,"::  ",this.state.count),r.a.createElement(f,{imageURL:this.props.imageURL,altText:this.props.altText}),r.a.createElement("h3",{style:{display:!this.props.Name&&"none"}}," Name: ",this.props.Name," \ud83d\ude04 "),r.a.createElement("p",null,"Phone: ",this.props.Phone),r.a.createElement("p",null,"Email: ",this.props.email),r.a.createElement("input",{type:"checkbox",checked:this.state.checked,onChange:this.handleChange,onMouseEnter:function(){return t.alertChecked(t.props.Name)}}),r.a.createElement("span",null,this.props.text),r.a.createElement("br",null),r.a.createElement("span",{style:{fontWeight:600}},"Gender : "),r.a.createElement("select",{value:this.props.value},r.a.createElement("option",{value:"Male"},"Male"),r.a.createElement("option",{value:"Female"},"Female")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{value:this.state.btnValue},"  Login Status :: ",this.state.btnValue.toString().toUpperCase()),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{style:{display:"block"},className:"btn",value:this.state.btnValue,onClick:this.changeStatus}," ",e," "))}}]),a}(r.a.Component),v=[{id:1,Name:"Rahul Daksh",imageURL:"https://joeschmoe.io/api/v1/superstar",Phone:"(212) 555-12345",email:"rahul.daksh@gmail.com",text:"Welcome to the  world of React",completed:!0,gender:"Male",login:!0,altText:"random image"},{id:2,Name:"R D Prajapati",imageURL:"https://joeschmoe.io/api/v1/nidhi",Phone:"(212) 555-12345",email:"rahul.rahul@gmail.com",text:"Welcome to the  world of Javascript!!",completed:!1,gender:"Female",login:!0,altText:"random image"},{id:3,Name:"Daksh",imageURL:"https://joeschmoe.io/api/v1/pooja",Phone:"(212) 555-12345",email:"rahul.rahul@gmail.com",text:"Welcome to the  world of Angular JS@@",completed:!0,gender:"Female",login:!1,altText:"random image"},{id:4,Name:"Pradip",imageURL:"https://joeschmoe.io/api/v1/shikhaa",Phone:"(212) 555-12345",email:"rahul.rahul@gmail.com",text:"Welcome to the  world of HTML5 & CSS3**",completed:!0,gender:"Female",login:!1,altText:"random image"},{id:5,Name:"Ankit",imageURL:"https://joeschmoe.io/api/v1/parul",Phone:"(212) 555-12345",email:"rahul.rahul@gmail.com",text:"Welcome to the  world of jQuery###",completed:!1,gender:"Female",login:!0,altText:"random image"},{id:6,Name:"Hritik Daksh",imageURL:"https://joeschmoe.io/api/v1/parul",Phone:"(212) 555-12345",email:"rahul.rahul@gmail.com",text:"Welcome to the  world of jQuery###",completed:!1,gender:"Female",login:!0,altText:"random image"}],b=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Contact Page"))}}]),a}(r.a.Component),y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=v.map((function(e){return r.a.createElement(E,{key:e.id,Name:e.Name,imageURL:e.imageURL,Phone:e.Phone,email:e.email,checked:e.completed,text:e.text,value:e.gender,loginStatus:e.login,altText:e.altText})}));return r.a.createElement("div",null,e)}}]),a}(r.a.Component),C=a(78),j=a(100),k=a(73),x=a(68),w=Object(x.a)((function(e){Object(n.useEffect)((function(){return console.log("React Hook :: UseEffect"),function(){console.log("Test3 clean up")}}),[]);return r.a.createElement(k.a,null,r.a.createElement("div",{style:{"@media (max-width: 800px)":{backgroundColor:"red"}}},r.a.createElement("p",{onClick:e.click},"I am ",e.name," & I am ",e.age," years old"),r.a.createElement("p",null,"I am Children :: ",e.children),r.a.createElement("input",{type:"text",onChange:e.changed,value:e.name}),r.a.createElement("p",null,e.charLength)))})),O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).nameChangedHandler=function(e,t){var a=n.state.persons.findIndex((function(e){return e.id===t})),r=Object(j.a)({},n.state.persons[a]);r.name=e.target.value;var l=Object(C.a)(n.state.persons);l[a]=r,n.setState({persons:l})},n.deletePersonHandler=function(e){var t=Object(C.a)(n.state.persons);t.splice(e,1),n.setState({persons:t})},n.togglePersonHandler=function(){var e=n.state.showPersons;n.setState({persons:[{id:"01",name:"Rahul",age:26},{id:"02",name:"Asha Rani",age:30},{id:"03",name:"Vishnu",age:23}],showPersons:!e,showTest4:!n.state.showTest4})},n.state={persons:[{id:"01",name:"Rahul",age:26},{id:"02",name:"Asha Rani",age:30},{id:"03",name:"Vishnu",age:23}],showPersons:!1,showTest4:!1},n}return Object(s.a)(a,[{key:"componentWillUnmount",value:function(){console.log("--- componentWillUnmount Called ---")}},{key:"render",value:function(){var e=this,t={backgroundColor:"teal",padding:"20px 40px",outline:"none",cursor:"pointer",":hover":{backgroundColor:"green",color:"white"}},a=null;this.state.showPersons&&(a=r.a.createElement("div",null,this.state.persons.map((function(t,a){return r.a.createElement(w,{click:function(){return e.deletePersonHandler(a)},name:t.name,age:t.age,key:t.id,changed:function(a){return e.nameChangedHandler(a,t.id)},charLength:t.name.length})}))),t.backgroundColor="yellow",t[":hover"]={backgroundColor:"pink",color:"black"});var n=["firstClass","tempClass"];return this.state.persons.length<=2&&n.push("secondClass"),this.state.persons.length<=1&&n.push("thirdClass"),r.a.createElement(k.a,null,r.a.createElement("div",{className:n.join(" ")},this.state.showTest4?r.a.createElement("div",null,r.a.createElement("h1",null,"Hi, I'm React App"),r.a.createElement("p",null,"This is totally awesome")):null,r.a.createElement("button",{style:t,onClick:this.togglePersonHandler},"Toggle Persons"),a))}}]),a}(n.Component),S=Object(x.a)(O),N=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About Page"))}}]),a}(r.a.Component),U=(a(161),a(129)),P=a.n(U),T=a(22),R=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={currentTime:""},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;setInterval((function(){var t=new Date;e.setState({currentTime:t.toLocaleTimeString()})}),1e3);var t=(new Date).getHours(),a="",n={fontWeight:"600"};return t>=1&&t<=12?(a="Good Morning",n.color="green"):t>=13&&t<=18?(a="Good Evening",n.color="yellow"):(a="Good Night",n.color="Red"),r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Date is :: ",(new Date).toLocaleDateString())," ||",r.a.createElement("span",{style:n},"\xa0 ",a)," ||",r.a.createElement("span",null," Time is:: ",this.state.currentTime))}}]),a}(n.Component),W=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"nav-bar"},r.a.createElement("img",{src:P.a,className:"React-logo",alt:"logo"}),r.a.createElement(R,null),r.a.createElement("ul",{className:"nav-links"},r.a.createElement("li",null,r.a.createElement(T.b,{exact:!0,activeClassName:"active",to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(T.b,{exact:!0,activeClassName:"active",to:"/about"},"about")),r.a.createElement("li",null,r.a.createElement(T.b,{exact:!0,activeClassName:"active",to:"/contact"},"Contact")),r.a.createElement("li",null,r.a.createElement(T.b,{exact:!0,activeClassName:"active",to:"/signin"},"Sign In")),r.a.createElement("li",null,r.a.createElement(T.b,{exact:!0,activeClassName:"active",to:"/signup"},"Sign Up")),r.a.createElement("li",null,r.a.createElement(T.b,{exact:!0,activeClassName:"active",to:"/random-test"},"Random Test")),r.a.createElement("li",null,r.a.createElement(T.b,{exact:!0,activeClassName:"active",to:"/Signup_UI"},"SignUP Material UI"))))}}]),a}(n.Component),L=function(e){return e.children},H=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(L,null,r.a.createElement("h1",null,"Welcome to Home Page of React"),r.a.createElement("h2",null,"Page is under maintenance"))}}]),a}(n.Component),I=a(14),D=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(L,null,r.a.createElement("h1",null,"-- Sorry Page Not Found :( --"),r.a.createElement("h2",null,"Enter the correct URL"))}}]),a}(n.Component),F=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return console.log("randomtest.js shouldComponentUpdate"),!0}},{key:"getSnapshotBeforeUpdate",value:function(e,t){return console.log("random.js getSnapshotBeforeUpdate"),{message:"Shapshot"}}},{key:"componentDidUpdate",value:function(e,t,a){console.log("random.js componentDidUpdate"),console.log(a)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Random"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(T.b,{exact:!0,to:"/test1"},"Test1")),r.a.createElement("li",null,r.a.createElement(T.b,{exact:!0,to:"/test4"},"Test4"))))}}]),a}(n.Component),A=a(76),_=a(77),M=function(e){return r.a.createElement("div",{className:e.classes},e.children)};function V(){var e=Object(A.a)(["\n    background: transparent;\n    border-radius: 3px;\n    border: 2px solid palevioletred;\n    color: palevioletred;\n    margin: 0 1em;\n    padding: 10px 40px;\n"]);return V=function(){return e},e}function q(){var e=Object(A.a)(["\n    font-size: 50px;\n    color: ",";\n    text-align: center;\n\n    &:hover{\n        color: ",";\n    }\n"]);return q=function(){return e},e}var B=_.a.h1(q(),(function(e){return e.changeColor?"coral":"#2e8240d9"}),(function(e){return e.changeColor?"#2e8240d9":"coral"})),G=_.a.button(V()),J=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={flag:!0,username:"",password:""},e.submitHandler=function(e){e.preventDefault()},e.changeHandler=function(t){var a=t.target.name,n=t.target.value;console.log("tryme :: ",a,n),e.setState(Object(c.a)({},a,n))},e.handleClick=function(){var t=e.state.username,a=e.state.password;console.log(t),console.log(a),"Rahul"===t&&"12345"===a&&alert()},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(M,{classes:"tempClass"},r.a.createElement(B,{changeColor:this.state.flag},"Welcome to Sign In "),r.a.createElement("form",{className:"formStyle",onSubmit:this.submitHandler},r.a.createElement("div",null,r.a.createElement("label",null,"UserName"),r.a.createElement("input",{type:"test",placeholder:"Enter username",onChange:this.changeHandler,name:"username"})),r.a.createElement("div",null,r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",placeholder:"Enter password",onChange:this.changeHandler,name:"password"})),r.a.createElement("div",null,r.a.createElement(G,{type:"submit",onClick:this.handleClick},"Login"))))}}]),a}(n.Component),Y=a(230),Q=a(226),z=a(223),$=a(227),K=a(225),X=a(229),Z=a(220),ee=a(224),te=a(228),ae=a(133),ne=a.n(ae),re=a(134),le=a(221),oe=a(222);function ce(){return r.a.createElement(re.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(Z.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var ie=Object(le.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function se(){var e=ie();return r.a.createElement(oe.a,{component:"main",maxWidth:"xs"},r.a.createElement(z.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(Y.a,{className:e.avatar},r.a.createElement(ne.a,null)),r.a.createElement(re.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(ee.a,{container:!0,spacing:2},r.a.createElement(ee.a,{item:!0,xs:12,sm:6},r.a.createElement($.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})),r.a.createElement(ee.a,{item:!0,xs:12,sm:6},r.a.createElement($.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"})),r.a.createElement(ee.a,{item:!0,xs:12},r.a.createElement($.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})),r.a.createElement(ee.a,{item:!0,xs:12},r.a.createElement($.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"})),r.a.createElement(ee.a,{item:!0,xs:12},r.a.createElement(K.a,{control:r.a.createElement(X.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."}))),r.a.createElement(Q.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign Up"),r.a.createElement(ee.a,{container:!0,justify:"flex-end"},r.a.createElement(ee.a,{item:!0},r.a.createElement(Z.a,{href:"#",variant:"body2"},"Already have an account? Sign in"))))),r.a.createElement(te.a,{mt:5},r.a.createElement(ce,null)))}var me=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(T.a,null,r.a.createElement(W,null),r.a.createElement(I.c,null,r.a.createElement(I.a,{exact:!0,path:"/",component:H}),r.a.createElement(I.a,{exact:!0,path:"/about",component:N}),r.a.createElement(I.a,{exact:!0,path:"/contact",component:b}),r.a.createElement(I.a,{exact:!0,path:"/signin",component:J}),r.a.createElement(I.a,{exact:!0,path:"/signup",component:p}),r.a.createElement(I.a,{exact:!0,path:"/random-test",component:F}),r.a.createElement(I.a,{exact:!0,path:"/test4",component:S}),r.a.createElement(I.a,{exact:!0,path:"/test1",component:y}),r.a.createElement(I.a,{exact:!0,path:"/Signup_UI",component:se}),r.a.createElement(I.a,{component:D})))}}]),a}(r.a.Component),ue=a(67),pe=a.n(ue);r.a.Component,r.a.Component;o.a.render(r.a.createElement(me,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/reactlivewebsite",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/reactlivewebsite","/service-worker.js");h?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):d(t,e)}))}}()},69:function(e,t,a){},70:function(e,t,a){}},[[145,1,2]]]);
//# sourceMappingURL=main.32a5db53.chunk.js.map