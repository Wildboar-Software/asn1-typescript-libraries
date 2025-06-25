import { Project } from "ts-morph";

const project = new Project();
const sourceFile = project.addSourceFileAtPath(process.argv[2]);

sourceFile.getFunctions().forEach(func => {
  if (func.getReturnTypeNode()) {
    // If it already has a return type, skip it.
    return;
  }
  const fnName = func.getName();
  if (fnName.startsWith("_encode_")) {
    func.setReturnType("_Element");
    return;
  }
  if (fnName.startsWith("_decode_")) {
    func.setReturnType(fnName.slice(8));
    return;
  }
});

sourceFile.saveSync();
