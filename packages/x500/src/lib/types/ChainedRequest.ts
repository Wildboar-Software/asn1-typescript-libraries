import type Request from "./Request.js";
import type { ChainingArguments } from "../modules/DistributedOperations/ChainingArguments.ta.js";
import type { Code } from "../modules/CommonProtocolSpecification/Code.ta.js";

export
interface ChainedRequest extends Request {
    opCode: Code; // The opCode is only optional for bind operations.
    chaining: ChainingArguments;
}

export default ChainedRequest;
