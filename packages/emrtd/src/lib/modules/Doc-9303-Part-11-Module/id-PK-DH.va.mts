/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_PK } from "../Doc-9303-Part-11-Module/id-PK.va.mjs";
// export { id_PK } from "../Doc-9303-Part-11-Module/id-PK.va.mjs";


/**
 * @summary id_PK_DH
 * @description
 *
 * `ChipAuthenticationPublicKeyInfo.protocol` value for a Diffie-Hellman
 * public key. The X.509 encoding is PKCS #3 (section 9.6). Section 8.5 notes
 * that some issued chips encode this key with ANSI X9.42 instead; those
 * chips are not compliant.
 *
 * Doc 9303-11, sections 9.2.6 and 9.2.7.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-PK-DH                    OBJECT IDENTIFIER ::= {id-PK 1}
 * ```
 * 
 * @constant
 */
export
const id_PK_DH: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_PK);

/* eslint-enable */
