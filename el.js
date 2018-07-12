var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port:19131});

console.log('Event Logger by LNSSPsd v5!');
console.log('Please Connect Client to 0.0.0.0:19131.');

var see=false;

function gamecmd(cmd,ws){
	ws.send(JSON.stringify(
	{
		"body": {
			"origin": {
				"type": "player"
			},
			"commandLine": cmd,
			"version": 1
		},
		"header": {
			"requestId": "0ffae098-00ff-ffff-abbbbbbbbbdf3f44",
			"messagePurpose": "commandRequest",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
}

function serverinf(msg,ws){
	if(see==true){
		gamecmd("say "+msg,ws);
	}else{
		gamecmd("msg @s |\n"+msg,ws);
	}
}

wss.on('connection', function connection(ws){
	var logtogame=true;
	//var owner="None";
	console.log('Client Connected!');
	console.log('Listening Events...');
	
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "WorldUnloaded"
		},
		"header": {
			"requestId": "233ae098-00ff-ffff-abbbbbbbbbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "BlockBroken"
		},
		"header": {
			"requestId": "fffdb098-00ff-ffff-abbbbbbbbbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "BlockPlaced"
		},
		"header": {
			"requestId": "aaaae098-00ff-ffff-abbbbbbbbbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "BoardTextUpdated"
		},
		"header": {
			"requestId": "0ffa0000-00ff-ffff-abbbbbbbbbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "AgentCreated"
		},
		"header": {
			"requestId": "0ddbe098-00ff-ffff-abbbbbbbbbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "AgentCommand"
		},
		"header": {
			"requestId": "0ffae090-00ff-ffff-abbbbbbbbbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "BossKilled"
		},
		"header": {
			"requestId": "0ffae009-00ff-ffff-abbbbbbbbbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "ItemCrafted"
		},
		"header": {
			"requestId": "affae098-00ff-ffff-abbbbbbbbbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "ItemDestroyed"
		},
		"header": {
			"requestId": "effae098-00ff-ffff-abbbbbbbbbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "ItemUsed"
		},
		"header": {
			"requestId": "0f334098-00ff-ffff-abbbbbbbbbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "MobKilled"
		},
		"header": {
			"requestId": "0ffae098-00ee-ffff-abbbbbbbbbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "PlayerDied"
		},
		"header": {
			"requestId": "0ffae098-00ff-f333-abbbbbbbbbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "PlayerJoin"
		},
		"header": {
			"requestId": "0ffae098-00ff-ffff-abbb09bbbbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "PlayerLeave"
		},
		"header": {
			"requestId": "0ffae098-00ff-ffff-aabbbbbbbbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "PlayerTeleported"
		},
		"header": {
			"requestId": "0ffae098-00ff-ffff-abbbbcccbbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "PortalBuilt"
		},
		"header": {
			"requestId": "0ffae098-00ff-ffff-abbbbbdddbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "PortalUsed"
		},
		"header": {
			"requestId": "0ffae098-00ff-ffff-abbbbbbbbbdf3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "PlayerMessage"
		},
		"header": {
			"requestId": "0ffae098-00ff-ffff-abbbbbbbbbdf3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	serverinf("Event Logger Connected.\nFor help,say */help.\nIf you don't want to other see,\nuse command\
 /msg <Your Name> */help.\n\nNow this message is invisible for other.\nFor Visible,type */see.\n\n[EL By LNSSPsd.]",ws);
	
	ws.on('message',function incoming(message){
		//console.log('received: %s',message);
		
		if(JSON.parse(message).body.eventName=="PlayerMessage" && JSON.parse(message).body.properties.MessageType=="chat")
		{
			if(JSON.parse(message).body.properties.Message.substring(0,2)=="*/")
			{
				if(JSON.parse(message).body.properties.Message=="*/bye")
			{
				ws.terminate();
			}
				switch(JSON.parse(message).body.properties.Message)
				{
					case "*/see":
					see=true;
					serverinf("EL Message Publiced.\nFor private again,\nUse */unsee.",ws);
					break;
					case "*/unsee":
					see=false;
					serverinf("EL Message Privated.\nFor public again,\nUse */see.",ws);
					break;
					case "*/logtogame":
					logtogame=true;
					serverinf("LogToGame Enabled.",ws);
					break;
					case "*/ulogtogame":
					logtogame=false;
					serverinf("LogToGame Disabled.",ws);
					break;
					default:
					serverinf("Unknown command.",ws);
				}
			}
			if(JSON.parse(message).body.properties.Message.substring(0,2)=="./")
			{
				switch(JSON.parse(message).body.properties.Message)
				{
					case "./help":
					gamecmd("msg "+JSON.parse(message).body.properties.Sender+" |\nEL Help:\n*/see:Let Message visible for other.\n*/unsee:\
Let Message invisible(only visible to you.\n*/wsshutdn:Shutdown Socket Server.\
\n./owner:Check Who is EL's Owner in this game.\
\n*/logtogame:Let all event logs log into game.\n\
*/ulogtogame:Set logtogame to false.\
\n\n",ws);
					break;
					case "./owner":
					gamecmd("msg "+JSON.parse(message).body.properties.Sender+" |\nEL's Owner in this game is:"+owner+".",ws);
					break;
					default:
					serverinf("Unknown command.",ws);
				}
			}
			console.log("<%s> %s",JSON.parse(message).body.properties.Sender,JSON.parse(message).body.properties.Message);
		}
		if(JSON.parse(message).body.eventName=="PlayerMessage" && JSON.parse(message).body.properties.MessageType=="say")
		{
			if(logtogame==true && see==false)
			{
				serverinf(JSON.parse(message).body.properties.Sender+" Run Say command: "+JSON.parse(message).body.properties.Message,ws);
			}
			console.log("%s Run Say Command: %s",JSON.parse(message).body.properties.Sender,JSON.parse(message).body.properties.Message);
		}
		if(JSON.parse(message).body.eventName=="BlockBroken")
		{
			if(logtogame==true)
			{
				serverinf("Block "+JSON.parse(message).body.properties.Block+"(Id:"+JSON.parse(message).body.properties.Type+") destroyed by Item:"+JSON.parse(message).body.properties.ToolItemType+".",ws);
			}
			console.log("Block %s(Id:%s) destroyed by Item:%s.",JSON.parse(message).body.properties.Block,JSON.parse(message).body.properties.Type,JSON.parse(message).body.properties.ToolItemType);
		}
		if(JSON.parse(message).body.eventName=="BlockPlaced")
		{
			if(logtogame==true)
			{
				serverinf("Block "+JSON.parse(message).body.properties.Block+"(Id:"+JSON.parse(message).body.properties.Type+") placed.",ws);
			}
			console.log("Block %s(Id:%s) placed.",JSON.parse(message).body.properties.Block,JSON.parse(message).body.properties.Type);
		}
		if(JSON.parse(message).body.eventName=="PlayerMessage" && JSON.parse(message).body.properties.MessageType=="tell")
		{
			
			console.log("%s Tell %s : %s",JSON.parse(message).body.properties.Sender,JSON.parse(message).body.properties.Receiver,JSON.parse(message).body.properties.Message);
		}
		
		if(JSON.parse(message).body.eventName=="PlayerJoin")
		{
			if(logtogame==true)
			{
				serverinf(JSON.parse(message).body.properties.PlayerName+" Joined this game.Color: "+JSON.parse(message).body.properties.PlayerColor,ws);
			}
			console.log("%s Joined this game.Color: %s",JSON.parse(message).body.properties.PlayerName,JSON.parse(message).body.properties.PlayerColor);
		}
		if(JSON.parse(message).body.eventName=="PlayerLeave")
		{
			if(logtogame==true)
			{
				serverinf(JSON.parse(message).body.properties.PlayerName+" Leave this game.Color: "+JSON.parse(message).body.properties.PlayerColor,ws);
			}
			console.log("%s Leave this game.Color: %s",JSON.parse(message).body.properties.PlayerName,JSON.parse(message).body.properties.PlayerColor);
		}
		if(JSON.parse(message).body.eventName=="PortalBuilt")
		{
			if(logtogame==true)
			{
				serverinf("Portal Built!",ws);
			}
			console.log("Portal Built!");
		}
		if(JSON.parse(message).body.eventName=="PortalUsed")
		{
			if(logtogame==true)
			{
				serverinf("Portal Used!!",ws);
			}
			console.log("Portal Used!!");
		}
		if(JSON.parse(message).body.eventName=="PlayerDied")
		{
			if(logtogame==true)
			{
				serverinf("Player "+JSON.parse(message).body.properties.Cause+" Killed by "+JSON.parse(message).body.properties.KillerEntity+".",ws);
			}
			console.log("Player %s Killed by %s.",JSON.parse(message).body.properties.Cause,JSON.parse(message).body.properties.KillerEntity);
		}
		if(JSON.parse(message).body.eventName=="MobKilled")
		{
			if(logtogame==true)
			{
				serverinf("Mob "+JSON.parse(message).body.properties.MobType+" Killed by Weapon:"+JSON.parse(message).body.properties.WeaponType+".",ws);
			}
			console.log("Mob %s Killed by Weapon:%s,Method:%s.",JSON.parse(message).body.properties.MobType,JSON.parse(message).body.properties.WeaponType,JSON.parse(message).body.properties.MethodType);
		}
		if(JSON.parse(message).body.eventName=="ItemDestroyed")
		{
			if(logtogame==true)
			{
				serverinf("Some Item were Destroyed By "+JSON.parse(message).body.properties.DestructionMethodType+".",ws);
			}
			console.log("Some Item were Destroyed By %s.",JSON.parse(message).body.properties.DestructionMethodType);
		}
		if(JSON.parse(message).body.eventName=="ItemCrafted")
		{
			if(logtogame==true)
			{
				serverinf("Some Items Were Crafted.",ws);
			}
			console.log("Some Items Were Crafted.");
		}
		if(JSON.parse(message).body.eventName=="BossKilled")
		{
			if(logtogame==true)
			{
				serverinf("Boss "+JSON.parse(message).body.properties.BossType+" was Killed.",ws);
			}
			console.log("Boss %s was Killed.",JSON.parse(message).body.properties.BossType);
		}
		if(JSON.parse(message).body.eventName=="AgentCommand")
		{
			if(logtogame==true)
			{
				serverinf("Agent received command.",ws);
			}
			console.log("Agent received command.");
		}
		if(JSON.parse(message).body.eventName=="AgentCreated")
		{
			if(logtogame==true)
			{
				serverinf("Agent Created.",ws);
			}
			console.log("Agent Created.");
		}
	});
	
	//ws.send('test');
});
