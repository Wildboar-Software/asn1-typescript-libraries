/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta';
export {
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta';
import {
    Code,
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta';
export {
    Code,
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta';
import {
    auto_action_request_error_ParameterType,
    _decode_auto_action_request_error_ParameterType,
    _encode_auto_action_request_error_ParameterType,
} from '../MSAbstractService/auto-action-request-error-ParameterType.ta';
export {
    auto_action_request_error_ParameterType,
    _decode_auto_action_request_error_ParameterType,
    _encode_auto_action_request_error_ParameterType,
} from '../MSAbstractService/auto-action-request-error-ParameterType.ta';
import { err_auto_action_request_error } from '../MSAccessProtocol/err-auto-action-request-error.va';
export { err_auto_action_request_error } from '../MSAccessProtocol/err-auto-action-request-error.va';
import { ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca';
export { ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca';

/* START_OF_SYMBOL_DEFINITION auto_action_request_error */
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
/* END_OF_SYMBOL_DEFINITION auto_action_request_error */

/* eslint-enable */
