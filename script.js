document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skill");

    const handleScroll = () => {
        skills.forEach(skill => {
            const skillOffsetTop = skill.offsetTop;
            const scrollPosition = window.scrollY + window.innerHeight;

            if (scrollPosition > skillOffsetTop) {
                const percent = skill.getAttribute("data-percent");
                const circle = skill.querySelector(".circle");
                circle.style.setProperty("--percent", `${percent}%`);

                let count = 0;
                const interval = setInterval(() => {
                    if (count >= percent) {
                        clearInterval(interval);
                    } else {
                        count++;
                        circle.querySelector("span").innerHTML = `${circle.parentElement.getAttribute('data-percent')}<br>${count}%`;
                    }
                }, 20);
            }
        });
    };

    window.addEventListener("scroll", handleScroll);
});

document.querySelector('.contact-form form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // الحصول على البيانات من الحقول
    const name = document.querySelector('.contact-form input[type="text"]').value;
    const email = document.querySelector('.contact-form input[type="email"]').value;
    const message = document.querySelector('.contact-form textarea').value;
  
    // التحقق من وجود جميع الحقول
    if (name && email && message) {
      // تكوين الرابط لفتح الجيميل
      const mailtoLink = `mailto:a7medali1711@gmail.com?subject=Message%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(email)}`;
  
      // فتح الجيميل
      window.location.href = mailtoLink;
  
      // إظهار رسالة توضح أنه تم فتح الجيميل
      alert('Your message has been sent to your email client!');
    } else {
      alert('Please fill in all fields');
    }
  });
  const header = document.getElementById('header');

  // متابعة تمرير الصفحة
  window.addEventListener('scroll', () => {
      if (window.scrollY > window.innerHeight - 50) { 
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  });
    
