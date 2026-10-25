/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_icao_mrtd_security } from "../LDSSecurityObjectV1/id-icao-mrtd-security.va.mjs";
// export { id_icao_mrtd_security } from "../LDSSecurityObjectV1/id-icao-mrtd-security.va.mjs";


/**
 * @summary id_icao_mrtd_security_extensions
 * @description
 *
 * Certificate-extension arc. `{id-icao-mrtd-security 6}` (2.23.136.1.1.6).
 *
 * Doc 9303-12, section 7.1.1.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-icao-mrtd-security-extensions OBJECT IDENTIFIER ::= {id-icao-mrtd-security 6}
 * ```
 * 
 * @constant
 */
export
const id_icao_mrtd_security_extensions: OBJECT_IDENTIFIER = _OID.fromParts([
    6,
], id_icao_mrtd_security);

/* eslint-enable */
