/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { AttributeType } from "../PKIX1Explicit88/AttributeType.ta.mjs";
// export { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../PKIX1Explicit88/AttributeType.ta.mjs";
import { id_at } from "../PKIX1Explicit88/id-at.va.mjs";
// export { id_at } from "../PKIX1Explicit88/id-at.va.mjs";


/**
 * @summary id_at_generationQualifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-generationQualifier AttributeType ::= { id-at 44 }
 * ```
 * 
 * @constant
 */
export
const id_at_generationQualifier: AttributeType = _OID.fromParts([
    44,
], id_at);

/* eslint-enable */
