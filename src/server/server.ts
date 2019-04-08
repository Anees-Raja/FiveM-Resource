(function main() {
  on("playerConnecting", (player: any, something: any, somethingelse: any, somethingelseelse: any) => {
    console.log("Player is being connected: ", player, something, somethingelse, somethingelseelse)
  })
})();