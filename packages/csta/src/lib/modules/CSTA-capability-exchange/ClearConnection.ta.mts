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
 * @summary ClearConnection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClearConnection  ::=  BIT STRING
 * {     alerting                 ( 0),     -- initial states
 *     connected                 ( 1),     -- initial states
 *     fail                     ( 2),     -- initial states
 *     queued                     ( 3),     -- initial states
 *     initiated                 ( 4),     -- initial states
 *     hold                     ( 5),     -- initial states
 *     correlatorData                 ( 6),     -- optional parameters
 *     userData                 ( 7),     -- optional parameters
 *     reason                    (12),     -- optional parameters
 *     privateData                 ( 8),     -- optional parameters
 *     privateDataInAck             ( 9),     -- optional parameters
 *     deviceIDOnly                 (10),     -- misc characteristics
 *     ackModelMultiStep             (11) }
 * ```
 */
export
type ClearConnection = BIT_STRING;

/**
 * @summary ClearConnection_alerting
 * @constant
 */
export
const ClearConnection_alerting: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary alerting
 * @constant
 */
export
const alerting: number = ClearConnection_alerting; /* SHORT_NAMED_BIT */

/**
 * @summary ClearConnection_connected
 * @constant
 */
export
const ClearConnection_connected: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary connected
 * @constant
 */
export
const connected: number = ClearConnection_connected; /* SHORT_NAMED_BIT */

/**
 * @summary ClearConnection_fail
 * @constant
 */
export
const ClearConnection_fail: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary fail
 * @constant
 */
export
const fail: number = ClearConnection_fail; /* SHORT_NAMED_BIT */

/**
 * @summary ClearConnection_queued
 * @constant
 */
export
const ClearConnection_queued: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary queued
 * @constant
 */
export
const queued: number = ClearConnection_queued; /* SHORT_NAMED_BIT */

/**
 * @summary ClearConnection_initiated
 * @constant
 */
export
const ClearConnection_initiated: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary initiated
 * @constant
 */
export
const initiated: number = ClearConnection_initiated; /* SHORT_NAMED_BIT */

/**
 * @summary ClearConnection_hold
 * @constant
 */
export
const ClearConnection_hold: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary hold
 * @constant
 */
export
const hold: number = ClearConnection_hold; /* SHORT_NAMED_BIT */

/**
 * @summary ClearConnection_correlatorData
 * @constant
 */
export
const ClearConnection_correlatorData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 */
export
const correlatorData: number = ClearConnection_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary ClearConnection_userData
 * @constant
 */
export
const ClearConnection_userData: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 */
export
const userData: number = ClearConnection_userData; /* SHORT_NAMED_BIT */

/**
 * @summary ClearConnection_reason
 * @constant
 */
export
const ClearConnection_reason: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary reason
 * @constant
 */
export
const reason: number = ClearConnection_reason; /* SHORT_NAMED_BIT */

/**
 * @summary ClearConnection_privateData
 * @constant
 */
export
const ClearConnection_privateData: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = ClearConnection_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary ClearConnection_privateDataInAck
 * @constant
 */
export
const ClearConnection_privateDataInAck: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = ClearConnection_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary ClearConnection_deviceIDOnly
 * @constant
 */
export
const ClearConnection_deviceIDOnly: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 */
export
const deviceIDOnly: number = ClearConnection_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary ClearConnection_ackModelMultiStep
 * @constant
 */
export
const ClearConnection_ackModelMultiStep: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = ClearConnection_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ClearConnection: $.ASN1Decoder<ClearConnection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClearConnection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClearConnection (el: _Element): ClearConnection {
    if (!_cached_decoder_for_ClearConnection) { _cached_decoder_for_ClearConnection = $._decodeBitString; }
    return _cached_decoder_for_ClearConnection(el);
}

let _cached_encoder_for_ClearConnection: $.ASN1Encoder<ClearConnection> | null = null;

/**
 * @summary Encodes a(n) ClearConnection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClearConnection, encoded as an ASN.1 Element.
 */
export
function _encode_ClearConnection (value: ClearConnection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClearConnection) { _cached_encoder_for_ClearConnection = $._encodeBitString; }
    return _cached_encoder_for_ClearConnection(value, elGetter);
}


/* eslint-enable */
