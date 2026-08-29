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
 * @summary umf_pkg
 * @description
 *
 * Arc for usage metering GDMO package OIDs. `{umf-pkg 1}`
 * metering control capabilities, `{umf-pkg 2}` metering data
 * info, `{umf-pkg 3}` audit information, `{umf-pkg 4}` control
 * notification, `{umf-pkg 5}` metering control, `{umf-pkg 6}`
 * metering data condition, `{umf-pkg 7}` metering start,
 * `{umf-pkg 8}` start notification. ITU-T Rec. X.742 (04/95)
 * [A.1](https://www.itu.int/rec/T-REC-X.742-199504-I)–A.2, A.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * umf-pkg OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part10(10) package(4)}
 * ```
 *
 * @constant
 */
export const umf_pkg: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part10 */ 10, /* package */ 4],
    joint_iso_itu_t
);

/* eslint-enable */
