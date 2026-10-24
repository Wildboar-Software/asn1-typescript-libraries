/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_icao_mrtd_security } from "../LDSSecurityObjectV1/id-icao-mrtd-security.va.mjs";
// export { id_icao_mrtd_security } from "../LDSSecurityObjectV1/id-icao-mrtd-security.va.mjs";


/**
 * @summary id_icao_mrtd_security_aaProtocolObject
 * @description
 *
 * Identifies `ActiveAuthenticationInfo`. Required in EF.DG14 when Active
 * Authentication uses ECDSA. `{id-icao-mrtd-security 5}`.
 *
 * Doc 9303-11, section 9.2.4, which also says `id-icao-mrtd-security` itself
 * is defined in Doc 9303-10.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-icao-mrtd-security-aaProtocolObject OBJECT IDENTIFIER ::= { id-icao-mrtd-security 5 }
 * ```
 * 
 * @constant
 */
export
const id_icao_mrtd_security_aaProtocolObject: OBJECT_IDENTIFIER = _OID.fromParts([
    5,
], id_icao_mrtd_security);

/* eslint-enable */
