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
 * @summary umf_nb
 * @description
 *
 * Arc for usage metering name-binding OIDs. `{umf-nb 1}`
 * `usageMeterControl-system`: names a control object under
 * `system` (X.721) by `controlObjectId`. No data-object name
 * bindings are defined; specializations supply them. ITU-T Rec.
 * X.742 (04/95)
 * [A.7](https://www.itu.int/rec/T-REC-X.742-199504-I), A.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * umf-nb OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part10(10) nameBinding(6)}
 * ```
 *
 * @constant
 */
export const umf_nb: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part10 */ 10, /* nameBinding */ 6],
    joint_iso_itu_t
);

/* eslint-enable */
