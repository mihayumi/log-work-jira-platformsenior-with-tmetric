TITLE CriarProjetos
color 6F
cd  %CD%\RegistroHoras
npx cypress run --spec "cypress/integration/criar-projetos.spec.js" --browser chrome --headless