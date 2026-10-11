/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_PACE_DH_IM } from "../Doc-9303-Part-11-Module/id-PACE-DH-IM.va.mjs";
// export { id_PACE_DH_IM } from "../Doc-9303-Part-11-Module/id-PACE-DH-IM.va.mjs";


/**
 * @summary id_PACE_DH_IM_AES_CBC_CMAC_128
 * @description
 *
 * PACE with Diffie-Hellman and Integrated Mapping. Cipher is
 * AES with a 128-bit key. Secure messaging is CBC / CMAC. The authentication
 * token is CMAC.
 *
 * Doc 9303-11, section 4.4.3.1, Table 2, and section 9.2.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-PACE-DH-IM-AES-CBC-CMAC-128      OBJECT IDENTIFIER ::= {id-PACE-DH-IM 2}
 * ```
 * 
 * @constant
 */
export
const id_PACE_DH_IM_AES_CBC_CMAC_128: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_PACE_DH_IM);

/* eslint-enable */
