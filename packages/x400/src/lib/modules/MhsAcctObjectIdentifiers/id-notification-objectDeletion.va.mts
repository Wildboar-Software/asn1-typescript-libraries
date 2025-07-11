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
import { ID, _decode_ID, _encode_ID } from '../MhsAcctObjectIdentifiers/ID.ta.mjs';
import { id_notification } from '../MhsAcctObjectIdentifiers/id-notification.va.mjs';
/**
 * @summary id_notification_objectDeletion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-notification-objectDeletion ID ::= {id-notification  1}
 * ```
 *
 * @constant
 */
export const id_notification_objectDeletion: ID = _OID.fromParts(
    [1],
    id_notification
);

/* eslint-enable */
