# Quiz SIPAT Friozem 2026

Sistema de quiz por equipes com ranking em tempo real, feito para a SIPAT. Suporta várias equipes jogando ao mesmo tempo, pelo celular, com pontuação por acerto **e** velocidade de resposta.

## Como rodar

```bash
cd sipat-quiz
npm install
npm start
```

O servidor sobe em `http://localhost:3000` e mostra no terminal os 3 endereços:

- **Jogadores** (uma tela por equipe, em qualquer celular/notebook na mesma rede): `http://SEU-IP:3000/`
- **Admin** (quem conduz o quiz): `http://SEU-IP:3000/admin.html`
- **Telão** (projetar para todo mundo ver o ranking ao vivo): `http://SEU-IP:3000/dashboard.html`

Para descobrir o IP da máquina que vai rodar o servidor na rede do evento (Wi-Fi local), use `ipconfig getifaddr en0` (Mac) e compartilhe esse endereço com as equipes. Todos os aparelhos precisam estar na mesma rede Wi-Fi.

Senha padrão do admin: **friozem2026** (pode ser trocada definindo a variável de ambiente `ADMIN_PASSCODE` antes de iniciar).

## Fluxo de uso no dia do evento

1. Abra o painel **Admin** e o **Telão** (projetado) antes das equipes chegarem.
2. Cada equipe acessa a tela de jogador em um único aparelho e cadastra o nome do time.
3. No Admin, escolha a pergunta (organizadas pelos 13 módulos/rodadas do treinamento) e clique **Iniciar** — isso dispara o cronômetro para todas as equipes ao mesmo tempo.
4. Quando o tempo acaba (ou todas já responderam), clique **Revelar resposta**: a resposta certa aparece para todos, os pontos são somados e o ranking atualiza no telão.
5. Repita para as próximas perguntas. Dá para pular entre módulos livremente.
6. Ao final, clique **Encerrar quiz (mostrar pódio)** para exibir o resultado final no telão.

Outros controles do Admin: renomear/remover equipe, encerrar o tempo manualmente antes do prazo, voltar ao lobby, zerar pontuação (mantém equipes) ou resetar tudo.

## Como funciona a pontuação

- Resposta **certa**: 500 pontos garantidos + até 500 pontos de bônus por velocidade (quanto mais rápido, mais bônus).
- Resposta **errada** ou **sem resposta**: 0 pontos.
- Em caso de empate no placar, desempata por número de acertos e depois pelo tempo total de resposta (mais rápido vence).

## Conteúdo

`data/questions.js` tem 83 perguntas organizadas em 14 módulos do treinamento SIPAT Friozem 2026 (Método dos 5A, Pirâmide de Bird, crenças e fatores humanos, saúde física e ergonomia, inteligência emocional, Método O.L.H.A.R., saúde preventiva, riscos psicossociais, estresse, Método S.E.T.A., comunicação, trânsito e retorno seguro, sinais do corpo e vacinação, e casos práticos aplicando os 5A). Conteúdo atualizado em 20/08/2026 a partir das 4 palestras da semana (17, 18, 19 e 20/08).

## Deploy no Render (para equipes fora da sua rede)

1. Crie um repositório vazio no GitHub (github.com/new) e rode, dentro da pasta `sipat-quiz`:
   ```bash
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
   git push -u origin main
   ```
2. Em [render.com](https://render.com), crie uma conta (dá pra usar login do GitHub) e clique em **New +** → **Blueprint**, selecionando o repositório que você acabou de subir. O Render lê o `render.yaml` do projeto e já preenche o build/start automaticamente.
   - Se preferir configurar manualmente em vez de Blueprint: **New +** → **Web Service**, conecte o repositório, e use `npm install` como Build Command e `npm start` como Start Command.
3. Em **Environment**, adicione a variável `ADMIN_PASSCODE` com a senha que você quiser usar no evento (troque a padrão `friozem2026`).
4. Clique em **Deploy**. Em alguns minutos o Render dá uma URL pública fixa tipo `https://sipat-quiz-friozem.onrender.com` — essa é a URL que as equipes, o admin e o telão vão usar (bastando trocar `localhost:3000` por esse endereço em cada painel).
5. No plano gratuito, o serviço "dorme" depois de ~15 min sem acesso e demora uns 30-50s para acordar na próxima visita. Para o dia do evento, acesse a URL um pouco antes de começar para "acordar" o servidor com antecedência. Se quiser evitar isso, o plano pago (~US$7/mês) mantém sempre ativo.

**Atenção:** no plano gratuito do Render o disco é temporário — toda vez que o serviço "dorme" e "acorda" (ou recebe um novo deploy), ele sobe num container novo e o `db.json` volta zerado, apagando as pontuações. Para o dia do evento: acesse a URL uns minutos antes de começar (pra já estar "acordado") e evite deixar o quiz parado por mais de ~15 min no meio das rodadas. Se isso for um problema real para o seu evento, o plano pago com disco persistente (ou rodar localmente com o túnel do Cloudflare) evita esse risco.

## Dados

As equipes e pontuações ficam salvas em `db.json` na raiz do projeto, então um reinício do servidor não perde o progresso do dia. Para começar um evento do zero, apague esse arquivo ou use o botão **Resetar tudo** no Admin.
