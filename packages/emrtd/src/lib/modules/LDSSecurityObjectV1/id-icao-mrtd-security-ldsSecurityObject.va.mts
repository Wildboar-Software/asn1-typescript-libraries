/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_icao_mrtd_security } from "../LDSSecurityObjectV1/id-icao-mrtd-security.va.mjs";
// export { id_icao_mrtd_security } from "../LDSSecurityObjectV1/id-icao-mrtd-security.va.mjs";


/**
 * @summary id_icao_mrtd_security_ldsSecurityObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-icao-mrtd-security-ldsSecurityObject OBJECT IDENTIFIER ::= {id-icao-mrtd-security 1}
 * ```
 * 
 * @constant
 */
export
const id_icao_mrtd_security_ldsSecurityObject: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_icao_mrtd_security);

/* eslint-enable */
