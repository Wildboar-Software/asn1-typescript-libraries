/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    joint_iso_itu_t,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary guls_SecurityTransformations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * guls-SecurityTransformations OBJECT IDENTIFIER ::= {joint-iso-itu-t genericULS(20) modules(1) gulsSecurityTransformations(3)}
 * ```
 * 
 * @constant
 */
export
const guls_SecurityTransformations: OBJECT_IDENTIFIER = _OID.fromParts([
    /* genericULS */ 20,
    /* modules */ 1,
    /* gulsSecurityTransformations */ 3,
], joint_iso_itu_t);

/* eslint-enable */
