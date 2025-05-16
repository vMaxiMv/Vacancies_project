// Задание 1
// Создать тип "Person" с полями "имя" (string), "возраст" (number) и "пол" (enum).
// Затем создать интерфейс "User", который должен включать тип "Person" и также содержать поле "email" (string) и "пароль" (string).
enum GenderEnum {
    male = "Мужской",
    female = "Женский"
};

type PersonType = {
     name: string,
     age: number,
     gender: GenderEnum
}
interface IUser extends PersonType{
    email: string,
    password: string
}


// Задание 2
// Создать тип "Animal" с общими полями для животных: "имя" (string), "возраст" (number) и "тип" (enum).
// Затем на основе этого типа создать интерфейсы для конкретных животных: "Кошка", "Собака" и "Птица",
// каждая из которых должна содержать дополнительные поля, свойственные именно этому виду животных.

enum AnimalTypeEnum {
    cat = "Кошка",
    dog = "Собака",
    bird = "Птица" 
}

type AnimalType = {
    name: string,
    age: number,
    animalType: AnimalTypeEnum
}
interface ICat extends AnimalType{
   domestic: boolean
}

interface IDog extends AnimalType{
    hunting: boolean
 }

 interface IBird extends AnimalType{
    canFly: boolean
 }

 // Задание 3
 // Создать тип "Task" с полями "название" (string), "описание" (string), "статус" (enum) и "дата создания" (Date).
 // Затем создать тип "TaskList", который должен содержать массив объектов типа "Task" и методы для добавления, удаления и изменения задач.

enum StatusEnum {
    В_работе,
    Ревью,
    Завершена
}

 type TaskType = {
    name: string,
    description: string,
    status: StatusEnum,
    endDate: Date
}
type TaskListType = {
    tasks: TaskType[],
    addTasks: (task:TaskType)=>void,
    deleteTasks: (task:TaskType)=>void,
    changeTasks: (task:TaskType)=>void,
}

// Задание 4
// Типизировать обобщенную функцию, которая принимает любой массив объектов и ключ, по которому нужно сгруппировать эти объекты, и возвращает объект,
// в котором ключами являются значения, полученные по этому ключу, а значениями — массивы объектов, у которых этот ключ совпадает.


function groupBy <T, K extends keyof T>(arr: T[], key: K): Record<string, T[]> {
    return arr.reduce((acc: Record<string, T[]>, cur) => {
      const groupKey = String(cur[key]);
      if (!acc[groupKey]) {
        acc[groupKey] = [];
      }
      acc[groupKey].push(cur);
      return acc;
    }, {});
  }
  const objects = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 25 },
    { id: 4, name: 'David', age: 30 },
  ];
  
  const groupedByAge = groupBy(objects, 'age');
  console.log(groupedByAge);


// Задание 5
// Написать пример типизации метода map у массивов

const arr: number[] = [1,2,3,4,5]
const  newArr: number[] = arr.map((item: number):number => item * 2)



