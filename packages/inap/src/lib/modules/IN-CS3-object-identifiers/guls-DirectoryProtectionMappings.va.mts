/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    joint_iso_itu_t,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary guls_DirectoryProtectionMappings
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * guls-DirectoryProtectionMappings OBJECT IDENTIFIER ::= {joint-iso-itu-t genericULS(20) modules(1) dirProtectionMappings(4)}
 * ```
 * 
 * @constant
 */
export
const guls_DirectoryProtectionMappings: OBJECT_IDENTIFIER = _OID.fromParts([
    /* genericULS */ 20,
    /* modules */ 1,
    /* dirProtectionMappings */ 4,
], joint_iso_itu_t);

/* eslint-enable */
