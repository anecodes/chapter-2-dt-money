import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

//* Funcionalidade do Typescript, na qual você pode utilizar uma tipagem anterior (nesse caso, a Transaction)
//* e "omitir" as propriedades que desejar sem precisar criar um interface novo.
type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

//* Contexto: compartilhamento de estado entre vários componentes da aplicação.

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  //! Aqui, com o api declarada em 'services', serão buscadas as informações
  //! contidas em /transactions com a função .get() (que é
  //! a mesma coisa que o método GET HTTP)

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    //* Aqui, o uso do método é diferente. Usa-se o POST pois está sendo feita uma inserção na API. A rota, assim como
    //* a do método GET, está em src/index.tsx.
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
