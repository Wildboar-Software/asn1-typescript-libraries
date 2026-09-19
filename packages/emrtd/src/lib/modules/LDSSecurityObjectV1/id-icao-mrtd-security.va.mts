/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_icao_mrtd } from "../LDSSecurityObjectV1/id-icao-mrtd.va.mjs";
// export { id_icao_mrtd } from "../LDSSecurityObjectV1/id-icao-mrtd.va.mjs";


/**
 * @summary id_icao_mrtd_security
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-icao-mrtd-security                   OBJECT IDENTIFIER ::= {id-icao-mrtd 1}
 * ```
 * 
 * @constant
 */
export
const id_icao_mrtd_security: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_icao_mrtd);

/* eslint-enable */
