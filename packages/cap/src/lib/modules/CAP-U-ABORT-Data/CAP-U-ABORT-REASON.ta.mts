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
 * @summary CAP_U_ABORT_REASON
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CAP-U-ABORT-REASON  ::=  ENUMERATED {
 *     no-reason-given        (1),
 *     application-timer-expired    (2),
 *     not-allowed-procedures    (3),
 *     abnormal-processing        (4),
 *     congestion            (5),
 *     invalid-reference        (6),
 *     missing-reference        (7),
 *     overlapping-dialogue    (8)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CAP_U_ABORT_REASON {
    no_reason_given = 1,
    application_timer_expired = 2,
    not_allowed_procedures = 3,
    abnormal_processing = 4,
    congestion = 5,
    invalid_reference = 6,
    missing_reference = 7,
    overlapping_dialogue = 8,
}

/**
 * @summary CAP_U_ABORT_REASON
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CAP-U-ABORT-REASON  ::=  ENUMERATED {
 *     no-reason-given        (1),
 *     application-timer-expired    (2),
 *     not-allowed-procedures    (3),
 *     abnormal-processing        (4),
 *     congestion            (5),
 *     invalid-reference        (6),
 *     missing-reference        (7),
 *     overlapping-dialogue    (8)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type CAP_U_ABORT_REASON = _enum_for_CAP_U_ABORT_REASON;

/**
 * @summary CAP_U_ABORT_REASON
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CAP-U-ABORT-REASON  ::=  ENUMERATED {
 *     no-reason-given        (1),
 *     application-timer-expired    (2),
 *     not-allowed-procedures    (3),
 *     abnormal-processing        (4),
 *     congestion            (5),
 *     invalid-reference        (6),
 *     missing-reference        (7),
 *     overlapping-dialogue    (8)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const CAP_U_ABORT_REASON = _enum_for_CAP_U_ABORT_REASON;

/**
 * @summary CAP_U_ABORT_REASON_no_reason_given
 * @constant
 * @type {number}
 */
export
const CAP_U_ABORT_REASON_no_reason_given: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.no_reason_given; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_reason_given
 * @constant
 * @type {number}
 */
export
const no_reason_given: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.no_reason_given; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CAP_U_ABORT_REASON_application_timer_expired
 * @constant
 * @type {number}
 */
export
const CAP_U_ABORT_REASON_application_timer_expired: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.application_timer_expired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary application_timer_expired
 * @constant
 * @type {number}
 */
export
const application_timer_expired: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.application_timer_expired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CAP_U_ABORT_REASON_not_allowed_procedures
 * @constant
 * @type {number}
 */
export
const CAP_U_ABORT_REASON_not_allowed_procedures: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.not_allowed_procedures; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary not_allowed_procedures
 * @constant
 * @type {number}
 */
export
const not_allowed_procedures: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.not_allowed_procedures; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CAP_U_ABORT_REASON_abnormal_processing
 * @constant
 * @type {number}
 */
export
const CAP_U_ABORT_REASON_abnormal_processing: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.abnormal_processing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abnormal_processing
 * @constant
 * @type {number}
 */
export
const abnormal_processing: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.abnormal_processing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CAP_U_ABORT_REASON_congestion
 * @constant
 * @type {number}
 */
export
const CAP_U_ABORT_REASON_congestion: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.congestion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary congestion
 * @constant
 * @type {number}
 */
export
const congestion: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.congestion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CAP_U_ABORT_REASON_invalid_reference
 * @constant
 * @type {number}
 */
export
const CAP_U_ABORT_REASON_invalid_reference: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.invalid_reference; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalid_reference
 * @constant
 * @type {number}
 */
export
const invalid_reference: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.invalid_reference; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CAP_U_ABORT_REASON_missing_reference
 * @constant
 * @type {number}
 */
export
const CAP_U_ABORT_REASON_missing_reference: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.missing_reference; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary missing_reference
 * @constant
 * @type {number}
 */
export
const missing_reference: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.missing_reference; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CAP_U_ABORT_REASON_overlapping_dialogue
 * @constant
 * @type {number}
 */
export
const CAP_U_ABORT_REASON_overlapping_dialogue: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.overlapping_dialogue; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary overlapping_dialogue
 * @constant
 * @type {number}
 */
export
const overlapping_dialogue: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.overlapping_dialogue; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CAP_U_ABORT_REASON: $.ASN1Decoder<CAP_U_ABORT_REASON> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CAP_U_ABORT_REASON
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CAP_U_ABORT_REASON (el: _Element): CAP_U_ABORT_REASON {
    if (!_cached_decoder_for_CAP_U_ABORT_REASON) { _cached_decoder_for_CAP_U_ABORT_REASON = $._decodeEnumerated; }
    return _cached_decoder_for_CAP_U_ABORT_REASON(el);
}

let _cached_encoder_for_CAP_U_ABORT_REASON: $.ASN1Encoder<CAP_U_ABORT_REASON> | null = null;

/**
 * @summary Encodes a(n) CAP_U_ABORT_REASON into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CAP_U_ABORT_REASON, encoded as an ASN.1 Element.
 */
export
function _encode_CAP_U_ABORT_REASON (value: CAP_U_ABORT_REASON, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CAP_U_ABORT_REASON) { _cached_encoder_for_CAP_U_ABORT_REASON = $._encodeEnumerated; }
    return _cached_encoder_for_CAP_U_ABORT_REASON(value, elGetter);
}


/* eslint-enable */
