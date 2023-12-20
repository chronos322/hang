window.addToLeaderboard = function (score, username) {
    var _0x1c630f = _0x3a85;
  
    (function (_0xc1eb52, _0x236ab8) {
      var _0x396ebd = _0x3a85,
        _0x41b4fb = _0xc1eb52();
      while (!![]) {
        try {
          var _0x131e92 =
            -parseInt(_0x396ebd(0x15d)) / 0x1 +
            -parseInt(_0x396ebd(0x14a)) / 0x2 * (-parseInt(_0x396ebd(0x15b)) / 0x3) +
            -parseInt(_0x396ebd(0x155)) / 0x4 * (parseInt(_0x396ebd(0x157)) / 0x5) +
            -parseInt(_0x396ebd(0x152)) / 0x6 +
            -parseInt(_0x396ebd(0x153)) / 0x7 +
            -parseInt(_0x396ebd(0x154)) / 0x8 * (-parseInt(_0x396ebd(0x148)) / 0x9) +
            parseInt(_0x396ebd(0x15a)) / 0xa;
          if (_0x131e92 === _0x236ab8) break;
          else _0x41b4fb['push'](_0x41b4fb['shift']());
        } catch (_0x51fb5f) {
          _0x41b4fb['push'](_0x41b4fb['shift']());
        }
      }
    })(_0x2973, 0x34b39);
  
    function _0x2973() {
      var _0x2b5b67 = [
        'toLowerCase',
        '18kMKpEg',
        'custTkn',
        '535652GaEpkF',
        'userName',
        'NO_CUSTTKN',
        'playId',
        'true',
        'concat',
        'NO\x20USERNAME',
        'gameId',
        '179244sWIRQg',
        '2504628zeXfoV',
        '1189624XpWMiE',
        '32YLMyIC',
        'stringify',
        '127630UsWAGe',
        'scrollIntoView',
        'now',
        '4296410kFhFFS',
        '3RcJbJJ',
        '#play-',
        '187122lkQVXS'
      ];
      _0x2973 = function () {
        return _0x2b5b67;
      };
      return _0x2973();
    }
  
    function _0x3a85(_0xaf9534, _0x3bef6e) {
      var _0x2973c3 = _0x2973();
      return (_0x3a85 = function (_0x3a851c, _0x2e6a3c) {
        _0x3a851c = _0x3a851c - 0x148;
        var _0x556834 = _0x2973c3[_0x3a851c];
        return _0x556834;
      })(_0xaf9534, _0x3bef6e);
    }
  
    if (a[_0x1c630f(0x14b)] && a[_0x1c630f(0x149)]) {
      var leaderboardData = {
        'pt': Date[_0x1c630f(0x159)]() - Number(localStorage['getItem']('st')),
        'username': a[_0x1c630f(0x14b)] || 'NO USERNAME',
        'score': score,
        'gameId': o[_0x1c630f(0x151)],
        'custTkn': a[_0x1c630f(0x149)] || 'NO_CUSTTKN',
        'playId': s,
        'params': ''['concat'](score, '\x20')['concat'](username, '\x20')['concat'](localStorage['getItem']('ss')),
        'hasFailed': !(_0x1c630f(0x14e) == localStorage['getItem']('ss')['toLowerCase']())
      };
      x([]['concat'](R(w), [leaderboardData]));
  
      setTimeout(function () {
        var leaderboardSelector = _0x1c630f(0x15c)['concat'](leaderboardData[_0x1c630f(0x14d)]);
        var leaderboardElement = document['querySelector'](leaderboardSelector);
        leaderboardElement && leaderboardElement[_0x1c630f(0x158)]({ 'behavior': 'smooth' });
      }, 0x309);
  
      var modifiedLeaderboardData = rn(rn({}, leaderboardData), {}, { 'username': '' });
      var jsonPayload = ln(JSON[_0x1c630f(0x156)](modifiedLeaderboardData));
      return F({ 'payload': jsonPayload, 'username': a[_0x1c630f(0x14b)] });
    }
  }.bind(Yx);
  