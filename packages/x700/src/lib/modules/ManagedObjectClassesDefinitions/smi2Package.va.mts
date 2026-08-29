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
 * @summary smi2Package
 * @description
 *
 * Registration arc for DMI (X.721) packages:
 * `{joint-iso-itu-t ms(9) smi(3) part2(2) package(4)}`. Used
 * by conditional packages on DMI classes (for example alarm
 * record packages 1–8) and reusable packages in X.721 clause 8
 * (18 `additionalInformation` through 29). ITU-T Rec. X.721
 * (02/92) [§6](https://www.itu.int/rec/T-REC-X.721-199202-I),
 * §8, §14.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * smi2Package OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) smi(3) part2(2) package(4)}
 * ```
 *
 * @constant
 */
export const smi2Package: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* smi */ 3, /* part2 */ 2, /* package */ 4],
    joint_iso_itu_t
);

/* eslint-enable */
