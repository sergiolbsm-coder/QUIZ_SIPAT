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
        text: 'O que deve ser feito na etapa "Avaliação" do Método dos 5A?',
        options: {
          a: 'Avaliar os riscos, as possíveis consequências e as opções disponíveis.',
          b: 'Executar a tarefa e avaliar somente o resultado final.',
          c: 'Considerar apenas os riscos que já provocaram acidentes.',
          d: 'Transferir a decisão para o profissional mais experiente.'
        },
        correct: 'a',
        concept: 'Avaliar significa pensar antes de agir e compreender o impacto da decisão.'
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
          b: 'Segurança é uma escolha diária baseada em atenção, avaliação e atitude.',
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
        text: 'Por que a crença "É só desta vez" representa um risco?',
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
      }
    ]
  },
  {
    id: 5,
    title: 'Inteligência emocional e comunicação',
    questions: [
      {
        text: 'No Semáforo Emocional, qual ação é indicada para a cor vermelha?',
        options: {
          a: 'Manter o ritmo e finalizar a tarefa antes de fazer uma pausa.',
          b: 'Reduzir o ritmo, parar quando necessário, respirar e buscar apoio.',
          c: 'Aguardar que outra pessoa perceba os sinais.',
          d: 'Evitar comunicar o estado emocional para não preocupar a equipe.'
        },
        correct: 'b',
        concept: ''
      },
      {
        text: 'O que a cor amarela representa no Semáforo Emocional?',
        options: {
          a: 'Um estado de equilíbrio e alta energia.',
          b: 'Sinais de tensão, cansaço ou dificuldade de concentração que exigem atenção.',
          c: 'Uma situação de crise que exige o afastamento imediato.',
          d: 'Um estado emocional sem interferência na segurança.'
        },
        correct: 'b',
        concept: ''
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
        concept: ''
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
        concept: 'Sono, pressa, distração e excesso de confiança podem formar uma cadeia de decisões inseguras.'
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
        concept: 'Voltar para casa em segurança é parte do objetivo de qualquer jornada de trabalho.'
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
        concept: 'Vacinação e exames preventivos são medidas complementares, não substitutas.'
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
