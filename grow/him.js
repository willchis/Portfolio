// Ship object definition
  var Him = function() {
    var _direction = 0;
    var _directionMax= 32;
    var _drag = 0.5;
    var _maxSpeed = 10;
    var _speed = 12;
    
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
    
    this.speed = [0,0]; // x,y speed - negatives can be used
    this.sprites = null;
    this.getDirection = function() {
      return _direction;
    };
    
    this.left = function() {
      this.sprites.x -= _speed;
      if (this.sprites.currentAnimation !== 'left') {
        this.sprites.gotoAndPlay('left');
        this.sprites.currentAnimationFrame = _directionMax - _direction;
      } else {
        him.sprites.play();
      }
    };
    
    this.leftUp = function() {
      this.sprites.x -= _speed;
      this.sprites.y -= _speed;
      if (this.sprites.currentAnimation !== 'leftUp') {
        this.sprites.gotoAndPlay('leftUp');
        this.sprites.currentAnimationFrame = _directionMax - _direction;
      } else {
        him.sprites.play();
      }
    };
    
    this.leftDown = function() {
      this.sprites.x -= _speed;
      this.sprites.y += _speed;
      if (this.sprites.currentAnimation !== 'leftDown') {
        this.sprites.gotoAndPlay('leftDown');
        this.sprites.currentAnimationFrame = _directionMax - _direction;
      } else {
        him.sprites.play();
      }
    };
    
    this.right = function() {
      this.sprites.x += _speed;
      if (him.sprites.currentAnimation !== 'right') {
        him.sprites.gotoAndPlay('right');
        him.sprites.currentAnimationFrame =  _direction;
      } else {
        him.sprites.play();
      }
    };
    
    this.rightUp = function() {
      this.sprites.x += _speed;
      this.sprites.y -= _speed;
      if (this.sprites.currentAnimation !== 'rightUp') {
        this.sprites.gotoAndPlay('rightUp');
        this.sprites.currentAnimationFrame = _directionMax - _direction;
      } else {
        him.sprites.play();
      }
    };
    
    this.rightDown = function() {
      this.sprites.x += _speed;
      this.sprites.y += _speed;
      if (this.sprites.currentAnimation !== 'rightDown') {
        this.sprites.gotoAndPlay('rightDown');
        this.sprites.currentAnimationFrame = _directionMax - _direction;
      } else {
        him.sprites.play();
      }
    };
    
    this.up = function() {
      this.sprites.y -= _speed;
      if (him.sprites.currentAnimation !== 'up') {
        him.sprites.gotoAndPlay('up');
        him.sprites.currentAnimationFrame =  _direction;
      } else {
        him.sprites.play();
      }
      
    };
    
    this.down = function() {
      this.sprites.y += _speed;
      if (him.sprites.currentAnimation !== 'down') {
        him.sprites.gotoAndPlay('down');
        him.sprites.currentAnimationFrame =  _direction;
      } else {
        him.sprites.play();
      }
    };
    
    this.retard = function() {
      
      // keep the motion going
      this.sprites.y += this.speed[1];
      this.sprites.x -= this.speed[0];
      
      // retardation
      if (this.speed[0] > 0) {
        if (this.speed[0] > _drag) {
          this.speed[0]-= _drag;
        }
      } else if (this.speed[0] < 0) {
        if (this.speed[0] < -_drag) {
          this.speed[0]+= 0.5;
        }
      }

      if (this.speed[1] > 0) {
        if (this.speed[1] > _drag) {
          this.speed[1]-= _drag;
        }
      } else if (this.speed[1] < 0) {
        if (this.speed[1] < -_drag) {
          this.speed[1]+= _drag;
        }
      }
    }
  };
  
