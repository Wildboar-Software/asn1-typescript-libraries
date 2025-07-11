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
    SecurityProblem,
    _decode_SecurityProblem,
    _encode_SecurityProblem,
} from '../MTSAbstractService/SecurityProblem.ta.mjs';
import { err_security_error } from '../MTSAccessProtocol/err-security-error.va.mjs';
import { type ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca.mjs';
/**
 * @summary security_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * security-error ABSTRACT-ERROR ::= {
 *   PARAMETER  SecurityProblem
 *   CODE       err-security-error
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_ERROR<SecurityProblem>}
 * @implements {ABSTRACT_ERROR<SecurityProblem>}
 */
export const security_error: ABSTRACT_ERROR<SecurityProblem> = {
    class: 'ERROR',
    decoderFor: {
        '&ParameterType': _decode_SecurityProblem,
    },
    encoderFor: {
        '&ParameterType': _encode_SecurityProblem,
    },
    '&errorCode': err_security_error /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
