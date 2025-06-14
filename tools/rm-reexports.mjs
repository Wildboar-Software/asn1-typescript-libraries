import { Project, SyntaxKind } from "ts-morph";

const project = new Project();
project.addSourceFilesAtPaths(process.argv[2]);

for (const sourceFile of project.getSourceFiles()) {
  const exports = sourceFile.getStatements().filter(stmt =>
    stmt.getKind() === SyntaxKind.ExportDeclaration &&
    stmt.getModuleSpecifier()
  );

  exports.forEach(stmt => stmt.remove());

  sourceFile.fixUnusedIdentifiers(); // <== removes unused imports
  sourceFile.saveSync();
}
