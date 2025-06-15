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
    ExtendedSubject,
    _decode_ExtendedSubject,
    _encode_ExtendedSubject,
} from '../IPMSHeadingExtensions/ExtendedSubject.ta.mjs';
import { mSStringMatch } from '../MSMatchingRules/mSStringMatch.oa.mjs';
import { mSSubstringsMatch } from '../MSMatchingRules/mSSubstringsMatch.oa.mjs';
import { id_hat_extended_subject } from '../IPMSObjectIdentifiers/id-hat-extended-subject.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary extended_subject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * extended-subject X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX     ExtendedSubject,
 *   EQUALITY MATCHING-RULE    mSStringMatch,
 *   SUBSTRINGS MATCHING-RULE  mSSubstringsMatch,
 *   NUMERATION                single-valued,
 *   ID                        id-hat-extended-subject
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ExtendedSubject>}
 * @implements {X413ATTRIBUTE<ExtendedSubject>}
 */
export const extended_subject: X413ATTRIBUTE<ExtendedSubject> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ExtendedSubject,
    },
    encoderFor: {
        '&Type': _encode_ExtendedSubject,
    },
    '&equalityMatch': mSStringMatch /* OBJECT_FIELD_SETTING */,
    '&substringsMatch': mSSubstringsMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_extended_subject /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
