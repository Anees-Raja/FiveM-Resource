function alert(msg: string) {
  SetTextComponentFormat("STRING")
  AddTextComponentString(msg)
  DisplayHelpTextFromStringLabel(0, false, true, -1)
}

function giveWeapon(hash: any) {
  GiveWeaponToPed(GetPlayerPed(-1), GetHashKey(hash), 999, false, false)
}

// (function () {
//   let h_key = 74
//   let flag = true
//   // let x_key = 73

//   while(flag) {
//     Wait(1)
//     if(IsControlReleased(1, h_key)) {
//       console.log("The key was pressed: ", h_key)
//       giveWeapon("WEAPON_SMG")
//       giveWeapon("WEAPON_PUMPSHOTGUN")
//       alert("~b~Given Weapons with ~INPUT_VEH_HEADLIGHT~")
//       flag = false
//     }
//   }
// })();

// setImmediate(() => {
//   let h_key = 74
//   let flag = true
//   // let x_key = 73

//   while(flag) {
//     Wait(1)
//     if(IsControlReleased(1, h_key)) {
//       console.log("The key was pressed: ", h_key)
//       giveWeapon("WEAPON_SMG")
//       giveWeapon("WEAPON_PUMPSHOTGUN")
//       alert("~b~Given Weapons with ~INPUT_VEH_HEADLIGHT~")
//       flag = false
//     }
//   }
// })

RegisterCommand(
  "give", 
  function() {
    giveWeapon("WEAPON_SMG")
    giveWeapon("WEAPON_PUMPSHOTGUN")
    alert("~b~Given Weapons with ~INPUT_VEH_HEADLIGHT~")
  }, 
  false
);