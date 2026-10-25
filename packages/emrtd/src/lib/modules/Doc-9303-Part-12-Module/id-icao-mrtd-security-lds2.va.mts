/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_icao_mrtd_security } from "../LDSSecurityObjectV1/id-icao-mrtd-security.va.mjs";
// export { id_icao_mrtd_security } from "../LDSSecurityObjectV1/id-icao-mrtd-security.va.mjs";


/**
 * @summary id_icao_mrtd_security_lds2
 * @description
 *
 * LDS2 signer arc. `{id-icao-mrtd-security 9}` (2.23.136.1.1.9).
 *
 * LDS2 signer certificates follow the Document Signer profile except as
 * section 7.1.2 says. The subject is `countryName` plus a `commonName` of at
 * most nine characters, and no other naming attributes. The only extensions
 * are authority key identifier (non-critical) and extended key usage
 * (critical). Revocation is still checked, against the CSCA CRL, even though
 * the certificate itself has no CRL distribution points extension.
 *
 * Doc 9303-12, section 7.1.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-icao-mrtd-security-lds2 OBJECT IDENTIFIER ::= {id-icao-mrtd-security 9}
 * ```
 * 
 * @constant
 */
export
const id_icao_mrtd_security_lds2: OBJECT_IDENTIFIER = _OID.fromParts([
    9,
], id_icao_mrtd_security);

/* eslint-enable */
