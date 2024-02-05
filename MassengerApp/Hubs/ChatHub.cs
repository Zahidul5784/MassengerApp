using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MassengerApp.Hubs
{
    public class ChatHub:Hub
    {
        public async Task Share(string user, string message)
        {
            await Clients.Caller.SendAsync("receive", "(SELF)", message);
            await Clients.Others.SendAsync("receive", user, message);
        }
    }
}
