let day = prompt("Planmasını öğrenmek istediğiniz günü giriniz. (Küçük harf kullanınız) ")

switch (day) {
    case "pazartesi" : alert("InClass") 
    break;

    case "salı" : alert("InClass") 
    break;
    
    case "çarşamba" : alert("InClass") 
    break;
    
    case "perşembe" : alert("InClass") 
    break;
    
    case "cuma" : alert("Teamwork") 
    break;
    
    case "cumartesi" : alert("InClass + Workshop") 
    break;
    
    case "pazar" : alert("Self-Study") 
    break;
    default:
        alert("Yanlis gun girildi.")
    }
