class FormValidation {
    constructor (){
        this.name = document.querySelector(`input[name="name"]`).value;
        this.phone = document.querySelector(`input[name="phone"]`).value;
        this.email = document.querySelector(`input[name="email"]`).value;
        this.comment = document.querySelector(`textarea[name="comment"]`).value;

        this._clearClasses();

        this.valid = true;

        if(!this._isNameValid()) {
            document.querySelector(`input[name="name"]`).classList.add('error');
            let el = document.createElement('span');
            el.textContent = 'Введите имя. Только английские буквы';
            document.querySelector(`input[name="name"]`)
            .insertAdjacentElement("afterend", el);
            this.valid = false;
        }
        
        if(!this.isPhoneValid()) {
            document.querySelector(`input[name="phone"]`).classList.add('error');
            let el = document.createElement('span');
            el.textContent = 'формат номера +7(000)000-0000';
            document.querySelector(`input[name="phone"]`)
            .insertAdjacentElement("afterend", el);
            this.valid = false;
        }
        if(!this.isEmailValid()) {
            document.querySelector(`input[name="email"]`).classList.add('error');
            let el = document.createElement('span');
            el.textContent = 'формат email mail@mail.ru';
            document.querySelector(`input[name="email"]`)
            .insertAdjacentElement("afterend", el);
            this.valid = false;
        }

      
    }

    _clearClasses() {
        document.querySelector(`input[name="name"]`).classList.remove('error');
        document.querySelector(`input[name="phone"]`).classList.remove('error');
        document.querySelector(`input[name="email"]`).classList.remove('error');
        if (document.querySelector(`input[name="name"]`).parentNode.querySelector('span') !== null)
            document.querySelector(`input[name="name"]`).parentNode.querySelector('span').remove()
        if (document.querySelector(`input[name="phone"]`).parentNode.querySelector('span') !== null)
            document.querySelector(`input[name="phone"]`).parentNode.querySelector('span').remove()
        if (document.querySelector(`input[name="email"]`).parentNode.querySelector('span') !== null)
            document.querySelector(`input[name="email"]`).parentNode.querySelector('span').remove()
    }

    _isNameValid(){
        return (/^[a-z]*$/i).test(this.name) && this.name !== '';
    }

    isPhoneValid() {
        return (/^\+7\([0-9]{3}\)[0-9]{3}\-[0-9]{4}$/).test(this.phone) && this.phone !== '';
    }

    isEmailValid() {
        return (/^[a-z.-]+\@[a-z]+\.[a-z]{2-4}$/).test(this.email) && this.email !== '';
    }

    isFormValid(){
        return this.valid;
    }
}






document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form').addEventListener('click', e => {
        if (e.target.className === 'submit') {
            const form = new FormValidation();
            console.log(form.isEmailValid());
        }
        
    });
});