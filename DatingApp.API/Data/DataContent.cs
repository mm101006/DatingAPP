using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class DataContent : DbContext
    {
        public DataContent(DbContextOptions<DataContent> options) : base(options){}
        
        public DbSet<Value> Values {get; set;}
    }
}