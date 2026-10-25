/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_icao_mrtd_security } from "../LDSSecurityObjectV1/id-icao-mrtd-security.va.mjs";
// export { id_icao_mrtd_security } from "../LDSSecurityObjectV1/id-icao-mrtd-security.va.mjs";


/**
 * @summary id_icao_mrtd_security_vds
 * @description
 *
 * Visible Digital Seal (bar code) signer arc. `{id-icao-mrtd-security 11}`.
 *
 * Bar Code Signer certificates follow the LDS2 Signer profile with the
 * subject and extension exceptions in section 7.1.3. `commonName` is two
 * uppercase characters matching letters 3 and 4 of the bar-code signer
 * identifier. `countryName` is the two-letter code matching letters 1 and 2.
 * Further subject and serial-number rules are in Doc 9303-13, which this
 * part cites but does not repeat.
 *
 * Doc 9303-12, sections 2 and 7.1.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-icao-mrtd-security-vds OBJECT IDENTIFIER ::= {id-icao-mrtd-security 11}
 * ```
 * 
 * @constant
 */
export
const id_icao_mrtd_security_vds: OBJECT_IDENTIFIER = _OID.fromParts([
    11,
], id_icao_mrtd_security);

/* eslint-enable */
