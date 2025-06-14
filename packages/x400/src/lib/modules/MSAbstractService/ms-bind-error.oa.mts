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
    ms_bind_error_ParameterType,
    _decode_ms_bind_error_ParameterType,
    _encode_ms_bind_error_ParameterType,
} from '../MSAbstractService/ms-bind-error-ParameterType.ta.mjs';
import { ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca.mjs';
/* START_OF_SYMBOL_DEFINITION ms_bind_error */
/**
 * @summary ms_bind_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-bind-error ABSTRACT-ERROR ::= {
 *   PARAMETER
 *     CHOICE {unqualified-error  BindProblem,
 *             -- 1994 extension
 *             qualified-error
 *               SET {bind-problem               [0]  BindProblem,
 *                    supplementary-information
 *                      [1]  GeneralString(SIZE (1..ub-supplementary-info-length))
 *                        OPTIONAL,
 *                    bind-extension-errors
 *                      [2]  SET SIZE (1..ub-extensions) OF OBJECT IDENTIFIER
 *                        OPTIONAL}}
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_ERROR<ms_bind_error_ParameterType>}
 * @implements {ABSTRACT_ERROR<ms_bind_error_ParameterType>}
 */
export const ms_bind_error: ABSTRACT_ERROR<ms_bind_error_ParameterType> = {
    class: 'ERROR',
    decoderFor: {
        '&ParameterType': _decode_ms_bind_error_ParameterType,
    },
    encoderFor: {
        '&ParameterType': _encode_ms_bind_error_ParameterType,
    },
    '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ms_bind_error */

/* eslint-enable */
