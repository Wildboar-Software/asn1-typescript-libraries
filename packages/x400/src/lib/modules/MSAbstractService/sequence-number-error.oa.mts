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
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose';
import {
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose';
import {
    sequence_number_error_ParameterType,
    _decode_sequence_number_error_ParameterType,
    _encode_sequence_number_error_ParameterType,
} from '../MSAbstractService/sequence-number-error-ParameterType.ta.mjs';
import { err_sequence_number_error } from '../MSAccessProtocol/err-sequence-number-error.va.mjs';
import { type ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca.mjs';
/**
 * @summary sequence_number_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sequence-number-error ABSTRACT-ERROR ::= {
 *   PARAMETER
 *     SET {problems
 *            [1]  SET SIZE (1..ub-messages) OF
 *                   SET {problem          [0]  SequenceNumberProblem,
 *                        sequence-number  [1]  SequenceNumber}}
 *   CODE       err-sequence-number-error
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_ERROR<sequence_number_error_ParameterType>}
 * @implements {ABSTRACT_ERROR<sequence_number_error_ParameterType>}
 */
export const sequence_number_error: ABSTRACT_ERROR<sequence_number_error_ParameterType> = {
    class: 'ERROR',
    decoderFor: {
        '&ParameterType': _decode_sequence_number_error_ParameterType,
    },
    encoderFor: {
        '&ParameterType': _encode_sequence_number_error_ParameterType,
    },
    '&errorCode': err_sequence_number_error /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
