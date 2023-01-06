﻿using Microsoft.AspNetCore.Identity;

namespace API.Data
{
    public class ApplicationUser : IdentityUser
    {
        public string DisplayName { get; set; }
    }
}
