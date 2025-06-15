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
} from 'asn1-ts';
import { ID, _decode_ID, _encode_ID } from '../MhsAcctObjectIdentifiers/ID.ta.mjs';
import { id_notification } from '../MhsAcctObjectIdentifiers/id-notification.va.mjs';
/**
 * @summary id_notification_objectCreation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-notification-objectCreation ID ::= {id-notification  0}
 * ```
 *
 * @constant
 */
export const id_notification_objectCreation: ID = new _OID(
    [0],
    id_notification
);

/* eslint-enable */
