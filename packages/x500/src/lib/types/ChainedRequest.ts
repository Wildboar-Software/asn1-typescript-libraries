import type Request from "./Request";
import type { ChainingArguments } from "../modules/DistributedOperations/ChainingArguments.ta";
import type { Code } from "../modules/CommonProtocolSpecification/Code.ta";

export
interface ChainedRequest extends Request {
    opCode: Code; // The opCode is only optional for bind operations.
    chaining: ChainingArguments;
}

export default ChainedRequest;
