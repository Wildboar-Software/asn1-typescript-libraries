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
import { id_sat } from '../EDIMSObjectIdentifiers/id-sat.va.mjs';
/**
 * @summary id_sat_edi_notification_indicator
 * @description
 *
 * OBJECT IDENTIFIER `id_sat_edi_notification_indicator`. The EDI Notification Indicator
 * attribute contains information about whether any EDI Notifications have been sent by
 * the MS in response to an EDIM, and if so which type of EDI Notifications were sent.
 * The MS creates this attribute for each new EDIM and maintains the attribute values,
 * depending on the auto-actions performed. See ITU-T X.435 (1999), §18.8.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sat-edi-notification-indicator ID ::= {id-sat  2}
 * ```
 *
 * @constant
 */
export const id_sat_edi_notification_indicator: ID = _OID.fromParts([2], id_sat);

/* eslint-enable */
