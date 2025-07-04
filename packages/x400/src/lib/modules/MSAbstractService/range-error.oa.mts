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
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.mjs';
import {
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.mjs';
import {
    range_error_ParameterType,
    _decode_range_error_ParameterType,
    _encode_range_error_ParameterType,
} from '../MSAbstractService/range-error-ParameterType.ta.mjs';
import { err_range_error } from '../MSAccessProtocol/err-range-error.va.mjs';
import { ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca.mjs';
/**
 * @summary range_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * range-error ABSTRACT-ERROR ::= {
 *   PARAMETER  SET {problem  [0]  RangeProblem}
 *   CODE       err-range-error
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_ERROR<range_error_ParameterType>}
 * @implements {ABSTRACT_ERROR<range_error_ParameterType>}
 */
export const range_error: ABSTRACT_ERROR<range_error_ParameterType> = {
    class: 'ERROR',
    decoderFor: {
        '&ParameterType': _decode_range_error_ParameterType,
    },
    encoderFor: {
        '&ParameterType': _encode_range_error_ParameterType,
    },
    '&errorCode': err_range_error /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
