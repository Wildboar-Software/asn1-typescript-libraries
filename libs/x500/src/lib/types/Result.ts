import type { InvokeId } from "../modules/CommonProtocolSpecification/InvokeId.ta";
import type { Code } from "../modules/CommonProtocolSpecification/Code.ta";
import type { ASN1Element } from "asn1-ts";

/**
 * A abstract type to represent a directory result independently of its
 * serialization and transport.
 */
export
interface Result {
    invokeId: InvokeId,
    opCode?: Code;
    result?: ASN1Element;
}

export default Result;
