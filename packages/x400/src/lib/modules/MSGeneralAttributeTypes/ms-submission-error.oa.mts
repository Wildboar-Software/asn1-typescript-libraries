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
    SubmissionError,
    _decode_SubmissionError,
    _encode_SubmissionError,
} from '../MSGeneralAttributeTypes/SubmissionError.ta.mjs';
import { id_att_ms_submission_error } from '../MSObjectIdentifiers/id-att-ms-submission-error.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary ms_submission_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-submission-error X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  SubmissionError,
 *   NUMERATION             single-valued,
 *   ID                     id-att-ms-submission-error
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<SubmissionError>}
 * @implements {X413ATTRIBUTE<SubmissionError>}
 */
export const ms_submission_error: X413ATTRIBUTE<SubmissionError> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_SubmissionError,
    },
    encoderFor: {
        '&Type': _encode_SubmissionError,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_ms_submission_error /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
