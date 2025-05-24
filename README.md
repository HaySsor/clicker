# Clicker

**Demo:** [https://clicker-theta-six.vercel.app](https://clicker-theta-six.vercel.app)

**Repo:** [https://github.com/HaySsor/clicker](https://github.com/HaySsor/clicker)

---

## Projekt w pigułce

Clicker to prosta aplikacja napisana w React, w której użytkownik klika przycisk, aby zdobywać punkty. Mimo swojej prostoty, projekt stanowi świetne wprowadzenie do podstaw Reacta, zarządzania stanem za pomocą Context API i hooka `useReducer`. To doskonały mały projekt edukacyjny, pokazujący jak zorganizować logikę gry w klikacza i jak utrzymać globalny stan aplikacji.

---

## Kluczowe funkcjonalności

* **Klikanie** – każde naciśnięcie przycisku zwiększa wynik gracza.
* **Reset** – możliwość zresetowania punktów do zera.
* **Przechowywanie stanu** – wykorzystanie React Context do udostępniania stanu punktów w całej aplikacji.
* **Obsługa logiki** – `useReducer` zarządza akcjami `increment` i `reset`, co pozwala na czytelną i rozszerzalną logikę.

---

## Co się udało poćwiczyć?

* **Podstawy React** – tworzenie komponentów funkcyjnych, JSX, propsy.
* **Context API** – udostępnianie stanu i dispatcherów akcja w drzewie komponentów bez przekazywania propsów na wielu poziomach.
* **`useReducer`** – czysta separacja logiki aktualizacji stanu od komponentów prezentujących UI.
* **Prosta architektura** – podział na komponenty odpowiedzialne za prezentację (UI) i logikę (reducer, context).

---

## Tech Stack

* **Framework**: React
* **Język**: TypeScript/JavaScript
* **Zarządzanie stanem**: Context API + `useReducer`
* **Stylowanie**: CSS Modules lub zwykły CSS
* **Deployment**: Vercel

---

## Instalacja i uruchomienie lokalnie

1. Sklonuj repozytorium:

   ```bash
   git clone https://github.com/HaySsor/clicker.git
   cd clicker
   ```
2. Zainstaluj zależności:

   ```bash
   npm install
   # lub
   yarn install
   ```
3. Uruchom aplikację w trybie deweloperskim:

   ```bash
   npm run dev
   # lub
   yarn dev
   ```
4. Otwórz w przeglądarce: `http://localhost:3000`

---

## Jak to działa?

1. **Context** – `ClickContext` definiuje stan `count` i metody `increment`/`reset`.
2. **Reducer** – funkcja `clickReducer` obsługuje akcje `{ type: 'increment' }` i `{ type: 'reset' }`.
3. **Provider** – `ClickProvider` opakowuje aplikację, aby `count` i `dispatch` były dostępne w całym drzewie.
4. **Komponenty** – `ClickButton`, `ResetButton`, `Display` odczytują stan i wywołują odpowiednie akcje.

---

## Demo

Zobacz działającą wersję na Vercel:

> [https://clicker-theta-six.vercel.app](https://clicker-theta-six.vercel.app)

---

## Co dalej?

* Dodanie **efektów specjalnych** (animacje, dźwięki) przy kliknięciu.
* Rozszerzenie o **płynny wzrost** punktów (np. mnożniki).
* Zapisanie stanu w **LocalStorage** lub **backendzie**.
* Dodanie **podsumowania** oraz **historycznych statystyk**.

---

## Autor

**HaySsor**
GitHub: [https://github.com/HaySsor](https://github.com/HaySsor)
Portfolio: [https://haystor.dev](https://haystor.dev)
