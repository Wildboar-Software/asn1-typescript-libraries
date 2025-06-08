import type Result from "./Result";
import type { ChainingResults } from "../modules/DistributedOperations/ChainingResults.ta";
import type { Code } from "../modules/CommonProtocolSpecification/Code.ta";

export
interface ChainedResult extends Result {
    opCode: Code; // The opCode is only optional for bind operations.
    chaining: ChainingResults;
}

export default ChainedResult;
