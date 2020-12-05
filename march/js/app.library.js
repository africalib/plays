var appLib = {
    load: function (func) {
        var oldonload = window.onload;
        if (typeof window.onload != 'function') {
            window.onload = func;
        }
        else {
            window.onload = function () {
                if (oldonload)
                    oldonload();

                func();
            }
        }
    },
    timer: {},

    isNullOrEmpty: function (paramValue) {
        return paramValue === '' || paramValue === undefined || paramValue === null;
    },

    isNumber: function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    },

    replaceAll: function (paramValue, paramFind, paramReplace) {
        returnValue = paramValue;

        if (!appLib.IsNullOrEmpty(paramValue))
            returnValue = paramValue.toString().split(paramFind).join(paramReplace);

        return returnValue;
    },

    htmlEncode: function (paramValue) {
        return $('<div/>').text(paramValue).html();
    },

    htmlDecode: function (paramValue) {
        return $('<div/>').html(paramValue).text();
    },

    focusToEnd: function (paramSeletor) {
        $(paramSeletor).focus();
        var thisValue = $(paramSeletor).val();
        $(paramSeletor).val('');
        $(paramSeletor).val(thisValue);
    },

    bandMessage: function (paramType, paramMessage, paramTimeout) {
        $('#bandMessage').hide();

        switch (paramType) {
            case 'hide':
                return;
        }

        clearTimeout(this.timer);

        if ($('#bandMessage').length < 1)
            $('body').append('<div id="bandMessage" class="band-message" onclick="$(this).hide()"></div>');

        if ($('#bandMessage .message-wrapper')) {
            $('#bandMessage').html('<div class="message-wrapper alert alert-' + paramType + '">'
                + '    <span class="message"></span>'
                + '    <a class="close">&times;</a>'
                + '</div>');
        }

        // if (paramType === 'white')
        //     $('#bandMessage').addClass('reversed');
        // else
        //     $('#bandMessage').removeClass('reversed');

        $('#bandMessage .message').text(paramMessage);
        $('#bandMessage').stop().fadeIn(0);

        if (paramTimeout > 0) {
            this.timer = setTimeout(function () {
                $('#bandMessage').stop().fadeOut(500);
            }, paramTimeout);
        }
    },

    numberFormat: function (paramValue) {
        var returnValue = new Array();

        if (!appLib.IsNullOrEmpty(paramValue)) {
            paramValue = appLib.replaceAll(paramValue, ',', '');

            var isPositiveNum = Number(paramValue) >= 0;

            if (!isPositiveNum)
                paramValue = appLib.replaceAll(paramValue, '-', '');

            paramValue = paramValue.toString();
            var charArr = paramValue.split('');
            charArr.reverse();

            for (var i in charArr) {
                if (i != 0 && i % 3 == 0)
                    returnValue.push(',');

                returnValue.push(charArr[i])
            }

            returnValue.reverse();
            returnValue = returnValue.join('');

            if (!isPositiveNum)
                returnValue = '-' + returnValue;
        }
        return returnValue;
    },

    now: function (format) {
        var now = new Date();
        var yyyy = now.getFullYear();
        var MM = now.getMonth() + 1;
        var dd = now.getDate();
        var HH = now.getHours();
        var mm = now.getMinutes();
        var ss = now.getSeconds();
        var yy = yyyy.toString().substring(2);

        if (MM < 10)
            MM = '0' + MM;

        if (dd < 10)
            dd = '0' + dd;

        if (HH < 10)
            HH = '0' + HH;

        if (mm < 10)
            mm = '0' + mm;

        if (ss < 10)
            ss = '0' + ss

        switch (format) {
            case 'HH:mm:ss':
                now =  HH + ':' + mm + ':' + ss;
                break;
                
            case 'yy-MM-dd':
                now = yy + '-' + MM + '-' + dd;
                break;

            case 'yyyy-MM-dd':
                now = yyyy + '-' + MM + '-' + dd;
                break;

            case 'yyyy-MM-dd HH:mm:ss':
                now = yyyy + '-' + MM + '-' + dd + ' ' + HH + ':' + mm + ':' + ss;
                break;

            default:
                now = yyyy + '' + MM + '' + dd + '' + HH + '' + mm + '' + ss;
                break;
        }

        return now;
    },

    getFirstUpperCase: function (val) {
        if (val)
            return val.substring(0, 1).toUpperCase() + val.substring(1);

        return '';
    },

    loading: function (type, lazy) {
        clearTimeout(appLib.timer['loading']);

        switch (type) {
            case 'show':
                $('#loadingIco').show();
                $('#loadingIco').css('opacity', 1);
                break;

            case 'hide':
                var time = (lazy ? 420 : 0);

                appLib.timer['loading'] = setTimeout(function () {
                    $('#loadingIco').fadeOut(420);
                }, time);
                break;
        }
    },

    adjustSize: function (time) {
        setTimeout(function () {
            var device = {
                width: $(document).width(),
                height: $(document).height()
            }

            $('.each-app').each(function () {
                height = {
                    top: $(this).find('.content-top').outerHeight(),
                    topWrapper: $(this).find('.content-top .top-wrapper').outerHeight(),
                    footer: $('.app-footer').outerHeight()
                }

                var conntentListHeight = device.height - height.top - height.footer - 30;
                $(this).find('.index-content .content-top .top-wrapper').css('height', height.topWrapper);

                if (device.height > device.width)
                    $(this).find('.index-content .content-list').css('height', conntentListHeight);
                else
                    $(this).find('.index-content .content-list').css('height', 'auto');
            });
        }, time)
    },

    renew: function (value) {
        return JSON.parse(JSON.stringify(value));
    },

    getRandom: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    isMobileDevice: function () {
        return navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)
    },
    getUser: function () {
        let user = localStorage.getItem('user');

        if (user) {
            user = JSON.parse(user);
        }
        else {
            let alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let name = null;
            let names = ['Peter', 'Andrew', 'James', 'John', 'Philip', 'Bartholomew', 'Matthew', 'Thomas', 'Simon', 'Paul', 'Barnabas', 'David', 'Solomon', 'Noah', 'Enoch', 'Jonathan'];
            let nameArr = [];
            
            nameArr.push(alphabets[Math.floor(Math.random() * alphabets.length)]);
            nameArr.push(alphabets[Math.floor(Math.random() * alphabets.length)]);
            nameArr.push(names[Math.floor(Math.random() * names.length)]);
            name = nameArr.join('. ');

            user = {
                name: name,
                wins: 0,
                losses: 0,
                firstGameDate: appLib.now('yy-MM-dd'),
                lastGameDate: appLib.now('yy-MM-dd')
            }

            localStorage.setItem('user', JSON.stringify(user));
        }

        return user;
    }
}