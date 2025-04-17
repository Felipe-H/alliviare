import Image from "next/image"
import Link from "next/link"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import {
  Heart,
  Brain,
  Frown,
  Angry,
  Moon,
  CloudRain,
  Sparkles,
  MessageCircle,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  ArrowUp,
} from "lucide-react"

export default function Home() {

  const convenios = [
    "convenio1.png",
    "convenio2.png",
    "convenio3.png",
    "convenio4.png",
    "convenio5.png",
    "convenio6.png", // novo
  ];
  return (
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-rose-100">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 relative">
                <Heart className="h-8 w-8 text-rose-600 absolute" />
                <Heart className="h-8 w-8 text-rose-600 absolute transform translate-x-2 translate-y-2 opacity-50" />
              </div>
              <span className="text-2xl font-serif italic text-rose-700">Alliviare</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-rose-900 hover:text-rose-600 font-medium transition">
                Início
              </Link>
              <Link href="#sobre" className="text-rose-900 hover:text-rose-600 font-medium transition">
                Sobre nós
              </Link>
              <Link href="#tratamentos" className="text-rose-900 hover:text-rose-600 font-medium transition">
                Tratamentos
              </Link>
              <Link href="#profissionais" className="text-rose-900 hover:text-rose-600 font-medium transition">
                Profissionais
              </Link>
              <Link href="#contato" className="text-rose-900 hover:text-rose-600 font-medium transition">
                Contato
              </Link>
            </nav>

            <Button className="bg-rose-600 hover:bg-rose-700 text-white rounded-full hidden md:flex">
              Agende sua consulta
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-rose-900"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </header>

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative">
            <div className="absolute inset-0 from-rose-100/90 to-rose-200/90 z-10" />
            <div className="relative h-[600px] overflow-hidden">
              <Image
                  src="/images/maos.png"
                  alt="Mãos unidas representando apoio e cuidado"
                  width={2000}
                  height={1200}
                  className="object-cover w-full h-full"
                  priority
              />
            </div>

            <div className="absolute inset-0 flex items-center z-20">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl">
                  <h1 className="text-5xl md:text-6xl font-serif font-bold text-rose-800 mb-4">Clínica Alliviare</h1>
                  <p className="text-xl md:text-2xl text-rose-900 mb-8 font-medium">
                    Psicologia especializada para mulheres, com abordagens personalizadas para transformar sua vida.
                  </p>
                  <Button className="bg-rose-600 hover:bg-rose-700 text-white rounded-full px-8 py-6 text-lg shadow-lg flex items-center gap-2 group">
                    <span>Agende uma consulta</span>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Tratamentos Section */}
          <section id="tratamentos" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-rose-800 mb-4">Nossos Tratamentos</h2>
                <p className="text-rose-600 max-w-2xl mx-auto">
                  Oferecemos suporte especializado para diversas condições emocionais e psicológicas
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  { icon: <Heart className="h-8 w-8" />, name: "Síndrome Burnout" },
                  { icon: <CloudRain className="h-8 w-8" />, name: "Tristeza Profunda" },
                  { icon: <Sparkles className="h-8 w-8" />, name: "Ansiedade" },
                  { icon: <Angry className="h-8 w-8" />, name: "Irritabilidade" },
                  { icon: <Frown className="h-8 w-8" />, name: "Depressão" },
                  { icon: <Brain className="h-8 w-8" />, name: "Pensamentos Suicidas" },
                  { icon: <Moon className="h-8 w-8" />, name: "Insônia" },
                  { icon: <MessageCircle className="h-8 w-8" />, name: "Relacionamentos" },
                  { icon: <Heart className="h-8 w-8" />, name: "Autoestima" },
                  { icon: <Sparkles className="h-8 w-8" />, name: "Desmotivação" },
                ].map((item, index) => (
                    <Card key={index} className="bg-rose-50 border-rose-100 hover:shadow-md transition group">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mb-4 group-hover:bg-rose-200 transition text-rose-600">
                          {item.icon}
                        </div>
                        <h3 className="font-medium text-rose-900">{item.name}</h3>
                      </CardContent>
                    </Card>
                ))}
              </div>
            </div>
          </section>

          {/* 5 Motivos Section */}
          <section className="py-20 bg-gradient-to-r from-rose-300 to-rose-400 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <Image
                  src="/placeholder.svg?height=1000&width=1000"
                  alt=""
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full"
              />
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="hidden md:block">
                  <Image
                      src="/images/sentimento.png"
                      alt=""
                      width={600}
                      height={600}
                      className="object-cover rounded-lg shadow-lg"
                  />
                </div>

                <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">5 Motivos para</h2>
                  <p className="text-xl text-white mb-8 uppercase tracking-wider font-medium">PARAR, PENSAR E MUDAR</p>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        01
                      </div>
                      <p className="text-white">
                        Você aceita tudo calada, não consegue se posicionar, costuma se anular nas suas relações.
                      </p>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        02
                      </div>
                      <p className="text-white">
                        Não se sente valorizada, insiste em uma relação falida por medo de ficar sozinha.
                      </p>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        03
                      </div>
                      <p className="text-white">Possui um grande potencial mas sempre se sabota por medo ou timidez.</p>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        04
                      </div>
                      <p className="text-white">
                        Não confia nas pessoas, vive com pensamentos negativos em relação a si própria e aos outros.
                      </p>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        05
                      </div>
                      <p className="text-white">
                        Não consegue se controlar em relação a gastos e a comida, vive endividada e acima do peso.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 py-6 text-lg shadow-lg flex items-center gap-2 group">
                      <span>Agende uma consulta</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-rose-500 to-rose-600 text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Posso Ajudar Você!</h2>
                <p className="text-lg mb-8 text-rose-100">
                  Se você está sentindo um desses sintomas ou passando por alguma dessas situações, saiba que podemos te
                  ajudar a transformar a sua vida de maneira significativa.
                </p>
                <Button className="bg-white text-rose-600 hover:bg-rose-100 rounded-full px-8 py-6 text-lg shadow-lg flex items-center gap-2 mx-auto group">
                  <span>Agende uma consulta</span>
                </Button>
              </div>
            </div>
          </section>

          {/* Abordagens Section */}
          <section id="sobre" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-rose-800 mb-4">Nossas Abordagens</h2>
                <p className="text-rose-600 max-w-2xl mx-auto">Conheça nossas principais metodologias de tratamento</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-rose-50 border-rose-100 hover:shadow-md transition">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-medium text-rose-800 mb-4">Terapia Comportamental Behaviorista</h3>
                    <p className="text-rose-700 mb-4">
                      Também conhecida como Terapia Behaviorista (do inglês behavior, que significa "comportamento"), essa
                      psicoterapia busca desvendar como as condutas do paciente são afetadas por determinados estímulos.
                    </p>
                    <Link href="#" className="text-rose-600 hover:text-rose-800 font-medium inline-flex items-center">
                      Ler mais <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>

                <Card className="bg-rose-50 border-rose-100 hover:shadow-md transition">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-medium text-rose-800 mb-4">Terapia Cognitiva Comportamental</h3>
                    <p className="text-rose-700 mb-4">
                      A Terapia Cognitivo Comportamental ou TCC é uma abordagem da psicoterapia baseada na combinação de
                      conceitos do Behaviorismo radical com teorias cognitivas.
                    </p>
                    <Link href="#" className="text-rose-600 hover:text-rose-800 font-medium inline-flex items-center">
                      Ler mais <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>

                <Card className="bg-rose-50 border-rose-100 hover:shadow-md transition">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-medium text-rose-800 mb-4">Gestalt Terapia</h3>
                    <p className="text-rose-700 mb-4">
                      Gestalt é uma abordagem psicoterápica centrada no cliente. Essa abordagem ajuda os clientes a se
                      concentrarem no presente e entenderem o que realmente está acontecendo em suas vidas.
                    </p>
                    <Link href="#" className="text-rose-600 hover:text-rose-800 font-medium inline-flex items-center">
                      Ler mais <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Profissionais Section */}
          <section id="profissionais" className="py-20 bg-rose-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-rose-800 mb-4">Nossas Profissionais</h2>
                <p className="text-rose-600 max-w-2xl mx-auto">
                  Conheça nossa equipe de especialistas dedicadas ao seu bem-estar
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Bárbara Soares",
                    style: "background-color: black",
                    image: "/images/barbara.png",
                    role: "Especialista Clínica em terapia cognitivo comportamental",
                    patients: "Atendimento adolescentes e adultos",
                    quote:
                        '"O primeiro passo é aceitar que podemos sim, sair desse ciclo de sofrimento, assumindo o controle de nossas vidas."',
                  },
                  {
                    name: "Eva Matte",
                    image: "/images/eva2.png",
                    role: "Neuropsicóloga e Especialista em terapia cognitivo comportamental",
                    patients: "Atendimento adultos e idosos",
                    quote:
                        '"Conheça todas as teorias, domine as técnicas, mas ao tocar uma alma humana, seja apenas outra alma humana." Carl Jung',
                  },
                  {
                    name: "Daniela Souto",
                    image: "/images/daniela.png",
                    role: "Especialista Clínica em terapia comportamental",
                    patients: "Atendimento adultos e idosos",
                    quote: '"Seu corpo ouve tudo que sua mente diz."',
                  },
                ].map((professional, index) => (
                    <Card key={index} className="bg-white border-rose-100 hover:shadow-md transition overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative h-[350px]overflow-hidden">

                        <Image
                              src={professional.image || "/placeholder.svg"}
                              alt={professional.name}
                              width={400}
                              height={400}
                              className="object-cover w-full h-full"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-rose-800/70 to-transparent flex items-end">
                            <div className="p-6 text-white">
                              <h3 className="text-xl font-medium">{professional.name}</h3>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-rose-800 font-medium mb-1">{professional.role}</p>
                          <p className="text-rose-600 text-sm mb-4">{professional.patients}</p>
                          <p className="text-rose-700 italic">{professional.quote}</p>
                        </div>
                      </CardContent>
                    </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-rose-800 mb-4">Depoimentos</h2>
                <p className="text-rose-600 max-w-2xl mx-auto">O que nossas pacientes dizem sobre nós</p>
              </div>

              <div className="max-w-4xl mx-auto relative">
                <div className="bg-rose-50 p-8 md:p-12 rounded-2xl border border-rose-100 relative">
                  <svg
                      className="h-16 w-16 text-rose-200 absolute top-6 left-6 opacity-50"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  <div className="relative z-10">
                    <p className="text-lg md:text-xl text-rose-800 mb-6 italic">
                      "A terapia é essencial na minha vida. Ajudou muito no autoconhecimento, em saber respeitar limites,
                      e mais. Por exemplo, quando tentava algo como uma prova, caso não tivesse êxito, sentia-me
                      deprimida. Agora, estou mais confiante, sabendo que tudo é aprendizado e, oportunidade de melhorar!"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-rose-200 flex items-center justify-center text-rose-600 font-medium mr-4">
                        M
                      </div>
                      <div>
                        <h4 className="font-medium text-rose-800">Marília</h4>
                        <p className="text-rose-600 text-sm">Paciente desde 2021</p>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-rose-600 hover:text-rose-800 transition">
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-rose-600 hover:text-rose-800 transition">
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </section>

          {/* Convênios Section */}
          <section className="py-16 bg-rose-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-rose-800 mb-4">Nossos Convênios</h2>
                <p className="text-rose-600 max-w-2xl mx-auto">Trabalhamos com os principais planos de saúde</p>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                {convenios.map((file, index) => (
                    <div key={index} className="grayscale hover:grayscale-0 transition duration-300">
                      <Image
                          src={`/images/${file}`}
                          alt={`Convênio ${index + 1}`}
                          width={120}
                          height={60}
                          className="h-20 object-contain"
                      />
                    </div>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section id="contato" className="py-16 bg-rose-100">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-rose-800 mb-2">
                    Inscreva-se e receba nossas atualizações
                  </h2>
                  <p className="text-rose-600">Fique por dentro de dicas e novidades sobre saúde mental</p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="md:col-span-1">
                    <label htmlFor="name" className="block text-sm font-medium text-rose-700 mb-1">
                      Nome *
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 rounded-md border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                        placeholder="Seu nome"
                    />
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="phone" className="block text-sm font-medium text-rose-700 mb-1">
                      Telefone *
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 rounded-md border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                        placeholder="(00) 00000-0000"
                    />
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="email" className="block text-sm font-medium text-rose-700 mb-1">
                      Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded-md border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                        placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <Button className="bg-rose-600 hover:bg-rose-700 text-white">Enviar</Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-rose-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-10 w-10 relative">
                    <Heart className="h-8 w-8 text-white absolute" />
                    <Heart className="h-8 w-8 text-white absolute transform translate-x-2 translate-y-2 opacity-50" />
                  </div>
                  <span className="text-2xl font-serif italic">Alliviare</span>
                </div>
                <p className="text-rose-200 mb-4">CNPJ: 04.185601/0001-77</p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Siga-nos nas Redes Sociais</h4>
                  <div className="flex space-x-4">
                    <Link href="#" className="text-white hover:text-rose-300 transition">
                      <Instagram className="h-6 w-6" />
                    </Link>
                    <Link href="#" className="text-white hover:text-rose-300 transition">
                      <Facebook className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-xl mb-4">Atendimento</h4>
                <ul className="space-y-3 text-rose-200">
                  <li className="flex items-start">
                    <Phone className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Contato: 61 99620-7160 (seg. a sex. 08h às 19h)</span>
                  </li>
                  <li className="flex items-start">
                    <Mail className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Email: adm.clinicaalliviare@gmail.com</span>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                    Endereço: SGAS 910 Ed. Mix Park, Bloco E, Sala 225/227/229 Asa Sul, Brasília-DF – CEP 70390-100
                  </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-xl mb-4">Onde Estamos</h4>
                <div className="h-48 bg-rose-700 rounded-lg overflow-hidden relative">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d613.1095812936322!2d-47.889206684079934!3d-15.838021896870765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3a3e20b99c5d%3A0x1c23bb7997c5478e!2sSGAS%20910%20-%20Bras%C3%ADlia%2C%20DF%2C%2070390-100!5e0!3m2!1spt-BR!2sbr!4v1713369572869!5m2!1spt-BR!2sbr"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>

                  {/* Ícone de localização personalizado */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 z-10">
                    <Image
                        src="/images/pin.png"
                        alt="Localização da clínica"
                        width={32}
                        height={32}
                        className="drop-shadow-md"
                    />
                  </div>
                </div>

              </div>
            </div>

            <div className="border-t border-rose-700 mt-8 pt-8 text-center text-rose-300 text-sm">
              <p>© 2023 ALLIVIARE - Todos os direitos reservados</p>
            </div>
          </div>
        </footer>

        {/* Back to top button */}
        <button className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-rose-600 text-white shadow-lg flex items-center justify-center hover:bg-rose-700 transition z-50">
          <ArrowUp className="h-6 w-6" />
        </button>

        {/* Floating WhatsApp button */}
        <button className="fixed bottom-6 left-6 w-14 h-14 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center hover:bg-green-600 transition z-50">
        </button>
      </div>
  )
}
