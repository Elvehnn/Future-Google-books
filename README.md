# projector
RS SChool React course final task

1.  [Задание](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react/final-task-project-management-app.md)
2. 
![image](https://user-images.githubusercontent.com/78958096/170518956-73202a4e-b5a6-4016-ad68-8128c76c29e6.png)
3. [Projector  deploy link ](https://rs-projector.herokuapp.com/)

### Welcome route - max 7 балов

- [x] На приветственной странице должны отображаться общие сведения о команде, проекте, курсе. **1 балл**
- [x] В верхнем правом углу должны быть доступны 2 кнопки Sign In и Sign Up. **1 балл**
- [x] При наличии неистёкшего токена, заменить кнопки Sign In и Sign Up на кнопку "Go to Main Page". **2 балла**
- [x] При истечении срока жизни токена - пользователь автоматически должен быть перенаправлен на "Welcome page". **2 балла**
- [x] Нажатие на кнопку Sign In / Sign Up автоматически перенаправляет нас на роут с формой для Sign In / Sign Up. **1 балл**

### Sign In / Sign Up  - max 8 балов

- [x] Кнопки для Sign In / Sign Up / Sign Out есть везде где они предусмотрены **2 балл**
- [x] Поля форм должны быть реализованы в соответствии с api backend приложения. Должна быть реализована валидация. **4 баллов**
- [x] При успешном логине пользователь должен быть перенаправлен на "Main route" **1 балл**
- [x] Если пользователь залогинен, то при попытке пройти на эти роуты он должен быть перенаправлен на Main route. **1 баллов**

### Main route max 8 балов

- [x] Функционал создания борды **2 балла**
- [x] Отображает борды списком. **1 балл**
- [x] Борды отображаются с маленьким превью из доступной информации (title, description, etc). По клику на элемент переходим на board item (Board route). Также должна присутствовать кнопка для удаления борды.  **1 балл**
- [x] При попытке удаления борды мы должны получить Confirmation modal в котором должны подтвердить серёзность наших намерений. Confirmation modal должен быть универсальным компонентом (одним на всё приложение).  **1 балл**
- [x] Реализован функционал редактирования профиля пользователя.  **3 балла**

### Board route  max 26 балов

- [x] Должны присутствовать кнопки для создания колонки.   **1 балл**
- [x] Если к борде привязана хотябы одна колонка - отображаем / делаем доступной также и кнопку создания таски.   **1 балл**
- [x] Для создания колонки / таска используются формы, отображаемые в модальных окнах.   **3 балла**
- [x] При переполнении количеством тасок колонки - скролл внутри колонки. **2 балл**
- [x] Страница на данном роуте не должна иметь вертикального скролла.  **1 балл**
- [x] С помощью drag-n-drop мы можем менять колонки местами.  **3 балла**
- [x] С помощью drag-n-drop мы можем менять очерёдность тасок в рамках колонки.  **3 балла**
- [x] С помощью drag-n-drop мы можем менять принадлежность таски к колонке.  **5 балл**
- [x] Реализован функционал просмотра, и редактирования всего содержимого таски. **3 балла**
- [x] Реализовать возможность удалить таск. Кнопка delete task должна быть расположена в удобном для пользователя месте. При нажатии: confirmation modal -> удаление.  **1 балл**
- [x] Вверху колонки должен быть Title. При нажатии на него он из текста должен превращаться в input, слева от которого будут кнопки Submit и Cancel. После ввода текста в input и нажатия submit - Title колонки должен поменяться.   **2 балла**
- [x] На колонке должна присутствовать кнопка delete. По нажатию - Confirmation modal - при апруве - удаление. **1 балл**

### Общие требования max 11 балов

- [x] Ошибки со стороны BE - (Not found, unhandled rejection, etc) должны отображаться пользователю в user-friendly формате (toast, pop-up или что-то подобное, на ваше усмотрение). **5 балла**
- [x] Локализация **2 балла**
- [x] Backend задеплоен **1 балл**
- [x] sticky-Header  **1 балл**
- [x] Доп. функционал 
   - рандомные обои в Board route и Main route - 1 балл
   - выбор цвета для ярлыков колонок + привязка цвета к колонкам при д-н-д   - 1 бал

