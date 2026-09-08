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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary CDRReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CDRReason  ::=  ENUMERATED
 * {     timeout                 (0),
 *     thresholdReached             (1),
 *     other                     (2) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CDRReason {
    timeout = 0,
    thresholdReached = 1,
    other = 2,
}

/**
 * @summary CDRReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CDRReason  ::=  ENUMERATED
 * {     timeout                 (0),
 *     thresholdReached             (1),
 *     other                     (2) }
 * ```
 * 
 * @enum {number}
 */
export
type CDRReason = _enum_for_CDRReason;

/**
 * @summary CDRReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CDRReason  ::=  ENUMERATED
 * {     timeout                 (0),
 *     thresholdReached             (1),
 *     other                     (2) }
 * ```
 * 
 * @enum {number}
 */
export
const CDRReason = _enum_for_CDRReason;

/**
 * @summary CDRReason_timeout
 * @constant
 * @type {number}
 */
export
const CDRReason_timeout: CDRReason = CDRReason.timeout; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeout
 * @constant
 * @type {number}
 */
export
const timeout: CDRReason = CDRReason.timeout; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CDRReason_thresholdReached
 * @constant
 * @type {number}
 */
export
const CDRReason_thresholdReached: CDRReason = CDRReason.thresholdReached; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary thresholdReached
 * @constant
 * @type {number}
 */
export
const thresholdReached: CDRReason = CDRReason.thresholdReached; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CDRReason_other
 * @constant
 * @type {number}
 */
export
const CDRReason_other: CDRReason = CDRReason.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: CDRReason = CDRReason.other; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CDRReason: $.ASN1Decoder<CDRReason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CDRReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CDRReason (el: _Element): CDRReason {
    if (!_cached_decoder_for_CDRReason) { _cached_decoder_for_CDRReason = $._decodeEnumerated; }
    return _cached_decoder_for_CDRReason(el);
}

let _cached_encoder_for_CDRReason: $.ASN1Encoder<CDRReason> | null = null;

/**
 * @summary Encodes a(n) CDRReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CDRReason, encoded as an ASN.1 Element.
 */
export
function _encode_CDRReason (value: CDRReason, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CDRReason) { _cached_encoder_for_CDRReason = $._encodeEnumerated; }
    return _cached_encoder_for_CDRReason(value, elGetter);
}


/* eslint-enable */
