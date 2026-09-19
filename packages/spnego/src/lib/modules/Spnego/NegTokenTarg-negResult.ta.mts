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
 * @summary NegTokenTarg_negResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NegTokenTarg-negResult ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NegTokenTarg_negResult {
    accept_completed = 0,
    accept_incomplete = 1,
    reject = 2,
    request_mic = 3,
}

/**
 * @summary NegTokenTarg_negResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NegTokenTarg-negResult ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type NegTokenTarg_negResult = _enum_for_NegTokenTarg_negResult;

/**
 * @summary NegTokenTarg_negResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NegTokenTarg-negResult ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const NegTokenTarg_negResult = _enum_for_NegTokenTarg_negResult;

/**
 * @summary NegTokenTarg_negResult_accept_completed
 * @constant
 * @type {number}
 */
export
const NegTokenTarg_negResult_accept_completed: NegTokenTarg_negResult = NegTokenTarg_negResult.accept_completed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary accept_completed
 * @constant
 * @type {number}
 */
export
const accept_completed: NegTokenTarg_negResult = NegTokenTarg_negResult.accept_completed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NegTokenTarg_negResult_accept_incomplete
 * @constant
 * @type {number}
 */
export
const NegTokenTarg_negResult_accept_incomplete: NegTokenTarg_negResult = NegTokenTarg_negResult.accept_incomplete; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary accept_incomplete
 * @constant
 * @type {number}
 */
export
const accept_incomplete: NegTokenTarg_negResult = NegTokenTarg_negResult.accept_incomplete; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NegTokenTarg_negResult_reject
 * @constant
 * @type {number}
 */
export
const NegTokenTarg_negResult_reject: NegTokenTarg_negResult = NegTokenTarg_negResult.reject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reject
 * @constant
 * @type {number}
 */
export
const reject: NegTokenTarg_negResult = NegTokenTarg_negResult.reject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NegTokenTarg_negResult_request_mic
 * @constant
 * @type {number}
 */
export
const NegTokenTarg_negResult_request_mic: NegTokenTarg_negResult = NegTokenTarg_negResult.request_mic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary request_mic
 * @constant
 * @type {number}
 */
export
const request_mic: NegTokenTarg_negResult = NegTokenTarg_negResult.request_mic; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_NegTokenTarg_negResult: $.ASN1Decoder<NegTokenTarg_negResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NegTokenTarg_negResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NegTokenTarg_negResult (el: _Element): NegTokenTarg_negResult {
    if (!_cached_decoder_for_NegTokenTarg_negResult) { _cached_decoder_for_NegTokenTarg_negResult = $._decodeEnumerated; }
    return _cached_decoder_for_NegTokenTarg_negResult(el);
}

let _cached_encoder_for_NegTokenTarg_negResult: $.ASN1Encoder<NegTokenTarg_negResult> | null = null;

/**
 * @summary Encodes a(n) NegTokenTarg_negResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NegTokenTarg_negResult, encoded as an ASN.1 Element.
 */
export
function _encode_NegTokenTarg_negResult (value: NegTokenTarg_negResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NegTokenTarg_negResult) { _cached_encoder_for_NegTokenTarg_negResult = $._encodeEnumerated; }
    return _cached_encoder_for_NegTokenTarg_negResult(value, elGetter);
}


/* eslint-enable */
