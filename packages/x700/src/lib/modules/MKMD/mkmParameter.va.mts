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
 * Arc for MKM action parameters. Allocation 1 is
 * `attributeNotAvailable` (get-textual-representation error). ITU-T
 * Rec. X.750 (10/96)
 * [A.1](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * A.3.4.
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
