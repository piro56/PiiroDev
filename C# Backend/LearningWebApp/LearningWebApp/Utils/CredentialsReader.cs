namespace LearningWebApp.Utils
{
    public class CredentialsReader
    {

        // String[] in form [username, password]
        public static string[] getMongoDBCredentials(string file)
        {

            string[] text = File.ReadAllLines(file);
            if (text.Length != 2)
            {
                return null;
            }
            return text;

        }

    }
}
