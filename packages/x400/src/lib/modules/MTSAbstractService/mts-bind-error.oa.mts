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
    mts_bind_error_ParameterType,
    _decode_mts_bind_error_ParameterType,
    _encode_mts_bind_error_ParameterType,
} from '../MTSAbstractService/mts-bind-error-ParameterType.ta.mjs';
import { ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca.mjs';
/**
 * @summary mts_bind_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mts-bind-error ABSTRACT-ERROR ::= {
 *   PARAMETER
 *     INTEGER {busy(0), authentication-error(2), unacceptable-dialogue-mode(3),
 *              unacceptable-security-context(4),
 *              inadequate-association-confidentiality(5)}(0..ub-integer-options)
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_ERROR<mts_bind_error_ParameterType>}
 * @implements {ABSTRACT_ERROR<mts_bind_error_ParameterType>}
 */
export const mts_bind_error: ABSTRACT_ERROR<mts_bind_error_ParameterType> = {
    class: 'ERROR',
    decoderFor: {
        '&ParameterType': _decode_mts_bind_error_ParameterType,
    },
    encoderFor: {
        '&ParameterType': _encode_mts_bind_error_ParameterType,
    },
    '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
