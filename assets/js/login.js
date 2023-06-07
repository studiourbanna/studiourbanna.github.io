firebase.auth().onAuthStateChanged(function (usuario) {
    if (usuario) {
        // Usuário está conectado
      document.getElementById('div_usuario') = 'Olá <strong>usuário</strong>. <a class="nav-link" href="{{site.baseurl}}/logout.html">Logout</a>';
  
      var user = firebase.auth().currentUser;
  
      if(user != null) {
  
        var email_do_usuario = user.email;
        var email_verificado = user.emailVerified;
         
         //verifica se o usuario é verificado ou não, para mostrar ou não o botão de verificação.
         if(email_verificado){
              document.getElementById("user_veri").style.display = "none";
            }
            else{
              document.getElementById("user_veri").style.display = "block";
            }
        //valida se o email está verificado, se sim, diz que está verificado, se não, diz o contrário.
        document.getElementById("usuario").innerHTML = email_verificado ? "conta verificada" : "conta não verificada";
  
      }
  
    } else {
      // Nenhum usuário está conectado
      document.getElementById('div_usuario') = '<a class="nav-link" href="{{site.baseurl}}/login.html">Login</a>';
    }
  });
  
  function entrar() {
  
    var emailUsuario = document.getElementById('email').value;
    var senhaUsuario = document.getElementById('password').value;
    
    //método de login de usuários existentes no firebase
    firebase
    .auth()
    .signInWithEmailAndPassword(emailUsuario, senhaUsuario)
    .catch(function (error) {
      // Lide com erros aqui
      var codigoErro = error.code;
      var mensagemErro = error.message;
      window.alert('Erro : ' + mensagemErro);
    });
  
  }
  
  function verificacao(){
  
    var user = firebase
    .auth()
    .currentUser;
  
  user.sendEmailVerification().then(function() {
    // Email enviado.
    window.alert("📧 Email de verificação enviado!");
     
  }).catch(function(error) {
    // Se ocorrer algum erro...
    var mensagemErro = error.message;
    window.alert("Erro : " + mensagemErro);
  });
  }
  
  function sair() {
    firebase.auth().signOut();
  }