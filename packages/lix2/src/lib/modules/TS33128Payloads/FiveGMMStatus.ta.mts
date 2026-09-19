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
 * @summary FiveGMMStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMMStatus  ::=  ENUMERATED
 * {
 *     uE5GMMRegistered(1),
 *     uENot5GMMRegistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FiveGMMStatus {
    uE5GMMRegistered = 1,
    uENot5GMMRegistered = 2,
}

/**
 * @summary FiveGMMStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMMStatus  ::=  ENUMERATED
 * {
 *     uE5GMMRegistered(1),
 *     uENot5GMMRegistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type FiveGMMStatus = _enum_for_FiveGMMStatus;

/**
 * @summary FiveGMMStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMMStatus  ::=  ENUMERATED
 * {
 *     uE5GMMRegistered(1),
 *     uENot5GMMRegistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const FiveGMMStatus = _enum_for_FiveGMMStatus;

/**
 * @summary FiveGMMStatus_uE5GMMRegistered
 * @constant
 * @type {number}
 */
export
const FiveGMMStatus_uE5GMMRegistered: FiveGMMStatus = FiveGMMStatus.uE5GMMRegistered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uE5GMMRegistered
 * @constant
 * @type {number}
 */
export
const uE5GMMRegistered: FiveGMMStatus = FiveGMMStatus.uE5GMMRegistered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMMStatus_uENot5GMMRegistered
 * @constant
 * @type {number}
 */
export
const FiveGMMStatus_uENot5GMMRegistered: FiveGMMStatus = FiveGMMStatus.uENot5GMMRegistered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uENot5GMMRegistered
 * @constant
 * @type {number}
 */
export
const uENot5GMMRegistered: FiveGMMStatus = FiveGMMStatus.uENot5GMMRegistered; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_FiveGMMStatus: $.ASN1Decoder<FiveGMMStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGMMStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGMMStatus (el: _Element): FiveGMMStatus {
    if (!_cached_decoder_for_FiveGMMStatus) { _cached_decoder_for_FiveGMMStatus = $._decodeEnumerated; }
    return _cached_decoder_for_FiveGMMStatus(el);
}

let _cached_encoder_for_FiveGMMStatus: $.ASN1Encoder<FiveGMMStatus> | null = null;

/**
 * @summary Encodes a(n) FiveGMMStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGMMStatus, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGMMStatus (value: FiveGMMStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGMMStatus) { _cached_encoder_for_FiveGMMStatus = $._encodeEnumerated; }
    return _cached_encoder_for_FiveGMMStatus(value, elGetter);
}


/* eslint-enable */
