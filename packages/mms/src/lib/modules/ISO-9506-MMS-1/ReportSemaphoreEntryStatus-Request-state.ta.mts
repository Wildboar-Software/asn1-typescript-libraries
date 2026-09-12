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
 * @summary ReportSemaphoreEntryStatus_Request_state
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportSemaphoreEntryStatus-Request-state ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ReportSemaphoreEntryStatus_Request_state = INTEGER;

/**
 * @summary ReportSemaphoreEntryStatus_Request_state_queued
 * @constant
 * @type {number}
 */
export
const ReportSemaphoreEntryStatus_Request_state_queued: ReportSemaphoreEntryStatus_Request_state = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReportSemaphoreEntryStatus_Request_state_queued
 * @constant
 * @type {number}
 */
export
const queued: ReportSemaphoreEntryStatus_Request_state = ReportSemaphoreEntryStatus_Request_state_queued; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReportSemaphoreEntryStatus_Request_state_owner
 * @constant
 * @type {number}
 */
export
const ReportSemaphoreEntryStatus_Request_state_owner: ReportSemaphoreEntryStatus_Request_state = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReportSemaphoreEntryStatus_Request_state_owner
 * @constant
 * @type {number}
 */
export
const owner: ReportSemaphoreEntryStatus_Request_state = ReportSemaphoreEntryStatus_Request_state_owner; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReportSemaphoreEntryStatus_Request_state_hung
 * @constant
 * @type {number}
 */
export
const ReportSemaphoreEntryStatus_Request_state_hung: ReportSemaphoreEntryStatus_Request_state = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReportSemaphoreEntryStatus_Request_state_hung
 * @constant
 * @type {number}
 */
export
const hung: ReportSemaphoreEntryStatus_Request_state = ReportSemaphoreEntryStatus_Request_state_hung; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ReportSemaphoreEntryStatus_Request_state: $.ASN1Decoder<ReportSemaphoreEntryStatus_Request_state> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportSemaphoreEntryStatus_Request_state
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportSemaphoreEntryStatus_Request_state (el: _Element): ReportSemaphoreEntryStatus_Request_state {
    if (!_cached_decoder_for_ReportSemaphoreEntryStatus_Request_state) { _cached_decoder_for_ReportSemaphoreEntryStatus_Request_state = $._decodeInteger; }
    return _cached_decoder_for_ReportSemaphoreEntryStatus_Request_state(el);
}

let _cached_encoder_for_ReportSemaphoreEntryStatus_Request_state: $.ASN1Encoder<ReportSemaphoreEntryStatus_Request_state> | null = null;

/**
 * @summary Encodes a(n) ReportSemaphoreEntryStatus_Request_state into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportSemaphoreEntryStatus_Request_state, encoded as an ASN.1 Element.
 */
export
function _encode_ReportSemaphoreEntryStatus_Request_state (value: ReportSemaphoreEntryStatus_Request_state, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportSemaphoreEntryStatus_Request_state) { _cached_encoder_for_ReportSemaphoreEntryStatus_Request_state = $._encodeInteger; }
    return _cached_encoder_for_ReportSemaphoreEntryStatus_Request_state(value, elGetter);
}


/* eslint-enable */
