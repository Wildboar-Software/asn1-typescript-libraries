/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_Deviation_CertOrKey } from "../DeviationList/id-Deviation-CertOrKey.va.mjs";
// export { id_Deviation_CertOrKey } from "../DeviationList/id-Deviation-CertOrKey.va.mjs";


/**
 * @summary id_Deviation_CertOrKey_AAKeyCompromised
 * @description
 *
 * Compromised Active Authentication key. `{id-Deviation-CertOrKey 4}`.
 *
 * Section 10.2 assigns no parameter syntax for this object identifier.
 *
 * Doc 9303-12, section 10.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-Deviation-CertOrKey-AAKeyCompromised OBJECT IDENTIFIER ::= {id-Deviation-CertOrKey 4}
 * ```
 * 
 * @constant
 */
export
const id_Deviation_CertOrKey_AAKeyCompromised: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], id_Deviation_CertOrKey);

/* eslint-enable */
