/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_PACE } from "../Doc-9303-Part-11-Module/id-PACE.va.mjs";
// export { id_PACE } from "../Doc-9303-Part-11-Module/id-PACE.va.mjs";


/**
 * @summary id_PACE_DH_GM
 * @description
 *
 * Identifies Diffie-Hellman domain parameters for PACE with
 * Generic Mapping in `PACEDomainParameterInfo`. Not a `PACEInfo.protocol`
 * value; the cipher-specific children are.
 *
 * Doc 9303-11, sections 9.2.2 and 9.2.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-PACE-DH-GM                       OBJECT IDENTIFIER ::= {id-PACE 1}
 * ```
 * 
 * @constant
 */
export
const id_PACE_DH_GM: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_PACE);

/* eslint-enable */
