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
 * @summary InteractionStrategy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InteractionStrategy  ::=  ENUMERATED {stopOnError(1), bestEffort(2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_InteractionStrategy {
    stopOnError = 1,
    bestEffort = 2,
}

/**
 * @summary InteractionStrategy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InteractionStrategy  ::=  ENUMERATED {stopOnError(1), bestEffort(2)}
 * ```
 * 
 * @enum {number}
 */
export
type InteractionStrategy = _enum_for_InteractionStrategy;

/**
 * @summary InteractionStrategy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InteractionStrategy  ::=  ENUMERATED {stopOnError(1), bestEffort(2)}
 * ```
 * 
 * @enum {number}
 */
export
const InteractionStrategy = _enum_for_InteractionStrategy;

/**
 * @summary InteractionStrategy_stopOnError
 * @constant
 * @type {number}
 */
export
const InteractionStrategy_stopOnError: InteractionStrategy = InteractionStrategy.stopOnError; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary stopOnError
 * @constant
 * @type {number}
 */
export
const stopOnError: InteractionStrategy = InteractionStrategy.stopOnError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InteractionStrategy_bestEffort
 * @constant
 * @type {number}
 */
export
const InteractionStrategy_bestEffort: InteractionStrategy = InteractionStrategy.bestEffort; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bestEffort
 * @constant
 * @type {number}
 */
export
const bestEffort: InteractionStrategy = InteractionStrategy.bestEffort; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_InteractionStrategy: $.ASN1Decoder<InteractionStrategy> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InteractionStrategy
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InteractionStrategy (el: _Element): InteractionStrategy {
    if (!_cached_decoder_for_InteractionStrategy) { _cached_decoder_for_InteractionStrategy = $._decodeEnumerated; }
    return _cached_decoder_for_InteractionStrategy(el);
}

let _cached_encoder_for_InteractionStrategy: $.ASN1Encoder<InteractionStrategy> | null = null;

/**
 * @summary Encodes a(n) InteractionStrategy into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InteractionStrategy, encoded as an ASN.1 Element.
 */
export
function _encode_InteractionStrategy (value: InteractionStrategy, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InteractionStrategy) { _cached_encoder_for_InteractionStrategy = $._encodeEnumerated; }
    return _cached_encoder_for_InteractionStrategy(value, elGetter);
}


/* eslint-enable */
