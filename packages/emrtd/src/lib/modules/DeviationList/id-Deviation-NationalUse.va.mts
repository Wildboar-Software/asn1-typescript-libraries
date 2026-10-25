/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_icao_DeviationList } from "../DeviationList/id-icao-DeviationList.va.mjs";
// export { id_icao_DeviationList } from "../DeviationList/id-icao-DeviationList.va.mjs";


/**
 * @summary id_Deviation_NationalUse
 * @description
 *
 * National-use deviation. `{id-icao-DeviationList 5}`.
 *
 * The `nationalUse` component of `DeviationDescription` is for internal
 * State use and is not governed by an ICAO specification. Section 10.2
 * assigns no parameter syntax for this object identifier.
 *
 * Doc 9303-12, section 10.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-Deviation-NationalUse                OBJECT IDENTIFIER ::= {id-icao-DeviationList 5}
 * ```
 * 
 * @constant
 */
export
const id_Deviation_NationalUse: OBJECT_IDENTIFIER = _OID.fromParts([
    5,
], id_icao_DeviationList);

/* eslint-enable */
