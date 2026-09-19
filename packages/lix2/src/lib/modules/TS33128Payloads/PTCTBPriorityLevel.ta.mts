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
 * @summary PTCTBPriorityLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCTBPriorityLevel   ::=  ENUMERATED
 * {
 *     preEmptive(1),
 *     highPriority(2),
 *     normalPriority(3),
 *     listenOnly(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCTBPriorityLevel {
    preEmptive = 1,
    highPriority = 2,
    normalPriority = 3,
    listenOnly = 4,
}

/**
 * @summary PTCTBPriorityLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCTBPriorityLevel   ::=  ENUMERATED
 * {
 *     preEmptive(1),
 *     highPriority(2),
 *     normalPriority(3),
 *     listenOnly(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCTBPriorityLevel = _enum_for_PTCTBPriorityLevel;

/**
 * @summary PTCTBPriorityLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCTBPriorityLevel   ::=  ENUMERATED
 * {
 *     preEmptive(1),
 *     highPriority(2),
 *     normalPriority(3),
 *     listenOnly(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCTBPriorityLevel = _enum_for_PTCTBPriorityLevel;

/**
 * @summary PTCTBPriorityLevel_preEmptive
 * @constant
 * @type {number}
 */
export
const PTCTBPriorityLevel_preEmptive: PTCTBPriorityLevel = PTCTBPriorityLevel.preEmptive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary preEmptive
 * @constant
 * @type {number}
 */
export
const preEmptive: PTCTBPriorityLevel = PTCTBPriorityLevel.preEmptive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCTBPriorityLevel_highPriority
 * @constant
 * @type {number}
 */
export
const PTCTBPriorityLevel_highPriority: PTCTBPriorityLevel = PTCTBPriorityLevel.highPriority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary highPriority
 * @constant
 * @type {number}
 */
export
const highPriority: PTCTBPriorityLevel = PTCTBPriorityLevel.highPriority; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCTBPriorityLevel_normalPriority
 * @constant
 * @type {number}
 */
export
const PTCTBPriorityLevel_normalPriority: PTCTBPriorityLevel = PTCTBPriorityLevel.normalPriority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normalPriority
 * @constant
 * @type {number}
 */
export
const normalPriority: PTCTBPriorityLevel = PTCTBPriorityLevel.normalPriority; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCTBPriorityLevel_listenOnly
 * @constant
 * @type {number}
 */
export
const PTCTBPriorityLevel_listenOnly: PTCTBPriorityLevel = PTCTBPriorityLevel.listenOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary listenOnly
 * @constant
 * @type {number}
 */
export
const listenOnly: PTCTBPriorityLevel = PTCTBPriorityLevel.listenOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PTCTBPriorityLevel: $.ASN1Decoder<PTCTBPriorityLevel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCTBPriorityLevel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCTBPriorityLevel (el: _Element): PTCTBPriorityLevel {
    if (!_cached_decoder_for_PTCTBPriorityLevel) { _cached_decoder_for_PTCTBPriorityLevel = $._decodeEnumerated; }
    return _cached_decoder_for_PTCTBPriorityLevel(el);
}

let _cached_encoder_for_PTCTBPriorityLevel: $.ASN1Encoder<PTCTBPriorityLevel> | null = null;

/**
 * @summary Encodes a(n) PTCTBPriorityLevel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCTBPriorityLevel, encoded as an ASN.1 Element.
 */
export
function _encode_PTCTBPriorityLevel (value: PTCTBPriorityLevel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCTBPriorityLevel) { _cached_encoder_for_PTCTBPriorityLevel = $._encodeEnumerated; }
    return _cached_encoder_for_PTCTBPriorityLevel(value, elGetter);
}


/* eslint-enable */
