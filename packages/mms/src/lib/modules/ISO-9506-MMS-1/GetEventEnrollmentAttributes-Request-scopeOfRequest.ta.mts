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
 * @summary GetEventEnrollmentAttributes_Request_scopeOfRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetEventEnrollmentAttributes-Request-scopeOfRequest ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type GetEventEnrollmentAttributes_Request_scopeOfRequest = INTEGER;

/**
 * @summary GetEventEnrollmentAttributes_Request_scopeOfRequest_specific
 * @constant
 * @type {number}
 */
export
const GetEventEnrollmentAttributes_Request_scopeOfRequest_specific: GetEventEnrollmentAttributes_Request_scopeOfRequest = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetEventEnrollmentAttributes_Request_scopeOfRequest_specific
 * @constant
 * @type {number}
 */
export
const specific: GetEventEnrollmentAttributes_Request_scopeOfRequest = GetEventEnrollmentAttributes_Request_scopeOfRequest_specific; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetEventEnrollmentAttributes_Request_scopeOfRequest_client
 * @constant
 * @type {number}
 */
export
const GetEventEnrollmentAttributes_Request_scopeOfRequest_client: GetEventEnrollmentAttributes_Request_scopeOfRequest = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetEventEnrollmentAttributes_Request_scopeOfRequest_client
 * @constant
 * @type {number}
 */
export
const client: GetEventEnrollmentAttributes_Request_scopeOfRequest = GetEventEnrollmentAttributes_Request_scopeOfRequest_client; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetEventEnrollmentAttributes_Request_scopeOfRequest_ec
 * @constant
 * @type {number}
 */
export
const GetEventEnrollmentAttributes_Request_scopeOfRequest_ec: GetEventEnrollmentAttributes_Request_scopeOfRequest = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetEventEnrollmentAttributes_Request_scopeOfRequest_ec
 * @constant
 * @type {number}
 */
export
const ec: GetEventEnrollmentAttributes_Request_scopeOfRequest = GetEventEnrollmentAttributes_Request_scopeOfRequest_ec; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetEventEnrollmentAttributes_Request_scopeOfRequest_ea
 * @constant
 * @type {number}
 */
export
const GetEventEnrollmentAttributes_Request_scopeOfRequest_ea: GetEventEnrollmentAttributes_Request_scopeOfRequest = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetEventEnrollmentAttributes_Request_scopeOfRequest_ea
 * @constant
 * @type {number}
 */
export
const ea: GetEventEnrollmentAttributes_Request_scopeOfRequest = GetEventEnrollmentAttributes_Request_scopeOfRequest_ea; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_GetEventEnrollmentAttributes_Request_scopeOfRequest: $.ASN1Decoder<GetEventEnrollmentAttributes_Request_scopeOfRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetEventEnrollmentAttributes_Request_scopeOfRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetEventEnrollmentAttributes_Request_scopeOfRequest (el: _Element): GetEventEnrollmentAttributes_Request_scopeOfRequest {
    if (!_cached_decoder_for_GetEventEnrollmentAttributes_Request_scopeOfRequest) { _cached_decoder_for_GetEventEnrollmentAttributes_Request_scopeOfRequest = $._decodeInteger; }
    return _cached_decoder_for_GetEventEnrollmentAttributes_Request_scopeOfRequest(el);
}

let _cached_encoder_for_GetEventEnrollmentAttributes_Request_scopeOfRequest: $.ASN1Encoder<GetEventEnrollmentAttributes_Request_scopeOfRequest> | null = null;

/**
 * @summary Encodes a(n) GetEventEnrollmentAttributes_Request_scopeOfRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetEventEnrollmentAttributes_Request_scopeOfRequest, encoded as an ASN.1 Element.
 */
export
function _encode_GetEventEnrollmentAttributes_Request_scopeOfRequest (value: GetEventEnrollmentAttributes_Request_scopeOfRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetEventEnrollmentAttributes_Request_scopeOfRequest) { _cached_encoder_for_GetEventEnrollmentAttributes_Request_scopeOfRequest = $._encodeInteger; }
    return _cached_encoder_for_GetEventEnrollmentAttributes_Request_scopeOfRequest(value, elGetter);
}


/* eslint-enable */
