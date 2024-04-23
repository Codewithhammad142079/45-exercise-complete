
let current_users : string[] = ["Admin","Eric","James","Sarah","Emma"]
let new_users : string [] = ["Admin","Sarah","Hamza","Aliza","Haseeb"]

let current_users_lower : string [] =current_users.map(user => user.toLowerCase())

if ("let new_user of new_users") {
    if (current_users_lower.includes(new_users.toLowerCase())){
        console.log(`Sorry ${new_users},that name is taken`)
    } else{
        console.log(`Yes ${new_users}, is stil in avaliabel list`)
        
    }
}
