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
 * @summary PriorityLevelQualifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PriorityLevelQualifier  ::=  ENUMERATED {
 *   low(0),
 *   high(1) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PriorityLevelQualifier {
    low = 0,
    high = 1,
}

/**
 * @summary PriorityLevelQualifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PriorityLevelQualifier  ::=  ENUMERATED {
 *   low(0),
 *   high(1) }
 * ```
 * 
 * @enum {number}
 */
export
type PriorityLevelQualifier = _enum_for_PriorityLevelQualifier;

/**
 * @summary PriorityLevelQualifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PriorityLevelQualifier  ::=  ENUMERATED {
 *   low(0),
 *   high(1) }
 * ```
 * 
 * @enum {number}
 */
export
const PriorityLevelQualifier = _enum_for_PriorityLevelQualifier;

/**
 * @summary PriorityLevelQualifier_low
 * @constant
 * @type {number}
 */
export
const PriorityLevelQualifier_low: PriorityLevelQualifier = PriorityLevelQualifier.low; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary low
 * @constant
 * @type {number}
 */
export
const low: PriorityLevelQualifier = PriorityLevelQualifier.low; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PriorityLevelQualifier_high
 * @constant
 * @type {number}
 */
export
const PriorityLevelQualifier_high: PriorityLevelQualifier = PriorityLevelQualifier.high; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary high
 * @constant
 * @type {number}
 */
export
const high: PriorityLevelQualifier = PriorityLevelQualifier.high; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PriorityLevelQualifier: $.ASN1Decoder<PriorityLevelQualifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PriorityLevelQualifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PriorityLevelQualifier (el: _Element): PriorityLevelQualifier {
    if (!_cached_decoder_for_PriorityLevelQualifier) { _cached_decoder_for_PriorityLevelQualifier = $._decodeEnumerated; }
    return _cached_decoder_for_PriorityLevelQualifier(el);
}

let _cached_encoder_for_PriorityLevelQualifier: $.ASN1Encoder<PriorityLevelQualifier> | null = null;

/**
 * @summary Encodes a(n) PriorityLevelQualifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PriorityLevelQualifier, encoded as an ASN.1 Element.
 */
export
function _encode_PriorityLevelQualifier (value: PriorityLevelQualifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PriorityLevelQualifier) { _cached_encoder_for_PriorityLevelQualifier = $._encodeEnumerated; }
    return _cached_encoder_for_PriorityLevelQualifier(value, elGetter);
}


/* eslint-enable */
