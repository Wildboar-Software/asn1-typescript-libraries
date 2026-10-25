/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    joint_iso_itu_t,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary guls_Notation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * guls-Notation OBJECT IDENTIFIER ::= {joint-iso-itu-t genericULS(20) modules(1) notation(1)}
 * ```
 * 
 * @constant
 */
export
const guls_Notation: OBJECT_IDENTIFIER = _OID.fromParts([
    /* genericULS */ 20,
    /* modules */ 1,
    /* notation */ 1,
], joint_iso_itu_t);

/* eslint-enable */
