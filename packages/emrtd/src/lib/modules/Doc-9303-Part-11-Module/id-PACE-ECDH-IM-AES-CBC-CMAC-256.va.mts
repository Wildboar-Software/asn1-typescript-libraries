/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_PACE_ECDH_IM } from "../Doc-9303-Part-11-Module/id-PACE-ECDH-IM.va.mjs";
// export { id_PACE_ECDH_IM } from "../Doc-9303-Part-11-Module/id-PACE-ECDH-IM.va.mjs";


/**
 * @summary id_PACE_ECDH_IM_AES_CBC_CMAC_256
 * @description
 *
 * PACE with elliptic-curve Diffie-Hellman and Integrated Mapping. Cipher is
 * AES with a 256-bit key. Secure messaging is CBC / CMAC. The authentication
 * token is CMAC.
 *
 * Doc 9303-11, section 4.4.3.2, Table 3, and section 9.2.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-PACE-ECDH-IM-AES-CBC-CMAC-256    OBJECT IDENTIFIER ::= {id-PACE-ECDH-IM 4}
 * ```
 * 
 * @constant
 */
export
const id_PACE_ECDH_IM_AES_CBC_CMAC_256: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], id_PACE_ECDH_IM);

/* eslint-enable */
