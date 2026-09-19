/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { AttributeType } from "../PKIX1Explicit88/AttributeType.ta.mjs";
// export { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../PKIX1Explicit88/AttributeType.ta.mjs";
import { pkcs_9 } from "../PKIX1Explicit88/pkcs-9.va.mjs";
// export { pkcs_9 } from "../PKIX1Explicit88/pkcs-9.va.mjs";


/**
 * @summary id_emailAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-emailAddress          AttributeType ::= { pkcs-9 1 }
 * ```
 * 
 * @constant
 */
export
const id_emailAddress: AttributeType = _OID.fromParts([
    1,
], pkcs_9);

/* eslint-enable */
