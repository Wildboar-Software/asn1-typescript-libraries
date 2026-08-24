/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import { ID, _decode_ID, _encode_ID } from '../EDIMSObjectIdentifiers/ID.ta.mjs';
import { id_nat } from '../EDIMSObjectIdentifiers/id-nat.va.mjs';
/**
 * @summary id_nat_notification_time
 * @description
 *
 * OBJECT IDENTIFIER `id_nat_notification_time`. Notification Time contains the date and
 * time, in UTC format, at which the notification for the subject EDIM was generated.
 * NotificationTimeField ::= UTCTime 9.1.5 Security Elements The Security Elements field
 * is used to provide "proof/non repudiation of content received", "EDI application
 * security" services. See ITU-T X.435 (1999), §9.1.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nat-notification-time ID ::= {id-nat  3}
 * ```
 *
 * @constant
 */
export const id_nat_notification_time: ID = _OID.fromParts([3], id_nat);

/* eslint-enable */
