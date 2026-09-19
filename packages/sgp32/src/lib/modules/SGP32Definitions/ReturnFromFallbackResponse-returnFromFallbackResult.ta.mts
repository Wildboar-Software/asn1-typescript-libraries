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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReturnFromFallbackResponse_returnFromFallbackResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReturnFromFallbackResponse-returnFromFallbackResult ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ReturnFromFallbackResponse_returnFromFallbackResult = INTEGER;

/**
 * @summary ReturnFromFallbackResponse_returnFromFallbackResult_ok
 * @constant
 * @type {number}
 */
export
const ReturnFromFallbackResponse_returnFromFallbackResult_ok: ReturnFromFallbackResponse_returnFromFallbackResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnFromFallbackResponse_returnFromFallbackResult_ok
 * @constant
 * @type {number}
 */
export
const ok: ReturnFromFallbackResponse_returnFromFallbackResult = ReturnFromFallbackResponse_returnFromFallbackResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnFromFallbackResponse_returnFromFallbackResult_catBusy
 * @constant
 * @type {number}
 */
export
const ReturnFromFallbackResponse_returnFromFallbackResult_catBusy: ReturnFromFallbackResponse_returnFromFallbackResult = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnFromFallbackResponse_returnFromFallbackResult_catBusy
 * @constant
 * @type {number}
 */
export
const catBusy: ReturnFromFallbackResponse_returnFromFallbackResult = ReturnFromFallbackResponse_returnFromFallbackResult_catBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnFromFallbackResponse_returnFromFallbackResult_fallbackNotAvailable
 * @constant
 * @type {number}
 */
export
const ReturnFromFallbackResponse_returnFromFallbackResult_fallbackNotAvailable: ReturnFromFallbackResponse_returnFromFallbackResult = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnFromFallbackResponse_returnFromFallbackResult_fallbackNotAvailable
 * @constant
 * @type {number}
 */
export
const fallbackNotAvailable: ReturnFromFallbackResponse_returnFromFallbackResult = ReturnFromFallbackResponse_returnFromFallbackResult_fallbackNotAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnFromFallbackResponse_returnFromFallbackResult_commandError
 * @constant
 * @type {number}
 */
export
const ReturnFromFallbackResponse_returnFromFallbackResult_commandError: ReturnFromFallbackResponse_returnFromFallbackResult = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnFromFallbackResponse_returnFromFallbackResult_commandError
 * @constant
 * @type {number}
 */
export
const commandError: ReturnFromFallbackResponse_returnFromFallbackResult = ReturnFromFallbackResponse_returnFromFallbackResult_commandError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnFromFallbackResponse_returnFromFallbackResult_undefinedError
 * @constant
 * @type {number}
 */
export
const ReturnFromFallbackResponse_returnFromFallbackResult_undefinedError: ReturnFromFallbackResponse_returnFromFallbackResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnFromFallbackResponse_returnFromFallbackResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: ReturnFromFallbackResponse_returnFromFallbackResult = ReturnFromFallbackResponse_returnFromFallbackResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ReturnFromFallbackResponse_returnFromFallbackResult: $.ASN1Decoder<ReturnFromFallbackResponse_returnFromFallbackResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReturnFromFallbackResponse_returnFromFallbackResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReturnFromFallbackResponse_returnFromFallbackResult (el: _Element): ReturnFromFallbackResponse_returnFromFallbackResult {
    if (!_cached_decoder_for_ReturnFromFallbackResponse_returnFromFallbackResult) { _cached_decoder_for_ReturnFromFallbackResponse_returnFromFallbackResult = $._decodeInteger; }
    return _cached_decoder_for_ReturnFromFallbackResponse_returnFromFallbackResult(el);
}

let _cached_encoder_for_ReturnFromFallbackResponse_returnFromFallbackResult: $.ASN1Encoder<ReturnFromFallbackResponse_returnFromFallbackResult> | null = null;

/**
 * @summary Encodes a(n) ReturnFromFallbackResponse_returnFromFallbackResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReturnFromFallbackResponse_returnFromFallbackResult, encoded as an ASN.1 Element.
 */
export
function _encode_ReturnFromFallbackResponse_returnFromFallbackResult (value: ReturnFromFallbackResponse_returnFromFallbackResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReturnFromFallbackResponse_returnFromFallbackResult) { _cached_encoder_for_ReturnFromFallbackResponse_returnFromFallbackResult = $._encodeInteger; }
    return _cached_encoder_for_ReturnFromFallbackResponse_returnFromFallbackResult(value, elGetter);
}


/* eslint-enable */
