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
 * Extended key usage of a Deviation List Signer certificate.
 * `{id-icao-mrtd-security 8}` (2.23.136.1.1.8). Section 7.1.1.3 writes the
 * same value in dotted form.
 *
 * Doc 9303-12, sections 7.1.1.3 and 10.2.
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
