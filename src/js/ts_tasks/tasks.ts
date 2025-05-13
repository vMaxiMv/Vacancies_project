// Задание 1
// Создать тип "Person" с полями "имя" (string), "возраст" (number) и "пол" (enum).
// Затем создать интерфейс "User", который должен включать тип "Person" и также содержать поле "email" (string) и "пароль" (string).
enum Пол {
    муж = "Мужской",
    жен = "Женский"
};

type Person = {
     имя: string,
     возраст: number,
     пол: Пол
}
interface User {
    person: Person,
    email: string,
    пароль: string
}

// Задание 2
// Создать тип "Animal" с общими полями для животных: "имя" (string), "возраст" (number) и "тип" (enum).
// Затем на основе этого типа создать интерфейсы для конкретных животных: "Кошка", "Собака" и "Птица",
// каждая из которых должна содержать дополнительные поля, свойственные именно этому виду животных.

enum Тип {
    кошка = "Кошка",
    собака = "Собака",
    птица = "Птица" 
}

type Animal = {
    имя: string,
    возраст: number,
    тип: Тип
}
interface Кошка extends Animal{
   домашняя: boolean
}

interface Собака extends Animal{
    охотничья: boolean
 }

 interface Птица extends Animal{
    умеетЛетать: boolean
 }

 // Задание 3
 // Создать тип "Task" с полями "название" (string), "описание" (string), "статус" (enum) и "дата создания" (Date).
 // Затем создать тип "TaskList", который должен содержать массив объектов типа "Task" и методы для добавления, удаления и изменения задач.

enum Статус {
    В_работе,
    Ревью,
    Завершена
}

 type Task = {
    название: string,
    описание: string,
    статус: Статус,
    дата_создания: Date
}
type TaskList = {
    tasks: Task[],
    addTasks: (task:Task)=>void,
    deleteTasks: (task:Task)=>void,
    changeTasks: (task:Task)=>void,
}

// Задание 4
// Типизировать обобщенную функцию, которая принимает любой массив объектов и ключ, по которому нужно сгруппировать эти объекты, и возвращает объект,
// в котором ключами являются значения, полученные по этому ключу, а значениями — массивы объектов, у которых этот ключ совпадает.


function groupBy <T, K extends keyof T>(arr: T[], key: K): Record<string, T[]> {
    return arr.reduce((acc, cur) => {
      const groupKey = String(cur[key]);
      if (!acc[groupKey]) {
        acc[groupKey] = [];
      }
      acc[groupKey].push(cur);
      return acc;
    }, {} as Record<string, T[]>);
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



