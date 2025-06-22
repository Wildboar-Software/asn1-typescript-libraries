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
 * @summary smi2AttributeGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * smi2AttributeGroup OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) smi(3) part2(2) attributeGroup(8)}
 * ```
 * 
 * @constant
 */
export
const smi2AttributeGroup: OBJECT_IDENTIFIER = _OID.fromParts([
    /* ms */ 9,
    /* smi */ 3,
    /* part2 */ 2,
    /* attributeGroup */ 8,
], joint_iso_itu_t);

/* eslint-enable */
