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
    register_ms_error_ParameterType,
    _decode_register_ms_error_ParameterType,
    _encode_register_ms_error_ParameterType,
} from '../MSAbstractService/register-ms-error-ParameterType.ta.mjs';
import { err_register_ms_error } from '../MSAccessProtocol/err-register-ms-error.va.mjs';
import { type ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca.mjs';
/**
 * @summary register_ms_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * register-ms-error ABSTRACT-ERROR ::= {
 *   PARAMETER
 *     SET {problem            [0]  RegistrationProblem,
 *          registration-type  [1]  RegistrationTypes}
 *   CODE       err-register-ms-error
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_ERROR<register_ms_error_ParameterType>}
 * @implements {ABSTRACT_ERROR<register_ms_error_ParameterType>}
 */
export const register_ms_error: ABSTRACT_ERROR<register_ms_error_ParameterType> = {
    class: 'ERROR',
    decoderFor: {
        '&ParameterType': _decode_register_ms_error_ParameterType,
    },
    encoderFor: {
        '&ParameterType': _encode_register_ms_error_ParameterType,
    },
    '&errorCode': err_register_ms_error /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
