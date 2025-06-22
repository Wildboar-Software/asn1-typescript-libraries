/* eslint-disable */
import {
    GeneralString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import { mSStringMatch } from '../MSMatchingRules/mSStringMatch.oa.mjs';
import { mSSubstringsMatch } from '../MSMatchingRules/mSSubstringsMatch.oa.mjs';
import { id_att_message_notes } from '../MSObjectIdentifiers/id-att-message-notes.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary ms_message_notes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-message-notes X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX     GeneralString(SIZE (1..ub-message-notes-length)),
 *   EQUALITY MATCHING-RULE    mSStringMatch,
 *   SUBSTRINGS MATCHING-RULE  mSSubstringsMatch,
 *   NUMERATION                multi-valued,
 *   ID                        id-att-message-notes
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<GeneralString>}
 * @implements {X413ATTRIBUTE<GeneralString>}
 */
export const ms_message_notes: X413ATTRIBUTE<GeneralString> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': $._decodeGeneralString,
    },
    encoderFor: {
        '&Type': $._encodeGeneralString,
    },
    '&equalityMatch': mSStringMatch /* OBJECT_FIELD_SETTING */,
    '&substringsMatch': mSSubstringsMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_message_notes /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
