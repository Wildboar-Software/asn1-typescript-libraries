import type { InvokeId } from "../modules/CommonProtocolSpecification/InvokeId.ta.mjs";
import type { Code } from "../modules/CommonProtocolSpecification/Code.ta.mjs";
import type { ASN1Element } from "@wildboar/asn1";

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
