function addGroup(object, number, spriteName, anchor){
  object = game.add.group();
  object.enableBody = true;
  object.physicsBodyType = Phaser.Physics.ARCADE;
  object.createMultiple(number, spriteName);
  object.setAll('outOfBoundsKill', true);
  object.setAll('checkWorldBounds', true);
  object.setAll('anchor.x', anchor);
  object.setAll('anchor.y', anchor);
  return object;
}

function initializeGame(){
  // Add keyboard controls
  cursors = game.input.keyboard.createCursorKeys(); // arrow keys
  game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR, Phaser.Keyboard.ENTER]);

  // Add Score and HP Text to the screen
  hpText = game.add.bitmapText(GAME_WIDTH - 170, 20, 'carrier_command', 'Life: ' + STARTING_LIFE, 15);
  hpText.tint = '0xffffff';

  scoreText = game.add.bitmapText(GAME_WIDTH - 170, 40, 'carrier_command', 'Hits: 0', 15);
  scoreText.tint = '0xffffff';
}
