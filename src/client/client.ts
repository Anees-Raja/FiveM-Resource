function msg(msgBody: string) {
  TriggerEvent("chatMessage", "[Server]", "red", msgBody)
}

function alert(msg: string) {
  SetTextComponentFormat("STRING")
  AddTextComponentString(msg)
  DisplayHelpTextFromStringLabel(0, false, true, -1)
}

function giveWeapon(hash: any) {
  GiveWeaponToPed(GetPlayerPed(-1), GetHashKey(hash), 999, false, false)
}

RegisterCommand(
  "guns", 
  function() {
    giveWeapon("WEAPON_SMG")
    giveWeapon("WEAPON_PUMPSHOTGUN")
    alert("~b~Given Weapons with ~INPUT_VEH_HEADLIGHT~")
  }, 
  false
);

RegisterCommand(
  "myid", 
  function() {
    let playerId = GetPlayerServerId(-1)
    msg(`Your ID is: ${playerId}`)
  }, 
  false
);


// Listens to see if "H" was pressed in the last 15ms
setInterval(() => {
  let h_key = 74
  let x_key = 73
  
  if(IsControlJustPressed(1, h_key)) {
    console.log("The key was pressed: ", h_key)
    giveWeapon("WEAPON_SMG")
    giveWeapon("WEAPON_PUMPSHOTGUN")
    alert("~b~Given Weapons with ~INPUT_VEH_HEADLIGHT~")
  }
}, 15)