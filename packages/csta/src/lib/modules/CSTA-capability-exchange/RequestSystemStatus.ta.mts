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
 * @summary RequestSystemStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestSystemStatus  ::=  BIT STRING
 * {     privateDataInReq             ( 0),     -- optional parameters
 *     systemStatusInitializing         ( 1),     -- optional parameters
 *     systemStatusEnabled             ( 2),     -- optional parameters
 *     systemStatusNormal             ( 3),     -- optional parameters
 *     systemStatusMessageLost         ( 4),     -- optional parameters
 *     systemStatusDisabled             ( 5),     -- optional parameters
 *     systemStatusPartiallyDisabled         ( 6),     -- optional parameters
 *     systemStatusOverloadImminent         ( 7),     -- optional parameters
 *     systemStatusOverloadReached         ( 8),     -- optional parameters
 *     systemStatusOverloadRelieved         ( 9),     -- optional parameters
 *     privateDataInAck             (10),     -- optional parameters
 *     switchingFunctionSupportsSending     (11),     -- misc characteristics
 *     switchingFunctionSupportsReceiving    (12) }
 * ```
 */
export
type RequestSystemStatus = BIT_STRING;

/**
 * @summary RequestSystemStatus_privateDataInReq
 * @constant
 */
export
const RequestSystemStatus_privateDataInReq: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInReq
 * @constant
 */
export
const privateDataInReq: number = RequestSystemStatus_privateDataInReq; /* SHORT_NAMED_BIT */

/**
 * @summary RequestSystemStatus_systemStatusInitializing
 * @constant
 */
export
const RequestSystemStatus_systemStatusInitializing: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusInitializing
 * @constant
 */
export
const systemStatusInitializing: number = RequestSystemStatus_systemStatusInitializing; /* SHORT_NAMED_BIT */

/**
 * @summary RequestSystemStatus_systemStatusEnabled
 * @constant
 */
export
const RequestSystemStatus_systemStatusEnabled: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusEnabled
 * @constant
 */
export
const systemStatusEnabled: number = RequestSystemStatus_systemStatusEnabled; /* SHORT_NAMED_BIT */

/**
 * @summary RequestSystemStatus_systemStatusNormal
 * @constant
 */
export
const RequestSystemStatus_systemStatusNormal: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusNormal
 * @constant
 */
export
const systemStatusNormal: number = RequestSystemStatus_systemStatusNormal; /* SHORT_NAMED_BIT */

/**
 * @summary RequestSystemStatus_systemStatusMessageLost
 * @constant
 */
export
const RequestSystemStatus_systemStatusMessageLost: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusMessageLost
 * @constant
 */
export
const systemStatusMessageLost: number = RequestSystemStatus_systemStatusMessageLost; /* SHORT_NAMED_BIT */

/**
 * @summary RequestSystemStatus_systemStatusDisabled
 * @constant
 */
export
const RequestSystemStatus_systemStatusDisabled: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusDisabled
 * @constant
 */
export
const systemStatusDisabled: number = RequestSystemStatus_systemStatusDisabled; /* SHORT_NAMED_BIT */

/**
 * @summary RequestSystemStatus_systemStatusPartiallyDisabled
 * @constant
 */
export
const RequestSystemStatus_systemStatusPartiallyDisabled: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusPartiallyDisabled
 * @constant
 */
export
const systemStatusPartiallyDisabled: number = RequestSystemStatus_systemStatusPartiallyDisabled; /* SHORT_NAMED_BIT */

/**
 * @summary RequestSystemStatus_systemStatusOverloadImminent
 * @constant
 */
export
const RequestSystemStatus_systemStatusOverloadImminent: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusOverloadImminent
 * @constant
 */
export
const systemStatusOverloadImminent: number = RequestSystemStatus_systemStatusOverloadImminent; /* SHORT_NAMED_BIT */

/**
 * @summary RequestSystemStatus_systemStatusOverloadReached
 * @constant
 */
export
const RequestSystemStatus_systemStatusOverloadReached: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusOverloadReached
 * @constant
 */
export
const systemStatusOverloadReached: number = RequestSystemStatus_systemStatusOverloadReached; /* SHORT_NAMED_BIT */

/**
 * @summary RequestSystemStatus_systemStatusOverloadRelieved
 * @constant
 */
export
const RequestSystemStatus_systemStatusOverloadRelieved: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusOverloadRelieved
 * @constant
 */
export
const systemStatusOverloadRelieved: number = RequestSystemStatus_systemStatusOverloadRelieved; /* SHORT_NAMED_BIT */

/**
 * @summary RequestSystemStatus_privateDataInAck
 * @constant
 */
export
const RequestSystemStatus_privateDataInAck: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = RequestSystemStatus_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary RequestSystemStatus_switchingFunctionSupportsSending
 * @constant
 */
export
const RequestSystemStatus_switchingFunctionSupportsSending: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary switchingFunctionSupportsSending
 * @constant
 */
export
const switchingFunctionSupportsSending: number = RequestSystemStatus_switchingFunctionSupportsSending; /* SHORT_NAMED_BIT */

/**
 * @summary RequestSystemStatus_switchingFunctionSupportsReceiving
 * @constant
 */
export
const RequestSystemStatus_switchingFunctionSupportsReceiving: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary switchingFunctionSupportsReceiving
 * @constant
 */
export
const switchingFunctionSupportsReceiving: number = RequestSystemStatus_switchingFunctionSupportsReceiving; /* SHORT_NAMED_BIT */

let _cached_decoder_for_RequestSystemStatus: $.ASN1Decoder<RequestSystemStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestSystemStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestSystemStatus (el: _Element): RequestSystemStatus {
    if (!_cached_decoder_for_RequestSystemStatus) { _cached_decoder_for_RequestSystemStatus = $._decodeBitString; }
    return _cached_decoder_for_RequestSystemStatus(el);
}

let _cached_encoder_for_RequestSystemStatus: $.ASN1Encoder<RequestSystemStatus> | null = null;

/**
 * @summary Encodes a(n) RequestSystemStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestSystemStatus, encoded as an ASN.1 Element.
 */
export
function _encode_RequestSystemStatus (value: RequestSystemStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestSystemStatus) { _cached_encoder_for_RequestSystemStatus = $._encodeBitString; }
    return _cached_encoder_for_RequestSystemStatus(value, elGetter);
}


/* eslint-enable */
