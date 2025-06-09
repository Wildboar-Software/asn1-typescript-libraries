import type Result from "./Result.js";
import type { ChainingResults } from "../modules/DistributedOperations/ChainingResults.ta.js";
import type { Code } from "../modules/CommonProtocolSpecification/Code.ta.js";

export
interface ChainedResult extends Result {
    opCode: Code; // The opCode is only optional for bind operations.
    chaining: ChainingResults;
}

export default ChainedResult;
