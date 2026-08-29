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
 * @summary umf_par
 * @description
 *
 * Arc for usage metering parameter OIDs. `{umf-par 1}`
 * `deniedMeteringAction`: specific-error when start, suspend,
 * or resume is refused because the data object is
 * `terminating`. ITU-T Rec. X.742 (04/95)
 * [A.8](https://www.itu.int/rec/T-REC-X.742-199504-I), A.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * umf-par OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part10(10) parameter(5)}
 * ```
 *
 * @constant
 */
export const umf_par: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part10 */ 10, /* parameter */ 5],
    joint_iso_itu_t
);

/* eslint-enable */
