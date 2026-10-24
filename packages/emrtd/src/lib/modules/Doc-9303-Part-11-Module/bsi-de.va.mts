/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary bsi_de
 * @description
 *
 * BSI Germany arc. PACE, Chip Authentication, and Terminal Authentication
 * object identifiers are assigned under it. `{itu-t(0)
 * identified-organization(4) etsi(0) reserved(127)
 * etsi-identified-organization(0) 7}`.
 *
 * Doc 9303-11, section 9.2.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * bsi-de OBJECT IDENTIFIER ::= {
 *     itu-t(0) identified-organization(4) etsi(0)
 *     reserved(127) etsi-identified-organization(0) 7
 * }
 * ```
 * 
 * @constant
 */
export
const bsi_de: OBJECT_IDENTIFIER = _OID.fromParts([
    /* itu-t */ 0,
    /* identified-organization */ 4,
    /* etsi */ 0,
    /* reserved */ 127,
    /* etsi-identified-organization */ 0,
    7,
]);

/* eslint-enable */
