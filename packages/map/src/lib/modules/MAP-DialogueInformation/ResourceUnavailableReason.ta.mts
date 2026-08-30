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
 * @summary ResourceUnavailableReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceUnavailableReason  ::=  ENUMERATED {
 *     shortTermResourceLimitation  (0),
 *     longTermResourceLimitation  (1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ResourceUnavailableReason {
    shortTermResourceLimitation = 0,
    longTermResourceLimitation = 1,
}

/**
 * @summary ResourceUnavailableReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceUnavailableReason  ::=  ENUMERATED {
 *     shortTermResourceLimitation  (0),
 *     longTermResourceLimitation  (1)}
 * ```
 * 
 * @enum {number}
 */
export
type ResourceUnavailableReason = _enum_for_ResourceUnavailableReason;

/**
 * @summary ResourceUnavailableReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceUnavailableReason  ::=  ENUMERATED {
 *     shortTermResourceLimitation  (0),
 *     longTermResourceLimitation  (1)}
 * ```
 * 
 * @enum {number}
 */
export
const ResourceUnavailableReason = _enum_for_ResourceUnavailableReason;

/**
 * @summary ResourceUnavailableReason_shortTermResourceLimitation
 * @constant
 * @type {number}
 */
export
const ResourceUnavailableReason_shortTermResourceLimitation: ResourceUnavailableReason = ResourceUnavailableReason.shortTermResourceLimitation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary shortTermResourceLimitation
 * @constant
 * @type {number}
 */
export
const shortTermResourceLimitation: ResourceUnavailableReason = ResourceUnavailableReason.shortTermResourceLimitation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ResourceUnavailableReason_longTermResourceLimitation
 * @constant
 * @type {number}
 */
export
const ResourceUnavailableReason_longTermResourceLimitation: ResourceUnavailableReason = ResourceUnavailableReason.longTermResourceLimitation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary longTermResourceLimitation
 * @constant
 * @type {number}
 */
export
const longTermResourceLimitation: ResourceUnavailableReason = ResourceUnavailableReason.longTermResourceLimitation; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ResourceUnavailableReason: $.ASN1Decoder<ResourceUnavailableReason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResourceUnavailableReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResourceUnavailableReason (el: _Element): ResourceUnavailableReason {
    if (!_cached_decoder_for_ResourceUnavailableReason) { _cached_decoder_for_ResourceUnavailableReason = $._decodeEnumerated; }
    return _cached_decoder_for_ResourceUnavailableReason(el);
}

let _cached_encoder_for_ResourceUnavailableReason: $.ASN1Encoder<ResourceUnavailableReason> | null = null;

/**
 * @summary Encodes a(n) ResourceUnavailableReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResourceUnavailableReason, encoded as an ASN.1 Element.
 */
export
function _encode_ResourceUnavailableReason (value: ResourceUnavailableReason, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResourceUnavailableReason) { _cached_encoder_for_ResourceUnavailableReason = $._encodeEnumerated; }
    return _cached_encoder_for_ResourceUnavailableReason(value, elGetter);
}


/* eslint-enable */
