/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_CA_ECDH } from "../Doc-9303-Part-11-Module/id-CA-ECDH.va.mjs";
// export { id_CA_ECDH } from "../Doc-9303-Part-11-Module/id-CA-ECDH.va.mjs";


/**
 * @summary id_CA_ECDH_AES_CBC_CMAC_128
 * @description
 *
 * Chip Authentication with elliptic-curve Diffie-Hellman. Cipher is AES with
 * a 128-bit key. Secure messaging is CBC / CMAC. The chip commands are
 * MSE:Set AT followed by GENERAL AUTHENTICATE (section 6.2.4.2).
 *
 * Doc 9303-11, section 6.2.3.2, Table 6, and section 9.2.7.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-CA-ECDH-AES-CBC-CMAC-128 OBJECT IDENTIFIER ::= {id-CA-ECDH 2}
 * ```
 * 
 * @constant
 */
export
const id_CA_ECDH_AES_CBC_CMAC_128: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_CA_ECDH);

/* eslint-enable */
