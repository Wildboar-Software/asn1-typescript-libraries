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
 * @summary umf_mo
 * @description
 *
 * Arc for usage metering managed object class OIDs.
 * `{umf-mo 1}` `usageMeteringControlObject`, `{umf-mo 2}`
 * `usageMeteringDataObject`, `{umf-mo 3}` `usageMeteringRecord`.
 * ITU-T Rec. X.742 (04/95)
 * [A.1](https://www.itu.int/rec/T-REC-X.742-199504-I), A.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * umf-mo OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part10(10) managedObjectClass(3)}
 * ```
 *
 * @constant
 */
export const umf_mo: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part10 */ 10, /* managedObjectClass */ 3],
    joint_iso_itu_t
);

/* eslint-enable */
