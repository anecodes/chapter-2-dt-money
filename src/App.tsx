/* ! Por que utilizar export function ao invés de export default?

Porque, ao utilizar 'export default', é possível importar o componente com qualquer nome que seja em qualquer arquivo.
Isso pode causar um problema com a segurança do componente (por exemplo, se confundir com o mesmo componente que
está com nomes diferentes). Utilizando o 'export function', o "importador" é obrigado a utilizar o mesmo nome
da função original, o que torna o processo de importação e exportação de componentes mais organizado e padronizado.*/
import Modal from "react-modal";
import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
