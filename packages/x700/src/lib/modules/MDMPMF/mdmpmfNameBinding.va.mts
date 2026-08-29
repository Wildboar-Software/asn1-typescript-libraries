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
 * @summary mdmpmfNameBinding
 * @description
 *
 * Arc for MDMPMF name bindings: `domain-System` (1),
 * `policy-System` (2), `jurisdiction-System` (3),
 * `administrativeAspect-System` (4). ITU-T Rec. X.749 (08/97)
 * [A.8](https://www.itu.int/rec/T-REC-X.749-199708-I), §8.7, A.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mdmpmfNameBinding OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part19(19) nameBinding(6)}
 * ```
 *
 * @constant
 */
export const mdmpmfNameBinding: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part19 */ 19, /* nameBinding */ 6],
    joint_iso_itu_t
);

/* eslint-enable */
