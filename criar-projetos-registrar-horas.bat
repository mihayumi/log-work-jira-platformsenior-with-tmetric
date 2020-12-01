TITLE CriarProjetosRegistrarHorasJira
color 9F
cd  %CD%\RegistroHoras
npx cypress run --spec "cypress/integration/registrar-horas-jira.spec.js, cypress/integration/criarProjeto/criar-projetos.spec.js" --browser chrome --headless