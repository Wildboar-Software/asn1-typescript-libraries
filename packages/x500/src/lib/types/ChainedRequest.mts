import type Request from "./Request.mjs";
import type { ChainingArguments } from "../modules/DistributedOperations/ChainingArguments.ta.mjs";
import type { Code } from "../modules/CommonProtocolSpecification/Code.ta.mjs";

/**
 * A utility type that more ergonomically represents a chained directory request.
 */
export
interface ChainedRequest extends Request {
    opCode: Code; // The opCode is only optional for bind operations.
    chaining: ChainingArguments;
}

export default ChainedRequest;
