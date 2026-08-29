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
} from '@wildboar/asn1';

/**
 * @summary errorType
 * @description
 *
 * Asserted-value identifier for the CMIP ERROR MACRO value
 * (`INTEGER` 0..23). ITU-T Rec. X.749 (08/97)
 * [§8.2.8.1](https://www.itu.int/rec/T-REC-X.749-199708-I), A.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * errorType OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part19(19) assertedValueIdentifier(13)
 *    errorType(2)}
 * ```
 *
 * @constant
 */
export const errorType: OBJECT_IDENTIFIER = _OID.fromParts(
    [
        /* ms */ 9,
        /* function */ 2,
        /* part19 */ 19,
        /* assertedValueIdentifier */ 13,
        /* errorType */ 2,
    ],
    joint_iso_itu_t
);

/* eslint-enable */
