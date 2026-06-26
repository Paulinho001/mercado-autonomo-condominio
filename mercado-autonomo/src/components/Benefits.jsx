import {
Clock,
ShieldCheck,
ShoppingCart,
BadgeDollarSign
} from "lucide-react";


export default function Benefits(){


const cards = [

{
icon:<Clock size={45}/>,
title:"Aberto 24 horas",
text:"Compre produtos quando precisar, sem depender de horário."
},


{
icon:<ShoppingCart size={45}/>,
title:"Dentro do condomínio",
text:"Tenha um mercado perto de você sem sair do prédio."
},


{
icon:<ShieldCheck size={45}/>,
title:"Mais segurança",
text:"Ambiente monitorado e pensado para moradores."
},


{
icon:<BadgeDollarSign size={45}/>,
title:"Ofertas exclusivas",
text:"Receba promoções direto no seu e-mail."
}

]


return(


<section id="benefits">


<h2>
Por que ter um mercado autônomo?
</h2>


<div className="benefit-grid">


{

cards.map((card,index)=>(


<div className="benefit-card" key={index}>


{card.icon}


<h3>
{card.title}
</h3>


<p>
{card.text}
</p>


</div>


))

}


</div>


</section>


)

}