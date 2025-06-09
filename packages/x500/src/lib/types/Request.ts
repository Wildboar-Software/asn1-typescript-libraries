import type { InvokeId } from "../modules/CommonProtocolSpecification/InvokeId.ta.js";
import type { Code } from "../modules/CommonProtocolSpecification/Code.ta.js";
import type { ASN1Element } from "asn1-ts";

/**
 * A abstract type to represent a directory request independently of its
 * serialization and transport.
 */
export
interface Request {
    invokeId: InvokeId,
    opCode?: Code;
    argument?: ASN1Element;
}

export default Request;
