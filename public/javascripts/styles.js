var colors = {
    stash: '#bf3030',
    workspace: '#ff4040',
    index: '#ff9640',
    local_repo: '#cd0074',
    remote_repo:'#bf3030'
}


var upColor = colors.workspace.darken(10).saturate(-30);//'#e6399b';
var dnColor = colors.workspace.darken(0).saturate(-30);//'#e6399b';
//var dnColor = colors.index.darken(10).saturate(0);//'#992667';
var statusColor = '#846C6C';//'#a64b00';

//backgroundColor: colors[value].saturate(-50).lighten(20)

var css = {
    'html, body': {
        'font-family': 'verdana',
        'font-size': 14,
        margin: 0,
        padding: 0
    },
    'body': {
//        background: 'url(/images/10GraphSMA.jpg)'
//        background: 'url(/images/75572.png)'
//        background: 'url(/images/vLegalPad.jpg)'
        background: 'url(/images/vCanvas.jpg)'
//        background: 'url(/images/tn_graphpaper.gif)'
//        background: 'url(/images/tn_notepaper.gif)'
    },
    '#diagram': {
        marginTop: 20,
        position: 'relative',
        height: '6in',
        padding: '1px 0'
    },
    '.loc': {
        position: 'relative',
        height: '100%',
        cursor: 'pointer',
        has: boxShadow([3,3], 2, '#ccc'),
        '.bar': {
            position: 'absolute',
            left: '45%',
            top: 50,
            border: '1px dashed white',
            'border-top': 'none',
            width: 10,
            height: '90%'
        },
        'label': {
            position: 'absolute',
            top: 0,
            width: '100%',
            'text-align': 'center',
            padding: '20px 0',
            fontFamily: 'ImpactLabelReversedRegular, ImpactLabelRegular, verdana',
            fontSize: 30,
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
            has: boxShadow([3,3], 6, '#777'),
            p: {
                visibility: 'visible'
            }

        },
        '&.current': {
            has: boxShadow([3,3], 6, '#777'),
            p: {
                visibility: 'visible'
            },
            'label': {
//                fontFamily: 'ImpactLabelRegular,ImpactLabelReversedRegular,  verdana',
                color: 'white'
            }
        },
        '&:hover,&.current': {
        }

    },
    '#commands': {
        position: 'absolute',
        top: 100,
        left: 0,
        width: '100%',
        font: '15px courier, monospaced',
        height: 0,
        '> div': {
            'background-color': 'darkblue',
            color: '#dddddd',
            'margin-bottom': 2,
            'float': 'left',
            clear: 'left',
            padding: '2px 5px',
            'font-style': 'italic',
            position: 'relative',
            opacity: 0.3,
            display: 'none',
            'span.docs': {
                display: 'none',
                '-moz-box-shadow': '1px 1px 10px #992667'
            },
            '&:hover': {
//                opacity: 1,
                cursor: 'pointer',
                '-moz-box-shadow': '1px 1px 10px #992667'
            },
            '&:hover span.docs': {
                display: 'block',
                position: 'absolute',
                'background-color': 'inherit',
                padding: '5px 5px 25px 5px',
                left: '100%',
                top: 0,
                opacity: 1,
                'z-index': 100,
                'line-height': '1.3em',
                width: 210,
                color: upColor,
                'background-color': 'white'
            },
            '&:first-line': { 'font-style': 'normal' },
            '&.up': {
                'background-color': upColor,
                color: upColor.lighten(50)
            },
            '&.up > .arrow': {
                width: 0,
                height: 0,
                border: '9px solid transparent',
                'border-left-color': upColor,
                position: 'absolute',
                right: '-18px',
                top: 0
            },
            '&.dn': {
                'background-color': dnColor,
                color: dnColor.lighten(50)
            },
            '&.dn > .arrow': {
                width: 0,
                height: 0,
                border: '9px solid transparent',
                'border-right-color': dnColor,
                position: 'absolute',
                left: '-18px',
                top: 0
            },
            '&.status': {
                'background-color': statusColor,
                color: statusColor.lighten(50)
            },
            '&:before': { 'content': '"git "' }


        }
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
        css['#' + value + ':hover'] = {
//            borderColor: colors[value].darken(20),
//            backgroundColor: colors[value].saturate(-40).lighten(10)
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
//        css['#commands > div.status.' + value] = {
//            backgroundColor: colors[value].saturate(-50),
//            color: colors[value].saturate(-50).lighten(50)
//
//        }

    });


    Csster.style(css);

});

