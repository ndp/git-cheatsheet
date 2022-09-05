var window=global

const Csster = require('./lib/csster')
Csster.colorizeString()
const boxShadow = Csster.macros.boxShadow

const colors = {
  stash:       '#bf3030',
  workspace:   '#ff4040'.saturate(-15),
  index:       '#ff9640',
  local_repo:  '#cd0074',
  remote_repo: '#bf3030',
}


const upColor     = colors.workspace.darken(10).saturate(-30)
const dnColor     = colors.workspace.darken(0).saturate(-30)
const statusColor = '#846C6C'
const monospaced  = '"Source Code Pro", monospaced'
const bodyFont    = 'Merriweather, sanserif' // 300, 400, 700, 900

const css = {
  'html,body':            {
    margin:     0,
    padding:    0,
    background: 'url(images/vCanvas.jpg)',
    boxSizing: 'border-box'
  },
  'a,a:link,a:visited':   {
    color:          colors.local_repo,
    textDecoration: 'none',
  },
  'a:hover':              {
    color:          colors.local_repo.darken(10),
    textDecoration: 'underline',
  },
  'em:before':            {
    opacity: .6,
    content: '"‹"',
    margin: '0 -2px',
  },
  'em:after':             {
    opacity: .6,
    content: '"›"',
    margin: '0 -2px',
  },
  'span.optional:before': {
    opacity: .6,
    content: '"["',
    margin: '0 -2px',
  },
  'span.optional:after':  {
    opacity: .6,
    content: '"]"',
    margin: '0 -2px',
  },
  '#hd':                  {
    '*':     {
      margin:  0,
      padding: 0,
    },
    h1:      {
      font: '50px ImpactLabelRegular, ImpactLabelReversedRegular, verdana',
    },
    h2:      {
      textAlign:       'end',
      position:        'absolute',
      right:           '0',
      top:             44,
      color:           colors.local_repo,
      backgroundColor: colors.remote_repo.saturate(-25).lighten(30),
      font:            'normal 21px ImpactLabelReversedRegular,ImpactLabelRegular, verdana',
    },
    ul:      {
      marginTop:    2,
      marginBottom: -10,
      li:           {
        font:      '16px/20px ' + monospaced,
        display:   'block',
        textAlign: 'end',
        color:     colors.local_repo.lighten(10).saturate(-40),
      },
    },
    h6:      {
      textAlign: 'end',
      color:     colors.local_repo.saturate(-60).lighten(10),
      position:  'fixed',
      bottom:    3,
      right:     3,
      font:      '300 12px ' + bodyFont,
      zIndex:    1,
    },
    'h4':    {
      marginTop:    5,
      marginBottom: -15,
    },
    '.lang': {
      cursor:          'pointer',
      backgroundColor: '#e9bebe'.darken(10),
      color:           '#b3a2a2'.lighten(25),
      border:          '1px solid transparent',
      padding:         '1px 2px',
      font:            '12px ' + monospaced,
      '&.selected':    {
        backgroundColor: '#e9bebe'.darken(20),
        color:           '#fff',
        '&:hover':       {
          textDecoration: 'none',
        },
      },
      '&:hover':       {
        color: '#fff',
      },
    },
  },
  '#diagram':             {
    marginTop:    20,
    position:     'relative',
    height:       '6.8in',
    marginBottom: '2cm',
    padding:      '1px 0',
  },
  '.loc':                 {
    position:           'relative',
    height:             '100%',
    cursor:             'pointer',
    transitionDuration: '.15s',
    transitionProperty: 'color, background-color, opacity',
    transitionDelay:    '0s',
    opacity:            .7,
    has:                boxShadow([3, 3], 2, '#ccc'),
    '.bar':             {
      position:     'absolute',
      left:         '45%',
      top:          '0.9in',
      bottom:       '0.1in',
      border:       '1px dashed white',
      'border-top': 'none',
      width:        10,
    },
    'h5':               {
      position:     'absolute',
      top:          0,
      margin:       0,
      width:        '100%',
      'text-align': 'center',
      padding:      '11px 0 20px 0',
      font:         '30px ImpactLabelReversedRegular, ImpactLabelRegular, verdana',
      color:        '#333',
    },
    'p':                {
      bottom:     0,
      position:   'absolute',
      padding:    '0 20px',
      font:       '400 15px ' + bodyFont,
      color:      'white',
      visibility: 'hidden',
    },
    '&.hovered':        {
      has: boxShadow([2, 2], 6, '#999'),
    },
    '&.current':        {
      has:                boxShadow([4, 4], 6, '#555'),
      transitionDuration: '.2s',
      transitionDelay:    '.2s',
      p:                  {
        visibility: 'visible',
      },
      'h5':               {
        color: 'white',
      },
    },

  },
  '#commands':            {
    position: 'absolute',
    top:      85,
    left:     0,
    width:    '100%',
    font:     '400 15px ' + monospaced,
    height:   0,
    margin:   0,
    padding:  0,
    '> dd':   {
      display: 'none',
    },
    '> dt':   {
      transitionDuration: '.3s',
      transitionProperty: 'left, width, opacity, color, background-color',
      transitionDelay:    '.3s',
      color:              '#dddddd',
      marginBottom:       3,
      padding:            '1px 5px 4px 5px',
      lineHeight:         13,
      opacity:            0.3,
      visibility:         'hidden',
      position:           'absolute',
      cursor:             'pointer',
      '&.selected':       {
        has:        boxShadow([2, 2], 4, '#00000040'),
        fontWeight: '700',
        opacity:    0.8,
      },
      '> .arrow':         {
        width:    0,
        height:   0,
        border:   '9px solid transparent',
        position: 'absolute',
      },
      '&.up':             {
        color:      upColor.lighten(50),
        '> .arrow': {
          right: '-18px',
          top:   0,
        },
      },
      '&.dn':             {
        color:      dnColor.lighten(50),
        '> .arrow': {
          left: '-18px',
          top:  0,
        },
      },
      '&.status':         {
        'border-color':     statusColor.lighten(20),
        'background-color': statusColor,
        color:              statusColor.lighten(50),
        '&.selected':       {
          'background-color': statusColor.darken(5),
        },
      },
    },
  },
  // TBD Not sure how this actually works, so I'm asking
  'body[dir=rtl]': {
    '#commands > dt, body[dir=rtl] .cmd': {
      direction: 'ltr',
      textAlign: 'right',
    },
    '#hd h2':                                   {
      right: 'auto',
      left:  0,
    },
  },
  '#info':                {
    position:    'fixed',
    bottom:      0,
    left:        0,
    width:       '100%',
    padding:     '10px 0 20px 0',
    zIndex:      1,
    '.screen':   {
      zIndex:   -1,
      position: 'absolute',
      left:     -20,
      top:      0,
      height:   '100%',
      width:    '150%',
      // backgroundImage: 'linear-gradient(90deg, rgba(246, 235, 217, 0) 5%, rgba(246, 235, 217, 1) 10%, rgba(246, 235, 217, 1) 70%, rgba(246, 235, 217, 0) 70%)',
      backgroundImage: 'radial-gradient(circle at 40%, rgba(246, 235, 217, 0.97) 85%,rgba(246, 235, 217, 0))',
      opacity:         1,
    },
    '.cmd,.doc': {
      minHeight: '2em',
      marginLeft: 20,
    },
    '.cmd':      {
      font:        '500 16px/22px ' + monospaced,
      marginRight: 20,
      marginTop:   -2,
      width:       '100%',
      color:       'black',
      textAlign:   'start',
      lineHeight: 24,
      '> span':   {
        padding:    '3px 10px 3px 0',
        fontWeight: 'bold',
        display:    'inline-block',
      },
      '> span:after': {
        maxWidth: '70ex',
        width: '100vh',
        background: `linear-gradient(to right, ${colors.stash}, ${colors.workspace}, ${colors.index}, ${colors.local_repo}, ${colors.remote_repo}, ${colors.remote_repo}00)`,
        height: '0.5px',
        content: '""',
        display: 'block',
        marginTop: 5,
      }
    },
    '.doc':      {
      font:        '300 15px/22px ' + bodyFont,
      width:       'calc(100% - 40px)',
      maxWidth:    '70ex',
      marginLeft:    20,
      marginRight:    20,
      color:       'black',
      'em,b,code': {
        font: '400 16px/22px ' + monospaced,
      },
    },


  },
};

['stash', 'workspace', 'index', 'local_repo', 'remote_repo'].forEach(function (valueLeft, index) {
  var c = colors[valueLeft].saturate(-10)

  css['#' + valueLeft]                                      = {
    border:          '1px dotted transparent',// + colors[value],
    color:           colors[valueLeft],
    backgroundColor: colors[valueLeft].saturate(-50).lighten(20),
  }
  css['#' + valueLeft + ' .bar']                            = { borderColor: colors[valueLeft].darken(20) }
  css['body.' + valueLeft + ' #' + valueLeft]               = {
    color:           'white',
    backgroundColor: colors[valueLeft],
  }
  css['body.' + valueLeft + ' #commands > dt.' + valueLeft] = {
    position:     'relative',
    visibility:   'visible',
    opacity:      0.9,
    '&.selected': {
      opacity: 1.0,
    },
  }

  const colorLeft         = colors[valueLeft].saturate(-10).darken(10)
  const colorLeftSelected = colorLeft.darken(10)

  css[`#commands > dt.up.right-${valueLeft} > .arrow`]          = {
    'border-left-color': colorLeft,
  }
  css[`#commands > dt.selected.up.right-${valueLeft} > .arrow`] = {
    'border-left-color': colorLeftSelected,
  }
  css[`#commands > dt.dn.left-${valueLeft} > .arrow`]           = {
    'border-right-color': colorLeft,
  }
  css[`#commands > dt.selected.dn.left-${valueLeft} > .arrow`]  = {
    'border-right-color': colorLeftSelected,
  };

  ['stash', 'workspace', 'index', 'local_repo', 'remote_repo'].forEach(function (valueRight, index) {
    // if (valueLeft != valueRight) {

    const colorRight = colors[valueRight].saturate(-10).darken(10)

    css[`#commands > dt.left-${valueLeft}.right-${valueRight}`]          = {
      background: `linear-gradient(to right, ${colorLeft}, ${colorRight})`,
    }
    css[`#commands > dt.selected.left-${valueLeft}.right-${valueRight}`] = {
      background: `linear-gradient(to right, ${colorLeftSelected}, ${colorRight.darken(10)})`,
    }
    // }
  })
})

Csster.addPropertyNames([
                          'transition-delay',
                          'transition-duration',
                          'transition-property',
                        ])

const fs = require('fs')

twelve00 = fs.readFileSync('./src/lib/1200.css')

fs.writeFile('./git-cheatsheet/styles.css',
             `/* DO NOT EDIT! Generated ${new Date()} */\n`
             + twelve00.toString()
             + Csster.buildCss(css), err => {
    if (err)
      console.error(err)
    else
      console.log('File written successfully.')
  })
