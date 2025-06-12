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

/* START_OF_SYMBOL_DEFINITION _enum_for_ScannerActionError */
/**
 * @summary ScannerActionError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScannerActionError  ::=  ENUMERATED {
 *   unspecified(0), administrativeStateLocked(1),
 *   administrativeStateShuttingDown(2), scanTerminated(3)}
 * ```@enum {number}
 */
export enum _enum_for_ScannerActionError {
    unspecified = 0,
    administrativeStateLocked = 1,
    administrativeStateShuttingDown = 2,
    scanTerminated = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ScannerActionError */

/* START_OF_SYMBOL_DEFINITION ScannerActionError */
/**
 * @summary ScannerActionError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScannerActionError  ::=  ENUMERATED {
 *   unspecified(0), administrativeStateLocked(1),
 *   administrativeStateShuttingDown(2), scanTerminated(3)}
 * ```@enum {number}
 */
export type ScannerActionError = _enum_for_ScannerActionError;
/* END_OF_SYMBOL_DEFINITION ScannerActionError */

/* START_OF_SYMBOL_DEFINITION ScannerActionError */
/**
 * @summary ScannerActionError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScannerActionError  ::=  ENUMERATED {
 *   unspecified(0), administrativeStateLocked(1),
 *   administrativeStateShuttingDown(2), scanTerminated(3)}
 * ```@enum {number}
 */
export const ScannerActionError = _enum_for_ScannerActionError;
/* END_OF_SYMBOL_DEFINITION ScannerActionError */

/* START_OF_SYMBOL_DEFINITION ScannerActionError_unspecified */
/**
 * @summary ScannerActionError_unspecified
 * @constant
 * @type {number}
 */
export const ScannerActionError_unspecified: ScannerActionError =
    ScannerActionError.unspecified; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ScannerActionError_unspecified */

/* START_OF_SYMBOL_DEFINITION unspecified */
/**
 * @summary unspecified
 * @constant
 * @type {number}
 */
export const unspecified: ScannerActionError =
    ScannerActionError.unspecified; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unspecified */

/* START_OF_SYMBOL_DEFINITION ScannerActionError_administrativeStateLocked */
/**
 * @summary ScannerActionError_administrativeStateLocked
 * @constant
 * @type {number}
 */
export const ScannerActionError_administrativeStateLocked: ScannerActionError =
    ScannerActionError.administrativeStateLocked; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ScannerActionError_administrativeStateLocked */

/* START_OF_SYMBOL_DEFINITION administrativeStateLocked */
/**
 * @summary administrativeStateLocked
 * @constant
 * @type {number}
 */
export const administrativeStateLocked: ScannerActionError =
    ScannerActionError.administrativeStateLocked; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION administrativeStateLocked */

/* START_OF_SYMBOL_DEFINITION ScannerActionError_administrativeStateShuttingDown */
/**
 * @summary ScannerActionError_administrativeStateShuttingDown
 * @constant
 * @type {number}
 */
export const ScannerActionError_administrativeStateShuttingDown: ScannerActionError =
    ScannerActionError.administrativeStateShuttingDown; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ScannerActionError_administrativeStateShuttingDown */

/* START_OF_SYMBOL_DEFINITION administrativeStateShuttingDown */
/**
 * @summary administrativeStateShuttingDown
 * @constant
 * @type {number}
 */
export const administrativeStateShuttingDown: ScannerActionError =
    ScannerActionError.administrativeStateShuttingDown; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION administrativeStateShuttingDown */

/* START_OF_SYMBOL_DEFINITION ScannerActionError_scanTerminated */
/**
 * @summary ScannerActionError_scanTerminated
 * @constant
 * @type {number}
 */
export const ScannerActionError_scanTerminated: ScannerActionError =
    ScannerActionError.scanTerminated; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ScannerActionError_scanTerminated */

/* START_OF_SYMBOL_DEFINITION scanTerminated */
/**
 * @summary scanTerminated
 * @constant
 * @type {number}
 */
export const scanTerminated: ScannerActionError =
    ScannerActionError.scanTerminated; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION scanTerminated */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ScannerActionError */
let _cached_decoder_for_ScannerActionError: $.ASN1Decoder<ScannerActionError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ScannerActionError */

/* START_OF_SYMBOL_DEFINITION _decode_ScannerActionError */
/**
 * @summary Decodes an ASN.1 element into a(n) ScannerActionError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ScannerActionError} The decoded data structure.
 */
export function _decode_ScannerActionError(el: _Element) {
    if (!_cached_decoder_for_ScannerActionError) {
        _cached_decoder_for_ScannerActionError = $._decodeEnumerated;
    }
    return _cached_decoder_for_ScannerActionError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ScannerActionError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ScannerActionError */
let _cached_encoder_for_ScannerActionError: $.ASN1Encoder<ScannerActionError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ScannerActionError */

/* START_OF_SYMBOL_DEFINITION _encode_ScannerActionError */
/**
 * @summary Encodes a(n) ScannerActionError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScannerActionError, encoded as an ASN.1 Element.
 */
export function _encode_ScannerActionError(
    value: ScannerActionError,
    elGetter: $.ASN1Encoder<ScannerActionError>
) {
    if (!_cached_encoder_for_ScannerActionError) {
        _cached_encoder_for_ScannerActionError = $._encodeEnumerated;
    }
    return _cached_encoder_for_ScannerActionError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ScannerActionError */

/* eslint-enable */
