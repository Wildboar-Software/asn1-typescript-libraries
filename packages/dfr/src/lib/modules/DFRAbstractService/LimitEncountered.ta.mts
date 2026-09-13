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
 * @summary LimitEncountered
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LimitEncountered  ::=  ENUMERATED {
 *     time-limit      (0),
 *     count-limit     (1),
 *     length-exceeded (2) -- maximum length as specified during binding exceeded
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_LimitEncountered {
    time_limit = 0,
    count_limit = 1,
    length_exceeded = 2,
}

/**
 * @summary LimitEncountered
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LimitEncountered  ::=  ENUMERATED {
 *     time-limit      (0),
 *     count-limit     (1),
 *     length-exceeded (2) -- maximum length as specified during binding exceeded
 * }
 * ```
 * 
 * @enum {number}
 */
export
type LimitEncountered = _enum_for_LimitEncountered;

/**
 * @summary LimitEncountered
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LimitEncountered  ::=  ENUMERATED {
 *     time-limit      (0),
 *     count-limit     (1),
 *     length-exceeded (2) -- maximum length as specified during binding exceeded
 * }
 * ```
 * 
 * @enum {number}
 */
export
const LimitEncountered = _enum_for_LimitEncountered;

/**
 * @summary LimitEncountered_time_limit
 * @constant
 * @type {number}
 */
export
const LimitEncountered_time_limit: LimitEncountered = LimitEncountered.time_limit; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary time_limit
 * @constant
 * @type {number}
 */
export
const time_limit: LimitEncountered = LimitEncountered.time_limit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LimitEncountered_count_limit
 * @constant
 * @type {number}
 */
export
const LimitEncountered_count_limit: LimitEncountered = LimitEncountered.count_limit; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary count_limit
 * @constant
 * @type {number}
 */
export
const count_limit: LimitEncountered = LimitEncountered.count_limit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LimitEncountered_length_exceeded
 * @constant
 * @type {number}
 */
export
const LimitEncountered_length_exceeded: LimitEncountered = LimitEncountered.length_exceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary length_exceeded
 * @constant
 * @type {number}
 */
export
const length_exceeded: LimitEncountered = LimitEncountered.length_exceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_LimitEncountered: $.ASN1Decoder<LimitEncountered> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LimitEncountered
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LimitEncountered (el: _Element): LimitEncountered {
    if (!_cached_decoder_for_LimitEncountered) { _cached_decoder_for_LimitEncountered = $._decodeEnumerated; }
    return _cached_decoder_for_LimitEncountered(el);
}

let _cached_encoder_for_LimitEncountered: $.ASN1Encoder<LimitEncountered> | null = null;

/**
 * @summary Encodes a(n) LimitEncountered into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LimitEncountered, encoded as an ASN.1 Element.
 */
export
function _encode_LimitEncountered (value: LimitEncountered, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LimitEncountered) { _cached_encoder_for_LimitEncountered = $._encodeEnumerated; }
    return _cached_encoder_for_LimitEncountered(value, elGetter);
}


/* eslint-enable */
