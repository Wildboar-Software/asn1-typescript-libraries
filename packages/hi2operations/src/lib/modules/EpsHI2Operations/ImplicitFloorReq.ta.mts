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
enum _enum_for_ImplicitFloorReq {
    join = 1,
    rejoin = 2,
    release = 3,
}

/**
 * @summary ImplicitFloorReq
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ImplicitFloorReq  ::=  ENUMERATED
 * {
 *  join (1),
 *  rejoin (2),
 *  release (3),
 *  -- group Call request to join, rejoin, or release of the group call
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ImplicitFloorReq = _enum_for_ImplicitFloorReq | ENUMERATED;

/**
 * @summary ImplicitFloorReq_join
 * @constant
 * @type {number}
 */
export
const ImplicitFloorReq_join: ImplicitFloorReq = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary join
 * @constant
 * @type {number}
 */
export
const join: ImplicitFloorReq = ImplicitFloorReq_join; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ImplicitFloorReq_rejoin
 * @constant
 * @type {number}
 */
export
const ImplicitFloorReq_rejoin: ImplicitFloorReq = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rejoin
 * @constant
 * @type {number}
 */
export
const rejoin: ImplicitFloorReq = ImplicitFloorReq_rejoin; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ImplicitFloorReq_release
 * @constant
 * @type {number}
 */
export
const ImplicitFloorReq_release: ImplicitFloorReq = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary release
 * @constant
 * @type {number}
 */
export
const release: ImplicitFloorReq = ImplicitFloorReq_release; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ImplicitFloorReq: $.ASN1Decoder<ImplicitFloorReq> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ImplicitFloorReq
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ImplicitFloorReq (el: _Element): ImplicitFloorReq {
    if (!_cached_decoder_for_ImplicitFloorReq) { _cached_decoder_for_ImplicitFloorReq = $._decodeEnumerated; }
    return _cached_decoder_for_ImplicitFloorReq(el);
}

let _cached_encoder_for_ImplicitFloorReq: $.ASN1Encoder<ImplicitFloorReq> | null = null;

/**
 * @summary Encodes a(n) ImplicitFloorReq into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ImplicitFloorReq, encoded as an ASN.1 Element.
 */
export
function _encode_ImplicitFloorReq (value: ImplicitFloorReq, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ImplicitFloorReq) { _cached_encoder_for_ImplicitFloorReq = $._encodeEnumerated; }
    return _cached_encoder_for_ImplicitFloorReq(value, elGetter);
}


/* eslint-enable */
