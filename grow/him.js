// Ship object definition
  var Him = function() {
    var that = this;
    var _direction = 'down';
    var _drag = 0.5;
    var _maxSpeed = 10;
    var _speed = 12;
    
    
    that.speed = [0,0]; // x,y speed - negatives can be used
    that.sprites = null;
    that.getDirection = function() {
      return _direction;
    };
    
    that.left = function() {
      _direction = 'left';
      that.sprites.x -= _speed;
      switchAnimation('left');
    };
    
    that.leftUp = function() {
      _direction = 'leftUp';
      that.sprites.x -= _speed;
      that.sprites.y -= _speed;
      switchAnimation('leftUp');
    };
    
    that.leftDown = function() {
      _direction = 'leftDown';
      that.sprites.x -= _speed;
      that.sprites.y += _speed;
      switchAnimation('leftDown');
    };
    
    that.right = function() {
      _direction = 'right';
      that.sprites.x += _speed;
      switchAnimation('right');
    };
    
    that.rightUp = function() {
      _direction = 'rightUp';
      that.sprites.x += _speed;
      that.sprites.y -= _speed;
      switchAnimation('rightUp');
    };
    
    that.rightDown = function() {
      _direction = 'rightDown';
      that.sprites.x += _speed;
      that.sprites.y += _speed;
      switchAnimation('rightDown');
    };
    
    that.up = function() {
      _direction = 'up';
      that.sprites.y -= _speed;
      switchAnimation('up');
    };
    
    that.down = function() {
      _direction = 'down';
      that.sprites.y += _speed;
      switchAnimation('down');
    };
    
    that.noInput = function() {
      if (_direction === 'up') {
        switchAnimation('upHover');
      } else if (_direction === 'down') {
        switchAnimation('downHover');
      } else if (_direction === 'left') {
        switchAnimation('leftHover');
      } else if (_direction === 'leftDown') {
        switchAnimation('leftDownHover');
      } else if (_direction === 'leftUp') {
        switchAnimation('leftUpHover');
      } else if (_direction === 'right') {
        switchAnimation('rightHover');
      } else if (_direction === 'rightDown') {
        switchAnimation('rightDownHover');
      } else if (_direction === 'rightUp') {
        switchAnimation('rightUpHover');
      }
      
    };
    
    // Check if chosen animation is running, if not then switch to it
    function switchAnimation(name) {
      if (that.sprites.currentAnimation !== name) {
        that.sprites.gotoAndPlay(name);
      } else {
        that.sprites.play();
      }
    }
  };
  
