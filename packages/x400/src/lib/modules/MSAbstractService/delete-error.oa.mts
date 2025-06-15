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
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.mjs';
import {
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.mjs';
import {
    delete_error_ParameterType,
    _decode_delete_error_ParameterType,
    _encode_delete_error_ParameterType,
} from '../MSAbstractService/delete-error-ParameterType.ta.mjs';
import { err_delete_error } from '../MSAccessProtocol/err-delete-error.va.mjs';
import { ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca.mjs';
/**
 * @summary delete_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * delete-error ABSTRACT-ERROR ::= {
 *   PARAMETER
 *     SET {problems
 *            [0]  SET SIZE (1..ub-messages) OF
 *                   SET {problem          [0]  DeleteProblem,
 *                        sequence-number  [1]  SequenceNumber},
 *          -- 1994 extension
 *          entries-deleted
 *            [1]  SET SIZE (1..ub-messages) OF SequenceNumber OPTIONAL}
 *   CODE       err-delete-error
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_ERROR<delete_error_ParameterType>}
 * @implements {ABSTRACT_ERROR<delete_error_ParameterType>}
 */
export const delete_error: ABSTRACT_ERROR<delete_error_ParameterType> = {
    class: 'ERROR',
    decoderFor: {
        '&ParameterType': _decode_delete_error_ParameterType,
    },
    encoderFor: {
        '&ParameterType': _encode_delete_error_ParameterType,
    },
    '&errorCode': err_delete_error /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
