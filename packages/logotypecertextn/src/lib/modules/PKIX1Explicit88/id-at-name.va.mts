/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { AttributeType } from "../PKIX1Explicit88/AttributeType.ta.mjs";
// export { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../PKIX1Explicit88/AttributeType.ta.mjs";
import { id_at } from "../PKIX1Explicit88/id-at.va.mjs";
// export { id_at } from "../PKIX1Explicit88/id-at.va.mjs";


/**
 * @summary id_at_name
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-name              AttributeType ::= { id-at 41 }
 * ```
 * 
 * @constant
 */
export
const id_at_name: AttributeType = _OID.fromParts([
    41,
], id_at);

/* eslint-enable */
