/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_icao_mrtd_security } from "../LDSSecurityObjectV1/id-icao-mrtd-security.va.mjs";
// export { id_icao_mrtd_security } from "../LDSSecurityObjectV1/id-icao-mrtd-security.va.mjs";


/**
 * @summary id_icao_cscaMasterList
 * @description
 *
 * `eContentType` of a CSCA Master List. `{id-icao-mrtd-security 2}`
 * (2.23.136.1.1.2).
 *
 * Doc 9303-12, section 9.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-icao-cscaMasterList              OBJECT IDENTIFIER ::= {id-icao-mrtd-security 2}
 * ```
 * 
 * @constant
 */
export
const id_icao_cscaMasterList: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_icao_mrtd_security);

/* eslint-enable */
