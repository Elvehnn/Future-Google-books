import {
  books,
  totalItems,
  selectedBook,
  searchValue,
  startIndex,
  isLoading,
  error,
} from './reducer';

import { BOOK_ARRAY } from '../constants/constants';
import { setBooksArray } from './actions';

describe('reducer', () => {
  test('should return the initial state', () => {
    expect(books(undefined, { type: 'create', searchResult: BOOK_ARRAY })).toEqual([]);
  });

  test('should add books to empty array', () => {
    expect(books([], setBooksArray([BOOK_ARRAY[0]]))).toEqual([
      {
        id: '1qceEAAAQBAJ',

        volumeInfo: {
          title: 'Система модулей Java',
          authors: ['Парлог Николай'],
          description:
            'Создать надёжное и безопасное приложение гораздо проще, если упаковать код в аккуратные блоки. Система модулей в Java представляет собой языковой стандарт для создания таких блоков. Теперь вы можете контролировать взаимодействия различных JAR и легко обнаруживать недостающие зависимости. Фундаментальные изменения архитектуры затронули ядро Java, начиная с версии 9. Все API ядра распространяются в виде модулей, а для библиотек, фреймворков и приложений аналогичный подход можно считать хорошей практикой и рекомендацией. Вы освоите наилучшие практики модульного проектирования, отладки приложения и его развертывания перед сдачей в продакшен. В этой книге - Архитектура модульного приложения Java. - Создание модулей: от исходников до JAR-файлов. - Миграция на версию Java с модулями. - Избавление от зависимостей и оттачивание API. - Обработка рефлексии и версионирование.',
          categories: ['Computers'],
          imageLinks: {
            smallThumbnail:
              'http://books.google.com/books/content?id=1qceEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            thumbnail:
              'http://books.google.com/books/content?id=1qceEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          },
        },
      },
    ]);
  });

  //   test('should add todo to an empty list', () => {
  //     expect(todos(undefined, addTodo('Learn React'))).toEqual([
  //       {
  //         id: 0,
  //         todo: 'Learn React',
  //         completed: false,
  //       },
  //     ]);
  //   });

  //   test('should add todo to an existing list', () => {
  //     expect(todos(previousState, addTodo('Write tests'))).toEqual([
  //       {
  //         id: 0,
  //         todo: 'Learn React',
  //         completed: true,
  //       },
  //       {
  //         id: 1,
  //         todo: 'Use Redux',
  //         completed: false,
  //       },
  //       {
  //         id: 2,
  //         todo: 'Write tests',
  //         completed: false,
  //       },
  //     ]);
  //   });

  //   test('should edit todo in a list', () => {
  //     expect(
  //       todos(
  //         previousState,
  //         editTodo({
  //           id: 0,
  //           todo: 'Learn React Native',
  //           completed: true,
  //         })
  //       )
  //     ).toEqual([
  //       {
  //         id: 0,
  //         todo: 'Learn React Native',
  //         completed: true,
  //       },
  //       {
  //         id: 1,
  //         todo: 'Use Redux',
  //         completed: false,
  //       },
  //     ]);
  //   });

  //   test('should delete all completed todos in a list', () => {
  //     expect(todos(previousState, clearCompletedTodos())).toEqual([
  //       {
  //         id: 0,
  //         todo: 'Use Redux',
  //         completed: false,
  //       },
  //     ]);
  //   });

  //   test('should toggle todo to completed', () => {
  //     expect(todos(previousState, toggleTodo(1))).toEqual([
  //       {
  //         id: 0,
  //         todo: 'Learn React',
  //         completed: true,
  //       },
  //       {
  //         id: 1,
  //         todo: 'Use Redux',
  //         completed: true,
  //       },
  //     ]);
  //   });

  //   test('should toggle todo to active', () => {
  //     expect(todos(previousState, toggleTodo(0))).toEqual([
  //       {
  //         id: 0,
  //         todo: 'Learn React',
  //         completed: false,
  //       },
  //       {
  //         id: 1,
  //         todo: 'Use Redux',
  //         completed: false,
  //       },
  //     ]);
  //   });

  //   test('should toggle all todos to completed', () => {
  //     expect(
  //       todos(
  //         [
  //           {
  //             id: 0,
  //             todo: 'Learn React',
  //             completed: false,
  //           },
  //           {
  //             id: 1,
  //             todo: 'Use Redux',
  //             completed: false,
  //           },
  //         ],
  //         toggleAllTodo(true)
  //       )
  //     ).toEqual([
  //       {
  //         id: 0,
  //         todo: 'Learn React',
  //         completed: true,
  //       },
  //       {
  //         id: 1,
  //         todo: 'Use Redux',
  //         completed: true,
  //       },
  //     ]);
  //   });

  //   test('should toggle all todos to active', () => {
  //     expect(
  //       todos(
  //         [
  //           {
  //             id: 0,
  //             todo: 'Learn React',
  //             completed: true,
  //           },
  //           {
  //             id: 1,
  //             todo: 'Use Redux',
  //             completed: true,
  //           },
  //         ],
  //         toggleAllTodo(false)
  //       )
  //     ).toEqual([
  //       {
  //         id: 0,
  //         todo: 'Learn React',
  //         completed: false,
  //       },
  //       {
  //         id: 1,
  //         todo: 'Use Redux',
  //         completed: false,
  //       },
  //     ]);
  //   });

  //   test('should delete todo', () => {
  //     expect(todos(previousState, deleteTodo(1))).toEqual([
  //       {
  //         id: 0,
  //         todo: 'Learn React',
  //         completed: true,
  //       },
  //     ]);
  //   });

  //   test('should set filter Completed', () => {
  //     expect(filter('', setFilter(FILTER_OPTIONS.SHOW_COMPLETED))).toBe('Completed');
  //   });

  //   test('should set filter Active', () => {
  //     expect(filter('', setFilter(FILTER_OPTIONS.SHOW_ACTIVE))).toBe('Active');
  //   });

  //   test('should set filter All', () => {
  //     expect(filter('', setFilter(FILTER_OPTIONS.SHOW_ALL))).toBe('');
  //   });

  //   test('should return initial filter state', () => {
  //     expect(filter(undefined, { type: '' })).toBe('');
  //   });

  //   test('should return allButtonChecked initial state', () => {
  //     expect(allButtonChecked(undefined, { type: 'unknow' })).toBeFalsy();
  //   });

  //   test('should set allButtonChecked to true', () => {
  //     expect(allButtonChecked(false, selectAllButtonChecked(true))).toBeTruthy();
  //   });

  //   test('should set allButtonChecked to false', () => {
  //     expect(allButtonChecked(true, selectAllButtonChecked(false))).toBeFalsy();
  //   });
});
