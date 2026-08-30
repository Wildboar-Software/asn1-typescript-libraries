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



export
enum _enum_for_TraceDepth {
    minimum = 0,
    medium = 1,
    maximum = 2,
}

/**
 * @summary TraceDepth
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceDepth  ::=  ENUMERATED {
 *     minimum (0),
 *     medium (1),
 *     maximum (2),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type TraceDepth = _enum_for_TraceDepth | ENUMERATED;

/**
 * @summary TraceDepth_minimum
 * @constant
 * @type {number}
 */
export
const TraceDepth_minimum: TraceDepth = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary minimum
 * @constant
 * @type {number}
 */
export
const minimum: TraceDepth = TraceDepth_minimum; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceDepth_medium
 * @constant
 * @type {number}
 */
export
const TraceDepth_medium: TraceDepth = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary medium
 * @constant
 * @type {number}
 */
export
const medium: TraceDepth = TraceDepth_medium; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceDepth_maximum
 * @constant
 * @type {number}
 */
export
const TraceDepth_maximum: TraceDepth = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maximum
 * @constant
 * @type {number}
 */
export
const maximum: TraceDepth = TraceDepth_maximum; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_TraceDepth: $.ASN1Decoder<TraceDepth> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TraceDepth
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TraceDepth (el: _Element): TraceDepth {
    if (!_cached_decoder_for_TraceDepth) { _cached_decoder_for_TraceDepth = $._decodeEnumerated; }
    return _cached_decoder_for_TraceDepth(el);
}

let _cached_encoder_for_TraceDepth: $.ASN1Encoder<TraceDepth> | null = null;

/**
 * @summary Encodes a(n) TraceDepth into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TraceDepth, encoded as an ASN.1 Element.
 */
export
function _encode_TraceDepth (value: TraceDepth, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TraceDepth) { _cached_encoder_for_TraceDepth = $._encodeEnumerated; }
    return _cached_encoder_for_TraceDepth(value, elGetter);
}


/* eslint-enable */
