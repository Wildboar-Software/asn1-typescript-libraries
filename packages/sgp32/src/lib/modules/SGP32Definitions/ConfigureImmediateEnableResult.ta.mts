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
 * @summary ConfigureImmediateEnableResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConfigureImmediateEnableResult  ::=  INTEGER {
 *     ok(0),
 *     insufficientMemory(1),
 *     commandError(7),
 *     undefinedError(127)
 * }
 * ```
 */
export
type ConfigureImmediateEnableResult = INTEGER;

/**
 * @summary ConfigureImmediateEnableResult_ok
 * @constant
 * @type {number}
 */
export
const ConfigureImmediateEnableResult_ok: ConfigureImmediateEnableResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateEnableResult_ok
 * @constant
 * @type {number}
 */
export
const ok: ConfigureImmediateEnableResult = ConfigureImmediateEnableResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateEnableResult_insufficientMemory
 * @constant
 * @type {number}
 */
export
const ConfigureImmediateEnableResult_insufficientMemory: ConfigureImmediateEnableResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateEnableResult_insufficientMemory
 * @constant
 * @type {number}
 */
export
const insufficientMemory: ConfigureImmediateEnableResult = ConfigureImmediateEnableResult_insufficientMemory; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateEnableResult_commandError
 * @constant
 * @type {number}
 */
export
const ConfigureImmediateEnableResult_commandError: ConfigureImmediateEnableResult = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateEnableResult_commandError
 * @constant
 * @type {number}
 */
export
const commandError: ConfigureImmediateEnableResult = ConfigureImmediateEnableResult_commandError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateEnableResult_undefinedError
 * @constant
 * @type {number}
 */
export
const ConfigureImmediateEnableResult_undefinedError: ConfigureImmediateEnableResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateEnableResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: ConfigureImmediateEnableResult = ConfigureImmediateEnableResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ConfigureImmediateEnableResult: $.ASN1Decoder<ConfigureImmediateEnableResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConfigureImmediateEnableResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConfigureImmediateEnableResult (el: _Element): ConfigureImmediateEnableResult {
    if (!_cached_decoder_for_ConfigureImmediateEnableResult) { _cached_decoder_for_ConfigureImmediateEnableResult = $._decodeInteger; }
    return _cached_decoder_for_ConfigureImmediateEnableResult(el);
}

let _cached_encoder_for_ConfigureImmediateEnableResult: $.ASN1Encoder<ConfigureImmediateEnableResult> | null = null;

/**
 * @summary Encodes a(n) ConfigureImmediateEnableResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConfigureImmediateEnableResult, encoded as an ASN.1 Element.
 */
export
function _encode_ConfigureImmediateEnableResult (value: ConfigureImmediateEnableResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConfigureImmediateEnableResult) { _cached_encoder_for_ConfigureImmediateEnableResult = $._encodeInteger; }
    return _cached_encoder_for_ConfigureImmediateEnableResult(value, elGetter);
}


/* eslint-enable */
