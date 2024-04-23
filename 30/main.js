// HELLO ADMIN
var users = ["admin", "eric", "james", "sarah", "emma"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var usre = users_1[_i];
    if (usre === "admin") {
        console.log("Hello admin,would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(usre, ",thank you for loggin in again"));
    }
}
