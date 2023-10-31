using LearningWebApp.Controllers;
using LearningWebApp.Utils;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using System.Xml.Linq;

namespace LearningWebApp.Database
{
    public sealed class MongoDBConn
    {
        private readonly ILogger<MongoDBConn> _logger;



        private bool _isInit = false;
        private string _connnectionString = "mongodb+srv://<username>:<password>@learning.l1oar3o.mongodb.net/?retryWrites=true&w=majority\r\n\r\n";
        private MongoClient client = null;


        private MongoDBConn()
        {
            _logger = LoggerFactory.Create(loggingBuilder => loggingBuilder
                                    .SetMinimumLevel(LogLevel.Trace)
                                    .AddConsole()).CreateLogger<MongoDBConn>();
        }
        private static MongoDBConn instance = null;
        public static MongoDBConn Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = new MongoDBConn();
                }
                return instance;
            }
        }

        public void init()
        {
            if (_isInit) return;

            createConnectionString();
            client = new MongoClient(_connnectionString);
            _logger.LogDebug("Database Connected.");

            debugListDatabaseNames();


        }

        public IEnumerable<string> getDBNames()
        {
            List<string> dbNames = new List<string>();
            IAsyncCursor<string> cursor = client.ListDatabaseNames();
            cursor.ForEachAsync(dbname => dbNames.Add(dbname));
            cursor.Dispose();
            return dbNames;
        }

        public void debugListDatabaseNames()
        {
            _logger.LogDebug("Database Names:");
            foreach (string dbname in getDBNames())
            {
                _logger.LogDebug("\t" + dbname);
            }
        }

        private void createConnectionString()
        {
            string[] creds = CredentialsReader.getMongoDBCredentials("./Private/mongo_credentials.txt");
            if (creds == null) throw new FormatException("Credentials file failed to load...");

            _connnectionString = _connnectionString.Replace("<username>", creds[0]);
            _connnectionString = _connnectionString.Replace("<password>", creds[1]);

        }

        public MongoClient getClient()
        {
            return client;
        }



    }
}
