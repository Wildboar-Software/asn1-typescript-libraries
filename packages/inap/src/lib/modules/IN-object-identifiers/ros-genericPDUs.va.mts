/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    joint_iso_itu_t,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary ros_genericPDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ros-genericPDUs OBJECT IDENTIFIER ::= {joint-iso-itu-t remote-operations(4) generic-ROS-PDUs(6) version1(0)}
 * ```
 * 
 * @constant
 */
export
const ros_genericPDUs: OBJECT_IDENTIFIER = _OID.fromParts([
    /* remote-operations */ 4,
    /* generic-ROS-PDUs */ 6,
    /* version1 */ 0,
], joint_iso_itu_t);

/* eslint-enable */
