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
 * @summary SubscriptionProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriptionProblem  ::=  ENUMERATED {
 *   mms-eos-not-subcribed(0), mts-eos-not-subcribed(1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SubscriptionProblem {
    mms_eos_not_subcribed = 0,
    mts_eos_not_subcribed = 1,
}

/**
 * @summary SubscriptionProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriptionProblem  ::=  ENUMERATED {
 *   mms-eos-not-subcribed(0), mts-eos-not-subcribed(1)}
 * ```
 * 
 * @enum {number}
 */
export
type SubscriptionProblem = _enum_for_SubscriptionProblem;

/**
 * @summary SubscriptionProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriptionProblem  ::=  ENUMERATED {
 *   mms-eos-not-subcribed(0), mts-eos-not-subcribed(1)}
 * ```
 * 
 * @enum {number}
 */
export
const SubscriptionProblem = _enum_for_SubscriptionProblem;

/**
 * @summary SubscriptionProblem_mms_eos_not_subcribed
 * @constant
 * @type {number}
 */
export
const SubscriptionProblem_mms_eos_not_subcribed: SubscriptionProblem = SubscriptionProblem.mms_eos_not_subcribed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mms_eos_not_subcribed
 * @constant
 * @type {number}
 */
export
const mms_eos_not_subcribed: SubscriptionProblem = SubscriptionProblem.mms_eos_not_subcribed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriptionProblem_mts_eos_not_subcribed
 * @constant
 * @type {number}
 */
export
const SubscriptionProblem_mts_eos_not_subcribed: SubscriptionProblem = SubscriptionProblem.mts_eos_not_subcribed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mts_eos_not_subcribed
 * @constant
 * @type {number}
 */
export
const mts_eos_not_subcribed: SubscriptionProblem = SubscriptionProblem.mts_eos_not_subcribed; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SubscriptionProblem: $.ASN1Decoder<SubscriptionProblem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubscriptionProblem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubscriptionProblem (el: _Element): SubscriptionProblem {
    if (!_cached_decoder_for_SubscriptionProblem) { _cached_decoder_for_SubscriptionProblem = $._decodeEnumerated; }
    return _cached_decoder_for_SubscriptionProblem(el);
}

let _cached_encoder_for_SubscriptionProblem: $.ASN1Encoder<SubscriptionProblem> | null = null;

/**
 * @summary Encodes a(n) SubscriptionProblem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscriptionProblem, encoded as an ASN.1 Element.
 */
export
function _encode_SubscriptionProblem (value: SubscriptionProblem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubscriptionProblem) { _cached_encoder_for_SubscriptionProblem = $._encodeEnumerated; }
    return _cached_encoder_for_SubscriptionProblem(value, elGetter);
}


/* eslint-enable */
