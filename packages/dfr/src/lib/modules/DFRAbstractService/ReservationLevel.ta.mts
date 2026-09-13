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
 * @summary ReservationLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReservationLevel  ::=  ENUMERATED {
 *     unreserved       (0),
 *     exclusive-write  (1),
 *     exclusive-access (2),
 *     read-only1       (3),
 *     read-only2       (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ReservationLevel {
    unreserved = 0,
    exclusive_write = 1,
    exclusive_access = 2,
    read_only1 = 3,
    read_only2 = 4,
}

/**
 * @summary ReservationLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReservationLevel  ::=  ENUMERATED {
 *     unreserved       (0),
 *     exclusive-write  (1),
 *     exclusive-access (2),
 *     read-only1       (3),
 *     read-only2       (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ReservationLevel = _enum_for_ReservationLevel;

/**
 * @summary ReservationLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReservationLevel  ::=  ENUMERATED {
 *     unreserved       (0),
 *     exclusive-write  (1),
 *     exclusive-access (2),
 *     read-only1       (3),
 *     read-only2       (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ReservationLevel = _enum_for_ReservationLevel;

/**
 * @summary ReservationLevel_unreserved
 * @constant
 * @type {number}
 */
export
const ReservationLevel_unreserved: ReservationLevel = ReservationLevel.unreserved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unreserved
 * @constant
 * @type {number}
 */
export
const unreserved: ReservationLevel = ReservationLevel.unreserved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReservationLevel_exclusive_write
 * @constant
 * @type {number}
 */
export
const ReservationLevel_exclusive_write: ReservationLevel = ReservationLevel.exclusive_write; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary exclusive_write
 * @constant
 * @type {number}
 */
export
const exclusive_write: ReservationLevel = ReservationLevel.exclusive_write; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReservationLevel_exclusive_access
 * @constant
 * @type {number}
 */
export
const ReservationLevel_exclusive_access: ReservationLevel = ReservationLevel.exclusive_access; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary exclusive_access
 * @constant
 * @type {number}
 */
export
const exclusive_access: ReservationLevel = ReservationLevel.exclusive_access; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReservationLevel_read_only1
 * @constant
 * @type {number}
 */
export
const ReservationLevel_read_only1: ReservationLevel = ReservationLevel.read_only1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary read_only1
 * @constant
 * @type {number}
 */
export
const read_only1: ReservationLevel = ReservationLevel.read_only1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReservationLevel_read_only2
 * @constant
 * @type {number}
 */
export
const ReservationLevel_read_only2: ReservationLevel = ReservationLevel.read_only2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary read_only2
 * @constant
 * @type {number}
 */
export
const read_only2: ReservationLevel = ReservationLevel.read_only2; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ReservationLevel: $.ASN1Decoder<ReservationLevel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReservationLevel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReservationLevel (el: _Element): ReservationLevel {
    if (!_cached_decoder_for_ReservationLevel) { _cached_decoder_for_ReservationLevel = $._decodeEnumerated; }
    return _cached_decoder_for_ReservationLevel(el);
}

let _cached_encoder_for_ReservationLevel: $.ASN1Encoder<ReservationLevel> | null = null;

/**
 * @summary Encodes a(n) ReservationLevel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReservationLevel, encoded as an ASN.1 Element.
 */
export
function _encode_ReservationLevel (value: ReservationLevel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReservationLevel) { _cached_encoder_for_ReservationLevel = $._encodeEnumerated; }
    return _cached_encoder_for_ReservationLevel(value, elGetter);
}


/* eslint-enable */
