// Banco de perguntas — Quiz SIPAT Friozem 2026
// Cada módulo vira uma "rodada" dentro do sistema.

const modules = [
  {
    id: 1,
    title: 'Método dos 5A da Segurança',
    questions: [
      {
        text: 'Qual é o primeiro passo do Método dos 5A para tomar uma decisão segura?',
        options: {
          a: 'Comunicar imediatamente a liderança.',
          b: 'Observar o ambiente antes de agir.',
          c: 'Avaliar somente a velocidade da tarefa.',
          d: 'Pedir que outra pessoa decida.'
        },
        correct: 'b',
        concept: 'A Atenção exige presença e percepção do ambiente, das pessoas e dos detalhes.'
      },
      {
        text: 'O que deve ser feito na etapa "Análise" do Método dos 5A?',
        options: {
          a: 'Avaliar os riscos, as possíveis consequências e as opções disponíveis.',
          b: 'Executar a tarefa e avaliar somente o resultado final.',
          c: 'Considerar apenas os riscos que já provocaram acidentes.',
          d: 'Transferir a decisão para o profissional mais experiente.'
        },
        correct: 'a',
        concept: 'Analisar significa pensar antes de agir, avaliar os riscos e compreender o impacto da decisão.'
      },
      {
        text: 'O que caracteriza o pilar "Atitude"?',
        options: {
          a: 'Confiar que a experiência será suficiente para evitar erros.',
          b: 'Fazer a escolha segura, mesmo quando houver pressa ou pressão.',
          c: 'Comunicar o problema depois de concluir a atividade.',
          d: 'Manter o procedimento habitual, mesmo que a situação tenha mudado.'
        },
        correct: 'b',
        concept: 'Segurança exige transformar percepção e avaliação em uma escolha concreta.'
      },
      {
        text: 'Como o pilar "Alerta" contribui para a prevenção de acidentes?',
        options: {
          a: 'Comunicando desvios, riscos e quase acidentes para que sejam tratados.',
          b: 'Informando somente acidentes que provoquem afastamento.',
          c: 'Aguardando a confirmação de outro colaborador antes de avisar.',
          d: 'Registrando o risco apenas quando a operação terminar.'
        },
        correct: 'a',
        concept: 'Falar, avisar e reportar permitem agir antes que o risco se transforme em acidente.'
      },
      {
        text: 'O que significa "Apoio" no Método dos 5A?',
        options: {
          a: 'Assumir a tarefa do colega sempre que houver dificuldade.',
          b: 'Cuidar de si e incentivar os colegas a adotarem atitudes seguras.',
          c: 'Comunicar riscos somente quando solicitado pela liderança.',
          d: 'Corrigir o comportamento do colega sem conversar com ele.'
        },
        correct: 'b',
        concept: 'Segurança é construída em equipe por meio do cuidado mútuo.'
      },
      {
        text: 'Qual mensagem resume melhor o Método dos 5A?',
        options: {
          a: 'Segurança depende principalmente da experiência individual.',
          b: 'Segurança é uma escolha diária baseada em atenção, análise e atitude.',
          c: 'Segurança está garantida quando todos os equipamentos estão funcionando.',
          d: 'Segurança é responsabilidade exclusiva dos profissionais especializados.'
        },
        correct: 'b',
        concept: ''
      }
    ]
  },
  {
    id: 2,
    title: 'Pirâmide de Bird e gestão dos desvios',
    questions: [
      {
        text: 'De acordo com a pirâmide apresentada no material, quantos desvios aparecem na base?',
        options: { a: '300.', b: '3.000.', c: '30.000.', d: '300.000.' },
        correct: 'c',
        concept: 'O material utiliza a proporção de 30.000 desvios na base para demonstrar a importância da prevenção.'
      },
      {
        text: 'O que é um incidente ou "quase acidente"?',
        options: {
          a: 'Uma situação que não causou lesão, mas revelou a existência de um risco real.',
          b: 'Um acidente que provocou somente danos materiais.',
          c: 'Um comportamento que foi corrigido antes do início da tarefa.',
          d: 'Uma ocorrência sem potencial de causar consequências.'
        },
        correct: 'a',
        concept: 'Não haver lesão não significa que a situação era segura.'
      },
      {
        text: 'Onde está a principal oportunidade de prevenção apresentada pela Pirâmide de Bird?',
        options: {
          a: 'Na investigação dos acidentes fatais.',
          b: 'Na correção dos desvios e quase acidentes presentes na base.',
          c: 'No atendimento posterior aos acidentes com afastamento.',
          d: 'Na substituição imediata de todos os equipamentos antigos.'
        },
        correct: 'b',
        concept: 'Agir na base impede que pequenos desvios evoluam para ocorrências mais graves.'
      },
      {
        text: 'Correr no pátio ou pular uma etapa do procedimento representa principalmente qual tipo de desvio?',
        options: { a: 'Improviso.', b: 'Pressa.', c: 'Falha ergonômica.', d: 'Falha de comunicação.' },
        correct: 'b',
        concept: ''
      },
      {
        text: 'Não conferir uma carga ou a trava da doca porque "sempre fez assim" representa:',
        options: {
          a: 'Excesso de confiança.',
          b: 'Falta de conhecimento técnico.',
          c: 'Comunicação inadequada.',
          d: 'Uso incorreto de EPI.'
        },
        correct: 'a',
        concept: 'A experiência é importante, mas não elimina a necessidade de conferir.'
      },
      {
        text: 'Qual situação caracteriza um desvio causado por improviso?',
        options: {
          a: 'Adaptar uma ferramenta ou utilizar um equipamento de forma diferente do procedimento.',
          b: 'Não comunicar que existe um material bloqueando a passagem.',
          c: 'Caminhar olhando para o celular.',
          d: 'Movimentar uma carga sem perceber outro colaborador atrás.'
        },
        correct: 'a',
        concept: ''
      },
      {
        text: 'Qual é a consequência de ignorar repetidamente pequenos desvios?',
        options: {
          a: 'O comportamento inseguro pode se normalizar e aumentar a possibilidade de acidente.',
          b: 'A equipe ganha experiência para lidar com situações mais perigosas.',
          c: 'A produtividade aumenta sem interferir na segurança.',
          d: 'O risco diminui porque a atividade passa a ser conhecida.'
        },
        correct: 'a',
        concept: 'Cada desvio ignorado é um passo a mais em direção ao acidente.'
      }
    ]
  },
  {
    id: 3,
    title: 'Crenças e fatores humanos',
    questions: [
      {
        text: 'Por que a crença "É só dessa vez" representa um risco?',
        options: {
          a: 'Porque uma exceção pode iniciar a repetição de um comportamento inseguro.',
          b: 'Porque qualquer alteração do procedimento provoca necessariamente um acidente.',
          c: 'Porque tarefas rápidas são sempre mais perigosas.',
          d: 'Porque somente a liderança pode autorizar mudanças de comportamento.'
        },
        correct: 'a',
        concept: ''
      },
      {
        text: 'Por que a frase "Sempre fiz assim" deve ser questionada?',
        options: {
          a: 'Porque todo procedimento antigo está automaticamente errado.',
          b: 'Porque a experiência pode gerar excesso de confiança e reduzir a percepção de novos riscos.',
          c: 'Porque pessoas experientes cometem mais erros que iniciantes.',
          d: 'Porque a rotina elimina a necessidade de avaliar o ambiente.'
        },
        correct: 'b',
        concept: ''
      },
      {
        text: 'Qual é o erro presente na crença "Ninguém está olhando"?',
        options: {
          a: 'Pensar que a segurança depende da fiscalização, e não da responsabilidade pessoal.',
          b: 'Acreditar que o ambiente possui câmeras de monitoramento.',
          c: 'Considerar que todo comportamento precisa ser autorizado.',
          d: 'Imaginar que os colegas não perceberão a situação.'
        },
        correct: 'a',
        concept: 'A atitude segura deve ser mantida mesmo sem supervisão.'
      },
      {
        text: 'Quais fatores humanos, quando combinados, aumentam o risco de acidentes?',
        options: {
          a: 'Pressa, distração, excesso de confiança e rotina.',
          b: 'Experiência, treinamento, atenção e planejamento.',
          c: 'Comunicação, colaboração, análise e prevenção.',
          d: 'Organização, conhecimento, autonomia e apoio.'
        },
        correct: 'a',
        concept: ''
      },
      {
        text: 'Por que a crença "É rapidinho" é perigosa?',
        options: {
          a: 'Porque grande parte dos acidentes acontece justamente em atividades consideradas simples e rápidas.',
          b: 'Porque tarefas rápidas nunca envolvem riscos reais.',
          c: 'Porque só deve ser usada em tarefas de longa duração.',
          d: 'Porque atividades demoradas são sempre mais seguras que as rápidas.'
        },
        correct: 'a',
        concept: 'Subestimar uma tarefa por ela parecer rápida reduz a atenção justamente quando o risco ainda está presente.'
      },
      {
        text: 'Qual é o erro por trás da crença "Nunca aconteceu comigo"?',
        options: {
          a: 'Usar o histórico pessoal sem acidentes como garantia de que ele nunca vai acontecer.',
          b: 'Achar que acidentes só acontecem com quem já se acidentou antes.',
          c: 'Acreditar que a experiência prévia elimina totalmente o risco.',
          d: 'Considerar que apenas iniciantes correm esse tipo de risco.'
        },
        correct: 'a',
        concept: '"Nunca aconteceu comigo" — até acontecer. O fato de um risco não ter se concretizado ainda não significa que ele deixou de existir.'
      },
      {
        text: 'O que a crença "Não preciso conferir" ignora?',
        options: {
          a: 'Que conferir leva poucos segundos, enquanto corrigir um acidente pode levar meses.',
          b: 'Que a conferência só é necessária em tarefas novas.',
          c: 'Que apenas a liderança tem a obrigação de conferir os processos.',
          d: 'Que conferir é uma etapa opcional quando o prazo está apertado.'
        },
        correct: 'a',
        concept: 'O tempo investido em conferir é sempre menor do que o custo — em tempo, saúde e recuperação — de corrigir um acidente.'
      },
      {
        text: 'Por que a crença "Eu dou conta" pode ser um risco?',
        options: {
          a: 'Porque pedir ajuda também é uma atitude segura, e insistir em fazer tudo sozinho pode levar ao limite.',
          b: 'Porque pedir ajuda é sinal de incompetência.',
          c: 'Porque apenas líderes podem pedir apoio a outras pessoas.',
          d: 'Porque cada pessoa deve resolver todos os problemas sem envolver a equipe.'
        },
        correct: 'a',
        concept: 'Reconhecer os próprios limites e buscar apoio é parte de uma cultura de segurança madura, não uma fraqueza.'
      }
    ]
  },
  {
    id: 4,
    title: 'Saúde física e hábitos preventivos',
    questions: [
      {
        text: 'Com que frequência o material recomenda levantar-se, alongar-se ou movimentar o corpo durante períodos prolongados na mesma posição?',
        options: {
          a: 'Aproximadamente a cada hora.',
          b: 'Apenas no intervalo das refeições.',
          c: 'Somente quando surgir alguma dor.',
          d: 'Uma vez durante cada turno.'
        },
        correct: 'a',
        concept: ''
      },
      {
        text: 'Como a hidratação contribui para a saúde física?',
        options: {
          a: 'Mantém o funcionamento do organismo, favorece a saúde muscular e auxilia na recuperação corporal.',
          b: 'Elimina a necessidade de pausas e alongamentos.',
          c: 'Impede completamente o surgimento de dores musculares.',
          d: 'Substitui o descanso nos períodos de maior esforço.'
        },
        correct: 'a',
        concept: ''
      },
      {
        text: 'Qual período de sono foi recomendado no material para favorecer a recuperação do corpo?',
        options: {
          a: 'De quatro a cinco horas por noite.',
          b: 'De cinco a seis horas por noite.',
          c: 'De sete a oito horas por noite.',
          d: 'Mais de dez horas obrigatoriamente.'
        },
        correct: 'c',
        concept: ''
      },
      {
        text: 'Qual é o objetivo principal do exercício "Acorda Coluna"?',
        options: {
          a: 'Aliviar tensões, melhorar a mobilidade e favorecer uma postura mais alinhada.',
          b: 'Desenvolver força máxima nos braços e ombros.',
          c: 'Substituir a atividade física realizada fora do trabalho.',
          d: 'Corrigir imediatamente lesões já existentes na coluna.'
        },
        correct: 'a',
        concept: ''
      },
      {
        text: 'Qual é a finalidade da "Power Posture"?',
        options: {
          a: 'Demonstrar autoridade e controle sobre outras pessoas.',
          b: 'Ajustar postura e respiração para aumentar presença, foco e disposição.',
          c: 'Substituir as pausas de recuperação física durante o turno.',
          d: 'Preparar o corpo exclusivamente para atividades de força.'
        },
        correct: 'b',
        concept: ''
      },
      {
        text: 'O que a dinâmica "Bingo do Corpo" procura demonstrar?',
        options: {
          a: 'Que pequenas escolhas inadequadas, quando repetidas, podem sobrecarregar o corpo.',
          b: 'Que uma única escolha errada provoca necessariamente uma lesão grave.',
          c: 'Que dores corporais surgem apenas durante o trabalho.',
          d: 'Que hábitos saudáveis eliminam qualquer possibilidade de adoecimento.'
        },
        correct: 'a',
        concept: ''
      },
      {
        text: 'Na metáfora do carro, o que representa um corpo "precisando de revisão"?',
        options: {
          a: 'A presença de sinais iniciais de desgaste que exigem atenção e cuidado.',
          b: 'Um problema grave que não permite mais nenhuma intervenção.',
          c: 'Um corpo saudável, com exames e hábitos em dia.',
          d: 'A necessidade de interromper definitivamente as atividades profissionais.'
        },
        correct: 'a',
        concept: ''
      },
      {
        text: 'O que a mensagem "Dor não é normal" pretende reforçar?',
        options: {
          a: 'Dores frequentes ou persistentes devem ser percebidas e avaliadas, sem serem normalizadas.',
          b: 'Toda dor indica obrigatoriamente uma doença grave.',
          c: 'Qualquer desconforto exige o abandono imediato da atividade profissional.',
          d: 'A dor pode ser ignorada quando não interfere na produtividade.'
        },
        correct: 'a',
        concept: ''
      },
      {
        text: 'Qual é o benefício da atividade "Descongelando o Corpo"?',
        options: {
          a: 'Estimular a circulação, reduzir tensões e movimentar regiões que permaneceram estáticas.',
          b: 'Aumentar a velocidade dos movimentos durante a operação.',
          c: 'Preparar o corpo para suportar peso sem equipamentos auxiliares.',
          d: 'Substituir o aquecimento e todos os cuidados ergonômicos.'
        },
        correct: 'a',
        concept: ''
      },
      {
        text: 'O que a neuroplasticidade ensina sobre a formação de novos hábitos?',
        options: {
          a: 'O cérebro pode criar e fortalecer conexões por meio de foco, intenção e repetição.',
          b: 'O cérebro deixa de desenvolver novos padrões após a vida adulta.',
          c: 'A mudança de hábitos depende principalmente de motivação momentânea.',
          d: 'Novos comportamentos surgem apenas depois de experiências negativas.'
        },
        correct: 'a',
        concept: ''
      },
      {
        text: 'Segundo os princípios da ergonomia, qual é a forma mais segura de carregar uma caixa?',
        options: {
          a: 'Com os braços estendidos, mantendo a caixa afastada do corpo.',
          b: 'Com o tronco inclinado e girado para o lado.',
          c: 'Com a caixa próxima ao corpo e a coluna alinhada.',
          d: 'Da forma mais rápida possível, sem se preocupar com a postura.'
        },
        correct: 'c',
        concept: 'Carga próxima ao corpo exige menos esforço, gera menos alavanca sobre ombros e costas e reduz a carga na coluna lombar.'
      },
      {
        text: 'Qual é o objetivo da ergonomia no ambiente de trabalho?',
        options: {
          a: 'Aumentar a velocidade das tarefas, independentemente do esforço físico exigido.',
          b: 'Reduzir a carga de trabalho imposta ao corpo, aumentando a capacidade de trabalho com segurança.',
          c: 'Substituir a necessidade de pausas durante o expediente.',
          d: 'Padronizar os móveis de todos os setores da empresa.'
        },
        correct: 'b',
        concept: 'Pequenas mudanças na forma de levantar, carregar e movimentar fazem grande diferença para o corpo hoje e no futuro.'
      }
    ]
  },
  {
    id: 5,
    title: 'Inteligência emocional e comunicação',
    questions: [
      {
        text: 'No Semáforo do Estresse, o que representa a cor vermelha?',
        options: {
          a: 'Estresse positivo — motivação, foco e alta energia, típicos da zona de crescimento.',
          b: 'Estresse tolerável — o corpo e a mente pedem cuidado, mas apenas pequenos ajustes bastam.',
          c: 'Estresse negativo — sinais como esgotamento e burnout, que exigem atenção e cuidado.',
          d: 'Ausência total de estresse, sem nenhum tipo de desafio.'
        },
        correct: 'c',
        concept: 'Excesso constante de estresse adoece, reduz a performance e pode levar ao esgotamento (burnout).'
      },
      {
        text: 'O que caracteriza a cor amarela no Semáforo do Estresse?',
        options: {
          a: 'Zona de crescimento, com motivação e produtividade em alta.',
          b: 'Estresse tolerável — desafio saudável, mas o corpo e a mente pedem ajustes.',
          c: 'Situação de crise que exige afastamento imediato.',
          d: 'Ausência de qualquer desafio ou pressão no trabalho.'
        },
        correct: 'b',
        concept: 'Nem todo estresse é ruim. O problema é quando ele se torna excessivo e constante.'
      },
      {
        text: 'Qual é a base de uma comunicação saudável?',
        options: {
          a: 'Falar de maneira direta, mesmo sem considerar a reação do outro.',
          b: 'Ouvir com atenção, respeito, empatia e intenção de compreender.',
          c: 'Evitar assuntos que possam gerar opiniões diferentes.',
          d: 'Comunicar-se apenas por meio de registros formais.'
        },
        correct: 'b',
        concept: ''
      },
      {
        text: 'Segundo o Painel das Emoções, qual atitude pode ajudar diante do medo?',
        options: {
          a: 'Buscar informações, apoio e reconhecer a própria capacidade de enfrentamento.',
          b: 'Evitar qualquer situação nova até que o sentimento desapareça.',
          c: 'Esconder o sentimento para não demonstrar insegurança.',
          d: 'Tomar uma decisão imediata para encerrar o desconforto.'
        },
        correct: 'a',
        concept: ''
      },
      {
        text: 'Por que reconhecer as próprias emoções é importante?',
        options: {
          a: 'Porque permite compreender os sinais internos e escolher respostas mais conscientes.',
          b: 'Porque impede que emoções desagradáveis voltem a aparecer.',
          c: 'Porque permite controlar como as outras pessoas irão reagir.',
          d: 'Porque elimina automaticamente o estresse e a ansiedade.'
        },
        correct: 'a',
        concept: ''
      },
      {
        text: 'Qual é o objetivo da escuta ativa?',
        options: {
          a: 'Compreender o que a outra pessoa está comunicando antes de responder ou aconselhar.',
          b: 'Identificar rapidamente os erros presentes na fala do outro.',
          c: 'Preparar uma resposta enquanto a outra pessoa ainda está falando.',
          d: 'Concordar com todas as opiniões para evitar conflitos.'
        },
        correct: 'a',
        concept: 'Escutar ativamente não significa concordar com tudo, mas compreender com atenção e respeito.'
      }
    ]
  },
  {
    id: 6,
    title: 'Método O.L.H.A.R. e percepção de riscos',
    questions: [
      {
        text: 'No Método O.L.H.A.R., o que propõe a etapa "Observe"?',
        options: {
          a: 'Observar o ambiente antes de agir, prestando atenção nos detalhes ao redor.',
          b: 'Observar apenas o relógio para não atrasar a tarefa.',
          c: 'Observar somente as instruções escritas no procedimento.',
          d: 'Observar o desempenho dos colegas de equipe.'
        },
        correct: 'a',
        concept: 'Esteja presente. Pergunte-se: o que está acontecendo ao meu redor?'
      },
      {
        text: 'No Método O.L.H.A.R., o que significa "Localize"?',
        options: {
          a: 'Identificar onde estão os perigos, as falhas ou as condições de risco.',
          b: 'Encontrar o responsável técnico pela operação.',
          c: 'Verificar somente a localização dos equipamentos.',
          d: 'Identificar a rota mais rápida para executar a tarefa.'
        },
        correct: 'a',
        concept: ''
      },
      {
        text: 'Qual pergunta orienta a etapa "Hipotetize"?',
        options: {
          a: '"Quem executou esta tarefa anteriormente?"',
          b: '"O que pode dar errado nesta situação?"',
          c: '"Quanto tempo posso economizar?"',
          d: '"Qual é a maneira mais habitual de fazer?"'
        },
        correct: 'b',
        concept: ''
      },
      {
        text: 'O que propõe a etapa "Antecipe" do Método O.L.H.A.R.?',
        options: {
          a: 'Esperar a situação de risco acontecer para depois corrigir o problema.',
          b: 'Tomar uma ação preventiva antes que o problema ocorra.',
          c: 'Antecipar o horário de saída do trabalho sempre que possível.',
          d: 'Avisar apenas o supervisor sobre o risco identificado, sem agir.'
        },
        correct: 'b',
        concept: 'O que posso fazer agora para evitar problemas? Tome atitudes seguras antes que algo aconteça.'
      },
      {
        text: 'Qual é a finalidade da etapa "Reavalie"?',
        options: {
          a: 'Verificar continuamente se a situação mudou e se a ação precisa ser ajustada.',
          b: 'Confirmar se a atividade foi concluída no tempo previsto.',
          c: 'Avaliar apenas o resultado depois que a tarefa terminou.',
          d: 'Comparar o desempenho dos colaboradores envolvidos.'
        },
        correct: 'a',
        concept: ''
      },
      {
        text: 'O que propõe a prática dos "cinco segundos que salvam vidas"?',
        options: {
          a: 'Fazer uma breve pausa antes de agir para observar e responder às perguntas de segurança.',
          b: 'Esperar cinco segundos depois de concluir a tarefa para verificar o resultado.',
          c: 'Realizar qualquer tarefa de risco em intervalos de cinco segundos.',
          d: 'Transferir rapidamente a decisão quando houver alguma dúvida.'
        },
        correct: 'a',
        concept: 'Antes de decidir, pare por 5 segundos e responda: o que pode acontecer? quem pode ser atingido? estou vendo tudo? vale a pena correr esse risco? posso esperar 5 segundos? "Perceber antes, decidir melhor."'
      },
      {
        text: 'Qual é a diferença entre perigo e risco?',
        options: {
          a: 'Perigo é algo com potencial de causar dano; risco é a possibilidade de esse dano acontecer.',
          b: 'Perigo é um acidente consumado; risco é uma falha sem consequência.',
          c: 'Perigo está relacionado às pessoas; risco está relacionado aos equipamentos.',
          d: 'Perigo e risco possuem exatamente o mesmo significado.'
        },
        correct: 'a',
        concept: ''
      }
    ]
  },
  {
    id: 7,
    title: 'Saúde preventiva e compromisso com a vida',
    questions: [
      {
        text: 'Por que a vacina contra o tétano é especialmente importante na prevenção?',
        options: {
          a: 'Porque protege contra uma infecção grave que pode ocorrer por meio de ferimentos.',
          b: 'Porque reduz as complicações provocadas pela gripe.',
          c: 'Porque impede o surgimento de dores musculares.',
          d: 'Porque substitui o atendimento após acidentes com cortes.'
        },
        correct: 'a',
        concept: 'A vacinação é preventiva, mas não substitui o cuidado e o atendimento adequado diante de um ferimento.'
      },
      {
        text: 'O que significa a mensagem "Vidas em primeiro lugar"?',
        options: {
          a: 'Toda decisão deve priorizar a integridade das pessoas, mesmo diante de pressa ou pressão.',
          b: 'Os resultados devem ser priorizados desde que o risco seja considerado pequeno.',
          c: 'A segurança deve ser observada somente nas atividades classificadas como perigosas.',
          d: 'A liderança é a única responsável por decidir quando uma tarefa deve ser interrompida.'
        },
        correct: 'a',
        concept: ''
      }
    ]
  },
  {
    id: 8,
    title: 'Riscos psicossociais e NR-1',
    questions: [
      {
        text: 'Segundo o material, o que caracteriza um risco psicossocial no trabalho?',
        options: {
          a: 'Uma fragilidade emocional exclusiva do colaborador.',
          b: 'A interação entre o ambiente, a organização do trabalho e a pessoa.',
          c: 'Uma doença que surge somente fora do ambiente profissional.',
          d: 'Um conflito isolado que não interfere na saúde.'
        },
        correct: 'b',
        concept: 'O risco psicossocial não deve ser tratado como fraqueza pessoal. Ele pode surgir da forma como o trabalho, as relações e as exigências estão organizados.'
      },
      {
        text: 'Qual situação representa um risco psicossocial relacionado à organização do trabalho?',
        options: {
          a: 'Metas pouco claras, sobrecarga e pressão constante.',
          b: 'Utilização correta dos EPIs.',
          c: 'Realização de pausas programadas.',
          d: 'Comunicação respeitosa entre colegas.'
        },
        correct: 'a',
        concept: 'Falta de clareza, sobrecarga e pressão contínua podem comprometer a saúde mental e física.'
      },
      {
        text: 'Qual atitude contribui para prevenir riscos psicossociais?',
        options: {
          a: 'Evitar conversar sobre dificuldades para não demonstrar fraqueza.',
          b: 'Identificar sinais, dialogar, organizar demandas e buscar apoio.',
          c: 'Aumentar a cobrança quando a equipe demonstra cansaço.',
          d: 'Considerar o estresse parte inevitável de qualquer trabalho.'
        },
        correct: 'b',
        concept: 'Prevenção exige percepção, diálogo, apoio e ações sobre as condições de trabalho.'
      },
      {
        text: 'Por que a comunicação agressiva é considerada um risco psicossocial?',
        options: {
          a: 'Porque acelera o cumprimento das tarefas.',
          b: 'Porque pode gerar medo, conflitos, tensão e desgaste emocional.',
          c: 'Porque impede o uso correto dos equipamentos.',
          d: 'Porque reduz somente a produtividade administrativa.'
        },
        correct: 'b',
        concept: 'A forma como as pessoas se comunicam afeta diretamente a segurança psicológica e a qualidade das relações.'
      },
      {
        text: 'De quem é a responsabilidade pela prevenção dos riscos psicossociais?',
        options: {
          a: 'Somente do setor de Recursos Humanos.',
          b: 'Exclusivamente do colaborador afetado.',
          c: 'Da organização, das lideranças e dos colaboradores, cada um em seu papel.',
          d: 'Apenas dos profissionais da área médica.'
        },
        correct: 'c',
        concept: 'A prevenção é compartilhada, embora a empresa tenha responsabilidade sobre a gestão dos riscos presentes no trabalho.'
      }
    ]
  },
  {
    id: 9,
    title: 'Estresse e autocuidado',
    questions: [
      {
        text: 'Na dinâmica do copo, por que o mesmo peso se torna mais difícil de sustentar com o passar do tempo?',
        options: {
          a: 'Porque o peso físico do copo aumenta.',
          b: 'Porque o tempo de exposição provoca cansaço e acúmulo de tensão.',
          c: 'Porque o braço perde totalmente a força após alguns minutos.',
          d: 'Porque objetos leves sempre provocam lesões.'
        },
        correct: 'b',
        concept: 'Muitas pressões tornam-se prejudiciais não apenas pela intensidade, mas pelo tempo durante o qual são carregadas.'
      },
      {
        text: 'Qual é a principal mensagem da dinâmica "O copo invisível"?',
        options: {
          a: 'Toda pressão deve ser eliminada imediatamente.',
          b: 'Problemas pequenos nunca interferem na saúde.',
          c: 'Pressões prolongadas e acumuladas podem tornar-se pesadas.',
          d: 'O estresse depende somente da força física.'
        },
        correct: 'c',
        concept: 'O estresse pode se acumular. Por isso, pausas, diálogo e apoio devem acontecer antes do limite.'
      },
      {
        text: 'Qual combinação representa fatores de proteção emocional?',
        options: {
          a: 'Autocuidado, inteligência emocional, rede de apoio e propósito.',
          b: 'Isolamento, silêncio, pressa e cobrança.',
          c: 'Competitividade, improviso e excesso de confiança.',
          d: 'Sobrecarga, jornadas extensas e falta de autonomia.'
        },
        correct: 'a',
        concept: 'Fatores de proteção ajudam a pessoa a enfrentar pressões sem carregar tudo sozinha.'
      },
      {
        text: 'Ao perceber que está no limite emocional, qual é a atitude mais segura?',
        options: {
          a: 'Continuar a tarefa para não comprometer o prazo.',
          b: 'Reduzir o ritmo, respirar, comunicar a situação e buscar apoio.',
          c: 'Esconder o que está sentindo para preservar a imagem profissional.',
          d: 'Tomar uma decisão rapidamente antes de perder o foco.'
        },
        correct: 'b',
        concept: 'Reconhecer o limite e pedir apoio é uma atitude preventiva, não um sinal de fraqueza.'
      }
    ]
  },
  {
    id: 10,
    title: 'Método S.E.T.A.',
    questions: [
      {
        text: 'Qual é o objetivo do Método S.E.T.A.?',
        options: {
          a: 'Aumentar a velocidade das operações.',
          b: 'Orientar decisões conscientes no trânsito, no trabalho e na vida.',
          c: 'Substituir os procedimentos operacionais da empresa.',
          d: 'Avaliar somente as condições dos equipamentos.'
        },
        correct: 'b',
        concept: 'O método ajuda a considerar situação, estado pessoal, tarefa e ação antes de decidir.'
      },
      {
        text: 'No Método S.E.T.A., o que deve ser analisado na etapa "Estado"?',
        options: {
          a: 'Apenas as condições do equipamento.',
          b: 'Como a pessoa está física e emocionalmente.',
          c: 'O resultado financeiro da tarefa.',
          d: 'Somente o tempo disponível para executar o trabalho.'
        },
        correct: 'b',
        concept: 'Cansaço, irritação, distração e pressa alteram a percepção e o tempo de reação.'
      },
      {
        text: 'Qual alternativa apresenta corretamente os quatro componentes do Método S.E.T.A.?',
        options: {
          a: 'Segurança, equilíbrio, trabalho e atenção.',
          b: 'Situação, estado, tarefa e ação.',
          c: 'Sinalização, equipamento, técnica e alerta.',
          d: 'Saúde, emoção, trânsito e atitude.'
        },
        correct: 'b',
        concept: ''
      },
      {
        text: 'Um colaborador está cansado, com pressa e percebe que o piso está escorregadio. Segundo o Método S.E.T.A., o que deve fazer?',
        options: {
          a: 'Executar rapidamente a tarefa antes que o piso fique pior.',
          b: 'Avaliar seu estado, reavaliar a tarefa e escolher uma ação mais segura.',
          c: 'Manter a rotina, pois já realizou a tarefa outras vezes.',
          d: 'Esperar que outro colaborador identifique o risco.'
        },
        correct: 'b',
        concept: 'Decisões seguras consideram simultaneamente o ambiente, o estado da pessoa e as exigências da tarefa.'
      }
    ]
  },
  {
    id: 11,
    title: 'Comunicação e responsabilidade',
    questions: [
      {
        text: 'Por que um quase acidente deve ser comunicado mesmo quando ninguém se machuca?',
        options: {
          a: 'Porque indica um risco real que pode causar um acidente no futuro.',
          b: 'Porque todo quase acidente gera automaticamente uma punição.',
          c: 'Porque a comunicação substitui a correção do problema.',
          d: 'Porque somente os registros garantem a segurança.'
        },
        correct: 'a',
        concept: 'O quase acidente é uma oportunidade de prevenção. Ignorá-lo mantém o risco ativo.'
      },
      {
        text: 'Ao identificar um risco que ainda não causou acidente, qual é a conduta mais adequada?',
        options: {
          a: 'Esperar para verificar se o problema se repete.',
          b: 'Avisar apenas os colegas mais próximos.',
          c: 'Interromper quando necessário, sinalizar e comunicar pelos canais definidos.',
          d: 'Continuar a tarefa e relatar somente no final do turno.'
        },
        correct: 'c',
        concept: 'Riscos relevantes exigem resposta proporcional e comunicação rápida.'
      },
      {
        text: 'Qual frase representa melhor uma cultura de segurança madura?',
        options: {
          a: '"Se ninguém se machucou, não houve problema."',
          b: '"Cada pessoa observa, comunica e contribui para corrigir riscos."',
          c: '"Segurança é responsabilidade exclusiva do técnico de segurança."',
          d: '"A experiência elimina a necessidade de conferir."'
        },
        correct: 'b',
        concept: ''
      }
    ]
  },
  {
    id: 12,
    title: 'Trânsito e retorno seguro',
    questions: [
      {
        text: 'Segundo o material, por que o acidente começa antes da colisão?',
        options: {
          a: 'Porque a colisão sempre acontece por falha mecânica.',
          b: 'Porque uma sequência de escolhas anteriores reduz progressivamente a margem de segurança.',
          c: 'Porque toda viagem possui riscos impossíveis de controlar.',
          d: 'Porque somente a velocidade determina o acidente.'
        },
        correct: 'b',
        concept: 'Uma cadeia comum: dormiu mal → saiu atrasado → não tomou café → pegou o celular → ultrapassou o limite → frenagem brusca → acidente. "Acidentes não acontecem do nada."'
      },
      {
        text: 'Qual situação demonstra a aplicação do Método O.L.H.A.R. no trânsito?',
        options: {
          a: 'Manter a velocidade porque conhece bem o caminho.',
          b: 'Observar o ambiente, localizar riscos, imaginar consequências, agir preventivamente e reavaliar.',
          c: 'Olhar apenas para o veículo à frente.',
          d: 'Decidir rapidamente para não atrapalhar o trânsito.'
        },
        correct: 'b',
        concept: ''
      },
      {
        text: 'Qual é a principal mensagem da imagem da cadeira vazia?',
        options: {
          a: 'O trabalho deve ser concluído independentemente do risco.',
          b: 'A segurança protege também a família e as pessoas que esperam pelo trabalhador.',
          c: 'Os acidentes afetam somente quem está diretamente envolvido.',
          d: 'A responsabilidade termina quando o colaborador sai da empresa.'
        },
        correct: 'b',
        concept: 'Voltar para casa em segurança é parte do objetivo de qualquer jornada de trabalho. "Não deixe uma cadeira vazia na sua casa. Volte."'
      },
      {
        text: 'Segundo o Código de Trânsito Brasileiro (Art. 29, §2º), qual é o princípio de responsabilidade entre os diferentes tipos de veículo?',
        options: {
          a: 'Todos têm exatamente a mesma responsabilidade, independentemente do porte do veículo.',
          b: 'Os veículos de maior porte são sempre responsáveis pela segurança dos menores, e os motorizados pelos não motorizados.',
          c: 'A responsabilidade é sempre exclusiva do pedestre, por ser o mais vulnerável.',
          d: 'Apenas motociclistas têm responsabilidade legal reforçada no trânsito.'
        },
        correct: 'b',
        concept: '"A lei do mais forte no trânsito é proteger o mais frágil": quanto maior o potencial de causar dano, maior deve ser o cuidado (caminhão → carro → moto → bicicleta → pedestre).'
      },
      {
        text: 'De acordo com dados de 2024 (SIM/Datasus), qual foi a participação dos motociclistas no total de mortes no trânsito no Brasil?',
        options: {
          a: 'Cerca de 10%.',
          b: 'Cerca de 25%.',
          c: 'Cerca de 41,6%.',
          d: 'Cerca de 60%.'
        },
        correct: 'c',
        concept: 'Foram 15.459 mortes de motociclistas no Brasil em 2024. "Em uma moto, um pequeno erro pode ter uma consequência enorme."'
      },
      {
        text: 'O que avalia o QCM (Questionário do Comportamento do Motorista)?',
        options: {
          a: 'Apenas a quantidade de multas recebidas pelo motorista.',
          b: 'A frequência de erros, lapsos e violações no comportamento ao dirigir.',
          c: 'Somente o tempo de habilitação do motorista.',
          d: 'Exclusivamente o conhecimento teórico das leis de trânsito.'
        },
        correct: 'b',
        concept: 'Erro é falha de percepção/julgamento; lapso é falha não intencional de atenção/memória; violação é conhecer a regra e decidir conscientemente não segui-la. O QCM não é um teste para aprovar ou reprovar — é uma ferramenta para conhecer seus comportamentos.'
      },
      {
        text: 'Em que ano surgiu o movimento Maio Amarelo?',
        options: {
          a: '2005.',
          b: '2014.',
          c: '2018.',
          d: '2022.'
        },
        correct: 'b',
        concept: 'O Maio Amarelo foi idealizado pelo Observatório Nacional de Segurança Viária (ONSV) para promover conscientização por um trânsito mais seguro, humano e responsável.'
      }
    ]
  },
  {
    id: 13,
    title: 'Sinais do corpo e prevenção',
    questions: [
      {
        text: 'Qual conjunto apresenta sinais do corpo que merecem atenção?',
        options: {
          a: 'Energia, concentração e sono reparador.',
          b: 'Fadiga constante, falta de ar, dores frequentes e dificuldade para dormir.',
          c: 'Bom humor, hidratação e disposição.',
          d: 'Apetite regular e descanso adequado.'
        },
        correct: 'b',
        concept: ''
      },
      {
        text: 'O que significa "escutar o corpo"?',
        options: {
          a: 'Esperar que os sintomas desapareçam antes de mudar qualquer hábito.',
          b: 'Perceber sinais, agir preventivamente e procurar orientação quando necessário.',
          c: 'Interromper definitivamente qualquer atividade física.',
          d: 'Utilizar medicamentos sempre que sentir desconforto.'
        },
        correct: 'b',
        concept: ''
      },
      {
        text: 'Qual atitude está mais alinhada à prevenção em saúde?',
        options: {
          a: 'Adiar exames enquanto os sintomas forem suportáveis.',
          b: 'Realizar acompanhamento, manter vacinas atualizadas e não ignorar sinais persistentes.',
          c: 'Procurar atendimento somente em emergências.',
          d: 'Considerar dores recorrentes uma consequência normal do trabalho.'
        },
        correct: 'b',
        concept: ''
      },
      {
        text: 'Além da proteção individual, por que manter a vacinação atualizada é importante?',
        options: {
          a: 'Porque elimina qualquer possibilidade de adoecimento.',
          b: 'Porque contribui para a proteção coletiva da comunidade.',
          c: 'Porque substitui exames e acompanhamento médico.',
          d: 'Porque impede todas as formas de afastamento.'
        },
        correct: 'b',
        concept: ''
      },
      {
        text: 'Qual vacina apresentada no material protege o fígado contra uma infecção que pode se tornar crônica?',
        options: { a: 'Influenza.', b: 'Hepatite B.', c: 'Tétano.', d: 'HPV.' },
        correct: 'b',
        concept: ''
      },
      {
        text: 'Qual é o papel da vacina contra o HPV?',
        options: {
          a: 'Prevenir exclusivamente doenças respiratórias.',
          b: 'Prevenir infecções associadas a diferentes tipos de câncer.',
          c: 'Substituir os exames preventivos.',
          d: 'Tratar infecções já instaladas.'
        },
        correct: 'b',
        concept: 'O HPV é o principal causador do câncer do colo do útero, mas também está associado a cânceres de ânus, pênis, boca e garganta. Vacinação e exames preventivos são medidas complementares, não substitutas.'
      },
      {
        text: 'Após completar o esquema vacinal, de quanto em quanto tempo deve ser feito o reforço da vacina dT (difteria e tétano)?',
        options: {
          a: 'A cada 1 ano, sem exceção.',
          b: 'A cada 5 anos, sem exceção.',
          c: 'A cada 10 anos, podendo ser antecipado para 5 anos em situações de exposição ao risco.',
          d: 'Não é necessário nenhum reforço após a primeira dose.'
        },
        correct: 'c',
        concept: 'No calendário adulto, quem não completou o esquema deve iniciá-lo ou completá-lo; após o esquema completo, o reforço de dT é feito a cada 10 anos.'
      },
      {
        text: 'Qual é o principal objetivo da vacina contra Influenza (gripe)?',
        options: {
          a: 'Prevenir infecções crônicas no fígado.',
          b: 'Reduzir complicações, internações e mortes causadas pela gripe.',
          c: 'Substituir a necessidade das demais vacinas do calendário.',
          d: 'Tratar a gripe depois que ela já se instalou.'
        },
        correct: 'b',
        concept: 'Vacina é prevenção, não é tratamento. "Quanto mais pessoas vacinadas, mais segura é a vida de todos."'
      }
    ]
  },
  {
    id: 14,
    title: 'Casos práticos: aplicando os 5A',
    questions: [
      {
        text: 'Você acabou de sair da câmara fria sentindo frio intenso, dor de cabeça e mal-estar, mas ainda faltam tarefas para terminar o turno. Qual é a atitude mais alinhada aos 5A?',
        options: {
          a: 'Continuar trabalhando para terminar logo, sem comentar nada, para não atrasar a equipe.',
          b: 'Comentar com o líder o que está sentindo e avaliar junto a necessidade de uma pausa para recuperação.',
          c: 'Trocar de atividade por conta própria, sem avisar ninguém.',
          d: 'Ignorar os sinais do corpo e seguir no ritmo normal até o fim do turno.'
        },
        correct: 'b',
        concept: 'Seu corpo também é equipamento de proteção. Cuidar de você é cuidar de todos — isso une o pilar Alerta (comunicar) e Atitude (agir com segurança).'
      },
      {
        text: 'Você precisa atravessar uma área de circulação. Uma empilhadeira está se aproximando, mas parece distante, e você está com pressa. Qual é a decisão mais segura?',
        options: {
          a: 'Atravessar rapidamente, já que aparenta dar tempo.',
          b: 'Tentar chamar a atenção do operador e atravessar assim mesmo.',
          c: 'Avaliar a situação e seguir o procedimento definido para circulação segura na área.',
          d: 'Esperar alguém mais experiente atravessar primeiro para ver se é seguro.'
        },
        correct: 'c',
        concept: '"Está longe, dá tempo" é um pensamento arriscado tanto na doca quanto no trânsito. Segurança não é sorte, é escolha — siga sempre o procedimento definido.'
      },
      {
        text: 'Um caminhão está sendo posicionado para carga/descarga na doca. Você percebe um pequeno intervalo na movimentação e pensa em atravessar rápido. O que fazer?',
        options: {
          a: 'Atravessar rápido, já que o motorista provavelmente já viu você.',
          b: 'Fazer um sinal para o motorista e atravessar com cuidado enquanto ele responde.',
          c: 'Avaliar a situação e seguir o procedimento definido para circulação segura na doca.',
          d: 'Esperar o caminhão buzinar para saber se é seguro passar.'
        },
        correct: 'c',
        concept: 'Na doca, o caminhão pode não te ver — ponto cego, ré, pressa e distração aumentam o risco. Avaliar e seguir o procedimento é sempre mais seguro do que confiar que "o motorista viu".'
      },
      {
        text: 'A visibilidade em um corredor está comprometida por condensação, vapor ou gelo, mas é um caminho que você já conhece bem. Qual é a atitude mais segura?',
        options: {
          a: 'Seguir normalmente, já que conhece o caminho e sabe se virar.',
          b: 'Reduzir o ritmo e seguir com mais atenção, contando com a experiência prévia.',
          c: 'Avaliar a situação e seguir o procedimento definido para deslocamentos com visibilidade comprometida.',
          d: 'Pedir para outra pessoa ir na frente enquanto você segue no ritmo normal.'
        },
        correct: 'c',
        concept: 'Conhecer o caminho não elimina o risco quando as condições mudam. "Eu conheço o caminho, está tudo bem" é exatamente o tipo de excesso de confiança que a Análise do Método dos 5A previne.'
      }
    ]
  }
];

// Achata tudo em uma lista sequencial de perguntas, cada uma sabendo a que módulo/rodada pertence.
function buildFlatQuestions() {
  const flat = [];
  let globalIndex = 0;
  for (const mod of modules) {
    mod.questions.forEach((q, idxInModule) => {
      flat.push({
        id: `m${mod.id}-q${idxInModule + 1}`,
        index: globalIndex,
        roundId: mod.id,
        roundTitle: mod.title,
        text: q.text,
        options: q.options,
        correct: q.correct,
        concept: q.concept || ''
      });
      globalIndex++;
    });
  }
  return flat;
}

module.exports = { modules, questions: buildFlatQuestions() };
