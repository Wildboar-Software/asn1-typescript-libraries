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

/* START_OF_SYMBOL_DEFINITION _enum_for_BindProblem */
export enum _enum_for_BindProblem {
    authentication_error = 0,
    unacceptable_security_context = 1,
    unable_to_establish_association = 2,
    bind_extension_problem = 3,
    inadequate_association_confidentiality = 4,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_BindProblem */

/* START_OF_SYMBOL_DEFINITION BindProblem */
/**
 * @summary BindProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BindProblem  ::=  ENUMERATED {
 *   authentication-error(0), unacceptable-security-context(1),
 *   unable-to-establish-association(2), ... -- 1994 extension addition --,
 *   bind-extension-problem(3), inadequate-association-confidentiality(4)
 * }
 * ```@enum {number}
 */
export type BindProblem = _enum_for_BindProblem | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION BindProblem */

/* START_OF_SYMBOL_DEFINITION BindProblem_authentication_error */
/**
 * @summary BindProblem_authentication_error
 * @constant
 * @type {number}
 */
export const BindProblem_authentication_error: BindProblem = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BindProblem_authentication_error */

/* START_OF_SYMBOL_DEFINITION authentication_error */
/**
 * @summary authentication_error
 * @constant
 * @type {number}
 */
export const authentication_error: BindProblem = BindProblem_authentication_error; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION authentication_error */

/* START_OF_SYMBOL_DEFINITION BindProblem_unacceptable_security_context */
/**
 * @summary BindProblem_unacceptable_security_context
 * @constant
 * @type {number}
 */
export const BindProblem_unacceptable_security_context: BindProblem = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BindProblem_unacceptable_security_context */

/* START_OF_SYMBOL_DEFINITION unacceptable_security_context */
/**
 * @summary unacceptable_security_context
 * @constant
 * @type {number}
 */
export const unacceptable_security_context: BindProblem = BindProblem_unacceptable_security_context; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unacceptable_security_context */

/* START_OF_SYMBOL_DEFINITION BindProblem_unable_to_establish_association */
/**
 * @summary BindProblem_unable_to_establish_association
 * @constant
 * @type {number}
 */
export const BindProblem_unable_to_establish_association: BindProblem = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BindProblem_unable_to_establish_association */

/* START_OF_SYMBOL_DEFINITION unable_to_establish_association */
/**
 * @summary unable_to_establish_association
 * @constant
 * @type {number}
 */
export const unable_to_establish_association: BindProblem = BindProblem_unable_to_establish_association; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unable_to_establish_association */

/* START_OF_SYMBOL_DEFINITION BindProblem_bind_extension_problem */
/**
 * @summary BindProblem_bind_extension_problem
 * @constant
 * @type {number}
 */
export const BindProblem_bind_extension_problem: BindProblem = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BindProblem_bind_extension_problem */

/* START_OF_SYMBOL_DEFINITION bind_extension_problem */
/**
 * @summary bind_extension_problem
 * @constant
 * @type {number}
 */
export const bind_extension_problem: BindProblem = BindProblem_bind_extension_problem; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION bind_extension_problem */

/* START_OF_SYMBOL_DEFINITION BindProblem_inadequate_association_confidentiality */
/**
 * @summary BindProblem_inadequate_association_confidentiality
 * @constant
 * @type {number}
 */
export const BindProblem_inadequate_association_confidentiality: BindProblem = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BindProblem_inadequate_association_confidentiality */

/* START_OF_SYMBOL_DEFINITION inadequate_association_confidentiality */
/**
 * @summary inadequate_association_confidentiality
 * @constant
 * @type {number}
 */
export const inadequate_association_confidentiality: BindProblem = BindProblem_inadequate_association_confidentiality; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION inadequate_association_confidentiality */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BindProblem */
let _cached_decoder_for_BindProblem: $.ASN1Decoder<BindProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BindProblem */

/* START_OF_SYMBOL_DEFINITION _decode_BindProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) BindProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BindProblem} The decoded data structure.
 */
export function _decode_BindProblem(el: _Element) {
    if (!_cached_decoder_for_BindProblem) {
        _cached_decoder_for_BindProblem = $._decodeEnumerated;
    }
    return _cached_decoder_for_BindProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BindProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BindProblem */
let _cached_encoder_for_BindProblem: $.ASN1Encoder<BindProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BindProblem */

/* START_OF_SYMBOL_DEFINITION _encode_BindProblem */
/**
 * @summary Encodes a(n) BindProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BindProblem, encoded as an ASN.1 Element.
 */
export function _encode_BindProblem(
    value: BindProblem,
    elGetter: $.ASN1Encoder<BindProblem>
) {
    if (!_cached_encoder_for_BindProblem) {
        _cached_encoder_for_BindProblem = $._encodeEnumerated;
    }
    return _cached_encoder_for_BindProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BindProblem */

/* eslint-enable */
