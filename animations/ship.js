// Ship object definition
  var Ship = function() {
    var _direction = 0;
    var _directionMax= 32;
    
    // Increase or decrease the rotation direction - check for max first
    function rotateDirection(isClockwise) {
      if (isClockwise === false) {
        if (_direction === 0) {
          _direction = _directionMax;
        } else {
          _direction--;
        }
      } else if (isClockwise) {
        if (_direction === _directionMax) {
          _direction = 0;
        } else {
          _direction++;
        }
      // null or undefined
      } else {
        throw new Error('Invalid arg passed to rotateDirection');
      }
    }
    
    this.maxSpeed = 5;
    this.speed = [0,0]; // x,y speed - negatives can be used
    this.position = [0,0]; // x,y position on canvas
    this.sprites = null;
    this.getDirection = function() {
      return _direction;
    };
    
    this.turnLeft = function() {
      rotateDirection(false);
      if (this.sprites.currentAnimation !== 'spinAntiClock') {
        this.sprites.gotoAndPlay('spinAntiClock');
        this.sprites.currentAnimationFrame = _directionMax - _direction;
        rotateDirection(false);
        rotateDirection(false);
      } else {
        pirateShip.sprites.play();
      }
    };
    
    this.turnRight = function() {
      rotateDirection(true);
      if (pirateShip.sprites.currentAnimation !== 'spinClock') {
        pirateShip.sprites.gotoAndPlay('spinClock');
        pirateShip.sprites.currentAnimationFrame =  _direction;
        rotateDirection(true);
        rotateDirection(true);
      } else {
        pirateShip.sprites.play();
      }
    };
    
    this.moveForward = function() {
      this.sprites.x += this.speed[0];
      this.sprites.y += this.speed[1];
      
      // retardation
      if (this.speed[0] > 0) {
        if (this.speed[0] > 0.5) {
          this.speed[0]-= 0.5;
        }
      } else if (this.speed[0] < 0) {
        if (this.speed[0] < -0.5) {
          this.speed[0]+= 0.5;
        }
      }

      if (this.speed[1] > 0) {
        if (this.speed[1] > 0.5) {
          this.speed[1]-= 0.5;
        }
      } else if (this.speed[1] < 0) {
        if (this.speed[1] < -0.5) {
          this.speed[1]+= 0.5;
        }
      }
    };
    
    this.accelerate = function() {
      // 16 -32 is positive Y
      if (_direction > _directionMax / 2 && _direction != _directionMax) {
        this.speed[1]--;
      } else if (_direction < _directionMax / 2 && _direction != 0) {
        this.speed[1]++;
      }
      
      if ((_direction >= _directionMax * 3/4) || (_direction <= _directionMax * 1/4)) {
        this.speed[0]++;
      } else if ((_direction <= _directionMax * 3/4) && (_direction >= _directionMax * 1/4)) {
        this.speed[0]--;
      }
    }
  };
  
