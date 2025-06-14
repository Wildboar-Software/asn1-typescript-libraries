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

/* START_OF_SYMBOL_DEFINITION summarizationParameter */
/**
 * @summary summarizationParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * summarizationParameter OBJECT IDENTIFIER ::= {joint-iso-ccitt ms(9) function(2) part13(13) parameter(5)}
 * ```
 *
 * @constant
 */
export const summarizationParameter: OBJECT_IDENTIFIER = new _OID(
    [/* ms */ 9, /* function */ 2, /* part13 */ 13, /* parameter */ 5],
    joint_iso_ccitt
);
/* END_OF_SYMBOL_DEFINITION summarizationParameter */

/* eslint-enable */
