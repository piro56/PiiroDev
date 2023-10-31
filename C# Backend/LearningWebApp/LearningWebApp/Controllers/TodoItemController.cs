using Microsoft.AspNetCore.Mvc;
using LearningWebApp.Models;
using LearningWebApp.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LearningWebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoItemController : ControllerBase
    {

        private readonly MongoDBService _mongoDbService;
        public TodoItemController(MongoDBService mongoDbService)
        {
            _mongoDbService = mongoDbService;
        }

        [HttpGet]
        public async Task<List<TodoItem>> Get()
        {
            return await _mongoDbService.GetTodoItemsAsync();
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] TodoItem todoItem)
        {
            await _mongoDbService.CreateTodoItem(todoItem);
            return CreatedAtAction(nameof(Get), new { id = todoItem.Id }, todoItem);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTaskCompletion(string id, [FromBody] bool isComplete)
        {
            await _mongoDbService.UpdateTodoItemDoneAsync(id, isComplete);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTaskAsync(string id)
        {
            await _mongoDbService.DeleteTaskAsync(id);
            return NoContent();
        }

    }
}
