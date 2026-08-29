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
 * @summary moaAlgorithmIdentifiers
 * @description
 *
 * Arc for metric-object algorithm identifiers: `ewmaAlgorithm`
 * (0), `uwmaAlgorithm` (1). Other identifiers may be registered
 * outside X.739. ITU-T Rec. X.739 (11/93)
 * [§8.1.4.2](https://www.itu.int/rec/T-REC-X.739-199311-I), A.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * moaAlgorithmIdentifiers OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part11(11) standardSpecificExtension(0)
 *    algorithm(1)}
 * ```
 *
 * @constant
 */
export const moaAlgorithmIdentifiers: OBJECT_IDENTIFIER = _OID.fromParts(
    [
        /* ms */ 9,
        /* function */ 2,
        /* part11 */ 11,
        /* standardSpecificExtension */ 0,
        /* algorithm */ 1,
    ],
    joint_iso_itu_t
);

/* eslint-enable */
