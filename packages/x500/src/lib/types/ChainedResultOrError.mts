import type ChainedResult from "./ChainedResult.mjs";
import type Error_ from "./Error_.mjs";

/**
 * A utility type that more ergonomically represents a chained directory result
 * or an error.
 */
export
type ChainedResultOrError = ChainedResult | Error_;

export default ChainedResultOrError;
