# Contador de Visitas

Este projeto implementa um contador de visitas utilizando **React** com **useState**, **useEffect**, **localStorage** e **AbortController**. A cada visita à página, o contador é incrementado e salvo no `localStorage`. Também é possível zerar o contador com um botão.

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface de usuário.
- **useState**: Hook para armazenar e atualizar o número de visitas.
- **useEffect**: Hook para gerenciar os efeitos colaterais, como o armazenamento de visitas no `localStorage`.
- **localStorage**: API para persistir dados no navegador entre as recargas da página.
- **AbortController**: Usado para evitar a execução duplicada do `useEffect` no modo estrito do React.
