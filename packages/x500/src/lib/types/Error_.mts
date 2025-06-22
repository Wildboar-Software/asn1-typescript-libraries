import type { InvokeId } from "../modules/CommonProtocolSpecification/InvokeId.ta.mjs";
import type { Code } from "../modules/CommonProtocolSpecification/Code.ta.mjs";
import type { ASN1Element } from "@wildboar/asn1";

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
