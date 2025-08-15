# Plano para o Projeto React Native com PostgreSQL

## Objetivo
Criar um aplicativo React Native com TypeScript baseado na primeira página do protótipo Figma fornecido, com conexão a um banco de dados PostgreSQL via API Node.js + Express.

## Estrutura do Projeto
- **/mobile**: Código React Native
  - Componentes funcionais com hooks
  - Tipos para props e estados
  - Estilos com StyleSheet
- **/backend**: API Node.js + Express
  - Conexão com PostgreSQL
  - Endpoint simples para SELECT de dados

## Detalhes do Desenvolvimento

### React Native
- Criar tela inicial (onboarding) conforme o design da primeira página do Figma
- Usar cores, fontes, tamanhos e espaçamentos conforme protótipo
- Garantir responsividade para iOS e Android
- Comentar detalhadamente em português explicando cada componente, tipo e estilo
- Código limpo e escalável para futuras expansões

### Backend
- Configurar conexão com PostgreSQL usando `pg` (node-postgres)
- Criar endpoint GET `/items` que retorna dados de uma tabela exemplo
- Comentários em português explicando configuração e uso
- Indicar local para configurar credenciais do banco

## Bibliotecas
- React Native + TypeScript
- Express
- pg (PostgreSQL client)
- Outras bibliotecas padrão necessárias para funcionamento

## Próximos Passos
- Aguardar confirmação do plano
- Implementar estrutura do projeto conforme descrito
- Testar conexão e funcionalidade básica

---

Este plano visa garantir clareza e organização antes da implementação.
