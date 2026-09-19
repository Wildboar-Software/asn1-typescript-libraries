/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    joint_iso_itu_t,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary aCSE_id
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * aCSE-id OBJECT IDENTIFIER ::= {joint-iso-itu-t association-control(2) ase-id(3) acse-ase(1) version(1)}
 * ```
 * 
 * @constant
 */
export
const aCSE_id: OBJECT_IDENTIFIER = _OID.fromParts([
    /* association-control */ 2,
    /* ase-id */ 3,
    /* acse-ase */ 1,
    /* version */ 1,
], joint_iso_itu_t);

/* eslint-enable */
