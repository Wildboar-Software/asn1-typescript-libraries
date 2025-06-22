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
    DeliveredReplyStatus,
    _decode_DeliveredReplyStatus,
    _encode_DeliveredReplyStatus,
} from '../IPMSMessageStoreAttributes/DeliveredReplyStatus.ta.mjs';
import { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa.mjs';
import { integerOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerOrderingMatch.oa.mjs';
import { id_cat_delivered_replies_summary } from '../IPMSObjectIdentifiers/id-cat-delivered-replies-summary.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary ac_delivered_replies_summary
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ac-delivered-replies-summary X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   DeliveredReplyStatus,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   ORDERING MATCHING-RULE  integerOrderingMatch,
 *   NUMERATION              multi-valued,
 *   ID                      id-cat-delivered-replies-summary
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<DeliveredReplyStatus>}
 * @implements {X413ATTRIBUTE<DeliveredReplyStatus>}
 */
export const ac_delivered_replies_summary: X413ATTRIBUTE<DeliveredReplyStatus> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_DeliveredReplyStatus,
    },
    encoderFor: {
        '&Type': _encode_DeliveredReplyStatus,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&orderingMatch': integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_cat_delivered_replies_summary /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
