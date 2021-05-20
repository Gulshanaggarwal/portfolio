
window.addEventListener('load', () => {
  let hamburger_icon = document.querySelector('#hamburger');
  let cross_icon = document.querySelector('.cross-icon');
  let chat_icon = document.querySelector('#chatting-icon');
  let form = document.querySelector('#form');
  let nav_items = document.querySelector('.nav-items');
  let name = document.querySelector('.name');
  let email = document.querySelector('.email');
  let message = document.querySelector('.message-box');
  let loader = document.querySelector('#loader-wrapper');

  chat_icon.addEventListener('click', () => {
    form.style.display = 'block';
  });

  cross_icon.addEventListener('click', () => {
    form.style.display = 'none';
    name.value = "";
    email.value = "";
    message.value = "";
  });

  hamburger_icon.addEventListener('click', () => {
    nav_items.classList.toggle('menu-show');
    hamburger_icon.classList.toggle('ham-active');
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let captchaResponse = grecaptcha.getResponse();
    if (captchaResponse.length !== 0) {
      loader.style.display = 'flex';

      let Data = {
        name: name.value,
        email: email.value,
        message: message.value
      }

      fetch('https://post-api-portfolio.herokuapp.com/portfolio', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(Data),
      })
        .then((res) => {
          loader.style.display = 'none';
          if (res.status === 200) {
            Swal.fire({
              toast: true,
              icon: 'success',
              title: 'Sent successfully',
              position: 'bottom',
              width: '20rem',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })
            form.style.display = 'none';
            name.value = "";
            email.value = "";
            message.value = "";
          }
          else {
            Swal.fire({
              toast: true,
              icon: 'error',
              title: 'Server error!',
              position: 'bottom',
              width: '15rem',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })

          }
        })
        .catch((err) => {
          loader.style.display = 'none';
          Swal.fire({
            toast: true,
            icon: 'error',
            title: 'Server error!',
            position: 'bottom',
            width: '15rem',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
        });


    }
    else {
      Swal.fire({
        toast: true,
        icon: 'info',
        title: 'Please verify reCAPTCHA!',
        position: 'bottom',
        width: '20rem',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    }


  })
})