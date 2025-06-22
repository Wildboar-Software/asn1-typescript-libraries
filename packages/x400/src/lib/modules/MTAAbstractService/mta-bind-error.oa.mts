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
    mta_bind_error_ParameterType,
    _decode_mta_bind_error_ParameterType,
    _encode_mta_bind_error_ParameterType,
} from '../MTAAbstractService/mta-bind-error-ParameterType.ta.mjs';
import { ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca.mjs';
/**
 * @summary mta_bind_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mta-bind-error ABSTRACT-ERROR ::= {
 *   PARAMETER
 *     INTEGER {busy(0), authentication-error(2), unacceptable-dialogue-mode(3),
 *              unacceptable-security-context(4),
 *              inadequate-association-confidentiality(5)}(0..ub-integer-options)
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_ERROR<mta_bind_error_ParameterType>}
 * @implements {ABSTRACT_ERROR<mta_bind_error_ParameterType>}
 */
export const mta_bind_error: ABSTRACT_ERROR<mta_bind_error_ParameterType> = {
    class: 'ERROR',
    decoderFor: {
        '&ParameterType': _decode_mta_bind_error_ParameterType,
    },
    encoderFor: {
        '&ParameterType': _encode_mta_bind_error_ParameterType,
    },
    '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
