🌍 ONG VerdeVida — Inclusão Digital e Sustentabilidade

Entrega Final — Projeto Profissional com GitFlow, Acessibilidade e Produção

Este projeto tem como objetivo promover a educação tecnológica, inclusão social e sustentabilidade ambiental através de uma plataforma web acessível, responsiva e otimizada para produção.

Desenvolvido em conformidade com as diretrizes WCAG 2.1 Nível AA, versionamento semântico, e fluxo de trabalho GitFlow, este projeto demonstra o domínio das boas práticas exigidas no mercado profissional de desenvolvimento front-end.

🧾 Sumário

🚀 Tecnologias Utilizadas

📂 Estrutura do Projeto

♿ Acessibilidade (WCAG 21)

⚙️ Otimização para Produção

🌿 GitFlow e Versionamento

🧭 Guia GitFlow Passo a Passo

🧪 Testes e Validações

📄 Licença

👨‍💻 Autores

🧠 Créditos e Agradecimentos

🚀 Tecnologias Utilizadas
Categoria Ferramenta / Tecnologia Descrição
Frontend HTML5 / CSS3 / JavaScript (ES6+) Estrutura semântica, responsiva e interativa
Controle de Versão Git / GitHub Versionamento com GitFlow e commits semânticos
Acessibilidade WCAG 2.1 / ARIA / Leitores de tela Navegação inclusiva e padrões de acessibilidade
Otimização TinyPNG / Minify / Squoosh Compressão e minificação de arquivos
Hospedagem GitHub Pages / Vercel Deploy em ambiente de produção
📂 Estrutura do Projeto
📦 verdevida
┣ 📂 src
┃ ┣ 📂 css
┃ ┃ ┣ style.css
┃ ┃ ┗ style.min.css
┃ ┣ 📂 js
┃ ┃ ┣ app.js
┃ ┃ ┗ app.min.js
┃ ┣ 📂 img
┃ ┃ ┣ logo.webp
┃ ┃ ┗ projetos/
┣ 📜 index.html
┣ 📜 projetos.html
┣ 📜 cadastro.html
┣ 📜 README.md
┗ 📜 LICENSE

♿ Acessibilidade (WCAG 2.1 Nível AA)

O projeto foi desenvolvido em conformidade com as recomendações da Web Content Accessibility Guidelines (WCAG 2.1).

✅ Recursos Implementados

Navegação por teclado: todos os elementos interativos acessíveis via Tab, Enter, Esc

Estrutura semântica: uso de <header>, <nav>, <main>, <section>, <footer>

Contraste mínimo 4.5:1: validado com Contrast Ratio Checker

Modo escuro e alto contraste: suporte via CSS e prefers-color-scheme

Leitores de tela: atributos alt, aria-label e role aplicados corretamente

💡 Exemplo de Implementação

<nav aria-label="Menu principal">
  <ul>
    <li><a href="index.html" aria-current="page">Início</a></li>
    <li><a href="projetos.html">Projetos</a></li>
    <li><a href="contato.html">Cadastro</a></li>
  </ul>
</nav>

@media (prefers-color-scheme: dark) {
body {
background-color: #121212;
color: #ffffff;
}
}

⚙️ Otimização para Produção

Para garantir performance e eficiência em ambiente de produção:

Otimização Descrição
Minificação HTML, CSS e JS reduzidos com Minify

Compressão de imagens Imagens otimizadas via TinyPNG e Squoosh
Carregamento assíncrono Scripts com defer para reduzir bloqueios de renderização
Cache de navegador Estrutura compatível com cache estático
SEO básico Uso de meta tags e descrição otimizada

Exemplo:

<script src="./src/js/app.min.js" defer></script>
<link rel="stylesheet" href="./src/css/style.min.css">

🌿 GitFlow e Versionamento
🔹 Branches principais
Branch Função
main Código estável em produção
develop Desenvolvimento ativo
feature/_ Novas funcionalidades
release/_ Preparação de novas versões
hotfix/\* Correções emergenciais
🔹 Commits Semânticos

Exemplo de boas práticas (Conventional Commits):

Tipo Descrição Exemplo
feat: nova funcionalidade feat: adiciona modo escuro acessível
fix: correção de bug fix: corrige erro de foco no teclado
docs: atualização de documentação docs: adiciona guia de acessibilidade
style: ajustes de layout style: melhora contraste no header
refactor: melhoria de código refactor: simplifica função de navegação
🔹 Versionamento Semântico

Usando o padrão MAJOR.MINOR.PATCH

Exemplo:

git tag -a v1.0.0 -m "Versão 1.0.0 estável"
git push origin v1.0.0

🧭 Guia GitFlow Passo a Passo

# 1️⃣ Inicializar o repositório e conectar ao GitHub

git init
git remote add origin https://github.com/usuario/nome-do-projeto.git

# 2️⃣ Criar as branches principais

git checkout -b main
git checkout -b develop
git push -u origin main
git push -u origin develop

# 3️⃣ Criar uma nova funcionalidade

git checkout develop
git checkout -b feature/menu-mobile
git add .
git commit -m "feat: adiciona menu mobile acessível"
git push origin feature/menu-mobile

# 4️⃣ Integrar a funcionalidade

git checkout develop
git merge feature/menu-mobile
git push origin develop

# 5️⃣ Criar uma release

git checkout -b release/1.0.0 develop
git commit -m "chore: prepara versão 1.0.0"
git push origin release/1.0.0

# 6️⃣ Finalizar release

git checkout main
git merge release/1.0.0
git tag -a v1.0.0 -m "Versão estável 1.0.0"
git push origin main --tags

# 7️⃣ Corrigir bug em produção

git checkout -b hotfix/acessibilidade main
git commit -m "fix: corrige navegação de teclado no modal"
git checkout main
git merge hotfix/acessibilidade
git push origin main

🧪 Testes e Validações
Tipo de Teste Ferramenta / Método Resultado Esperado
Validação HTML W3C Validator
Sem erros estruturais
Validação CSS CSS Validator
CSS limpo e sem warnings
Acessibilidade Lighthouse / Wave / NVDA Pontuação > 90
Performance Google PageSpeed Insights Score acima de 85
Responsividade DevTools / Responsinator Layout adaptado a todos os dispositivos
📄 Licença

Este projeto está licenciado sob a MIT License.
Você é livre para usar, modificar e distribuir o código, desde que mantenha os créditos ao autor original.

👨‍💻 Autores
Nome Função Contato
David Martins Desenvolvedor Front-End / Autor GitHub • LinkedIn

🧠 Créditos e Agradecimentos

🎓 Instituição: [Cruzeiro do Sul Virtual / ADS]

💡 Apoio: OpenAI / ChatGPT — suporte técnico e revisão didática

🌐 Ferramentas: GitHub, VS Code, Lighthouse, Wave, TinyPNG
