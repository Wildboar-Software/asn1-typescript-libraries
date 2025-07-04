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
    InterchangeControlReferenceField,
    _decode_InterchangeControlReferenceField,
    _encode_InterchangeControlReferenceField,
} from '../EDIMSInformationObjects/InterchangeControlReferenceField.ta.mjs';
import { mSStringMatch } from '../MSMatchingRules/mSStringMatch.oa.mjs';
import { mSSubstringsMatch } from '../MSMatchingRules/mSSubstringsMatch.oa.mjs';
import { id_rat_interchange_control_reference_for_this_recipient } from '../EDIMSObjectIdentifiers/id-rat-interchange-control-reference-for-this-recipient.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary interchange_control_reference_for_this_recipient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * interchange-control-reference-for-this-recipient X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX     InterchangeControlReferenceField,
 *   EQUALITY MATCHING-RULE    mSStringMatch,
 *   SUBSTRINGS MATCHING-RULE  mSSubstringsMatch,
 *   NUMERATION                single-valued,
 *   ID
 *     id-rat-interchange-control-reference-for-this-recipient
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<InterchangeControlReferenceField>}
 * @implements {X413ATTRIBUTE<InterchangeControlReferenceField>}
 */
export const interchange_control_reference_for_this_recipient: X413ATTRIBUTE<InterchangeControlReferenceField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_InterchangeControlReferenceField,
    },
    encoderFor: {
        '&Type': _encode_InterchangeControlReferenceField,
    },
    '&equalityMatch': mSStringMatch /* OBJECT_FIELD_SETTING */,
    '&substringsMatch': mSSubstringsMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_rat_interchange_control_reference_for_this_recipient /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
