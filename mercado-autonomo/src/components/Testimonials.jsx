const testimonials = [

{
name:"Mariana",
role:"Moradora",
text:"O mercado dentro do prédio facilitou muito minha rotina. Sempre compro algo que falta em casa.",
stars:5
},


{
name:"Carlos",
role:"Síndico",
text:"Os moradores gostaram bastante. Trouxe praticidade e valorizou o condomínio.",
stars:5
},


{
name:"Ana",
role:"Moradora",
text:"A melhor parte é poder comprar uma coisa rápida sem precisar sair.",
stars:4
}

]



export default function Testimonials(){


return(

<section id="testimonials">


<h2>
O que os moradores dizem
</h2>



<div className="testimonial-grid">


{
testimonials.map((item,index)=>(


<div className="testimonial-card" key={index}>


<div className="avatar">
👤
</div>



<p>
"{item.text}"
</p>



<div className="stars">

{"⭐".repeat(item.stars)}

</div>



<h3>
{item.name}
</h3>


<span>
{item.role}
</span>


</div>


))
}


</div>


</section>

)

}