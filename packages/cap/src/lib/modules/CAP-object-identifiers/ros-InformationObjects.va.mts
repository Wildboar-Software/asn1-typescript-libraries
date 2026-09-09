/* eslint-disable */
import {
    joint_iso_itu_t,
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";



/**
 * @summary ros_InformationObjects
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ros-InformationObjects                OBJECT IDENTIFIER ::= {joint-iso-itu-t remote-operations(4) informationObjects(5) version1(0)}
 * ```
 * 
 * @constant
 */
export
const ros_InformationObjects: OBJECT_IDENTIFIER = _OID.fromParts([
    /* remote-operations */ 4,
    /* informationObjects */ 5,
    /* version1 */ 0,
], joint_iso_itu_t);

/* eslint-enable */
