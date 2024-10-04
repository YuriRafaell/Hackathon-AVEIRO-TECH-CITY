# Aveiro Tech City HACKATHON

## Desafio #1

#### Nome do desafio
MEDIA DIVE: Novas Formas de Interação na TV com Conteúdo Enriquecido:
Um Caminho Promissor


#### Descrição do Desafio
Num período marcado pelo rápido avanço tecnológico, a indústria televisiva encontra-se na
vanguarda da inovação. Com o advento da Inteligência Artificial (IA), o impacto da Inteligência
Artificial Generativa (IAG) na produção de conteúdos televisivos é profundo e multifacetado,
redefinindo a forma como os conteúdos são criados, consumidos e experienciados. O
enriquecimento de metadados utilizando IAG representa um salto quântico na forma como
organizamos e acedemos a conteúdos. Ao dotar os dados de uma camada mais profunda de
significado e contexto, podemos criar experiências de utilizador mais personalizadas, intuitivas e
envolventes. O futuro do enriquecimento de metadados com IAG é promissor, e com o avanço da
tecnologia, podemos esperar:

• Metadados mais inteligentes: A IA será capaz de entender o contexto e as nuances do conteúdo
de forma ainda mais precisa.
• Personalização ainda mais profunda: A IA poderá adaptar os metadados às necessidades
individuais de cada utilizador.
• Novas formas de interação com o conteúdo: A IA poderá criar formas de explorar e interagir
com o conteúdo digital.

Neste sentido, e assente na plataforma de enriquecimento de metadados Media Dive da Altice
Labs, pretende-se explorar novas formas de interação/consumo de conteúdos enriquecidos.
As propostas de interação para consumo de conteúdos devem incluir o sistema ou algoritmo
ou serviço, que materialize o conceito. Propostas com User Interface (UI) não são exigidas, mas
serão valorizadas. O mais importante é a exploração de novos modelos e ideias de consumo,
novos use cases, ou mesmo outros conceitos inovadores, desde que alavancados nos conteúdos
enriquecidos pelo Media Dive.
Para estimular a criatividade dos participantes, aqui estão alguns exemplos de ideias que
poderiam ser exploradas:

• Desenvolver um sistema que construa um telejornal personalizado com apenas as notícias que
interessam ao utilizador;
• Desenvolver um sistema avançado de descoberta de conteúdos para reproduzir todos os clips
de uma personalidade (ex: ver todos os clips da Simone Biles nos Jogos Olímpicos);
• Desenvolver um sistema que crie um canal virtual com conteúdos selecionados com base nas
preferências de uma persona.

#### Desenvolviemnto e Apoio
##### Tecnologias:
Utilização de tecnologias: Mobile, Web, Cloud, Machine Leaning, Computer Vision, Analytics.

##### Serviços:
• API Electronic Program Guide (EPG) - será disponibilizada uma API para acesso ao guia TV de
alguns canais da plataforma MEO (ex: RTP1, um canal de desporto e um canal de entretenimento)
• API Media Dive - será disponibilizada uma API para acesso à plataforma Media Dive para
obtenção dos metadados enriquecidos. A API disponibilizará os seguintes serviços:
. Transcrição – todo o áudio presente num determinado conteúdo é disponibilizado na sua
forma textual;
. Keywords – palavras-chave mais relevantes do conteúdo;
. Tópicos – o conteúdo é categorizado nos vários tópicos disponíveis (programa, dia, canal);
. Image Ranking/Visual Summary – criação de pequenos clips com algumas frames essenciais
do conteúdo;
. Pesquisa por keywords - devolve segmentos de vídeo em que a keyword é mencionada;
. Faces únicas de um programa – identificação das pessoas que estão num determinado
conteúdo, usando as suas faces;
• Conteúdos em vídeo - para a disponibilização dos conteúdos, será utilizado o sistema de
Gravações Automáticas da MEO. O sistema apenas permite a utilização de uma janela temporal
de 7 dias, ou seja, no dia N, teremos acesso aos conteúdos até ao dia N-7.
• Player de conteúdos - será disponibilizado um Player para reprodução de playlists de
conteúdos da oferta MEO TV.

# Nossa ideia

## Descrição do desafio
O desafio propõe desenvolver novas formas de interação com a TV, utilizando APIs que
melhoram a experiência do espectador. A ideia é criar soluções inovadoras para o consumo
de conteúdos, explorando metadados, transcrições e recomendações personalizadas
através das APIs Electronic Program Guide (EPG) e Media Dive, promovendo uma
experiência televisiva mais envolvente e interativa.

## Estratégia
A estratégia da equipa é desenvolver um sistema de reconhecimento personalizado para
TV, utilizando JavaScript e React com Vite para criar a interface. Criámos uma base de
dados para armazenar perfis de utilizadores (personas) e as suas preferências, de forma a
fornecer sugestões de conteúdo personalizadas, com base em metadados ricos fornecidos
pela API Media Dive. Mesmo que o sistema não funcione com transmissões ao vivo,
utilizaremos o conteúdo disponível com um atraso de 20 minutos. A integração com a API
do Electronic Program Guide (EPG) e o uso da API Program Covers garantem que o
utilizador tenha uma experiência de visualização rica e conteúdo recomendado de forma
inteligente e adaptada aos seus gostos pessoais.

## Ideias para a proposta de solução
A proposta é criar um sistema que utilize as APIs disponíveis para criar uma experiência de
visualização personalizada. Cada utilizador terá um perfil (persona) baseado nas suas
preferências, e o sistema recomendará conteúdos de TV com um atraso de 20 minutos em
relação à transmissão em direto. A API Media Dive será utilizada para enriquecer os
programas com transcrição e palavras-chave, permitindo recomendações mais precisas e
relevantes. Além disso, o sistema será visualmente apelativo graças à integração da API
Program Covers, que exibirá imagens dos programas sugeridos. Embora não haja
transmissão em direto, esta abordagem permite que o conteúdo recente seja explorado de
forma personalizada, maximizando a utilidade de metadados ricos.

### O que precisa ser entregue

[X] Relatório sucinto da abordagem ao problema, com máximo de 2 páginas 19h00 DO DIA 02/10

[X] Sumário Executivo, em pdf com o máximo de 2 páginas 17h30 DO DIA 04/10

[ ] Apresentação, em ppt 17h30 DO DIA 04/10

[ ] Link para o repositório de código 17h30 DO DIA 04/10

[ ] Pitch em MD, PDF e ppt 17h30 DO DIA 04/10