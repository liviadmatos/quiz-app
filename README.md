# Quiz App

Aplicativo de quiz em React Native com Expo, com sistema de pontuação, vidas e tela de resultado.

## Visão geral

Este projeto é um quiz interativo com:

- perguntas em sequência
- 3 vidas por partida
- pontuação acumulada
- feedback visual de resposta correta ou incorreta
- reinício automático ao perder todas as vidas
- tela de resultado final
- visual moderno com estilo gamer

## Tecnologias

- React Native
- Expo
- TypeScript

## Requisitos

Antes de rodar o projeto, verifique se você possui:

- Node.js instalado
- Expo CLI ou suporte ao comando `npx expo`
- emulador Android/iOS ou dispositivo físico com Expo Go

## Instalação

1. Abra o terminal na pasta do projeto
2. Instale as dependências:

```bash
npm install
```

## Execução

Para iniciar o app:

```bash
npm start
```

Depois, escolha uma opção:

- Android
- iOS
- Web
- ou use o QR Code no Expo Go

## Estrutura principal

```bash
quiz-app/
├── app/
│   ├── _layout.tsx
│   └── index.tsx
├── components/
│   ├── QuizScreen.tsx
│   ├── ResultScreen.tsx
│   ├── ExemploComUseState.tsx
│   └── ExemploSemUseState.tsx
├── questions.json
├── app.json
├── package.json
├── tsconfig.json
├── eslint.config.js
├── expo-env.d.ts
├── README.md
└── AGENTS.md
```

## Personalização

Você pode alterar as perguntas no arquivo:

```bash
questions.json
```

Cada pergunta possui:

- `question`: texto da pergunta
- `options`: opções de resposta
- `correctAnswer`: resposta correta

## Como funciona a lógica

- o jogador escolhe uma alternativa
- se acertar, ganha 1 ponto
- se errar, perde uma vida
- ao errar 3 vezes, o jogador perde todas as vidas e reinicia
- após 2 segundos, a próxima pergunta é exibida automaticamente

## Observações

Este projeto foi desenvolvido como exemplo de quiz em React Native com Expo e pode ser expandido com:

- sons
- animações extras
- ranking
- persistência de pontuação
- múltiplos níveis ou temas

## Licença

Este projeto foi criado para fins de estudo e demonstração.
