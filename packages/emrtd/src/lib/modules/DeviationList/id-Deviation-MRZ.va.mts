/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_icao_DeviationList } from "../DeviationList/id-icao-DeviationList.va.mjs";
// export { id_icao_DeviationList } from "../DeviationList/id-icao-DeviationList.va.mjs";


/**
 * @summary id_Deviation_MRZ
 * @description
 *
 * Machine-readable-zone deviations. `{id-icao-DeviationList 3}`.
 *
 * Section 10.2 assigns no parameter syntax for this object identifier.
 *
 * Doc 9303-12, section 10.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-Deviation-MRZ                        OBJECT IDENTIFIER ::= {id-icao-DeviationList 3}
 * ```
 * 
 * @constant
 */
export
const id_Deviation_MRZ: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], id_icao_DeviationList);

/* eslint-enable */
