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
import {
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import {
    MessageDeliveryTime,
    _decode_MessageDeliveryTime,
    _encode_MessageDeliveryTime,
} from '../MTSAbstractService/MessageDeliveryTime.ta.mjs';
import { uTCTimeMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/uTCTimeMatch.oa.mjs';
import { uTCTimeOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/uTCTimeOrderingMatch.oa.mjs';
import { id_att_message_delivery_time } from '../MSObjectIdentifiers/id-att-message-delivery-time.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_message_delivery_time
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-message-delivery-time X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   MessageDeliveryTime,
 *   EQUALITY MATCHING-RULE  uTCTimeMatch,
 *   ORDERING MATCHING-RULE  uTCTimeOrderingMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-att-message-delivery-time
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<MessageDeliveryTime>}
 * @implements {X413ATTRIBUTE<MessageDeliveryTime>}
 */
export const mt_message_delivery_time: X413ATTRIBUTE<MessageDeliveryTime> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_MessageDeliveryTime,
    },
    encoderFor: {
        '&Type': _encode_MessageDeliveryTime,
    },
    '&equalityMatch': uTCTimeMatch /* OBJECT_FIELD_SETTING */,
    '&orderingMatch': uTCTimeOrderingMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_message_delivery_time /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
