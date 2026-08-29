/* eslint-disable */
import {
    joint_iso_ccitt,
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
 * @summary part12Notification
 * @description
 *
 * OID arc for X.745 notifications `{joint-iso-ccitt ms(9) function(2)
 * part12(12) notification(10)}`. Leaves: 1 schedulingConflictNotification
 * (7.2.2, 9.10; emitted if actual stop exceeds requested stop or actual start
 * is before requested start), 2 testResultNotification (unsolicited TO results,
 * 7.2.3, 9.9). ITU-T Rec. X.745 (11/93) §A.5, A.7.
 * [§A.5](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * part12Notification OBJECT IDENTIFIER ::= {joint-iso-ccitt ms(9) function(2) part12(12) notification(10)}
 * ```
 *
 * @constant
 */
export const part12Notification: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part12 */ 12, /* notification */ 10],
    joint_iso_ccitt
);

/* eslint-enable */
