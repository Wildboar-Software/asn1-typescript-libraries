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



export
enum _enum_for_ReportingState {
    stopMonitoring = 0,
    startMonitoring = 1,
}

/**
 * @summary ReportingState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportingState  ::=  ENUMERATED {
 *     stopMonitoring    (0),
 *     startMonitoring    (1),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type ReportingState = _enum_for_ReportingState | ENUMERATED;

/**
 * @summary ReportingState_stopMonitoring
 * @constant
 * @type {number}
 */
export
const ReportingState_stopMonitoring: ReportingState = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary stopMonitoring
 * @constant
 * @type {number}
 */
export
const stopMonitoring: ReportingState = ReportingState_stopMonitoring; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportingState_startMonitoring
 * @constant
 * @type {number}
 */
export
const ReportingState_startMonitoring: ReportingState = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startMonitoring
 * @constant
 * @type {number}
 */
export
const startMonitoring: ReportingState = ReportingState_startMonitoring; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ReportingState: $.ASN1Decoder<ReportingState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportingState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportingState (el: _Element): ReportingState {
    if (!_cached_decoder_for_ReportingState) { _cached_decoder_for_ReportingState = $._decodeEnumerated; }
    return _cached_decoder_for_ReportingState(el);
}

let _cached_encoder_for_ReportingState: $.ASN1Encoder<ReportingState> | null = null;

/**
 * @summary Encodes a(n) ReportingState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportingState, encoded as an ASN.1 Element.
 */
export
function _encode_ReportingState (value: ReportingState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportingState) { _cached_encoder_for_ReportingState = $._encodeEnumerated; }
    return _cached_encoder_for_ReportingState(value, elGetter);
}


/* eslint-enable */
