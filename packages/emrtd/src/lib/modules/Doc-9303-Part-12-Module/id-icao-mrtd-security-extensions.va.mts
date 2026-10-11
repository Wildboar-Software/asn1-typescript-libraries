/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_icao_mrtd_security } from "../LDSSecurityObjectV1/id-icao-mrtd-security.va.mjs";
// export { id_icao_mrtd_security } from "../LDSSecurityObjectV1/id-icao-mrtd-security.va.mjs";


/**
 * @summary id_icao_mrtd_security_extensions
 * @description
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
