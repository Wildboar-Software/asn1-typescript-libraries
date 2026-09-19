/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { AttributeType } from "../PKIX1Explicit88/AttributeType.ta.mjs";
// export { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../PKIX1Explicit88/AttributeType.ta.mjs";


/**
 * @summary id_domainComponent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-domainComponent      AttributeType ::= { 0 9 2342 19200300 100 1 25 }
 * ```
 * 
 * @constant
 */
export
const id_domainComponent: AttributeType = _OID.fromParts([
    0,
    9,
    2342,
    19200300,
    100,
    1,
    25,
]);

/* eslint-enable */
