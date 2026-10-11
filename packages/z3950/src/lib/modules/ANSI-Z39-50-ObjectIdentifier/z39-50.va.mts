/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary z39_50
 * @description
 * 
 * Object identifier of this standard, `{iso(1) member-body(2) US(840)
 * ANSI-standard-Z39.50(10003)}`, shorthand `{Z39-50}` (OID.1, ASN1.2). Assigned
 * for Z39.50-1992 and also used for Z39.50-1995 and Z39.50-2003. OID.2
 * registers object classes under this arc; values 1 and 6 are no longer
 * assigned. Public OIDs are those in this standard or registered by the
 * Maintenance Agency as `{Z39-50 n m}` (OID.4, OID.5; at approval, the Library
 * of Congress). Local objects are `{Z39-50 n 1000 p m}` (OID.6). Experimental
 * objects are `{Z39-50 n 2000 p m}` (OID.7).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * z39-50 OBJECT IDENTIFIER ::= {
 *     iso(1)
 *     member-body(2)
 *     us(840)
 *     ansi-standard-Z39-50(10003)
 * }
 * ```
 * 
 * @constant
 */
export
const z39_50: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* ansi-standard-Z39-50 */ 10003,
]);

/* eslint-enable */
