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
import {
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import {
    MessageDeliveryEnvelope,
    _decode_MessageDeliveryEnvelope,
    _encode_MessageDeliveryEnvelope,
} from '../MTSAbstractService/MessageDeliveryEnvelope.ta.mjs';
import { id_att_message_delivery_envelope } from '../MSObjectIdentifiers/id-att-message-delivery-envelope.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_message_delivery_envelope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-message-delivery-envelope X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  MessageDeliveryEnvelope,
 *   NUMERATION             single-valued,
 *   ID                     id-att-message-delivery-envelope
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<MessageDeliveryEnvelope>}
 * @implements {X413ATTRIBUTE<MessageDeliveryEnvelope>}
 */
export const mt_message_delivery_envelope: X413ATTRIBUTE<MessageDeliveryEnvelope> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_MessageDeliveryEnvelope,
    },
    encoderFor: {
        '&Type': _encode_MessageDeliveryEnvelope,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_message_delivery_envelope /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
