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
 * @summary ReservationProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReservationProblem  ::=  ENUMERATED {
 *     cannot-reserve          (0),
 *     already-reserved        (1),
 *     not-yet-reserved        (2),
 *     cannot-unreserve        (3),
 *     reservation-not-changed (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ReservationProblem {
    cannot_reserve = 0,
    already_reserved = 1,
    not_yet_reserved = 2,
    cannot_unreserve = 3,
    reservation_not_changed = 4,
}

/**
 * @summary ReservationProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReservationProblem  ::=  ENUMERATED {
 *     cannot-reserve          (0),
 *     already-reserved        (1),
 *     not-yet-reserved        (2),
 *     cannot-unreserve        (3),
 *     reservation-not-changed (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ReservationProblem = _enum_for_ReservationProblem;

/**
 * @summary ReservationProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReservationProblem  ::=  ENUMERATED {
 *     cannot-reserve          (0),
 *     already-reserved        (1),
 *     not-yet-reserved        (2),
 *     cannot-unreserve        (3),
 *     reservation-not-changed (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ReservationProblem = _enum_for_ReservationProblem;

/**
 * @summary ReservationProblem_cannot_reserve
 * @constant
 * @type {number}
 */
export
const ReservationProblem_cannot_reserve: ReservationProblem = ReservationProblem.cannot_reserve; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cannot_reserve
 * @constant
 * @type {number}
 */
export
const cannot_reserve: ReservationProblem = ReservationProblem.cannot_reserve; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReservationProblem_already_reserved
 * @constant
 * @type {number}
 */
export
const ReservationProblem_already_reserved: ReservationProblem = ReservationProblem.already_reserved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary already_reserved
 * @constant
 * @type {number}
 */
export
const already_reserved: ReservationProblem = ReservationProblem.already_reserved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReservationProblem_not_yet_reserved
 * @constant
 * @type {number}
 */
export
const ReservationProblem_not_yet_reserved: ReservationProblem = ReservationProblem.not_yet_reserved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary not_yet_reserved
 * @constant
 * @type {number}
 */
export
const not_yet_reserved: ReservationProblem = ReservationProblem.not_yet_reserved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReservationProblem_cannot_unreserve
 * @constant
 * @type {number}
 */
export
const ReservationProblem_cannot_unreserve: ReservationProblem = ReservationProblem.cannot_unreserve; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cannot_unreserve
 * @constant
 * @type {number}
 */
export
const cannot_unreserve: ReservationProblem = ReservationProblem.cannot_unreserve; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReservationProblem_reservation_not_changed
 * @constant
 * @type {number}
 */
export
const ReservationProblem_reservation_not_changed: ReservationProblem = ReservationProblem.reservation_not_changed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reservation_not_changed
 * @constant
 * @type {number}
 */
export
const reservation_not_changed: ReservationProblem = ReservationProblem.reservation_not_changed; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ReservationProblem: $.ASN1Decoder<ReservationProblem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReservationProblem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReservationProblem (el: _Element): ReservationProblem {
    if (!_cached_decoder_for_ReservationProblem) { _cached_decoder_for_ReservationProblem = $._decodeEnumerated; }
    return _cached_decoder_for_ReservationProblem(el);
}

let _cached_encoder_for_ReservationProblem: $.ASN1Encoder<ReservationProblem> | null = null;

/**
 * @summary Encodes a(n) ReservationProblem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReservationProblem, encoded as an ASN.1 Element.
 */
export
function _encode_ReservationProblem (value: ReservationProblem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReservationProblem) { _cached_encoder_for_ReservationProblem = $._encodeEnumerated; }
    return _cached_encoder_for_ReservationProblem(value, elGetter);
}


/* eslint-enable */
