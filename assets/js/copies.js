$("#btn_mail").click(function() {
    const email = document.createElement("textarea")
    
    email.value = "nikolaoskoutantos@gmail.com"
    
    document.body.appendChild(email)
    
    email.select()
    
  document.execCommand("copy")
    
      document.body.removeChild(email);
    alert("Email Copied to clipboard")
})

$("#btn_in").click(function() {
    window.open("https://www.linkedin.com/in/nikolaos-koutantos/");
    
})
$("#btn_git").click(function() {
    window.open("https://github.com/nikolaoskoutantos");
    
})


