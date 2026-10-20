/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    joint_iso_itu_t,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary ros_UsefulDefinitions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ros-UsefulDefinitions OBJECT IDENTIFIER ::= {joint-iso-itu-t remote-operations(4) useful-definitions(7) version1(0)}
 * ```
 * 
 * @constant
 */
export
const ros_UsefulDefinitions: OBJECT_IDENTIFIER = _OID.fromParts([
    /* remote-operations */ 4,
    /* useful-definitions */ 7,
    /* version1 */ 0,
], joint_iso_itu_t);

/* eslint-enable */
