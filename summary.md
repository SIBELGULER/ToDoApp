
![](https://miro.medium.com/max/930/1*5tGJP0CeFamKb-qavmDbIg.png)
* Eğer kullanıcı yeni görev eklerse addTodoItem() metodu çalışacak ve reducer a eklenecek olan görev(todo) reducer’a geçirilerek var olan görevlere yeni bir görev eklenmiş olacak.
* Eğer kullanıcı mevcut olan görevlerden birini silmek isterse deleteTodo() metodu çalışacak ve reducer’a geçilen id’ye sahip olan görev, statelerden çıkarılmış olacak.

* TodoList.js dosyasında kullanıcı tarafından oluşturulmuş olan görevlerin listelenmesi işlemini yapalım.
* Burada App.js dosyasından aktarılan todos ve deleteTodo propsları bulunuyor. Todos, kullanıcı tarafından eklenen görevleri tutuyor. DeleteTodo ise kullanıcının görevlerden birinin üstüne tıklaması sonucunda o görevi silmesini sağlıyor.
* Todo.js dosyası görev listemizdeki görevlerin her birini temsil eden componentdır.
* AddTodo.js de kullanıcının her girdiği görevin içeriği ve idsi useState() hooku ile state olarak tutuluyor. Her yeni görev eklenmesi durumunda setId(id + 1) methodu yardımıyla id değeri bir arttırılıyor. Aynı şekilde her görev eklenmesi durumunda form alanının temizlenmesi için setTodoContent(“”) methodu kullanılıyor.
* npm start veya yarn start yazarak uygulamayı çalıştırabilirsiniz.
* medium örnek kod.