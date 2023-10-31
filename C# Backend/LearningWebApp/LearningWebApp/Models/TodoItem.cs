using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace LearningWebApp.Models
{
    public class TodoItem
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id {  get; set; }

        public string? name { get; set; }
        public bool isComplete { get; set; }


    }
}
