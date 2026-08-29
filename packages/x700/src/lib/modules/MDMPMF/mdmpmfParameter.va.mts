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
 * @summary mdmpmfParameter
 * @description
 *
 * Arc for MDMPMF parameters: `timeoutError` (1), used in
 * `applyOperationToMembership` replies when a member does not
 * respond in time. Syntax is `Nothing`; not transmitted in
 * `CommonError`. ITU-T Rec. X.749 (08/97)
 * [A.9](https://www.itu.int/rec/T-REC-X.749-199708-I), §8.6, A.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mdmpmfParameter OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part19(19) parameter(5)}
 * ```
 *
 * @constant
 */
export const mdmpmfParameter: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part19 */ 19, /* parameter */ 5],
    joint_iso_itu_t
);

/* eslint-enable */
