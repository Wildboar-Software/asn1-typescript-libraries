/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_icao_mrtd_security } from "../DeviationList/id-icao-mrtd-security.va.mjs";
// export { id_icao_mrtd_security } from "../DeviationList/id-icao-mrtd-security.va.mjs";


/**
 * @summary id_icao_DeviationList
 * @description
 *
 * `eContentType` of a Deviation List. `{id-icao-mrtd-security 7}`
 * (2.23.136.1.1.7).
 *
 * Doc 9303-12, section 10.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-icao-DeviationList                   OBJECT IDENTIFIER ::= {id-icao-mrtd-security 7}
 * ```
 * 
 * @constant
 */
export
const id_icao_DeviationList: OBJECT_IDENTIFIER = _OID.fromParts([
    7,
], id_icao_mrtd_security);

/* eslint-enable */
