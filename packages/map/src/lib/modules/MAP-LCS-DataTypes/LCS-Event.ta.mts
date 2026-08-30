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



export
enum _enum_for_LCS_Event {
    emergencyCallOrigination = 0,
    emergencyCallRelease = 1,
    mo_lr = 2,
    deferredmt_lrResponse = 3,
    deferredmo_lrTTTPInitiation = 4,
    emergencyCallHandover = 5,
}

/**
 * @summary LCS_Event
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCS-Event  ::=  ENUMERATED {
 *     emergencyCallOrigination  (0),
 *     emergencyCallRelease  (1), 
 *     mo-lr  (2),
 *     ...,
 *     deferredmt-lrResponse  (3) ,
 *     deferredmo-lrTTTPInitiation  (4),
 *     emergencyCallHandover (5)  }
 * ```
 * 
 * @enum {number}
 */
export
type LCS_Event = _enum_for_LCS_Event | ENUMERATED;

/**
 * @summary LCS_Event_emergencyCallOrigination
 * @constant
 * @type {number}
 */
export
const LCS_Event_emergencyCallOrigination: LCS_Event = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emergencyCallOrigination
 * @constant
 * @type {number}
 */
export
const emergencyCallOrigination: LCS_Event = LCS_Event_emergencyCallOrigination; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCS_Event_emergencyCallRelease
 * @constant
 * @type {number}
 */
export
const LCS_Event_emergencyCallRelease: LCS_Event = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emergencyCallRelease
 * @constant
 * @type {number}
 */
export
const emergencyCallRelease: LCS_Event = LCS_Event_emergencyCallRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCS_Event_mo_lr
 * @constant
 * @type {number}
 */
export
const LCS_Event_mo_lr: LCS_Event = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mo_lr
 * @constant
 * @type {number}
 */
export
const mo_lr: LCS_Event = LCS_Event_mo_lr; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCS_Event_deferredmt_lrResponse
 * @constant
 * @type {number}
 */
export
const LCS_Event_deferredmt_lrResponse: LCS_Event = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deferredmt_lrResponse
 * @constant
 * @type {number}
 */
export
const deferredmt_lrResponse: LCS_Event = LCS_Event_deferredmt_lrResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCS_Event_deferredmo_lrTTTPInitiation
 * @constant
 * @type {number}
 */
export
const LCS_Event_deferredmo_lrTTTPInitiation: LCS_Event = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deferredmo_lrTTTPInitiation
 * @constant
 * @type {number}
 */
export
const deferredmo_lrTTTPInitiation: LCS_Event = LCS_Event_deferredmo_lrTTTPInitiation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCS_Event_emergencyCallHandover
 * @constant
 * @type {number}
 */
export
const LCS_Event_emergencyCallHandover: LCS_Event = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emergencyCallHandover
 * @constant
 * @type {number}
 */
export
const emergencyCallHandover: LCS_Event = LCS_Event_emergencyCallHandover; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_LCS_Event: $.ASN1Decoder<LCS_Event> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LCS_Event
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LCS_Event (el: _Element): LCS_Event {
    if (!_cached_decoder_for_LCS_Event) { _cached_decoder_for_LCS_Event = $._decodeEnumerated; }
    return _cached_decoder_for_LCS_Event(el);
}

let _cached_encoder_for_LCS_Event: $.ASN1Encoder<LCS_Event> | null = null;

/**
 * @summary Encodes a(n) LCS_Event into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCS_Event, encoded as an ASN.1 Element.
 */
export
function _encode_LCS_Event (value: LCS_Event, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LCS_Event) { _cached_encoder_for_LCS_Event = $._encodeEnumerated; }
    return _cached_encoder_for_LCS_Event(value, elGetter);
}


/* eslint-enable */
