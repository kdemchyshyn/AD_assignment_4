// Task 1
const database = 'bookstore';
const collection = 'books';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);

// Select the database to use.
use('bookstore');

// Insert a few documents into the books collection.
db.getCollection('books').insertMany([
  { "_id": ObjectId(), "title": "Відьмак. Останнє бажання", "author": "Анджей Сапковський", "category": "Dark Fantasy", "price": 390, "in_stock": true, "published_year": 2016, "rating": 4.9 },
  { "_id": ObjectId(), "title": "Відьмак. Меч призначення", "author": "Анджей Сапковський", "category": "Dark Fantasy", "price": 390, "in_stock": true, "published_year": 2016, "rating": 4.8 },
  { "_id": ObjectId(), "title": "Відьмак. Кров ельфів", "author": "Анджей Сапковський", "category": "Dark Fantasy", "price": 390, "in_stock": false, "published_year": 2016, "rating": 4.7 },
  { "_id": ObjectId(), "title": "Володар Перснів. Хранителі Персня", "author": "Дж. Р. Р. Толкін", "category": "Epic Fantasy", "price": 450, "in_stock": true, "published_year": 2021, "rating": 5.0 },
  { "_id": ObjectId(), "title": "Володар Перснів. Дві вежі", "author": "Дж. Р. Р. Толкін", "category": "Epic Fantasy", "price": 450, "in_stock": true, "published_year": 2022, "rating": 4.9 },
  { "_id": ObjectId(), "title": "Володар Перснів. Повернення короля", "author": "Дж. Р. Р. Толкін", "category": "Epic Fantasy", "price": 480, "in_stock": true, "published_year": 2022, "rating": 5.0 },
  { "_id": ObjectId(), "title": "Гобіт, або Туди і звідти", "author": "Дж. Р. Р. Толкін", "category": "High Fantasy", "price": 320, "in_stock": true, "published_year": 2021, "rating": 4.8 },
  { "_id": ObjectId(), "title": "Гра престолів", "author": "Джордж Р. Р. Мартін", "category": "Epic Fantasy", "price": 550, "in_stock": true, "published_year": 2018, "rating": 4.9 },
  { "_id": ObjectId(), "title": "Битва королів", "author": "Джордж Р. Р. Мартін", "category": "Epic Fantasy", "price": 570, "in_stock": false, "published_year": 2019, "rating": 4.8 },
  { "_id": ObjectId(), "title": "Буря мечів", "author": "Джордж Р. Р. Мартін", "category": "Epic Fantasy", "price": 620, "in_stock": true, "published_year": 2020, "rating": 4.9 },
  { "_id": ObjectId(), "title": "Шлях королів. Книга 1", "author": "Брендон Сандерсон", "category": "High Fantasy", "price": 650, "in_stock": true, "published_year": 2023, "rating": 5.0 },
  { "_id": ObjectId(), "title": "Слова сяйва. Книга 2", "author": "Брендон Сандерсон", "category": "High Fantasy", "price": 690, "in_stock": true, "published_year": 2024, "rating": 4.9 },
  { "_id": ObjectId(), "title": "Четверте крило", "author": "Ребекка Яррос", "category": "Romantic Fantasy", "price": 490, "in_stock": true, "published_year": 2023, "rating": 4.7 },
  { "_id": ObjectId(), "title": "Залізне полум'я", "author": "Ребекка Яррос", "category": "Romantic Fantasy", "price": 520, "in_stock": true, "published_year": 2024, "rating": 4.6 },
  { "_id": ObjectId(), "title": "Двір шпильків і троянд", "author": "Сара Дж. Маас", "category": "Romantic Fantasy", "price": 420, "in_stock": true, "published_year": 2021, "rating": 4.8 },
  { "_id": ObjectId(), "title": "Двір гніву і туману", "author": "Сара Дж. Маас", "category": "Romantic Fantasy", "price": 440, "in_stock": false, "published_year": 2022, "rating": 4.9 },
  { "_id": ObjectId(), "title": "Шістка воронів", "author": "Лі Бардуґо", "category": "Dark Fantasy", "price": 380, "in_stock": true, "published_year": 2020, "rating": 4.8 },
  { "_id": ObjectId(), "title": "Королівство шахраїв", "author": "Лі Бардуґо", "category": "Dark Fantasy", "price": 400, "in_stock": true, "published_year": 2021, "rating": 4.7 },
  { "_id": ObjectId(), "title": "Американські боги", "author": "Ніл Ґейман", "category": "Urban Fantasy", "price": 460, "in_stock": true, "published_year": 2019, "rating": 4.6 },
  { "_id": ObjectId(), "title": "Небудь-де", "author": "Ніл Ґейман", "category": "Urban Fantasy", "price": 340, "in_stock": true, "published_year": 2021, "rating": 4.7 },
  { "_id": ObjectId(), "title": "Казка", "author": "Стівен Кінґ", "category": "Dark Fantasy", "price": 590, "in_stock": true, "published_year": 2023, "rating": 4.8 },
  { "_id": ObjectId(), "title": "Стрілець. Темна вежа I", "author": "Стівен Кінґ", "category": "Dark Fantasy", "price": 310, "in_stock": true, "published_year": 2018, "rating": 4.5 },
  { "_id": ObjectId(), "title": "Колір магії", "author": "Террі Пратчетт", "category": "Comic Fantasy", "price": 290, "in_stock": true, "published_year": 2017, "rating": 4.7 },
  { "_id": ObjectId(), "title": "Право на чари", "author": "Террі Пратчетт", "category": "Comic Fantasy", "price": 290, "in_stock": true, "published_year": 2018, "rating": 4.8 },
  { "_id": ObjectId(), "title": "Морт", "author": "Террі Пратчетт", "category": "Comic Fantasy", "price": 310, "in_stock": false, "published_year": 2018, "rating": 4.9 },
  { "_id": ObjectId(), "title": "Місто кісток", "author": "Кассандра Клер", "category": "Urban Fantasy", "price": 395, "in_stock": true, "published_year": 2022, "rating": 4.5 },
  { "_id": ObjectId(), "title": "Крізь дзеркала. Зимові заручини", "author": "Крістелль Дабо", "category": "High Fantasy", "price": 430, "in_stock": true, "published_year": 2020, "rating": 4.7 },
  { "_id": ObjectId(), "title": "Ніч у самотньому жовтні", "author": "Роджер Желязни", "category": "Urban Fantasy", "price": 280, "in_stock": true, "published_year": 2021, "rating": 4.8 },
  { "_id": ObjectId(), "title": "Ельфійський престол", "author": "Голлі Блек", "category": "Romantic Fantasy", "price": 370, "in_stock": true, "published_year": 2023, "rating": 4.6 },
  { "_id": ObjectId(), "title": "Лев, біла відьма та шафа", "author": "К. С. Льюїс", "category": "High Fantasy", "price": 260, "in_stock": true, "published_year": 2017, "rating": 4.9 }
]);

// Task 2
// Create
const newBooks = db.getCollection('books').insertMany([
  { "_id": ObjectId(), "title": "Ритуал", "author": "Марина та Сергій Дяченки", "category": "Romantic Fantasy", "price": 120, "in_stock": false, "published_year": 2006, "rating": 4.8 },
  { "_id": ObjectId(), "title": "Гаррі Поттер і філософський камінь", "author": "Джоан Роулінг", "category": "Children's Fantasy", "price": 150, "in_stock": true, "published_year": 2002, "rating": 4.9 },
  { "_id": ObjectId(), "title": "Чарівник Земномор'я", "author": "Урсула Ле Ґуїн", "category": "High Fantasy", "price": 140, "in_stock": true, "published_year": 2005, "rating": 4.7 },
  { "_id": ObjectId(), "title": "Гонихмарник", "author": "Дара Корній", "category": "Urban Fantasy", "price": 110, "in_stock": true, "published_year": 2010, "rating": 4.6 },
  { "_id": ObjectId(), "title": "Шлях меча", "author": "Генрі Лайон Олді", "category": "Heroic Fantasy", "price": 130, "in_stock": false, "published_year": 2008, "rating": 4.8 }
]);

// Read
// Find all books in the "Dark Fantasy" category.
const booksCategoryDarkFantasy = db.getCollection('books').find({
  category: "Dark Fantasy"
});

// Find books published after 2017.
const booksPublishedAfter2017 = db.getCollection('books').find({
  published_year: { $gt: 2017 }
});

// Find books priced above 300 hryven.
const booksPricedAbove300 = db.getCollection('books').find({
  price: { $gt: 300 }
});

// Find books currently in stock.
const booksInStock = db.getCollection('books').find({
  in_stock: true
});

// Find books written by a specific author.
const booksWrittenByGeorgeMartin = db.getCollection('books').find({
  author: "Джордж Р. Р. Мартін"
});

// Find books with a rating greater than 4.8.
const booksWithHighRating = db.getCollection('books').find({
  rating: { $gte: 4.8 }
});

// Print all the books filtered.
{
  console.log("Books in the 'Dark Fantasy' category (" + booksCategoryDarkFantasy.count() + "):");
  booksCategoryDarkFantasy.forEach(book => {
    console.log(book.title);
  });

  console.log("\nBooks published after 2017 (" + booksPublishedAfter2017.count() + "):");
  booksPublishedAfter2017.forEach(book => {
    console.log(book.title);
  });

  console.log("\nBooks priced above 300 hryven (" + booksPricedAbove300.count() + "):");
  booksPricedAbove300.forEach(book => {
    console.log(book.title);
  });

  console.log("\nBooks currently in stock (" + booksInStock.count() + "):");
  booksInStock.forEach(book => {
    console.log(book.title);
  });

  console.log("\nBooks written by George R. R. Martin (" + booksWrittenByGeorgeMartin.count() + "):");
  booksWrittenByGeorgeMartin.forEach(book => {
    console.log(book.title);
  });

  console.log("\nBooks with a rating greater than 4.8 (" + booksWithHighRating.count() + "):");
  booksWithHighRating.forEach(book => {
    console.log(book.title);
  });
}

// Update
// Change the price of a book.
const bookPriceUpdate = db.getCollection('books').updateOne(
  { title: "Морт" },
  { $set: { price: 420 } }
);

// Update stock availability.
const bookStockUpdate = db.getCollection('books').updateOne(
  { title: "Відьмак. Останнє бажання" },
  { $set: { in_stock: false } }
);

// Increase the rating of a selected book.
const bookRatingUpdate = db.getCollection('books').updateOne(
  { title: "Гаррі Поттер і філософський камінь" },
  { $set: { rating: 5.0 } }
);


// Delete
const bookDelete = db.getCollection('books').deleteMany({
  $or: [
    { title: "Американські боги" },
    { title: "Небудь-де" }
  ]
});



// Task 3
// Average book price per category.
const averagePricePerCategory = db.getCollection('books').aggregate([
    {$group: {
        _id: "$category",
        averagePrice: {$avg: "$price"}
    }}
]);

// Number of books per category.
const numberOfBooksPerCategory = db.getCollection('books').aggregate([
    {$group:{
        _id: "$category",
        count: {$sum: 1}
    }}
]);

// Average rating per category.
const averageRatingPerCategory = db.getCollection('books').aggregate([
    {$group: {
        _id: "$category",
        averageRating: {$avg: "$rating"}
    }}
]);

// Top 5 most expensive books.
const top5MostExpensiveBooks = db.getCollection('books').aggregate([
    {$sort: {price: -1}},
    {$limit: 5}
]);

{
  console.log("\nAverage book price per category:");
  averagePricePerCategory.forEach(result => {
    console.log(result._id + ": " + result.averagePrice.toFixed(2) + " hryven");
  });

  console.log("\nNumber of books per category:");
  numberOfBooksPerCategory.forEach(result => {
    console.log(result._id + ": " + result.count + " books");
  });

  console.log("\nAverage rating per category:");
  averageRatingPerCategory.forEach(result => {
    console.log(result._id + ": " + result.averageRating.toFixed(2));
  });

  console.log("\nTop 5 most expensive books:");
  top5MostExpensiveBooks.forEach(book => {
    console.log(book.title + " - " + book.price + " hryven");
  });
}

// Task 4
// step 1
db.books.find({
    category: "Urban Fantasy",
    published_year: { $gte: 2021 }
}).explain("executionStats")

// step 2
db.books.createIndex({
    category: 1,
    published_year: 1
})

//step 3
db.books.find({
    category: "Urban Fantasy",
    published_year: { $gte: 2021 }
}).explain("executionStats")