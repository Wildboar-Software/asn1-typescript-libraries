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
 * @summary ReservationStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReservationStatus  ::=  ENUMERATED {
 *     uncommitted (0),
 *     committed   (1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ReservationStatus {
    uncommitted = 0,
    committed = 1,
}

/**
 * @summary ReservationStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReservationStatus  ::=  ENUMERATED {
 *     uncommitted (0),
 *     committed   (1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ReservationStatus = _enum_for_ReservationStatus;

/**
 * @summary ReservationStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReservationStatus  ::=  ENUMERATED {
 *     uncommitted (0),
 *     committed   (1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ReservationStatus = _enum_for_ReservationStatus;

/**
 * @summary ReservationStatus_uncommitted
 * @constant
 * @type {number}
 */
export
const ReservationStatus_uncommitted: ReservationStatus = ReservationStatus.uncommitted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uncommitted
 * @constant
 * @type {number}
 */
export
const uncommitted: ReservationStatus = ReservationStatus.uncommitted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReservationStatus_committed
 * @constant
 * @type {number}
 */
export
const ReservationStatus_committed: ReservationStatus = ReservationStatus.committed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary committed
 * @constant
 * @type {number}
 */
export
const committed: ReservationStatus = ReservationStatus.committed; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ReservationStatus: $.ASN1Decoder<ReservationStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReservationStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReservationStatus (el: _Element): ReservationStatus {
    if (!_cached_decoder_for_ReservationStatus) { _cached_decoder_for_ReservationStatus = $._decodeEnumerated; }
    return _cached_decoder_for_ReservationStatus(el);
}

let _cached_encoder_for_ReservationStatus: $.ASN1Encoder<ReservationStatus> | null = null;

/**
 * @summary Encodes a(n) ReservationStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReservationStatus, encoded as an ASN.1 Element.
 */
export
function _encode_ReservationStatus (value: ReservationStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReservationStatus) { _cached_encoder_for_ReservationStatus = $._encodeEnumerated; }
    return _cached_encoder_for_ReservationStatus(value, elGetter);
}


/* eslint-enable */
