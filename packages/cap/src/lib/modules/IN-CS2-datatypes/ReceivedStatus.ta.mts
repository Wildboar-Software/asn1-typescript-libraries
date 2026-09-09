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
 * @summary ReceivedStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReceivedStatus  ::=  ENUMERATED {
 *   messageComplete(0), messageInterrupted(1), messageTimeOut(2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ReceivedStatus {
    messageComplete = 0,
    messageInterrupted = 1,
    messageTimeOut = 2,
}

/**
 * @summary ReceivedStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReceivedStatus  ::=  ENUMERATED {
 *   messageComplete(0), messageInterrupted(1), messageTimeOut(2)}
 * ```
 * 
 * @enum {number}
 */
export
type ReceivedStatus = _enum_for_ReceivedStatus;

/**
 * @summary ReceivedStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReceivedStatus  ::=  ENUMERATED {
 *   messageComplete(0), messageInterrupted(1), messageTimeOut(2)}
 * ```
 * 
 * @enum {number}
 */
export
const ReceivedStatus = _enum_for_ReceivedStatus;

/**
 * @summary ReceivedStatus_messageComplete
 * @constant
 * @type {number}
 */
export
const ReceivedStatus_messageComplete: ReceivedStatus = ReceivedStatus.messageComplete; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageComplete
 * @constant
 * @type {number}
 */
export
const messageComplete: ReceivedStatus = ReceivedStatus.messageComplete; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReceivedStatus_messageInterrupted
 * @constant
 * @type {number}
 */
export
const ReceivedStatus_messageInterrupted: ReceivedStatus = ReceivedStatus.messageInterrupted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageInterrupted
 * @constant
 * @type {number}
 */
export
const messageInterrupted: ReceivedStatus = ReceivedStatus.messageInterrupted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReceivedStatus_messageTimeOut
 * @constant
 * @type {number}
 */
export
const ReceivedStatus_messageTimeOut: ReceivedStatus = ReceivedStatus.messageTimeOut; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageTimeOut
 * @constant
 * @type {number}
 */
export
const messageTimeOut: ReceivedStatus = ReceivedStatus.messageTimeOut; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ReceivedStatus: $.ASN1Decoder<ReceivedStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReceivedStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReceivedStatus (el: _Element): ReceivedStatus {
    if (!_cached_decoder_for_ReceivedStatus) { _cached_decoder_for_ReceivedStatus = $._decodeEnumerated; }
    return _cached_decoder_for_ReceivedStatus(el);
}

let _cached_encoder_for_ReceivedStatus: $.ASN1Encoder<ReceivedStatus> | null = null;

/**
 * @summary Encodes a(n) ReceivedStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReceivedStatus, encoded as an ASN.1 Element.
 */
export
function _encode_ReceivedStatus (value: ReceivedStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReceivedStatus) { _cached_encoder_for_ReceivedStatus = $._encodeEnumerated; }
    return _cached_encoder_for_ReceivedStatus(value, elGetter);
}


/* eslint-enable */
