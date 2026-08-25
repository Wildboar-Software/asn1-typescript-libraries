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
import { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers/ID.ta.mjs';
import { id_ep } from '../IPMSObjectIdentifiers/id-ep.va.mjs';
/**
 * @summary id_ep_notification
 * @description
 *
 * A Notification body part represents an IPN and, optionally, its delivery envelope. It
 * has Parameters and Data components. See ITU-T X.420 (1999), §7.4.15.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ep-notification ID ::= {id-ep  15}
 * ```
 *
 * @constant
 */
export const id_ep_notification: ID = _OID.fromParts([15], id_ep);

/* eslint-enable */
