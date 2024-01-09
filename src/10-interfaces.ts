import { Database } from './path/to/Database';
// Interfaces en clases
// Las interfaces en clases funcionan como contratos, nos permiten tipar tanto los atributos como los métodos.
// Las interfaces en clases también pueden ser implementadas por otras clases.
// Las interfaces en clases pueden heredar de otras interfaces.

export interface Driver{
    database: string;
    password: string;
    port: number;

    connect(): void;
    disconnect(): void;
    isConnected(name: string):boolean;
}

class PostgresDriver implements Driver{
  constructor(
    public database: string,
    public password: string,
    public port: number
  ){}
  connect() {
    console.log('Conectando a Postgres');
  }
  disconnect() {
    console.log('Desconectando de Postgres');
  }
  isConnected(name: string):boolean {
    return true;
  }
}

class OracleDriver implements Driver{
  constructor(
    public database: string,
    public password: string,
    public port: number
  ){}
  connect() {
    console.log('Conectando a Oracle');
  }
  disconnect() {
    console.log('Desconectando de Oracle');
  }
  isConnected(name: string):boolean {
    return true;
  }
}
const db = new Database();
const oracle = new OracleDriver('Oracle', '1234', 5432);
db.addDriver(oracle);
db.connect('Oracle');
