/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_PK } from "../Doc-9303-Part-11-Module/id-PK.va.mjs";
// export { id_PK } from "../Doc-9303-Part-11-Module/id-PK.va.mjs";


/**
 * @summary id_PK_ECDH
 * @description
 *
 * `ChipAuthenticationPublicKeyInfo.protocol` value for an elliptic-curve
 * Diffie-Hellman public key. The X.509 encoding is BSI TR-03111. Only prime
 * curves and uncompressed points are used.
 *
 * Doc 9303-11, sections 9.2.6, 9.2.7, and 9.6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-PK-ECDH                  OBJECT IDENTIFIER ::= {id-PK 2}
 * ```
 * 
 * @constant
 */
export
const id_PK_ECDH: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_PK);

/* eslint-enable */
