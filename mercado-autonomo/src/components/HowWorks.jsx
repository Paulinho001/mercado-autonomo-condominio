export default function HowWorks(){


const steps = [

{
number:"01",
title:"Entre no mercado",
text:"Acesse o espaço dentro do condomínio quando precisar."
},


{
number:"02",
title:"Escolha seus produtos",
text:"Pegue bebidas, alimentos e itens do dia a dia."
},


{
number:"03",
title:"Faça o pagamento",
text:"Pague pelo celular de forma rápida e segura."
}

]


return(

<section id="how">


<h2>
Como funciona?
</h2>


<div className="steps">


{
steps.map((step,index)=>(


<div className="step-card" key={index}>


<span>
{step.number}
</span>


<h3>
{step.title}
</h3>


<p>
{step.text}
</p>


</div>


))
}


</div>


</section>


)

}