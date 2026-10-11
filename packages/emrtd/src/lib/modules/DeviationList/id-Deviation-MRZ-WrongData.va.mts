/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_Deviation_MRZ } from "../DeviationList/id-Deviation-MRZ.va.mjs";
// export { id_Deviation_MRZ } from "../DeviationList/id-Deviation-MRZ.va.mjs";


/**
 * @summary id_Deviation_MRZ_WrongData
 * @description
 *
 * MRZ data are wrong. `{id-Deviation-MRZ 1}`.
 *
 * Section 10.2 assigns no parameter syntax for this object identifier.
 *
 * Doc 9303-12, section 10.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-Deviation-MRZ-WrongData              OBJECT IDENTIFIER ::= {id-Deviation-MRZ 1}
 * ```
 * 
 * @constant
 */
export
const id_Deviation_MRZ_WrongData: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_Deviation_MRZ);

/* eslint-enable */
