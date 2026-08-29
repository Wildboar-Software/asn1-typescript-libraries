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
 * @summary mdmpmfFunctionalUnitPackage
 * @description
 *
 * Functional-unit package for SMASE negotiation: bit 0 membership
 * query, 1 policy violation, 2 operation. ITU-T Rec. X.749 (08/97)
 * [§11.3](https://www.itu.int/rec/T-REC-X.749-199708-I), A.1,
 * clause 10.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mdmpmfFunctionalUnitPackage OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part19(19) functionalUnitPackage(1)}
 * ```
 *
 * @constant
 */
export const mdmpmfFunctionalUnitPackage: OBJECT_IDENTIFIER = _OID.fromParts(
    [
        /* ms */ 9,
        /* function */ 2,
        /* part19 */ 19,
        /* functionalUnitPackage */ 1,
    ],
    joint_iso_itu_t
);

/* eslint-enable */
