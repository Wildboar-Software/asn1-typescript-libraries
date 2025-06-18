import type Result from "./Result.mjs";
import type { ChainingResults } from "../modules/DistributedOperations/ChainingResults.ta.mjs";
import type { Code } from "../modules/CommonProtocolSpecification/Code.ta.mjs";

/**
 * A utility type that more ergonomically represents a chained directory result.
 */
export
interface ChainedResult extends Result {
    opCode: Code; // The opCode is only optional for bind operations.
    chaining: ChainingResults;
}

export default ChainedResult;
