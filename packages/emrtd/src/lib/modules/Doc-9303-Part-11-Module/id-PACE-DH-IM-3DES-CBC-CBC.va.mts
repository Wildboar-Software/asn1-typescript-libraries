/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_PACE_DH_IM } from "../Doc-9303-Part-11-Module/id-PACE-DH-IM.va.mjs";
// export { id_PACE_DH_IM } from "../Doc-9303-Part-11-Module/id-PACE-DH-IM.va.mjs";


/**
 * @summary id_PACE_DH_IM_3DES_CBC_CBC
 * @description
 *
 * PACE with Diffie-Hellman and Integrated Mapping. Cipher is
 * 3DES with a 112-bit key. Secure messaging is CBC / CBC. The authentication
 * token is CBC. Section 4.4.3 notes that 3DES may become deprecated for
 * Generic and Integrated Mapping.
 *
 * Doc 9303-11, section 4.4.3.1, Table 2, and section 9.2.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-PACE-DH-IM-3DES-CBC-CBC          OBJECT IDENTIFIER ::= {id-PACE-DH-IM 1}
 * ```
 * 
 * @constant
 */
export
const id_PACE_DH_IM_3DES_CBC_CBC: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_PACE_DH_IM);

/* eslint-enable */
