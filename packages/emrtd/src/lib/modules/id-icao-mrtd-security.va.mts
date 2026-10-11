/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_icao_mrtd } from "./id-icao-mrtd.va.mjs";

/**
 * @summary id_icao_mrtd_security
 * @description
 *
 * Security arc `{id-icao-mrtd 1}` (2.23.136.1.1). Part 11, section 9.2.4,
 * says this object identifier is defined in Doc 9303-10. Part 12, section
 * 10.2, repeats the assignment. Child arcs in these two parts include the
 * master list, deviation list, certificate extensions, LDS2 signers, and the
 * secured EF.DIR.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-icao-mrtd-security OBJECT IDENTIFIER ::= {id-icao-mrtd 1}
 * ```
 *
 * @constant
 */
export
const id_icao_mrtd_security: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_icao_mrtd);

/* eslint-enable */
