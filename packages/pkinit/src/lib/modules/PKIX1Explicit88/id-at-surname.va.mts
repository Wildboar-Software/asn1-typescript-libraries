/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { AttributeType } from "../PKIX1Explicit88/AttributeType.ta.mjs";
// export { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../PKIX1Explicit88/AttributeType.ta.mjs";
import { id_at } from "../PKIX1Explicit88/id-at.va.mjs";
// export { id_at } from "../PKIX1Explicit88/id-at.va.mjs";


/**
 * @summary id_at_surname
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-surname           AttributeType ::= { id-at 4 }
 * ```
 * 
 * @constant
 */
export
const id_at_surname: AttributeType = _OID.fromParts([
    4,
], id_at);

/* eslint-enable */
