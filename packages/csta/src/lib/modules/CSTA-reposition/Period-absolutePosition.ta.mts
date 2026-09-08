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
 * @summary Period_absolutePosition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Period-absolutePosition ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Period_absolutePosition {
    startOfMessage = 0,
    endOfMessage = 1,
}

/**
 * @summary Period_absolutePosition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Period-absolutePosition ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type Period_absolutePosition = _enum_for_Period_absolutePosition;

/**
 * @summary Period_absolutePosition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Period-absolutePosition ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const Period_absolutePosition = _enum_for_Period_absolutePosition;

/**
 * @summary Period_absolutePosition_startOfMessage
 * @constant
 * @type {number}
 */
export
const Period_absolutePosition_startOfMessage: Period_absolutePosition = Period_absolutePosition.startOfMessage; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfMessage
 * @constant
 * @type {number}
 */
export
const startOfMessage: Period_absolutePosition = Period_absolutePosition.startOfMessage; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Period_absolutePosition_endOfMessage
 * @constant
 * @type {number}
 */
export
const Period_absolutePosition_endOfMessage: Period_absolutePosition = Period_absolutePosition.endOfMessage; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary endOfMessage
 * @constant
 * @type {number}
 */
export
const endOfMessage: Period_absolutePosition = Period_absolutePosition.endOfMessage; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Period_absolutePosition: $.ASN1Decoder<Period_absolutePosition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Period_absolutePosition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Period_absolutePosition (el: _Element): Period_absolutePosition {
    if (!_cached_decoder_for_Period_absolutePosition) { _cached_decoder_for_Period_absolutePosition = $._decodeEnumerated; }
    return _cached_decoder_for_Period_absolutePosition(el);
}

let _cached_encoder_for_Period_absolutePosition: $.ASN1Encoder<Period_absolutePosition> | null = null;

/**
 * @summary Encodes a(n) Period_absolutePosition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Period_absolutePosition, encoded as an ASN.1 Element.
 */
export
function _encode_Period_absolutePosition (value: Period_absolutePosition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Period_absolutePosition) { _cached_encoder_for_Period_absolutePosition = $._encodeEnumerated; }
    return _cached_encoder_for_Period_absolutePosition(value, elGetter);
}


/* eslint-enable */
