document.getElementById("gonder").addEventListener("click", (e) => {
    
     let userName = document.getElementById("userName").value
     let userNot = document.getElementById("userNot").value

    
     
    if(userName == "" || userNot == ""){
         inputClear()
         uyari(e.target.value)
    }else{
        let listElement = document.createElement("li")
        let listUserName = document.createElement("span")
        listUserName.innerHTML = userName
        let listUserNot = document.createElement("span")
        listUserNot.innerHTML = userNot
        listElement.appendChild(listUserName)
        listElement.appendChild(listUserNot)
        
        document.getElementById("listUl").appendChild(listElement)
        
        inputClear()
    }

    

    
     

})

document.getElementById("sifirla").addEventListener("click", (e) => {
    
    let liste = document.getElementById("listUl")
    
    if(liste.firstChild){
        while(liste.firstChild){
            liste.removeChild(liste.firstChild)
        }   
    }else{
        uyari(e.target.value)
    }

 
    

})

let inputClear = () => {
    document.getElementById("userName").value = ""
    document.getElementById("userNot").value = ""
    
}

let uyari = (e) => {
    if( e == "Sıfırla" ){
        document.getElementById("uyariP").innerHTML = "Listeniz Boş !"
            uyariClear()

    }else{
        document.getElementById("uyariP").innerHTML = "Kullanıcı Adı veya Not Bilgisi Boş Olamaz!"
        uyariClear()
    }   
}

     let uyariClear = () => {
        setTimeout(() => {
            document.getElementById("uyariP").innerHTML = ""
        },5000)
    }