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
    ApplicationReferenceField,
    _decode_ApplicationReferenceField,
    _encode_ApplicationReferenceField,
} from '../EDIMSInformationObjects/ApplicationReferenceField.ta.mjs';
import { mSStringMatch } from '../MSMatchingRules/mSStringMatch.oa.mjs';
import { mSSubstringsMatch } from '../MSMatchingRules/mSSubstringsMatch.oa.mjs';
import { id_hat_application_reference } from '../EDIMSObjectIdentifiers/id-hat-application-reference.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary application_reference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * application-reference X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX     ApplicationReferenceField,
 *   EQUALITY MATCHING-RULE    mSStringMatch,
 *   SUBSTRINGS MATCHING-RULE  mSSubstringsMatch,
 *   NUMERATION                single-valued,
 *   ID                        id-hat-application-reference
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ApplicationReferenceField>}
 * @implements {X413ATTRIBUTE<ApplicationReferenceField>}
 */
export const application_reference: X413ATTRIBUTE<ApplicationReferenceField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ApplicationReferenceField,
    },
    encoderFor: {
        '&Type': _encode_ApplicationReferenceField,
    },
    '&equalityMatch': mSStringMatch /* OBJECT_FIELD_SETTING */,
    '&substringsMatch': mSSubstringsMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_application_reference /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
