# WebDevin - Landing Page

Esta é uma landing page minimalista para a startup WebDevin, especializada em soluções digitais como criação de websites, automações e chatbots.

## Características

- Design minimalista e moderno
- Paleta de cores em tons de azul e branco
- Layout responsivo para todos os dispositivos
- Animações suaves para melhorar a experiência do usuário
- Formulário de contato funcional (simulado)
- Menu responsivo para dispositivos móveis

## Estrutura do Projeto

```
├── assets/                # Recursos estáticos
│   ├── css/              # Arquivos CSS
│   │   └── styles.css    # Estilos CSS e responsividade
│   ├── js/               # Arquivos JavaScript
│   │   └── script.js     # Funcionalidades JavaScript
│   ├── images/           # Imagens e ícones
│   │   └── favicon.svg   # Favicon do site
│   └── fonts/            # Fontes personalizadas (se houver)
├── src/                  # Código-fonte
│   ├── components/       # Componentes reutilizáveis
│   └── pages/            # Páginas do site (arquivos de backup)
├── docs/                 # Documentação
│   └── README.md         # Documentação do projeto
├── index.html            # Página principal do site
├── package.json          # Configuração do projeto
├── .prettierrc           # Configuração do Prettier
├── .vscode/              # Configurações do VS Code
└── .gitignore            # Arquivos ignorados pelo Git
```

## Como Executar

Para visualizar a landing page, você pode usar um dos seguintes métodos:

```bash
# Usando o npm (recomendado)
npm install  # Instala as dependências
npm start    # Inicia o servidor local

# Ou se preferir usar npx diretamente
npx serve
```

Depois, abra o navegador e acesse `http://localhost:3000`.

## Desenvolvimento

### Estrutura de Arquivos

- **index.html**: Contém a estrutura HTML principal do site
- **assets/css/styles.css**: Contém todos os estilos CSS do site
- **assets/js/script.js**: Contém as funcionalidades JavaScript, como o menu mobile e animações

### Tecnologias Utilizadas

- HTML5
- CSS3 (Flexbox e Grid para layouts)
- JavaScript (Vanilla)
- Font Awesome (para ícones)
- Google Fonts (Poppins)

### Boas Práticas Implementadas

- Código semântico HTML5
- CSS organizado por componentes
- JavaScript modular
- Design responsivo com abordagem mobile-first
- Otimização de performance
- Acessibilidade básica

## Manutenção

Para manter o projeto:

1. Atualize regularmente as dependências
2. Teste em diferentes navegadores e dispositivos
3. Otimize imagens antes de adicionar ao projeto
4. Mantenha a estrutura de arquivos organizada

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.