export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div>
          <h2>Mercado Autônomo</h2>
          <p>
            Solução prática, segura e disponível 24 horas para condomínios,
            prédios e empresas.
          </p>
        </div>

        <div>
          <h3>Navegação</h3>
          <a href="#hero">Início</a>
          <a href="#benefits">Benefícios</a>
          <a href="#how">Como funciona</a>
          <a href="#pricing">Planos</a>
          <a href="#contact">Contato</a>
        </div>

        <div>
          <h3>Contato</h3>
          <p>Cascavel - PR</p>
          <p>contato@mercadoautonomo.com</p>
          <p>(45) 99999-9999</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Mercado Autônomo. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}