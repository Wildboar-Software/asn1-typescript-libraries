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
    SubjectSubmissionIdentifier,
    _decode_SubjectSubmissionIdentifier,
    _encode_SubjectSubmissionIdentifier,
} from '../MTSAbstractService/SubjectSubmissionIdentifier.ta.mjs';
import { mTSIdentifierMatch } from '../MSMatchingRules/mTSIdentifierMatch.oa.mjs';
import { id_att_subject_submission_identifier } from '../MSObjectIdentifiers/id-att-subject-submission-identifier.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_subject_submission_identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-subject-submission-identifier X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   SubjectSubmissionIdentifier,
 *   EQUALITY MATCHING-RULE
 *     mTSIdentifierMatch, -- rule not defined in 1988 Application Contexts
 *
 *   NUMERATION              single-valued,
 *   ID                      id-att-subject-submission-identifier
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<SubjectSubmissionIdentifier>}
 * @implements {X413ATTRIBUTE<SubjectSubmissionIdentifier>}
 */
export const mt_subject_submission_identifier: X413ATTRIBUTE<SubjectSubmissionIdentifier> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_SubjectSubmissionIdentifier,
    },
    encoderFor: {
        '&Type': _encode_SubjectSubmissionIdentifier,
    },
    '&equalityMatch': mTSIdentifierMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_subject_submission_identifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
