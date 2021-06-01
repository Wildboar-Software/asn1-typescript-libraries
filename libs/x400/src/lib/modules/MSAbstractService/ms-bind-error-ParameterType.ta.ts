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
    BindProblem,
    _enum_for_BindProblem,
    BindProblem_authentication_error /* IMPORTED_LONG_ENUMERATION_ITEM */,
    authentication_error /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    BindProblem_unacceptable_security_context /* IMPORTED_LONG_ENUMERATION_ITEM */,
    unacceptable_security_context /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    BindProblem_unable_to_establish_association /* IMPORTED_LONG_ENUMERATION_ITEM */,
    unable_to_establish_association /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    BindProblem_bind_extension_problem /* IMPORTED_LONG_ENUMERATION_ITEM */,
    bind_extension_problem /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    BindProblem_inadequate_association_confidentiality /* IMPORTED_LONG_ENUMERATION_ITEM */,
    inadequate_association_confidentiality /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_BindProblem,
    _encode_BindProblem,
} from '../MSAbstractService/BindProblem.ta';
export {
    BindProblem,
    _enum_for_BindProblem,
    BindProblem_authentication_error /* IMPORTED_LONG_ENUMERATION_ITEM */,
    authentication_error /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    BindProblem_unacceptable_security_context /* IMPORTED_LONG_ENUMERATION_ITEM */,
    unacceptable_security_context /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    BindProblem_unable_to_establish_association /* IMPORTED_LONG_ENUMERATION_ITEM */,
    unable_to_establish_association /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    BindProblem_bind_extension_problem /* IMPORTED_LONG_ENUMERATION_ITEM */,
    bind_extension_problem /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    BindProblem_inadequate_association_confidentiality /* IMPORTED_LONG_ENUMERATION_ITEM */,
    inadequate_association_confidentiality /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_BindProblem,
    _encode_BindProblem,
} from '../MSAbstractService/BindProblem.ta';
import {
    ms_bind_error_ParameterType_qualified_error,
    _decode_ms_bind_error_ParameterType_qualified_error,
    _encode_ms_bind_error_ParameterType_qualified_error,
} from '../MSAbstractService/ms-bind-error-ParameterType-qualified-error.ta';
export {
    ms_bind_error_ParameterType_qualified_error,
    _decode_ms_bind_error_ParameterType_qualified_error,
    _encode_ms_bind_error_ParameterType_qualified_error,
} from '../MSAbstractService/ms-bind-error-ParameterType-qualified-error.ta';

/* START_OF_SYMBOL_DEFINITION ms_bind_error_ParameterType */
/**
 * @summary ms_bind_error_ParameterType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-bind-error-ParameterType ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ms_bind_error_ParameterType =
    | { unqualified_error: BindProblem } /* CHOICE_ALT_ROOT */
    | {
          qualified_error: ms_bind_error_ParameterType_qualified_error;
      } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ms_bind_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ms_bind_error_ParameterType */
let _cached_decoder_for_ms_bind_error_ParameterType: $.ASN1Decoder<ms_bind_error_ParameterType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ms_bind_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _decode_ms_bind_error_ParameterType */
/**
 * @summary Decodes an ASN.1 element into a(n) ms_bind_error_ParameterType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ms_bind_error_ParameterType} The decoded data structure.
 */
export function _decode_ms_bind_error_ParameterType(el: _Element) {
    if (!_cached_decoder_for_ms_bind_error_ParameterType) {
        _cached_decoder_for_ms_bind_error_ParameterType = $._decode_inextensible_choice<ms_bind_error_ParameterType>(
            {
                'UNIVERSAL 10': ['unqualified_error', _decode_BindProblem],
                'UNIVERSAL 17': [
                    'qualified_error',
                    _decode_ms_bind_error_ParameterType_qualified_error,
                ],
            }
        );
    }
    return _cached_decoder_for_ms_bind_error_ParameterType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ms_bind_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ms_bind_error_ParameterType */
let _cached_encoder_for_ms_bind_error_ParameterType: $.ASN1Encoder<ms_bind_error_ParameterType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ms_bind_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _encode_ms_bind_error_ParameterType */
/**
 * @summary Encodes a(n) ms_bind_error_ParameterType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ms_bind_error_ParameterType, encoded as an ASN.1 Element.
 */
export function _encode_ms_bind_error_ParameterType(
    value: ms_bind_error_ParameterType,
    elGetter: $.ASN1Encoder<ms_bind_error_ParameterType>
) {
    if (!_cached_encoder_for_ms_bind_error_ParameterType) {
        _cached_encoder_for_ms_bind_error_ParameterType = $._encode_choice<ms_bind_error_ParameterType>(
            {
                unqualified_error: _encode_BindProblem,
                qualified_error: _encode_ms_bind_error_ParameterType_qualified_error,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ms_bind_error_ParameterType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ms_bind_error_ParameterType */

/* eslint-enable */
