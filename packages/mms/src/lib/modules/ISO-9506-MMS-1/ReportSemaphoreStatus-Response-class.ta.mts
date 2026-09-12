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
 * @summary ReportSemaphoreStatus_Response_class
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportSemaphoreStatus-Response-class ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ReportSemaphoreStatus_Response_class = INTEGER;

/**
 * @summary ReportSemaphoreStatus_Response_class_token
 * @constant
 * @type {number}
 */
export
const ReportSemaphoreStatus_Response_class_token: ReportSemaphoreStatus_Response_class = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReportSemaphoreStatus_Response_class_token
 * @constant
 * @type {number}
 */
export
const token: ReportSemaphoreStatus_Response_class = ReportSemaphoreStatus_Response_class_token; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReportSemaphoreStatus_Response_class_pool
 * @constant
 * @type {number}
 */
export
const ReportSemaphoreStatus_Response_class_pool: ReportSemaphoreStatus_Response_class = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReportSemaphoreStatus_Response_class_pool
 * @constant
 * @type {number}
 */
export
const pool: ReportSemaphoreStatus_Response_class = ReportSemaphoreStatus_Response_class_pool; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ReportSemaphoreStatus_Response_class: $.ASN1Decoder<ReportSemaphoreStatus_Response_class> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportSemaphoreStatus_Response_class
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportSemaphoreStatus_Response_class (el: _Element): ReportSemaphoreStatus_Response_class {
    if (!_cached_decoder_for_ReportSemaphoreStatus_Response_class) { _cached_decoder_for_ReportSemaphoreStatus_Response_class = $._decodeInteger; }
    return _cached_decoder_for_ReportSemaphoreStatus_Response_class(el);
}

let _cached_encoder_for_ReportSemaphoreStatus_Response_class: $.ASN1Encoder<ReportSemaphoreStatus_Response_class> | null = null;

/**
 * @summary Encodes a(n) ReportSemaphoreStatus_Response_class into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportSemaphoreStatus_Response_class, encoded as an ASN.1 Element.
 */
export
function _encode_ReportSemaphoreStatus_Response_class (value: ReportSemaphoreStatus_Response_class, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportSemaphoreStatus_Response_class) { _cached_encoder_for_ReportSemaphoreStatus_Response_class = $._encodeInteger; }
    return _cached_encoder_for_ReportSemaphoreStatus_Response_class(value, elGetter);
}


/* eslint-enable */
