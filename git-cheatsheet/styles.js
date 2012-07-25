var colors = {
    stash: '#bf3030',
    workspace: '#ff4040',
    index: '#ff9640',
    local_repo: '#cd0074',
    remote_repo:'#bf3030'
}


var upColor = colors.workspace.darken(10).saturate(-30);
var dnColor = colors.workspace.darken(0).saturate(-30);
var statusColor = '#846C6C';

var c;

var css = {
    'html,body': {
        margin: 0,
        padding: 0,
        background: 'url(git-cheatsheet/images/vCanvas.jpg)'
    },
    'a,a:link,a:visited': {
        color: colors.local_repo,
        textDecoration: 'none'
    },
    'a:hover': {
        color: colors.local_repo.darken(10),
        textDecoration: 'underline'
    },
    'em:before':{
      opacity:.5,
      content:'"<"'
    },
    'em:after':{
      opacity:.5,
      content:'">"'
    },
    'span.optional:before':{
      opacity:.5,
      content:'"["'
    },
    'span.optional:after':{
      opacity:.5,
      content:'"]"'
    },
    '#hd': {
        '*': {
          margin: 0,
          padding: 0
        },
        h1: {
            font: '50px ImpactLabelRegular, ImpactLabelReversedRegular, verdana'
        },
        h2: {
            paddingTop: 3,
            textAlign: 'right',
            color: colors.local_repo,
            font: 'normal 25px ImpactLabelReversedRegular,ImpactLabelRegular,  verdana'
        },
        h6: {
            textAlign: 'right',
            color: colors.local_repo.saturate(-60).lighten(10),
            font: '15px courier, monospaced'
        }
    },
    '#diagram': {
        marginTop: 20,
        position: 'relative',
        height: '6.3in',
        marginBottom: '2cm',
        padding: '1px 0'
    },
    '.loc': {
        position: 'relative',
        height: '100%',
        cursor: 'pointer',
        opacity:.7,
        has: boxShadow([3,3], 2, '#ccc'),
        '.bar': {
            position: 'absolute',
            left: '45%',
            top: 50,
            border: '1px dashed white',
            'border-top': 'none',
            width: 10,
            height: 535
        },
        'label': {
            position: 'absolute',
            top: 0,
            width: '100%',
            'text-align': 'center',
            padding: '20px 0',
            font: '30px ImpactLabelReversedRegular, ImpactLabelRegular, verdana',
            color: '#333'
        },
        'p': {
            bottom: 0,
            position: 'absolute',
            padding: '0 20px',
            font: '15px courier, monospaced',
            color: 'white',
            visibility: 'hidden'
        },
        '&.hovered': {
            has: boxShadow([2,2], 6, '#999')
        },
        '&.current': {
            has: boxShadow([4,4], 6, '#555'),
            p: {
                visibility: 'visible'
            },
            'label': {
                color: 'white'
            }
        }

    },
    '#commands': {
        position: 'absolute',
        top: 90,
        left: 0,
        width: '100%',
        font: '15px courier, monospaced',
        height: 0,
        '> div': {
            color: '#dddddd',
            marginBottom: 4,
            'float': 'left',
            clear: 'left',
            padding: '2px 5px',
//            height: 16,
            lineHeight: 13,
            position: 'relative',
            opacity:0.3,
            display:'none',
//            whiteSpace:'nowrap',
//            textOverflow:'ellipsis',
//            overflow:'hidden',
            cursor: 'pointer',
            '&.selected': {
                 padding: '2px 5px',
//                has: boxShadow([1,1], 5, '#992667')
                has: boxShadow([1,1], 3, '#999')
            },
            '&.up': {
                color: upColor.lighten(50),
                '> .arrow': {
                    width: 0,
                    height: 0,
                    border: '9px solid transparent',
                    position: 'absolute',
                    right: '-18px',
                    top: 0
                }
            },
            '&.dn': {
                color: dnColor.lighten(50),
                '> .arrow': {
                    width: 0,
                    height: 0,
                    border: '9px solid transparent',
                    position: 'absolute',
                    left: '-18px',
                    top: 0
                }
            },
            '&.status': {
                'border-color': statusColor.lighten(20),
                'background-color': statusColor,
                color: statusColor.lighten(50),
                '&.selected': {
                    'background-color': statusColor.darken(5)
                }
            }
        }
    },
    '#info': {
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        padding: '10px 0',
        font: '15px/20px courier, monospaced',
        zIndex: 1,
        '.screen': {
          zIndex: -1,
          position: 'absolute',
          left: -20,
          top: 0,
          height: '100%',
          width: '150%',
          backgroundColor: '#F6EBD9',
          opacity: 0.5
        },
//        height: 60,
        '.cmd, .doc': {
          minHeight: '3em',
          fontSize: 18
        },
        '.cmd':{
          float: 'left',
            marginRight: 20,
            width: '35%',
            color: 'black',
            textAlign: 'right',
            textDecoration: 'underline'
        },
        '.doc':{
          float: 'left',
            width: '55%',
            color: 'black'.lighten(30)
        }
    },
    '#remote_repo .bar, #local_repo .bar': {
      top: 85,
      height: 500
    }
};

$(function() {
    $.each(['stash','workspace','index','local_repo','remote_repo'], function(index, value) {
        var width = $('#' + value).innerWidth();
        $('#' + value).css('width', width - 2);

        css['#' + value] = {
            border: '1px dotted transparent',// + colors[value],
            color: colors[value],
            backgroundColor: colors[value].saturate(-50).lighten(20)
        };
        css['#' + value + ' .bar'] = { borderColor: colors[value].darken(20)};
        css['body.' + value + ' #' + value] = {
            color: 'white',
            backgroundColor: colors[value].lighten(0)
        };
        css['body.' + value + ' #commands > div.' + value] = {
            display: 'block',
            opacity: 1
        }

      css['body.' + value + ' #commands'] = {
        'div.up':{
          backgroundColor:c = colors[value].darken(30).saturate(0),
          borderColor:c,
          '> .arrow':{
            'border-left-color':c
          },
          '&.selected':{
            'background-color':c.darken(5),
            '> .arrow':{
              'border-left-color':c.darken(5)
            }
          }
        },
        'div.dn':{
          backgroundColor:c = colors[value].darken(10).saturate(-10),
          borderColor:c,
          '> .arrow':{
            'border-right-color':c
          },
          '&.selected':{
            'background-color':c.darken(5),
            '> .arrow':{
              'border-right-color':c.darken(5)
            }
          }
        }
      }
    });


  Csster.style(css);

});

