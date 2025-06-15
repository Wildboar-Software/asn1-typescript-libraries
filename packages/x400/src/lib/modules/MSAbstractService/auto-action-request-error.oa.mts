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
    auto_action_request_error_ParameterType,
    _decode_auto_action_request_error_ParameterType,
    _encode_auto_action_request_error_ParameterType,
} from '../MSAbstractService/auto-action-request-error-ParameterType.ta.mjs';
import { err_auto_action_request_error } from '../MSAccessProtocol/err-auto-action-request-error.va.mjs';
import { ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca.mjs';
/**
 * @summary auto_action_request_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * auto-action-request-error ABSTRACT-ERROR ::= {
 *   PARAMETER
 *     SET {problems
 *            [0]  SET SIZE (1..ub-auto-registrations) OF
 *                   SET {problem  [0]  AutoActionRequestProblem,
 *                        type     [1]  AUTO-ACTION.&id({AutoActionTable})
 *                   }}
 *   CODE       err-auto-action-request-error
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_ERROR<auto_action_request_error_ParameterType>}
 * @implements {ABSTRACT_ERROR<auto_action_request_error_ParameterType>}
 */
export const auto_action_request_error: ABSTRACT_ERROR<auto_action_request_error_ParameterType> = {
    class: 'ERROR',
    decoderFor: {
        '&ParameterType': _decode_auto_action_request_error_ParameterType,
    },
    encoderFor: {
        '&ParameterType': _encode_auto_action_request_error_ParameterType,
    },
    '&errorCode': err_auto_action_request_error /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
