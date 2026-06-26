import { Check } from "lucide-react";

const plans = [
  {
    name: "Essencial",
    description: "Ideal para condomínios pequenos que desejam iniciar com um mercado autônomo.",
    price: "Sob consulta",
    featured: false,
    features: [
      "Instalação do espaço",
      "Produtos essenciais",
      "Sistema de pagamento",
      "Reposição programada",
    ],
  },
  {
    name: "Premium",
    description: "Para condomínios com maior fluxo de moradores e necessidade de operação completa.",
    price: "Personalizado",
    featured: true,
    features: [
      "Tudo do plano Essencial",
      "Maior variedade de produtos",
      "Monitoramento de estoque",
      "Relatórios de consumo",
      "Atendimento prioritário",
    ],
  },
  {
    name: "Empresarial",
    description: "Solução completa para prédios comerciais, empresas e grandes condomínios.",
    price: "Projeto sob medida",
    featured: false,
    features: [
      "Projeto personalizado",
      "Abastecimento completo",
      "Suporte operacional",
      "Expansão por demanda",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="pricing-header">
        <p>Planos e implantação</p>
        <h2>Escolha o melhor modelo para seu condomínio</h2>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            className={plan.featured ? "pricing-card featured" : "pricing-card"}
            key={index}
          >
            {plan.featured && <span className="badge">Mais escolhido</span>}

            <h3>{plan.name}</h3>

            <p className="plan-description">{plan.description}</p>

            <h2>{plan.price}</h2>

            <a href="#contact" className="pricing-button">
              Solicitar contato
            </a>

            <div className="pricing-line"></div>

            <ul>
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex}>
                  <Check size={20} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}