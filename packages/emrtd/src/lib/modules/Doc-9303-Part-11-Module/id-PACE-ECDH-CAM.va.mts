/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_PACE } from "../Doc-9303-Part-11-Module/id-PACE.va.mjs";
// export { id_PACE } from "../Doc-9303-Part-11-Module/id-PACE.va.mjs";


/**
 * @summary id_PACE_ECDH_CAM
 * @description
 *
 * Identifies elliptic-curve Diffie-Hellman domain parameters for PACE with
 * Chip Authentication Mapping in `PACEDomainParameterInfo`. Not a
 * `PACEInfo.protocol` value; the cipher-specific children are.
 * Section 4.4.3 specifies neither 3DES nor Diffie-Hellman
 * for this mapping.
 *
 * Doc 9303-11, sections 9.2.2 and 9.2.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-PACE-ECDH-CAM                    OBJECT IDENTIFIER ::= {id-PACE 6}
 * ```
 * 
 * @constant
 */
export
const id_PACE_ECDH_CAM: OBJECT_IDENTIFIER = _OID.fromParts([
    6,
], id_PACE);

/* eslint-enable */
