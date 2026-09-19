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
 * @summary SHAKENValidationResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SHAKENValidationResult  ::=  ENUMERATED
 * {
 *     tNValidationPassed(1),
 *     tNValidationFailed(2),
 *     noTNValidation(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SHAKENValidationResult {
    tNValidationPassed = 1,
    tNValidationFailed = 2,
    noTNValidation = 3,
}

/**
 * @summary SHAKENValidationResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SHAKENValidationResult  ::=  ENUMERATED
 * {
 *     tNValidationPassed(1),
 *     tNValidationFailed(2),
 *     noTNValidation(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SHAKENValidationResult = _enum_for_SHAKENValidationResult;

/**
 * @summary SHAKENValidationResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SHAKENValidationResult  ::=  ENUMERATED
 * {
 *     tNValidationPassed(1),
 *     tNValidationFailed(2),
 *     noTNValidation(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SHAKENValidationResult = _enum_for_SHAKENValidationResult;

/**
 * @summary SHAKENValidationResult_tNValidationPassed
 * @constant
 * @type {number}
 */
export
const SHAKENValidationResult_tNValidationPassed: SHAKENValidationResult = SHAKENValidationResult.tNValidationPassed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tNValidationPassed
 * @constant
 * @type {number}
 */
export
const tNValidationPassed: SHAKENValidationResult = SHAKENValidationResult.tNValidationPassed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SHAKENValidationResult_tNValidationFailed
 * @constant
 * @type {number}
 */
export
const SHAKENValidationResult_tNValidationFailed: SHAKENValidationResult = SHAKENValidationResult.tNValidationFailed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tNValidationFailed
 * @constant
 * @type {number}
 */
export
const tNValidationFailed: SHAKENValidationResult = SHAKENValidationResult.tNValidationFailed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SHAKENValidationResult_noTNValidation
 * @constant
 * @type {number}
 */
export
const SHAKENValidationResult_noTNValidation: SHAKENValidationResult = SHAKENValidationResult.noTNValidation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noTNValidation
 * @constant
 * @type {number}
 */
export
const noTNValidation: SHAKENValidationResult = SHAKENValidationResult.noTNValidation; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SHAKENValidationResult: $.ASN1Decoder<SHAKENValidationResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SHAKENValidationResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SHAKENValidationResult (el: _Element): SHAKENValidationResult {
    if (!_cached_decoder_for_SHAKENValidationResult) { _cached_decoder_for_SHAKENValidationResult = $._decodeEnumerated; }
    return _cached_decoder_for_SHAKENValidationResult(el);
}

let _cached_encoder_for_SHAKENValidationResult: $.ASN1Encoder<SHAKENValidationResult> | null = null;

/**
 * @summary Encodes a(n) SHAKENValidationResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SHAKENValidationResult, encoded as an ASN.1 Element.
 */
export
function _encode_SHAKENValidationResult (value: SHAKENValidationResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SHAKENValidationResult) { _cached_encoder_for_SHAKENValidationResult = $._encodeEnumerated; }
    return _cached_encoder_for_SHAKENValidationResult(value, elGetter);
}


/* eslint-enable */
