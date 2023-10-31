using LearningWebApp.Models;
using LearningWebApp.Utils;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;

namespace LearningWebApp.Services
{
    public class MongoDBService
    {
        private readonly IMongoCollection<TodoItem> _todoCollection;

        public MongoDBService(IOptions<MongoDBSettings> mongoDBSettings)
        {
            MongoClient client = new MongoClient(mongoDBSettings.Value.ConnectionURI);
            IMongoDatabase database = client.GetDatabase(mongoDBSettings.Value.DatabaseName);
            _todoCollection = database.GetCollection<TodoItem>(mongoDBSettings.Value.CollectionName);

        }

        public async Task CreateTodoItem(TodoItem todo)
        {
            await _todoCollection.InsertOneAsync(todo);
            return;
        }
        
        public async Task<List<TodoItem>> GetTodoItemsAsync()
        {
            return await _todoCollection.Find(new BsonDocument()).ToListAsync();
        }

        public async Task UpdateTodoItemDoneAsync(string id, bool isComplete)
        {
            FilterDefinition<TodoItem> filter = Builders<TodoItem>.Filter.Eq("Id", id);
            UpdateDefinition<TodoItem> update = Builders<TodoItem>.Update.Set(item => item.isComplete, isComplete);
            await _todoCollection.UpdateOneAsync(filter, update);
            return;
        }

        public async Task DeleteTaskAsync(string id)
        {
            FilterDefinition<TodoItem> filter = Builders<TodoItem>.Filter.Eq("Id", id);
            await _todoCollection.DeleteOneAsync(filter);
            return;
        }


    }
}
