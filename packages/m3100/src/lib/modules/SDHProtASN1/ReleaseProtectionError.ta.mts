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
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION _enum_for_ReleaseProtectionError */
/**
 * @summary ReleaseProtectionError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReleaseProtectionError  ::=  ENUMERATED {failure(0), timeout(1)}
 * ```@enum {number}
 */
export enum _enum_for_ReleaseProtectionError {
    failure = 0,
    timeout = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ReleaseProtectionError */

/* START_OF_SYMBOL_DEFINITION ReleaseProtectionError */
/**
 * @summary ReleaseProtectionError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReleaseProtectionError  ::=  ENUMERATED {failure(0), timeout(1)}
 * ```@enum {number}
 */
export type ReleaseProtectionError = _enum_for_ReleaseProtectionError;
/* END_OF_SYMBOL_DEFINITION ReleaseProtectionError */

/* START_OF_SYMBOL_DEFINITION ReleaseProtectionError */
/**
 * @summary ReleaseProtectionError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReleaseProtectionError  ::=  ENUMERATED {failure(0), timeout(1)}
 * ```@enum {number}
 */
export const ReleaseProtectionError = _enum_for_ReleaseProtectionError;
/* END_OF_SYMBOL_DEFINITION ReleaseProtectionError */

/* START_OF_SYMBOL_DEFINITION ReleaseProtectionError_failure */
/**
 * @summary ReleaseProtectionError_failure
 * @constant
 * @type {number}
 */
export const ReleaseProtectionError_failure: ReleaseProtectionError =
    ReleaseProtectionError.failure; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReleaseProtectionError_failure */

/* START_OF_SYMBOL_DEFINITION failure */
/**
 * @summary failure
 * @constant
 * @type {number}
 */
export const failure: ReleaseProtectionError =
    ReleaseProtectionError.failure; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION failure */

/* START_OF_SYMBOL_DEFINITION ReleaseProtectionError_timeout */
/**
 * @summary ReleaseProtectionError_timeout
 * @constant
 * @type {number}
 */
export const ReleaseProtectionError_timeout: ReleaseProtectionError =
    ReleaseProtectionError.timeout; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReleaseProtectionError_timeout */

/* START_OF_SYMBOL_DEFINITION timeout */
/**
 * @summary timeout
 * @constant
 * @type {number}
 */
export const timeout: ReleaseProtectionError =
    ReleaseProtectionError.timeout; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION timeout */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReleaseProtectionError */
let _cached_decoder_for_ReleaseProtectionError: $.ASN1Decoder<ReleaseProtectionError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReleaseProtectionError */

/* START_OF_SYMBOL_DEFINITION _decode_ReleaseProtectionError */
/**
 * @summary Decodes an ASN.1 element into a(n) ReleaseProtectionError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReleaseProtectionError} The decoded data structure.
 */
export function _decode_ReleaseProtectionError(el: _Element) {
    if (!_cached_decoder_for_ReleaseProtectionError) {
        _cached_decoder_for_ReleaseProtectionError = $._decodeEnumerated;
    }
    return _cached_decoder_for_ReleaseProtectionError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReleaseProtectionError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReleaseProtectionError */
let _cached_encoder_for_ReleaseProtectionError: $.ASN1Encoder<ReleaseProtectionError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReleaseProtectionError */

/* START_OF_SYMBOL_DEFINITION _encode_ReleaseProtectionError */
/**
 * @summary Encodes a(n) ReleaseProtectionError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReleaseProtectionError, encoded as an ASN.1 Element.
 */
export function _encode_ReleaseProtectionError(
    value: ReleaseProtectionError,
    elGetter: $.ASN1Encoder<ReleaseProtectionError>
) {
    if (!_cached_encoder_for_ReleaseProtectionError) {
        _cached_encoder_for_ReleaseProtectionError = $._encodeEnumerated;
    }
    return _cached_encoder_for_ReleaseProtectionError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReleaseProtectionError */

/* eslint-enable */
