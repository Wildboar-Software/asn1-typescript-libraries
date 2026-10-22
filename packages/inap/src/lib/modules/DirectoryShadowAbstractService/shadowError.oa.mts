import { shadowError as directoryShadowError } from "@wildboar/x500/DirectoryShadowAbstractService";
import { roseError } from "../shared/roseOperation.mjs";

export const shadowError = roseError(directoryShadowError);
