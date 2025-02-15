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
    mts_bind_error_ParameterType,
    mts_bind_error_ParameterType_busy /* IMPORTED_LONG_NAMED_INTEGER */,
    busy /* IMPORTED_SHORT_NAMED_INTEGER */,
    mts_bind_error_ParameterType_authentication_error /* IMPORTED_LONG_NAMED_INTEGER */,
    authentication_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    mts_bind_error_ParameterType_unacceptable_dialogue_mode /* IMPORTED_LONG_NAMED_INTEGER */,
    unacceptable_dialogue_mode /* IMPORTED_SHORT_NAMED_INTEGER */,
    mts_bind_error_ParameterType_unacceptable_security_context /* IMPORTED_LONG_NAMED_INTEGER */,
    unacceptable_security_context /* IMPORTED_SHORT_NAMED_INTEGER */,
    mts_bind_error_ParameterType_inadequate_association_confidentiality /* IMPORTED_LONG_NAMED_INTEGER */,
    inadequate_association_confidentiality /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_mts_bind_error_ParameterType,
    _encode_mts_bind_error_ParameterType,
} from '../MTSAbstractService/mts-bind-error-ParameterType.ta';
export {
    mts_bind_error_ParameterType,
    mts_bind_error_ParameterType_busy /* IMPORTED_LONG_NAMED_INTEGER */,
    busy /* IMPORTED_SHORT_NAMED_INTEGER */,
    mts_bind_error_ParameterType_authentication_error /* IMPORTED_LONG_NAMED_INTEGER */,
    authentication_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    mts_bind_error_ParameterType_unacceptable_dialogue_mode /* IMPORTED_LONG_NAMED_INTEGER */,
    unacceptable_dialogue_mode /* IMPORTED_SHORT_NAMED_INTEGER */,
    mts_bind_error_ParameterType_unacceptable_security_context /* IMPORTED_LONG_NAMED_INTEGER */,
    unacceptable_security_context /* IMPORTED_SHORT_NAMED_INTEGER */,
    mts_bind_error_ParameterType_inadequate_association_confidentiality /* IMPORTED_LONG_NAMED_INTEGER */,
    inadequate_association_confidentiality /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_mts_bind_error_ParameterType,
    _encode_mts_bind_error_ParameterType,
} from '../MTSAbstractService/mts-bind-error-ParameterType.ta';
import { ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca';
export { ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca';

/* START_OF_SYMBOL_DEFINITION mts_bind_error */
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
/* END_OF_SYMBOL_DEFINITION mts_bind_error */

/* eslint-enable */
