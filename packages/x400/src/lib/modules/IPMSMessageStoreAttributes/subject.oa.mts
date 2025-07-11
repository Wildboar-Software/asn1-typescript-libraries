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
    SubjectField,
    _decode_SubjectField,
    _encode_SubjectField,
} from '../IPMSInformationObjects/SubjectField.ta.mjs';
import { mSStringMatch } from '../MSMatchingRules/mSStringMatch.oa.mjs';
import { mSSubstringsMatch } from '../MSMatchingRules/mSSubstringsMatch.oa.mjs';
import { id_hat_subject } from '../IPMSObjectIdentifiers/id-hat-subject.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary subject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subject X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX     SubjectField,
 *   EQUALITY MATCHING-RULE    mSStringMatch,
 *   SUBSTRINGS MATCHING-RULE  mSSubstringsMatch,
 *   NUMERATION                single-valued,
 *   ID                        id-hat-subject
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<SubjectField>}
 * @implements {X413ATTRIBUTE<SubjectField>}
 */
export const subject: X413ATTRIBUTE<SubjectField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_SubjectField,
    },
    encoderFor: {
        '&Type': _encode_SubjectField,
    },
    '&equalityMatch': mSStringMatch /* OBJECT_FIELD_SETTING */,
    '&substringsMatch': mSSubstringsMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_subject /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
