/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    joint_iso_itu_t,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary sese_APDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sese-APDUs OBJECT IDENTIFIER ::= {joint-iso-itu-t genericULS(20) modules(1) seseAPDUs(6)}
 * ```
 * 
 * @constant
 */
export
const sese_APDUs: OBJECT_IDENTIFIER = _OID.fromParts([
    /* genericULS */ 20,
    /* modules */ 1,
    /* seseAPDUs */ 6,
], joint_iso_itu_t);

/* eslint-enable */
