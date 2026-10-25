/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_CA_DH } from "../Doc-9303-Part-11-Module/id-CA-DH.va.mjs";
// export { id_CA_DH } from "../Doc-9303-Part-11-Module/id-CA-DH.va.mjs";


/**
 * @summary id_CA_DH_AES_CBC_CMAC_128
 * @description
 *
 * Chip Authentication with Diffie-Hellman. Cipher is AES with a
 * 128-bit key. Secure messaging is CBC / CMAC. The chip commands are MSE:Set
 * AT followed by GENERAL AUTHENTICATE (section 6.2.4.2).
 *
 * Doc 9303-11, section 6.2.3.1, Table 5, and section 9.2.7.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-CA-DH-AES-CBC-CMAC-128   OBJECT IDENTIFIER ::= {id-CA-DH 2}
 * ```
 * 
 * @constant
 */
export
const id_CA_DH_AES_CBC_CMAC_128: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_CA_DH);

/* eslint-enable */
