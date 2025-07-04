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
    ReplyTimeField,
    _decode_ReplyTimeField,
    _encode_ReplyTimeField,
} from '../IPMSInformationObjects/ReplyTimeField.ta.mjs';
import { uTCTimeMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { uTCTimeOrderingMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { id_hat_reply_time } from '../IPMSObjectIdentifiers/id-hat-reply-time.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary reply_time
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * reply-time X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   ReplyTimeField,
 *   EQUALITY MATCHING-RULE  uTCTimeMatch,
 *   ORDERING MATCHING-RULE  uTCTimeOrderingMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-hat-reply-time
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ReplyTimeField>}
 * @implements {X413ATTRIBUTE<ReplyTimeField>}
 */
export const reply_time: X413ATTRIBUTE<ReplyTimeField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ReplyTimeField,
    },
    encoderFor: {
        '&Type': _encode_ReplyTimeField,
    },
    '&equalityMatch': uTCTimeMatch /* OBJECT_FIELD_SETTING */,
    '&orderingMatch': uTCTimeOrderingMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_reply_time /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
