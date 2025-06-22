/* eslint-disable */
import {
    joint_iso_ccitt,
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
 * @summary arfProbableCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * arfProbableCause OBJECT IDENTIFIER ::= {joint-iso-ccitt ms(9) smi(3) part2(2) standardSpecificExtension(0) arf(0)}
 * ```
 * 
 * @constant
 */
export
const arfProbableCause: OBJECT_IDENTIFIER = _OID.fromParts([
    /* ms */ 9,
    /* smi */ 3,
    /* part2 */ 2,
    /* standardSpecificExtension */ 0,
    /* arf */ 0,
], joint_iso_ccitt);

/* eslint-enable */
