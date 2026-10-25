/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_PACE_ECDH_GM } from "../Doc-9303-Part-11-Module/id-PACE-ECDH-GM.va.mjs";
// export { id_PACE_ECDH_GM } from "../Doc-9303-Part-11-Module/id-PACE-ECDH-GM.va.mjs";


/**
 * @summary id_PACE_ECDH_GM_AES_CBC_CMAC_128
 * @description
 *
 * PACE with elliptic-curve Diffie-Hellman and Generic Mapping. Cipher is AES
 * with a 128-bit key. Secure messaging is CBC / CMAC. The authentication
 * token is CMAC.
 *
 * Doc 9303-11, section 4.4.3.2, Table 3, and section 9.2.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-PACE-ECDH-GM-AES-CBC-CMAC-128    OBJECT IDENTIFIER ::= {id-PACE-ECDH-GM 2}
 * ```
 * 
 * @constant
 */
export
const id_PACE_ECDH_GM_AES_CBC_CMAC_128: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_PACE_ECDH_GM);

/* eslint-enable */
