/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';

/**
 * @summary mkmParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mkmParameter OBJECT IDENTIFIER ::= {joint-iso-itu-t(2) ms(9) function(2) part16(16) parameter(5)}
 * ```
 *
 * @constant
 */
export const mkmParameter: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* ms */ 9,
    /* function */ 2,
    /* part16 */ 16,
    /* parameter */ 5,
]);

/* eslint-enable */
