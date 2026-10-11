/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_icao_mrtd_security } from "../LDSSecurityObjectV1/id-icao-mrtd-security.va.mjs";
// export { id_icao_mrtd_security } from "../LDSSecurityObjectV1/id-icao-mrtd-security.va.mjs";


/**
 * @summary id_icao_cscaMasterListSigningKey
 * @description
 *
 * Extended key usage of a Master List Signer certificate.
 * `{id-icao-mrtd-security 3}` (2.23.136.1.1.3). Section 7.1.1.3 writes the
 * same value in dotted form.
 *
 * Doc 9303-12, sections 7.1.1.3 and 9.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-icao-cscaMasterListSigningKey    OBJECT IDENTIFIER ::= {id-icao-mrtd-security 3}
 * ```
 * 
 * @constant
 */
export
const id_icao_cscaMasterListSigningKey: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], id_icao_mrtd_security);

/* eslint-enable */
