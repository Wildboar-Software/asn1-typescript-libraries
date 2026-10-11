/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_PACE_DH_IM } from "../Doc-9303-Part-11-Module/id-PACE-DH-IM.va.mjs";
// export { id_PACE_DH_IM } from "../Doc-9303-Part-11-Module/id-PACE-DH-IM.va.mjs";


/**
 * @summary id_PACE_DH_IM_AES_CBC_CMAC_192
 * @description
 *
 * PACE with Diffie-Hellman and Integrated Mapping. Cipher is
 * AES with a 192-bit key. Secure messaging is CBC / CMAC. The authentication
 * token is CMAC.
 *
 * Doc 9303-11, section 4.4.3.1, Table 2, and section 9.2.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-PACE-DH-IM-AES-CBC-CMAC-192      OBJECT IDENTIFIER ::= {id-PACE-DH-IM 3}
 * ```
 * 
 * @constant
 */
export
const id_PACE_DH_IM_AES_CBC_CMAC_192: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], id_PACE_DH_IM);

/* eslint-enable */
