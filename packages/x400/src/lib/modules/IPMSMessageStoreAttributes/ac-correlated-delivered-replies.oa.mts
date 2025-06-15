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
    CorrelatedDeliveredReplies,
    _decode_CorrelatedDeliveredReplies,
    _encode_CorrelatedDeliveredReplies,
} from '../IPMSMessageStoreAttributes/CorrelatedDeliveredReplies.ta.mjs';
import { id_cat_correlated_delivered_replies } from '../IPMSObjectIdentifiers/id-cat-correlated-delivered-replies.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary ac_correlated_delivered_replies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ac-correlated-delivered-replies X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  CorrelatedDeliveredReplies,
 *   NUMERATION             multi-valued,
 *   ID                     id-cat-correlated-delivered-replies
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<CorrelatedDeliveredReplies>}
 * @implements {X413ATTRIBUTE<CorrelatedDeliveredReplies>}
 */
export const ac_correlated_delivered_replies: X413ATTRIBUTE<CorrelatedDeliveredReplies> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_CorrelatedDeliveredReplies,
    },
    encoderFor: {
        '&Type': _encode_CorrelatedDeliveredReplies,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_cat_correlated_delivered_replies /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
