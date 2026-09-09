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
 * @summary ReportCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportCondition  ::=  ENUMERATED {statusReport(0), timerExpired(1), cancelled(2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ReportCondition {
    statusReport = 0,
    timerExpired = 1,
    cancelled = 2,
}

/**
 * @summary ReportCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportCondition  ::=  ENUMERATED {statusReport(0), timerExpired(1), cancelled(2)}
 * ```
 * 
 * @enum {number}
 */
export
type ReportCondition = _enum_for_ReportCondition;

/**
 * @summary ReportCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportCondition  ::=  ENUMERATED {statusReport(0), timerExpired(1), cancelled(2)}
 * ```
 * 
 * @enum {number}
 */
export
const ReportCondition = _enum_for_ReportCondition;

/**
 * @summary ReportCondition_statusReport
 * @constant
 * @type {number}
 */
export
const ReportCondition_statusReport: ReportCondition = ReportCondition.statusReport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary statusReport
 * @constant
 * @type {number}
 */
export
const statusReport: ReportCondition = ReportCondition.statusReport; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportCondition_timerExpired
 * @constant
 * @type {number}
 */
export
const ReportCondition_timerExpired: ReportCondition = ReportCondition.timerExpired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timerExpired
 * @constant
 * @type {number}
 */
export
const timerExpired: ReportCondition = ReportCondition.timerExpired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportCondition_cancelled
 * @constant
 * @type {number}
 */
export
const ReportCondition_cancelled: ReportCondition = ReportCondition.cancelled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelled
 * @constant
 * @type {number}
 */
export
const cancelled: ReportCondition = ReportCondition.cancelled; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ReportCondition: $.ASN1Decoder<ReportCondition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportCondition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportCondition (el: _Element): ReportCondition {
    if (!_cached_decoder_for_ReportCondition) { _cached_decoder_for_ReportCondition = $._decodeEnumerated; }
    return _cached_decoder_for_ReportCondition(el);
}

let _cached_encoder_for_ReportCondition: $.ASN1Encoder<ReportCondition> | null = null;

/**
 * @summary Encodes a(n) ReportCondition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportCondition, encoded as an ASN.1 Element.
 */
export
function _encode_ReportCondition (value: ReportCondition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportCondition) { _cached_encoder_for_ReportCondition = $._encodeEnumerated; }
    return _cached_encoder_for_ReportCondition(value, elGetter);
}


/* eslint-enable */
