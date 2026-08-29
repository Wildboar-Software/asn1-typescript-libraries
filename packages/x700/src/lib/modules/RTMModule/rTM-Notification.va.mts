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
 * @summary rTM_Notification
 * @description
 *
 * Arc for RTM notifications: `responseConfirmation` (1), emitted
 * when a monitored response arrives. ITU-T Rec. X.748 (03/99)
 * [§8.5.1](https://www.itu.int/rec/T-REC-X.748-199903-I), A.5,
 * A.7.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rTM-Notification OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part22(22) notification(10)}
 * ```
 *
 * @constant
 */
export const rTM_Notification: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part22 */ 22, /* notification */ 10],
    joint_iso_itu_t
);

/* eslint-enable */
