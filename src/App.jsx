import React, { useState } from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  Trophy, 
  Cpu, 
  ShieldCheck, 
  Building2, 
  Droplets, 
  Zap, 
  Stethoscope, 
  Microscope, 
  Plane, 
  ChevronRight,
  Info,
  X,
  Code,
  ExternalLink,
  Users,
  Music,
  Gamepad2,
  Wine,
  Sailboat,
  Utensils,
  Rocket,
  Sparkles,
  Heart,
  Share2,
  QrCode,
  Copy,
  CheckCircle2,
  Github
} from 'lucide-react';

const App = () => {
  const [selectedSpec, setSelectedSpec] = useState(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const specialties = [
    { 
      id: 1,
      icon: Cpu, 
      label: "IA & Big Data", 
      desc: "Algorithmes, Machine Learning",
      details: "L'ingénieur en IA conçoit des systèmes capables de simuler l'intelligence humaine. Il traite des masses de données (Big Data) pour prédire des comportements ou automatiser des tâches complexes dans la santé, la finance ou l'industrie.",
      color: "blue"
    },
    { 
      id: 2,
      icon: ShieldCheck, 
      label: "Cybersécurité", 
      desc: "Défense des réseaux, cryptographie",
      details: "Face à l'augmentation des menaces numériques, cet expert protège les données sensibles des entreprises et des États. Il anticipe les failles, gère les attaques en temps réel et conçoit des architectures réseaux ultra-sécurisées.",
      color: "indigo"
    },
    { 
      id: 3,
      icon: Building2, 
      label: "Génie Civil", 
      desc: "Smart Cities, matériaux bas-carbone",
      details: "Il ne s'agit plus seulement de bâtir, mais de construire durable. L'ingénieur civil de 2026 travaille sur des matériaux innovants (béton décarboné), l'efficacité énergétique des bâtiments et l'urbanisme intelligent des Smart Cities.",
      color: "orange"
    },
    { 
      id: 4,
      icon: Droplets, 
      label: "Eau & Environnement", 
      desc: "Gestion des ressources, stress hydrique",
      details: "Spécialité vitale, elle concerne la gestion du cycle de l'eau, le traitement des déchets et la dépollution. Ces ingénieurs luttent contre la raréfaction des ressources et adaptent nos infrastructures au changement climatique.",
      color: "cyan"
    },
    { 
      id: 5,
      icon: Zap, 
      label: "Énergie & Transition", 
      desc: "Hydrogène, Nucléaire, Renouvelables",
      details: "Au cœur de la souveraineté nationale, cette filière forme des experts capables de piloter le mix énergétique : optimisation du nucléaire, développement de l'éolien offshore, stockage de l'énergie et réseaux électriques intelligents.",
      color: "amber"
    },
    { 
      id: 6,
      icon: Stethoscope, 
      label: "Santé & MedTech", 
      desc: "Robotique chirurgicale, imagerie",
      details: "L'ingénieur biomédical crée le futur de la médecine : organes artificiels, robots chirurgicaux assistés par IA, prothèses connectées ou encore logiciels d'imagerie haute précision pour le diagnostic précoce.",
      color: "rose"
    },
    { 
      id: 7,
      icon: Code, 
      label: "Développement Logiciel", 
      desc: "Fullstack, Cloud, DevOps",
      details: "Il conçoit l'architecture des applications modernes. Du Cloud Computing à la programmation embarquée, il assure la fluidité et la robustesse des services numériques utilisés par des millions d'utilisateurs.",
      color: "emerald"
    },
    { 
      id: 8,
      icon: Trophy, 
      label: "Finance Quantitative", 
      desc: "Modélisation des risques",
      details: "Appelé aussi 'Quants', cet ingénieur utilise les mathématiques de haut niveau pour modéliser les marchés financiers, évaluer les risques et optimiser les investissements via des algorithmes complexes.",
      color: "slate"
    }
  ];

  const postBacConcours = [
    { 
      name: "GEIPI Polytech", 
      desc: "35 écoles publiques, idéal pour la diversité des spécialités.", 
      logo: "https://upload.wikimedia.org/wikipedia/fr/4/45/Logo_GEIPI.PNG",
      url: "https://www.geipi-polytech.org/" 
    },
    { 
      name: "Concours Avenir", 
      desc: "Le plus sélectif du privé (ESILV, ECE, ESTACA).", 
      logo: "https://www.concoursavenir.fr/sites/avenir/files/logo-concours-avenir-png-1-png.png",
      url: "https://www.concoursavenir.fr/" 
    },
    { 
      name: "Concours Advance", 
      desc: "Informatique et Aero (EPITA, IPSA, Sup'Biotech).", 
      logo: "https://www.concours-advance.fr/img/logo-concours-advance.png",
      url: "https://www.concours-advance.fr/" 
    },
    { 
      name: "Puissance Alpha", 
      desc: "Plus de 18 écoles polyvalentes (ESEO, ISEN).", 
      logo: "https://www.puissance-alpha.fr/wp-content/uploads/2021/09/Logo-Puissance-Alpha-HD-1.png",
      url: "https://www.puissance-alpha.fr/" 
    },
    { 
      name: "Réseau INSA", 
      desc: "Admission sur dossier et entretien (Excellence académique).", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Insa.png",
      url: "https://www.groupe-insa.fr/" 
    }
  ];

  const postPrepaConcours = [
    { 
      name: "X-ENS", 
      desc: "Polytechnique et les ENS. Le Graal mathématique.", 
      logo: "https://upload.wikimedia.org/wikipedia/fr/4/4c/Polytechnique_logo.png",
      url: "https://www.polytechnique.edu/" 
    },
    { 
      name: "Mines-Ponts", 
      desc: "Pour les grandes écoles techniques et prestigieuses.", 
      logo: "https://upload.wikimedia.org/wikipedia/fr/c/c2/Logo_Mines_Ponts.png",
      url: "https://www.concours-mines-ponts.fr/" 
    },
    { 
      name: "CentraleSupélec", 
      desc: "Toutes les écoles Centrale (Profils leaders).", 
      logo: "https://upload.wikimedia.org/wikipedia/fr/e/ef/LogoCS.png",
      url: "https://www.concours-centrale-supelec.fr/" 
    },
    { 
      name: "CCINP", 
      desc: "Plus de 30 écoles d'ingénieurs de spécialités publiques.", 
      logo: "https://upload.wikimedia.org/wikipedia/fr/0/03/Logo_concours_CCINP.PNG",
      url: "https://www.concours-inp.fr/" 
    }
  ];

  const postPrepaSchools = [
    { name: "École Polytechnique", url: "https://www.polytechnique.edu/" },
    { name: "CentraleSupélec", url: "https://www.centralesupelec.fr/" },
    { name: "Mines Paris - PSL", url: "https://www.minesparis.psl.eu/" },
    { name: "ENSTA Paris", url: "https://www.ensta-paris.fr/" },
    { name: "IMT Atlantique", url: "https://www.imt-atlantique.fr/" },
    { name: "École des Ponts ParisTech", url: "https://www.ecoledesponts.fr/" },
    { name: "Télécom Paris", url: "https://www.telecom-paris.fr/" },
    { name: "ISAE-SUPAERO", url: "https://www.isae-supaero.fr/" },
    { name: "Arts et Métiers", url: "https://artsetmetiers.fr/" },
    { name: "ESPCI Paris - PSL", url: "https://www.espci.psl.eu/" }
  ];

  const postBacSchools = [
    { name: "INSA Lyon", url: "https://www.insa-lyon.fr/" },
    { name: "UTC Compiègne", url: "https://www.utc.fr/" },
    { name: "INSA Toulouse", url: "https://www.insa-toulouse.fr/" },
    { name: "ESILV", url: "https://www.esilv.fr/" },
    { name: "ECE Paris / Lyon", url: "https://www.ece.fr/" },
    { name: "UTT Troyes", url: "https://www.utt.fr/" },
    { name: "ESIEA", url: "https://www.esiea.fr/" },
    { name: "EPITA", url: "https://www.epita.fr/" },
    { name: "CPE Lyon", url: "https://www.cpe.fr/" },
    { name: "EPF", url: "https://www.epf.fr/" }
  ];

  const assos = [
    { name: "BDE (Bureau des Élèves)", icon: Users, color: "text-blue-600" },
    { name: "Musique & Fanfare", icon: Music, color: "text-indigo-600" },
    { name: "Gaming & E-sport", icon: Gamepad2, color: "text-red-600" },
    { name: "Club Poker", icon: Trophy, color: "text-amber-600" },
    { name: "Oenologie & Gastronomie", icon: Wine, color: "text-rose-600" },
    { name: "Sports (BDS)", icon: Heart, color: "text-green-600" },
    { name: "Voile & Aventure", icon: Sailboat, color: "text-cyan-600" },
    { name: "Cuisine & Partage", icon: Utensils, color: "text-orange-600" }
  ];

  const SectionTitle = ({ children, icon: Icon }) => (
    <div className="flex items-center gap-3 mb-6 border-b-2 border-blue-500 pb-2">
      <Icon className="text-blue-600" size={28} />
      <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">{children}</h2>
    </div>
  );

  const handleCopyCode = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 md:p-8">
      {/* Modal Partage / Export */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6 bg-indigo-700 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Share2 size={24} />
                <h3 className="text-xl font-bold uppercase tracking-tight">Hébergement & QR Code</h3>
              </div>
              <button onClick={() => setShowShareModal(false)} className="hover:bg-white/20 p-2 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>
            
            <div className="p-8 grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-slate-800 flex items-center gap-2 mb-3">
                    <QrCode size={20} className="text-indigo-600"/> 1. Déployer sur Vercel
                  </h4>
                  <ol className="text-xs text-slate-600 space-y-3 list-decimal pl-4">
                    <li>Vérifiez que votre fichier s'appelle bien <strong>App.jsx</strong>.</li>
                    <li>Vérifiez que vous avez bien fait <code>npm install lucide-react</code>.</li>
                    <li>Si l'erreur persiste, essayez de rafraîchir la page Vercel ou de recréer le projet.</li>
                  </ol>
                  <div className="mt-6 bg-slate-100 p-4 rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-slate-300">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://votre-projet.vercel.app`} 
                      alt="QR Code"
                      className="w-24 h-24 mb-2 opacity-80"
                    />
                    <span className="text-[9px] text-slate-400 font-mono italic text-center">Utilisez l'URL fournie par Vercel</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6 border-l border-slate-100 pl-0 md:pl-8">
                <div>
                  <h4 className="font-bold text-slate-800 flex items-center gap-2 mb-2">
                    <Copy size={18} className="text-indigo-600"/> Copier le code complet
                  </h4>
                  <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                    Copiez TOUT le code (y compris l'export final) pour éviter les erreurs de build.
                  </p>
                  <button 
                    onClick={handleCopyCode}
                    className="w-full py-3 rounded-xl font-bold bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    {copied ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                    {copied ? "Code prêt !" : "Copier le code .jsx"}
                  </button>
                </div>
                
                <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                  <p className="text-[10px] text-amber-800 font-medium">
                    <Info size={14} className="inline mr-1 mb-1"/> 
                    <strong>Conseil :</strong> Si Vercel affiche une erreur rouge dans les logs, vérifiez l'onglet "Build Logs" pour voir quel fichier pose problème.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-slate-50 text-center">
              <button 
                onClick={() => setShowShareModal(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-semibold underline"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Spécialité (Existant) */}
      {selectedSpec && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-in zoom-in-95 duration-200">
            <div className={`p-6 bg-${selectedSpec.color}-600 text-white flex justify-between items-center`}>
              <div className="flex items-center gap-3">
                <selectedSpec.icon size={32} />
                <h3 className="text-2xl font-bold">{selectedSpec.label}</h3>
              </div>
              <button onClick={() => setSelectedSpec(null)} className="hover:bg-white/20 p-2 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>
            <div className="p-8">
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {selectedSpec.details}
              </p>
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-slate-400">#FilièreIngénieur</span>
                <button 
                  onClick={() => setSelectedSpec(null)}
                  className={`px-6 py-2 rounded-full font-bold bg-${selectedSpec.color}-100 text-${selectedSpec.color}-700 hover:bg-${selectedSpec.color}-200 transition-colors`}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header Infographique */}
      <header className="max-w-6xl mx-auto bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-8 rounded-3xl shadow-xl mb-10 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 uppercase tracking-tight">Devenir Ingénieur en France</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Guide complet pour s'orienter vers l'excellence scientifique et technique. Édition 2026.
          </p>
        </div>
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
          <GraduationCap size={300} />
        </div>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* SECTION 1: BAC 2026 */}
        <section className="lg:col-span-12 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <SectionTitle icon={BookOpen}>1. Quelles spécialités au Bac en 2026 ?</SectionTitle>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-800 mb-2 text-base md:text-lg">Première (Générale)</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-center gap-2 text-sm"><div className="w-2 h-2 bg-blue-500 rounded-full"/> <strong>Mathématiques</strong> (Indispensable)</li>
                <li className="flex items-center gap-2 text-sm"><div className="w-2 h-2 bg-blue-400 rounded-full"/> Physique-Chimie (Vivement conseillée)</li>
                <li className="flex items-center gap-2 text-sm"><div className="w-2 h-2 bg-blue-300 rounded-full"/> NSI, SI ou SVT</li>
              </ul>
            </div>
            <div className="bg-indigo-50 p-5 rounded-xl border-l-4 border-indigo-500">
              <h3 className="font-bold text-indigo-800 mb-2 text-base md:text-lg">Terminale (Duo Gagnant)</h3>
              <p className="text-xs text-slate-600 mb-3 italic">Les combinaisons les plus recherchées :</p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-center gap-2 font-semibold text-sm"><ChevronRight size={16} className="text-indigo-500"/> Mathématiques + Physique-Chimie</li>
                <li className="flex items-center gap-2 text-sm"><ChevronRight size={16} className="text-indigo-500"/> Mathématiques + NSI (Profil numérique)</li>
                <li className="flex items-center gap-2 text-sm"><ChevronRight size={16} className="text-indigo-500"/> Mathématiques + SI (Profil industriel)</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-5 rounded-xl border-l-4 border-amber-500">
              <h3 className="font-bold text-amber-800 mb-2 text-base md:text-lg">L'atout majeur</h3>
              <p className="text-slate-700 text-sm mb-4 leading-relaxed">
                L'option <strong>Mathématiques Expertes</strong> est un signal fort pour les meilleures prépas et les écoles post-bac sélectives.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-bold text-amber-700 bg-white p-2 rounded shadow-sm uppercase">
                <Info size={14}/> Recommandé pour le Top 10
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: CONCOURS */}
        <section className="lg:col-span-12 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <SectionTitle icon={GraduationCap}>2. Les Concours d'Entrée</SectionTitle>
          <p className="text-slate-500 text-sm mb-6 flex items-center gap-2 italic">
            <ExternalLink size={16} className="text-blue-500"/> Cliquez sur un concours pour accéder à son site officiel.
          </p>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2 uppercase tracking-wide text-sm">
                📂 Voie Post-Bac (Parcoursup)
              </h3>
              <div className="space-y-4">
                {postBacConcours.map((c, i) => (
                  <a 
                    key={i} 
                    href={c.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-xl transition-all border border-transparent hover:border-slate-200 group relative"
                  >
                    <div className="flex-shrink-0 w-24 h-12 bg-white rounded-lg p-1 shadow-sm flex items-center justify-center overflow-hidden border border-slate-100">
                      <img 
                        src={c.logo} 
                        alt={`Logo ${c.name}`} 
                        className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-xs text-blue-800 uppercase tracking-wider mb-1">{c.name}</span>
                      <p className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors pr-6">{c.desc}</p>
                    </div>
                    <ExternalLink size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 opacity-0 group-hover:opacity-100 transition-all group-hover:text-blue-500" />
                  </a>
                ))}
              </div>
            </div>
            <div className="border-l border-slate-100 pl-0 md:pl-10">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2 uppercase tracking-wide text-sm">
                🏛️ Voie Post-Prépa (Bac+2)
              </h3>
              <div className="space-y-4">
                {postPrepaConcours.map((c, i) => (
                  <a 
                    key={i} 
                    href={c.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-xl transition-all border border-transparent hover:border-slate-200 group relative"
                  >
                    <div className="flex-shrink-0 w-24 h-12 bg-white rounded-lg p-1 shadow-sm flex items-center justify-center overflow-hidden border border-slate-100">
                      <img 
                        src={c.logo} 
                        alt={`Logo ${c.name}`} 
                        className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-xs text-slate-800 uppercase tracking-wider mb-1">{c.name}</span>
                      <p className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors pr-6">{c.desc}</p>
                    </div>
                    <ExternalLink size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 opacity-0 group-hover:opacity-100 transition-all group-hover:text-blue-500" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: ECOLES CLASSEMENT */}
        <section className="lg:col-span-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <SectionTitle icon={Trophy}>3. Classements & Écoles Clés</SectionTitle>
          <p className="text-slate-500 text-[10px] mb-4 flex items-center gap-2 italic">
            <ExternalLink size={12} className="text-blue-500"/> Cliquez sur le nom d'une école pour visiter son portail officiel.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-blue-700 mb-3 border-b border-blue-100 pb-1 uppercase text-sm tracking-wider">Top 10 Post-Prépa</h3>
              <ol className="space-y-1 text-sm text-slate-700">
                {postPrepaSchools.map((school, i) => (
                  <li key={i} className="group">
                    <a 
                      href={school.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center py-1 px-2 rounded hover:bg-blue-50 transition-colors"
                    >
                      <span className="font-bold text-blue-800 mr-2">{(i + 1).toString().padStart(2, '0')}.</span>
                      <span className="group-hover:text-blue-600 transition-colors flex-grow">{school.name}</span>
                      <ExternalLink size={10} className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity ml-2" />
                    </a>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="font-bold text-indigo-700 mb-3 border-b border-indigo-100 pb-1 uppercase text-sm tracking-wider">Top 10 Post-Bac</h3>
              <ol className="space-y-1 text-sm text-slate-700">
                {postBacSchools.map((school, i) => (
                  <li key={i} className="group">
                    <a 
                      href={school.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center py-1 px-2 rounded hover:bg-indigo-50 transition-colors"
                    >
                      <span className="font-bold text-indigo-800 mr-2">{(i + 1).toString().padStart(2, '0')}.</span>
                      <span className="group-hover:text-indigo-600 transition-colors flex-grow">{school.name}</span>
                      <ExternalLink size={10} className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity ml-2" />
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* SECTION ECOLES SPECIFIQUES (SIDEBAR) */}
        <section className="lg:col-span-4 bg-slate-800 text-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            ✨ Zoom : Écoles Spécialisées
          </h3>
          <div className="space-y-6">
            <a href="https://www.ipsa.fr/" target="_blank" rel="noopener noreferrer" className="flex gap-4 group cursor-pointer">
              <div className="bg-blue-600 p-2 rounded-lg h-fit flex-shrink-0 group-hover:scale-110 transition-transform"><Plane size={24}/></div>
              <div>
                <h4 className="font-bold text-sm group-hover:text-blue-300 transition-colors">IPSA</h4>
                <p className="text-[11px] text-slate-300">Air et Espace : Aéronautique, Spatial et Drônes.</p>
              </div>
            </a>
            <a href="https://www.supbiotech.fr/" target="_blank" rel="noopener noreferrer" className="flex gap-4 group cursor-pointer">
              <div className="bg-green-600 p-2 rounded-lg h-fit flex-shrink-0 group-hover:scale-110 transition-transform"><Microscope size={24}/></div>
              <div>
                <h4 className="font-bold text-sm group-hover:text-green-300 transition-colors">Sup'Biotech</h4>
                <p className="text-[11px] text-slate-300">Biotechnologies : Santé, Environnement, Agro-alimentaire.</p>
              </div>
            </a>
            <a href="https://www.estaca.fr/" target="_blank" rel="noopener noreferrer" className="flex gap-4 group cursor-pointer">
              <div className="bg-orange-600 p-2 rounded-lg h-fit flex-shrink-0 group-hover:scale-110 transition-transform"><Zap size={24}/></div>
              <div>
                <h4 className="font-bold text-sm group-hover:text-orange-300 transition-colors">ESTACA</h4>
                <p className="text-[11px] text-slate-300">Mobilités : Automobile, Ferroviaire, Aéronautique.</p>
              </div>
            </a>
            <div className="mt-8 p-4 bg-slate-700 rounded-xl border border-slate-600">
              <p className="text-[11px] italic text-slate-400 text-center text-balance leading-relaxed">
                "Plus de 200 écoles existent en France, chacune avec son identité propre. Choisissez celle qui correspond à votre passion !"
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: DOMAINES */}
        <section className="lg:col-span-12 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <SectionTitle icon={Cpu}>4. Spécialités & Débouchés de demain</SectionTitle>
          <p className="text-slate-500 text-sm mb-6 flex items-center gap-2 italic">
            <Info size={16} className="text-blue-500"/> Cliquez sur une spécialité pour découvrir sa présentation détaillée.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {specialties.map((skill) => (
              <button 
                key={skill.id} 
                onClick={() => setSelectedSpec(skill)}
                className="text-left p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-blue-600 hover:text-white transition-all group shadow-sm hover:shadow-md"
              >
                <skill.icon className="mb-3 text-blue-600 group-hover:text-white" size={24} />
                <h4 className="font-bold text-sm mb-1">{skill.label}</h4>
                <p className="text-[10px] opacity-70 leading-tight">{skill.desc}</p>
                <div className="mt-3 flex items-center text-[10px] font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  Voir plus <ChevronRight size={12}/>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* SECTION 5: VIE EN ECOLE */}
        <section className="lg:col-span-12 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-10 overflow-hidden relative">
          <SectionTitle icon={Rocket}>5. La vie en école d'ingénieur</SectionTitle>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Volet Éducatif / Projets */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                🚀 Des projets impressionnants
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                L'école d'ingénieur, c'est avant tout l'apprentissage par l'action : 
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 bg-slate-50 p-3 rounded-xl border-l-4 border-indigo-500">
                  <span className="text-xl">🏎️</span>
                  <div>
                    <h4 className="font-bold text-xs">Formula Student</h4>
                    <p className="text-[11px] text-slate-500 italic">Concevoir une monoplace électrique.</p>
                  </div>
                </li>
                <li className="flex gap-3 bg-slate-50 p-3 rounded-xl border-l-4 border-blue-500">
                  <span className="text-xl">🛡️</span>
                  <div>
                    <h4 className="font-bold text-xs">Hackathons & Cyber-challenges</h4>
                    <p className="text-[11px] text-slate-500 italic">Défis CTF en sécurité informatique.</p>
                  </div>
                </li>
                <li className="flex gap-3 bg-slate-50 p-3 rounded-xl border-l-4 border-blue-400">
                  <span className="text-xl">🛰️</span>
                  <div>
                    <h4 className="font-bold text-xs">Nano-Satellites</h4>
                    <p className="text-[11px] text-slate-500 italic">Projets spatiaux avec le CNES.</p>
                  </div>
                </li>
                <li className="flex gap-3 bg-slate-50 p-3 rounded-xl border-l-4 border-emerald-500">
                  <span className="text-xl">🤖</span>
                  <div>
                    <h4 className="font-bold text-xs">Coupe de Robotique</h4>
                    <p className="text-[11px] text-slate-500 italic">Développement de robots autonomes.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Volet Associatif */}
            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-4">
                🎉 Vie étudiante
              </h3>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {assos.map((asso, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg border border-slate-100 hover:shadow-sm transition-shadow">
                    <asso.icon className={`${asso.color} flex-shrink-0`} size={18} />
                    <span className="text-[11px] font-medium text-slate-700 leading-tight">{asso.name}</span>
                  </div>
                ))}
              </div>
              
              {/* Call to Action */}
              <div className="mt-auto bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-2xl text-white shadow-lg relative overflow-hidden group">
                <div className="relative z-10 text-center">
                  <Sparkles className="mx-auto mb-2 text-yellow-300 animate-pulse" size={24} />
                  <p className="text-sm font-bold mb-1">Tu as une idée précise ?</p>
                  <p className="text-xs text-blue-100 italic text-balance px-4">
                    "Si l'association de tes rêves n'existe pas, tu peux la créer !"
                  </p>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-125 transition-transform">
                  <Users size={120} />
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <footer className="max-w-6xl mx-auto flex flex-col items-center gap-6 py-10">
        <button 
          onClick={() => setShowShareModal(true)}
          className="flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-indigo-700 hover:scale-105 transition-all"
        >
          <Share2 size={20} />
          DÉPLOYER / GÉNÉRER QR CODE
        </button>
        <p className="text-slate-400 text-[10px] italic">© 2026 - Forum de l'Orientation - Fiche réalisée pour le stand Filière Ingénieur</p>
      </footer>
    </div>
  );
};

export default App;