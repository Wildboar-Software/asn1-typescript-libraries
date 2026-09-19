/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { AttributeType } from "../PKIX1Explicit88/AttributeType.ta.mjs";
// export { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../PKIX1Explicit88/AttributeType.ta.mjs";
import { id_at } from "../PKIX1Explicit88/id-at.va.mjs";
// export { id_at } from "../PKIX1Explicit88/id-at.va.mjs";


/**
 * @summary id_at_countryName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-countryName       AttributeType ::= { id-at 6 }
 * ```
 * 
 * @constant
 */
export
const id_at_countryName: AttributeType = _OID.fromParts([
    6,
], id_at);

/* eslint-enable */
