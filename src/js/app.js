/* ==============================
   VerdeVida - app.js final
   ============================== */

/* ------------------------------
   1. "SPA" Desativada
------------------------------- */
function navigateTo(hash) {
  // SPA desativada — tudo visível
  console.log("SPA desativada — todas as seções visíveis.");
}

// Adiciona o ouvinte de hashchange uma única vez
window.addEventListener("hashchange", () => {
  navigateTo(window.location.hash);
});

/* ------------------------------
   2. Validação de formulário
------------------------------- */
function validarFormulario(formId, mensagemId) {
  const form = document.getElementById(formId);
  const mensagem = document.getElementById(mensagemId);
  if (!form || !mensagem) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    const fields = form.querySelectorAll(
      "input[required], textarea[required], select[required]"
    );

    fields.forEach((field) => {
      const errorSpan = field.nextElementSibling;
      const isEmpty = !field.value.trim();
      const isInvalidNumber = field.type === "number" && field.value < 5;

      if (isEmpty || isInvalidNumber) {
        valid = false;
        field.style.borderColor = "red";
        if (errorSpan && errorSpan.classList.contains("erro-msg")) {
          errorSpan.textContent = isInvalidNumber
            ? "Valor mínimo é R$ 5,00."
            : "Este campo é obrigatório.";
        }
      } else {
        field.style.borderColor = "";
        if (errorSpan && errorSpan.classList.contains("erro-msg")) {
          errorSpan.textContent = "";
        }
      }
    });

    if (valid) {
      mensagem.textContent = "✅ Formulário enviado com sucesso!";
      mensagem.style.color = "green";
      saveFormData(form);
      form.reset();
      form
        .querySelectorAll(".erro-msg")
        .forEach((span) => (span.textContent = ""));
    } else {
      mensagem.textContent = "⚠️ Corrija os campos destacados antes de enviar.";
      mensagem.style.color = "red";
    }
  });
}

/* ------------------------------
   3. Armazenamento Local
------------------------------- */
function saveFormData(form) {
  const data = {};
  const fields = form.querySelectorAll("input, textarea, select");
  fields.forEach((field) => (data[field.name] = field.value));

  localStorage.setItem("verdevidaFormData", JSON.stringify(data));
  console.log("💾 Dados salvos no localStorage:", data);
}

function loadStorage() {
  const savedData = localStorage.getItem("verdevidaFormData");
  if (savedData) {
    console.log("📦 Dados carregados do localStorage:", JSON.parse(savedData));
  }
}

/* ------------------------------
   4. Carrossel simples ( múltiplos)
------------------------------- */
function initCarrossel() {
  const carrosseis = document.querySelectorAll(".carrossel");
  if (!carrosseis.length) return;

  carrosseis.forEach((container) => {
    const images = container.querySelectorAll(
      ".carrossel-container .carrossel-img"
    );
    const btnNext = container.querySelector(".btn-direito");
    const btnPrev = container.querySelector(".btn-esquerdo");

    if (!images.length) return;

    let index = 0;

    function showImage(i) {
      images.forEach((img, idx) => {
        img.classList.toggle("ativo", idx === i);
        img.style.display = idx === i ? "block" : "none";
      });
    }

    showImage(index);

    if (btnNext) {
      btnNext.addEventListener("click", () => {
        index = (index + 1) % images.length;
        showImage(index);
      });
    }

    if (btnPrev) {
      btnPrev.addEventListener("click", () => {
        index = (index - 1 + images.length) % images.length;
        showImage(index);
      });
    }
  });
}

/* ------------------------------
   5. Menu Mobile
------------------------------- */
function initMenuMobile() {
  const menuBtn = document.querySelector("#menu-btn");
  const menu = document.querySelector(".menu-mobile");

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }
}

/* ------------------------------
   6. Templates (Header/Footer)
------------------------------- */
function loadTemplates() {
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");

  if (header && !header.innerHTML.trim()) {
    header.innerHTML = `
            <h1>ONG VerdeVida</h1>
        `;
  }

  if (footer && !footer.innerHTML.trim()) {
    footer.innerHTML = `
            <p>© 2025 ONG VerdeVida</p>
            <a href="#">Ver termos da ONG</a>
        `;
  }
}

/* ------------------------------
   7. Navegação por âncoras (scroll suave)
------------------------------- */
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    console.warn(`Seção com id "${id}" não encontrada.`);
  }
}

/* ------------------------------
   8. Submenu com clique (mobile)
------------------------------- */
function initSubmenuToggle() {
  const projetosLink = document.getElementById("projetos-toggle");
  const submenu = document.querySelector(".submenu");

  if (projetosLink && submenu) {
    projetosLink.addEventListener("click", (e) => {
      e.preventDefault();
      submenu.classList.toggle("active");
    });
  }
}

/* ------------------------------
   9. Inicialização da Aplicação
------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  console.log("🌿 Aplicação VerdeVida iniciada.");

  // Inicializações principais
  loadTemplates();
  loadStorage();
  initCarrossel();
  initMenuMobile();
  initSubmenuToggle();

  validarFormulario("form-cadastro", "mensagem-cadastro");
  validarFormulario("form-doacao", "mensagem-doacao");
  validarFormulario("form-voluntario", "mensagem-voluntario");
  validarFormulario("form-contato", "mensagem-confirmacao");

  // Exibe modal de termos uma vez por sessão
  const modal = document.getElementById("modal-termos");
  if (modal && !sessionStorage.getItem("termosExibidos")) {
    modal.showModal();
    sessionStorage.setItem("termosExibidos", "true");
  }

  // Navegação inicial
  navigateTo(window.location.hash || "#home");

  // Alternar tema claro/escuro
  const btn = document.getElementById("toggle-theme");
  if (btn) {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      btn.textContent = isDark ? "☀️ Modo Claro" : "🌙 Modo Escuro";
    });
  }
});
