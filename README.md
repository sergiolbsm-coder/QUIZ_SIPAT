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

`data/questions.js` tem as 65 perguntas organizadas nos 13 módulos do treinamento SIPAT Friozem 2026 (Método dos 5A, Pirâmide de Bird, crenças e fatores humanos, saúde física, inteligência emocional, Método O.L.H.A.R., saúde preventiva, riscos psicossociais, estresse, Método S.E.T.A., comunicação, trânsito e sinais do corpo).

## Dados

As equipes e pontuações ficam salvas em `db.json` na raiz do projeto, então um reinício do servidor não perde o progresso do dia. Para começar um evento do zero, apague esse arquivo ou use o botão **Resetar tudo** no Admin.
