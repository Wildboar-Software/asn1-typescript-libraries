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
 * @summary smi2AttributeID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * smi2AttributeID OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) smi(3) part2(2) attribute(7)}
 * ```
 * 
 * @constant
 */
export
const smi2AttributeID: OBJECT_IDENTIFIER = _OID.fromParts([
    /* ms */ 9,
    /* smi */ 3,
    /* part2 */ 2,
    /* attribute */ 7,
], joint_iso_itu_t);

/* eslint-enable */
