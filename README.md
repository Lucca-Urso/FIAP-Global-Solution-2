# Orbit Sentinel

**Observando hoje para proteger o amanhã**

Uma plataforma inteligente de monitoramento climático inspirada em tecnologias orbitais de observação da Terra.

## Sobre o Projeto

O Orbit Sentinel é uma plataforma de monitoramento ambiental que visa prevenir desastres naturais através do acompanhamento contínuo de condições climáticas. A solução utiliza conceitos de sensoriamento orbital para identificar riscos e emitir alertas preventivos.

### Principais Funcionalidades

- **Monitoramento em Tempo Real**: Acompanhamento 24/7 de condições ambientais
- **Alertas Inteligentes**: Notificações automáticas para enchentes, queimadas, ondas de calor e baixa umidade
- **Dashboard Completo**: Visualização de indicadores ambientais e riscos
- **Histórico de Medições**: Acompanhamento temporal de dados
- **Apoio à Decisão**: Informações estratégicas para órgãos responsáveis

### Eventos Monitorados

- Enchentes
- Queimadas
- Ondas de calor
- Baixa umidade
- Riscos ambientais

## Tecnologias Utilizadas

- **React Router DOM** - Navegação entre páginas
- **Tailwind CSS** - Estilização utility-first
- **Vite** - Build tool e dev server
- **JavaScript (ES6+)** - Linguagem principal

## Estrutura do Projeto

```
src/
├── assets/              # Imagens e ícones
├── components/          # Componentes reutilizáveis
│   ├── AlertCard.jsx       # Card de alertas
│   ├── ClimateCard.jsx     # Card de dados climáticos
│   ├── Contact.jsx      # Seções de call-to-action
│   ├── Footer.jsx          # Rodapé
│   ├── Header.jsx          # Header
│   ├── Navbar.jsx          # Barra de navegação
│   ├── RiskIndicator.jsx   # Indicador de riscos
│   ├── SectionTitle.jsx    # Títulos de seções
│   └── SensorCard.jsx      # Card de sensores
├── pages/               # Páginas da aplicação
│   ├── About.jsx           # Sobre
│   ├── Alerts.jsx          # Alertas
│   ├── Contributor.jsx     # Contribua
│   ├── Home.jsx            # Home
│   ├── Impact.jsx          # Impacto
│   ├── Monitoring.jsx      # Monitoramento (dashboard)
│   └── Technology.jsx      # Tecnologia
├── services/            # Serviços de API simulada
│   └── api.js
├── data/                # Dados JSON locais
│   ├── alerts-data.json    # Dados de alertas
│   ├── climate-data.json   # Dados climáticos
│   └── sensors-data.json   # Dados de sensores
├── App.jsx              # Componente raiz com rotas
├── main.jsx             # Ponto de entrada
└── index.css            # Estilos globais + Tailwind
```

## Como Executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Lucca-Urso/Urso.git
cd FIAP-Global-Solution-2
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse a aplicação em `http://localhost:5173`

### Build de Produção

```bash
npm run build
```

Os arquivos de produção serão gerados na pasta `dist/`.

### Preview da Build

```bash
npm run preview
```

## Design System

### Cores

- **Primária**: `#000000` (Preto espacial)
- **Secundária**: `#4F46E5` (Azul tecnológico)
- **Sucesso**: `#22C55E` (Verde)
- **Atenção**: `#F59E0B` (Amarelo)
- **Crítico**: `#EF4444` (Vermelho)
- **Informação**: `#38BDF8` (Azul claro)

### Tipografia

- **Fonte Principal**: Inter (Google Fonts)
- **Hierarquia**: H1 (48px), H2 (36px), H3 (24px), Corpo (16px)

## Responsividade

A aplicação é totalmente responsiva com breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Fluxo de Dados

Os dados são carregados via Promises que simulam chamadas de API:

1. Componente chama `api.getClimateData()` (ou outro serviço)
2. Promise com delay simula latência de rede
3. Dados são carregados do JSON local
4. Estado é atualizado e componente renderiza

## Autores

- Lucca Ghiraldi Urso - RM566739
- Gustavo Moretim Canzi - RM567683
- Gustavo Castilho Gonçalves - RM566970
- Eduarda da Silva Brito - RM567347

---

**Orbit Sentinel** - Observando hoje para proteger o amanhã