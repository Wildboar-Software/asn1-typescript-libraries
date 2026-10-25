/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_CA_ECDH } from "../Doc-9303-Part-11-Module/id-CA-ECDH.va.mjs";
// export { id_CA_ECDH } from "../Doc-9303-Part-11-Module/id-CA-ECDH.va.mjs";


/**
 * @summary id_CA_ECDH_3DES_CBC_CBC
 * @description
 *
 * Chip Authentication with elliptic-curve Diffie-Hellman. Cipher is 3DES
 * with a 112-bit key. Secure messaging is CBC / CBC. The chip command is
 * MSE:Set KAT (section 6.2.4.1). Section 6.2.3 notes that 3DES may become
 * deprecated.
 *
 * Doc 9303-11, section 6.2.3.2, Table 6, and section 9.2.7.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-CA-ECDH-3DES-CBC-CBC     OBJECT IDENTIFIER ::= {id-CA-ECDH 1}
 * ```
 * 
 * @constant
 */
export
const id_CA_ECDH_3DES_CBC_CBC: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_CA_ECDH);

/* eslint-enable */
