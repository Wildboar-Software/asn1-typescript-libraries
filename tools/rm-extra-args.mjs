import { Project, SyntaxKind } from "ts-morph";

const project = new Project();
const sourceFile = project.addSourceFileAtPath(process.argv[2]);

sourceFile.getVariableStatements().forEach(stmt => {
  if (!stmt.isExported()) return;

  stmt.getDeclarations().forEach(decl => {
    const initializer = decl.getInitializer();
    if (!initializer?.isKind(SyntaxKind.ArrayLiteralExpression)) return;

    initializer.getElements().forEach(elem => {
      if (!elem.isKind(SyntaxKind.NewExpression)) return;

      const expr = elem.getExpression();
      if (expr.getText() !== "$.ComponentSpec") return;

      const args = elem.getArguments();
      let countToRemove = 0;
      for (let i = args.length - 1; i >= args.length - 2; i--) {
        if (args[i]?.getText() === "undefined") countToRemove++;
      }

      for (let i = 0; i < countToRemove; i++) {
        elem.removeArgument(args.length - 1 - i);
      }
    });
  });
});

sourceFile.saveSync();
