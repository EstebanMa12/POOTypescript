// SINGLETON
// 1. A class that can only have one instance
// 2. Provides a global access point to that instance
// 3. Example: Database connection
// Hace referencia a uno de los patrones SOLID
// Singleton es un constructor privado
// Singleton nos previene crear múltiples instancias de una clase.
// Esto es muy usado en Arquitectura de Software, pues nos ayuda a ahorrar uso de memoria.





// Ejemplo de Singleton



export class MyService{
  static instance: MyService | null = null;

  private constructor(private name: string){}

  getName(){
    return this.name;
  }

  static create(name: string){
    if(!this.instance){
      console.log('Debería solo entrar una vez');

      this.instance = new MyService(name);
    }
    return this.instance;
  }
}
const myService1 = MyService.create('service 1');
console.log(myService1.getName());
const myService2 = MyService.create('service 2')
console.log(myService2.getName());

console.log(myService1===myService2);

