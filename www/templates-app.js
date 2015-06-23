angular.module('templates-app', ['detail/detail.tpl.html', 'home/home.tpl.html']);

angular.module("detail/detail.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("detail/detail.tpl.html",
    "<ion-view title=\"Fulbito Manager\">\n" +
    "\n" +
    "    <ion-content>\n" +
    "        This is the Details page\n" +
    "    </ion-content>\n" +
    "\n" +
    "</ion-view>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<ion-view title=\"Fulbito Manager\">\n" +
    "    <ion-content padding=\"true\">\n" +
    "        Welcome to the Home Page Status\n" +
    "        <a ui-sref=\"detail\">Go to details</a>\n" +
    "    </ion-content>\n" +
    "</ion-view>");
}]);
