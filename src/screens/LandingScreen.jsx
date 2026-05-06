import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart, BarChart2, BellRing, BookMarked, ArrowRight, Briefcase, Sparkles } from 'lucide-react';
import { useFavoritesContext } from '../context/FavoritesContext';
import { useNavigationContext } from '../context/NavigationContext';
import { AGRO_COMPANIES } from '../data/companies';
import { SECTORS } from '../data/sectors';
import { RatingBadge } from '../components/ui/RatingBadge';
import { CRLogo } from '../components/ui/CRLogo';

export function LandingScreen({ onEnter, onGoToDashboard }) {
  const carteiraRef = useRef(null);
  const { favorites, toggleFavorite } = useFavoritesContext();
  const nav = useNavigationContext();

  const favoritedCompanies = AGRO_COMPANIES.filter(c => favorites.includes(c.id));

  return (
    <div style={{ backgroundColor: '#020202', minHeight: '100vh', color: '#F2F2F2', fontFamily: 'Inter, sans-serif' }}>

      {/* ── Hero ── */}
      <section style={{
        minHeight: 'calc(100vh - 58px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
        background: 'radial-gradient(circle at 1px 1px, rgba(251,193,2,0.05) 1px, transparent 0) center / 28px 28px, radial-gradient(ellipse 80% 60% at 50% 42%, rgba(251,193,2,0.1) 0%, transparent 70%)',
      }}>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'rgba(255,255,255,0.04)' }} />

        <div style={{ textAlign: 'center', maxWidth: '900px', padding: 'clamp(32px, 6vw, 64px) clamp(16px, 4vw, 24px)', position: 'relative', zIndex: 1, width: '100%' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Badge */}
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              marginBottom: 'clamp(16px, 4vw, 28px)',
              backgroundColor: 'rgba(251,193,2,0.08)',
              border: '1px solid rgba(251,193,2,0.2)',
              borderRadius: '20px', padding: '5px 14px',
              fontSize: '11px', color: '#FBC102', fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#FBC102', flexShrink: 0, animation: 'pulse-dot 2s infinite' }} />
              Análise Climática · Empresas B3
            </span>

            <h1 style={{
              fontSize: 'clamp(32px, 8vw, 62px)', fontWeight: 800,
              color: '#FBC102', marginBottom: '14px',
              letterSpacing: '-0.035em', lineHeight: 1.08, margin: '0 0 14px',
            }}>
              ClimateRisk Analytics
            </h1>

            <p style={{
              fontSize: 'clamp(14px, 3.5vw, 17px)', color: '#777', lineHeight: 1.7,
              maxWidth: '520px', margin: '0 auto 40px',
            }}>
              Monitore como fatores climáticos impactam seus investimentos.<span className="cr-hero-br"><br /></span>{' '}Escolha por onde começar.
            </p>

            {/* ── 3 Module Cards ── */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: 14,
              maxWidth: 860,
              margin: '0 auto',
              textAlign: 'left',
              width: '100%',
            }}>
              {/* Card 1: Análise Empresas B3 — DISPONÍVEL */}
              <button
                onClick={onEnter}
                style={{
                  background: '#1F1F1F',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 16, padding: '28px 24px',
                  cursor: 'pointer', textAlign: 'left',
                  transition: 'border-color 0.18s, background 0.18s, transform 0.18s',
                  position: 'relative',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,200,187,0.4)'; e.currentTarget.style.background = '#282828'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = '#1F1F1F'; e.currentTarget.style.transform = 'none'; }}
              >
                <span style={{ position: 'absolute', top: 16, right: 16, fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', color: '#00C8BB', background: 'rgba(0,200,187,0.1)', border: '1px solid rgba(0,200,187,0.25)', borderRadius: 20, padding: '3px 10px' }}>
                  DISPONÍVEL
                </span>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(0,200,187,0.1)', border: '1px solid rgba(0,200,187,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <BarChart2 size={22} color="#00C8BB" />
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#00C8BB', margin: '0 0 10px' }}>Análise Empresas B3</h3>
                <p style={{ color: '#666', fontSize: 13, lineHeight: 1.65, margin: '0 0 22px' }}>
                  Explore riscos climáticos por setor e empresa listada na B3.
                </p>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#00C8BB', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                  Acessar <ArrowRight size={13} />
                </span>
              </button>

              {/* Card 2: Minha Carteira — DISPONÍVEL */}
              <button
                onClick={() => nav.goToFavorites()}
                style={{
                  background: '#1F1F1F',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 16, padding: '28px 24px',
                  cursor: 'pointer', textAlign: 'left',
                  transition: 'border-color 0.18s, background 0.18s, transform 0.18s',
                  position: 'relative',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,210,63,0.4)'; e.currentTarget.style.background = '#282828'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = '#1F1F1F'; e.currentTarget.style.transform = 'none'; }}
              >
                <span style={{ position: 'absolute', top: 16, right: 16, fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', color: '#FFD23F', background: 'rgba(255,210,63,0.08)', border: '1px solid rgba(255,210,63,0.25)', borderRadius: 20, padding: '3px 10px' }}>
                  DISPONÍVEL
                </span>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(255,210,63,0.1)', border: '1px solid rgba(255,210,63,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <Briefcase size={22} color="#FFD23F" />
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#FFD23F', margin: '0 0 10px' }}>Minha Carteira</h3>
                <p style={{ color: '#666', fontSize: 13, lineHeight: 1.65, margin: '0 0 22px' }}>
                  Analise o risco climático consolidado da sua carteira de investimentos.
                </p>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#FFD23F', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                  Acessar <ArrowRight size={13} />
                </span>
              </button>

              {/* Card 3: Em Breve */}
              <div
                style={{ background: '#1F1F1F', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '28px 24px', position: 'relative', transition: 'border-color 0.18s, background 0.18s, transform 0.18s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(220,165,0,0.4)'; e.currentTarget.style.background = '#282828'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = '#1F1F1F'; e.currentTarget.style.transform = 'none'; }}
              >
                <span style={{ position: 'absolute', top: 16, right: 16, fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', color: '#DCA500', background: 'rgba(220,165,0,0.1)', border: '1px solid rgba(220,165,0,0.3)', borderRadius: 20, padding: '3px 10px' }}>
                  EM BREVE
                </span>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(220,165,0,0.1)', border: '1px solid rgba(220,165,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <Sparkles size={22} color="#DCA500" />
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#DCA500', margin: '0 0 4px' }}>Comparação entre empresas</h3>
                <p style={{ color: '#9A7200', fontSize: 11, fontWeight: 600, letterSpacing: '0.05em', margin: '0 0 10px' }}>Em breve</p>
                <p style={{ color: '#666', fontSize: 13, lineHeight: 1.65, margin: '0 0 22px' }}>
                  Nova funcionalidade em desenvolvimento.
                </p>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#DCA500', display: 'inline-flex', alignItems: 'center', gap: 5, opacity: 0.6 }}>
                  Em breve
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(26,26,29,0.8)' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto', padding: '22px 16px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
            {[
              { value: '1', label: 'Empresa analisada' },
              { value: '7', label: 'Setores cobertos' },
              { value: '27', label: 'Estados mapeados' },
            ].map(({ value, label }, i, arr) => (
              <React.Fragment key={label}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 30, fontWeight: 800, color: '#FBC102', letterSpacing: '-0.04em', lineHeight: 1 }}>{value}</div>
                  <div style={{ fontSize: 10, color: '#555', marginTop: 5, letterSpacing: '0.07em', textTransform: 'uppercase', fontWeight: 600 }}>{label}</div>
                </div>
                {i < arr.length - 1 && (
                  <div className="cr-stat-divider" style={{ width: 1, height: 36, background: 'rgba(255,255,255,0.07)', flexShrink: 0 }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── O Problema ── */}
      <section className="cr-section" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <span style={{ display: 'block', fontSize: 10, fontWeight: 700, color: '#FBC102', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>Por que importa</span>
            <h2 style={{ fontSize: '30px', fontWeight: 700, marginBottom: '10px', color: '#F2F2F2', letterSpacing: '-0.02em' }}>
              O Problema
            </h2>
            <p style={{ color: '#666', fontSize: '15px', maxWidth: 480, margin: '0 auto' }}>
              O mercado financeiro ainda não tem visibilidade clara do risco climático por empresa
            </p>
          </div>
          <div className="grid-problem">
            {[
              {
                icon: <BarChart2 size={22} color="#FBC102" />,
                title: 'Informação dispersa',
                desc: 'Dados climáticos e financeiros existem, mas estão separados, em fontes diferentes, sem cruzamento analítico.',
              },
              {
                icon: <BookMarked size={22} color="#FBC102" />,
                title: 'Time enxuto',
                desc: 'Analistas de risco não têm tempo para monitorar variáveis climáticas de cada empresa no portfólio.',
              },
              {
                icon: <BellRing size={22} color="#FBC102" />,
                title: 'Risco invisível',
                desc: 'Sem síntese clara, o risco climático fica fora dos modelos de precificação e das teses de investimento.',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{
                backgroundColor: '#1F1F1F',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '14px', padding: '28px 24px',
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: 'rgba(251,193,2,0.08)',
                  border: '1px solid rgba(251,193,2,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '18px',
                }}>
                  {icon}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '10px', color: '#F2F2F2' }}>{title}</h3>
                <p style={{ color: '#666', lineHeight: 1.65, fontSize: '14px', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Como funciona ── */}
      <section id="como-funciona" className="cr-section" style={{ backgroundColor: 'rgba(31,31,31,0.6)', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <span style={{ display: 'block', fontSize: 10, fontWeight: 700, color: '#FBC102', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>O processo</span>
            <h2 style={{ fontSize: '30px', fontWeight: 700, marginBottom: '10px', color: '#F2F2F2', letterSpacing: '-0.02em' }}>
              Como funciona
            </h2>
            <p style={{ color: '#666', fontSize: '15px' }}>
              5 camadas de análise, do setor ao alerta
            </p>
          </div>
          <div className="steps-row">
            {[
              { step: '01', label: 'Setor' },
              { step: '02', label: 'Empresa' },
              { step: '03', label: 'Exposição Geográfica' },
              { step: '04', label: 'Risco Climático' },
              { step: '05', label: 'Alerta Acionável' },
            ].map(({ step, label }, i, arr) => (
              <React.Fragment key={step}>
                <div style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  backgroundColor: '#1F1F1F',
                  border: '1px solid rgba(251,193,2,0.18)',
                  borderRadius: '10px', padding: '18px 20px', minWidth: '130px',
                }}>
                  <span style={{ fontSize: '10px', color: '#FBC102', fontWeight: 700, marginBottom: '6px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                    {step}
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#bbb', textAlign: 'center', lineHeight: 1.3 }}>
                    {label}
                  </span>
                </div>
                {i < arr.length - 1 && (
                  <div className="steps-connector" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── Carteira de Favoritos ── */}
      <section id="carteira" ref={carteiraRef} className="cr-section">
        <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <span style={{ display: 'block', fontSize: 10, fontWeight: 700, color: '#FBC102', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>Minha carteira</span>
            <h2 style={{ fontSize: '30px', fontWeight: 700, marginBottom: '8px', color: '#eef2f7', letterSpacing: '-0.02em' }}>
              Sua Carteira
            </h2>
            <p style={{ color: '#555', fontSize: '15px', margin: 0 }}>Empresas que você está monitorando</p>
          </div>

          {favoritedCompanies.length === 0 ? (
            <div style={{
              textAlign: 'center', padding: '64px 24px',
              backgroundColor: '#1F1F1F',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '14px',
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: 12,
                background: 'rgba(251,193,2,0.07)',
                border: '1px solid rgba(251,193,2,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 16px',
              }}>
                <Briefcase size={22} color="#7a6010" />
              </div>
              <p style={{ color: '#555', marginBottom: '24px', fontSize: '14px', lineHeight: 1.6 }}>
                Você ainda não adicionou empresas à sua carteira.
              </p>
              <button
                onClick={() => nav.goToFavorites()}
                style={{
                  background: 'rgba(251,193,2,0.08)',
                  color: '#FBC102', border: '1px solid rgba(251,193,2,0.22)',
                  borderRadius: '8px', padding: '10px 24px',
                  fontWeight: 600, fontSize: '13px', cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(251,193,2,0.15)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(251,193,2,0.08)'}
              >
                Ir para Minha Carteira
              </button>
            </div>
          ) : (
            <div className="grid-favorites">
              {favoritedCompanies.map((company, i) => (
                <motion.div
                  key={company.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  onClick={() => onGoToDashboard(company.id)}
                  style={{
                    backgroundColor: '#1F1F1F',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '12px', padding: '18px',
                    cursor: 'pointer', position: 'relative',
                    transition: 'border-color 0.18s, background 0.18s',
                  }}
                  onHoverStart={e => { e.target.style.borderColor = 'rgba(251,193,2,0.3)'; }}
                  onHoverEnd={e => { e.target.style.borderColor = 'rgba(255,255,255,0.06)'; }}
                >
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleFavorite(company.id); }}
                    style={{
                      position: 'absolute', top: '10px', right: '10px',
                      background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.18)',
                      borderRadius: 7, cursor: 'pointer',
                      color: '#ef4444', padding: '4px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      lineHeight: 1,
                    }}
                    title="Remover da carteira"
                  >
                    <Heart size={13} fill="#ef4444" />
                  </button>
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '9px',
                    backgroundColor: company.accentColor ? `${company.accentColor}18` : 'rgba(251,193,2,0.1)',
                    border: `1px solid ${company.accentColor ? `${company.accentColor}30` : 'rgba(251,193,2,0.18)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '13px', fontWeight: 800,
                    color: company.accentColor || '#FBC102',
                    marginBottom: '12px',
                  }}>
                    {company.initials}
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#dde6f0', marginBottom: '3px', paddingRight: 22 }}>
                    {company.label}
                  </div>
                  <div style={{ fontSize: '11px', color: '#555', marginBottom: '12px', fontFamily: 'monospace' }}>
                    {company.ticker}
                  </div>
                  {company.rating && <RatingBadge rating={company.rating} />}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Setores cobertos ── */}
      <section id="setores" className="cr-section" style={{ backgroundColor: 'rgba(31,31,31,0.6)', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <span style={{ display: 'block', fontSize: 10, fontWeight: 700, color: '#FBC102', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>Cobertura</span>
            <h2 style={{ fontSize: '30px', fontWeight: 700, marginBottom: '10px', color: '#eef2f7', letterSpacing: '-0.02em' }}>
              Setores cobertos
            </h2>
            <p style={{ color: '#555', fontSize: '15px' }}>
              Cobertura atual e expansão planejada
            </p>
          </div>
          <div className="grid-sectors-landing">
            {SECTORS.map(sector => (
              <div
                key={sector.id}
                style={{
                  backgroundColor: sector.available ? 'rgba(251,193,2,0.06)' : '#1F1F1F',
                  border: `1px solid ${sector.available ? 'rgba(251,193,2,0.22)' : 'rgba(255,255,255,0.06)'}`,
                  borderRadius: '12px', padding: '24px 18px', textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '30px', marginBottom: '10px' }}>{sector.icon}</div>
                <div style={{
                  fontSize: '14px', fontWeight: 600, marginBottom: '10px',
                  color: sector.available ? '#FBC102' : '#aaa',
                }}>
                  {sector.label}
                </div>
                <span style={{
                  display: 'inline-block',
                  fontSize: '11px', fontWeight: 500,
                  color: sector.available ? '#00C8BB' : '#4d6080',
                  backgroundColor: sector.available ? 'rgba(0,200,187,0.1)' : 'rgba(100,116,139,0.08)',
                  border: `1px solid ${sector.available ? 'rgba(0,200,187,0.22)' : 'rgba(100,116,139,0.1)'}`,
                  borderRadius: '10px', padding: '2px 9px',
                }}>
                  {sector.available && (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                      <span className="animate-pulse-dot" style={{
                        width: '5px', height: '5px', borderRadius: '50%',
                        backgroundColor: '#00C8BB', display: 'inline-block',
                      }} />
                      {sector.badge}
                    </span>
                  )}
                  {!sector.available && sector.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="cr-section">
        <div style={{
          maxWidth: '620px', margin: '0 auto', textAlign: 'center',
          background: '#1F1F1F',
          border: '1px solid rgba(251,193,2,0.2)',
          borderRadius: '18px', padding: '52px 40px',
        }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '14px', lineHeight: 1.25, color: '#F2F2F2', letterSpacing: '-0.02em' }}>
            Pronto para começar a análise?
          </h2>
          <p style={{ color: '#666', marginBottom: '32px', fontSize: '15px', lineHeight: 1.65 }}>
            Explore a análise completa da Boa Safra Sementes e veja como conectamos clima e risco financeiro.
          </p>
          <button
            onClick={onEnter}
            style={{
              background: '#FBC102',
              color: '#111', border: 'none', borderRadius: '10px',
              padding: '13px 36px', fontWeight: 800, fontSize: '15px', cursor: 'pointer',
              transition: 'background 0.15s, transform 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#ffd040'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#FBC102'; e.currentTarget.style.transform = 'none'; }}
          >
            Começar Análise
          </button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.04)',
        padding: '28px 24px', textAlign: 'center',
        color: '#444', fontSize: '13px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: '8px' }}>
          <CRLogo size={22} />
          <span style={{ fontWeight: 800, fontSize: '15px', color: '#888', letterSpacing: '-0.3px' }}>
            Climate<span style={{ color: '#FBC102' }}>Risk</span>
          </span>
        </div>
        Desenvolvido para XP Investimentos · 2026
      </footer>

    </div>
  );
}
