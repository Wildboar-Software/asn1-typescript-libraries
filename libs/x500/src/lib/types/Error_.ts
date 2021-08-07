import type { InvokeId } from "../modules/CommonProtocolSpecification/InvokeId.ta";
import type { Code } from "../modules/CommonProtocolSpecification/Code.ta";
import type { ASN1Element } from "asn1-ts";

/**
 * A abstract type to represent a directory error independently of its
 * serialization and transport.
 */
export
interface Error_ {
    invokeId: InvokeId,
    errcode?: Code;
    error: ASN1Element;
}

export default Error_;
