# Bloom Byte Girls — Frontend

Frontend da plataforma **Bloom Byte Girls**, criada para apresentar trilhas de aprendizado, séries de vídeos educacionais e iniciativas que incentivam meninas na tecnologia.

Este projeto foi desenvolvido em **Angular 19**, utilizando boas práticas de componentização, rotas, integração com o YouTube Player e UI responsiva.

---

## 🚀 Tecnologias Utilizadas

- **Angular 19**
- **TypeScript**
- **Angular Router**
- **Standalone Components**
- **YouTube Player Component** (`@angular/youtube-player`)
- **SCSS** com arquitetura modular e responsiva
- **Placeholders Shimmer (carregamento elegante)**

---

## 📌 Funcionalidades principais

- Exibição de trilhas por temas
- Página de série com playlist e player embutido
- Player responsivo do YouTube
- Breadcrumbs com navegação intuitiva
- Layout otimizado com placeholders enquanto dados carregam
- Dados carregados via arquivos TS locais (sem necessidade de API)
- Estrutura preparada para futura integração com backend

---

## 📁 Estrutura de Pastas (resumo)

```
src/
 ├─ app/
 │   ├─ core/
 │   │   ├─ data/        # Dados locais (séries, temas, canais...)
 │   │   ├─ interfaces/   # Interfaces
 │   │   └─ services/    # Serviços de acesso aos dados via API
 │   ├─ pages/           # Páginas principais (Home, Trilhas, Série etc.)
 │   ├─ shared/
 │   │   └─ components/  # Componentes reutilizáveis
 │   └─ app.routes.ts    # Rotas principais
 └─ styles/              # Estilos globais
```

---

## ▶️ Como rodar o projeto

```bash
npm install
ng serve
```

O projeto irá rodar em:

```
http://localhost:4200
```

---

## 🔧 Scripts úteis

| Comando    | Descrição                            |
| ---------- | ------------------------------------ |
| `ng serve` | Inicia o servidor de desenvolvimento |
| `ng build` | Gera build de produção               |

---

## 🧭 Navegação

- `/home` - Página inicial
- `/trilhas` – Lista temas e trilhas
- `/trilhas/:id` – Exibe séries de um tema específico
- `/series/:id` – Página de série (vídeos, descrição e player)
- `/projetos` - Seção com iniciativas para meninas na tecnologia
- `/contato` - Formulário e informações de contato

---

## 🧩 Componentes principais

- `SeriesCardComponent` – Card de exibição das séries
- `DiamonButtonComponent` - Botão com ícones SVG para seleção de temas
- `HeaderComponent` - Cabeçalho fixo com navegação
- `FooterComponent` - Rodapé da plataforma

---

## 🎨 Layout responsivo

O projeto utiliza:

- **CSS Grid** e **Flexbox**
- Ícones SVG otimizados
- **Breakpoints responsivos**

---

## 📦 Dados Locais

Os dados do projeto (temas, caais, séries e vídeos) foram migrados para arquivos TypeScript:

```
src/app/core/data/
 ├─ series.data.ts
 ├─ temas.data.ts
 └─ canais.data.ts
```

Essa abordagem foi adotada porque, neste momento inicial do projeto, ainda não é possível hospedar um banco de dados.
Por isso, toda a estrutura de dados foi convertida para arquivos TypeScript estáticos, permitindo que o frontend funcione de forma completa e independente.

Isso permite:

- 🚀 Carregamento rápido — sem latência de rede
- 🛠 Fácil manutenção e expansão — os dados podem ser editados diretamente
- 🔌 Zero dependência de backend — o projeto roda inteiramente no frontend
- 💰 Custo zero — ideal para o período inicial antes da implementação de um backend real

Quando for possível realizar a hospedagem do banco de dados, a transição será simples, pois o service de acesso à API já está implementado.
Assim, bastará substituir a leitura dos arquivos TypeScript por requisições HTTP reais, sem necessidade de alterar a lógica principal do aplicativo ou seus componentes.

---

## 🌐 Deploy

Este projeto pode ser publicado facilmente em:

- Vercel
- GitHub Pages

---

## 💬 Contato

Para dúvidas, sugestões ou contribuições:

**Autora:** Déborah Sales

[![LinkedIn](https://img.shields.io/badge/LinkedIn-D%C3%A9borah_Sales-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/deborahsales)

🌐 **Site oficial do projeto:**  
https://bloombytegirls.vercel.app/

---

## ❤️ Propósito

Feito com ❤️ para inspirar mais meninas na tecnologia.
