(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{15:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(8),r=n.n(c),o=n(7),s=n(2),i=n(3),l=n(5),u=n(4),d=n(17),b=n(9),h=n(0),j=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInputChange=function(e){t.setState(Object(b.a)({},e.target.name,e.target.value))},t.onAddContact=function(e){e.preventDefault(),t.props.addContact(t.state.name,t.state.number),t.setState({name:"",number:""})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("form",{onSubmit:this.onAddContact,children:[Object(h.jsxs)("label",{children:["Name",Object(h.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleInputChange,pattern:"^[A-Z\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(h.jsxs)("label",{children:["Number",Object(h.jsx)("input",{type:"tel",name:"number",value:this.state.number,onChange:this.handleInputChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(h.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),m=function(t){var e=t.onFilter,n=t.value;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("label",{children:["Find contacts by name",Object(h.jsx)("input",{type:"text",name:"keyword",value:n,onChange:function(t){return e(t.target.value)}})]})})},f=function(t){var e=t.contact,n=t.deleteContact,a=e.id,c=e.name,r=e.number;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("li",{children:[c," ",r]}),Object(h.jsx)("button",{onClick:function(){return n(a)},children:"Delete"})]})},p=function(t){var e=t.contacts,n=t.deleteContact;return Object(h.jsx)("ul",{children:e.map((function(t){return Object(h.jsx)(f,{contact:t,deleteContact:n},t.id)}))})},O=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){if(t.state.contacts.find((function(t){return t.name===e})))alert("".concat(e," is already in contacts"));else{var a=[].concat(Object(o.a)(t.state.contacts),[{id:Object(d.a)(),name:e,number:n}]);t.setState({contacts:a}),localStorage.setItem("contacts",JSON.stringify(a))}},t.deleteContact=function(e){var n=t.state.contacts.findIndex((function(t){return t.id===e})),a=Object(o.a)(t.state.contacts);a.splice(n,1),t.setState({contacts:a}),localStorage.setItem("contacts",JSON.stringify(a))},t.onFilter=function(e){t.setState({filter:e})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){try{var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}catch(e){}}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var t=this.state.filter.toLowerCase(),e=this.state.filter?this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)})):this.state.contacts;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(j,{addContact:this.addContact}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(m,{onFilter:this.onFilter,value:this.state.filter}),Object(h.jsx)(p,{contacts:e,deleteContact:this.deleteContact})]})}}]),n}(a.Component);r.a.render(Object(h.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.90936ac9.chunk.js.map