var TnsPluginPodAvplayer = require("nativescript-tns-plugin-pod-avplayer").TnsPluginPodAvplayer;
var tnsPluginPodAvplayer = new TnsPluginPodAvplayer();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("functionname", function() {
  it("exists", function() {
    expect(tnsPluginPodAvplayer.functionname).toBeDefined();
  });

  it("returns a promise", function() {
    expect(tnsPluginPodAvplayer.functionname()).toEqual(jasmine.any(Promise));
  });
});