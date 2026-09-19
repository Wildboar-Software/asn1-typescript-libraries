/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_icao_mrtd_security } from "../DeviationList/id-icao-mrtd-security.va.mjs";
// export { id_icao_mrtd_security } from "../DeviationList/id-icao-mrtd-security.va.mjs";


/**
 * @summary id_icao_DeviationListSigningKey
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-icao-DeviationListSigningKey         OBJECT IDENTIFIER ::= {id-icao-mrtd-security 8}
 * ```
 * 
 * @constant
 */
export
const id_icao_DeviationListSigningKey: OBJECT_IDENTIFIER = _OID.fromParts([
    8,
], id_icao_mrtd_security);

/* eslint-enable */
