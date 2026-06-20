export function goToRegister(program) {
  if (program) {
    window.__neuraSelectedProgram = program;
    window.dispatchEvent(new CustomEvent('neura:selectProgram', { detail: program }));
  }
  document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
}
