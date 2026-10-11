/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_PACE_DH_GM } from "../Doc-9303-Part-11-Module/id-PACE-DH-GM.va.mjs";
// export { id_PACE_DH_GM } from "../Doc-9303-Part-11-Module/id-PACE-DH-GM.va.mjs";


/**
 * @summary id_PACE_DH_GM_AES_CBC_CMAC_256
 * @description
 *
 * PACE with Diffie-Hellman and Generic Mapping. Cipher is AES
 * with a 256-bit key. Secure messaging is CBC / CMAC. The authentication
 * token is CMAC.
 *
 * Doc 9303-11, section 4.4.3.1, Table 2, and section 9.2.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-PACE-DH-GM-AES-CBC-CMAC-256      OBJECT IDENTIFIER ::= {id-PACE-DH-GM 4}
 * ```
 * 
 * @constant
 */
export
const id_PACE_DH_GM_AES_CBC_CMAC_256: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], id_PACE_DH_GM);

/* eslint-enable */
