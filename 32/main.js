var current_users = ["Admin", "Eric", "James", "Sarah", "Emma"];
var new_users = ["Admin", "Sarah", "Hamza", "Aliza", "Haseeb"];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
if ("let new_user of new_users") {
    if (current_users_lower.includes(new_users.toLowerCase())) {
        console.log("Sorry ".concat(new_users, ",that name is taken"));
    }
    else {
        console.log("Yes ".concat(new_users, ", is stil in avaliabel list"));
    }
}
