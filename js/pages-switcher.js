var PageTransitions = function (a) {
    "use strict";

    function b() {
        return "" === location.hash ? location.hash = a("section.pt-page").first().attr("data-id") : location.hash
    }

    function c(b) {
        if (!b) return !1;
        var c = a(b);
        c = c[0], c = a(c.parentNode), c && (a("ul.site-main-menu li").removeClass("active"), c.addClass("active"))
    }

    function d() {
        function b() {
            d.removeClass("rotateOutDownRight closed"), d.show(), a("body").addClass("ajax-page-visible")
        }

        function c() {
            a("#page-ajax-loaded").addClass("rotateOutDownRight closed"), a("body").removeClass("ajax-page-visible"), setTimeout(function () {
                a("#page-ajax-loaded.closed").html(""), d.hide()
            }, 500)
        }

        var d = a("#page-ajax-loaded"), e = a(".ajax-page-load").each(function () {
            if (e = a(this).attr("href"), location.hash == location.hash.split("/")[0] + "/" + e.substr(0, e.length - 5)) {
                var c = a(this).attr("href");
                return b(), d.load(c), !1
            }
        });
        a(document).on("click", ".site-main-menu, #ajax-page-close-button", function (a) {
            a.preventDefault(), c(), location.hash = location.hash.split("/")[0]
        }).on("click", ".ajax-page-load", function () {
            var c = location.hash.split("/")[0] + "/" + a(this).attr("href").substr(0, a(this).attr("href").length - 5);
            return location.hash = c, b(), !1
        })
    }

    function f(b, c) {
        if (!b.attr("data-animation")) {
            var d = parseInt(Math.floor(67 * Math.random()) + 1);
            b.data("animation", d)
        }
        var c, e, f, h, o = b.data("animation").toString();
        if (-1 != o.indexOf("-")) {
            var p = o.split("-");
            h = parseInt(p[Math.floor(Math.random() * p.length)])
        } else h = parseInt(o);
        if (67 < h) return alert("Transition.js : Invalid 'data-animation' attribute configuration. Animation number should not be greater than 67"), !1;
        1 === h ? (e = "pt-page-moveFromRight", f = "pt-page-moveToLeft") : 2 === h ? (e = "pt-page-moveFromLeft", f = "pt-page-moveToRight") : 3 === h ? (e = "pt-page-moveFromBottom", f = "pt-page-moveToTop") : 4 === h ? (e = "pt-page-moveFromTop", f = "pt-page-moveToBottom") : 5 === h ? (e = "pt-page-moveFromRight pt-page-ontop", f = "pt-page-fade") : 6 === h ? (e = "pt-page-moveFromLeft pt-page-ontop", f = "pt-page-fade") : 7 === h ? (e = "pt-page-moveFromBottom pt-page-ontop", f = "pt-page-fade") : 8 === h ? (e = "pt-page-moveFromTop pt-page-ontop", f = "pt-page-fade") : 9 === h ? (e = "pt-page-moveFromRightFade", f = "pt-page-moveToLeftFade") : 10 === h ? (e = "pt-page-moveFromLeftFade", f = "pt-page-moveToRightFade") : 11 === h ? (e = "pt-page-moveFromBottomFade", f = "pt-page-moveToTopFade") : 12 === h ? (e = "pt-page-moveFromTopFade", f = "pt-page-moveToBottomFade") : 13 === h ? (e = "pt-page-moveFromRight", f = "pt-page-moveToLeftEasing pt-page-ontop") : 14 === h ? (e = "pt-page-moveFromLeft", f = "pt-page-moveToRightEasing pt-page-ontop") : 15 === h ? (e = "pt-page-moveFromBottom", f = "pt-page-moveToTopEasing pt-page-ontop") : 16 === h ? (e = "pt-page-moveFromTop", f = "pt-page-moveToBottomEasing pt-page-ontop") : 17 === h ? (e = "pt-page-moveFromRight pt-page-ontop", f = "pt-page-scaleDown") : 18 === h ? (e = "pt-page-moveFromLeft pt-page-ontop", f = "pt-page-scaleDown") : 19 === h ? (e = "pt-page-moveFromBottom pt-page-ontop", f = "pt-page-scaleDown") : 20 === h ? (e = "pt-page-moveFromTop pt-page-ontop", f = "pt-page-scaleDown") : 21 === h ? (e = "pt-page-scaleUpDown pt-page-delay300", f = "pt-page-scaleDown") : 22 === h ? (e = "pt-page-scaleUp pt-page-delay300", f = "pt-page-scaleDownUp") : 23 === h ? (e = "pt-page-scaleUp", f = "pt-page-moveToLeft pt-page-ontop") : 24 === h ? (e = "pt-page-scaleUp", f = "pt-page-moveToRight pt-page-ontop") : 25 === h ? (e = "pt-page-scaleUp", f = "pt-page-moveToTop pt-page-ontop") : 26 === h ? (e = "pt-page-scaleUp", f = "pt-page-moveToBottom pt-page-ontop") : 27 === h ? (e = "pt-page-scaleUpCenter pt-page-delay400", f = "pt-page-scaleDownCenter") : 28 === h ? (e = "pt-page-moveFromRight pt-page-delay200 pt-page-ontop", f = "pt-page-rotateRightSideFirst") : 29 === h ? (e = "pt-page-moveFromLeft pt-page-delay200 pt-page-ontop", f = "pt-page-rotateLeftSideFirst") : 30 === h ? (e = "pt-page-moveFromTop pt-page-delay200 pt-page-ontop", f = "pt-page-rotateTopSideFirst") : 31 === h ? (e = "pt-page-moveFromBottom pt-page-delay200 pt-page-ontop", f = "pt-page-rotateBottomSideFirst") : 32 === h ? (e = "pt-page-flipInLeft pt-page-delay500", f = "pt-page-flipOutRight") : 33 === h ? (e = "pt-page-flipInRight pt-page-delay500", f = "pt-page-flipOutLeft") : 34 === h ? (e = "pt-page-flipInBottom pt-page-delay500", f = "pt-page-flipOutTop") : 35 === h ? (e = "pt-page-flipInTop pt-page-delay500", f = "pt-page-flipOutBottom") : 36 === h ? (e = "pt-page-scaleUp", f = "pt-page-rotateFall pt-page-ontop") : 37 === h ? (e = "pt-page-rotateInNewspaper pt-page-delay500", f = "pt-page-rotateOutNewspaper") : 38 === h ? (e = "pt-page-moveFromRight", f = "pt-page-rotatePushLeft") : 39 === h ? (e = "pt-page-moveFromLeft", f = "pt-page-rotatePushRight") : 40 === h ? (e = "pt-page-moveFromBottom", f = "pt-page-rotatePushTop") : 41 === h ? (e = "pt-page-moveFromTop", f = "pt-page-rotatePushBottom") : 42 === h ? (e = "pt-page-rotatePullRight pt-page-delay180", f = "pt-page-rotatePushLeft") : 43 === h ? (e = "pt-page-rotatePullLeft pt-page-delay180", f = "pt-page-rotatePushRight") : 44 === h ? (e = "pt-page-rotatePullBottom pt-page-delay180", f = "pt-page-rotatePushTop") : 45 === h ? (e = "pt-page-rotatePullTop pt-page-delay180", f = "pt-page-rotatePushBottom") : 46 === h ? (e = "pt-page-moveFromRightFade", f = "pt-page-rotateFoldLeft") : 47 === h ? (e = "pt-page-moveFromLeftFade", f = "pt-page-rotateFoldRight") : 48 === h ? (e = "pt-page-moveFromBottomFade", f = "pt-page-rotateFoldTop") : 49 === h ? (e = "pt-page-moveFromTopFade", f = "pt-page-rotateFoldBottom") : 50 === h ? (e = "pt-page-rotateUnfoldLeft", f = "pt-page-moveToRightFade") : 51 === h ? (e = "pt-page-rotateUnfoldRight", f = "pt-page-moveToLeftFade") : 52 === h ? (e = "pt-page-rotateUnfoldTop", f = "pt-page-moveToBottomFade") : 53 === h ? (e = "pt-page-rotateUnfoldBottom", f = "pt-page-moveToTopFade") : 54 === h ? (e = "pt-page-rotateRoomLeftIn", f = "pt-page-rotateRoomLeftOut pt-page-ontop") : 55 === h ? (e = "pt-page-rotateRoomRightIn", f = "pt-page-rotateRoomRightOut pt-page-ontop") : 56 === h ? (e = "pt-page-rotateRoomTopIn", f = "pt-page-rotateRoomTopOut pt-page-ontop") : 57 === h ? (e = "pt-page-rotateRoomBottomIn", f = "pt-page-rotateRoomBottomOut pt-page-ontop") : 58 === h ? (e = "pt-page-rotateCubeLeftIn", f = "pt-page-rotateCubeLeftOut pt-page-ontop") : 59 === h ? (e = "pt-page-rotateCubeRightIn", f = "pt-page-rotateCubeRightOut pt-page-ontop") : 60 === h ? (e = "pt-page-rotateCubeTopIn", f = "pt-page-rotateCubeTopOut pt-page-ontop") : 61 === h ? (e = "pt-page-rotateCubeBottomIn", f = "pt-page-rotateCubeBottomOut pt-page-ontop") : 62 === h ? (e = "pt-page-rotateCarouselLeftIn", f = "pt-page-rotateCarouselLeftOut pt-page-ontop") : 63 === h ? (e = "pt-page-rotateCarouselRightIn", f = "pt-page-rotateCarouselRightOut pt-page-ontop") : 64 === h ? (e = "pt-page-rotateCarouselTopIn", f = "pt-page-rotateCarouselTopOut pt-page-ontop") : 65 === h ? (e = "pt-page-rotateCarouselBottomIn", f = "pt-page-rotateCarouselBottomOut pt-page-ontop") : 66 === h ? (e = "pt-page-rotateSidesIn pt-page-delay200", f = "pt-page-rotateSidesOut") : 67 === h ? (e = "pt-page-rotateSlideIn", f = "pt-page-rotateSlideOut") : void 0;
        var q, r = i, s = r.data("current"), t = b.attr("href").split("#"), c = t[1];
        q = s;
        var u = a("section[data-id=\"" + s + "\"]");
        if (s = c, q != s) {
            j = !0, r.data("current", s);
            var v = a("section[data-id=" + s + "]").addClass("pt-page-current");
            v.scrollTop(0), u.addClass(f).on(m, function () {
                u.off(m), k = !0, l && (g(r, v, u), k = !1)
            }), v.addClass(e).on(m, function () {
                v.off(m), l = !0, k && (g(r, v, u), l = !1, j = !1)
            })
        } else {
            j = !1
            var v = a("section[data-id=" + s + "]").removeClass("pt-page-current");
        };
        n || g(u, v)
    }

    function g(a, b, c) {
        h(b, c)
    }

    function h(a, b) {
        b.attr("class", b.data("originalClassList")), a.attr("class", a.data("originalClassList") + " pt-page-current")
    }

    var i = a(".subpages"), j = !1, k = !0, l = !1, m = {
        WebkitAnimation: "webkitAnimationEnd",
        OAnimation: "oAnimationEnd",
        msAnimation: "MSAnimationEnd",
        animation: "animationend"
    }[Modernizr.prefixed("animation")], n = Modernizr.cssanimations;
    return {
        init: function (e) {
            a(".pt-page").each(function () {
                var b = a(this);
                b.data("originalClassList", b.attr("class"))
            }), i.each(function () {
                "" === location.hash && a("section[data-id=" + h + "]").addClass("pt-page-current")
            }), a(".pt-trigger").on("click", function (b) {
                if (b.preventDefault(), j) return !1;
                var d = a(this);
                c(d), f(d), location.hash = a(this).attr("href")
            }), window.onhashchange = function () {
                if (location.hash) {
                    if (j) return !1;
                    var b = a(g + " a[href*=\"" + location.hash.split("/")[0] + "\"]");
                    c(b), f(b), d()
                }
            };
            var g = e.menu, h = b();
            location.hash = h;
            var k = a(g + " a[href*=\"" + location.hash.split("/")[0] + "\"]");
            c(k), f(k), a("body").append("<div id=\"page-ajax-loaded\" class=\"page-ajax-loaded animated rotateInDownRight\"></div>"), d(), a(".lmpixels-arrow-right").click(function () {
                var b = a(".site-main-menu li.active");
                b.next("li").children("a").click(), b.is(":last-child") && a(".site-main-menu li:first-child").children("a").click()
            }), a(".lmpixels-arrow-left").click(function () {
                var b = a(".site-main-menu li.active");
                b.prev("li").children("a").click(), b.is(":first-child") && a(".site-main-menu li:last-child").children("a").click()
            })
        }
    }
}(jQuery);