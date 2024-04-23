// HELLO ADMIN
let users : string[] = ["admin","eric","james","sarah","emma"];

for (let usre of users) {
    if (usre === "admin") {
        console.log("Hello admin,would you like to see a status report?")
    } else {
        console.log(`Hello ${usre},thank you for loggin in again`)
    }
}