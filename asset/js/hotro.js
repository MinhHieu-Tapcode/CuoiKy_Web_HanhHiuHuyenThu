 <script>
    // Simple accessible accordion behavior
    document.querySelectorAll('.faq-q').forEach(button => {
      button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !expanded);
        const panel = button.nextElementSibling;
        if (!expanded) {
          panel.hidden = false;
        } else {
          panel.hidden = true;
        }
      });
    });

  </script>