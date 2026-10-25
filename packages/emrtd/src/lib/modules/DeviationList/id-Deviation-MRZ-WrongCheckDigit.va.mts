/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_Deviation_MRZ } from "../DeviationList/id-Deviation-MRZ.va.mjs";
// export { id_Deviation_MRZ } from "../DeviationList/id-Deviation-MRZ.va.mjs";


/**
 * @summary id_Deviation_MRZ_WrongCheckDigit
 * @description
 *
 * An MRZ check digit is wrong. `{id-Deviation-MRZ 2}`.
 *
 * Section 10.2 assigns no parameter syntax for this object identifier.
 *
 * Doc 9303-12, section 10.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-Deviation-MRZ-WrongCheckDigit        OBJECT IDENTIFIER ::= {id-Deviation-MRZ 2}
 * ```
 * 
 * @constant
 */
export
const id_Deviation_MRZ_WrongCheckDigit: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_Deviation_MRZ);

/* eslint-enable */
