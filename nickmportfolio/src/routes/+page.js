export async function load() {
  let projects = [];
  let experiences = [];
  try {
    const resP = await fetch('/data/projects.json');
    if (resP.ok) {
      projects = await resP.json();
    }
  } catch (e) {
    projects = [];
  }
  try {
    const resE = await fetch('/data/experiences.json');
    if (resE.ok) {
      experiences = await resE.json();
    }
  } catch (e) {
    experiences = [];
  }
  return { projects, experiences };
}
