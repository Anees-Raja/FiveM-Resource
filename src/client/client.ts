function alert(msg: string) {
  SetTextComponentFormat("STRING")
  AddTextComponentString(msg)
  DisplayHelpTextFromStringLabel(0, false, true, -1)
}

function giveWeapon(hash: any) {
  GiveWeaponToPed(GetPlayerPed(-1), GetHashKey(hash), 999, false, false)
}

setImmediate(function () {
  let h_key = 74
  // let x_key = 73

  setTimeout(() => {
    if(IsControlReleased(1, h_key)) {
      console.log("The key was pressed: ", h_key)
      giveWeapon("WEAPON_SMG")
      giveWeapon("WEAPON_PUMPSHOTGUN")
      alert("~b~Given Weapons with ~INPUT_VEH_HEADLIGHT~")
    }
  }, 10)
})