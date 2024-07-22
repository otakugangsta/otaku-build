(this["webpackJsonpagarix-front"] =
  this["webpackJsonpagarix-front"] || []).push([
  [0],
  {
    102: function (e, t, n) {
      e.exports = {
        gameMode: "game-mode_gameMode__2UWgZ",
        active: "game-mode_active__2NVmL",
      };
    },
    103: function (e, t, n) {
      e.exports = {
        wrap: "chat-input_wrap__1VweC",
        shown: "chat-input_shown__jP8Uh",
      };
    },
    104: function (e, t, n) {
      e.exports = {
        hudsWrap: "huds_hudsWrap__3Blfm",
        hidden: "huds_hidden__2Je9z",
      };
    },
    132: function (e, t, n) {
      e.exports = { wrap: "left_wrap__1J8ic" };
    },
    133: function (e, t, n) {
      e.exports = { wrap: "right_wrap__3ZA0i" };
    },
    138: function (e, t, n) {
      e.exports = { wrap: "hint_wrap__3pvZy" };
    },
    139: function (e, t, n) {
      e.exports = { wrapper: "tabs_wrapper__3X0iT" };
    },
    146: function (e, t, n) {},
    15: function (e, t, n) {
      e.exports = {
        wrap: "profile_wrap__1pMJR",
        blured: "profile_blured__3UBvK",
        disabled: "profile_disabled__2exqd",
        top: "profile_top__3s6gp",
        profileWrap: "profile_profileWrap__2-0h8",
        imgWrap: "profile_imgWrap__3r4Aq",
        errored: "profile_errored__1NLey",
        errorMessage: "profile_errorMessage__34W7G",
        profileDataWrap: "profile_profileDataWrap__C2dQp",
        profileNick: "profile_profileNick__17f7Y",
        profileSkinUrl: "profile_profileSkinUrl__2vmHi",
        tag: "profile_tag__WcUFd",
      };
    },
    17: function (e, t, n) {
      e.exports = {
        wrap: "settings_wrap__2upBt",
        onHidden: "settings_onHidden__1zts4",
        shown: "settings_shown__2QAMk",
        content: "settings_content__1VMbs",
        category: "settings_category__3TAKe",
        hidden: "settings_hidden__Msm9S",
        version: "settings_version__1Xesi",
      };
    },
    18: function (e, t, n) {
      e.exports = {
        menuWrap: "wrapped-menu_menuWrap__3971l",
        menuShown: "wrapped-menu_menuShown__3n2D6",
        animateMenuShown: "wrapped-menu_animateMenuShown__2EpwM",
        settingsShown: "wrapped-menu_settingsShown__3X2Lt",
        top: "wrapped-menu_top__3OSKG",
        middle: "wrapped-menu_middle__PeQzl",
        playSpectate: "wrapped-menu_playSpectate__2qyZx",
        customization: "wrapped-menu_customization__2uHm0",
        bottom: "wrapped-menu_bottom__312H6",
      };
    },
    21: function (e, t, n) {
      e.exports = {
        wrap: "switch_wrap__2J_DB",
        hint: "switch_hint__Lrf1k",
        disabled: "switch_disabled__1NrOQ",
        main: "switch_main__2Guqu",
        label: "switch_label__31PKI",
        labelText: "switch_labelText__D_DKw",
        toggle: "switch_toggle__1rhqv",
        toggleState: "switch_toggleState__jZ7eT",
        indicator: "switch_indicator__twn18",
      };
    },
    22: function (e, t, n) {
      e.exports = {
        wrap: "colorpick_wrap__E1JUJ",
        disabled: "colorpick_disabled__2CYjA",
        hint: "colorpick_hint__1TWA7",
        picker: "colorpick_picker__2Vl_L",
        picking: "colorpick_picking__1xZwi",
        colorButton: "colorpick_colorButton__1B6u-",
        chromePickerWrapper: "colorpick_chromePickerWrapper__2OKm5",
        pickerSave: "colorpick_pickerSave__1lnDp",
      };
    },
    23: function (e, t, n) {
      e.exports = {
        wrap: "leaderboard_wrap__iHwtW",
        withMass: "leaderboard_withMass__1m-wg",
        players: "leaderboard_players__3PGEW",
        player: "leaderboard_player__1HPUd",
        mass: "leaderboard_mass__39gYy",
        massValue: "leaderboard_massValue__K6Tye",
        nick: "leaderboard_nick__3xkji",
        position: "leaderboard_position__3V4qP",
        noPlayers: "leaderboard_noPlayers__4Filp",
      };
    },
    24: function (e, t, n) {
      e.exports = {
        wrap: "top-team_wrap__vJr6H",
        stats: "top-team_stats__3ZjT9",
        players: "top-team_players__uqxhS",
        player: "top-team_player__3tb3H",
        mass: "top-team_mass__zgInJ",
        noPlayers: "top-team_noPlayers__3MOrC",
      };
    },
    26: function (e, t, n) {
      e.exports = {
        wrap: "select_wrap__2uUKs",
        disabled: "select_disabled__1W83K",
        hint: "select_hint__2ibhW",
        right: "select_right__2pyPC",
        valuesWrap: "select_valuesWrap__1Po5z",
        values: "select_values__1ev35",
        value: "select_value__3cLJ_",
      };
    },
    260: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(2),
        o = n.n(a),
        s = n(67),
        i = n.n(s),
        r = (n(146), n(3)),
        c = n(51),
        l = n.n(c),
        u = n(17),
        d = n.n(u),
        b = n(43),
        g = n.n(b),
        p = n(96),
        f = n.n(p),
        m = n(9),
        h = n(8),
        j = n(5),
        O = n(10),
        S = n(11),
        w = function (e, t, n, a) {
          var o = t ? "CTRL+" : "",
            s = n ? "ALT+" : "",
            i = a ? "SHIFT+" : "",
            r = e.includes("Shift") && a,
            c = e.includes("Alt") && n,
            l = e.includes("Control") && t;
          return r || c || l
            ? e.replace("Key", "")
            : o + s + i + e.replace("Key", "");
        },
        y = (function () {
          function e() {
            Object(O.a)(this, e),
              (this.onKeyDownSubscribers = []),
              (this.onKeyUpSubscribers = []),
              (this.onKeyPressSubscribers = []);
          }
          return (
            Object(S.a)(e, [
              {
                key: "subscribeOnKeyDown",
                value: function (e) {
                  var t = this;
                  this.onKeyDownSubscribers.push(e),
                    window.addEventListener("keydown", function (e) {
                      var n = e.code,
                        a = e.ctrlKey,
                        o = e.altKey,
                        s = e.shiftKey,
                        i = e.preventDefault;
                      t.onKeyDownSubscribers.forEach(function (t) {
                        t(w(n, a, o, s), i.bind(e));
                      });
                    });
                },
              },
              {
                key: "subscribeOnkeyUp",
                value: function (e) {
                  var t = this;
                  this.onKeyUpSubscribers.push(e),
                    window.addEventListener("keyup", function (e) {
                      var n = e.code,
                        a = e.ctrlKey,
                        o = e.altKey,
                        s = e.shiftKey,
                        i = e.preventDefault;
                      t.onKeyUpSubscribers.forEach(function (t) {
                        t(w(n, a, o, s), i.bind(e));
                      });
                    });
                },
              },
              {
                key: "subscribeOnKeyPress",
                value: function (e) {
                  var t = this;
                  this.onKeyPressSubscribers.push(e),
                    window.addEventListener("keypress", function (e) {
                      t.onKeyPressSubscribers.forEach(function (t) {
                        var n = e.code,
                          a = e.ctrlKey,
                          o = e.altKey,
                          s = e.shiftKey,
                          i = e.preventDefault;
                        t(w(n, a, o, s), i.bind(e));
                      });
                    });
                },
              },
            ]),
            e
          );
        })(),
        _ = (function () {
          function e() {
            var t = this;
            Object(O.a)(this, e),
              (this.events = void 0),
              (this.binded = void 0),
              (this.blockWhitelist = ["Escape", "Enter"]),
              (this.block = !0),
              (this.binded = new Map()),
              (this.events = new y()),
              this.events.subscribeOnKeyDown(function (e, n) {
                return t.keyDownSubscriber(e, n);
              }),
              this.events.subscribeOnkeyUp(function (e, n) {
                return t.keyUpSubscriber(e, n);
              }),
              this.events.subscribeOnKeyPress(function (e, n) {
                return t.keyPressSubscriber(e, n);
              });
          }
          return (
            Object(S.a)(e, [
              {
                key: "transformKey",
                value: function (e, t) {
                  return "".concat(t, ":").concat(e);
                },
              },
              {
                key: "untransformKey",
                value: function (e) {
                  return { event: e.split(":")[0], key: e.split(":")[1] };
                },
              },
              {
                key: "isValidUntransformedKey",
                value: function (e, t, n, a) {
                  var o = this.untransformKey(e),
                    s = o.event,
                    i = o.key;
                  return s === t && n === i && "function" === typeof a;
                },
              },
              {
                key: "handleEvent",
                value: function (e, t, n) {
                  var a = this;
                  this.binded.forEach(function (o, s) {
                    (a.block &&
                      !a.blockWhitelist.includes(a.untransformKey(s).key)) ||
                      (a.isValidUntransformedKey(s, n, e, o) && (o(), t()));
                  });
                },
              },
              {
                key: "keyDownSubscriber",
                value: function (e, t) {
                  this.handleEvent(e, t, "down");
                },
              },
              {
                key: "keyUpSubscriber",
                value: function (e, t) {
                  this.handleEvent(e, t, "up");
                },
              },
              {
                key: "keyPressSubscriber",
                value: function (e, t) {
                  this.handleEvent(e, t, "press");
                },
              },
              {
                key: "bindFunctionToKey",
                value: function (e, t, n) {
                  var a = this.transformKey(t, e);
                  this.binded.has(a) && this.binded.delete(a),
                    this.binded.set(a, n);
                },
              },
              {
                key: "hasBinded",
                value: function (e, t) {
                  return this.binded.has(this.transformKey(t, e));
                },
              },
              {
                key: "removeBinded",
                value: function (e, t) {
                  this.binded.delete(this.transformKey(t, e));
                },
              },
            ]),
            e
          );
        })(),
        C = new _(),
        T = n(131),
        k = new ((function () {
          function e() {
            Object(O.a)(this, e), (this.store = void 0);
          }
          return (
            Object(S.a)(e, [
              {
                key: "set",
                value: function (e) {
                  this.store = e;
                },
              },
            ]),
            e
          );
        })())(),
        v = (function () {
          function e() {
            Object(O.a)(this, e);
          }
          return (
            Object(S.a)(e, null, [
              {
                key: "setFoodEnabled",
                value: function (e) {
                  window.GameSettings.all.settings.theming.food.enabled = e;
                },
              },
              {
                key: "setFoodFirstTabEnabled",
                value: function (e) {
                  window.GameSettings.all.settings.theming.food.firstTabEnabled =
                    e;
                },
              },
              {
                key: "setFoodSecondTabEnabled",
                value: function (e) {
                  window.GameSettings.all.settings.theming.food.secondTabEnabled =
                    e;
                },
              },
              {
                key: "setFoodTopOneTabEnabled",
                value: function (e) {
                  window.GameSettings.all.settings.theming.food.topOneTabEnabled =
                    e;
                },
              },
              {
                key: "setFoodSize",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.food.size = e),
                    window.GameSettings.updateThemingFood();
                },
              },
              {
                key: "setFoodColor",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.food.color = e),
                    window.GameSettings.updateThemingFood();
                },
              },
              {
                key: "setFoodGlow",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.food.glow = e),
                    window.GameSettings.updateThemingFood();
                },
              },
              {
                key: "setFoodGlowColor",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.food.glowColor = e),
                    window.GameSettings.updateThemingFood();
                },
              },
              {
                key: "setFoodGlowDistance",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.food.glowDistance =
                    e),
                    window.GameSettings.updateThemingFood();
                },
              },
              {
                key: "setFoodGlowStrength",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.food.glowStrength =
                    e),
                    window.GameSettings.updateThemingFood();
                },
              },
              {
                key: "setFoodCrisp",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.food.crisp = e),
                    window.GameSettings.updateThemingFood();
                },
              },
            ]),
            e
          );
        })(),
        x = "SET_FOOD_SIZE",
        E = "SET_FOOD_COLOR",
        M = "SET_FOOD_GLOW",
        A = "SET_FOOD_GLOW_COLOR",
        I = "SET_FOOD_GLOW_DISTANCE",
        G = "SET_FOOD_GLOW_STRENGTH",
        N = "SET_FOOD_CRISP",
        R = "SET_FOOD_ENABLED",
        P = "SET_FOOD_FIRST_TAB_ENABLED",
        L = "SET_FOOD_SECOND_TAB_ENABLED",
        B = "SET_FOOD_TOP_ONE_TAB_ENABLED",
        F = function (e) {
          return function (t) {
            t({ type: R, enabled: e }), v.setFoodEnabled(e);
          };
        },
        D = function (e) {
          return function (t) {
            t({ type: P, firstTabEnabled: e }), v.setFoodFirstTabEnabled(e);
          };
        },
        U = function (e) {
          return function (t) {
            t({ type: L, secondTabEnabled: e }), v.setFoodSecondTabEnabled(e);
          };
        },
        K = function (e) {
          return function (t) {
            t({ type: B, topOneTabEnabled: e }), v.setFoodTopOneTabEnabled(e);
          };
        },
        H = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: x, size: e };
              })(e)
            ),
              v.setFoodSize(e);
          };
        },
        W = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: E, color: e };
              })(e)
            ),
              v.setFoodColor(e);
          };
        },
        V = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: M, glow: e };
              })(e)
            ),
              v.setFoodGlow(e);
          };
        },
        z = function (e) {
          return function (t) {
            t({ type: A, glowColor: e }), v.setFoodGlowColor(e);
          };
        },
        Y = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: I, glowDistance: e };
              })(e)
            ),
              v.setFoodGlowDistance(e);
          };
        },
        X = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: G, glowStrength: e };
              })(e)
            ),
              v.setFoodGlowStrength(e);
          };
        },
        q = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: N, crisp: e };
              })(e)
            ),
              v.setFoodCrisp(e);
          };
        },
        Z = "SET_GAME_LOADED",
        J = "SET_GAME_LOADER_STATUS",
        Q = "SET_MENU_SHOWN",
        $ = "SET_UI_BLURED",
        ee = "SET_SETTINGS_SHOWN",
        te = "SET_SETTINGS_TYPE",
        ne = "SET_GAME_SETTINGS_SUBMENU",
        ae = "SET_THEMING_SETTINGS_SUBMENU",
        oe = "SET_HOTKEYS_SETTINGS_SUBMENU",
        se = "SET_UI_SETTINGS_SUBMENU",
        ie = "SET_ADDITIONAL_PROFILES_LIST_SHOWN",
        re = "SET_LEADERBOARD_PLAYERS",
        ce = "SET_GAME_SOCKET_CONNECTING",
        le = "SET_TOP_TEAM_PLAYERS",
        ue = "SET_STATS",
        de = "SET_HUDS_SHOWN",
        be = "SET_SPECTATE_TYPE",
        ge = "SET_IS_PLAYER_PLAYING",
        pe = "ADD_CHAT_MESSAGE",
        fe = "SET_INPUT_MESSAGE_SHOWN",
        me = "SET_GHOST_CELLS",
        he = "SET_PLAYER_MASS",
        je = function (e) {
          return { type: Q, menuShown: e };
        },
        Oe = function (e) {
          return { type: te, settingsType: e };
        },
        Se = function (e) {
          return { type: ce, gameSocketConnecting: e };
        },
        we = function () {
          var e;
          null === (e = window.GameAPI) || void 0 === e || e.hotkeys.feed();
        },
        ye = function () {
          var e;
          null === (e = window.GameAPI) ||
            void 0 === e ||
            e.hotkeys.macroFeed();
        },
        _e = function () {
          var e;
          null === (e = window.GameAPI) || void 0 === e || e.hotkeys.stopFeed();
        },
        Ce = function () {
          var e;
          null === (e = window.GameAPI) || void 0 === e || e.hotkeys.split();
        },
        Te = function () {
          var e;
          null === (e = window.GameAPI) ||
            void 0 === e ||
            e.hotkeys.doubleSplit();
        },
        ke = function () {
          var e;
          null === (e = window.GameAPI) ||
            void 0 === e ||
            e.hotkeys.tripleSplit();
        },
        ve = function () {
          var e;
          null === (e = window.GameAPI) || void 0 === e || e.hotkeys.split16();
        },
        xe = function () {
          var e;
          null === (e = window.GameAPI) ||
            void 0 === e ||
            e.hotkeys.quickRespawn();
        },
        Ee = function () {
          var e;
          null === (e = window.GameAPI) ||
            void 0 === e ||
            e.hotkeys.pauseCell();
        },
        Me = function () {
          var e;
          null === (e = window.GameAPI) ||
            void 0 === e ||
            e.hotkeys.toggleCellHelpers();
        },
        Ae = function () {
          var e;
          null === (e = window.GameAPI) ||
            void 0 === e ||
            e.hotkeys.toggleCellSkins();
        },
        Ie = function () {
          var e;
          null === (e = window.GameAPI) ||
            void 0 === e ||
            e.hotkeys.toggleCellRings();
        },
        Ge = function () {
          var e;
          null === (e = window.GameAPI) ||
            void 0 === e ||
            e.hotkeys.switchTabs();
        },
        Ne = function () {
          var e;
          null === (e = window.GameAPI) ||
            void 0 === e ||
            e.hotkeys.toggleFullmapViewRender();
        },
        Re = function () {
          k.store.dispatch(
            F(!k.store.getState().settings.theming.food.enabled)
          );
        },
        Pe = function () {
          var e;
          k.store.dispatch(
            ((e = !k.store.getState().UI.hudsShown), { type: de, hudsShown: e })
          );
        },
        Le = {
          feed: we,
          macroFeed: ye,
          stopMacroFeed: _e,
          split: Ce,
          doubleSplit: Te,
          tripleSplit: ke,
          splitSixteen: ve,
          quickRespawn: xe,
          pauseCell: Ee,
          toggleCellHelpers: Me,
          toggleCellSkins: Ae,
          toggleCellRings: Ie,
          switchTabs: Ge,
          toggleSpectatorMode: Ne,
          toggleFoodRender: Re,
          toggleHuds: Pe,
        },
        Be = "SET_LEFT_MOUSE_BUTTON",
        Fe = "SET_RIGHT_MOUSE_BUTTON",
        De = "SET_MIDDLE_MOUSE_BUTTON",
        Ue = [
          { name: "[NOT SET]", action: function () {} },
          { name: "Feed", action: Le.feed },
          { name: "Macro feed", action: Le.macroFeed },
          { name: "Split", action: Le.split },
          { name: "Double split", action: Le.doubleSplit },
          { name: "Triple split", action: Le.tripleSplit },
          { name: "Split 16", action: Le.splitSixteen },
          { name: "Quick respawn", action: Le.quickRespawn },
          { name: "Pause cell", action: Le.pauseCell },
          { name: "Toggle cell helpers", action: Le.toggleCellHelpers },
          { name: "Toggle cell skins", action: Le.toggleCellSkins },
          { name: "Toggle cell rings", action: Le.toggleCellRings },
          { name: "Switch tabs", action: Le.switchTabs },
          { name: "Toggle spectator mode", action: Le.toggleSpectatorMode },
          { name: "Toggle food", action: Le.toggleFoodRender },
          { name: "Toggle huds", action: Le.toggleHuds },
        ],
        Ke = Ue.map(function (e) {
          return e.name;
        }),
        He = new ((function () {
          function e() {
            var t = this;
            Object(O.a)(this, e),
              (this.leftActionName = "[NOT SET]"),
              (this.rightActionName = "[NOT SET]"),
              (this.middleMouseActionName = "[NOT SET]"),
              (this.isMacroFeeding = !1),
              (this.block = !0),
              window.addEventListener("mousedown", function (e) {
                return t.listenMouseDown(e);
              }),
              window.addEventListener("mouseup", function (e) {
                return t.listenMouseUp(e);
              }),
              window.location.origin.includes("agar") &&
                window.addEventListener("contextmenu", function (e) {
                  return e.preventDefault();
                });
          }
          return (
            Object(S.a)(e, [
              {
                key: "getFunctionToExecute",
                value: function (e) {
                  if ("[NOT SET]" === e) return function () {};
                  var t,
                    n = Object(T.a)(Ue);
                  try {
                    for (n.s(); !(t = n.n()).done; ) {
                      var a = t.value;
                      if (a.name === e)
                        return (
                          "Macro feed" === a.name && (this.isMacroFeeding = !0),
                          a.action
                        );
                    }
                  } catch (o) {
                    n.e(o);
                  } finally {
                    n.f();
                  }
                  return function () {};
                },
              },
              {
                key: "execute",
                value: function (e, t) {
                  e.preventDefault(), this.getFunctionToExecute(t)();
                },
              },
              {
                key: "listenMouseDown",
                value: function (e) {
                  if (!this.block)
                    switch (e.button) {
                      case 0:
                        this.execute(e, this.leftActionName);
                        break;
                      case 2:
                        this.execute(e, this.rightActionName);
                        break;
                      case 1:
                        this.execute(e, this.middleMouseActionName);
                    }
                },
              },
              {
                key: "listenMouseUp",
                value: function (e) {
                  this.isMacroFeeding && (_e(), (this.isMacroFeeding = !1));
                },
              },
              {
                key: "init",
                value: function (e) {
                  var t = e.left,
                    n = e.right,
                    a = e.middle;
                  this.bindLeft(t), this.bindRight(n), this.bindMiddle(a);
                },
              },
              {
                key: "bindLeft",
                value: function (e) {
                  this.leftActionName = e;
                },
              },
              {
                key: "bindRight",
                value: function (e) {
                  this.rightActionName = e;
                },
              },
              {
                key: "bindMiddle",
                value: function (e) {
                  this.middleMouseActionName = e;
                },
              },
            ]),
            e
          );
        })())(),
        We = function (e, t) {
          return function (n) {
            var a, o, s;
            (n({ type: ee, settingsShown: e }), t && n(Oe(t)), e)
              ? "THEMING" === t || "UI" === t
                ? null === (a = window.GameAPI) ||
                  void 0 === a ||
                  a.setSceneBlurred(!1, !1)
                : null === (o = window.GameAPI) ||
                  void 0 === o ||
                  o.setSceneBlurred(!0, !1)
              : null === (s = window.GameAPI) ||
                void 0 === s ||
                s.setSceneBlurred(!0, !1);
          };
        },
        Ve = function (e) {
          return function (t, n) {
            t(je(e));
            var a = n().UI,
              o = a.settingsType,
              s = a.settingsShown;
            if (e) {
              var i, r;
              if (!s || ("THEMING" !== o && "UI" !== o))
                null === (i = window.GameAPI) ||
                  void 0 === i ||
                  i.setSceneBlurred(!0, !1);
              else
                null === (r = window.GameAPI) ||
                  void 0 === r ||
                  r.setSceneBlurred(!1, !1);
              (C.block = !0), (He.block = !0);
            } else {
              var c;
              null === (c = window.GameAPI) ||
                void 0 === c ||
                c.setSceneBlurred(!1, !0),
                (C.block = !1),
                (He.block = !1);
            }
          };
        },
        ze = function (e) {
          return function (t) {
            t({ type: Z, gameLoaded: !e }), t(je(!e));
          };
        },
        Ye = function (e) {
          return function (t) {
            var n, a, o, s;
            switch (
              (t(
                (function (e) {
                  return { type: be, spectateType: e };
                })(e)
              ),
              e)
            ) {
              case "CENTER":
                null === (n = window.GameAPI) ||
                  void 0 === n ||
                  n.spectateCenter();
                break;
              case "FREE":
                null === (a = window.GameAPI) ||
                  void 0 === a ||
                  a.spectateFree();
                break;
              case "TARGET":
                null === (o = window.GameAPI) ||
                  void 0 === o ||
                  o.spectateTarget();
                break;
              case "TOP_ONE":
                null === (s = window.GameAPI) ||
                  void 0 === s ||
                  s.spectateTopOne();
            }
          };
        },
        Xe = n(12),
        qe = n(69),
        Ze = n.n(qe),
        Je = n(7),
        Qe = n.n(Je),
        $e = n(16),
        et = n(1),
        tt = {
          settings: {
            game: {
              cells: {
                mass: !0,
                myMass: !0,
                nicks: !0,
                myNick: !0,
                autoHideMassAndNicks: !0,
                shortMass: !1,
                massUpdateDelay: 1,
                skinsType: "Custom",
                ringsType: "Disabled",
                ringsSpinning: !0,
                soakSpeed: 2,
                fadeSpeed: 40,
                oneColored: !1,
                shadow: "Only me",
                soakToEaten: !0,
                nicksScale: 0.85,
                massScale: 0.625,
              },
              effects: {
                cellRemoveAnimation: "Yue",
                cellRemoveAnimationForHiddenSpectator: !1,
                spawnAnimation: "Acimazis",
                wtfRgbMode: !1,
              },
              gameplay: {
                animationSpeed: 150,
                zoomSpeed: 8,
                cameraSpeed: 19,
                cameraStyle: "Default",
                spectatorMode: "Top one",
                viewport: "Disabled",
              },
              minimap: {
                enabled: !0,
                viewport: "All",
                ghostCells: !0,
                realPlayersCells: !1,
                mass: !1,
                nicks: !0,
                playerPosition: !0,
              },
              multibox: {
                enabled: !1,
                ring: !0,
                changeRingColor: !0,
                changeCellColor: !1,
                hideOwnSkins: !0,
                staticColor: !0,
                smoothSwitch: !0,
              },
              performance: {
                renderMode: "GPU (Pixi)",
                antialiasing: !1,
                culling: !1,
                foodPerformanceMode: !1,
                glowFilterShaderType: "GPU-1",
                fpsLockType: "Screen-hz",
              },
            },
            hotkeys: {
              keyboard: {
                feed: "E",
                macroFeed: "W",
                split: "Space",
                doubleSplit: "",
                tripleSplit: "",
                splitSixteen: "",
                quickRespawn: "Backquote",
                pauseCell: "P",
                toggleCellHelpers: "",
                toggleCellSkins: "",
                toggleCellRings: "",
                switchTabs: "Tab",
                toggleFoodRender: "F",
                toggleSpectatorMode: "",
                toggleHuds: "",
              },
              mouse: {
                left: "[NOT SET]",
                right: "[NOT SET]",
                middle: "[NOT SET]",
              },
              commands: [
                { key: "Digit1", message: "Feed me!" },
                { key: "Digit2", message: "Split into me!" },
                { key: "Digit3", message: "Need backup!" },
                { key: "Digit4", message: "Need a teammate" },
                { key: "Digit5", message: "Tank the virus!" },
                { key: "Digit6", message: "Eat the virus!" },
                { key: "Digit7", message: "Fake tricksplit!" },
                { key: "ALT+Digit1", message: "Fuck!" },
                { key: "ALT+Digit2", message: "Shit!" },
                { key: "ArrowLeft", message: "Left!" },
                { key: "ArrowRight", message: "Right!" },
                { key: "ArrowDown", message: "Bottom!" },
                { key: "ArrowUp", message: "Up!" },
                { key: "", message: "" },
                { key: "", message: "" },
                { key: "", message: "" },
                { key: "", message: "" },
                { key: "", message: "" },
                { key: "", message: "" },
                { key: "", message: "" },
              ],
            },
            theming: {
              cells: {
                oneColoredColor: { red: 240, green: 240, blue: 240 },
                oneColoredStatsColor: { red: 32, green: 32, blue: 32 },
                shadowColor: { red: 255, green: 255, blue: 255 },
                myShadowColor: { red: 255, green: 255, blue: 255 },
                shadowDistance: 10,
                shadowStrength: 2,
                myShadowStrength: 3,
                myShadowDistance: 50,
                adaptiveShadow: !0,
                transparency: 1,
                colorLighten: 80,
              },
              food: {
                enabled: !0,
                firstTabEnabled: !0,
                secondTabEnabled: !0,
                topOneTabEnabled: !1,
                size: 10,
                color: { red: 255, green: 255, blue: 255 },
                glow: !0,
                glowColor: { red: 125, green: 115, blue: 255 },
                glowDistance: 50,
                glowStrength: 10,
                crisp: !0,
              },
              map: {
                borderType: "Common",
                borderRoundness: 80,
                borderWidth: 20,
                borderColor: { red: 255, green: 255, blue: 255 },
                borderGlow: !0,
                borderGlowColor: { red: 190, green: 50, blue: 255 },
                borderGlowDistance: 250,
                borderGlowStrength: 10,
                backgroundTint: { red: 210, green: 55, blue: 210 },
                backgroundImage: !0,
                backgroundImageUrl: "https://i.imgur.com/jhqCkiV.jpg",
                backgroundImageLiveEffectStrength: "Disabled",
                globalBackgroundImage: !0,
                globalBackgroundImageUrl: "https://i.imgur.com/zjKAsyK.png",
                globalBackgroundImageTint: { red: 120, green: 45, blue: 255 },
                globalBackgroundImageLiveEffectStrength: "Disabled",
              },
              minimap: {
                backgroundColor: { red: 16, green: 16, blue: 16, alpha: 0.75 },
                size: 240,
                myViewportColor: { red: 66, green: 175, blue: 255, alpha: 0.5 },
                topOneViewportColor: {
                  red: 100,
                  green: 190,
                  blue: 255,
                  alpha: 0.5,
                },
                playerSize: 10,
                playerColor: { red: 255, green: 255, blue: 255 },
                ghostCellsColor: { red: 157, green: 217, blue: 255 },
              },
              multibox: {
                ringStyle: "Line",
                linedRingSize: 80,
                initialRingColor: { red: 255, green: 255, blue: 255 },
                focusedRingColor: { red: 60, green: 80, blue: 170 },
                initialStaticCellColor: { red: 255, green: 255, blue: 255 },
                focusedStaticCellColor: { red: 255, green: 255, blue: 255 },
              },
              viruses: {
                color: { red: 85, green: 190, blue: 255 },
                borderWidth: 20,
                borderColor: { red: 255, green: 255, blue: 255 },
                glow: !0,
                glowColor: { red: 85, green: 190, blue: 255 },
                glowDistance: 150,
                glowStrength: 8,
                transparency: 0.2,
                massType: "Fill circle",
                fillCircleColor: { red: 255, green: 255, blue: 255 },
              },
            },
            UI: {
              leaderboard: {
                shown: !0,
                displayAmount: 10,
                displayPosition: !0,
                scale: 1,
                showMass: !0,
                backdropBlur: !1,
                backgroundColor: { red: 24, green: 24, blue: 24, alpha: 0.5 },
                meColor: { red: 60, green: 80, blue: 170 },
                shortMass: !1,
              },
              stats: {
                shown: !0,
                position: "BOTTOM CENTER",
                fps: !0,
                loss: !0,
                backgroundColor: { red: 24, green: 24, blue: 24, alpha: 0.5 },
                backdropBlur: !1,
                frametime: !0,
                tabs: !0,
                firstTabStatus: "DISCONNECTED",
                secondTabStatus: "DISCONNECTED",
                spectatorTabStatus: "DISCONNECTED",
              },
              topTeam: {
                shown: !0,
                displayAmount: 5,
                totalMass: !0,
                shortMass: !0,
                displayPlayerMass: !0,
                totalPlayers: !0,
                backgroundColor: { red: 24, green: 24, blue: 24, alpha: 0.5 },
                backdropBlur: !1,
              },
              spectate: {
                shown: !0,
                backdropBlur: !1,
                backgroundColor: { red: 19, green: 19, blue: 19 },
              },
              chat: {
                enabled: !0,
                height: 300,
                chatType: "CHATBOX",
                backgroundColor: { red: 24, green: 24, blue: 24, alpha: 0.5 },
                fontColor: { red: 255, green: 255, blue: 255 },
                commandMessageBackgroundColor: {
                  red: 210,
                  green: 110,
                  blue: 110,
                  alpha: 0.75,
                },
                commandMessageFontColor: { red: 255, green: 255, blue: 255 },
                gameMessageBackgroundColor: {
                  red: 32,
                  green: 32,
                  blue: 32,
                  alpha: 0.75,
                },
                gameMessageFontColor: { red: 240, green: 240, blue: 240 },
              },
            },
          },
          game: {
            servers: [
              { location: "China", playersAmount: 0 },
              { location: "East Asia", playersAmount: 0 },
              { location: "Europe", playersAmount: 4891 },
              { location: "North America", playersAmount: 0 },
              { location: "Oceania", playersAmount: 0 },
              { location: "Russia", playersAmount: 0 },
              { location: "South America", playersAmount: 9724 },
              { location: "Turkey", playersAmount: 0 },
            ],
            currentServerIndex: 2,
            mode: ":party",
            tag: "",
            token: "",
            gameServerToken: "",
            selectedGameTokenType: "PARTY",
          },
          profiles: {
            leftProfiles: [
              { nick: "Profile #1", skinUrl: "", tag: "" },
              { nick: "Profile #2", skinUrl: "", tag: "" },
              { nick: "Profile #3", skinUrl: "", tag: "" },
              { nick: "Profile #4", skinUrl: "", tag: "" },
              { nick: "Profile #5", skinUrl: "", tag: "" },
              { nick: "Profile #6", skinUrl: "", tag: "" },
              { nick: "Profile #7", skinUrl: "", tag: "" },
              { nick: "Profile #8", skinUrl: "", tag: "" },
              { nick: "Profile #9", skinUrl: "", tag: "" },
              { nick: "Profile #10", skinUrl: "", tag: "" },
            ],
            rightProfiles: [
              { nick: "Profile #11", skinUrl: "", tag: "" },
              { nick: "Profile #12", skinUrl: "", tag: "" },
              { nick: "Profile #13", skinUrl: "", tag: "" },
              { nick: "Profile #14", skinUrl: "", tag: "" },
              { nick: "Profile #15", skinUrl: "", tag: "" },
              { nick: "Profile #16", skinUrl: "", tag: "" },
              { nick: "Profile #17", skinUrl: "", tag: "" },
              { nick: "Profile #18", skinUrl: "", tag: "" },
              { nick: "Profile #19", skinUrl: "", tag: "" },
              { nick: "Profile #20", skinUrl: "", tag: "" },
            ],
            leftSelectedIndex: 0,
            rightSelectedIndex: 0,
            leftProfileLoginType: "FACEBOOK",
            rightProfileLoginType: "GOOGLE",
            googleLoggedIn: !1,
            facebookLoggedIn: !1,
          },
        },
        nt = new ((function () {
          function e() {
            Object(O.a)(this, e), (this.name = "AGARIX:DATA");
          }
          return (
            Object(S.a)(e, [
              {
                key: "swap",
                value: function (e) {
                  var t = e.slice(0, e.length / 2);
                  return e.slice(e.length / 2) + t;
                },
              },
              {
                key: "get",
                value: function () {
                  var e = localStorage.getItem(this.name);
                  if (e)
                    try {
                      var t = this.swap(e);
                      return JSON.parse(atob(t));
                    } catch (n) {
                      return (function (e) {
                        return (
                          e.settings.UI.stats.tabs ||
                            (e.settings.UI.stats.tabs =
                              tt.settings.UI.stats.tabs),
                          e.settings.hotkeys.mouse ||
                            (e.settings.hotkeys.mouse = Object(et.a)(
                              {},
                              tt.settings.hotkeys.mouse
                            )),
                          e.settings.hotkeys.commands ||
                            (e.settings.hotkeys.commands = Object($e.a)(
                              tt.settings.hotkeys.commands
                            )),
                          e.settings.game.cells.soakToEaten ||
                            (e.settings.game.cells.soakToEaten =
                              tt.settings.game.cells.soakToEaten),
                          e.settings.game.cells.massScale ||
                            (e.settings.game.cells.massScale =
                              tt.settings.game.cells.massScale),
                          e.settings.game.cells.nicksScale ||
                            (e.settings.game.cells.nicksScale =
                              tt.settings.game.cells.nicksScale),
                          e
                        );
                      })(JSON.parse(e));
                    }
                  return tt;
                },
              },
              {
                key: "save",
                value: function (e) {
                  var t = e.profiles,
                    n = e.game,
                    a = e.settings,
                    o = JSON.stringify({ profiles: t, game: n, settings: a });
                  localStorage.setItem(this.name, o);
                },
              },
              {
                key: "reset",
                value: function () {
                  localStorage.removeItem(this.name);
                },
              },
              {
                key: "init",
                value: function (e) {
                  if (!localStorage.getItem(this.name))
                    return (
                      console.log("Front-end: first launch"), void this.save(e)
                    );
                },
              },
            ]),
            e
          );
        })())(),
        at = n(0),
        ot = function () {
          var e,
            t = Object(a.useState)(!1),
            n = Object(Xe.a)(t, 2),
            o = n[0],
            s = n[1];
          return Object(at.jsx)("div", {
            className: Qe()(
              ((e = {}),
              Object(r.a)(e, Ze.a.resetOutWrapper, !0),
              Object(r.a)(e, Ze.a.resetClicked, o),
              e)
            ),
            children: o
              ? Object(at.jsxs)(at.Fragment, {
                  children: [
                    Object(at.jsx)("span", { children: "Reset?" }),
                    Object(at.jsx)("button", {
                      onClick: function () {
                        nt.reset(), window.location.reload();
                      },
                      children: Object(at.jsx)(h.a, { icon: m.g }),
                    }),
                    Object(at.jsx)("button", {
                      onClick: function () {
                        return s(!1);
                      },
                      children: Object(at.jsx)(h.a, { icon: m.G }),
                    }),
                  ],
                })
              : Object(at.jsxs)("button", {
                  onClick: function () {
                    return s(!0);
                  },
                  className: Ze.a.reset,
                  children: [Object(at.jsx)(h.a, { icon: m.C }), " Reset"],
                }),
          });
        },
        st = Object(j.b)(null, function (e) {
          return {
            setSettingsShown: function (t) {
              return e(We(t));
            },
          };
        })(function (e) {
          var t = e.setSettingsShown;
          return Object(at.jsxs)("section", {
            className: f.a.wrap,
            children: [
              Object(at.jsxs)("button", {
                onClick: function () {
                  return t(!1);
                },
                className: f.a.save,
                children: [Object(at.jsx)(h.a, { icon: m.g }), " Save"],
              }),
              Object(at.jsxs)("button", {
                children: [Object(at.jsx)(h.a, { icon: m.d }), " Import"],
              }),
              Object(at.jsxs)("button", {
                children: [Object(at.jsx)(h.a, { icon: m.a }), " Export"],
              }),
              Object(at.jsx)(ot, {}),
            ],
          });
        }),
        it = Object(j.b)(
          function (e) {
            return { settingsType: e.UI.settingsType };
          },
          function (e) {
            return {
              setSettingsType: function (t) {
                return e(
                  (function (e) {
                    return function (t) {
                      var n, a;
                      t(Oe(e)),
                        "THEMING" === e || "UI" === e
                          ? null === (n = window.GameAPI) ||
                            void 0 === n ||
                            n.setSceneBlurred(!1, !1)
                          : null === (a = window.GameAPI) ||
                            void 0 === a ||
                            a.setSceneBlurred(!0, !1);
                    };
                  })(t)
                );
              },
            };
          }
        )(function (e) {
          var t = e.settingsType,
            n = e.setSettingsType;
          return Object(at.jsxs)("header", {
            className: g.a.categories,
            children: [
              Object(at.jsxs)("section", {
                children: [
                  Object(at.jsxs)("button", {
                    className: Qe()(
                      Object(r.a)({}, g.a.selected, "GAME" === t)
                    ),
                    onClick: function () {
                      return n("GAME");
                    },
                    children: [Object(at.jsx)(h.a, { icon: m.r }), " Game"],
                  }),
                  Object(at.jsxs)("button", {
                    className: Qe()(
                      Object(r.a)({}, g.a.selected, "THEMING" === t)
                    ),
                    onClick: function () {
                      return n("THEMING");
                    },
                    children: [Object(at.jsx)(h.a, { icon: m.z }), " Theming"],
                  }),
                  Object(at.jsxs)("button", {
                    className: Qe()(
                      Object(r.a)({}, g.a.selected, "HOTKEYS" === t)
                    ),
                    onClick: function () {
                      return n("HOTKEYS");
                    },
                    children: [Object(at.jsx)(h.a, { icon: m.s }), " Hotkeys"],
                  }),
                  Object(at.jsxs)("button", {
                    className: Qe()(Object(r.a)({}, g.a.selected, "UI" === t)),
                    onClick: function () {
                      return n("UI");
                    },
                    children: [
                      Object(at.jsx)(h.a, { icon: m.A }),
                      " Interface",
                    ],
                  }),
                ],
              }),
              Object(at.jsx)(st, {}),
            ],
          });
        }),
        rt = n(35),
        ct = n.n(rt),
        lt = n(132),
        ut = n.n(lt),
        dt = function (e) {
          var t = e.children;
          return Object(at.jsx)("div", { className: ut.a.wrap, children: t });
        },
        bt = n(133),
        gt = n.n(bt),
        pt = function (e) {
          var t = e.children;
          return Object(at.jsx)("div", { className: gt.a.wrap, children: t });
        },
        ft = n(21),
        mt = n.n(ft),
        ht = function (e) {
          var t,
            n = e.text,
            a = e.enabled,
            o = e.onChange,
            s = e.hint,
            i = e.disabled,
            c = e.main;
          return Object(at.jsxs)("div", {
            className: Qe()(
              ((t = {}),
              Object(r.a)(t, mt.a.wrap, !0),
              Object(r.a)(t, mt.a.disabled, i),
              Object(r.a)(t, mt.a.main, c),
              t)
            ),
            children: [
              Object(at.jsxs)("div", {
                className: mt.a.text,
                children: [
                  n,
                  s &&
                    Object(at.jsx)("span", {
                      className: mt.a.hint,
                      children: s,
                    }),
                ],
              }),
              Object(at.jsx)("label", {
                className: mt.a.label,
                children: Object(at.jsxs)("div", {
                  className: mt.a.toggle,
                  children: [
                    Object(at.jsx)("input", {
                      className: mt.a.toggleState,
                      type: "checkbox",
                      name: "check",
                      value: "check",
                      checked: a,
                      onChange: function (e) {
                        return o(e.target.checked);
                      },
                    }),
                    Object(at.jsx)("div", { className: mt.a.indicator }),
                  ],
                }),
              }),
            ],
          });
        },
        jt = n(26),
        Ot = n.n(jt),
        St = function (e) {
          var t,
            n = e.items,
            a = e.selectedItem,
            o = e.onChange,
            s = e.text,
            i = e.hint,
            c = e.disabled,
            l = n.indexOf(a);
          return Object(at.jsxs)("div", {
            className: Qe()(
              ((t = {}),
              Object(r.a)(t, Ot.a.wrap, !0),
              Object(r.a)(t, Ot.a.disabled, c),
              t)
            ),
            children: [
              Object(at.jsxs)("div", {
                className: Ot.a.text,
                children: [
                  s,
                  i &&
                    Object(at.jsx)("span", {
                      className: Ot.a.hint,
                      children: i,
                    }),
                ],
              }),
              Object(at.jsxs)("div", {
                className: Ot.a.right,
                children: [
                  Object(at.jsx)("button", {
                    onClick: function () {
                      0 !== l && o(n[l - 1]);
                    },
                    children: Object(at.jsx)(h.a, { icon: m.b }),
                  }),
                  Object(at.jsx)("div", {
                    className: Ot.a.valuesWrap,
                    children: Object(at.jsx)("div", {
                      className: Ot.a.values,
                      style: { marginLeft: -125 * l },
                      children: n.map(function (e, t) {
                        return Object(at.jsx)(
                          "div",
                          {
                            style: { left: 125 * t },
                            className: Ot.a.value,
                            children: e,
                          },
                          e
                        );
                      }),
                    }),
                  }),
                  Object(at.jsx)("button", {
                    onClick: function () {
                      l !== n.length - 1 && o(n[l + 1]);
                    },
                    children: Object(at.jsx)(h.a, { icon: m.c }),
                  }),
                ],
              }),
            ],
          });
        },
        wt = (function () {
          function e() {
            Object(O.a)(this, e);
          }
          return (
            Object(S.a)(e, null, [
              {
                key: "setRenderMode",
                value: function (e) {
                  window.GameSettings.all.settings.game.performance.renderMode =
                    e;
                },
              },
              {
                key: "setAntialiasing",
                value: function (e) {
                  window.GameSettings.all.settings.game.performance.antialiasing =
                    e;
                },
              },
              {
                key: "setCulling",
                value: function (e) {
                  window.GameSettings.all.settings.game.performance.culling = e;
                },
              },
              {
                key: "setFoodPerformanceMode",
                value: function (e) {
                  window.GameSettings.all.settings.game.performance.foodPerformanceMode =
                    e;
                },
              },
              {
                key: "setGlowFilterShaderType",
                value: function (e) {
                  window.GameSettings.all.settings.game.performance.glowFilterShaderType =
                    e;
                },
              },
              {
                key: "setFpsLockType",
                value: function (e) {
                  window.GameSettings.all.settings.game.performance.fpsLockType =
                    e;
                },
              },
            ]),
            e
          );
        })(),
        yt = "SET_RENDER_MODE",
        _t = "SET_ANTIALIASING",
        Ct = "SET_CULLING",
        Tt = "SET_FOOD_PERFORMANCE_MODE",
        kt = "SET_GLOW_FILTER_SHADER_TYPE",
        vt = "SET_FPS_LOCK_TYPE",
        xt = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: yt, renderMode: e };
              })(e)
            ),
              wt.setRenderMode(e);
          };
        },
        Et = function (e) {
          return function (t) {
            t({ type: _t, antialiasing: e }), wt.setAntialiasing(e);
          };
        },
        Mt = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Ct, culling: e };
              })(e)
            );
          };
        },
        At = function (e) {
          return function (t) {
            t({ type: Tt, foodPerformanceMode: e }),
              wt.setFoodPerformanceMode(e);
          };
        },
        It = function (e) {
          return function (t) {
            t({ type: kt, glowFilterShaderType: e }),
              wt.setGlowFilterShaderType(e);
          };
        },
        Gt = function (e) {
          return function (t) {
            t({ type: vt, fpsLockType: e }), wt.setFpsLockType(e);
          };
        },
        Nt = Object(j.b)(
          function (e) {
            var t = e.settings;
            return Object(et.a)({}, t.game.performance);
          },
          function (e) {
            return {
              setRenderMode: function (t) {
                return e(xt(t));
              },
              setAntialiasing: function (t) {
                return e(Et(t));
              },
              setCulling: function (t) {
                return e(Mt(t));
              },
              setFoodPerformanceMode: function (t) {
                return e(At(t));
              },
              setGlowFilterShaderType: function (t) {
                return e(It(t));
              },
              setFpsLockType: function (t) {
                return e(Gt(t));
              },
            };
          }
        )(function (e) {
          var t = e.renderMode,
            n = e.antialiasing,
            a = e.culling,
            o = e.foodPerformanceMode,
            s = e.glowFilterShaderType,
            i = e.fpsLockType,
            r = e.setRenderMode,
            c = e.setAntialiasing,
            l = e.setCulling,
            u = e.setFoodPerformanceMode,
            d = e.setGlowFilterShaderType,
            b = e.setFpsLockType;
          return Object(at.jsxs)(at.Fragment, {
            children: [
              Object(at.jsx)(St, {
                text: "Render mode",
                hint: "use Default (CPU) if you have very low-end PC",
                items: ["Default (CPU)", "GPU (Pixi)"],
                selectedItem: t,
                onChange: r,
                disabled: !0,
              }),
              Object(at.jsx)(ht, {
                text: "Antialiasing",
                hint: "consumes more GPU power but makes everything smooth",
                enabled: n,
                onChange: c,
                disabled: "Default (CPU)" === t,
              }),
              Object(at.jsx)(ht, {
                text: "Culling",
                hint: "consumes less GPU power but may cause high CPU load",
                enabled: a,
                onChange: l,
                disabled: "Default (CPU)" === t,
              }),
              Object(at.jsx)(ht, {
                text: "Food performance mode",
                hint: "consumes less GPU/CPU power but disables food animation",
                enabled: o,
                onChange: u,
                disabled: "Default (CPU)" === t,
              }),
              Object(at.jsx)(St, {
                text: "Glow filer shader",
                items: ["Canvas", "GPU-1"],
                selectedItem: s,
                onChange: d,
                disabled: "Default (CPU)" === t,
              }),
              Object(at.jsx)(St, {
                text: "FPS lock",
                items: ["30", "60", "120", "144", "240", "Screen-hz"],
                selectedItem: i,
                onChange: b,
                disabled: "Default (CPU)" === t,
              }),
            ],
          });
        }),
        Rt = n(99),
        Pt = n.n(Rt),
        Lt = function (e) {
          var t,
            n = e.shown,
            a = e.children;
          return Object(at.jsx)("div", {
            className: Qe()(
              ((t = {}),
              Object(r.a)(t, Pt.a.wrap, !0),
              Object(r.a)(t, Pt.a.hidden, !n),
              t)
            ),
            children: a,
          });
        },
        Bt = "set value to 0 to disable effect",
        Ft = (function () {
          function e() {
            Object(O.a)(this, e);
          }
          return (
            Object(S.a)(e, null, [
              {
                key: "setShowMass",
                value: function (e) {
                  window.GameSettings.all.settings.game.cells.mass = e;
                },
              },
              {
                key: "setShowNicks",
                value: function (e) {
                  window.GameSettings.all.settings.game.cells.nicks = e;
                },
              },
              {
                key: "setShowMassMyCell",
                value: function (e) {
                  window.GameSettings.all.settings.game.cells.myMass = e;
                },
              },
              {
                key: "setShowNickMyCell",
                value: function (e) {
                  window.GameSettings.all.settings.game.cells.myNick = e;
                },
              },
              {
                key: "setAutoHideMassAndNicks",
                value: function (e) {
                  window.GameSettings.all.settings.game.cells.autoHideMassAndNicks =
                    e;
                },
              },
              {
                key: "setShortMass",
                value: function (e) {
                  window.GameSettings.all.settings.game.cells.shortMass = e;
                },
              },
              {
                key: "setMassUpdateDelay",
                value: function (e) {
                  window.GameSettings.all.settings.game.cells.massUpdateDelay =
                    e;
                },
              },
              {
                key: "setSkinsType",
                value: function (e) {
                  window.GameSettings.all.settings.game.cells.skinsType = e;
                },
              },
              {
                key: "setRingsType",
                value: function (e) {
                  window.GameSettings.all.settings.game.cells.ringsType = e;
                },
              },
              {
                key: "setRingsSpinning",
                value: function (e) {
                  window.GameSettings.all.settings.game.cells.ringsSpinning = e;
                },
              },
              {
                key: "setSoakSpeed",
                value: function (e) {
                  window.GameSettings.all.settings.game.cells.soakSpeed = e;
                },
              },
              {
                key: "setFadeSpeed",
                value: function (e) {
                  window.GameSettings.all.settings.game.cells.fadeSpeed = e;
                },
              },
              {
                key: "setOneColored",
                value: function (e) {
                  window.GameSettings.all.settings.game.cells.oneColored = e;
                },
              },
              {
                key: "setShadow",
                value: function (e) {
                  window.GameSettings.all.settings.game.cells.shadow = e;
                },
              },
              {
                key: "setSoakToEaten",
                value: function (e) {
                  window.GameSettings.all.settings.game.cells.soakToEaten = e;
                },
              },
              {
                key: "setNicksScale",
                value: function (e) {
                  window.GameSettings.all.settings.game.cells.nicksScale = e;
                },
              },
              {
                key: "setMassScale",
                value: function (e) {
                  window.GameSettings.all.settings.game.cells.massScale = e;
                },
              },
            ]),
            e
          );
        })(),
        Dt = "SET_SHOW_MASS",
        Ut = "SET_SHOW_NICKS",
        Kt = "SET_SHOW_MASS_MY_CELL",
        Ht = "SET_SHOW_NICK_MY_CELL",
        Wt = "SET_AUTO_HIDE_MASS_AND_NICKS",
        Vt = "SET_SHORT_MASS",
        zt = "SET_MASS_UPDATE_DELAY",
        Yt = "SET_SKINS_TYPE",
        Xt = "SET_RINGS_TYPE",
        qt = "SET_RINGS_SPINNING",
        Zt = "SET_SOAK_SPEED",
        Jt = "SET_FADE_SPEED",
        Qt = "SET_ONE_COLORED",
        $t = "SET_SHADOW",
        en = "SET_SOAK_TO_EATEN",
        tn = "SET_NICKS_SCALE",
        nn = "SET_MASS_SCALE",
        an = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Dt, mass: e };
              })(e)
            ),
              Ft.setShowMass(e);
          };
        },
        on = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Ut, nicks: e };
              })(e)
            ),
              Ft.setShowNicks(e);
          };
        },
        sn = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Kt, myMass: e };
              })(e)
            ),
              Ft.setShowMassMyCell(e);
          };
        },
        rn = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Ht, myNick: e };
              })(e)
            ),
              Ft.setShowNickMyCell(e);
          };
        },
        cn = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Wt, autoHideMassAndNicks: e };
              })(e)
            ),
              Ft.setAutoHideMassAndNicks(e);
          };
        },
        ln = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Vt, shortMass: e };
              })(e)
            ),
              Ft.setShortMass(e);
          };
        },
        un = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: zt, massUpdateDelay: e };
              })(e)
            ),
              Ft.setMassUpdateDelay(e);
          };
        },
        dn = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Yt, skinsType: e };
              })(e)
            ),
              Ft.setSkinsType(e);
          };
        },
        bn = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Xt, ringsType: e };
              })(e)
            ),
              Ft.setRingsType(e);
          };
        },
        gn = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: qt, ringsSpinning: e };
              })(e)
            ),
              Ft.setRingsSpinning(e);
          };
        },
        pn = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Zt, soakSpeed: e };
              })(e)
            ),
              Ft.setSoakSpeed(e);
          };
        },
        fn = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Jt, fadeSpeed: e };
              })(e)
            ),
              Ft.setFadeSpeed(e);
          };
        },
        mn = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Qt, oneColored: e };
              })(e)
            ),
              Ft.setOneColored(e);
          };
        },
        hn = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: $t, shadow: e };
              })(e)
            ),
              Ft.setShadow(e);
          };
        },
        jn = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: en, soakToEaten: e };
              })(e)
            ),
              Ft.setSoakToEaten(e);
          };
        },
        On = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: tn, nicksScale: e };
              })(e)
            ),
              Ft.setNicksScale(e);
          };
        },
        Sn = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: nn, massScale: e };
              })(e)
            ),
              Ft.setMassScale(e);
          };
        },
        wn = n(27),
        yn = n.n(wn),
        _n = function (e) {
          var t,
            n = e.text,
            a = e.value,
            o = e.hint,
            s = e.disabled,
            i = e.onChange,
            c = e.from,
            l = e.to,
            u = c % 1 === 0 && l % 1 === 0;
          return Object(at.jsxs)("div", {
            className: Qe()(
              ((t = {}),
              Object(r.a)(t, yn.a.wrap, !0),
              Object(r.a)(t, yn.a.disabled, s),
              t)
            ),
            children: [
              Object(at.jsxs)("div", {
                className: yn.a.text,
                children: [
                  n,
                  o &&
                    Object(at.jsx)("span", {
                      className: yn.a.hint,
                      children: o,
                    }),
                ],
              }),
              Object(at.jsxs)("div", {
                className: yn.a.right,
                children: [
                  Object(at.jsx)("div", { className: yn.a.value, children: a }),
                  Object(at.jsx)("div", {
                    className: yn.a.rangeWrap,
                    children: Object(at.jsx)("input", {
                      className: yn.a.input,
                      type: "range",
                      min: c,
                      max: l,
                      value: a,
                      onChange: function (e) {
                        return i(+e.target.value);
                      },
                      step: u ? 1 : 0.01,
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        Cn = Object(j.b)(
          function (e) {
            var t = e.settings;
            return Object(et.a)({}, t.game.cells);
          },
          function (e) {
            return {
              setShowMass: function (t) {
                return e(an(t));
              },
              setShowMassMyCell: function (t) {
                return e(sn(t));
              },
              setShowNicks: function (t) {
                return e(on(t));
              },
              setShowNickMyCell: function (t) {
                return e(rn(t));
              },
              setAutoHideMassAndNicks: function (t) {
                return e(cn(t));
              },
              setShortMass: function (t) {
                return e(ln(t));
              },
              setMassUpdateDelay: function (t) {
                return e(un(t));
              },
              setSkinsType: function (t) {
                return e(dn(t));
              },
              setRingsType: function (t) {
                return e(bn(t));
              },
              setRingsSpinning: function (t) {
                return e(gn(t));
              },
              setSoakSpeed: function (t) {
                return e(pn(t));
              },
              setFadeSpeed: function (t) {
                return e(fn(t));
              },
              setOneColored: function (t) {
                return e(mn(t));
              },
              setShadow: function (t) {
                return e(hn(t));
              },
              setSoakToEaten: function (t) {
                return e(jn(t));
              },
              setMassScale: function (t) {
                return e(Sn(t));
              },
              setNicksScale: function (t) {
                return e(On(t));
              },
            };
          }
        )(function (e) {
          var t = e.mass,
            n = e.myMass,
            a = e.nicks,
            o = e.myNick,
            s = e.autoHideMassAndNicks,
            i = e.shortMass,
            r = e.massUpdateDelay,
            c = e.skinsType,
            l = e.ringsType,
            u = e.ringsSpinning,
            d = e.soakSpeed,
            b = e.fadeSpeed,
            g = e.oneColored,
            p = e.shadow,
            f = e.soakToEaten,
            m = e.massScale,
            h = e.nicksScale,
            j = e.setShowMass,
            O = e.setShowNicks,
            S = e.setShowMassMyCell,
            w = e.setShowNickMyCell,
            y = e.setAutoHideMassAndNicks,
            _ = e.setShortMass,
            C = e.setMassUpdateDelay,
            T = e.setSkinsType,
            k = e.setRingsType,
            v = e.setRingsSpinning,
            x = e.setSoakSpeed,
            E = e.setFadeSpeed,
            M = e.setOneColored,
            A = e.setShadow,
            I = e.setSoakToEaten,
            G = e.setMassScale,
            N = e.setNicksScale;
          return Object(at.jsxs)(at.Fragment, {
            children: [
              Object(at.jsx)(ht, {
                text: "Show mass",
                enabled: t,
                onChange: j,
              }),
              Object(at.jsx)(ht, {
                text: "Show mass my cell",
                enabled: n,
                onChange: S,
              }),
              Object(at.jsx)(_n, {
                text: "Mass scale",
                from: 0.3,
                to: 1.5,
                value: m,
                onChange: G,
              }),
              Object(at.jsx)(ht, {
                text: "Show nicks",
                enabled: a,
                onChange: O,
              }),
              Object(at.jsx)(ht, {
                text: "Show nick my cell",
                enabled: o,
                onChange: w,
              }),
              Object(at.jsx)(_n, {
                text: "Nicks scale",
                from: 0.3,
                to: 1.5,
                value: h,
                onChange: N,
              }),
              Object(at.jsx)(ht, {
                text: "Auto-hide mass and nicks",
                hint: "enabling causes higher FPS",
                enabled: s,
                onChange: y,
              }),
              Object(at.jsx)(ht, {
                text: "Short mass (k)",
                enabled: i,
                onChange: _,
              }),
              Object(at.jsx)(_n, {
                text: "Mass update (refresh) delay",
                from: 1,
                to: 30,
                value: r,
                onChange: C,
              }),
              Object(at.jsx)(St, {
                text: "Skins",
                items: ["Disabled", "Custom", "Vanilla", "All"],
                selectedItem: c,
                onChange: T,
              }),
              Object(at.jsx)(St, {
                text: "Rings",
                items: ["Disabled", "2CL", "Yue", "Acimazis"],
                selectedItem: l,
                onChange: k,
              }),
              Object(at.jsx)(ht, {
                text: "Spinning rings",
                enabled: u,
                onChange: v,
                disabled: "Disabled" === l,
              }),
              Object(at.jsx)(ht, {
                text: "Animate (move) eaten cell to the center of eater (HSLO style)",
                hint: "speed depends on animation speed",
                enabled: f,
                onChange: I,
              }),
              Object(at.jsx)(_n, {
                text: "Soak animation speed",
                hint: Bt,
                from: 0,
                to: 215,
                value: d,
                onChange: x,
              }),
              Object(at.jsx)(_n, {
                text: "Fade animation speed",
                hint: Bt,
                from: 0,
                to: 215,
                value: b,
                onChange: E,
              }),
              Object(at.jsx)(ht, {
                text: "One-colored",
                enabled: g,
                onChange: M,
              }),
              Object(at.jsx)(St, {
                text: "Shadow",
                items: ["Disabled", "Only me", "All"],
                selectedItem: p,
                onChange: A,
              }),
            ],
          });
        }),
        Tn = (function () {
          function e() {
            Object(O.a)(this, e);
          }
          return (
            Object(S.a)(e, null, [
              {
                key: "setAnimationSpeed",
                value: function (e) {
                  window.GameSettings.all.settings.game.gameplay.animationSpeed =
                    e;
                },
              },
              {
                key: "zetZoomSpeed",
                value: function (e) {
                  window.GameSettings.all.settings.game.gameplay.zoomSpeed = e;
                },
              },
              {
                key: "setCameraSpeed",
                value: function (e) {
                  window.GameSettings.all.settings.game.gameplay.cameraSpeed =
                    e;
                },
              },
              {
                key: "setCameraStyle",
                value: function (e) {
                  window.GameSettings.all.settings.game.gameplay.cameraStyle =
                    e;
                },
              },
              {
                key: "setSpectatorMode",
                value: function (e) {
                  var t, n, a, o;
                  switch (
                    ((window.GameSettings.all.settings.game.gameplay.spectatorMode =
                      e),
                    e)
                  ) {
                    case "Disabled":
                      null === (t = window.GameAPI) ||
                        void 0 === t ||
                        t.setTopOneView(!1),
                        null === (n = window.GameAPI) ||
                          void 0 === n ||
                          n.setFullMapView(!1);
                      break;
                    case "Top one":
                      null === (a = window.GameAPI) ||
                        void 0 === a ||
                        a.setTopOneView(!0);
                      break;
                    case "Full map":
                      null === (o = window.GameAPI) ||
                        void 0 === o ||
                        o.setFullMapView(!0);
                  }
                },
              },
              {
                key: "setViewport",
                value: function (e) {
                  window.GameSettings.all.settings.game.gameplay.viewport = e;
                },
              },
            ]),
            e
          );
        })(),
        kn = "SET_ANIMATION_SPEED",
        vn = "SET_ZOOM_SPEED",
        xn = "SET_CAMERA_SPEED",
        En = "SET_CAMERA_STYLE",
        Mn = "SET_SPECTATOR_MODE",
        An = "SET_VIEWPORT",
        In = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: kn, animationSpeed: e };
              })(e)
            ),
              Tn.setAnimationSpeed(e);
          };
        },
        Gn = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: vn, zoomSpeed: e };
              })(e)
            ),
              Tn.zetZoomSpeed(e);
          };
        },
        Nn = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: xn, cameraSpeed: e };
              })(e)
            ),
              Tn.setCameraSpeed(e);
          };
        },
        Rn = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: En, cameraStyle: e };
              })(e)
            ),
              Tn.setCameraStyle(e);
          };
        },
        Pn = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Mn, spectatorMode: e };
              })(e)
            ),
              t(Ye("CENTER")),
              Tn.setSpectatorMode(e);
          };
        },
        Ln = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: An, viewport: e };
              })(e)
            ),
              Tn.setViewport(e);
          };
        },
        Bn = Object(j.b)(
          function (e) {
            var t = e.settings;
            return Object(et.a)({}, t.game.gameplay);
          },
          function (e) {
            return {
              setAnimationSpeed: function (t) {
                return e(In(t));
              },
              setZoomSpeed: function (t) {
                return e(Gn(t));
              },
              setCameraSpeed: function (t) {
                return e(Nn(t));
              },
              setCameraStyle: function (t) {
                return e(Rn(t));
              },
              setSpectatorMode: function (t) {
                return e(Pn(t));
              },
              setViewport: function (t) {
                return e(Ln(t));
              },
            };
          }
        )(function (e) {
          var t = e.animationSpeed,
            n = e.zoomSpeed,
            a = e.cameraSpeed,
            o = e.cameraStyle,
            s = e.spectatorMode,
            i = e.viewport,
            r = e.setAnimationSpeed,
            c = e.setZoomSpeed,
            l = e.setCameraSpeed,
            u = e.setCameraStyle,
            d = e.setSpectatorMode,
            b = e.setViewport;
          return Object(at.jsxs)(at.Fragment, {
            children: [
              Object(at.jsx)(_n, {
                text: "Animation speed",
                value: t,
                from: 25,
                to: 300,
                onChange: r,
              }),
              Object(at.jsx)(_n, {
                text: "Zoom speed",
                value: n,
                from: 1,
                to: 25,
                onChange: c,
              }),
              Object(at.jsx)(_n, {
                text: "Camera speed",
                from: 1,
                to: 21,
                value: a,
                onChange: l,
              }),
              Object(at.jsx)(St, {
                text: "Camera style",
                items: ["Default", "Smooth"],
                selectedItem: o,
                onChange: u,
              }),
              Object(at.jsx)(St, {
                text: "Spectator mode",
                items: ["Disabled", "Top one", "Full map"],
                selectedItem: s,
                onChange: d,
                hint: "enabling may cause performance issues",
              }),
              Object(at.jsx)(St, {
                text: "Show viewport",
                items: [
                  "Disabled",
                  "Main tab",
                  "Second tab",
                  "Top one tab",
                  "All",
                ],
                selectedItem: i,
                onChange: b,
                disabled: !0,
              }),
            ],
          });
        }),
        Fn = "MULTIBOX_ENABLED",
        Dn = "MULTIBOX_RING",
        Un = "MULTIBOX_CHANGE_RING_COLOR",
        Kn = "MULTIBOX_CHANGE_CELL_COLOR",
        Hn = "MULTIBOX_HIDE_OWN_SKINS",
        Wn = "MULTIBOX_STATIC_COLOR",
        Vn = "MULTIBOX_SMOOTH_SWITCH",
        zn = (function () {
          function e() {
            Object(O.a)(this, e);
          }
          return (
            Object(S.a)(e, null, [
              {
                key: "setMultiboxEnabled",
                value: function (e) {
                  var t;
                  (window.GameSettings.all.settings.game.multibox.enabled = e),
                    null === (t = window.GameAPI) ||
                      void 0 === t ||
                      t.setMultiboxEnabled(e);
                },
              },
              {
                key: "setMultiboxRing",
                value: function (e) {
                  window.GameSettings.all.settings.game.multibox.ring = e;
                },
              },
              {
                key: "setMultiboxChangeRingColor",
                value: function (e) {
                  window.GameSettings.all.settings.game.multibox.changeRingColor =
                    e;
                },
              },
              {
                key: "setMultiboxChangeCellColor",
                value: function (e) {
                  window.GameSettings.all.settings.game.multibox.changeCellColor =
                    e;
                },
              },
              {
                key: "setMultiboxHideOwnSkins",
                value: function (e) {
                  window.GameSettings.all.settings.game.multibox.hideOwnSkins =
                    e;
                },
              },
              {
                key: "setMultiboxStaticColor",
                value: function (e) {
                  window.GameSettings.all.settings.game.multibox.staticColor =
                    e;
                },
              },
              {
                key: "setMultiboxSmoothSwitch",
                value: function (e) {
                  window.GameSettings.all.settings.game.multibox.smoothSwitch =
                    e;
                },
              },
            ]),
            e
          );
        })(),
        Yn = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Fn, enabled: e };
              })(e)
            ),
              zn.setMultiboxEnabled(e);
          };
        },
        Xn = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Dn, ring: e };
              })(e)
            ),
              zn.setMultiboxRing(e);
          };
        },
        qn = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Un, changeRingColor: e };
              })(e)
            ),
              zn.setMultiboxChangeRingColor(e);
          };
        },
        Zn = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Kn, changeCellColor: e };
              })(e)
            ),
              zn.setMultiboxChangeCellColor(e);
          };
        },
        Jn = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Hn, hideOwnSkins: e };
              })(e)
            ),
              zn.setMultiboxHideOwnSkins(e);
          };
        },
        Qn = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Wn, staticColor: e };
              })(e)
            ),
              zn.setMultiboxStaticColor(e);
          };
        },
        $n = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Vn, smoothSwitch: e };
              })(e)
            ),
              zn.setMultiboxSmoothSwitch(e);
          };
        },
        ea = Object(j.b)(
          function (e) {
            var t = e.settings;
            return Object(et.a)({}, t.game.multibox);
          },
          function (e) {
            return {
              setEnabled: function (t) {
                return e(Yn(t));
              },
              setRing: function (t) {
                return e(Xn(t));
              },
              setChangeRingColor: function (t) {
                return e(qn(t));
              },
              setChangeCellColor: function (t) {
                return e(Zn(t));
              },
              setHideOwnSkins: function (t) {
                return e(Jn(t));
              },
              setStaticColor: function (t) {
                return e(Qn(t));
              },
              setSmoothSwitch: function (t) {
                return e($n(t));
              },
            };
          }
        )(function (e) {
          var t = e.enabled,
            n = e.ring,
            a = e.changeRingColor,
            o = e.changeCellColor,
            s = e.hideOwnSkins,
            i = e.staticColor,
            r = e.smoothSwitch,
            c = e.setEnabled,
            l = e.setRing,
            u = e.setChangeRingColor,
            d = e.setChangeCellColor,
            b = e.setHideOwnSkins,
            g = e.setStaticColor,
            p = e.setSmoothSwitch;
          return Object(at.jsxs)(at.Fragment, {
            children: [
              Object(at.jsx)(ht, {
                text: "Enabled",
                enabled: t,
                onChange: c,
                main: !0,
              }),
              Object(at.jsx)(ht, {
                text: "Use ring",
                enabled: n,
                onChange: l,
                disabled: !t,
              }),
              Object(at.jsx)(ht, {
                text: "Change ring color on focus",
                enabled: a,
                onChange: u,
                disabled: !t,
              }),
              Object(at.jsx)(ht, {
                text: "Smooth tabs switch",
                enabled: r,
                onChange: p,
                disabled: !a || !t,
              }),
              Object(at.jsx)(ht, {
                text: "Change cell color on focus",
                enabled: o,
                onChange: d,
                disabled: !t,
              }),
              Object(at.jsx)(ht, {
                text: "Hide own skins",
                enabled: s,
                onChange: b,
                disabled: !t,
              }),
              Object(at.jsx)(ht, {
                text: "Use static color for my cells",
                enabled: i,
                onChange: g,
                disabled: !t,
              }),
            ],
          });
        }),
        ta = (function () {
          function e() {
            Object(O.a)(this, e);
          }
          return (
            Object(S.a)(e, null, [
              {
                key: "setMinimaEnabled",
                value: function (e) {
                  window.GameSettings.all.settings.game.minimap.enabled = e;
                },
              },
              {
                key: "setViewport",
                value: function (e) {
                  window.GameSettings.all.settings.game.minimap.viewport = e;
                },
              },
              {
                key: "setGhostCells",
                value: function (e) {
                  window.GameSettings.all.settings.game.minimap.ghostCells = e;
                },
              },
              {
                key: "setRealPlayersCells",
                value: function (e) {
                  window.GameSettings.all.settings.game.minimap.realPlayersCells =
                    e;
                },
              },
              {
                key: "setMass",
                value: function (e) {
                  window.GameSettings.all.settings.game.minimap.mass = e;
                },
              },
              {
                key: "setNicks",
                value: function (e) {
                  window.GameSettings.all.settings.game.minimap.nicks = e;
                },
              },
              {
                key: "setDrawPlayerPosition",
                value: function (e) {
                  window.GameSettings.all.settings.game.minimap.playerPosition =
                    e;
                },
              },
            ]),
            e
          );
        })(),
        na = "SET_MINIMAP_ENABLED",
        aa = "SET_VIEWPORT",
        oa = "SET_GHOST_CELLS",
        sa = "SET_REAL_PLAYERS_CELLS",
        ia = "SET_MASS",
        ra = "SET_NICKS",
        ca = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: na, enabled: e };
              })(e)
            ),
              ta.setMinimaEnabled(e);
          };
        },
        la = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: aa, viewport: e };
              })(e)
            ),
              ta.setViewport(e);
          };
        },
        ua = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: oa, ghostCells: e };
              })(e)
            ),
              ta.setGhostCells(e);
          };
        },
        da = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: sa, realPlayersCells: e };
              })(e)
            ),
              ta.setRealPlayersCells(e);
          };
        },
        ba = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: ia, mass: e };
              })(e)
            ),
              ta.setMass(e);
          };
        },
        ga = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: ra, nicks: e };
              })(e)
            ),
              ta.setNicks(e);
          };
        },
        pa = Object(j.b)(
          function (e) {
            var t = e.settings;
            return Object(et.a)({}, t.game.minimap);
          },
          function (e) {
            return {
              setEnabled: function (t) {
                return e(ca(t));
              },
              setViewport: function (t) {
                return e(la(t));
              },
              setGhostCells: function (t) {
                return e(ua(t));
              },
              setRealPlayersCells: function (t) {
                return e(da(t));
              },
              setMass: function (t) {
                return e(ba(t));
              },
              setNicks: function (t) {
                return e(ga(t));
              },
              setDrawPlayerPosition: function (t) {
                return e(
                  ((n = t),
                  function (e) {
                    e(
                      (function (e) {
                        return { type: "", playerPosition: e };
                      })(n)
                    ),
                      ta.setDrawPlayerPosition(n);
                  })
                );
                var n;
              },
            };
          }
        )(function (e) {
          var t = e.enabled,
            n = e.viewport,
            a = e.ghostCells,
            o = e.realPlayersCells,
            s = e.mass,
            i = e.nicks,
            r = e.playerPosition,
            c = e.setEnabled,
            l = e.setViewport,
            u = e.setGhostCells,
            d = e.setRealPlayersCells,
            b = e.setMass,
            g = e.setNicks,
            p = e.setDrawPlayerPosition;
          return Object(at.jsxs)(at.Fragment, {
            children: [
              Object(at.jsx)(ht, {
                text: "Enabled",
                enabled: t,
                onChange: c,
                main: !0,
              }),
              Object(at.jsx)(St, {
                text: "Show viewport",
                items: [
                  "Disabled",
                  "Main tab",
                  "Second tab",
                  "Top one tab",
                  "All",
                ],
                selectedItem: n,
                onChange: l,
                disabled: !t,
              }),
              Object(at.jsx)(ht, {
                text: "Show ghost cells",
                enabled: a,
                onChange: u,
                disabled: !t,
              }),
              Object(at.jsx)(ht, {
                text: "Show real players cells",
                enabled: o,
                onChange: d,
                disabled: !t,
              }),
              Object(at.jsx)(ht, {
                text: "Show mass",
                enabled: s,
                onChange: b,
                disabled: !t,
              }),
              Object(at.jsx)(ht, {
                text: "Show nicks",
                enabled: i,
                onChange: g,
                disabled: !t,
              }),
              Object(at.jsx)(ht, {
                text: "Show player position",
                enabled: r,
                onChange: p,
                disabled: !t,
              }),
            ],
          });
        }),
        fa = (function () {
          function e() {
            Object(O.a)(this, e);
          }
          return (
            Object(S.a)(e, null, [
              {
                key: "setCellRemoveAnimation",
                value: function (e) {
                  window.GameSettings.all.settings.game.effects.cellRemoveAnimation =
                    e;
                },
              },
              {
                key: "setCellRemoveAnimationForHiddenSpectator",
                value: function (e) {
                  window.GameSettings.all.settings.game.effects.cellRemoveAnimationForHiddenSpectator =
                    e;
                },
              },
              {
                key: "setSpawnAnimation",
                value: function (e) {
                  window.GameSettings.all.settings.game.effects.spawnAnimation =
                    e;
                },
              },
              {
                key: "setWtfRgbMode",
                value: function (e) {
                  window.GameSettings.all.settings.game.effects.wtfRgbMode = e;
                },
              },
            ]),
            e
          );
        })(),
        ma = "SET_CELL_REMOVE_ANIMATION",
        ha = "SET_CELL_REMOVE_ANIMATION_FOR_HIDDEN_SPECTATOR",
        ja = "SET_SPAWN_ANIMATION",
        Oa = "SET_WTF_RGB_MODE",
        Sa = function (e) {
          return function (t) {
            t({ type: ma, cellRemoveAnimation: e }),
              fa.setCellRemoveAnimation(e);
          };
        },
        wa = function (e) {
          return function (t) {
            t({ type: ha, cellRemoveAnimationForHiddenSpectator: e }),
              fa.setCellRemoveAnimationForHiddenSpectator(e);
          };
        },
        ya = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: ja, spawnAnimation: e };
              })(e)
            ),
              fa.setSpawnAnimation(e);
          };
        },
        _a = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Oa, wtfRgbMode: e };
              })(e)
            ),
              fa.setWtfRgbMode(e);
          };
        },
        Ca = Object(j.b)(
          function (e) {
            var t = e.settings;
            return Object(et.a)({}, t.game.effects);
          },
          function (e) {
            return {
              setCellRemoveAnimation: function (t) {
                return e(Sa(t));
              },
              setCellRemoveAnimationForHiddenSpectator: function (t) {
                return e(wa(t));
              },
              setSpawnAnimation: function (t) {
                return e(ya(t));
              },
              setWtfRgbMode: function (t) {
                return e(_a(t));
              },
            };
          }
        )(function (e) {
          var t = e.cellRemoveAnimation,
            n = e.cellRemoveAnimationForHiddenSpectator,
            a = e.spawnAnimation,
            o = e.wtfRgbMode,
            s = e.setCellRemoveAnimation,
            i = e.setCellRemoveAnimationForHiddenSpectator,
            r = e.setSpawnAnimation,
            c = e.setWtfRgbMode;
          return Object(at.jsxs)(at.Fragment, {
            children: [
              Object(at.jsx)(St, {
                text: "Cell eat animation",
                items: ["Disabled", "Default", "2CL", "Yue", "Acimazis"],
                selectedItem: t,
                onChange: s,
                hint: "enabling may cause lag with full map spectator",
              }),
              Object(at.jsx)(ht, {
                text: "Cell eat animation for hidden spectator",
                enabled: n,
                onChange: i,
                disabled: "Disabled" === t,
              }),
              Object(at.jsx)(St, {
                text: "Cell spawn animation",
                items: ["Disabled", "Default", "2CL", "Yue", "Acimazis"],
                selectedItem: a,
                onChange: r,
              }),
              Object(at.jsx)(ht, {
                text: "WTF RGB mode",
                enabled: o,
                onChange: c,
              }),
            ],
          });
        }),
        Ta = Object(j.b)(
          function (e) {
            var t = e.UI;
            return {
              settingsSubmenu: t.gameSettingsSubmenu,
              settingsShown: t.settingsShown,
            };
          },
          function (e) {
            return {
              setSettingsSubmenu: function (t) {
                return e({ type: ne, gameSettingsSubmenu: t });
              },
            };
          }
        )(function (e) {
          var t = e.settingsSubmenu,
            n = e.setSettingsSubmenu,
            a = e.settingsShown;
          return Object(at.jsxs)(at.Fragment, {
            children: [
              Object(at.jsxs)(dt, {
                children: [
                  Object(at.jsxs)("button", {
                    className: Qe()(
                      Object(r.a)({}, ct.a.selected, "GAME_PERFORMANCE" === t)
                    ),
                    onClick: function () {
                      return n("GAME_PERFORMANCE");
                    },
                    children: [
                      Object(at.jsx)(h.a, { icon: m.D }),
                      " Performance",
                    ],
                  }),
                  Object(at.jsxs)("button", {
                    className: Qe()(
                      Object(r.a)({}, ct.a.selected, "GAME_CELLS" === t)
                    ),
                    onClick: function () {
                      return n("GAME_CELLS");
                    },
                    children: [Object(at.jsx)(h.a, { icon: m.i }), " Cells"],
                  }),
                  Object(at.jsxs)("button", {
                    className: Qe()(
                      Object(r.a)({}, ct.a.selected, "GAME_GAMEPLAY" === t)
                    ),
                    onClick: function () {
                      return n("GAME_GAMEPLAY");
                    },
                    children: [Object(at.jsx)(h.a, { icon: m.B }), " Gameplay"],
                  }),
                  Object(at.jsxs)("button", {
                    className: Qe()(
                      Object(r.a)({}, ct.a.selected, "GAME_MULTIBOX" === t)
                    ),
                    onClick: function () {
                      return n("GAME_MULTIBOX");
                    },
                    children: [Object(at.jsx)(h.a, { icon: m.m }), " Multibox"],
                  }),
                  Object(at.jsxs)("button", {
                    className: Qe()(
                      Object(r.a)({}, ct.a.selected, "GAME_MINIMAP" === t)
                    ),
                    onClick: function () {
                      return n("GAME_MINIMAP");
                    },
                    children: [Object(at.jsx)(h.a, { icon: m.v }), " Minimap"],
                  }),
                  Object(at.jsxs)("button", {
                    className: Qe()(
                      Object(r.a)({}, ct.a.selected, "GAME_EFFECTS" === t)
                    ),
                    onClick: function () {
                      return n("GAME_EFFECTS");
                    },
                    children: [Object(at.jsx)(h.a, { icon: m.H }), " Effects"],
                  }),
                ],
              }),
              Object(at.jsxs)(pt, {
                children: [
                  Object(at.jsx)(Lt, {
                    shown: "GAME_PERFORMANCE" === t && a,
                    children: Object(at.jsx)(Nt, {}),
                  }),
                  Object(at.jsx)(Lt, {
                    shown: "GAME_CELLS" === t && a,
                    children: Object(at.jsx)(Cn, {}),
                  }),
                  Object(at.jsx)(Lt, {
                    shown: "GAME_GAMEPLAY" === t && a,
                    children: Object(at.jsx)(Bn, {}),
                  }),
                  Object(at.jsx)(Lt, {
                    shown: "GAME_MULTIBOX" === t && a,
                    children: Object(at.jsx)(ea, {}),
                  }),
                  Object(at.jsx)(Lt, {
                    shown: "GAME_MINIMAP" === t && a,
                    children: Object(at.jsx)(pa, {}),
                  }),
                  Object(at.jsx)(Lt, {
                    shown: "GAME_EFFECTS" === t && a,
                    children: Object(at.jsx)(Ca, {}),
                  }),
                ],
              }),
            ],
          });
        }),
        ka = n(29),
        va = n.n(ka),
        xa = n(101),
        Ea = n(22),
        Ma = n.n(Ea),
        Aa = n(140),
        Ia = function (e, t, n, a) {
          return new Array(e).fill(t).map(function (e, t) {
            return (e += t * n), a && (e = +e.toFixed(a)), e;
          });
        },
        Ga = function (e) {
          return e.alpha
            ? "rgba("
                .concat(e.red, ", ")
                .concat(e.green, ", ")
                .concat(e.blue, ", ")
                .concat(e.alpha, ")")
            : "rgb("
                .concat(e.red, ", ")
                .concat(e.green, ", ")
                .concat(e.blue, ")");
        },
        Na = function (e, t) {
          return {
            red: e.red - t,
            green: e.green - t,
            blue: e.blue - t,
            alpha: e.alpha,
          };
        },
        Ra = function (e) {
          return Math.abs(e) > 999
            ? Math.sign(e) * +(Math.abs(e) / 1e3).toFixed(1) + "k"
            : Math.sign(e) * Math.abs(e);
        },
        Pa = function (e) {
          var t,
            n,
            o = e.text,
            s = e.disabled,
            i = e.hint,
            c = e.color,
            l = e.onChange,
            u = e.useAlpha,
            d = Object(a.useState)(!1),
            b = Object(Xe.a)(d, 2),
            g = b[0],
            p = b[1],
            f = Object(a.useState)(c),
            j = Object(Xe.a)(f, 2),
            O = j[0],
            S = j[1],
            w = function (e) {
              var t = e.rgb;
              return u
                ? { red: t.r, green: t.g, blue: t.b, alpha: t.a }
                : { red: t.r, green: t.g, blue: t.b };
            };
          return (
            Object(a.useEffect)(
              function () {
                s && p(!1);
              },
              [s]
            ),
            Object(at.jsxs)("div", {
              className: Qe()(
                ((t = {}),
                Object(r.a)(t, Ma.a.wrap, !0),
                Object(r.a)(t, Ma.a.disabled, s),
                t)
              ),
              children: [
                Object(at.jsxs)("div", {
                  className: Ma.a.text,
                  children: [
                    o,
                    i &&
                      Object(at.jsx)("span", {
                        className: Ma.a.hint,
                        children: i,
                      }),
                  ],
                }),
                Object(at.jsxs)("div", {
                  className: Qe()(
                    ((n = {}),
                    Object(r.a)(n, Ma.a.picker, !0),
                    Object(r.a)(n, Ma.a.picking, g),
                    n)
                  ),
                  children: [
                    Object(at.jsx)("button", {
                      className: Ma.a.colorButton,
                      onClick: function () {
                        return p(!0);
                      },
                      style: { backgroundColor: Ga(c) },
                    }),
                    Object(at.jsxs)("div", {
                      className: Ma.a.chromePickerWrapper,
                      children: [
                        Object(at.jsx)(Aa.a, {
                          color: u
                            ? { r: O.red, g: O.green, b: O.blue, a: O.alpha }
                            : { r: O.red, g: O.green, b: O.blue },
                          onChange: function (e) {
                            return S(w(e));
                          },
                          onChangeComplete: function (e) {
                            return l(w(e));
                          },
                        }),
                        Object(at.jsxs)("button", {
                          className: Ma.a.pickerSave,
                          onClick: function () {
                            return p(!1);
                          },
                          children: [
                            Object(at.jsx)(h.a, { icon: m.g }),
                            " Save",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        La = "SET_ONE_COLORED_CELLS_COLOR",
        Ba = "SET_ONE_COLORED_STATS_COLOR",
        Fa = "SET_ADAPTIVE_SHADOW",
        Da = "SET_SHADOW_COLOR",
        Ua = "SET_MY_SHADOW_COLOR",
        Ka = "SET_SHADOW_DISTANCE",
        Ha = "SET_MY_SHADOW_DISTANCE",
        Wa = "SET_SHADOW_STRENGTH",
        Va = "SET_MY_SHADOW_STRENGTH",
        za = "SET_CELLS_TRANSPARENCY",
        Ya = "SET_CELLS_COLOR_LIGHTEN",
        Xa = (function () {
          function e() {
            Object(O.a)(this, e);
          }
          return (
            Object(S.a)(e, null, [
              {
                key: "setOneColoredColor",
                value: function (e) {
                  window.GameSettings.all.settings.theming.cells.oneColoredColor =
                    e;
                },
              },
              {
                key: "setOneColoredStatsColor",
                value: function (e) {
                  window.GameSettings.all.settings.theming.cells.oneColoredStatsColor =
                    e;
                },
              },
              {
                key: "setShadowColor",
                value: function (e) {
                  window.GameSettings.all.settings.theming.cells.shadowColor =
                    e;
                },
              },
              {
                key: "setMyShadowColor",
                value: function (e) {
                  window.GameSettings.all.settings.theming.cells.myShadowColor =
                    e;
                },
              },
              {
                key: "setShadowDistance",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.cells.shadowDistance =
                    e),
                    window.GameSettings.updateThemingCells("Shadow");
                },
              },
              {
                key: "setMyShadowDistance",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.cells.myShadowDistance =
                    e),
                    window.GameSettings.updateThemingCells("MyShadow");
                },
              },
              {
                key: "setShadowStrength",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.cells.shadowStrength =
                    e),
                    window.GameSettings.updateThemingCells("Shadow");
                },
              },
              {
                key: "setMyShadowStrength",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.cells.myShadowStrength =
                    e),
                    window.GameSettings.updateThemingCells("MyShadow");
                },
              },
              {
                key: "setCellsTransparency",
                value: function (e) {
                  window.GameSettings.all.settings.theming.cells.transparency =
                    e;
                },
              },
              {
                key: "setCellsColorLighten",
                value: function (e) {
                  window.GameSettings.all.settings.theming.cells.colorLighten =
                    e;
                },
              },
              {
                key: "setAdaptiveShadow",
                value: function (e) {
                  window.GameSettings.all.settings.theming.cells.adaptiveShadow =
                    e;
                },
              },
            ]),
            e
          );
        })(),
        qa = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: La, oneColoredColor: e };
              })(e)
            ),
              Xa.setOneColoredColor(e);
          };
        },
        Za = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Ba, oneColoredStatsColor: e };
              })(e)
            ),
              Xa.setOneColoredStatsColor(e);
          };
        },
        Ja = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Da, shadowColor: e };
              })(e)
            ),
              Xa.setShadowColor(e);
          };
        },
        Qa = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Ua, myShadowColor: e };
              })(e)
            ),
              Xa.setMyShadowColor(e);
          };
        },
        $a = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Ka, shadowDistance: e };
              })(e)
            ),
              Xa.setShadowDistance(e);
          };
        },
        eo = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Ha, myShadowDistance: e };
              })(e)
            ),
              Xa.setMyShadowDistance(e);
          };
        },
        to = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Wa, shadowStrength: e };
              })(e)
            ),
              Xa.setShadowStrength(e);
          };
        },
        no = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Va, myShadowStrength: e };
              })(e)
            ),
              Xa.setMyShadowStrength(e);
          };
        },
        ao = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: za, transparency: e };
              })(e)
            ),
              Xa.setCellsTransparency(e);
          };
        },
        oo = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Ya, colorLighten: e };
              })(e)
            ),
              Xa.setCellsColorLighten(e);
          };
        },
        so = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Fa, adaptiveShadow: e };
              })(e)
            ),
              Xa.setAdaptiveShadow(e);
          };
        },
        io = Object(j.b)(
          function (e) {
            var t = e.settings;
            return Object(et.a)({}, t.theming.cells);
          },
          function (e) {
            return {
              setOneColoredColor: function (t) {
                return e(qa(t));
              },
              setOneColoredStatsColor: function (t) {
                return e(Za(t));
              },
              setShadowColor: function (t) {
                return e(Ja(t));
              },
              setMyShadowColor: function (t) {
                return e(Qa(t));
              },
              setShadowDistance: function (t) {
                return e($a(t));
              },
              setMyShadowDistance: function (t) {
                return e(eo(t));
              },
              setShadowStrength: function (t) {
                return e(to(t));
              },
              setMyShadowStrength: function (t) {
                return e(no(t));
              },
              setCellsTransparency: function (t) {
                return e(ao(t));
              },
              setCellsColorLighten: function (t) {
                return e(oo(t));
              },
              setAdaptiveShadow: function (t) {
                return e(so(t));
              },
            };
          }
        )(function (e) {
          var t = e.oneColoredColor,
            n = e.oneColoredStatsColor,
            a = e.shadowColor,
            o = e.myShadowColor,
            s = e.shadowDistance,
            i = e.myShadowDistance,
            r = e.shadowStrength,
            c = e.myShadowStrength,
            l = e.transparency,
            u = e.colorLighten,
            d = e.adaptiveShadow,
            b = e.setOneColoredColor,
            g = e.setOneColoredStatsColor,
            p = e.setShadowColor,
            f = e.setMyShadowColor,
            m = e.setShadowDistance,
            h = e.setMyShadowDistance,
            j = e.setShadowStrength,
            O = e.setMyShadowStrength,
            S = e.setCellsTransparency,
            w = e.setCellsColorLighten,
            y = e.setAdaptiveShadow;
          return Object(at.jsxs)(at.Fragment, {
            children: [
              Object(at.jsx)(Pa, {
                text: "One colored cells color",
                color: t,
                onChange: b,
              }),
              Object(at.jsx)(Pa, {
                text: "One colored stats color",
                color: n,
                onChange: g,
                hint: "(mass and nicks)",
              }),
              Object(at.jsx)(ht, {
                text: "Adaptive shadow",
                hint: "shadow color matches cell color",
                enabled: d,
                onChange: y,
              }),
              Object(at.jsx)(Pa, {
                text: "Shadow color",
                color: a,
                onChange: p,
              }),
              Object(at.jsx)(_n, {
                text: "Shadow distance",
                from: 10,
                to: 150,
                value: s,
                onChange: m,
              }),
              Object(at.jsx)(_n, {
                text: "Shadow strength",
                from: 1,
                to: 20,
                value: r,
                onChange: j,
              }),
              Object(at.jsx)(Pa, {
                text: "My cell shadow color",
                color: o,
                onChange: f,
              }),
              Object(at.jsx)(_n, {
                text: "My cell shadow distance",
                from: 10,
                to: 150,
                value: i,
                onChange: h,
              }),
              Object(at.jsx)(_n, {
                text: "My cell shadow strength",
                from: 1,
                to: 20,
                value: c,
                onChange: O,
              }),
              Object(at.jsx)(_n, {
                text: "Transparency",
                from: 0.1,
                to: 1,
                value: l,
                onChange: S,
              }),
              Object(at.jsx)(_n, {
                text: "Color lighten",
                from: 5,
                to: 200,
                value: u,
                onChange: w,
              }),
            ],
          });
        }),
        ro = Object(j.b)(
          function (e) {
            var t = e.settings;
            return Object(et.a)({}, t.theming.food);
          },
          function (e) {
            return {
              setFoodEnabled: function (t) {
                return e(F(t));
              },
              setFoodFirstTabEnabled: function (t) {
                return e(D(t));
              },
              setFoodSecondTabEnabled: function (t) {
                return e(U(t));
              },
              setFoodTopOneTabEnabled: function (t) {
                return e(K(t));
              },
              setFoodSize: function (t) {
                return e(H(t));
              },
              setFoodColor: function (t) {
                return e(W(t));
              },
              setFoodGlow: function (t) {
                return e(V(t));
              },
              setFoodGlowColor: function (t) {
                return e(z(t));
              },
              setFoodGlowDistance: function (t) {
                return e(Y(t));
              },
              setFoodGlowStrength: function (t) {
                return e(X(t));
              },
              setFoodCrisp: function (t) {
                return e(q(t));
              },
            };
          }
        )(function (e) {
          var t = e.enabled,
            n = e.firstTabEnabled,
            a = e.secondTabEnabled,
            o = e.topOneTabEnabled,
            s = e.size,
            i = e.color,
            r = e.glow,
            c = e.glowColor,
            l = e.glowDistance,
            u = e.glowStrength,
            d = e.crisp,
            b = e.setFoodEnabled,
            g = e.setFoodFirstTabEnabled,
            p = e.setFoodSecondTabEnabled,
            f = e.setFoodTopOneTabEnabled,
            m = e.setFoodSize,
            h = e.setFoodColor,
            j = e.setFoodGlow,
            O = e.setFoodGlowColor,
            S = e.setFoodGlowDistance,
            w = e.setFoodGlowStrength,
            y = e.setFoodCrisp;
          return Object(at.jsxs)(at.Fragment, {
            children: [
              Object(at.jsx)(ht, {
                text: "Enabled",
                enabled: t,
                onChange: b,
                main: !0,
              }),
              Object(at.jsx)(ht, {
                text: "Enabled for main (first) player tab",
                enabled: n,
                onChange: g,
                disabled: !t,
              }),
              Object(at.jsx)(ht, {
                text: "Enabled for multibox (second) player tab",
                enabled: a,
                onChange: p,
                disabled: !t,
              }),
              Object(at.jsx)(ht, {
                text: "Enabled for top one (spectator) tab",
                enabled: o,
                onChange: f,
                disabled: !t,
              }),
              Object(at.jsx)(_n, {
                text: "Food size",
                from: 2,
                to: 32,
                value: s,
                onChange: m,
                disabled: !t,
              }),
              Object(at.jsx)(Pa, {
                text: "Color",
                color: i,
                onChange: h,
                disabled: !t,
              }),
              Object(at.jsx)(ht, {
                text: "Glow",
                enabled: r,
                onChange: j,
                disabled: !t,
              }),
              Object(at.jsx)(Pa, {
                text: "Glow color",
                color: c,
                onChange: O,
                disabled: !r || !t,
              }),
              Object(at.jsx)(_n, {
                text: "Glow distance",
                from: 10,
                to: 250,
                value: l,
                onChange: S,
                disabled: !r || !t,
              }),
              Object(at.jsx)(_n, {
                text: "Glow strength",
                from: 1,
                to: 30,
                value: u,
                onChange: w,
                disabled: !r || !t,
              }),
              Object(at.jsx)(ht, {
                text: "Crispy",
                enabled: d,
                onChange: y,
                disabled: !t,
              }),
            ],
          });
        }),
        co = "SET_MAP_BORDER_TYPE",
        lo = "SET_MAP_BORDER_ROUNDNESS",
        uo = "SET_MAP_BORDER_WIDTH",
        bo = "SET_MAP_BORDER_COLOR",
        go = "SET_MAP_BORDER_GLOW",
        po = "SET_MAP_BORDER_GLOW_COLOR",
        fo = "SET_MAP_BORDER_GLOW_DISTANCE",
        mo = "SET_MAP_BORDER_GLOW_STRENGTH",
        ho = "SET_MAP_BACKGROUND_TINT",
        jo = "SET_MAP_BACKGROUND_IMAGE",
        Oo = "SET_MAP_BACKGROUND_IMAGE_URL",
        So = "SET_MAP_BACKGROUND_IMAGE_LIVE_EFFECT_STRENGTH",
        wo = "SET_MAP_GLOBAL_BACKGROUND_IMAGE",
        yo = "SET_MAP_GLOBAL_BACKGROUND_IMAGE_URL",
        _o = "SET_MAP_GLOBAL_BACKGROUND_IMAGE_TINT",
        Co = "SET_MAP_GLOBAL_BACKGROUND_IMAGE_LIVE_EFFECT_STRENGTH",
        To = (function () {
          function e() {
            Object(O.a)(this, e);
          }
          return (
            Object(S.a)(e, null, [
              {
                key: "setMapBorderType",
                value: function (e) {
                  window.GameSettings.all.settings.theming.map.borderType = e;
                },
              },
              {
                key: "setMapBorderRoundness",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.map.borderRoundness =
                    e),
                    window.GameSettings.updateThemingMap("Border");
                },
              },
              {
                key: "setMapBorderWidth",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.map.borderWidth =
                    e),
                    window.GameSettings.updateThemingMap("Border");
                },
              },
              {
                key: "setMapBorderColor",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.map.borderColor =
                    e),
                    window.GameSettings.updateThemingMap("Border");
                },
              },
              {
                key: "setMapBorderGlow",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.map.borderGlow = e),
                    window.GameSettings.updateThemingMap("Border");
                },
              },
              {
                key: "setMapBorderGlowColor",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.map.borderGlowColor =
                    e),
                    window.GameSettings.updateThemingMap("Border");
                },
              },
              {
                key: "setMapBorderGlowDistance",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.map.borderGlowDistance =
                    e),
                    window.GameSettings.updateThemingMap("Border");
                },
              },
              {
                key: "setMapBorderGlowStrength",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.map.borderGlowStrength =
                    e),
                    window.GameSettings.updateThemingMap("Border");
                },
              },
              {
                key: "setMapBackgroundTint",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.map.backgroundTint =
                    e),
                    window.GameSettings.updateThemingMap("BgTint");
                },
              },
              {
                key: "setMapBackgroundImage",
                value: function (e) {
                  window.GameSettings.all.settings.theming.map.backgroundImage =
                    e;
                },
              },
              {
                key: "setMapBackgroundImageUrl",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.map.backgroundImageUrl =
                    e),
                    window.GameSettings.updateThemingMap("BgImgUrl");
                },
              },
              {
                key: "setMapBackgroundImageLiveEffectStrength",
                value: function (e) {
                  window.GameSettings.all.settings.theming.map.backgroundImageLiveEffectStrength =
                    e;
                },
              },
              {
                key: "setMapGlobalBackgroundImage",
                value: function (e) {
                  window.GameSettings.all.settings.theming.map.globalBackgroundImage =
                    e;
                },
              },
              {
                key: "setMapGlobalBackgroundImageUrl",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.map.globalBackgroundImageUrl =
                    e),
                    window.GameSettings.updateThemingMap("GlobalBgImgUrl");
                },
              },
              {
                key: "setMapGlobalBackgroundImageTint",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.map.globalBackgroundImageTint =
                    e),
                    window.GameSettings.updateThemingMap("GlobalBgImgTint");
                },
              },
              {
                key: "setMapGlobalBackgroundImageLiveEffectStrength",
                value: function (e) {
                  window.GameSettings.all.settings.theming.map.globalBackgroundImageLiveEffectStrength =
                    e;
                },
              },
            ]),
            e
          );
        })(),
        ko = function (e) {
          return function (t) {
            t({ type: co, borderType: e }), To.setMapBorderType(e);
          };
        },
        vo = function (e) {
          return function (t) {
            t({ type: lo, borderRoundness: e }), To.setMapBorderRoundness(e);
          };
        },
        xo = function (e) {
          return function (t) {
            t({ type: uo, borderWidth: e }), To.setMapBorderWidth(e);
          };
        },
        Eo = function (e) {
          return function (t) {
            t({ type: bo, borderColor: e }), To.setMapBorderColor(e);
          };
        },
        Mo = function (e) {
          return function (t) {
            t({ type: go, borderGlow: e }), To.setMapBorderGlow(e);
          };
        },
        Ao = function (e) {
          return function (t) {
            t({ type: po, borderGlowColor: e }), To.setMapBorderGlowColor(e);
          };
        },
        Io = function (e) {
          return function (t) {
            t({ type: fo, borderGlowDistance: e }),
              To.setMapBorderGlowDistance(e);
          };
        },
        Go = function (e) {
          return function (t) {
            t({ type: mo, borderGlowStrength: e }),
              To.setMapBorderGlowStrength(e);
          };
        },
        No = function (e) {
          return function (t) {
            t({ type: ho, backgroundTint: e }), To.setMapBackgroundTint(e);
          };
        },
        Ro = function (e) {
          return function (t) {
            t({ type: jo, backgroundImage: e }), To.setMapBackgroundImage(e);
          };
        },
        Po = function (e) {
          return function (t) {
            t({ type: Oo, backgroundImageUrl: e }),
              To.setMapBackgroundImageUrl(e);
          };
        },
        Lo = function (e) {
          return function (t) {
            t({ type: So, backgroundImageLiveEffectStrength: e }),
              To.setMapBackgroundImageLiveEffectStrength(e);
          };
        },
        Bo = function (e) {
          return function (t) {
            t({ type: wo, globalBackgroundImage: e }),
              To.setMapGlobalBackgroundImage(e);
          };
        },
        Fo = function (e) {
          return function (t) {
            t({ type: yo, globalBackgroundImageUrl: e }),
              To.setMapGlobalBackgroundImageUrl(e);
          };
        },
        Do = function (e) {
          return function (t) {
            t({ type: _o, globalBackgroundImageTint: e }),
              To.setMapGlobalBackgroundImageTint(e);
          };
        },
        Uo = function (e) {
          return function (t) {
            t({ type: Co, globalBackgroundImageLiveEffectStrength: e }),
              To.setMapGlobalBackgroundImageLiveEffectStrength(e);
          };
        },
        Ko = n(70),
        Ho = n.n(Ko),
        Wo = function (e) {
          var t,
            n = e.text,
            a = e.value,
            o = e.disabled,
            s = e.onChange;
          return Object(at.jsxs)("div", {
            className: Qe()(
              ((t = {}),
              Object(r.a)(t, Ho.a.wrap, !0),
              Object(r.a)(t, Ho.a.disabled, o),
              t)
            ),
            children: [
              Object(at.jsx)("div", { className: Ho.a.text, children: n }),
              Object(at.jsx)("input", {
                value: a,
                onChange: function (e) {
                  return s(e.target.value);
                },
                onPaste: function (e) {
                  e.preventDefault(), s(e.clipboardData.getData("Text"));
                },
              }),
            ],
          });
        },
        Vo = Object(j.b)(
          function (e) {
            var t = e.settings;
            return Object(et.a)({}, t.theming.map);
          },
          function (e) {
            return {
              setMapBorderType: function (t) {
                return e(ko(t));
              },
              setMapBorderRoundness: function (t) {
                return e(vo(t));
              },
              setMapBorderWidth: function (t) {
                return e(xo(t));
              },
              setMapBorderColor: function (t) {
                return e(Eo(t));
              },
              setMapBorderGlow: function (t) {
                return e(Mo(t));
              },
              setMapBorderGlowColor: function (t) {
                return e(Ao(t));
              },
              setMapBorderGlowDistance: function (t) {
                return e(Io(t));
              },
              setMapBorderGlowStrength: function (t) {
                return e(Go(t));
              },
              setMapBackgroundTint: function (t) {
                return e(No(t));
              },
              setMapBackgroundImage: function (t) {
                return e(Ro(t));
              },
              setMapBackgroundImageUrl: function (t) {
                return e(Po(t));
              },
              setMapBackgroundImageLiveEffectStrength: function (t) {
                return e(Lo(t));
              },
              setMapGlobalBackgroundImage: function (t) {
                return e(Bo(t));
              },
              setMapGlobalBackgroundImageUrl: function (t) {
                return e(Fo(t));
              },
              setMapGlobalBackgroundImageTint: function (t) {
                return e(Do(t));
              },
              setMapGlobalBackgroundImageLiveEffectStrength: function (t) {
                return e(Uo(t));
              },
            };
          }
        )(function (e) {
          var t = e.borderType,
            n = e.borderRoundness,
            a = e.borderWidth,
            o = e.borderColor,
            s = e.borderGlow,
            i = e.borderGlowColor,
            r = e.borderGlowDistance,
            c = e.borderGlowStrength,
            l = e.backgroundTint,
            u = e.backgroundImage,
            d = e.backgroundImageUrl,
            b = e.backgroundImageLiveEffectStrength,
            g = e.globalBackgroundImage,
            p = e.globalBackgroundImageUrl,
            f = e.globalBackgroundImageTint,
            m = e.globalBackgroundImageLiveEffectStrength,
            h = e.setMapBorderType,
            j = e.setMapBorderRoundness,
            O = e.setMapBorderWidth,
            S = e.setMapBorderColor,
            w = e.setMapBorderGlow,
            y = e.setMapBorderGlowColor,
            _ = e.setMapBorderGlowDistance,
            C = e.setMapBorderGlowStrength,
            T = e.setMapBackgroundTint,
            k = e.setMapBackgroundImage,
            v = e.setMapBackgroundImageUrl,
            x = e.setMapBackgroundImageLiveEffectStrength,
            E = e.setMapGlobalBackgroundImage,
            M = e.setMapGlobalBackgroundImageUrl,
            A = e.setMapGlobalBackgroundImageTint,
            I = e.setMapGlobalBackgroundImageLiveEffectStrength;
          return Object(at.jsxs)(at.Fragment, {
            children: [
              Object(at.jsx)(St, {
                text: "Border type",
                selectedItem: t,
                items: [
                  "Disabled",
                  "Common",
                  "Common (anim)",
                  "RGB",
                  "RGB (anim)",
                ],
                onChange: h,
              }),
              Object(at.jsx)(_n, {
                text: "Border roundness",
                hint: Bt,
                from: 0,
                to: 140,
                value: n,
                onChange: j,
              }),
              Object(at.jsx)(_n, {
                text: "Border width",
                from: 5,
                to: 100,
                value: a,
                onChange: O,
              }),
              Object(at.jsx)(Pa, {
                text: "Border color",
                color: o,
                onChange: S,
              }),
              Object(at.jsx)(ht, {
                text: "Border glow",
                enabled: s,
                onChange: w,
              }),
              Object(at.jsx)(Pa, {
                text: "Border glow color",
                color: i,
                onChange: y,
                disabled: !s,
              }),
              Object(at.jsx)(_n, {
                text: "Border glow distance",
                from: 10,
                to: 350,
                value: r,
                onChange: _,
                disabled: !s,
              }),
              Object(at.jsx)(_n, {
                text: "Border glow strength",
                from: 1,
                to: 30,
                value: c,
                onChange: C,
                disabled: !s,
              }),
              Object(at.jsx)(Pa, {
                text: "Background tint",
                color: l,
                onChange: T,
              }),
              Object(at.jsx)(ht, {
                text: "Background image",
                enabled: u,
                onChange: k,
              }),
              Object(at.jsx)(Wo, {
                text: "Background image URL",
                value: d,
                onChange: v,
                disabled: !u,
              }),
              Object(at.jsx)(St, {
                text: "Background image live effect strength",
                selectedItem: b,
                items: ["Disabled", "1", "2", "3", "4", "5"],
                onChange: x,
                disabled: !u,
              }),
              Object(at.jsx)(ht, {
                text: "Global background image",
                enabled: g,
                onChange: E,
              }),
              Object(at.jsx)(Wo, {
                text: "Global background image URL",
                value: p,
                onChange: M,
                disabled: !g,
              }),
              Object(at.jsx)(Pa, {
                text: "Global background image tint",
                color: f,
                onChange: A,
                disabled: !g,
              }),
              Object(at.jsx)(St, {
                text: "Global background image live effect strength",
                selectedItem: m,
                items: ["Disabled", "1", "2", "3", "4", "5"],
                onChange: I,
                disabled: !g,
              }),
            ],
          });
        }),
        zo = "SET_MINIMAP_BACKGROUND_COLOR",
        Yo = "SET_MINIMAP_SIZE",
        Xo = "SET_MINIMAP_MY_VIEWPORT_COLOR",
        qo = "SET_MINIMAP_TOP_ONE_VIEWPORT_COLOR",
        Zo = "SET_MINIMAP_PLAYER_SIZE",
        Jo = "SET_MINIMAP_PLAYER_COLOR",
        Qo = "SET_MINIMAP_GHOST_CELLS_COLOR",
        $o = (function () {
          function e() {
            Object(O.a)(this, e);
          }
          return (
            Object(S.a)(e, null, [
              {
                key: "setMinimapBackgroundColor",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.minimap.backgroundColor =
                    e),
                    window.GameSettings.updateThemingMinimap("BgColor");
                },
              },
              {
                key: "setMinimapSize",
                value: function (e) {
                  window.GameSettings.all.settings.theming.minimap.size = e;
                },
              },
              {
                key: "setMinimapMyViewportColor",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.minimap.myViewportColor =
                    e),
                    window.GameSettings.updateThemingMinimap("ViewportColors");
                },
              },
              {
                key: "setMinimapTopOneViewportColor",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.minimap.topOneViewportColor =
                    e),
                    window.GameSettings.updateThemingMinimap("ViewportColors");
                },
              },
              {
                key: "setMinimapPlayerSize",
                value: function (e) {
                  window.GameSettings.all.settings.theming.minimap.playerSize =
                    e;
                },
              },
              {
                key: "setMinimapPlayerColor",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.minimap.playerColor =
                    e),
                    window.GameSettings.updateThemingMinimap("PlayerColor");
                },
              },
              {
                key: "setMinimapGhostCellsColor",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.minimap.ghostCellsColor =
                    e),
                    window.GameSettings.updateThemingMinimap("GhostCellsColor");
                },
              },
            ]),
            e
          );
        })(),
        es = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: zo, backgroundColor: e };
              })(e)
            ),
              $o.setMinimapBackgroundColor(e);
          };
        },
        ts = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Yo, size: e };
              })(e)
            ),
              $o.setMinimapSize(e);
          };
        },
        ns = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Xo, myViewportColor: e };
              })(e)
            ),
              $o.setMinimapMyViewportColor(e);
          };
        },
        as = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: qo, topOneViewportColor: e };
              })(e)
            ),
              $o.setMinimapTopOneViewportColor(e);
          };
        },
        os = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Zo, playerSize: e };
              })(e)
            ),
              $o.setMinimapPlayerSize(e);
          };
        },
        ss = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Jo, playerColor: e };
              })(e)
            ),
              $o.setMinimapPlayerColor(e);
          };
        },
        is = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Qo, ghostCellsColor: e };
              })(e)
            ),
              $o.setMinimapGhostCellsColor(e);
          };
        },
        rs = Object(j.b)(
          function (e) {
            var t = e.settings;
            return Object(et.a)({}, t.theming.minimap);
          },
          function (e) {
            return {
              setMinimapBackgroundColor: function (t) {
                return e(es(t));
              },
              setMinimapSize: function (t) {
                return e(ts(t));
              },
              setMinimapMyViewportColor: function (t) {
                return e(ns(t));
              },
              setMinimapTopOneViewportColor: function (t) {
                return e(as(t));
              },
              setMinimapPlayerSize: function (t) {
                return e(os(t));
              },
              setMinimapPlayerColor: function (t) {
                return e(ss(t));
              },
              setMinimapGhostCellsColor: function (t) {
                return e(is(t));
              },
            };
          }
        )(function (e) {
          var t = e.backgroundColor,
            n = e.size,
            a = e.myViewportColor,
            o = e.topOneViewportColor,
            s = e.playerSize,
            i = e.playerColor,
            r = e.ghostCellsColor,
            c = e.setMinimapBackgroundColor,
            l = e.setMinimapSize,
            u = e.setMinimapMyViewportColor,
            d = e.setMinimapTopOneViewportColor,
            b = e.setMinimapPlayerSize,
            g = e.setMinimapPlayerColor,
            p = e.setMinimapGhostCellsColor;
          return Object(at.jsxs)(at.Fragment, {
            children: [
              Object(at.jsx)(Pa, {
                text: "Background color",
                color: t,
                onChange: c,
                useAlpha: !0,
              }),
              Object(at.jsx)(_n, {
                text: "Size (width and height)",
                from: 100,
                to: 400,
                value: n,
                onChange: l,
              }),
              Object(at.jsx)(Pa, {
                text: "My viewport color",
                color: a,
                onChange: u,
                useAlpha: !0,
              }),
              Object(at.jsx)(Pa, {
                text: "Top one viewport color",
                color: o,
                onChange: d,
                useAlpha: !0,
              }),
              Object(at.jsx)(_n, {
                text: "Player size",
                from: 4,
                to: 16,
                value: s,
                onChange: b,
              }),
              Object(at.jsx)(Pa, {
                text: "Player color",
                color: i,
                onChange: g,
              }),
              Object(at.jsx)(Pa, {
                text: "Ghost cells color",
                color: r,
                onChange: p,
              }),
            ],
          });
        }),
        cs = "SET_MUTLIBOX_RING_STYLE",
        ls = "SET_MULTIBOX_LINED_RING_SIZE",
        us = "SET_MULTIBOX_INITIAL_RING_COLOR",
        ds = "SET_MULTIBOX_FOCUSED_RING_COLOR",
        bs = "SET_MULTIBOX_INITIAL_STATIC_CELL_COLOR",
        gs = "SET_MULTIBOX_FOCUSED_STATIC_CELL_COLOR",
        ps = (function () {
          function e() {
            Object(O.a)(this, e);
          }
          return (
            Object(S.a)(e, null, [
              {
                key: "setMultiboxRingStyle",
                value: function (e) {
                  window.GameSettings.all.settings.theming.multibox.ringStyle =
                    e;
                },
              },
              {
                key: "setMultiboxLinedRingSize",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.multibox.linedRingSize =
                    e),
                    window.GameSettings.updateThemingMultibox("LinedRing");
                },
              },
              {
                key: "setMultiboxInitialRingColor",
                value: function (e) {
                  window.GameSettings.all.settings.theming.multibox.initialRingColor =
                    e;
                },
              },
              {
                key: "setMultiboxFocusedRingColor",
                value: function (e) {
                  window.GameSettings.all.settings.theming.multibox.focusedRingColor =
                    e;
                },
              },
              {
                key: "setMultiboxInitialStaticCellColor",
                value: function (e) {
                  window.GameSettings.all.settings.theming.multibox.initialStaticCellColor =
                    e;
                },
              },
              {
                key: "setMultiboxFocusedStaticCellColor",
                value: function (e) {
                  window.GameSettings.all.settings.theming.multibox.focusedStaticCellColor =
                    e;
                },
              },
            ]),
            e
          );
        })(),
        fs = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: cs, ringStyle: e };
              })(e)
            ),
              ps.setMultiboxRingStyle(e);
          };
        },
        ms = function (e) {
          return function (t) {
            t({ type: ls, linedRingSize: e }), ps.setMultiboxLinedRingSize(e);
          };
        },
        hs = function (e) {
          return function (t) {
            t({ type: us, initialRingColor: e }),
              ps.setMultiboxInitialRingColor(e);
          };
        },
        js = function (e) {
          return function (t) {
            t({ type: ds, focusedRingColor: e }),
              ps.setMultiboxFocusedRingColor(e);
          };
        },
        Os = function (e) {
          return function (t) {
            t({ type: bs, initialStaticCellColor: e }),
              ps.setMultiboxInitialStaticCellColor(e);
          };
        },
        Ss = function (e) {
          return function (t) {
            t({ type: gs, focusedStaticCellColor: e }),
              ps.setMultiboxFocusedStaticCellColor(e);
          };
        },
        ws = Object(j.b)(
          function (e) {
            var t = e.settings;
            return Object(et.a)({}, t.theming.multibox);
          },
          function (e) {
            return {
              setMultiboxRingStyle: function (t) {
                return e(fs(t));
              },
              setMultiboxLinderRingSize: function (t) {
                return e(ms(t));
              },
              setMultiboxInitialRingColor: function (t) {
                return e(hs(t));
              },
              setMultiboxFocusedRingColor: function (t) {
                return e(js(t));
              },
              setMultiboxInitialStaticCellColor: function (t) {
                return e(Os(t));
              },
              setMultiboxFocusedStaticCellColor: function (t) {
                return e(Ss(t));
              },
            };
          }
        )(function (e) {
          var t = e.ringStyle,
            n = e.linedRingSize,
            a = e.initialRingColor,
            o = e.focusedRingColor,
            s = e.initialStaticCellColor,
            i = e.focusedStaticCellColor,
            r = e.setMultiboxRingStyle,
            c = e.setMultiboxLinderRingSize,
            l = e.setMultiboxInitialRingColor,
            u = e.setMultiboxFocusedRingColor,
            d = e.setMultiboxInitialStaticCellColor,
            b = e.setMultiboxFocusedStaticCellColor;
          return Object(at.jsxs)(at.Fragment, {
            children: [
              Object(at.jsx)(St, {
                text: "Ring style",
                items: ["Author", "Line"],
                selectedItem: t,
                onChange: r,
              }),
              Object(at.jsx)(_n, {
                text: "Lined ring size",
                from: 5,
                to: 200,
                value: n,
                onChange: c,
                disabled: "Line" !== t,
              }),
              Object(at.jsx)(Pa, {
                text: "Initial ring color",
                color: a,
                onChange: l,
              }),
              Object(at.jsx)(Pa, {
                text: "Focused ring color",
                color: o,
                onChange: u,
              }),
              Object(at.jsx)(Pa, {
                text: "Initial static cell color",
                color: s,
                onChange: d,
              }),
              Object(at.jsx)(Pa, {
                text: "Focused static cell color",
                color: i,
                onChange: b,
              }),
            ],
          });
        }),
        ys = "SET_VIRUS_COLOR",
        _s = "SET_VIRUS_BORDER_WIDTH",
        Cs = "SET_VIRUS_BORDER_COLOR",
        Ts = "SET_VIRUS_GLOW",
        ks = "SET_VIRUS_GLOW_COLOR",
        vs = "SET_VIRUS_GLOW_DISTANCE",
        xs = "SET_VIRUS_GLOW_STRENGTH",
        Es = "SET_VIRUS_TRANSPARENCY",
        Ms = "SET_VIRUS_MASS_TYPE",
        As = "SET_FILL_CIRCLE_COLOR",
        Is = (function () {
          function e() {
            Object(O.a)(this, e);
          }
          return (
            Object(S.a)(e, null, [
              {
                key: "setVirusColor",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.viruses.color = e),
                    window.GameSettings.updateThemingViruses();
                },
              },
              {
                key: "setVirusBorderWidth",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.viruses.borderWidth =
                    e),
                    window.GameSettings.updateThemingViruses();
                },
              },
              {
                key: "setVirusBorderColor",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.viruses.borderColor =
                    e),
                    window.GameSettings.updateThemingViruses();
                },
              },
              {
                key: "setVirusGlow",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.viruses.glow = e),
                    window.GameSettings.updateThemingViruses();
                },
              },
              {
                key: "setVirusGlowColor",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.viruses.glowColor =
                    e),
                    window.GameSettings.updateThemingViruses();
                },
              },
              {
                key: "setVirusGlowDistance",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.viruses.glowDistance =
                    e),
                    window.GameSettings.updateThemingViruses();
                },
              },
              {
                key: "setVirusGlowStrength",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.viruses.glowStrength =
                    e),
                    window.GameSettings.updateThemingViruses();
                },
              },
              {
                key: "setVirusTransparency",
                value: function (e) {
                  (window.GameSettings.all.settings.theming.viruses.transparency =
                    e),
                    window.GameSettings.updateThemingViruses();
                },
              },
              {
                key: "setVirusMassType",
                value: function (e) {
                  window.GameSettings.all.settings.theming.viruses.massType = e;
                },
              },
              {
                key: "setFillCircleColor",
                value: function (e) {
                  window.GameSettings.all.settings.theming.viruses.fillCircleColor =
                    e;
                },
              },
            ]),
            e
          );
        })(),
        Gs = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: ys, color: e };
              })(e)
            ),
              Is.setVirusColor(e);
          };
        },
        Ns = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: _s, borderWidth: e };
              })(e)
            ),
              Is.setVirusBorderWidth(e);
          };
        },
        Rs = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Cs, borderColor: e };
              })(e)
            ),
              Is.setVirusBorderColor(e);
          };
        },
        Ps = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Ts, glow: e };
              })(e)
            ),
              Is.setVirusGlow(e);
          };
        },
        Ls = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: ks, glowColor: e };
              })(e)
            ),
              Is.setVirusGlowColor(e);
          };
        },
        Bs = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: vs, glowDistance: e };
              })(e)
            ),
              Is.setVirusGlowDistance(e);
          };
        },
        Fs = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: xs, glowStrength: e };
              })(e)
            ),
              Is.setVirusGlowStrength(e);
          };
        },
        Ds = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Es, transparency: e };
              })(e)
            ),
              Is.setVirusTransparency(e);
          };
        },
        Us = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Ms, massType: e };
              })(e)
            ),
              Is.setVirusMassType(e);
          };
        },
        Ks = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: As, fillCircleColor: e };
              })(e)
            ),
              Is.setFillCircleColor(e);
          };
        },
        Hs = Object(j.b)(
          function (e) {
            var t = e.settings;
            return Object(et.a)({}, t.theming.viruses);
          },
          function (e) {
            return {
              setVirusColor: function (t) {
                return e(Gs(t));
              },
              setVirusBorderColor: function (t) {
                return e(Rs(t));
              },
              setVirusBorderWidth: function (t) {
                return e(Ns(t));
              },
              setVirusGlow: function (t) {
                return e(Ps(t));
              },
              setVirusGlowColor: function (t) {
                return e(Ls(t));
              },
              setVirusGlowDistance: function (t) {
                return e(Bs(t));
              },
              setVirusGlowStrength: function (t) {
                return e(Fs(t));
              },
              setVirusTransparency: function (t) {
                return e(Ds(t));
              },
              setVirusMassType: function (t) {
                return e(Us(t));
              },
              setFillCircleColor: function (t) {
                return e(Ks(t));
              },
            };
          }
        )(function (e) {
          var t = e.color,
            n = e.borderColor,
            a = e.borderWidth,
            o = e.glow,
            s = e.glowColor,
            i = e.glowDistance,
            r = e.glowStrength,
            c = e.transparency,
            l = e.massType,
            u = e.fillCircleColor,
            d = e.setVirusColor,
            b = e.setVirusBorderColor,
            g = e.setVirusBorderWidth,
            p = e.setVirusGlow,
            f = e.setVirusGlowColor,
            m = e.setVirusGlowDistance,
            h = e.setVirusGlowStrength,
            j = e.setVirusTransparency,
            O = e.setVirusMassType,
            S = e.setFillCircleColor;
          return Object(at.jsxs)(at.Fragment, {
            children: [
              Object(at.jsx)(Pa, {
                text: "Color",
                color: t,
                onChange: d,
                useAlpha: !0,
              }),
              Object(at.jsx)(Pa, {
                text: "Border color",
                color: n,
                onChange: b,
              }),
              Object(at.jsx)(_n, {
                text: "Border width",
                from: 5,
                to: 30,
                value: a,
                onChange: g,
              }),
              Object(at.jsx)(ht, { text: "Glow", enabled: o, onChange: p }),
              Object(at.jsx)(Pa, {
                text: "Glow color",
                color: s,
                onChange: f,
                disabled: !o,
              }),
              Object(at.jsx)(_n, {
                text: "Glow distance",
                from: 10,
                to: 150,
                value: i,
                onChange: m,
                disabled: !o,
              }),
              Object(at.jsx)(_n, {
                text: "Glow strength",
                from: 2,
                to: 30,
                value: r,
                onChange: h,
                disabled: !o,
              }),
              Object(at.jsx)(_n, {
                text: "Transparency",
                from: 0.1,
                to: 1,
                value: c,
                onChange: j,
              }),
              Object(at.jsx)(St, {
                text: "Mass type",
                items: ["Disabled", "Full mass", "Shots amount", "Fill circle"],
                selectedItem: l,
                onChange: O,
              }),
              Object(at.jsx)(Pa, {
                text: "Fill circle color",
                color: u,
                onChange: S,
                disabled: "Fill circle" !== l,
                useAlpha: !0,
              }),
            ],
          });
        }),
        Ws = Object(j.b)(
          function (e) {
            var t = e.UI;
            return {
              settingsSubmenu: t.themingSettingsSubmenu,
              settingsShown: t.settingsShown,
            };
          },
          function (e) {
            return {
              setSettingsSubmenu: function (t) {
                return e({ type: ae, themingSettingsSubmenu: t });
              },
            };
          }
        )(function (e) {
          var t = e.settingsShown,
            n = e.settingsSubmenu,
            a = e.setSettingsSubmenu;
          return Object(at.jsxs)(at.Fragment, {
            children: [
              Object(at.jsxs)(dt, {
                children: [
                  Object(at.jsxs)("button", {
                    className: Qe()(
                      Object(r.a)({}, va.a.selected, "THEMING_CELLS" === n)
                    ),
                    onClick: function () {
                      return a("THEMING_CELLS");
                    },
                    children: [Object(at.jsx)(h.a, { icon: m.i }), " Cells"],
                  }),
                  Object(at.jsxs)("button", {
                    className: Qe()(
                      Object(r.a)({}, va.a.selected, "THEMING_VIRUSES" === n)
                    ),
                    onClick: function () {
                      return a("THEMING_VIRUSES");
                    },
                    children: [Object(at.jsx)(h.a, { icon: m.J }), " Viruses"],
                  }),
                  Object(at.jsxs)("button", {
                    className: Qe()(
                      Object(r.a)({}, va.a.selected, "THEMING_FOOD" === n)
                    ),
                    onClick: function () {
                      return a("THEMING_FOOD");
                    },
                    children: [Object(at.jsx)(h.a, { icon: xa.a }), " Food"],
                  }),
                  Object(at.jsxs)("button", {
                    className: Qe()(
                      Object(r.a)({}, va.a.selected, "THEMING_MAP" === n)
                    ),
                    onClick: function () {
                      return a("THEMING_MAP");
                    },
                    children: [Object(at.jsx)(h.a, { icon: xa.b }), " Map"],
                  }),
                  Object(at.jsxs)("button", {
                    className: Qe()(
                      Object(r.a)({}, va.a.selected, "THEMING_MINIMAP" === n)
                    ),
                    onClick: function () {
                      return a("THEMING_MINIMAP");
                    },
                    children: [Object(at.jsx)(h.a, { icon: m.v }), " Minimap"],
                  }),
                  Object(at.jsxs)("button", {
                    className: Qe()(
                      Object(r.a)({}, va.a.selected, "THEMING_MULTIBOX" === n)
                    ),
                    onClick: function () {
                      return a("THEMING_MULTIBOX");
                    },
                    children: [Object(at.jsx)(h.a, { icon: m.m }), " Multibox"],
                  }),
                  Object(at.jsxs)("button", {
                    className: Qe()(
                      Object(r.a)({}, va.a.selected, "THEMING_VIEWPORTS" === n)
                    ),
                    onClick: function () {
                      return a("THEMING_VIEWPORTS");
                    },
                    children: [
                      Object(at.jsx)(h.a, { icon: m.e }),
                      " Viewports",
                    ],
                  }),
                ],
              }),
              Object(at.jsxs)(pt, {
                children: [
                  Object(at.jsx)(Lt, {
                    shown: "THEMING_CELLS" === n && t,
                    children: Object(at.jsx)(io, {}),
                  }),
                  Object(at.jsx)(Lt, {
                    shown: "THEMING_VIRUSES" === n && t,
                    children: Object(at.jsx)(Hs, {}),
                  }),
                  Object(at.jsx)(Lt, {
                    shown: "THEMING_FOOD" === n && t,
                    children: Object(at.jsx)(ro, {}),
                  }),
                  Object(at.jsx)(Lt, {
                    shown: "THEMING_MAP" === n && t,
                    children: Object(at.jsx)(Vo, {}),
                  }),
                  Object(at.jsx)(Lt, {
                    shown: "THEMING_MULTIBOX" === n && t,
                    children: Object(at.jsx)(ws, {}),
                  }),
                  Object(at.jsx)(Lt, {
                    shown: "THEMING_MINIMAP" === n && t,
                    children: Object(at.jsx)(rs, {}),
                  }),
                ],
              }),
            ],
          });
        }),
        Vs = n(71),
        zs = n.n(Vs),
        Ys = new (function e() {
          Object(O.a)(this, e), (this.lastUsedElementForUnfocus = null);
        })(),
        Xs = n(72),
        qs = n.n(Xs),
        Zs = function (e) {
          var t = e.text,
            n = e.hint,
            a = e.value,
            o = e.onChage;
          return Object(at.jsxs)("div", {
            className: qs.a.wrap,
            children: [
              t &&
                Object(at.jsxs)("div", {
                  className: qs.a.text,
                  children: [
                    t,
                    n &&
                      Object(at.jsx)("span", {
                        className: qs.a.hint,
                        children: n,
                      }),
                  ],
                }),
              Object(at.jsx)("input", {
                value: a || "[NOT SET]",
                onKeyDown: function (e) {
                  e.preventDefault(), (Ys.lastUsedElementForUnfocus = e.target);
                  var t = e.code,
                    n = e.ctrlKey,
                    a = e.altKey,
                    s = e.shiftKey,
                    i = w(t, n, a, s);
                  "Escape" !== t &&
                    "Enter" !== t &&
                    o("Delete" !== t ? i : "[NOT SET]");
                },
                onChange: function (e) {
                  return e.preventDefault();
                },
              }),
            ],
          });
        },
        Js = (function () {
          function e() {
            Object(O.a)(this, e),
              (this.prevBindedCommands = [
                { key: "-not-set-", message: "" },
                { key: "-not-set-", message: "" },
                { key: "-not-set-", message: "" },
                { key: "-not-set-", message: "" },
                { key: "-not-set-", message: "" },
                { key: "-not-set-", message: "" },
                { key: "-not-set-", message: "" },
                { key: "-not-set-", message: "" },
                { key: "-not-set-", message: "" },
                { key: "-not-set-", message: "" },
                { key: "-not-set-", message: "" },
                { key: "-not-set-", message: "" },
                { key: "-not-set-", message: "" },
                { key: "-not-set-", message: "" },
                { key: "-not-set-", message: "" },
                { key: "-not-set-", message: "" },
                { key: "-not-set-", message: "" },
                { key: "-not-set-", message: "" },
                { key: "-not-set-", message: "" },
                { key: "-not-set-", message: "" },
              ]),
              (this.prevBindedKeys = {
                feedKey: "-not-set-",
                macroFeedKey: "-not-set-",
                splitKey: "-not-set-",
                doubleSplitKey: "-not-set-",
                tripleSplitKey: "-not-set-",
                splitSixteenKey: "-not-set-",
                quickRespawnKey: "-not-set-",
                pauseCellKey: "-not-set-",
                toggleCellHelpersKey: "-not-set-",
                toggleCellRingsKey: "-not-set-",
                toggleCellSkinsKey: "-not-set-",
                switchTabsKey: "-not-set-",
                toggleFoodRenderKey: "-not-set-",
                toggleSpectatorModeKey: "-not-set-",
                toggleHudsKey: "-not-set-",
                commands: this.prevBindedCommands,
              });
          }
          return (
            Object(S.a)(e, [
              {
                key: "init",
                value: function (e) {
                  var t = this;
                  this.bindFeed(e.feedKey),
                    this.bindMacroFeed(e.macroFeedKey),
                    this.bindSplit(e.splitKey),
                    this.bindDoubleSplit(e.doubleSplitKey),
                    this.bindTripleSplit(e.tripleSplitKey),
                    this.bindSplitSixteen(e.splitSixteenKey),
                    this.bindQuickRespawn(e.quickRespawnKey),
                    this.bindPauseCell(e.pauseCellKey),
                    this.bindToggleCellHelpersKey(e.toggleCellHelpersKey),
                    this.bindToggleCellRingsKey(e.toggleCellRingsKey),
                    this.bindToggleCellSkinsKey(e.toggleCellSkinsKey),
                    this.bindSwitchTabsKey(e.switchTabsKey),
                    this.bindToggleFoodRenderKey(e.toggleFoodRenderKey),
                    this.bindToggleSpectatorModeKey(e.toggleSpectatorModeKey),
                    this.bindToggleHuds(e.toggleHudsKey),
                    e.commands.forEach(function (e, n) {
                      t.bindCommand(n, e.key, e.message);
                    });
                },
              },
              {
                key: "isUsedByKeyboard",
                value: function (e) {
                  var t = !1;
                  for (var n in this.prevBindedKeys) {
                    var a = this.prevBindedKeys[n];
                    if ("string" === typeof a) {
                      if ("-not-set-" === a || "" === a) continue;
                      a === e && (t = !0);
                    }
                  }
                  return t;
                },
              },
              {
                key: "rebind",
                value: function (e, t, n, a) {
                  C.removeBinded(n, e), C.bindFunctionToKey(n, t, a);
                },
              },
              {
                key: "bindCommand",
                value: function (e, t, n) {
                  (this.prevBindedCommands[e].key === t &&
                    this.prevBindedCommands[e].message === n) ||
                    (this.rebind(
                      this.prevBindedCommands[e].key,
                      t,
                      "down",
                      function () {
                        !(function (e) {
                          var t;
                          null === (t = window.GameAPI) ||
                            void 0 === t ||
                            t.sendCommand(e);
                        })(n);
                      }
                    ),
                    (this.prevBindedCommands[e].key = t),
                    (this.prevBindedCommands[e].message = n));
                },
              },
              {
                key: "bindFeed",
                value: function (e) {
                  this.prevBindedKeys.feedKey !== e &&
                    (this.rebind(this.prevBindedKeys.feedKey, e, "down", we),
                    (this.prevBindedKeys.feedKey = e));
                },
              },
              {
                key: "bindMacroFeed",
                value: function (e) {
                  this.prevBindedKeys.macroFeedKey !== e &&
                    (this.rebind(
                      this.prevBindedKeys.macroFeedKey,
                      e,
                      "down",
                      ye
                    ),
                    this.rebind(this.prevBindedKeys.macroFeedKey, e, "up", _e),
                    (this.prevBindedKeys.macroFeedKey = e));
                },
              },
              {
                key: "bindSplit",
                value: function (e) {
                  this.prevBindedKeys.splitKey !== e &&
                    (this.rebind(this.prevBindedKeys.splitKey, e, "down", Ce),
                    (this.prevBindedKeys.splitKey = e));
                },
              },
              {
                key: "bindDoubleSplit",
                value: function (e) {
                  this.prevBindedKeys.doubleSplitKey !== e &&
                    (this.rebind(
                      this.prevBindedKeys.doubleSplitKey,
                      e,
                      "down",
                      Te
                    ),
                    (this.prevBindedKeys.doubleSplitKey = e));
                },
              },
              {
                key: "bindTripleSplit",
                value: function (e) {
                  this.prevBindedKeys.tripleSplitKey !== e &&
                    (this.rebind(
                      this.prevBindedKeys.tripleSplitKey,
                      e,
                      "down",
                      ke
                    ),
                    (this.prevBindedKeys.tripleSplitKey = e));
                },
              },
              {
                key: "bindSplitSixteen",
                value: function (e) {
                  this.prevBindedKeys.splitSixteenKey !== e &&
                    (this.rebind(
                      this.prevBindedKeys.splitSixteenKey,
                      e,
                      "down",
                      ve
                    ),
                    (this.prevBindedKeys.splitSixteenKey = e));
                },
              },
              {
                key: "bindQuickRespawn",
                value: function (e) {
                  this.prevBindedKeys.quickRespawnKey !== e &&
                    (this.rebind(
                      this.prevBindedKeys.quickRespawnKey,
                      e,
                      "down",
                      xe
                    ),
                    (this.prevBindedKeys.quickRespawnKey = e));
                },
              },
              {
                key: "bindPauseCell",
                value: function (e) {
                  this.prevBindedKeys.pauseCellKey !== e &&
                    (this.rebind(
                      this.prevBindedKeys.pauseCellKey,
                      e,
                      "down",
                      Ee
                    ),
                    (this.prevBindedKeys.pauseCellKey = e));
                },
              },
              {
                key: "bindToggleCellHelpersKey",
                value: function (e) {
                  this.prevBindedKeys.toggleCellHelpersKey !== e &&
                    (this.rebind(
                      this.prevBindedKeys.toggleCellHelpersKey,
                      e,
                      "down",
                      Me
                    ),
                    (this.prevBindedKeys.toggleCellHelpersKey = e));
                },
              },
              {
                key: "bindToggleCellRingsKey",
                value: function (e) {
                  this.prevBindedKeys.toggleCellRingsKey !== e &&
                    (this.rebind(
                      this.prevBindedKeys.toggleCellRingsKey,
                      e,
                      "down",
                      Ie
                    ),
                    (this.prevBindedKeys.toggleCellRingsKey = e));
                },
              },
              {
                key: "bindToggleCellSkinsKey",
                value: function (e) {
                  this.prevBindedKeys.toggleCellSkinsKey !== e &&
                    (this.rebind(
                      this.prevBindedKeys.toggleCellSkinsKey,
                      e,
                      "down",
                      Ae
                    ),
                    (this.prevBindedKeys.toggleCellSkinsKey = e));
                },
              },
              {
                key: "bindSwitchTabsKey",
                value: function (e) {
                  this.prevBindedKeys.switchTabsKey !== e &&
                    (this.rebind(
                      this.prevBindedKeys.switchTabsKey,
                      e,
                      "down",
                      Ge
                    ),
                    (this.prevBindedKeys.switchTabsKey = e));
                },
              },
              {
                key: "bindToggleFoodRenderKey",
                value: function (e) {
                  this.prevBindedKeys.toggleFoodRenderKey !== e &&
                    (this.rebind(
                      this.prevBindedKeys.toggleFoodRenderKey,
                      e,
                      "down",
                      Re
                    ),
                    (this.prevBindedKeys.toggleFoodRenderKey = e));
                },
              },
              {
                key: "bindToggleSpectatorModeKey",
                value: function (e) {
                  this.prevBindedKeys.toggleSpectatorModeKey !== e &&
                    (this.rebind(
                      this.prevBindedKeys.toggleSpectatorModeKey,
                      e,
                      "down",
                      Ne
                    ),
                    (this.prevBindedKeys.toggleSpectatorModeKey = e));
                },
              },
              {
                key: "bindToggleHuds",
                value: function (e) {
                  this.prevBindedKeys.toggleHudsKey !== e &&
                    (this.rebind(
                      this.prevBindedKeys.toggleHudsKey,
                      e,
                      "down",
                      Pe
                    ),
                    (this.prevBindedKeys.toggleHudsKey = e));
                },
              },
            ]),
            e
          );
        })(),
        Qs = new Js(),
        $s = "SET_FEED",
        ei = "SET_MACRO_FEED",
        ti = "SET_SPLIT",
        ni = "SET_DOUBLE_SPLIT",
        ai = "SET_TRIPLE_SPLIT",
        oi = "SET_SPLIT_SIXTEEN",
        si = "SET_QUICK_RESPAWN",
        ii = "SET_PAUSE_CELL",
        ri = "SET_TOGGLE_CELL_HELPERS",
        ci = "SET_TOGGLE_CELL_SKINS",
        li = "SET_TOGGLE_CELL_RINGS",
        ui = "SET_SWITCH_TABS",
        di = "SET_TOGGLE_FOOD_RENDER",
        bi = "SET_TOGGLE_SPECTATOR_MODE",
        gi = "SET_TOGGLE_HUDS",
        pi = function (e) {
          return function (t) {
            t({ type: $s, feed: e }), Qs.bindFeed(e);
          };
        },
        fi = function (e) {
          return function (t) {
            t({ type: ei, macroFeed: e }), Qs.bindMacroFeed(e);
          };
        },
        mi = function (e) {
          return function (t) {
            t({ type: ti, split: e }), Qs.bindSplit(e);
          };
        },
        hi = function (e) {
          return function (t) {
            t({ type: ni, doubleSplit: e }), Qs.bindDoubleSplit(e);
          };
        },
        ji = function (e) {
          return function (t) {
            t({ type: ai, tripleSplit: e }), Qs.bindTripleSplit(e);
          };
        },
        Oi = function (e) {
          return function (t) {
            t({ type: oi, splitSixteen: e }), Qs.bindSplitSixteen(e);
          };
        },
        Si = function (e) {
          return function (t) {
            t({ type: si, quickRespawn: e }), Qs.bindQuickRespawn(e);
          };
        },
        wi = function (e) {
          return function (t) {
            t({ type: ii, pauseCell: e }), Qs.bindPauseCell(e);
          };
        },
        yi = function (e) {
          return function (t) {
            t({ type: ri, toggleCellHelpers: e }),
              Qs.bindToggleCellHelpersKey(e);
          };
        },
        _i = function (e) {
          return function (t) {
            t({ type: ci, toggleCellSkins: e }), Qs.bindToggleCellSkinsKey(e);
          };
        },
        Ci = function (e) {
          return function (t) {
            t({ type: li, toggleCellRings: e }), Qs.bindToggleCellRingsKey(e);
          };
        },
        Ti = function (e) {
          return function (t) {
            t({ type: ui, switchTabs: e }), Qs.bindSwitchTabsKey(e);
          };
        },
        ki = function (e) {
          return function (t) {
            t({ type: di, toggleFoodRender: e }), Qs.bindToggleFoodRenderKey(e);
          };
        },
        vi = function (e) {
          return function (t) {
            t({ type: bi, toggleSpectatorMode: e }),
              Qs.bindToggleSpectatorModeKey(e);
          };
        },
        xi = function (e) {
          return function (t) {
            t({ type: gi, toggleHuds: e }), Qs.bindToggleHuds(e);
          };
        },
        Ei = n(138),
        Mi = n.n(Ei),
        Ai = function (e) {
          var t = e.text;
          return Object(at.jsx)("div", { className: Mi.a.wrap, children: t });
        },
        Ii = Object(j.b)(
          function (e) {
            var t = e.settings;
            return Object(et.a)({}, t.hotkeys.keyboard);
          },
          function (e) {
            return {
              setFeed: function (t) {
                return e(pi(t));
              },
              setMacroFeed: function (t) {
                return e(fi(t));
              },
              setSplit: function (t) {
                return e(mi(t));
              },
              setDoubleSplit: function (t) {
                return e(hi(t));
              },
              setTripleSplit: function (t) {
                return e(ji(t));
              },
              setSplitSixteen: function (t) {
                return e(Oi(t));
              },
              setQuickRespawn: function (t) {
                return e(Si(t));
              },
              setPauseCell: function (t) {
                return e(wi(t));
              },
              setToggleCellHelpers: function (t) {
                return e(yi(t));
              },
              setToggleCellSkins: function (t) {
                return e(_i(t));
              },
              setToggleCellRings: function (t) {
                return e(Ci(t));
              },
              setSwitchTabs: function (t) {
                return e(Ti(t));
              },
              setToggleFoodRender: function (t) {
                return e(ki(t));
              },
              setToggleSpectatorMode: function (t) {
                return e(vi(t));
              },
              setToggleHuds: function (t) {
                return e(xi(t));
              },
            };
          }
        )(function (e) {
          var t = e.feed,
            n = e.macroFeed,
            a = e.split,
            o = e.doubleSplit,
            s = e.tripleSplit,
            i = e.splitSixteen,
            r = e.quickRespawn,
            c = e.pauseCell,
            l = e.toggleCellHelpers,
            u = e.toggleCellSkins,
            d = e.toggleCellRings,
            b = e.switchTabs,
            g = e.toggleFoodRender,
            p = e.toggleSpectatorMode,
            f = e.toggleHuds,
            m = e.setFeed,
            h = e.setMacroFeed,
            j = e.setSplit,
            O = e.setDoubleSplit,
            S = e.setTripleSplit,
            w = e.setSplitSixteen,
            y = e.setQuickRespawn,
            _ = e.setPauseCell,
            C = e.setToggleCellHelpers,
            T = e.setToggleCellSkins,
            k = e.setToggleCellRings,
            v = e.setSwitchTabs,
            x = e.setToggleFoodRender,
            E = e.setToggleSpectatorMode,
            M = e.setToggleHuds;
          return Object(at.jsxs)(at.Fragment, {
            children: [
              Object(at.jsx)(Ai, {
                text: "Use DEL (Delete) key to unbind keybinding",
              }),
              Object(at.jsx)(Zs, { text: "Feed", value: t, onChage: m }),
              Object(at.jsx)(Zs, { text: "Macro feed", value: n, onChage: h }),
              Object(at.jsx)(Zs, { text: "Split", value: a, onChage: j }),
              Object(at.jsx)(Zs, {
                text: "Double split",
                value: o,
                onChage: O,
              }),
              Object(at.jsx)(Zs, {
                text: "Triple split",
                value: s,
                onChage: S,
              }),
              Object(at.jsx)(Zs, { text: "Split 16", value: i, onChage: w }),
              Object(at.jsx)(Zs, {
                text: "Switch tabs (multibox)",
                value: b,
                onChage: v,
              }),
              Object(at.jsx)(Zs, {
                text: "Quick respawn",
                value: r,
                onChage: y,
              }),
              Object(at.jsx)(Zs, { text: "Pause cell", value: c, onChage: _ }),
              Object(at.jsx)(Zs, {
                text: "Toggle cell helpers",
                value: l,
                onChage: C,
              }),
              Object(at.jsx)(Zs, {
                text: "Toggle cell skins",
                value: u,
                onChage: T,
              }),
              Object(at.jsx)(Zs, {
                text: "Toggle cell rings",
                value: d,
                onChage: k,
              }),
              Object(at.jsx)(Zs, {
                text: "Toggle food visibility",
                value: g,
                onChage: x,
              }),
              Object(at.jsx)(Zs, {
                text: "Toggle spectator mode visibility",
                value: p,
                onChage: E,
              }),
              Object(at.jsx)(Zs, { text: "Toggle huds", value: f, onChage: M }),
            ],
          });
        }),
        Gi = function (e) {
          return function (t) {
            t({ type: Be, left: e }), He.bindLeft(e);
          };
        },
        Ni = function (e) {
          return function (t) {
            t({ type: Fe, right: e }), He.bindRight(e);
          };
        },
        Ri = function (e) {
          return function (t) {
            t({ type: De, middle: e }), He.bindMiddle(e);
          };
        },
        Pi = Object(j.b)(
          function (e) {
            return Object(et.a)({}, e.settings.hotkeys.mouse);
          },
          function (e) {
            return {
              setLeft: function (t) {
                return e(Gi(t));
              },
              setRight: function (t) {
                return e(Ni(t));
              },
              setMiddle: function (t) {
                return e(Ri(t));
              },
            };
          }
        )(function (e) {
          var t = e.left,
            n = e.right,
            a = e.middle,
            o = e.setLeft,
            s = e.setRight,
            i = e.setMiddle;
          return Object(at.jsxs)(at.Fragment, {
            children: [
              Object(at.jsx)(St, {
                text: "Left click",
                items: Ke,
                selectedItem: t,
                onChange: o,
              }),
              Object(at.jsx)(St, {
                text: "Middle click",
                items: Ke,
                selectedItem: a,
                onChange: i,
              }),
              Object(at.jsx)(St, {
                text: "Right click",
                items: Ke,
                selectedItem: n,
                onChange: s,
              }),
            ],
          });
        }),
        Li = n(36),
        Bi = n.n(Li),
        Fi = function (e) {
          var t,
            n = e.name,
            o = e.id,
            s = e.keybind,
            i = e.message,
            c = e.onChange,
            l = Object(a.useState)(!1),
            u = Object(Xe.a)(l, 2),
            d = u[0],
            b = u[1],
            g = Object(a.useState)(""),
            p = Object(Xe.a)(g, 2),
            f = p[0],
            m = p[1];
          return Object(at.jsxs)("div", {
            className: Bi.a.wrap,
            children: [
              Object(at.jsxs)("div", {
                className: Bi.a.top,
                children: [
                  Object(at.jsxs)("div", {
                    className: Bi.a.topWrapper,
                    children: [
                      Object(at.jsxs)("div", { children: [n, " #", o + 1] }),
                      Object(at.jsx)(Zs, {
                        text: "",
                        value: s,
                        onChage: function (e) {
                          Qs.isUsedByKeyboard(e)
                            ? (m(e),
                              b(!0),
                              setTimeout(function () {
                                return b(!1);
                              }, 4e3))
                            : (m(""), b(!1), c(o, i, e));
                        },
                      }),
                    ],
                  }),
                  Object(at.jsx)("div", {
                    className: Bi.a.text,
                    children: Object(at.jsx)("input", {
                      placeholder: "Command text",
                      value: i,
                      onChange: function (e) {
                        return c(o, e.target.value, s);
                      },
                    }),
                  }),
                ],
              }),
              Object(at.jsxs)("div", {
                className: Qe()(
                  ((t = {}),
                  Object(r.a)(t, Bi.a.error, !0),
                  Object(r.a)(t, Bi.a.shown, d),
                  t)
                ),
                children: [
                  "Key -",
                  ">",
                  " ",
                  f,
                  " ",
                  "<",
                  '- is already used on "keyboard" page. Uset it to be able to use it as a command key',
                ],
              }),
            ],
          });
        },
        Di = "SET_COMMAND_HOTKEY",
        Ui = function (e, t, n) {
          return function (a) {
            a(
              (function (e, t, n) {
                return { type: Di, index: e, message: t, key: n };
              })(e, t, n)
            ),
              Qs.bindCommand(e, n, t);
          };
        },
        Ki = Object(j.b)(
          function (e) {
            return { commands: e.settings.hotkeys.commands };
          },
          function (e) {
            return {
              setCommand: function (t, n, a) {
                return e(Ui(t, n, a));
              },
            };
          }
        )(function (e) {
          var t = e.setCommand,
            n = e.commands;
          return Object(at.jsx)(at.Fragment, {
            children: n.map(function (e, n) {
              return Object(at.jsx)(
                Fi,
                {
                  name: "Command",
                  id: n,
                  keybind: e.key,
                  message: e.message,
                  onChange: t,
                },
                n
              );
            }),
          });
        }),
        Hi = Object(j.b)(
          function (e) {
            var t = e.UI;
            return {
              settingsSubmenu: t.hotkeysSettingsSubmenu,
              settingsShown: t.settingsShown,
            };
          },
          function (e) {
            return {
              setSettingsSubmenu: function (t) {
                return e({ type: oe, hotkeysSettingsSubmenu: t });
              },
            };
          }
        )(function (e) {
          var t = e.settingsSubmenu,
            n = e.settingsShown,
            a = e.setSettingsSubmenu;
          return Object(at.jsxs)(at.Fragment, {
            children: [
              Object(at.jsxs)(dt, {
                children: [
                  Object(at.jsxs)("button", {
                    className: Qe()(
                      Object(r.a)({}, zs.a.selected, "HOTKEYS_KEYBOARD" === t)
                    ),
                    onClick: function () {
                      return a("HOTKEYS_KEYBOARD");
                    },
                    children: [Object(at.jsx)(h.a, { icon: m.s }), " Keyboard"],
                  }),
                  Object(at.jsxs)("button", {
                    className: Qe()(
                      Object(r.a)({}, zs.a.selected, "HOTKEY_MOUSE" === t)
                    ),
                    onClick: function () {
                      return a("HOTKEY_MOUSE");
                    },
                    children: [Object(at.jsx)(h.a, { icon: m.x }), " Mouse"],
                  }),
                  Object(at.jsxs)("button", {
                    className: Qe()(
                      Object(r.a)({}, zs.a.selected, "HOTKEYS_COMMANDS" === t)
                    ),
                    onClick: function () {
                      return a("HOTKEYS_COMMANDS");
                    },
                    children: [Object(at.jsx)(h.a, { icon: m.j }), " Commands"],
                  }),
                ],
              }),
              Object(at.jsxs)(pt, {
                children: [
                  Object(at.jsx)(Lt, {
                    shown: "HOTKEYS_KEYBOARD" === t && n,
                    children: Object(at.jsx)(Ii, {}),
                  }),
                  Object(at.jsx)(Lt, {
                    shown: "HOTKEY_MOUSE" === t && n,
                    children: Object(at.jsx)(Pi, {}),
                  }),
                  Object(at.jsx)(Lt, {
                    shown: "HOTKEYS_COMMANDS" === t && n,
                    children: Object(at.jsx)(Ki, {}),
                  }),
                ],
              }),
            ],
          });
        }),
        Wi = n(44),
        Vi = n.n(Wi),
        zi = "SET_LEADERBOARD_SHOWN",
        Yi = "SET_LEADERBOARD_DISPLAY_AMOUNT",
        Xi = "SET_LEADERBOARD_DISPLAY_POSITION",
        qi = "SET_LEADERBOARD_SCALE",
        Zi = "SET_LEADERBOARD_SHOW_MASS",
        Ji = "SET_LEADERBOARD_BACKDROP_BLUR",
        Qi = "SET_LEADERBOARD_BACKGROUND_COLOR",
        $i = "SET_LEADERBOARD_ME_COLOR",
        er = "SET_LEADERBOARD_SHORT_MASS",
        tr = Ia(36, 5, 1),
        nr =
          (Ia(51, 0.5, 0.02, 2),
          Object(j.b)(
            function (e) {
              var t = e.settings;
              return Object(et.a)({}, t.UI.leaderboard);
            },
            function (e) {
              return {
                setLbShown: function (t) {
                  return e({ type: zi, shown: t });
                },
                setLbDisplayAmount: function (t) {
                  return e({ type: Yi, displayAmount: t });
                },
                setLbDisplayPosition: function (t) {
                  return e({ type: Xi, displayPosition: t });
                },
                setLbShowMass: function (t) {
                  return e({ type: Zi, showMass: t });
                },
                setLbBackdropBlur: function (t) {
                  return e({ type: Ji, backdropBlur: t });
                },
                setLbBackgroundColor: function (t) {
                  return e({ type: Qi, backgroundColor: t });
                },
                setLbMeColor: function (t) {
                  return e({ type: $i, meColor: t });
                },
                setLbShortMass: function (t) {
                  return e({ type: er, shortMass: t });
                },
              };
            }
          )(function (e) {
            var t = e.shown,
              n = e.displayAmount,
              a = e.displayPosition,
              o = e.showMass,
              s = e.backdropBlur,
              i = e.backgroundColor,
              r = e.meColor,
              c = e.shortMass,
              l = e.setLbShown,
              u = e.setLbDisplayAmount,
              d = e.setLbDisplayPosition,
              b = e.setLbShowMass,
              g = e.setLbBackdropBlur,
              p = e.setLbBackgroundColor,
              f = e.setLbMeColor,
              m = e.setLbShortMass;
            return Object(at.jsxs)(at.Fragment, {
              children: [
                Object(at.jsx)(ht, {
                  text: "Enabled",
                  enabled: t,
                  onChange: l,
                  main: !0,
                }),
                Object(at.jsx)(Pa, {
                  text: "Background color",
                  color: i,
                  onChange: p,
                  disabled: !t,
                  useAlpha: !0,
                }),
                Object(at.jsx)(ht, {
                  text: "Backdrop blur",
                  enabled: s,
                  onChange: g,
                  hint: "may cause performance issues if enabled",
                  disabled: !t,
                }),
                Object(at.jsx)(Pa, {
                  text: "My color",
                  color: r,
                  onChange: f,
                  disabled: !t,
                }),
                Object(at.jsx)(St, {
                  text: "Players amount",
                  items: tr,
                  selectedItem: n,
                  onChange: u,
                  disabled: !t,
                }),
                Object(at.jsx)(ht, {
                  text: "Players position",
                  enabled: a,
                  onChange: d,
                  disabled: !t,
                }),
                Object(at.jsx)(ht, {
                  text: "Show mass",
                  enabled: o,
                  onChange: b,
                  disabled: !t,
                }),
                Object(at.jsx)(ht, {
                  text: "Short mass (k)",
                  enabled: c,
                  onChange: m,
                  disabled: !t || !o,
                }),
              ],
            });
          })),
        ar = "SET_STATS_SHOWN",
        or = "SET_STATS_FPS_SHOWN",
        sr = "SET_STATS_LOSS_SHOWN",
        ir = "SET_STATS_BACKGROUND_COLOR",
        rr = "SET_STATS_BACKDROP_BLUR",
        cr = "SET_STATS_FRAMETIME",
        lr = "SET_STATS_TABS",
        ur = "SET_FIRST_TAB_STATUS",
        dr = "SET_SECOND_TAB_STATUS",
        br = "SET_SPECTATOR_TAB_STATUS",
        gr = Object(j.b)(
          function (e) {
            var t = e.settings;
            return Object(et.a)({}, t.UI.stats);
          },
          function (e) {
            return {
              setShown: function (t) {
                return e({ type: ar, shown: t });
              },
              setFps: function (t) {
                return e({ type: or, fps: t });
              },
              setLoss: function (t) {
                return e({ type: sr, loss: t });
              },
              setBackgroundColor: function (t) {
                return e({ type: ir, backgroundColor: t });
              },
              setBackdropBlur: function (t) {
                return e({ type: rr, backdropBlur: t });
              },
              setFrametime: function (t) {
                return e({ type: cr, frametime: t });
              },
              setPosition: function (t) {
                return e({ type: "", position: t });
              },
              setTabs: function (t) {
                return e({ type: lr, tabs: t });
              },
            };
          }
        )(function (e) {
          var t = e.shown,
            n = e.fps,
            a = e.loss,
            o = e.backgroundColor,
            s = e.backdropBlur,
            i = e.frametime,
            r = e.position,
            c = e.tabs,
            l = e.setShown,
            u = e.setFps,
            d = e.setLoss,
            b = e.setBackgroundColor,
            g = e.setBackdropBlur,
            p = e.setFrametime,
            f = e.setPosition,
            m = e.setTabs;
          return Object(at.jsxs)(at.Fragment, {
            children: [
              Object(at.jsx)(ht, {
                text: "Enabled",
                enabled: t,
                onChange: l,
                main: !0,
              }),
              Object(at.jsx)(St, {
                text: "Position",
                items: ["BOTTOM LEFT", "BOTTOM CENTER", "LEADERBOARD"],
                selectedItem: r,
                onChange: f,
                disabled: !t,
              }),
              Object(at.jsx)(Pa, {
                text: "Background color",
                color: o,
                onChange: b,
                disabled: !t,
                useAlpha: !0,
              }),
              Object(at.jsx)(ht, {
                text: "Backdrop blur",
                hint: "may cause performance issues if enabled",
                enabled: s,
                onChange: g,
                disabled: !t,
              }),
              Object(at.jsx)(ht, {
                text: "Show FPS",
                enabled: n,
                onChange: u,
                disabled: !t,
              }),
              Object(at.jsx)(ht, {
                text: "Show frametime",
                enabled: i,
                onChange: p,
                disabled: !t,
              }),
              Object(at.jsx)(ht, {
                text: "Show LOSS",
                enabled: a,
                onChange: d,
                disabled: !t,
              }),
              Object(at.jsx)(ht, {
                text: "Show tabs status",
                enabled: c,
                onChange: m,
                disabled: !t,
              }),
            ],
          });
        }),
        pr = "SET_TOP_TEAM_SHOWN",
        fr = "SET_TOP_TEAM_DISPLAY_AMOUNT",
        mr = "SET_TOP_TEAM_DISPLAY_PLAYER_MASS",
        hr = "SET_TOP_TEAM_TOTAL_MASS",
        jr = "SET_TOP_TEAM_TOTAL_PLAYERS",
        Or = "SET_TOP_TEAM_BACKGROUND_COLOR",
        Sr = "SET_TOP_TEAM_BACKDROP_BLUR",
        wr = "SET_TOP_TEAM_SHORT_MASS",
        yr = Ia(20, 1, 1),
        _r = Object(j.b)(
          function (e) {
            var t = e.settings;
            return Object(et.a)({}, t.UI.topTeam);
          },
          function (e) {
            return {
              setShown: function (t) {
                return e({ type: pr, shown: t });
              },
              setDisplayAmount: function (t) {
                return e({ type: fr, displayAmount: t });
              },
              setDisplayPlayerMass: function (t) {
                return e({ type: mr, displayPlayerMass: t });
              },
              setDisplayTotalMass: function (t) {
                return e({ type: hr, totalMass: t });
              },
              setShortMass: function (t) {
                return e({ type: wr, shortMass: t });
              },
              setTotalPlayers: function (t) {
                return e({ type: jr, totalPlayers: t });
              },
              setBackgroundColor: function (t) {
                return e({ type: Or, backgroundColor: t });
              },
              setBackdropBlur: function (t) {
                return e({ type: Sr, backdropBlur: t });
              },
            };
          }
        )(function (e) {
          var t = e.shown,
            n = e.displayAmount,
            a = e.displayPlayerMass,
            o = e.totalMass,
            s = e.shortMass,
            i = e.totalPlayers,
            r = e.backgroundColor,
            c = e.backdropBlur,
            l = e.setShown,
            u = e.setDisplayAmount,
            d = e.setDisplayPlayerMass,
            b = e.setDisplayTotalMass,
            g = e.setShortMass,
            p = e.setTotalPlayers,
            f = e.setBackgroundColor,
            m = e.setBackdropBlur;
          return Object(at.jsxs)(at.Fragment, {
            children: [
              Object(at.jsx)(ht, {
                text: "Enabled",
                enabled: t,
                onChange: l,
                main: !0,
              }),
              Object(at.jsx)(Pa, {
                text: "Background color",
                color: r,
                onChange: f,
                useAlpha: !0,
              }),
              Object(at.jsx)(ht, {
                text: "Backdrop blur",
                enabled: c,
                onChange: m,
                disabled: !t,
              }),
              Object(at.jsx)(St, {
                text: "Players amount to display",
                selectedItem: n,
                items: yr,
                onChange: u,
                disabled: !t,
              }),
              Object(at.jsx)(ht, {
                text: "Show players mass",
                enabled: a,
                onChange: d,
                disabled: !t,
              }),
              Object(at.jsx)(ht, {
                text: "Show total mass",
                enabled: o,
                onChange: b,
                disabled: !t,
              }),
              Object(at.jsx)(ht, {
                text: "Short mass (k)",
                enabled: s,
                onChange: g,
                disabled: !t,
              }),
              Object(at.jsx)(ht, {
                text: "Show total players",
                enabled: i,
                onChange: p,
                disabled: !t,
              }),
            ],
          });
        }),
        Cr = "SET_SPECTATE_SHOWN",
        Tr = "SET_SPECTATE_BACKGROUND_COLOR",
        kr = "SET_SPECTATE_BACKDROP_BLUR",
        vr = Object(j.b)(
          function (e) {
            var t = e.settings;
            return Object(et.a)({}, t.UI.spectate);
          },
          function (e) {
            return {
              setSpectateShown: function (t) {
                return e({ type: Cr, shown: t });
              },
              setSpectateBackgroundColor: function (t) {
                return e({ type: Tr, backgroundColor: t });
              },
              setSpectateBackdropBlur: function (t) {
                return e({ type: kr, backdropBlur: t });
              },
            };
          }
        )(function (e) {
          var t = e.shown,
            n = e.backgroundColor,
            a = e.backdropBlur,
            o = e.setSpectateShown,
            s = e.setSpectateBackgroundColor,
            i = e.setSpectateBackdropBlur;
          return Object(at.jsxs)(at.Fragment, {
            children: [
              Object(at.jsx)(ht, {
                text: "Enabled",
                enabled: t,
                onChange: o,
                main: !0,
              }),
              Object(at.jsx)(ht, {
                text: "Backdrop blur",
                enabled: a,
                onChange: i,
                disabled: !t,
              }),
              Object(at.jsx)(Pa, {
                text: "Background color",
                color: n,
                onChange: s,
                disabled: !t,
              }),
            ],
          });
        }),
        xr = "SET_CHAT_ENABLED",
        Er = "SET_CHAT_TYPE",
        Mr = "SET_CHAT_BACKGROUND_COLOR",
        Ar = "SET_CHAT_FONT_COLOR",
        Ir = "SET_CHAT_HEIGHT",
        Gr = "SET_CHAT_COMMAND_MESSAGE_BACKGROUND_COLOR",
        Nr = "SET_CHAT_COMMAND_MESSAGE_FONT_COLOR",
        Rr = "SET_CHAT_GAME_MESSAGE_BACKGROUND_COLOR",
        Pr = "SET_CHAT_GAME_MESSAGE_FONT_COLOR",
        Lr = Ia(20, 200, 20),
        Br = Object(j.b)(
          function (e) {
            var t = e.settings;
            return Object(et.a)({}, t.UI.chat);
          },
          function (e) {
            return {
              setEnabled: function (t) {
                return e({ type: xr, enabled: t });
              },
              setType: function (t) {
                return e({ type: Er, chatType: t });
              },
              setBackgroundColor: function (t) {
                return e({ type: Mr, backgroundColor: t });
              },
              setFontColor: function (t) {
                return e({ type: Ar, fontColor: t });
              },
              setHeight: function (t) {
                return e({ type: Ir, height: t });
              },
              setCommandMessageBackgroundColor: function (t) {
                return e({ type: Gr, commandMessageBackgroundColor: t });
              },
              setCommandMessageFontColor: function (t) {
                return e({ type: Nr, commandMessageFontColor: t });
              },
              setGameMessageBackgroundColor: function (t) {
                return e({ type: Rr, gameMessageBackgroundColor: t });
              },
              setGameMessageFontColor: function (t) {
                return e({ type: Pr, gameMessageFontColor: t });
              },
            };
          }
        )(function (e) {
          var t = e.enabled,
            n = e.chatType,
            a = e.height,
            o = e.backgroundColor,
            s = e.fontColor,
            i = e.commandMessageBackgroundColor,
            r = e.commandMessageFontColor,
            c = e.gameMessageBackgroundColor,
            l = e.gameMessageFontColor,
            u = e.setEnabled,
            d = e.setType,
            b = e.setHeight,
            g = e.setBackgroundColor,
            p = e.setFontColor,
            f = e.setCommandMessageBackgroundColor,
            m = e.setCommandMessageFontColor,
            h = e.setGameMessageBackgroundColor,
            j = e.setGameMessageFontColor;
          return Object(at.jsxs)(at.Fragment, {
            children: [
              Object(at.jsx)(ht, {
                text: "Enabled",
                enabled: t,
                onChange: u,
                main: !0,
              }),
              Object(at.jsx)(St, {
                text: "Type",
                items: ["CHATBOX", "POPUP"],
                selectedItem: n,
                onChange: d,
              }),
              Object(at.jsx)(St, {
                text: "Height",
                items: Lr,
                selectedItem: a,
                onChange: b,
              }),
              Object(at.jsx)(Pa, {
                text: "Background color",
                color: o,
                onChange: g,
                useAlpha: !0,
              }),
              Object(at.jsx)(Pa, { text: "Font color", color: s, onChange: p }),
              Object(at.jsx)(Pa, {
                text: "Commander message background color",
                color: i,
                onChange: f,
                useAlpha: !0,
              }),
              Object(at.jsx)(Pa, {
                text: "Commander message font color",
                color: r,
                onChange: m,
              }),
              Object(at.jsx)(Pa, {
                text: "Game (system) message background color",
                color: c,
                onChange: h,
                useAlpha: !0,
              }),
              Object(at.jsx)(Pa, {
                text: "Game (system) message font color",
                color: l,
                onChange: j,
              }),
            ],
          });
        }),
        Fr = Object(j.b)(
          function (e) {
            var t = e.UI;
            return {
              settingsSubmenu: t.uiSettingsSubmenu,
              settingsShown: t.settingsShown,
            };
          },
          function (e) {
            return {
              setSettingsSubmenu: function (t) {
                return e({ type: se, uiSettingsSubmenu: t });
              },
            };
          }
        )(function (e) {
          var t = e.settingsSubmenu,
            n = e.settingsShown,
            a = e.setSettingsSubmenu;
          return Object(at.jsxs)(at.Fragment, {
            children: [
              Object(at.jsxs)(dt, {
                children: [
                  Object(at.jsxs)("button", {
                    className: Qe()(
                      Object(r.a)({}, Vi.a.selected, "UI_LEADERBOARD" === t)
                    ),
                    onClick: function () {
                      return a("UI_LEADERBOARD");
                    },
                    children: [
                      Object(at.jsx)(h.a, { icon: m.t }),
                      " Leaderboard",
                    ],
                  }),
                  Object(at.jsxs)("button", {
                    className: Qe()(
                      Object(r.a)({}, Vi.a.selected, "UI_TOP_TEAM" === t)
                    ),
                    onClick: function () {
                      return a("UI_TOP_TEAM");
                    },
                    children: [Object(at.jsx)(h.a, { icon: m.u }), " Top team"],
                  }),
                  Object(at.jsxs)("button", {
                    className: Qe()(
                      Object(r.a)({}, Vi.a.selected, "UI_STATS" === t)
                    ),
                    onClick: function () {
                      return a("UI_STATS");
                    },
                    children: [Object(at.jsx)(h.a, { icon: m.q }), " Stats"],
                  }),
                  Object(at.jsxs)("button", {
                    className: Qe()(
                      Object(r.a)({}, Vi.a.selected, "UI_SPECTATE" === t)
                    ),
                    onClick: function () {
                      return a("UI_SPECTATE");
                    },
                    children: [Object(at.jsx)(h.a, { icon: m.o }), " Spectate"],
                  }),
                  Object(at.jsxs)("button", {
                    className: Qe()(
                      Object(r.a)({}, Vi.a.selected, "UI_CHAT" === t)
                    ),
                    onClick: function () {
                      return a("UI_CHAT");
                    },
                    children: [Object(at.jsx)(h.a, { icon: m.k }), " Chat"],
                  }),
                ],
              }),
              Object(at.jsxs)(pt, {
                children: [
                  Object(at.jsx)(Lt, {
                    shown: "UI_LEADERBOARD" === t && n,
                    children: Object(at.jsx)(nr, {}),
                  }),
                  Object(at.jsx)(Lt, {
                    shown: "UI_TOP_TEAM" === t && n,
                    children: Object(at.jsx)(_r, {}),
                  }),
                  Object(at.jsx)(Lt, {
                    shown: "UI_STATS" === t && n,
                    children: Object(at.jsx)(gr, {}),
                  }),
                  Object(at.jsx)(Lt, {
                    shown: "UI_SPECTATE" === t && n,
                    children: Object(at.jsx)(vr, {}),
                  }),
                  Object(at.jsx)(Lt, {
                    shown: "UI_CHAT" === t && n,
                    children: Object(at.jsx)(Br, {}),
                  }),
                ],
              }),
            ],
          });
        }),
        Dr = Object(j.b)(function (e) {
          var t = e.UI;
          return {
            shown: t.settingsShown,
            settingsType: t.settingsType,
            menuShown: t.menuShown,
          };
        })(function (e) {
          var t,
            n,
            a,
            o,
            s,
            i = e.shown,
            c = e.settingsType,
            l = e.menuShown;
          return Object(at.jsxs)("div", {
            className: Qe()(
              ((t = {}),
              Object(r.a)(t, d.a.wrap, !0),
              Object(r.a)(t, d.a.shown, i && l),
              t)
            ),
            children: [
              Object(at.jsx)(it, {}),
              Object(at.jsxs)("div", {
                className: d.a.content,
                children: [
                  Object(at.jsx)("div", {
                    className: Qe()(
                      ((n = {}),
                      Object(r.a)(n, d.a.category, !0),
                      Object(r.a)(n, d.a.hidden, "GAME" !== c),
                      n)
                    ),
                    children: Object(at.jsx)(Ta, {}),
                  }),
                  Object(at.jsx)("div", {
                    className: Qe()(
                      ((a = {}),
                      Object(r.a)(a, d.a.category, !0),
                      Object(r.a)(a, d.a.hidden, "THEMING" !== c),
                      a)
                    ),
                    children: Object(at.jsx)(Ws, {}),
                  }),
                  Object(at.jsx)("div", {
                    className: Qe()(
                      ((o = {}),
                      Object(r.a)(o, d.a.category, !0),
                      Object(r.a)(o, d.a.hidden, "HOTKEYS" !== c),
                      o)
                    ),
                    children: Object(at.jsx)(Hi, {}),
                  }),
                  Object(at.jsx)("div", {
                    className: Qe()(
                      ((s = {}),
                      Object(r.a)(s, d.a.category, !0),
                      Object(r.a)(s, d.a.hidden, "UI" !== c),
                      s)
                    ),
                    children: Object(at.jsx)(Fr, {}),
                  }),
                ],
              }),
            ],
          });
        }),
        Ur = n(18),
        Kr = n.n(Ur),
        Hr = n(15),
        Wr = n.n(Hr),
        Vr = n(73),
        zr = n.n(Vr),
        Yr = n(54),
        Xr = n.n(Yr),
        qr = function (e) {
          var t,
            n = e.skinUrl,
            o = e.index,
            s = e.currentSelectedIndex,
            i = e.onSelect,
            c = Object(a.useState)(!1),
            l = Object(Xe.a)(c, 2),
            u = l[0],
            d = l[1];
          return Object(at.jsx)(
            "button",
            {
              onClick: function () {
                return i(o);
              },
              className: Qe()(
                ((t = {}),
                Object(r.a)(t, Xr.a.profile, !0),
                Object(r.a)(t, Xr.a.selected, o === s),
                Object(r.a)(t, Xr.a.errored, u),
                t)
              ),
              children: Object(at.jsxs)(at.Fragment, {
                children: [
                  Object(at.jsx)("img", {
                    src: n,
                    onLoad: function () {
                      return d(!1);
                    },
                    onError: function () {
                      return d(!0);
                    },
                    alt: "",
                  }),
                  Object(at.jsx)("div", {
                    className: Xr.a.errorMsg,
                    children: "No skin",
                  }),
                ],
              }),
            },
            o
          );
        },
        Zr = function (e) {
          var t,
            n = e.left,
            o = e.isMain,
            s = e.items,
            i = e.currentSelectedIndex,
            c = e.onProfileSelect,
            l = Object(a.useRef)(0);
          return (
            Object(a.useEffect)(
              function () {
                o ? n || (l.current = 5) : n && (l.current = 5);
              },
              [o, n]
            ),
            Object(at.jsx)("div", {
              className: Qe()(
                ((t = {}),
                Object(r.a)(t, zr.a.wrap, !0),
                Object(r.a)(t, zr.a.left, n),
                Object(r.a)(t, zr.a.right, !n),
                t)
              ),
              children: s.map(function (e, t) {
                var n = e.skinUrl;
                return Object(at.jsx)(
                  qr,
                  {
                    index: t + l.current,
                    currentSelectedIndex: i,
                    skinUrl: n,
                    onSelect: function () {
                      return c(t + l.current);
                    },
                  },
                  t + l.current
                );
              }),
            })
          );
        },
        Jr = function (e) {
          var t,
            n,
            o = e.blured,
            s = e.main,
            i = e.profilesList,
            c = e.currentSelectedIndex,
            l = (e.additionalProfilesListShown, e.onNickChange),
            u = e.onSkinUrlChange,
            d = e.onTagChange,
            b = e.onProfileChange,
            g = e.disabled,
            p = Object(a.useState)(!1),
            f = Object(Xe.a)(p, 2),
            m = f[0],
            h = f[1],
            j = i[c],
            O = j.nick,
            S = j.skinUrl,
            w = j.tag;
          return Object(at.jsxs)("div", {
            className: Qe()(
              ((t = {}),
              Object(r.a)(t, Wr.a.wrap, !0),
              Object(r.a)(t, Wr.a.blured, o),
              Object(r.a)(t, Wr.a.main, s),
              Object(r.a)(t, Wr.a.notMain, !s),
              Object(r.a)(t, Wr.a.disabled, g),
              t)
            ),
            children: [
              s &&
                Object(at.jsx)(Zr, {
                  isMain: s,
                  left: s,
                  items: i.slice(0, 5),
                  currentSelectedIndex: c,
                  onProfileSelect: b,
                }),
              Object(at.jsxs)("div", {
                children: [
                  Object(at.jsxs)("div", {
                    className: Qe()(
                      ((n = {}),
                      Object(r.a)(n, Wr.a.profileWrap, !0),
                      Object(r.a)(n, Wr.a.errored, m),
                      n)
                    ),
                    children: [
                      Object(at.jsx)("div", {
                        className: Wr.a.imgWrap,
                        children: Object(at.jsx)("img", {
                          src: S,
                          alt: "",
                          onError: function () {
                            return h(!0);
                          },
                          onLoad: function () {
                            return h(!1);
                          },
                        }),
                      }),
                      Object(at.jsx)("div", {
                        className: Wr.a.errorMessage,
                        children: "Could not load image.",
                      }),
                    ],
                  }),
                  Object(at.jsxs)("div", {
                    className: Wr.a.profileDataWrap,
                    children: [
                      Object(at.jsx)("input", {
                        className: Wr.a.profileNick,
                        value: O,
                        onChange: function (e) {
                          return l(e.target.value);
                        },
                        placeholder: "Nick",
                      }),
                      Object(at.jsx)("input", {
                        className: Wr.a.profileSkinUrl,
                        value: S,
                        onChange: function (e) {
                          return u(e.target.value);
                        },
                        placeholder: "Skin url",
                      }),
                      s
                        ? Object(at.jsx)("input", {
                            className: Wr.a.tag,
                            placeholder: "tag",
                            value: w,
                            onChange: function (e) {
                              return d && d(e.target.value);
                            },
                          })
                        : null,
                    ],
                  }),
                ],
              }),
              !s &&
                Object(at.jsx)("div", {
                  style: { marginLeft: 32 },
                  children: Object(at.jsx)(Zr, {
                    isMain: s,
                    left: s,
                    items: i.slice(0, 5),
                    currentSelectedIndex: c,
                    onProfileSelect: b,
                  }),
                }),
            ],
          });
        },
        Qr = n(45),
        $r = n.n(Qr),
        ec = "UPDATE_GAME_SERVERS_LIST",
        tc = "CHANGE_GAME_SERVER",
        nc = "CHANGE_GAME_MODE",
        ac = "CHANGE_GAME_TOKEN",
        oc = "CHANGE_GAME_SERVER_TOKEN",
        sc = "CHANGE_SELECTED_GAME_TOKEN_TYPE",
        ic = function (e) {
          return { type: ec, servers: e };
        },
        rc = function (e) {
          return { type: ac, token: e };
        },
        cc = function (e) {
          return { type: oc, gameServerToken: e };
        },
        lc = Object(j.b)(
          function (e) {
            return { connecting: e.UI.gameSocketConnecting };
          },
          function (e) {
            return {
              setConnecting: function (t) {
                return e(Se(t));
              },
              setToken: function (t) {
                return e(rc(t));
              },
              setServerToken: function (t) {
                return e(cc(t));
              },
              setSpectateType: function (t) {
                return e(Ye(t));
              },
            };
          }
        )(function (e) {
          var t,
            n = e.connecting,
            o = e.setConnecting,
            s = e.setToken,
            i = e.setServerToken,
            c = e.setSpectateType,
            l = Object(a.useState)(!1),
            u = Object(Xe.a)(l, 2),
            d = u[0],
            b = u[1],
            g = n && !d;
          Object(a.useEffect)(
            function () {
              n || b(!1);
            },
            [n]
          );
          return Object(at.jsx)("div", {
            className: $r.a.wrap,
            children: Object(at.jsxs)("button", {
              className: Qe()(
                ((t = {}),
                Object(r.a)(t, $r.a.create, !0),
                Object(r.a)(t, $r.a.creating, d),
                t)
              ),
              style: {
                pointerEvents: g ? "none" : "auto",
                opacity: g ? 0.4 : 1,
              },
              onClick: function () {
                var e;
                (c("CENTER"), n)
                  ? (o(!1), b(!1))
                  : (o(!0),
                    b(!0),
                    null === (e = window.GameAPI) ||
                      void 0 === e ||
                      e
                        .join()
                        .then(function (e) {
                          e
                            ? (s(e.split("%")[0]), i(e.split("%")[1]))
                            : (s(""), i("")),
                            o(!1);
                        })
                        .catch(function () {
                          s(""), i(""), b(!1), o(!1);
                        }));
              },
              children: [
                Object(at.jsx)("div", {
                  className: $r.a.createText,
                  children: "Create",
                }),
                Object(at.jsx)("div", {
                  className: $r.a.cancelText,
                  children: "Cancel",
                }),
              ],
            }),
          });
        }),
        uc = n(102),
        dc = n.n(uc),
        bc = function (e) {
          return function (t) {
            t({ type: tc, currentServerIndex: e }), window.GameAPI.setRegion(e);
          };
        },
        gc = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: nc, mode: e };
              })(e)
            ),
              window.GameAPI.setMode(e);
          };
        },
        pc = function (e) {
          var t = e.rendered,
            n = e.hideDelayMs,
            o = e.children,
            s = Object(a.useState)(t),
            i = Object(Xe.a)(s, 2),
            r = i[0],
            c = i[1];
          return (
            Object(a.useEffect)(
              function () {
                var e;
                return (
                  t
                    ? c(!0)
                    : (e = setTimeout(function () {
                        return c(!1);
                      }, n)),
                  function () {
                    return clearTimeout(e);
                  }
                );
              },
              [t, n]
            ),
            Object(at.jsx)(at.Fragment, { children: r ? o : null })
          );
        },
        fc = n(30),
        mc = n.n(fc),
        hc = function (e) {
          var t = e.left,
            n = e.itemsList,
            o = e.selectedName,
            s = e.selectedIndex,
            i = e.shown,
            r = e.onChange,
            c = Object(a.useState)(!1),
            l = Object(Xe.a)(c, 2),
            u = l[0],
            d = l[1];
          return (
            Object(a.useEffect)(
              function () {
                i
                  ? setTimeout(function () {
                      return d(!0);
                    }, 33)
                  : d(!1);
              },
              [i]
            ),
            Object(at.jsx)("div", {
              className: ""
                .concat(mc.a.wrap, " ")
                .concat(t ? mc.a.left : mc.a.right, " ")
                .concat(u ? mc.a.shown : mc.a.hidden),
              children: n.map(function (e, t) {
                return Object(at.jsx)(
                  "button",
                  {
                    className: "".concat(
                      o
                        ? e === o
                          ? mc.a.selected
                          : ""
                        : t === s
                        ? mc.a.selected
                        : ""
                    ),
                    onClick: function () {
                      return r(e, t);
                    },
                    children: e,
                  },
                  e
                );
              }),
            })
          );
        },
        jc = Object(j.b)(
          function (e) {
            return { mode: e.game.mode };
          },
          function (e) {
            return {
              changeMode: function (t) {
                return e(gc(t));
              },
            };
          }
        )(function (e) {
          var t = e.mode,
            n = e.changeMode,
            o = Object(a.useState)(!1),
            s = Object(Xe.a)(o, 2),
            i = s[0],
            r = s[1],
            c = function (e) {
              switch (e) {
                case ":party":
                  return "Party";
                case ":teams":
                  return "Teams";
                case ":ffa":
                  return "FFA";
                case ":experimental":
                  return "Experimental";
                case ":battleroyale":
                  return "Battle Royale";
                case ":private":
                  return "Private";
              }
            };
          return Object(at.jsxs)(at.Fragment, {
            children: [
              Object(at.jsx)("button", {
                className: ""
                  .concat(dc.a.gameMode, " ")
                  .concat(i ? dc.a.active : ""),
                onClick: function () {
                  return r(function (e) {
                    return !e;
                  });
                },
                children: c(t),
              }),
              Object(at.jsx)(pc, {
                rendered: i,
                hideDelayMs: 150,
                children: Object(at.jsx)(hc, {
                  itemsList: [
                    ":party",
                    ":ffa",
                    ":battleroyale",
                    ":teams",
                    ":experimental",
                    ":private",
                  ].map(function (e) {
                    return c(e);
                  }),
                  selectedName: c(t),
                  onChange: function (e) {
                    return n(
                      (function (e) {
                        switch (e) {
                          case "Party":
                            return ":party";
                          case "Teams":
                            return ":teams";
                          case "FFA":
                            return ":ffa";
                          case "Experimental":
                            return ":experimental";
                          case "Battle Royale":
                            return ":battleroyale";
                          case "Private":
                            return ":private";
                        }
                      })(e)
                    );
                  },
                  left: !0,
                  shown: i,
                }),
              }),
            ],
          });
        }),
        Oc = n(55),
        Sc = n.n(Oc),
        wc = Object(j.b)(
          function (e) {
            var t = e.game;
            return {
              servers: t.servers,
              currentServerIndex: t.currentServerIndex,
              gameMode: t.mode,
            };
          },
          function (e) {
            return {
              changeGameServer: function (t) {
                return e(bc(t));
              },
            };
          }
        )(function (e) {
          var t = e.servers,
            n = e.currentServerIndex,
            o = e.changeGameServer,
            s = e.gameMode,
            i = Object(a.useState)(!1),
            r = Object(Xe.a)(i, 2),
            c = r[0],
            l = r[1],
            u = [
              "China",
              "East Asia",
              "Europe",
              "North America",
              "Oceania",
              "Russia",
              "South America",
              "Turkey",
            ];
          return (
            console.log(t),
            Object(at.jsxs)(at.Fragment, {
              children: [
                Object(at.jsxs)("button", {
                  className: ""
                    .concat(Sc.a.gameServer, " ")
                    .concat(c ? Sc.a.active : ""),
                  onClick: function () {
                    return l(function (e) {
                      return !e;
                    });
                  },
                  children: [
                    Object(at.jsxs)("div", {
                      className: Sc.a.serverName,
                      children: [
                        Object(at.jsx)(h.a, { icon: m.w }),
                        (function (e) {
                          switch (e) {
                            case "North America":
                              return "NA";
                            case "South America":
                              return "SA";
                            case "East Asia":
                              return "EA";
                            case "FeelForeverAlone":
                              return "Feel F.A";
                            default:
                              return e;
                          }
                        })(t[":private" === s ? n + u.length : n]?.location),
                      ],
                    }),
                    Object(at.jsx)("div", {
                      className: Sc.a.playersAmount,
                      children:
                        ":private" === s
                          ? null
                          : Object(at.jsxs)(at.Fragment, {
                              children: [
                                Object(at.jsx)(h.a, { icon: m.I }),
                                t[n].playersAmount,
                              ],
                            }),
                    }),
                  ],
                }),
                Object(at.jsx)(pc, {
                  rendered: c,
                  hideDelayMs: 150,
                  children: Object(at.jsx)(hc, {
                    itemsList: t
                      .filter(function (e) {
                        return ":private" === s
                          ? !u.includes(e.location)
                          : u.includes(e.location);
                      })
                      .map(function (e) {
                        return ":private" === s
                          ? "".concat(e.location)
                          : ""
                              .concat(e.location, " (")
                              .concat(e.playersAmount, " players)");
                      }),
                    selectedIndex: n,
                    shown: c,
                    onChange: function (e, t) {
                      return o(t);
                    },
                  }),
                }),
              ],
            })
          );
        }),
        yc = n(56),
        _c = n.n(yc),
        Cc = n(46),
        Tc = n.n(Cc),
        kc = Object(j.b)(
          function (e) {
            var t = e.UI,
              n = e.game;
            return {
              connecting: t.gameSocketConnecting,
              selectedTokenType: n.selectedGameTokenType,
              partyToken: n.token,
              serverToken: n.gameServerToken,
            };
          },
          function (e) {
            return {
              setConnecting: function (t) {
                return e(Se(t));
              },
              setToken: function (t) {
                return e(rc(t));
              },
              setServerToken: function (t) {
                return e(cc(t));
              },
              setSpectateType: function (t) {
                return e(Ye(t));
              },
            };
          }
        )(function (e) {
          var t,
            n = e.connecting,
            o = e.setConnecting,
            s = e.selectedTokenType,
            i = e.serverToken,
            c = e.partyToken,
            l = e.setToken,
            u = e.setServerToken,
            d = e.setSpectateType,
            b = Object(a.useState)(!1),
            g = Object(Xe.a)(b, 2),
            p = g[0],
            f = g[1],
            m = n && !p;
          Object(a.useEffect)(
            function () {
              n || f(!1);
            },
            [n]
          );
          return Object(at.jsx)("div", {
            className: Tc.a.wrap,
            children: Object(at.jsxs)("button", {
              className: Qe()(
                ((t = {}),
                Object(r.a)(t, Tc.a.joinGame, !0),
                Object(r.a)(t, Tc.a.joining, p),
                t)
              ),
              style: {
                pointerEvents: m ? "none" : "auto",
                opacity: m ? 0.4 : 1,
              },
              onClick: function () {
                if (
                  ("PARTY" !== s || 6 === c.length) &&
                  ("SERVER" !== s || !(i.length < 6 || i.length > 7))
                ) {
                  d("CENTER");
                  var e,
                    t = "";
                  if (("PARTY" === s ? (t = c) : "SERVER" === s && (t = i), n))
                    o(!1), f(!1);
                  else
                    o(!0),
                      f(!0),
                      null === (e = window.GameAPI) ||
                        void 0 === e ||
                        e
                          .join(t, "SERVER" === s)
                          .then(function (e) {
                            o(!1), l(e.split("%")[0]), u(e.split("%")[1]);
                          })
                          .catch(function () {
                            f(!1), o(!1);
                          });
                }
              },
              children: [
                Object(at.jsx)("div", {
                  className: Tc.a.joinText,
                  children: "Join",
                }),
                Object(at.jsx)("div", {
                  className: Tc.a.cancelText,
                  children: "Cancel",
                }),
              ],
            }),
          });
        }),
        vc = n(37),
        xc = n.n(vc),
        Ec = Object(j.b)(
          function (e) {
            var t = e.game,
              n = e.UI;
            return {
              token: t.token,
              serverToken: t.gameServerToken,
              selectedTokenType: t.selectedGameTokenType,
              blured: n.blured,
            };
          },
          function (e) {
            return {
              changeToken: function (t) {
                return e(rc(t));
              },
              changeServerToken: function (t) {
                return e(cc(t));
              },
              changeSelectedGameTokenType: function (t) {
                return e({ type: sc, selectedGameTokenType: t });
              },
            };
          }
        )(function (e) {
          var t,
            n,
            a = e.blured,
            o = e.token,
            s = e.serverToken,
            i = e.selectedTokenType,
            c = e.changeToken,
            l = e.changeServerToken,
            u = e.changeSelectedGameTokenType;
          return Object(at.jsxs)(at.Fragment, {
            children: [
              Object(at.jsx)("input", {
                className: Qe()(
                  ((t = {}),
                  Object(r.a)(t, xc.a.token, !0),
                  Object(r.a)(t, xc.a.blured, a),
                  Object(r.a)(t, xc.a.selected, "PARTY" === i),
                  t)
                ),
                placeholder: "Token",
                value: o,
                onChange: function (e) {
                  return c(e.target.value);
                },
                onClick: function () {
                  return u("PARTY");
                },
              }),
              Object(at.jsx)("input", {
                className: Qe()(
                  ((n = {}),
                  Object(r.a)(n, xc.a.serverToken, !0),
                  Object(r.a)(n, xc.a.blured, a),
                  Object(r.a)(n, xc.a.selected, "SERVER" === i),
                  n)
                ),
                placeholder: "ws token",
                value: s,
                onChange: function (e) {
                  return l(e.target.value);
                },
                onClick: function () {
                  return u("SERVER");
                },
              }),
            ],
          });
        }),
        Mc = function () {
          return Object(at.jsxs)("div", {
            className: _c.a.wrap,
            children: [
              Object(at.jsxs)("div", {
                className: _c.a.top,
                children: [Object(at.jsx)(jc, {}), Object(at.jsx)(wc, {})],
              }),
              Object(at.jsx)("div", {
                className: _c.a.middle,
                children: Object(at.jsx)(Ec, {}),
              }),
              Object(at.jsxs)("div", {
                className: _c.a.bottom,
                children: [Object(at.jsx)(lc, {}), Object(at.jsx)(kc, {})],
              }),
            ],
          });
        },
        Ac = n(74),
        Ic = n.n(Ac),
        Gc = Object(j.b)(
          function (e) {
            return { connecting: e.UI.gameSocketConnecting };
          },
          function (e) {
            return {
              setConnecting: function (t) {
                return e(Se(t));
              },
              setToken: function (t) {
                return e(rc(t));
              },
              setServerToken: function (t) {
                return e(cc(t));
              },
              setMenuShown: function (t) {
                return e(Ve(t));
              },
            };
          }
        )(function (e) {
          var t = e.connecting,
            n = e.setConnecting,
            a = e.setToken,
            o = e.setServerToken,
            s = e.setMenuShown,
            i = function () {
              var e;
              null === (e = window.GameAPI) ||
                void 0 === e ||
                e.setSceneBlurred(!1, !0),
                s(!1);
            };
          return Object(at.jsxs)("div", {
            className: Ic.a.wrap,
            children: [
              Object(at.jsx)("button", {
                className: "".concat(Ic.a.play),
                onClick: function () {
                  var e;
                  t ||
                    (n(!0),
                    null === (e = window.GameAPI) ||
                      void 0 === e ||
                      e
                        .play()
                        .then(function (e) {
                          e && (a(e.split("%")[0]), o(e.split("%")[1]), i()),
                            n(!1);
                        })
                        .catch(function () {
                          n(!1);
                        }));
                },
              }),
              Object(at.jsx)("button", {
                className: Ic.a.spectate,
                onClick: i,
              }),
            ],
          });
        }),
        Nc = n(38),
        Rc = n.n(Nc),
        Pc = Object(j.b)(
          function (e) {
            return { blured: e.UI.blured };
          },
          function (e) {
            return {
              setUIBlured: function (t) {
                return e(
                  (function (e) {
                    return { type: $, blured: e };
                  })(t)
                );
              },
              setSettingsShown: function (t, n) {
                return e(We(t, n));
              },
            };
          }
        )(function (e) {
          var t = e.blured,
            n = e.setUIBlured,
            a = e.setSettingsShown;
          return Object(at.jsxs)("div", {
            className: Rc.a.wrap,
            children: [
              Object(at.jsx)("button", {
                className: Rc.a.settings,
                onClick: function () {
                  return a(!0, "GAME");
                },
              }),
              Object(at.jsx)("button", {
                className: Rc.a.hotkeys,
                onClick: function () {
                  return a(!0, "HOTKEYS");
                },
              }),
              Object(at.jsx)("button", {
                className: Rc.a.theming,
                onClick: function () {
                  return a(!0, "THEMING");
                },
              }),
              Object(at.jsx)("button", {
                className: ""
                  .concat(Rc.a.blur, " ")
                  .concat(t ? Rc.a.active : ""),
                onClick: function () {
                  return n(!t);
                },
                children: Object(at.jsx)(h.a, { icon: m.p }),
              }),
            ],
          });
        }),
        Lc = n(75),
        Bc = n.n(Lc),
        Fc = n(34),
        Dc = (function () {
          function e() {
            Object(O.a)(this, e);
          }
          return (
            Object(S.a)(e, null, [
              {
                key: "setLeftProfileNick",
                value: function (e) {
                  var t;
                  (window.GameSettings.all.profiles.leftProfileNick = e),
                    null === (t = window.GameAPI) ||
                      void 0 === t ||
                      t.setFirstTabNick();
                },
              },
              {
                key: "setLeftProfileSkinUrl",
                value: function (e) {
                  var t;
                  (window.GameSettings.all.profiles.leftProfileSkinUrl = e),
                    null === (t = window.GameAPI) ||
                      void 0 === t ||
                      t.setFirstTabSkin();
                },
              },
              {
                key: "setLeftProfile",
                value: function (e, t, n) {
                  var a, o, s;
                  (window.GameSettings.all.profiles.leftProfileNick = e),
                    (window.GameSettings.all.profiles.leftProfileSkinUrl = t),
                    (window.GameSettings.all.profiles.tag = n),
                    null === (a = window.GameAPI) ||
                      void 0 === a ||
                      a.setFirstTabNick(),
                    null === (o = window.GameAPI) ||
                      void 0 === o ||
                      o.setFirstTabSkin(),
                    null === (s = window.GameAPI) || void 0 === s || s.setTag();
                },
              },
              {
                key: "setRightProfileNick",
                value: function (e) {
                  var t;
                  (window.GameSettings.all.profiles.rightProfileNick = e),
                    null === (t = window.GameAPI) ||
                      void 0 === t ||
                      t.setSecondTabNick();
                },
              },
              {
                key: "setRightProfileSkinUrl",
                value: function (e) {
                  var t;
                  (window.GameSettings.all.profiles.rightProfileSkinUrl = e),
                    null === (t = window.GameAPI) ||
                      void 0 === t ||
                      t.setSecondTabSkin();
                },
              },
              {
                key: "setRightProfile",
                value: function (e, t) {
                  var n, a;
                  (window.GameSettings.all.profiles.rightProfileNick = e),
                    (window.GameSettings.all.profiles.rightProfileSkinUrl = t),
                    null === (n = window.GameAPI) ||
                      void 0 === n ||
                      n.setSecondTabNick(),
                    null === (a = window.GameAPI) ||
                      void 0 === a ||
                      a.setSecondTabSkin();
                },
              },
              {
                key: "setTag",
                value: function (e) {
                  var t;
                  (window.GameSettings.all.profiles.tag = e),
                    null === (t = window.GameAPI) || void 0 === t || t.setTag();
                },
              },
              {
                key: "setLeftProfileLoginType",
                value: function (e) {
                  window.GameSettings.all.profiles.leftProfileLoginType = e;
                },
              },
              {
                key: "setRightProfileLoginType",
                value: function (e) {
                  window.GameSettings.all.profiles.rightProfileLoginType = e;
                },
              },
            ]),
            e
          );
        })(),
        Uc = "SET_LEFT_PROFILE_NICK",
        Kc = "SET_LEFT_PROFILE_SKIN_URL",
        Hc = "SET_LEFT_PROFILE_SELECTED_INDEX",
        Wc = "SET_LEFT_PROFILE_LOGIN_TYPE",
        Vc = "SET_RIGHT_PROFILE_NICK",
        zc = "SET_RIGHT_PROFILE_SKIN_URL",
        Yc = "SET_RIGHT_PROFILE_SELECTED_INDEX",
        Xc = "SET_RIGHT_PROFILE_LOGIN_TYPE",
        qc = "SET_FACEBOOK_LOGGED_IN",
        Zc = "SET_GOOGLE_LOGGED_IN",
        Jc = "SET_TAG",
        Qc = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Uc, nick: e };
              })(e)
            ),
              Dc.setLeftProfileNick(e);
          };
        },
        $c = function (e) {
          return function (t) {
            t({ type: Kc, skinUrl: e }), Dc.setLeftProfileSkinUrl(e);
          };
        },
        el = function (e) {
          return function (t, n) {
            t({ type: Hc, leftSelectedIndex: e });
            var a = n().profiles.leftProfiles[e];
            Dc.setLeftProfile(a.nick, a.skinUrl, a.tag);
          };
        },
        tl = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Vc, nick: e };
              })(e)
            ),
              Dc.setRightProfileNick(e);
          };
        },
        nl = function (e) {
          return function (t) {
            t({ type: zc, skinUrl: e }), Dc.setRightProfileSkinUrl(e);
          };
        },
        al = function (e) {
          return function (t, n) {
            t({ type: Yc, rightSelectedIndex: e });
            var a = n().profiles.rightProfiles[e];
            Dc.setRightProfile(a.nick, a.skinUrl);
          };
        },
        ol = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Jc, tag: e };
              })(e)
            ),
              Dc.setTag(e);
          };
        },
        sl = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Wc, loginType: e };
              })(e)
            ),
              Dc.setLeftProfileLoginType(e);
          };
        },
        il = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: Xc, loginType: e };
              })(e)
            ),
              Dc.setRightProfileLoginType(e);
          };
        },
        rl = Object(j.b)(
          function (e) {
            var t = e.profiles;
            return {
              leftType: t.leftProfileLoginType,
              rightType: t.rightProfileLoginType,
              fbLoggedIn: t.facebookLoggedIn,
              googleLoggedIn: t.googleLoggedIn,
            };
          },
          function (e) {
            return {
              setLeftProfileLoginType: function (t) {
                return e(sl(t));
              },
              setRightProfileLoginType: function (t) {
                return e(il(t));
              },
            };
          }
        )(function (e) {
          var t = e.leftType,
            n = e.rightType,
            a = e.fbLoggedIn,
            o = e.googleLoggedIn,
            s = e.setLeftProfileLoginType,
            i = e.setRightProfileLoginType;
          return Object(at.jsxs)("div", {
            className: Bc.a.wrap,
            children: [
              Object(at.jsxs)("div", {
                className: Bc.a.login,
                children: [
                  Object(at.jsxs)("button", {
                    onClick: function () {
                      var e, t;
                      a
                        ? null === (e = window.GameAPI) ||
                          void 0 === e ||
                          e.logOutWithFb()
                        : null === (t = window.GameAPI) ||
                          void 0 === t ||
                          t.logInWithFb();
                    },
                    children: [
                      Object(at.jsx)(h.a, { icon: Fc.b }),
                      " ",
                      a ? "Log out" : "Log in",
                    ],
                  }),
                  Object(at.jsxs)("button", {
                    onClick: function () {
                      var e, t;
                      o
                        ? null === (e = window.GameAPI) ||
                          void 0 === e ||
                          e.logOutWithGoogle()
                        : null === (t = window.GameAPI) ||
                          void 0 === t ||
                          t.logInWithGoogle();
                    },
                    children: [
                      Object(at.jsx)(h.a, { icon: Fc.c }),
                      "  ",
                      o ? "Log out" : "Log in",
                    ],
                  }),
                ],
              }),
              Object(at.jsxs)("div", {
                className: Bc.a.tabsLoginType,
                children: [
                  Object(at.jsxs)("button", {
                    onClick: function () {
                      s("FACEBOOK"), i("GOOGLE");
                    },
                    children: [
                      Object(at.jsx)(h.a, { icon: Fc.b }),
                      " ",
                      "FACEBOOK" === t ? "Main tab" : "Second tab",
                    ],
                  }),
                  Object(at.jsxs)("button", {
                    onClick: function () {
                      s("GOOGLE"), i("FACEBOOK");
                    },
                    children: [
                      Object(at.jsx)(h.a, { icon: Fc.c }),
                      " ",
                      "FACEBOOK" === n ? "Main tab" : "Second tab",
                    ],
                  }),
                ],
              }),
            ],
          });
        }),
        cl = Object(j.b)(
          function (e) {
            var t = e.UI,
              n = e.profiles,
              a = e.settings;
            return Object(et.a)(
              Object(et.a)({}, n),
              {},
              {
                blured: t.blured,
                menuShown: t.menuShown,
                settingsShown: t.settingsShown,
                additionalProfilesListShown: t.additionalProfilesListShown,
                multiboxEnabled: a.game.multibox.enabled,
              }
            );
          },
          function (e) {
            return {
              setLeftProfileNick: function (t) {
                return e(Qc(t));
              },
              setLeftProfileSkinUrl: function (t) {
                return e($c(t));
              },
              setLeftProfileSelectedIndex: function (t) {
                return e(el(t));
              },
              setRightProfileNick: function (t) {
                return e(tl(t));
              },
              setRightProfileSkinUrl: function (t) {
                return e(nl(t));
              },
              setRightProfileSelectedIndex: function (t) {
                return e(al(t));
              },
              setTag: function (t) {
                return e(ol(t));
              },
            };
          }
        )(function (e) {
          var t,
            n = e.setLeftProfileNick,
            a = e.setLeftProfileSelectedIndex,
            o = e.setLeftProfileSkinUrl,
            s = e.setRightProfileNick,
            i = e.setRightProfileSelectedIndex,
            c = e.setRightProfileSkinUrl,
            l = e.setTag,
            u = e.settingsShown,
            d = e.blured,
            b = e.leftProfiles,
            g = e.leftSelectedIndex,
            p = e.additionalProfilesListShown,
            f = e.rightProfiles,
            m = e.rightSelectedIndex,
            h = e.menuShown,
            j = e.multiboxEnabled;
          return Object(at.jsxs)("div", {
            className: Qe()(
              ((t = {}),
              Object(r.a)(t, Kr.a.menuWrap, !0),
              Object(r.a)(t, Kr.a.settingsShown, u),
              Object(r.a)(t, Kr.a.menuShown, h),
              t)
            ),
            children: [
              Object(at.jsxs)("div", {
                className: Kr.a.top,
                children: [
                  Object(at.jsx)("div", {
                    className: Kr.a.left,
                    children: Object(at.jsx)(Jr, {
                      main: !0,
                      blured: d,
                      onNickChange: n,
                      onSkinUrlChange: o,
                      onTagChange: l,
                      profilesList: b,
                      currentSelectedIndex: g,
                      additionalProfilesListShown: p,
                      onProfileChange: a,
                    }),
                  }),
                  Object(at.jsxs)("div", {
                    className: Kr.a.middle,
                    children: [
                      Object(at.jsx)("div", {
                        className: Kr.a.login,
                        children: Object(at.jsx)(rl, {}),
                      }),
                      Object(at.jsx)("div", {
                        className: Kr.a.playSpectate,
                        children: Object(at.jsx)(Gc, {}),
                      }),
                      Object(at.jsx)("div", {
                        className: Kr.a.customization,
                        children: Object(at.jsx)(Pc, {}),
                      }),
                    ],
                  }),
                  Object(at.jsx)("div", {
                    className: Kr.a.right,
                    children: Object(at.jsx)(Jr, {
                      blured: d,
                      profilesList: f,
                      onNickChange: s,
                      onSkinUrlChange: c,
                      currentSelectedIndex: m,
                      additionalProfilesListShown: p,
                      onProfileChange: i,
                      disabled: !j,
                    }),
                  }),
                ],
              }),
              Object(at.jsx)("div", {
                className: Kr.a.bottom,
                children: Object(at.jsx)(Mc, {}),
              }),
            ],
          });
        }),
        ll = Object(j.b)(
          function (e) {
            var t = e.UI;
            return {
              menuShown: t.menuShown,
              settingsShown: t.settingsShown,
              settingsType: t.settingsType,
            };
          },
          function (e) {
            return {
              setSettingsShown: function (t) {
                return e(We(t));
              },
              setMenuShown: function (t) {
                return e(Ve(t));
              },
            };
          }
        )(function (e) {
          var t,
            n = e.menuShown,
            a = e.settingsType,
            o = e.settingsShown;
          return Object(at.jsx)("div", {
            className: Qe()(
              ((t = {}),
              Object(r.a)(t, l.a.wrap, !0),
              Object(r.a)(t, l.a.hidden, !n),
              Object(r.a)(t, l.a.theming, o && ("THEMING" === a || "UI" === a)),
              t)
            ),
            children: Object(at.jsxs)("div", {
              className: Qe()(Object(r.a)({}, l.a.innerWrap, !0)),
              children: [Object(at.jsx)(cl, {}), Object(at.jsx)(Dr, {})],
            }),
          });
        }),
        ul = n(47),
        dl = n.n(ul),
        bl = Object(j.b)(function (e) {
          var t = e.UI;
          return { gameLoaded: t.gameLoaded, status: t.gameLoaderStatus };
        })(function (e) {
          var t,
            n = e.gameLoaded,
            a = e.status;
          return Object(at.jsx)(pc, {
            rendered: !n,
            hideDelayMs: 800,
            children: Object(at.jsx)("div", {
              className: Qe()(
                ((t = {}),
                Object(r.a)(t, dl.a.wrap, !0),
                Object(r.a)(t, dl.a.hidden, n),
                t)
              ),
              children: Object(at.jsxs)("div", {
                className: dl.a.infoWrapper,
                children: [
                  Object(at.jsx)("div", {
                    className: dl.a.version,
                    children: a,
                  }),
                  Object(at.jsxs)("div", {
                    className: dl.a.discord,
                    children: [
                      Object(at.jsx)(h.a, { icon: Fc.a }),
                      Object(at.jsx)("a", {
                        href: "https://discord.gg/XX5sVwpqfa",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "Discord",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        }),
        gl = n(39),
        pl = n.n(gl),
        fl = Object(j.b)(function (e) {
          var t = e.settings,
            n = e.UI;
          return Object(et.a)(
            {
              statsShown: t.UI.stats.shown,
              statsPosition: t.UI.stats.position,
              messages: n.chatMessages,
              menuShown: n.menuShown,
            },
            t.UI.chat
          );
        })(function (e) {
          var t = e.menuShown,
            n = e.statsShown,
            o = e.statsPosition,
            s = e.backgroundColor,
            i = e.fontColor,
            r = e.gameMessageBackgroundColor,
            c = e.gameMessageFontColor,
            l = e.commandMessageBackgroundColor,
            u = e.commandMessageFontColor,
            d = e.height,
            b = e.messages,
            g = Object(a.useCallback)(
              function (e) {
                switch (e) {
                  case "GAME":
                    return Ga(r);
                  case "COMMAND":
                    return Ga(l);
                  case "PLAYER":
                    return "transparent";
                }
              },
              [r, l]
            ),
            p = Object(a.useCallback)(
              function (e) {
                switch (e) {
                  case "GAME":
                    return Ga(c);
                  case "COMMAND":
                    return Ga(u);
                  case "PLAYER":
                    return Ga(i);
                }
              },
              [c, u, i]
            ),
            f = Object(a.useCallback)(
              function (e) {
                switch (e) {
                  case "GAME":
                    return Ga(
                      Object(et.a)(
                        Object(et.a)({}, Na(r, 24)),
                        {},
                        { alpha: 0.2 }
                      )
                    );
                  case "COMMAND":
                    return Ga(
                      Object(et.a)(
                        Object(et.a)({}, Na(l, 24)),
                        {},
                        { alpha: 0.2 }
                      )
                    );
                  case "PLAYER":
                    return Ga(
                      Object(et.a)(
                        Object(et.a)({}, Na(s, 24)),
                        {},
                        { alpha: 0.2 }
                      )
                    );
                }
              },
              [r, l, s]
            ),
            j = Object(a.useCallback)(function (e) {
              return Ga(e);
            }, []),
            O = Object(a.useRef)(null);
          return (
            Object(a.useEffect)(
              function () {
                t || O.current.scrollIntoView({ behavior: "smooth" });
              },
              [b, t]
            ),
            Object(at.jsx)("div", {
              className: pl.a.wrap,
              style: {
                bottom: n && "BOTTOM LEFT" === o ? 38 : 0,
                height: d,
                backgroundColor: j(s),
                boxShadow: "0 0 4px ".concat(j(s)),
              },
              children: Object(at.jsxs)("div", {
                className: pl.a.content,
                children: [
                  b.map(function (e) {
                    var t = e.nick,
                      n = e.message,
                      a = e.type,
                      o = e.key;
                    return Object(at.jsxs)(
                      "div",
                      {
                        className: pl.a.messageWrap,
                        style: {
                          backgroundColor: g(a),
                          color: p(a),
                          borderBottom: "1px solid ".concat(f(a)),
                        },
                        children: [
                          Object(at.jsx)("span", {
                            className: pl.a.nick,
                            children:
                              "GAME" === a
                                ? Object(at.jsxs)(at.Fragment, {
                                    children: [
                                      Object(at.jsx)(h.a, { icon: m.r }),
                                      t && " ".concat(t.trim(), ":"),
                                    ],
                                  })
                                : "".concat(t.trim(), ":"),
                          }),
                          Object(at.jsx)("span", {
                            className: pl.a.message,
                            children: n,
                          }),
                        ],
                      },
                      o
                    );
                  }),
                  Object(at.jsx)("div", {
                    className: pl.a.messagesEnd,
                    ref: O,
                  }),
                ],
              }),
            })
          );
        }),
        ml = n(103),
        hl = n.n(ml),
        jl = Object(j.b)(function (e) {
          return { shown: e.UI.inputMessageShown };
        })(function (e) {
          var t,
            n = e.shown,
            o = Object(a.useRef)(null);
          return (
            Object(a.useEffect)(
              function () {
                if (n) {
                  var e;
                  null === (e = o.current) || void 0 === e || e.focus();
                } else {
                  var t, a;
                  if (
                    !(null === (t = o.current) || void 0 === t
                      ? void 0
                      : t.value)
                  )
                    return;
                  null === (a = window.GameAPI) ||
                    void 0 === a ||
                    a.sendMessage(o.current.value),
                    (o.current.value = ""),
                    o.current.blur();
                }
              },
              [n]
            ),
            Object(at.jsx)("div", {
              className: Qe()(
                ((t = {}),
                Object(r.a)(t, hl.a.wrap, !0),
                Object(r.a)(t, hl.a.shown, n),
                t)
              ),
              children: Object(at.jsx)("input", { ref: o, maxLength: 80 }),
            })
          );
        }),
        Ol = Object(j.b)(function (e) {
          var t = e.settings;
          return { type: t.UI.chat.chatType, enabled: t.UI.chat.enabled };
        })(function (e) {
          var t = e.type,
            n = e.enabled;
          return Object(at.jsxs)(at.Fragment, {
            children: [
              n && "CHATBOX" === t ? Object(at.jsx)(fl, {}) : null,
              Object(at.jsx)(jl, {}),
            ],
          });
        }),
        Sl = n(23),
        wl = n.n(Sl),
        yl = Object(j.b)(function (e) {
          var t = e.settings,
            n = e.UI,
            a = e.game;
          return Object(et.a)(
            Object(et.a)({}, t.UI.leaderboard),
            {},
            {
              players: n.leaderboardPlayers,
              ghostCells: n.ghostCells,
              playerMass: n.playerMass,
              gameMode: a.mode,
            }
          );
        })(function (e) {
          var t,
            n = e.shown,
            o = e.displayAmount,
            s = e.displayPosition,
            i = e.showMass,
            c = e.backdropBlur,
            l = e.backgroundColor,
            u = e.players,
            d = e.ghostCells,
            b = e.meColor,
            g = e.shortMass,
            p = e.gameMode,
            f = e.playerMass,
            j = Object(a.useState)([]),
            O = Object(Xe.a)(j, 2),
            S = O[0],
            w = O[1];
          return (
            Object(a.useEffect)(
              function () {
                var e = !1,
                  t = u.filter(function (e) {
                    return e.isMe;
                  })[0];
                (u = u
                  .map(function (n, a) {
                    return a < o ? (n.isMe && (e = !0), n) : e ? null : t;
                  })
                  .filter(function (e) {
                    return e;
                  })
                  .slice(0, o + 1)),
                  w(u);
              },
              [u]
            ),
            n
              ? Object(at.jsx)("div", {
                  className: Qe()(
                    ((t = {}),
                    Object(r.a)(t, wl.a.wrap, !0),
                    Object(r.a)(t, wl.a.withMass, i && ":private" !== p),
                    t)
                  ),
                  style: {
                    backgroundColor: Ga(l),
                    boxShadow: "0 0 4px ".concat(Ga(l)),
                    backdropFilter: c ? "blur(7px)" : "",
                  },
                  children: Object(at.jsx)("div", {
                    className: wl.a.players,
                    children: S.length
                      ? S.map(function (e, t) {
                          return Object(at.jsxs)(
                            "div",
                            {
                              className: wl.a.player,
                              style: {
                                color: e.isMe
                                  ? "rgb("
                                      .concat(b.red, ", ")
                                      .concat(b.green, ", ")
                                      .concat(b.blue, ")")
                                  : "white",
                              },
                              children: [
                                ":private" !== p &&
                                  i &&
                                  d[t] &&
                                  Object(at.jsxs)("div", {
                                    className: wl.a.mass,
                                    children: [
                                      Object(at.jsx)(h.a, { icon: m.l }),
                                      Object(at.jsx)("div", {
                                        className: wl.a.massValue,
                                        children: g
                                          ? Ra(e.isMe ? f : d[t].totalMass)
                                          : e.isMe
                                          ? f
                                          : d[t].totalMass,
                                      }),
                                    ],
                                  }),
                                s &&
                                  Object(at.jsx)("div", {
                                    className: wl.a.position,
                                    children: e.position,
                                  }),
                                Object(at.jsx)("div", {
                                  className: wl.a.nick,
                                  children: e.nick,
                                }),
                              ],
                            },
                            e.accountId
                          );
                        })
                      : Object(at.jsx)("div", {
                          className: wl.a.noPlayers,
                          children: "Empty server",
                        }),
                  }),
                })
              : null
          );
        }),
        _l = n(28),
        Cl = n.n(_l),
        Tl = Object(j.b)(
          function (e) {
            var t = e.settings,
              n = e.UI;
            return Object(et.a)(
              Object(et.a)({}, t.UI.spectate),
              {},
              {
                spectateType: n.spectateType,
                isPlayerPlaying: n.isPlayerPlaying,
              }
            );
          },
          function (e) {
            return {
              setSpectateType: function (t) {
                return e(Ye(t));
              },
            };
          }
        )(function (e) {
          var t,
            n = e.shown,
            o = e.backdropBlur,
            s = e.backgroundColor,
            i = e.spectateType,
            c = e.setSpectateType,
            l = e.isPlayerPlaying,
            u = Object(a.useState)(""),
            d = Object(Xe.a)(u, 2),
            b = d[0],
            g = d[1],
            p = Object(a.useState)(""),
            f = Object(Xe.a)(p, 2),
            j = f[0],
            O = f[1],
            S = Object(a.useState)(""),
            w = Object(Xe.a)(S, 2),
            y = w[0],
            _ = w[1];
          return (
            Object(a.useEffect)(
              function () {
                var e = Ga(
                    Object(et.a)(Object(et.a)({}, s), {}, { alpha: 0.9 })
                  ),
                  t = Ga({
                    red: s.red + 22,
                    green: s.green + 22,
                    blue: s.blue + 22,
                    alpha: 0.9,
                  }),
                  n = Ga({
                    red: s.red - 8,
                    green: s.green - 8,
                    blue: s.blue - 8,
                    alpha: 0.9,
                  });
                O(t), g(e), _(n);
              },
              [s]
            ),
            n
              ? Object(at.jsxs)("div", {
                  className: Qe()(
                    ((t = {}),
                    Object(r.a)(t, Cl.a.wrap, !0),
                    Object(r.a)(t, Cl.a.targetMode, "TARGET" === i),
                    Object(r.a)(t, Cl.a.hidden, l),
                    t)
                  ),
                  style: {
                    backgroundColor: b,
                    boxShadow: "0 0 8px ".concat(y),
                    backdropFilter: o ? "blur(7px)" : "",
                  },
                  children: [
                    Object(at.jsxs)("button", {
                      style: { backgroundColor: j },
                      onClick: function () {
                        return c("TOP_ONE");
                      },
                      className: Qe()(
                        Object(r.a)({}, Cl.a.active, "TOP_ONE" === i)
                      ),
                      children: [Object(at.jsx)(h.a, { icon: m.n }), " Top 1"],
                    }),
                    Object(at.jsxs)("button", {
                      style: { backgroundColor: j },
                      onClick: function () {
                        return c("CENTER");
                      },
                      className: Qe()(
                        Object(r.a)({}, Cl.a.active, "CENTER" === i)
                      ),
                      children: [Object(at.jsx)(h.a, { icon: m.e }), " Center"],
                    }),
                    Object(at.jsxs)("button", {
                      style: { backgroundColor: j },
                      onClick: function () {
                        return c("FREE");
                      },
                      className: Qe()(
                        Object(r.a)({}, Cl.a.active, "FREE" === i)
                      ),
                      children: [Object(at.jsx)(h.a, { icon: m.y }), " Free"],
                    }),
                    Object(at.jsxs)("button", {
                      style: { backgroundColor: j },
                      onClick: function () {
                        return c("TARGET");
                      },
                      className: Qe()(
                        Object(r.a)({}, Cl.a.active, "TARGET" === i)
                      ),
                      children: [Object(at.jsx)(h.a, { icon: m.f }), " Target"],
                    }),
                    Object(at.jsx)("div", {
                      className: Cl.a.target,
                      children: "Click on cell to set target [disabled]",
                    }),
                  ],
                })
              : null
          );
        }),
        kl = new ((function () {
          function e() {
            Object(O.a)(this, e),
              (this.canvas = null),
              (this.ctx = null),
              (this.isStopped = !0),
              (this.buffer = []),
              (this.bufferSize = 40),
              (this.lineWidth = 2);
          }
          return (
            Object(S.a)(e, [
              {
                key: "set",
                value: function (e) {
                  (this.canvas = e),
                    (this.ctx = e.getContext("2d")),
                    (this.isStopped = !1),
                    (this.bufferSize = e.width / 2);
                },
              },
              {
                key: "normalizeX",
                value: function (e) {
                  return e * this.lineWidth;
                },
              },
              {
                key: "stop",
                value: function () {
                  this.isStopped = !0;
                },
              },
              {
                key: "updateElapsed",
                value: function (e) {
                  if (!this.isStopped) {
                    this.buffer.length < this.bufferSize || this.buffer.shift(),
                      this.buffer.push(e);
                    var t = this.canvas,
                      n = this.ctx;
                    n.clearRect(0, 0, t.width, t.height),
                      (n.lineWidth = this.lineWidth),
                      (n.shadowBlur = 3),
                      (n.lineCap = "square");
                    for (var a = 0; a < this.buffer.length; a++) {
                      var o = this.buffer[a],
                        s = this.normalizeX(a);
                      o <= 20
                        ? ((n.strokeStyle = "rgba(255, 255, 255, .8)"),
                          (n.shadowColor = "rgba(255, 255, 255, .8)"),
                          (n.fillStyle = "rgba(255, 255, 255, .8)"))
                        : o > 20 && o < 23
                        ? ((n.strokeStyle = "rgba(180, 180, 180, .8)"),
                          (n.shadowColor = "rgba(180, 180, 180, .8)"),
                          (n.fillStyle = "rgba(180, 180, 180, .8)"))
                        : o >= 23 &&
                          ((n.strokeStyle = "rgba(250, 128, 114, .8)"),
                          (n.shadowColor = "rgba(250, 128, 114, .8)"),
                          (n.fillStyle = "rgba(250, 128, 114, .8)")),
                        n.beginPath(),
                        n.moveTo(s, 0),
                        n.lineTo(s, t.height),
                        n.stroke();
                    }
                  }
                },
              },
            ]),
            e
          );
        })())(),
        vl = function () {
          var e = Object(a.useRef)(null);
          return (
            Object(a.useEffect)(function () {
              return (
                kl.set(e.current),
                (window.fc = kl),
                function () {
                  return kl.stop();
                }
              );
            }, []),
            Object(at.jsx)("div", {
              style: {
                paddingLeft: "-2px",
                paddingRight: "-2px",
                borderRadius: "4px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                marginTop: -1,
                height: 14,
              },
              children: Object(at.jsx)("canvas", {
                width: 200,
                height: 16,
                ref: e,
                style: { verticalAlign: "middle" },
              }),
            })
          );
        },
        xl = n(76),
        El = n.n(xl),
        Ml = n(139),
        Al = n.n(Ml),
        Il = n(57),
        Gl = n.n(Il),
        Nl = function (e) {
          var t = e.tabName,
            n = e.status,
            a = e.onReconnect;
          return Object(at.jsxs)("div", {
            className: Gl.a.wrap,
            children: [
              Object(at.jsxs)("div", {
                className: Gl.a.name,
                children: [t, ":"],
              }),
              Object(at.jsxs)("div", {
                className: Gl.a.status,
                children: [
                  "CONNECTED" === n &&
                    Object(at.jsx)(h.a, {
                      icon: m.h,
                      style: { color: "#72fa77" },
                    }),
                  "DISCONNECTED" === n &&
                    Object(at.jsx)(h.a, {
                      icon: m.G,
                      style: { color: "#fa8072" },
                    }),
                  "CONNECTING" === n &&
                    Object(at.jsx)(h.a, {
                      icon: m.E,
                      spin: !0,
                      style: { color: "#72d3fa" },
                    }),
                ],
              }),
              Object(at.jsx)("div", {
                className: Gl.a.reconnect,
                style: {
                  pointerEvents: "CONNECTING" !== n ? "initial" : "none",
                },
                onClick: a,
                children: Object(at.jsx)(h.a, {
                  icon: m.F,
                  style: { fontSize: 13, color: "#72d3fa" },
                }),
              }),
            ],
          });
        },
        Rl = function (e) {
          var t = e.first,
            n = e.second,
            a = e.spectator,
            o = e.multiboxEnabled;
          return Object(at.jsxs)("div", {
            className: Al.a.wrapper,
            children: [
              Object(at.jsx)(Nl, {
                tabName: "Main",
                status: t,
                onReconnect: function () {
                  return window.GameAPI.reconnectFirstTab();
                },
              }),
              o &&
                Object(at.jsx)(Nl, {
                  tabName: "Multi",
                  status: n,
                  onReconnect: function () {
                    return window.GameAPI.reconnectSecondTab();
                  },
                }),
              Object(at.jsx)(Nl, {
                tabName: "Spectator",
                status: a,
                onReconnect: function () {
                  return window.GameAPI.reconnectSpectator();
                },
              }),
            ],
          });
        },
        Pl = Object(j.b)(function (e) {
          var t = e.settings,
            n = e.UI;
          return Object(et.a)(
            Object(et.a)({}, t.UI.stats),
            {},
            { statsValues: n.stats, multiboxEnabled: t.game.multibox.enabled }
          );
        })(function (e) {
          var t = e.shown,
            n = e.fps,
            o = e.frametime,
            s = e.loss,
            i = e.tabs,
            r = e.backgroundColor,
            c = e.backdropBlur,
            l = e.position,
            u = e.statsValues,
            d = e.firstTabStatus,
            b = e.secondTabStatus,
            g = e.spectatorTabStatus,
            p = e.multiboxEnabled,
            f = Object(a.useState)({}),
            m = Object(Xe.a)(f, 2),
            h = m[0],
            j = m[1];
          return (
            Object(a.useEffect)(
              function () {
                var e = {
                  left: "0",
                  bottom: "0",
                  transform: "",
                  borderTopLeftRadius: "0",
                  borderTopRightRadius: "0",
                  borderBottomLeftRadius: "0",
                  borderBottomRightRadius: "0",
                };
                "BOTTOM LEFT" === l
                  ? ((e.transform = ""), (e.borderTopRightRadius = "4px"))
                  : "BOTTOM CENTER" === l &&
                    ((e.left = "50%"),
                    (e.transform = "translateX(-50%)"),
                    (e.borderTopLeftRadius = "4px"),
                    (e.borderTopRightRadius = "4px")),
                  j(e);
              },
              [l]
            ),
            t
              ? Object(at.jsxs)("div", {
                  className: El.a.wrap,
                  style: Object(et.a)(
                    {
                      backgroundColor: Ga(r),
                      boxShadow: "0 0 4px ".concat(Ga(r)),
                      backdropFilter: c ? "blur(7px)" : "",
                    },
                    h
                  ),
                  children: [
                    o && Object(at.jsx)(vl, {}),
                    n &&
                      Object(at.jsxs)("div", {
                        className: El.a.fps,
                        style: {
                          color:
                            u.fps < 30
                              ? "#FA8072"
                              : u.fps < 50
                              ? "#faf172"
                              : "white",
                        },
                        children: ["FPS: ", u.fps],
                      }),
                    s &&
                      Object(at.jsxs)("div", {
                        className: El.a.loss,
                        style: {
                          color:
                            u.loss > 32
                              ? "#FA8072"
                              : u.loss > 8
                              ? "#faf172"
                              : "white",
                        },
                        children: ["LOSS: ", u.loss, "%"],
                      }),
                    i &&
                      Object(at.jsx)(Rl, {
                        first: d,
                        second: b,
                        spectator: g,
                        multiboxEnabled: p,
                      }),
                  ],
                })
              : null
          );
        }),
        Ll = n(24),
        Bl = n.n(Ll),
        Fl = Object(j.b)(function (e) {
          var t = e.settings,
            n = e.UI;
          return Object(et.a)(
            Object(et.a)({}, t.UI.topTeam),
            {},
            { players: n.topTeamPlayers }
          );
        })(function (e) {
          var t = e.shown,
            n = e.displayAmount,
            o = e.totalMass,
            s = e.shortMass,
            i = e.displayPlayerMass,
            r = e.totalPlayers,
            c = e.backgroundColor,
            l = e.backdropBlur,
            u = e.players,
            d = Object(a.useState)(0),
            b = Object(Xe.a)(d, 2),
            g = b[0],
            p = b[1],
            f = Object(a.useState)([]),
            j = Object(Xe.a)(f, 2),
            O = j[0],
            S = j[1];
          return (
            Object(a.useEffect)(
              function () {
                var e = u
                    .map(function (e) {
                      return e.mass;
                    })
                    .reduce(function (e, t) {
                      return e + t;
                    }, 0),
                  t = u
                    .filter(function (e) {
                      return e.isAlive;
                    })
                    .slice(0, n)
                    .sort(function (e, t) {
                      return t.mass - e.mass;
                    });
                S(t), p(e);
              },
              [u]
            ),
            t
              ? Object(at.jsxs)("div", {
                  className: Bl.a.wrap,
                  style: {
                    backgroundColor: Ga(c),
                    boxShadow: "0 0 4px ".concat(Ga(c)),
                    backdropFilter: l ? "blur(7px)" : "",
                  },
                  children: [
                    (o || r) &&
                      Object(at.jsxs)("div", {
                        className: Bl.a.stats,
                        children: [
                          o &&
                            Object(at.jsxs)("div", {
                              className: Bl.a.totalMass,
                              children: [
                                Object(at.jsx)(h.a, {
                                  icon: m.l,
                                  style: { marginRight: 4 },
                                }),
                                "Mass: ",
                                s ? Ra(g) : g,
                              ],
                            }),
                          r &&
                            Object(at.jsxs)("div", {
                              className: Bl.a.totalPlayers,
                              children: [
                                Object(at.jsx)(h.a, {
                                  icon: m.I,
                                  style: { marginRight: 1 },
                                }),
                                " Players: ",
                                u.length,
                                Object(at.jsx)(h.a, {
                                  style: { marginLeft: 8 },
                                  icon: m.o,
                                }),
                                " ",
                                [n],
                              ],
                            }),
                        ],
                      }),
                    Object(at.jsx)("div", {
                      className: Bl.a.players,
                      children: O.length
                        ? O.map(function (e) {
                            return Object(at.jsxs)(
                              "div",
                              {
                                className: Bl.a.player,
                                children: [
                                  i &&
                                    Object(at.jsxs)("div", {
                                      className: Bl.a.mass,
                                      children: [
                                        Object(at.jsx)(h.a, {
                                          icon: m.l,
                                          style: { marginRight: 2 },
                                        }),
                                        " [",
                                        s ? Ra(e.mass) : e.mass,
                                        "]",
                                      ],
                                    }),
                                  Object(at.jsx)("div", {
                                    className: Bl.a.nick,
                                    children: e.nick,
                                  }),
                                ],
                              },
                              e.id
                            );
                          })
                        : Object(at.jsx)("div", {
                            className: Bl.a.noPlayers,
                            children: "No players",
                          }),
                    }),
                  ],
                })
              : null
          );
        }),
        Dl = n(104),
        Ul = n.n(Dl),
        Kl = Object(j.b)(function (e) {
          var t = e.UI;
          return {
            menuShown: t.menuShown,
            settingsShown: t.settingsShown,
            hudsShown: t.hudsShown,
            settingsType: t.settingsType,
          };
        })(function (e) {
          var t,
            n = e.menuShown,
            o = e.settingsShown,
            s = e.settingsType,
            i = e.hudsShown,
            c = Object(a.useState)(!0),
            l = Object(Xe.a)(c, 2),
            u = l[0],
            d = l[1];
          return (
            Object(a.useEffect)(
              function () {
                d(n ? !o || "UI" !== s : i);
              },
              [n, o, s, i]
            ),
            Object(at.jsx)(at.Fragment, {
              children: Object(at.jsxs)("div", {
                className: Qe()(
                  ((t = {}),
                  Object(r.a)(t, Ul.a.hudsWrap, !0),
                  Object(r.a)(t, Ul.a.hidden, u),
                  t)
                ),
                children: [
                  Object(at.jsx)(Ol, {}),
                  Object(at.jsx)(yl, {}),
                  Object(at.jsx)(Pl, {}),
                  Object(at.jsx)(Fl, {}),
                  Object(at.jsx)(Tl, {}),
                ],
              }),
            })
          );
        }),
        Hl = Object(j.b)(function (e) {
          return { gameLoaded: e.UI.gameLoaded };
        })(function (e) {
          var t = e.gameLoaded;
          return Object(at.jsxs)(at.Fragment, {
            children: [
              Object(at.jsx)(bl, {}),
              t &&
                Object(at.jsxs)(at.Fragment, {
                  children: [Object(at.jsx)(ll, {}), Object(at.jsx)(Kl, {})],
                }),
            ],
          });
        }),
        Wl = n(14),
        Vl = nt.get().game,
        zl = nt.get().profiles,
        Yl = {
          gameLoaded: !1,
          gameLoaderStatus: "Loading bundle.js...",
          menuShown: !1,
          blured: !1,
          settingsShown: !1,
          settingsType: "GAME",
          gameSettingsSubmenu: "GAME_GAMEPLAY",
          themingSettingsSubmenu: "THEMING_CELLS",
          hotkeysSettingsSubmenu: "HOTKEYS_KEYBOARD",
          uiSettingsSubmenu: "UI_LEADERBOARD",
          additionalProfilesListShown: !1,
          leaderboardPlayers: [],
          ghostCells: [],
          playerMass: 0,
          topTeamPlayers: [],
          gameSocketConnecting: !1,
          hudsShown: !1,
          stats: { fps: 0, loss: 0 },
          spectateType: "CENTER",
          isPlayerPlaying: !1,
          chatMessages: [],
          inputMessageShown: !1,
        },
        Xl = nt.get().settings.game.performance,
        ql = nt.get().settings.game.cells,
        Zl = nt.get().settings.game.gameplay,
        Jl = nt.get().settings.game.multibox,
        Ql = nt.get().settings.game.minimap,
        $l = nt.get().settings.game.effects,
        eu = nt.get().settings.theming.cells,
        tu = nt.get().settings.theming.food,
        nu = nt.get().settings.theming.map,
        au = nt.get().settings.theming.minimap,
        ou = nt.get().settings.theming.multibox,
        su = nt.get().settings.theming.viruses,
        iu = nt.get().settings.hotkeys.keyboard,
        ru = function (e, t) {
          for (var n in (e = Object(et.a)({}, e))) e[n] === t && (e[n] = "");
          return e;
        },
        cu = n(141),
        lu = nt.get().settings.UI.leaderboard,
        uu = nt.get().settings.UI.stats,
        du = nt.get().settings.UI.topTeam,
        bu = nt.get().settings.UI.spectate,
        gu = nt.get().settings.UI.chat,
        pu = nt.get().settings.hotkeys.mouse,
        fu = nt.get().settings.hotkeys.commands,
        mu = Object(Wl.c)({
          UI: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Yl,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case Z:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { gameLoaded: t.gameLoaded }
                );
              case J:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { gameLoaderStatus: t.gameLoaderStatus }
                );
              case Q:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { menuShown: t.menuShown }
                );
              case $:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { blured: t.blured }
                );
              case ee:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { settingsShown: t.settingsShown }
                );
              case te:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { settingsType: t.settingsType }
                );
              case ne:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { gameSettingsSubmenu: t.gameSettingsSubmenu }
                );
              case ae:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { themingSettingsSubmenu: t.themingSettingsSubmenu }
                );
              case oe:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { hotkeysSettingsSubmenu: t.hotkeysSettingsSubmenu }
                );
              case se:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { uiSettingsSubmenu: t.uiSettingsSubmenu }
                );
              case ie:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { additionalProfilesListShown: t.additionalProfilesListShown }
                );
              case re:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { leaderboardPlayers: t.leaderboardPlayers }
                );
              case me:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { ghostCells: t.ghostCells }
                );
              case ce:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { gameSocketConnecting: t.gameSocketConnecting }
                );
              case le:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { topTeamPlayers: t.topTeamPlayers }
                );
              case ue:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { stats: t.stats }
                );
              case de:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { hudsShown: t.hudsShown }
                );
              case be:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { spectateType: t.spectateType }
                );
              case ge:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { isPlayerPlaying: t.isPlayerPlaying }
                );
              case pe:
                var n = Object($e.a)(e.chatMessages);
                return (
                  n.push(t.chatMessage),
                  Object(et.a)(Object(et.a)({}, e), {}, { chatMessages: n })
                );
              case fe:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { inputMessageShown: t.inputMessageShown }
                );
              case he:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { playerMass: t.playerMass }
                );
              default:
                return e;
            }
          },
          profiles: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : zl,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case Uc:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  {
                    leftProfiles: Object($e.a)(e.leftProfiles).map(function (
                      n,
                      a
                    ) {
                      return a === e.leftSelectedIndex
                        ? Object(et.a)(
                            Object(et.a)({}, n),
                            {},
                            { nick: t.nick }
                          )
                        : n;
                    }),
                  }
                );
              case Kc:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  {
                    leftProfiles: Object($e.a)(e.leftProfiles).map(function (
                      n,
                      a
                    ) {
                      return a === e.leftSelectedIndex
                        ? Object(et.a)(
                            Object(et.a)({}, n),
                            {},
                            { skinUrl: t.skinUrl }
                          )
                        : n;
                    }),
                  }
                );
              case Hc:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { leftSelectedIndex: t.leftSelectedIndex }
                );
              case Vc:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  {
                    rightProfiles: Object($e.a)(e.rightProfiles).map(function (
                      n,
                      a
                    ) {
                      return a === e.rightSelectedIndex
                        ? Object(et.a)(
                            Object(et.a)({}, n),
                            {},
                            { nick: t.nick }
                          )
                        : n;
                    }),
                  }
                );
              case zc:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  {
                    rightProfiles: Object($e.a)(e.rightProfiles).map(function (
                      n,
                      a
                    ) {
                      return a === e.rightSelectedIndex
                        ? Object(et.a)(
                            Object(et.a)({}, n),
                            {},
                            { skinUrl: t.skinUrl }
                          )
                        : n;
                    }),
                  }
                );
              case Yc:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { rightSelectedIndex: t.rightSelectedIndex }
                );
              case Jc:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  {
                    leftProfiles: Object($e.a)(e.leftProfiles).map(function (
                      n,
                      a
                    ) {
                      return a === e.leftSelectedIndex
                        ? Object(et.a)(Object(et.a)({}, n), {}, { tag: t.tag })
                        : n;
                    }),
                  }
                );
              case Wc:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { leftProfileLoginType: t.loginType }
                );
              case Xc:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { rightProfileLoginType: t.loginType }
                );
              case qc:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { facebookLoggedIn: t.facebookLoggedIn }
                );
              case Zc:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { googleLoggedIn: t.googleLoggedIn }
                );
              default:
                return e;
            }
          },
          game: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Vl,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case ec:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { servers: Object($e.a)(t.servers) }
                );
              case tc:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { currentServerIndex: t.currentServerIndex }
                );
              case nc:
                return Object(et.a)(Object(et.a)({}, e), {}, { mode: t.mode });
              case ac:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { token: t.token }
                );
              case oc:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { gameServerToken: t.gameServerToken }
                );
              case sc:
                return Object(et.a)(
                  Object(et.a)({}, e),
                  {},
                  { selectedGameTokenType: t.selectedGameTokenType }
                );
              default:
                return e;
            }
          },
          settings: Object(Wl.c)({
            game: Object(Wl.c)({
              performance: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : Xl,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case yt:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { renderMode: t.renderMode }
                    );
                  case _t:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { antialiasing: t.antialiasing }
                    );
                  case Ct:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { culling: t.culling }
                    );
                  case Tt:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { foodPerformanceMode: t.foodPerformanceMode }
                    );
                  case kt:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { glowFilterShaderType: t.glowFilterShaderType }
                    );
                  case vt:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { fpsLockType: t.fpsLockType }
                    );
                  default:
                    return e;
                }
              },
              cells: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : ql,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case Dt:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { mass: t.mass }
                    );
                  case Ut:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { nicks: t.nicks }
                    );
                  case Kt:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { myMass: t.myMass }
                    );
                  case Ht:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { myNick: t.myNick }
                    );
                  case Wt:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { autoHideMassAndNicks: t.autoHideMassAndNicks }
                    );
                  case Vt:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { shortMass: t.shortMass }
                    );
                  case zt:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { massUpdateDelay: t.massUpdateDelay }
                    );
                  case Yt:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { skinsType: t.skinsType }
                    );
                  case Xt:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { ringsType: t.ringsType }
                    );
                  case qt:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { ringsSpinning: t.ringsSpinning }
                    );
                  case Zt:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { soakSpeed: t.soakSpeed }
                    );
                  case Jt:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { fadeSpeed: t.fadeSpeed }
                    );
                  case Qt:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { oneColored: t.oneColored }
                    );
                  case $t:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { shadow: t.shadow }
                    );
                  case en:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { soakToEaten: t.soakToEaten }
                    );
                  case nn:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { massScale: t.massScale }
                    );
                  case tn:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { nicksScale: t.nicksScale }
                    );
                  default:
                    return e;
                }
              },
              gameplay: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : Zl,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case kn:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { animationSpeed: t.animationSpeed }
                    );
                  case vn:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { zoomSpeed: t.zoomSpeed }
                    );
                  case xn:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { cameraSpeed: t.cameraSpeed }
                    );
                  case En:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { cameraStyle: t.cameraStyle }
                    );
                  case Mn:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { spectatorMode: t.spectatorMode }
                    );
                  case An:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { viewport: t.viewport }
                    );
                  default:
                    return e;
                }
              },
              multibox: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : Jl,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case Fn:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { enabled: t.enabled }
                    );
                  case Dn:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { ring: t.ring }
                    );
                  case Un:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { changeRingColor: t.changeRingColor }
                    );
                  case Kn:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { changeCellColor: t.changeCellColor }
                    );
                  case Hn:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { hideOwnSkins: t.hideOwnSkins }
                    );
                  case Wn:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { staticColor: t.staticColor }
                    );
                  case Vn:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { smoothSwitch: t.smoothSwitch }
                    );
                  default:
                    return e;
                }
              },
              minimap: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : Ql,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case na:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { enabled: t.enabled }
                    );
                  case aa:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { viewport: t.viewport }
                    );
                  case oa:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { ghostCells: t.ghostCells }
                    );
                  case sa:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { realPlayersCells: t.realPlayersCells }
                    );
                  case ia:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { mass: t.mass }
                    );
                  case ra:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { nicks: t.nicks }
                    );
                  case "":
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { playerPosition: t.playerPosition }
                    );
                  default:
                    return e;
                }
              },
              effects: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : $l,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case ma:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { cellRemoveAnimation: t.cellRemoveAnimation }
                    );
                  case ha:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      {
                        cellRemoveAnimationForHiddenSpectator:
                          t.cellRemoveAnimationForHiddenSpectator,
                      }
                    );
                  case ja:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { spawnAnimation: t.spawnAnimation }
                    );
                  case Oa:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { wtfRgbMode: t.wtfRgbMode }
                    );
                  default:
                    return e;
                }
              },
            }),
            theming: Object(Wl.c)({
              cells: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : eu,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case La:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { oneColoredColor: t.oneColoredColor }
                    );
                  case Ba:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { oneColoredStatsColor: t.oneColoredStatsColor }
                    );
                  case Da:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { shadowColor: t.shadowColor }
                    );
                  case Ua:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { myShadowColor: t.myShadowColor }
                    );
                  case Ka:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { shadowDistance: t.shadowDistance }
                    );
                  case Ha:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { myShadowDistance: t.myShadowDistance }
                    );
                  case Wa:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { shadowStrength: t.shadowStrength }
                    );
                  case Va:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { myShadowStrength: t.myShadowStrength }
                    );
                  case za:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { transparency: t.transparency }
                    );
                  case Ya:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { colorLighten: t.colorLighten }
                    );
                  case Fa:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { adaptiveShadow: t.adaptiveShadow }
                    );
                  default:
                    return e;
                }
              },
              food: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : tu,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case R:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { enabled: t.enabled }
                    );
                  case P:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { firstTabEnabled: t.firstTabEnabled }
                    );
                  case L:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { secondTabEnabled: t.secondTabEnabled }
                    );
                  case B:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { topOneTabEnabled: t.topOneTabEnabled }
                    );
                  case x:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { size: t.size }
                    );
                  case E:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { color: t.color }
                    );
                  case M:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { glow: t.glow }
                    );
                  case A:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { glowColor: t.glowColor }
                    );
                  case I:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { glowDistance: t.glowDistance }
                    );
                  case G:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { glowStrength: t.glowStrength }
                    );
                  case N:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { crisp: t.crisp }
                    );
                  default:
                    return e;
                }
              },
              map: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : nu,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case co:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { borderType: t.borderType }
                    );
                  case lo:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { borderRoundness: t.borderRoundness }
                    );
                  case uo:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { borderWidth: t.borderWidth }
                    );
                  case bo:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { borderColor: t.borderColor }
                    );
                  case go:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { borderGlow: t.borderGlow }
                    );
                  case po:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { borderGlowColor: t.borderGlowColor }
                    );
                  case fo:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { borderGlowDistance: t.borderGlowDistance }
                    );
                  case mo:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { borderGlowStrength: t.borderGlowStrength }
                    );
                  case ho:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { backgroundTint: t.backgroundTint }
                    );
                  case jo:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { backgroundImage: t.backgroundImage }
                    );
                  case Oo:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { backgroundImageUrl: t.backgroundImageUrl }
                    );
                  case So:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      {
                        backgroundImageLiveEffectStrength:
                          t.backgroundImageLiveEffectStrength,
                      }
                    );
                  case wo:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { globalBackgroundImage: t.globalBackgroundImage }
                    );
                  case yo:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { globalBackgroundImageUrl: t.globalBackgroundImageUrl }
                    );
                  case _o:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { globalBackgroundImageTint: t.globalBackgroundImageTint }
                    );
                  case Co:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      {
                        globalBackgroundImageLiveEffectStrength:
                          t.globalBackgroundImageLiveEffectStrength,
                      }
                    );
                  default:
                    return e;
                }
              },
              minimap: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : au,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case zo:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { backgroundColor: t.backgroundColor }
                    );
                  case Yo:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { size: t.size }
                    );
                  case Xo:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { myViewportColor: t.myViewportColor }
                    );
                  case qo:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { topOneViewportColor: t.topOneViewportColor }
                    );
                  case Zo:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { playerSize: t.playerSize }
                    );
                  case Jo:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { playerColor: t.playerColor }
                    );
                  case Qo:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { ghostCellsColor: t.ghostCellsColor }
                    );
                  default:
                    return e;
                }
              },
              multibox: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : ou,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case cs:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { ringStyle: t.ringStyle }
                    );
                  case ls:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { linedRingSize: t.linedRingSize }
                    );
                  case us:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { initialRingColor: t.initialRingColor }
                    );
                  case ds:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { focusedRingColor: t.focusedRingColor }
                    );
                  case bs:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { initialStaticCellColor: t.initialStaticCellColor }
                    );
                  case gs:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { focusedStaticCellColor: t.focusedStaticCellColor }
                    );
                  default:
                    return e;
                }
              },
              viruses: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : su,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case ys:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { color: t.color }
                    );
                  case _s:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { borderWidth: t.borderWidth }
                    );
                  case Cs:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { borderColor: t.borderColor }
                    );
                  case Ts:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { glow: t.glow }
                    );
                  case ks:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { glowColor: t.glowColor }
                    );
                  case vs:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { glowDistance: t.glowDistance }
                    );
                  case xs:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { glowStrength: t.glowStrength }
                    );
                  case Es:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { transparency: t.transparency }
                    );
                  case Ms:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { massType: t.massType }
                    );
                  case As:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { fillCircleColor: t.fillCircleColor }
                    );
                  default:
                    return e;
                }
              },
            }),
            hotkeys: Object(Wl.c)({
              keyboard: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : iu,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case $s:
                    return Object(et.a)(
                      Object(et.a)(Object(et.a)({}, e), ru(e, t.feed)),
                      {},
                      { feed: t.feed }
                    );
                  case ei:
                    return Object(et.a)(
                      Object(et.a)(Object(et.a)({}, e), ru(e, t.macroFeed)),
                      {},
                      { macroFeed: t.macroFeed }
                    );
                  case ti:
                    return Object(et.a)(
                      Object(et.a)(Object(et.a)({}, e), ru(e, t.split)),
                      {},
                      { split: t.split }
                    );
                  case ni:
                    return Object(et.a)(
                      Object(et.a)(Object(et.a)({}, e), ru(e, t.doubleSplit)),
                      {},
                      { doubleSplit: t.doubleSplit }
                    );
                  case ai:
                    return Object(et.a)(
                      Object(et.a)(Object(et.a)({}, e), ru(e, t.tripleSplit)),
                      {},
                      { tripleSplit: t.tripleSplit }
                    );
                  case oi:
                    return Object(et.a)(
                      Object(et.a)(Object(et.a)({}, e), ru(e, t.splitSixteen)),
                      {},
                      { splitSixteen: t.splitSixteen }
                    );
                  case si:
                    return Object(et.a)(
                      Object(et.a)(Object(et.a)({}, e), ru(e, t.quickRespawn)),
                      {},
                      { quickRespawn: t.quickRespawn }
                    );
                  case ii:
                    return Object(et.a)(
                      Object(et.a)(Object(et.a)({}, e), ru(e, t.pauseCell)),
                      {},
                      { pauseCell: t.pauseCell }
                    );
                  case ri:
                    return Object(et.a)(
                      Object(et.a)(
                        Object(et.a)({}, e),
                        ru(e, t.toggleCellHelpers)
                      ),
                      {},
                      { toggleCellHelpers: t.toggleCellHelpers }
                    );
                  case ci:
                    return Object(et.a)(
                      Object(et.a)(
                        Object(et.a)({}, e),
                        ru(e, t.toggleCellSkins)
                      ),
                      {},
                      { toggleCellSkins: t.toggleCellSkins }
                    );
                  case li:
                    return Object(et.a)(
                      Object(et.a)(
                        Object(et.a)({}, e),
                        ru(e, t.toggleCellRings)
                      ),
                      {},
                      { toggleCellRings: t.toggleCellRings }
                    );
                  case ui:
                    return Object(et.a)(
                      Object(et.a)(Object(et.a)({}, e), ru(e, t.switchTabs)),
                      {},
                      { switchTabs: t.switchTabs }
                    );
                  case di:
                    return Object(et.a)(
                      Object(et.a)(
                        Object(et.a)({}, e),
                        ru(e, t.toggleFoodRender)
                      ),
                      {},
                      { toggleFoodRender: t.toggleFoodRender }
                    );
                  case bi:
                    return Object(et.a)(
                      Object(et.a)(
                        Object(et.a)({}, e),
                        ru(e, t.toggleSpectatorMode)
                      ),
                      {},
                      { toggleSpectatorMode: t.toggleSpectatorMode }
                    );
                  case gi:
                    return Object(et.a)(
                      Object(et.a)(Object(et.a)({}, e), ru(e, t.toggleHuds)),
                      {},
                      { toggleHuds: t.toggleHuds }
                    );
                  default:
                    return e;
                }
              },
              mouse: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : pu,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case Be:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { left: t.left }
                    );
                  case Fe:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { right: t.right }
                    );
                  case De:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { middle: t.middle }
                    );
                  default:
                    return e;
                }
              },
              commands: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : fu,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case Di:
                    var n = t.index,
                      a = t.key,
                      o = t.message,
                      s = e.map(function (e) {
                        return Object(et.a)({}, e);
                      });
                    return (
                      s.forEach(function (e, t) {
                        t === n
                          ? ((e.key = a), (e.message = o))
                          : e.key === a && (e.key = "");
                      }),
                      s
                    );
                  default:
                    return e;
                }
              },
            }),
            UI: Object(Wl.c)({
              leaderboard: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : lu,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case zi:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { shown: t.shown }
                    );
                  case Yi:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { displayAmount: t.displayAmount }
                    );
                  case Xi:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { displayPosition: t.displayPosition }
                    );
                  case qi:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { scale: t.scale }
                    );
                  case Zi:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { showMass: t.showMass }
                    );
                  case Ji:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { backdropBlur: t.backdropBlur }
                    );
                  case Qi:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { backgroundColor: t.backgroundColor }
                    );
                  case $i:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { meColor: t.meColor }
                    );
                  case er:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { shortMass: t.shortMass }
                    );
                  default:
                    return e;
                }
              },
              stats: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : uu,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case ar:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { shown: t.shown }
                    );
                  case or:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { fps: t.fps }
                    );
                  case sr:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { loss: t.loss }
                    );
                  case ir:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { backgroundColor: t.backgroundColor }
                    );
                  case rr:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { backdropBlur: t.backdropBlur }
                    );
                  case cr:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { frametime: t.frametime }
                    );
                  case "":
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { position: t.position }
                    );
                  case lr:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { tabs: t.tabs }
                    );
                  case ur:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { firstTabStatus: t.firstTabStatus }
                    );
                  case dr:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { secondTabStatus: t.secondTabStatus }
                    );
                  case br:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { spectatorTabStatus: t.spectatorTabStatus }
                    );
                  default:
                    return e;
                }
              },
              topTeam: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : du,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case pr:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { shown: t.shown }
                    );
                  case fr:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { displayAmount: t.displayAmount }
                    );
                  case hr:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { totalMass: t.totalMass }
                    );
                  case wr:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { shortMass: t.shortMass }
                    );
                  case mr:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { displayPlayerMass: t.displayPlayerMass }
                    );
                  case jr:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { totalPlayers: t.totalPlayers }
                    );
                  case Or:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { backgroundColor: t.backgroundColor }
                    );
                  case Sr:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { backdropBlur: t.backdropBlur }
                    );
                  default:
                    return e;
                }
              },
              spectate: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : bu,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case Cr:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { shown: t.shown }
                    );
                  case kr:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { backdropBlur: t.backdropBlur }
                    );
                  case Tr:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { backgroundColor: t.backgroundColor }
                    );
                  default:
                    return e;
                }
              },
              chat: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : gu,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case xr:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { enabled: t.enabled }
                    );
                  case Er:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { chatType: t.chatType }
                    );
                  case Ir:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { height: t.height }
                    );
                  case Mr:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { backgroundColor: t.backgroundColor }
                    );
                  case Ar:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { fontColor: t.fontColor }
                    );
                  case Gr:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      {
                        commandMessageBackgroundColor:
                          t.commandMessageBackgroundColor,
                      }
                    );
                  case Nr:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { commandMessageFontColor: t.commandMessageFontColor }
                    );
                  case Rr:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      {
                        gameMessageBackgroundColor:
                          t.gameMessageBackgroundColor,
                      }
                    );
                  case Pr:
                    return Object(et.a)(
                      Object(et.a)({}, e),
                      {},
                      { gameMessageFontColor: t.gameMessageFontColor }
                    );
                  default:
                    return e;
                }
              },
            }),
          }),
        }),
        hu = Object(cu.a)({ reducer: mu }),
        ju = function (e) {
          (window.FrontAPI = {}),
            (window.FrontAPI.setGameLoaderShown = function (t) {
              e.dispatch(ze(t));
            }),
            (window.FrontAPI.setGameLoaderStatus = function (t) {
              e.dispatch({ type: J, gameLoaderStatus: t });
            }),
            (window.FrontAPI.updateStats = function (t, n) {
              e.dispatch({ type: ue, stats: { fps: t, loss: n } });
            }),
            (window.FrontAPI.updateLeaderboard = function (t) {
              e.dispatch({ type: re, leaderboardPlayers: t });
            }),
            (window.FrontAPI.updateGhostCells = function (t) {
              e.dispatch(
                (function (e) {
                  return { type: me, ghostCells: e };
                })(t)
              );
            }),
            (window.FrontAPI.updateTopTeam = function (t) {
              e.dispatch({ type: le, topTeamPlayers: t });
            }),
            (window.FrontAPI.setRegions = function (t) {
              e.dispatch(ic(t));
            }),
            (window.FrontAPI.setEllapsedFrametime = function (e) {
              kl.updateElapsed(e);
            }),
            (window.FrontAPI.setIsPlayerPlaying = function (t) {
              e.dispatch({ type: ge, isPlayerPlaying: t });
            }),
            (window.FrontAPI.setFacebookLoggedIn = function (t) {
              e.dispatch({ type: qc, facebookLoggedIn: t });
            }),
            (window.FrontAPI.setGoogleLoggedIn = function (t) {
              e.dispatch({ type: Zc, googleLoggedIn: t });
            }),
            (window.FrontAPI.addChatMessage = function (t, n, a, o) {
              e.dispatch({
                type: pe,
                chatMessage: { nick: t, message: n, type: a, key: o },
              });
            }),
            (window.FrontAPI.setToken = function (t) {
              e.dispatch(rc(t));
            }),
            (window.FrontAPI.setServerToken = function (t) {
              e.dispatch(cc(t));
            }),
            (window.FrontAPI.setSocketConnecting = function (t) {
              e.dispatch(Se(t));
            }),
            (window.FrontAPI.setFirstTabStatus = function (t) {
              e.dispatch({ type: ur, firstTabStatus: t });
            }),
            (window.FrontAPI.setSecondTabStatus = function (t) {
              e.dispatch({ type: dr, secondTabStatus: t });
            }),
            (window.FrontAPI.setSpectatorTabStatus = function (t) {
              e.dispatch({ type: br, spectatorTabStatus: t });
            }),
            (window.FrontAPI.setMyMass = function (t) {
              e.dispatch({ type: he, playerMass: t });
            });
        },
        Ou = function (e) {
          var t = e.getState().settings.hotkeys.mouse;
          He.init(Object(et.a)({}, t));
        },
        Su = function (e) {
          var t = e.getState().settings.hotkeys.keyboard,
            n = e.getState().settings.hotkeys.commands;
          Qs.init({
            feedKey: t.feed,
            macroFeedKey: t.macroFeed,
            splitKey: t.split,
            doubleSplitKey: t.doubleSplit,
            tripleSplitKey: t.tripleSplit,
            splitSixteenKey: t.splitSixteen,
            quickRespawnKey: t.quickRespawn,
            pauseCellKey: t.pauseCell,
            toggleCellHelpersKey: t.toggleCellHelpers,
            toggleCellRingsKey: t.toggleCellRings,
            toggleCellSkinsKey: t.toggleCellSkins,
            switchTabsKey: t.switchTabs,
            toggleFoodRenderKey: t.toggleFoodRender,
            toggleSpectatorModeKey: t.toggleSpectatorMode,
            toggleHudsKey: t.toggleHuds,
            commands: n,
          }),
            C.bindFunctionToKey("down", "Escape", function () {
              var t,
                n = !e.getState().UI.menuShown;
              e.dispatch(Ve(n)),
                null === (t = Ys.lastUsedElementForUnfocus) ||
                  void 0 === t ||
                  t.blur();
            }),
            C.bindFunctionToKey("down", "Enter", function () {
              if (!e.getState().UI.menuShown) {
                var t = e.getState().UI.inputMessageShown;
                e.dispatch(
                  (function (e) {
                    return { type: fe, inputMessageShown: e };
                  })(!t)
                ),
                  (C.block = !t);
              }
            });
        },
        wu = function () {
          var e = setInterval(function () {
            window.GameAPI &&
              "function" === typeof window.GameAPI.init &&
              (clearInterval(e), window.GameAPI.init());
          }, 100);
        },
        yu = function (e) {
          nt.init(e.getState()),
            Su(e),
            Ou(e),
            ju(e),
            e.subscribe(function () {
              return nt.save(e.getState());
            }),
            k.set(e),
            wu();
        };
      i.a.render(
        Object(at.jsx)(o.a.StrictMode, {
          children: Object(at.jsx)(j.a, {
            store: hu,
            children: Object(at.jsx)(Hl, {}),
          }),
        }),
        document.getElementById("root")
      ),
        yu(hu);
    },
    27: function (e, t, n) {
      e.exports = {
        wrap: "range_wrap__fC5KE",
        disabled: "range_disabled__34QoF",
        hint: "range_hint__3j1gy",
        right: "range_right__2tpYk",
        value: "range_value__3RfSm",
        input: "range_input__2U5HY",
      };
    },
    28: function (e, t, n) {
      e.exports = {
        wrap: "spectate_wrap__1UINH",
        hidden: "spectate_hidden__25X6C",
        setVisibilityHidden: "spectate_setVisibilityHidden__3lqyJ",
        targetMode: "spectate_targetMode__3yoRL",
        target: "spectate_target__2Er6u",
        active: "spectate_active__28prK",
      };
    },
    29: function (e, t, n) {
      e.exports = { selected: "theming_selected__2vY2k" };
    },
    30: function (e, t, n) {
      e.exports = {
        wrap: "select-list_wrap__1ZdvS",
        left: "select-list_left__1cJSU",
        right: "select-list_right__2VAFb",
        shown: "select-list_shown__Soen7",
        selected: "select-list_selected__KTNCC",
      };
    },
    35: function (e, t, n) {
      e.exports = { selected: "game_selected__yLbBm" };
    },
    36: function (e, t, n) {
      e.exports = {
        wrap: "command_wrap__3cItD",
        top: "command_top__3tLtD",
        topWrapper: "command_topWrapper__3eIHZ",
        text: "command_text__2qsHh",
        error: "command_error__30zN6",
        shown: "command_shown__I84nW",
      };
    },
    37: function (e, t, n) {
      e.exports = {
        token: "token_token__2Acjc",
        blured: "token_blured__lS3kY",
        serverToken: "token_serverToken__1Ws99",
        selected: "token_selected__3nZWP",
      };
    },
    38: function (e, t, n) {
      e.exports = {
        wrap: "customization_wrap__1xWY3",
        settings: "customization_settings___JhQD",
        hotkeys: "customization_hotkeys__2nA7k",
        theming: "customization_theming__1iYYI",
        blur: "customization_blur__14PTK",
        active: "customization_active__2dnbr",
        blurActive: "customization_blurActive__2fTR0",
      };
    },
    39: function (e, t, n) {
      e.exports = {
        wrap: "chat-box_wrap__2ryLc",
        messageWrap: "chat-box_messageWrap__2mL_0",
        nick: "chat-box_nick__14WTG",
      };
    },
    43: function (e, t, n) {
      e.exports = {
        categories: "header_categories__166D8",
        selected: "header_selected__h56xe",
      };
    },
    44: function (e, t, n) {
      e.exports = { selected: "UI_selected__DmCZE" };
    },
    45: function (e, t, n) {
      e.exports = {
        wrap: "create-game_wrap__3S3bJ",
        create: "create-game_create__2yalS",
        active: "create-game_active__2y4CN",
        cancelText: "create-game_cancelText__3K87A",
        creating: "create-game_creating__3Ab4M",
        createText: "create-game_createText__Dv5Xh",
      };
    },
    46: function (e, t, n) {
      e.exports = {
        wrap: "join-game_wrap__MQyMk",
        joinGame: "join-game_joinGame__1AmbK",
        cancelText: "join-game_cancelText__5JtRh",
        joining: "join-game_joining__1MC5L",
        joinText: "join-game_joinText__KkIjL",
      };
    },
    47: function (e, t, n) {
      e.exports = {
        wrap: "game-loader_wrap__27AhZ",
        hidden: "game-loader_hidden__R58VM",
        infoWrapper: "game-loader_infoWrapper__3wX6g",
        discord: "game-loader_discord__37gRv",
        version: "game-loader_version__38zgj",
        statusWrapper: "game-loader_statusWrapper__3gHjq",
      };
    },
    51: function (e, t, n) {
      e.exports = {
        wrap: "menu_wrap__1NsjG",
        theming: "menu_theming__1tWQa",
        hidden: "menu_hidden__10vva",
        innerWrap: "menu_innerWrap__QdS0k",
      };
    },
    54: function (e, t, n) {
      e.exports = {
        profile: "profile_profile__39KoT",
        errorMsg: "profile_errorMsg__2BGPG",
        errored: "profile_errored__1S3Kn",
      };
    },
    55: function (e, t, n) {
      e.exports = {
        gameServer: "game-server_gameServer__tL8GB",
        active: "game-server_active__1kLWM",
        serverName: "game-server_serverName__2Oy8u",
        playersAmount: "game-server_playersAmount__25LpI",
      };
    },
    56: function (e, t, n) {
      e.exports = {
        middle: "game-actions_middle__GJVo-",
        wrap: "game-actions_wrap__3g1iY",
        top: "game-actions_top__4E53-",
        bottom: "game-actions_bottom__I2HCj",
      };
    },
    57: function (e, t, n) {
      e.exports = {
        wrap: "status_wrap__3IkEo",
        status: "status_status__1U8cp",
        reconnect: "status_reconnect__32-MI",
      };
    },
    69: function (e, t, n) {
      e.exports = {
        resetOutWrapper: "reset_resetOutWrapper__2PM2J",
        reset: "reset_reset__3HDia",
        resetClicked: "reset_resetClicked__vol69",
        resetWrap: "reset_resetWrap__WAhTh",
      };
    },
    70: function (e, t, n) {
      e.exports = {
        wrap: "input_wrap__2d2ST",
        disabled: "input_disabled__1WAuG",
      };
    },
    71: function (e, t, n) {
      e.exports = { selected: "hotkeys_selected__1laDy" };
    },
    72: function (e, t, n) {
      e.exports = {
        wrap: "keyboard-binder_wrap__1kVgf",
        disabled: "keyboard-binder_disabled__2ZSoo",
        hint: "keyboard-binder_hint__2dss9",
      };
    },
    73: function (e, t, n) {
      e.exports = {
        wrap: "profiles-list_wrap__1t42a",
        left: "profiles-list_left__2nXpZ",
        right: "profiles-list_right__2YWSV",
      };
    },
    74: function (e, t, n) {
      e.exports = {
        wrap: "play-spectate_wrap__3GxJx",
        active: "play-spectate_active__3dui8",
        play: "play-spectate_play__3-zaU",
        spectate: "play-spectate_spectate__32eWM",
      };
    },
    75: function (e, t, n) {
      e.exports = {
        wrap: "login_wrap__XttLf",
        tabsLoginType: "login_tabsLoginType__1xAzq",
      };
    },
    76: function (e, t, n) {
      e.exports = {
        wrap: "stats_wrap__KcAdC",
        fps: "stats_fps__efX0A",
        loss: "stats_loss__11Sht",
      };
    },
    96: function (e, t, n) {
      e.exports = {
        wrap: "save-export-import-reset_wrap__2-sKQ",
        save: "save-export-import-reset_save__1D36Z",
      };
    },
    99: function (e, t, n) {
      e.exports = {
        wrap: "wrapper_wrap__2k1-a",
        hidden: "wrapper_hidden__12p-I",
        animateVisibilityHidden: "wrapper_animateVisibilityHidden__2P3jh",
      };
    },
  },
  [[260, 1, 2]],
]);
