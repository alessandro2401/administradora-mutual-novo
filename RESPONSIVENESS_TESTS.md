# Testes de Responsividade - Administradora Mutual

## Breakpoints Tailwind CSS

O site utiliza os breakpoints padrão do Tailwind CSS:

- **sm:** 640px (smartphones em landscape)
- **md:** 768px (tablets)
- **lg:** 1024px (laptops)
- **xl:** 1280px (desktops)
- **2xl:** 1536px (large desktops)

## Dispositivos para Teste

### Mobile
- [ ] iPhone SE (375x667)
- [ ] iPhone 12/13/14 (390x844)
- [ ] iPhone 14 Pro Max (430x932)
- [ ] Samsung Galaxy S21 (360x800)
- [ ] Samsung Galaxy S21 Ultra (412x915)

### Tablet
- [ ] iPad Mini (768x1024)
- [ ] iPad Air (820x1180)
- [ ] iPad Pro 11" (834x1194)
- [ ] iPad Pro 12.9" (1024x1366)
- [ ] Samsung Galaxy Tab (800x1280)

### Desktop
- [ ] Laptop 13" (1280x800)
- [ ] Laptop 15" (1920x1080)
- [ ] Desktop HD (1920x1080)
- [ ] Desktop 2K (2560x1440)
- [ ] Desktop 4K (3840x2160)

## Checklist de Testes

### Navegação
- [ ] Menu principal visível e funcional
- [ ] Logo clicável e bem posicionado
- [ ] Botões de CTA acessíveis
- [ ] Menu mobile (hamburger) em telas pequenas
- [ ] Dropdown "Sistemas Internos" funcional

### Hero Section
- [ ] Título legível em todas as resoluções
- [ ] Subtítulo com quebra de linha adequada
- [ ] Botões de CTA bem espaçados
- [ ] Imagem de fundo (se houver) responsiva

### Seções de Conteúdo
- [ ] Cards de serviços em grid responsivo (3 cols → 2 cols → 1 col)
- [ ] Timeline das fases bem organizada
- [ ] Estatísticas do mercado legíveis
- [ ] Ícones e textos alinhados

### Depoimentos
- [ ] Grid de 3 colunas em desktop
- [ ] Grid de 2 colunas em tablet
- [ ] 1 coluna em mobile
- [ ] Imagens dos clientes carregando corretamente
- [ ] Texto do depoimento sem overflow

### FAQ
- [ ] Accordion funcionando em todos os dispositivos
- [ ] Texto das perguntas sem quebra inadequada
- [ ] Respostas legíveis e bem formatadas
- [ ] Ícone de chevron animando corretamente

### Formulário de Contato
- [ ] Campos de input com largura adequada
- [ ] Labels e placeholders legíveis
- [ ] Botão de envio acessível
- [ ] Mensagens de erro visíveis
- [ ] Feedback de sucesso/erro claro

### Footer
- [ ] Informações de contato organizadas
- [ ] Links funcionais
- [ ] Copyright visível

## Testes de Interação

### Touch Targets (Mobile)
- [ ] Botões com pelo menos 44x44px
- [ ] Links com espaçamento adequado
- [ ] Campos de formulário fáceis de tocar

### Performance
- [ ] Lazy loading de imagens funcionando
- [ ] Scroll suave entre seções
- [ ] Transições sem lag
- [ ] Tempo de carregamento < 3s

### Acessibilidade
- [ ] Contraste de cores adequado (WCAG AA)
- [ ] Textos legíveis (tamanho mínimo 16px)
- [ ] Alt text em todas as imagens
- [ ] Navegação por teclado funcional

## Ferramentas de Teste

### Online
- Chrome DevTools (Device Mode)
- Firefox Responsive Design Mode
- BrowserStack
- LambdaTest

### Extensões
- Responsive Viewer (Chrome)
- Window Resizer (Chrome/Firefox)

### Comandos Úteis

```bash
# Testar localmente
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## Notas

- Todos os componentes utilizam classes Tailwind responsivas (sm:, md:, lg:, xl:)
- Imagens utilizam lazy loading via OptimizedImage component
- Grid layouts se adaptam automaticamente aos breakpoints
- Formulários têm validação client-side
- Menu mobile será implementado se necessário (verificar em telas < 768px)

## Status dos Testes

**Última atualização:** 09/10/2025  
**Status:** Pendente de testes em dispositivos reais  
**Responsável:** Equipe de Desenvolvimento

