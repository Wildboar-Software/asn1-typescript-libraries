/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_icao_mrtd_security } from "../LDSSecurityObjectV1/id-icao-mrtd-security.va.mjs";
// export { id_icao_mrtd_security } from "../LDSSecurityObjectV1/id-icao-mrtd-security.va.mjs";


/**
 * @summary id_EFDIR
 * @description
 *
 * Identifies `EFDIRInfo`, the secured copy of EF.DIR.
 * `{id-icao-mrtd-security 13}`.
 *
 * Doc 9303-11, section 9.2.10.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-EFDIR OBJECT IDENTIFIER ::= { id-icao-mrtd-security 13 }
 * ```
 * 
 * @constant
 */
export
const id_EFDIR: OBJECT_IDENTIFIER = _OID.fromParts([
    13,
], id_icao_mrtd_security);

/* eslint-enable */
