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
 * @summary RetrieveNotificationsListResponse_notificationsListResultError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RetrieveNotificationsListResponse-notificationsListResultError ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type RetrieveNotificationsListResponse_notificationsListResultError = INTEGER;

/**
 * @summary RetrieveNotificationsListResponse_notificationsListResultError_undefinedError
 * @constant
 * @type {number}
 */
export
const RetrieveNotificationsListResponse_notificationsListResultError_undefinedError: RetrieveNotificationsListResponse_notificationsListResultError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RetrieveNotificationsListResponse_notificationsListResultError_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: RetrieveNotificationsListResponse_notificationsListResultError = RetrieveNotificationsListResponse_notificationsListResultError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_RetrieveNotificationsListResponse_notificationsListResultError: $.ASN1Decoder<RetrieveNotificationsListResponse_notificationsListResultError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RetrieveNotificationsListResponse_notificationsListResultError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RetrieveNotificationsListResponse_notificationsListResultError (el: _Element): RetrieveNotificationsListResponse_notificationsListResultError {
    if (!_cached_decoder_for_RetrieveNotificationsListResponse_notificationsListResultError) { _cached_decoder_for_RetrieveNotificationsListResponse_notificationsListResultError = $._decodeInteger; }
    return _cached_decoder_for_RetrieveNotificationsListResponse_notificationsListResultError(el);
}

let _cached_encoder_for_RetrieveNotificationsListResponse_notificationsListResultError: $.ASN1Encoder<RetrieveNotificationsListResponse_notificationsListResultError> | null = null;

/**
 * @summary Encodes a(n) RetrieveNotificationsListResponse_notificationsListResultError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RetrieveNotificationsListResponse_notificationsListResultError, encoded as an ASN.1 Element.
 */
export
function _encode_RetrieveNotificationsListResponse_notificationsListResultError (value: RetrieveNotificationsListResponse_notificationsListResultError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RetrieveNotificationsListResponse_notificationsListResultError) { _cached_encoder_for_RetrieveNotificationsListResponse_notificationsListResultError = $._encodeInteger; }
    return _cached_encoder_for_RetrieveNotificationsListResponse_notificationsListResultError(value, elGetter);
}


/* eslint-enable */
