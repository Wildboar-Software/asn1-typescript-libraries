import type Result from "./Result.mjs";
import type Error_ from "./Error_.mjs";

/**
 * A utility type to represent either a directory result or a directory error.
 */
export
type ResultOrError = Result | Error_;

export default ResultOrError;
