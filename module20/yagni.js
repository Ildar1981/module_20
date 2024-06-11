//есть кусок кода который не влияет на приложение и функционал в задаче с фруктами
async function selectionSort(arr, comparation) {
    // обратите внимание на список инициализаций в цикле
    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
      let indexMin = i;
      // поиск минимального элемента в правой части массива
      for (let j = i + 1; j < l; j++) {
        if (comparation(arr[indexMin], arr[j])) {
          indexMin = j;
        }
      }
      // проверка корректности поиска и обмен значениями
      // при обмене используется деструктуризация
      if (indexMin !== i) {
        [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
      }
    }
    return arr;
  }
    