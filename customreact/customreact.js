


function customrender(reactelement,container){

    const domelement=document.createElement(reactelement.type);
    domelement.innerHTML=reactelement.children;

    for(const prop in reactelement.props){
        if(prop==='children')continue;

        domelement.setAttribute(prop,reactelement.props[prop]);

    }
    container.appendChild(domelement);

}
const reactelement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}

const maincontainer=document.querySelector('#root');
customrender(reactelement,maincontainer);
