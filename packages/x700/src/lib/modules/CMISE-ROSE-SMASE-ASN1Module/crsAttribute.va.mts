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
} from 'asn1-ts';

/* START_OF_SYMBOL_DEFINITION crsAttribute */
/**
 * @summary crsAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * crsAttribute OBJECT IDENTIFIER ::= {joint-iso-ccitt ms(9) smi(3) part9(9) attribute(7)}
 * ```
 *
 * @constant
 */
export const crsAttribute: OBJECT_IDENTIFIER = new _OID(
    [/* ms */ 9, /* smi */ 3, /* part9 */ 9, /* attribute */ 7],
    joint_iso_ccitt
);
/* END_OF_SYMBOL_DEFINITION crsAttribute */

/* eslint-enable */
