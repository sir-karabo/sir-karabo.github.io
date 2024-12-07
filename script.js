const panes = document.querySelectorAll('.pane');
let activePaneIndex = 0;

panes.forEach((pane, index) => {
  pane.addEventListener('click', () => {
    panes[activePaneIndex].classList.remove('active');
    activePaneIndex = index;
    panes[activePaneIndex].classList.add('active');
  });
});

tailwind.config = {
  theme: {
    extend: {
      backgroundImage: {
        'blue-img': 'url("https://images.unsplash.com/photo-1523633589114-88eaf4b4f1a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100")',
        'green-img': 'url("https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100")',
        'purple-img': 'url("https://images.unsplash.com/photo-1511800453077-8c0afa94175f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100")',
        'red-img': 'url("https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100")',
        'yellow-img': 'url("https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100")' },

      colors: {
        gray: {
          '900': '#0f1011' } },


      minHeight: {
        '14': '3.5rem' },

      minWidth: {
        '14': '3.5rem' },

      transitionTimingFunction: {
        'in-out': 'cubic-bezier(0.2, 1, 0.25, 1)' } } } };