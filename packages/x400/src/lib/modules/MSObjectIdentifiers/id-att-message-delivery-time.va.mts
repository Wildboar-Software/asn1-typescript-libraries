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
import { ID, _decode_ID, _encode_ID } from '../MHSObjectIdentifiers/ID.ta.mjs';
import { id_att } from '../MSObjectIdentifiers/id-att.va.mjs';
/**
 * @summary id_att_message_delivery_time
 * @description
 *
 * OBJECT IDENTIFIER `id_att_message_delivery_time`. This general-attribute contains the
 * message-delivery-time argument of the Message-delivery abstract-operation. See
 * 8.3.1.1.1.2 of because in order to be useful, this delivery-time must be correlated
 * with the name of the recipient the message was delivered t o. See ITU-T X.413 (1999),
 * §11.2.36.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-message-delivery-time ID ::= {id-att  20}
 * ```
 *
 * @constant
 */
export const id_att_message_delivery_time: ID = _OID.fromParts([20], id_att);

/* eslint-enable */
