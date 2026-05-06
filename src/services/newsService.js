import axios from 'axios';

const KEY = process.env.REACT_APP_GNEWS_KEY;
const BASE = 'https://gnews.io/api/v4/search';

export const MOCK_CORPORATE = [
  {
    id: 'm1',
    title: 'Boa Safra tem preço-alvo cortado; saiba o porquê',
    source: 'EuQueroInvestir', date: 'Abr 2026', impactType: 'negative', impact: 'Receita',
    url: 'https://euqueroinvestir.com/acoes/boa-safra-tem-preco-alvo-cortado-saiba-o-porque',
  },
  {
    id: 'm2',
    title: 'Boa Safra (SOJA3) registra prejuízo no 4T25',
    source: 'E-Investidor (Estadão)', date: '2025', impactType: 'negative', impact: 'Crédito Rural',
    url: 'https://einvestidor.estadao.com.br/mercado/boa-safra-soja3-4t25-prejuizo-sementes-ceo/',
  },
  {
    id: 'm3',
    title: 'Serasa: 8,3% da população rural estava inadimplente no 3T25',
    source: 'Notícias Agrícolas', date: '3T25', impactType: 'negative', impact: 'Inadimplência',
    url: 'https://www.noticiasagricolas.com.br/noticias/agronegocio/414079-inadimplencia-no-agro-8-3-da-populacao-rural-foi-afetada-no-terceiro-trimestre-de-2025-revela-serasa-experian.html',
  },
];

export const MOCK_CLIMATE = [
  {
    id: 'c1', event: 'Déficit Hídrico Centro-Oeste',
    region: 'MT / GO / MS', severity: 'high', horizon: 'Próximos 30 dias',
    impact: 'Redução de 15-20% no volume plantado de soja na região',
    url: 'https://clima.inmet.gov.br/',
  },
  {
    id: 'c2', event: 'La Niña Ativa — MATOPIBA',
    region: 'MA / PI / BA / TO', severity: 'high', horizon: '3-6 meses',
    impact: 'Revisão de guidance de receita e risco de inadimplência de cooperativas',
    url: 'https://enos.cptec.inpe.br/',
  },
  {
    id: 'c3', event: 'Estresse Hídrico Estrutural',
    region: 'Brasil Central', severity: 'medium', horizon: '12+ meses',
    impact: 'Risco crescente de quebra de safra recorrente nas regiões-core',
    url: 'https://monitoramento.ana.gov.br/',
  },
];

function mapArticle(a, i) {
  return {
    id: `api-${i}`,
    title: a.title,
    source: a.source?.name || 'Fonte',
    date: new Date(a.publishedAt).toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' }),
    impactType: 'neutral',
    impact: 'Notícia',
    url: a.url || null,
  };
}

export async function getCorporateNews() {
  if (!KEY) return MOCK_CORPORATE;
  try {
    const { data } = await axios.get(BASE, {
      params: { q: '"Boa Safra" OR "SOJA3"', lang: 'pt', max: 3, token: KEY },
      timeout: 6000,
    });
    const articles = data.articles?.slice(0, 3).map(mapArticle);
    return articles?.length ? articles : MOCK_CORPORATE;
  } catch {
    return MOCK_CORPORATE;
  }
}

export async function getClimateNews() {
  if (!KEY) return MOCK_CLIMATE;
  try {
    await axios.get(BASE, {
      params: { q: 'clima agronegócio seca safra Brasil', lang: 'pt', max: 3, token: KEY },
      timeout: 6000,
    });
    return MOCK_CLIMATE;
  } catch {
    return MOCK_CLIMATE;
  }
}
