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

/* START_OF_SYMBOL_DEFINITION _enum_for_InvokeProtectionError */
/**
 * @summary InvokeProtectionError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeProtectionError  ::=  ENUMERATED {preempted(0), failure(1), timeout(2)}
 * ```@enum {number}
 */
export enum _enum_for_InvokeProtectionError {
    preempted = 0,
    failure = 1,
    timeout = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_InvokeProtectionError */

/* START_OF_SYMBOL_DEFINITION InvokeProtectionError */
/**
 * @summary InvokeProtectionError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeProtectionError  ::=  ENUMERATED {preempted(0), failure(1), timeout(2)}
 * ```@enum {number}
 */
export type InvokeProtectionError = _enum_for_InvokeProtectionError;
/* END_OF_SYMBOL_DEFINITION InvokeProtectionError */

/* START_OF_SYMBOL_DEFINITION InvokeProtectionError */
/**
 * @summary InvokeProtectionError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeProtectionError  ::=  ENUMERATED {preempted(0), failure(1), timeout(2)}
 * ```@enum {number}
 */
export const InvokeProtectionError = _enum_for_InvokeProtectionError;
/* END_OF_SYMBOL_DEFINITION InvokeProtectionError */

/* START_OF_SYMBOL_DEFINITION InvokeProtectionError_preempted */
/**
 * @summary InvokeProtectionError_preempted
 * @constant
 * @type {number}
 */
export const InvokeProtectionError_preempted: InvokeProtectionError =
    InvokeProtectionError.preempted; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InvokeProtectionError_preempted */

/* START_OF_SYMBOL_DEFINITION preempted */
/**
 * @summary preempted
 * @constant
 * @type {number}
 */
export const preempted: InvokeProtectionError =
    InvokeProtectionError.preempted; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION preempted */

/* START_OF_SYMBOL_DEFINITION InvokeProtectionError_failure */
/**
 * @summary InvokeProtectionError_failure
 * @constant
 * @type {number}
 */
export const InvokeProtectionError_failure: InvokeProtectionError =
    InvokeProtectionError.failure; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InvokeProtectionError_failure */

/* START_OF_SYMBOL_DEFINITION failure */
/**
 * @summary failure
 * @constant
 * @type {number}
 */
export const failure: InvokeProtectionError =
    InvokeProtectionError.failure; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION failure */

/* START_OF_SYMBOL_DEFINITION InvokeProtectionError_timeout */
/**
 * @summary InvokeProtectionError_timeout
 * @constant
 * @type {number}
 */
export const InvokeProtectionError_timeout: InvokeProtectionError =
    InvokeProtectionError.timeout; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InvokeProtectionError_timeout */

/* START_OF_SYMBOL_DEFINITION timeout */
/**
 * @summary timeout
 * @constant
 * @type {number}
 */
export const timeout: InvokeProtectionError =
    InvokeProtectionError.timeout; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION timeout */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InvokeProtectionError */
let _cached_decoder_for_InvokeProtectionError: $.ASN1Decoder<InvokeProtectionError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InvokeProtectionError */

/* START_OF_SYMBOL_DEFINITION _decode_InvokeProtectionError */
/**
 * @summary Decodes an ASN.1 element into a(n) InvokeProtectionError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvokeProtectionError} The decoded data structure.
 */
export function _decode_InvokeProtectionError(el: _Element) {
    if (!_cached_decoder_for_InvokeProtectionError) {
        _cached_decoder_for_InvokeProtectionError = $._decodeEnumerated;
    }
    return _cached_decoder_for_InvokeProtectionError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InvokeProtectionError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InvokeProtectionError */
let _cached_encoder_for_InvokeProtectionError: $.ASN1Encoder<InvokeProtectionError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InvokeProtectionError */

/* START_OF_SYMBOL_DEFINITION _encode_InvokeProtectionError */
/**
 * @summary Encodes a(n) InvokeProtectionError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvokeProtectionError, encoded as an ASN.1 Element.
 */
export function _encode_InvokeProtectionError(
    value: InvokeProtectionError,
    elGetter: $.ASN1Encoder<InvokeProtectionError>
) {
    if (!_cached_encoder_for_InvokeProtectionError) {
        _cached_encoder_for_InvokeProtectionError = $._encodeEnumerated;
    }
    return _cached_encoder_for_InvokeProtectionError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InvokeProtectionError */

/* eslint-enable */
