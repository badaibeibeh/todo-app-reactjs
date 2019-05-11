import React from 'react';

class Popup extends React.Component {
    constructor() {
        super();
    
        this.state = {
            nameValue: '',
            emailValue: '',
            passValue: ''
        };
    }
    handleName(text){
        this.setState({ nameValue:text.target.value })
        
     }

    handleEmail(text){
        this.setState({ emailValue:text.target.value })
        
     }
     handlePassword(text){
        this.setState({ passValue:text.target.value })
     }
  
  login()
    {
        let obj = {}
        obj.name = this.state.name;
        obj.email = this.state.email;
        obj.password = this.state.password
    
    fetch('https://private-anon-0738b7c55f-refiqi.apiary-mock.com/users/create', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
  },
    
});
}

    state = {
        showPass: false
      }
      togglePass = () => {
        this.setState({ showPass: !this.state.showPass })
      }
  render() {
    if(!this.props.show) {
      return null;
    }

    return (
    <div className="signup d-flex justify-content-center">
        <div className="modal-bg">
            <div className="icon-exit"><button className="icon-x close" onClick={this.props.onClose} aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>
        <div className="signup">
        
        <p className="signup-title">DAFTAR</p>

        {/* form nama */}
        <div className="signup-name">
             <p className="name-title">Nama lengkap*</p>

            <input 
                className="name-form"
                name="name" 
                placeholder="Joko Sambodo" required 
                onChange={(text) => { this.handleName(text) }} 
            />
        </div>
        
        {/* form email */}
        <div className="signup-email">
            <p className="email-title">E-mail*</p>
            <input 
                className="email-form"
                name="email" 
                placeholder="contoh@email.com" 
                onChange={(text) => { this.handleEmail(text) }} 
                required 
              />
        </div>

        <button className="pass-icon" onClick={this.togglePass}></button>
            <img className="icon-stroke" alt="toggle" src={'https://res.cloudinary.com/monggovest/image/upload/v1543300074/icon/eye-regular-svg.svg'} />

        {/* form pass */} 
        <div className="login-pass">
             <p className="pass-title">Kata Sandi*</p>
            <input 
                className="pass-form" 
                name="password"
                id="pass-form" 
                type={(this.state.showPass ? 'text' : 'password' )} 
                placeholder="x9cVLk" 
                pattern="^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$" 
                onChange={(text) => { this.handlePassword(text) }} 
                required 
            />
            <p className="pass-text">Pastikan kata sandi mengandung angka, huruf besar, dan huruf kapital, serta lebih dari 6 karakter.</p>
      </div>
      
            <button className="login-button" onClick={()=>{this.login()}} ><span className="lanjutkan">LANJUTKAN</span></button>
      <div className="login-link">
            <p className="text-center">Sudah Punya Akun ?<a className="log-link" href="#" onClick={this.props.handleLogin}> Masuk Disini !</a></p>
      </div>

        </div> 
        </div>
        
    </div>

    );
  }
}

export default Popup;