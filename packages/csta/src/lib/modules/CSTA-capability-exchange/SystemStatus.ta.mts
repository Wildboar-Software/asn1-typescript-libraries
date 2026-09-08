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
 * @summary SystemStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SystemStatus  ::=  BIT STRING
 * {     systemStatusInitializing         ( 0),     -- optional parameters
 *     systemStatusEnabled             ( 1),     -- optional parameters
 *     systemStatusNormal             ( 2),     -- optional parameters
 *     systemStatusMessageLost         ( 3),     -- optional parameters
 *     systemStatusDisabled             ( 4),     -- optional parameters
 *     systemStatusPartiallyDisabled         ( 5),     -- optional parameters
 *     systemStatusOverloadImminent         ( 6),     -- optional parameters
 *     systemStatusOverloadReached         ( 7),     -- optional parameters
 *     systemStatusOverloadRelieved         ( 8),     -- optional parameters
 *     privateData                 ( 9),     -- optional parameters
 *     privateDataInAck             (10),     -- optional parameters
 *     switchingFunctionSupportsSending     (11),     -- misc characteristics
 *     switchingFunctionSupportsReceiving     (12) }
 * ```
 */
export
type SystemStatus = BIT_STRING;

/**
 * @summary SystemStatus_systemStatusInitializing
 * @constant
 */
export
const SystemStatus_systemStatusInitializing: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusInitializing
 * @constant
 */
export
const systemStatusInitializing: number = SystemStatus_systemStatusInitializing; /* SHORT_NAMED_BIT */

/**
 * @summary SystemStatus_systemStatusEnabled
 * @constant
 */
export
const SystemStatus_systemStatusEnabled: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusEnabled
 * @constant
 */
export
const systemStatusEnabled: number = SystemStatus_systemStatusEnabled; /* SHORT_NAMED_BIT */

/**
 * @summary SystemStatus_systemStatusNormal
 * @constant
 */
export
const SystemStatus_systemStatusNormal: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusNormal
 * @constant
 */
export
const systemStatusNormal: number = SystemStatus_systemStatusNormal; /* SHORT_NAMED_BIT */

/**
 * @summary SystemStatus_systemStatusMessageLost
 * @constant
 */
export
const SystemStatus_systemStatusMessageLost: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusMessageLost
 * @constant
 */
export
const systemStatusMessageLost: number = SystemStatus_systemStatusMessageLost; /* SHORT_NAMED_BIT */

/**
 * @summary SystemStatus_systemStatusDisabled
 * @constant
 */
export
const SystemStatus_systemStatusDisabled: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusDisabled
 * @constant
 */
export
const systemStatusDisabled: number = SystemStatus_systemStatusDisabled; /* SHORT_NAMED_BIT */

/**
 * @summary SystemStatus_systemStatusPartiallyDisabled
 * @constant
 */
export
const SystemStatus_systemStatusPartiallyDisabled: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusPartiallyDisabled
 * @constant
 */
export
const systemStatusPartiallyDisabled: number = SystemStatus_systemStatusPartiallyDisabled; /* SHORT_NAMED_BIT */

/**
 * @summary SystemStatus_systemStatusOverloadImminent
 * @constant
 */
export
const SystemStatus_systemStatusOverloadImminent: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusOverloadImminent
 * @constant
 */
export
const systemStatusOverloadImminent: number = SystemStatus_systemStatusOverloadImminent; /* SHORT_NAMED_BIT */

/**
 * @summary SystemStatus_systemStatusOverloadReached
 * @constant
 */
export
const SystemStatus_systemStatusOverloadReached: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusOverloadReached
 * @constant
 */
export
const systemStatusOverloadReached: number = SystemStatus_systemStatusOverloadReached; /* SHORT_NAMED_BIT */

/**
 * @summary SystemStatus_systemStatusOverloadRelieved
 * @constant
 */
export
const SystemStatus_systemStatusOverloadRelieved: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusOverloadRelieved
 * @constant
 */
export
const systemStatusOverloadRelieved: number = SystemStatus_systemStatusOverloadRelieved; /* SHORT_NAMED_BIT */

/**
 * @summary SystemStatus_privateData
 * @constant
 */
export
const SystemStatus_privateData: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SystemStatus_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SystemStatus_privateDataInAck
 * @constant
 */
export
const SystemStatus_privateDataInAck: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = SystemStatus_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SystemStatus_switchingFunctionSupportsSending
 * @constant
 */
export
const SystemStatus_switchingFunctionSupportsSending: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary switchingFunctionSupportsSending
 * @constant
 */
export
const switchingFunctionSupportsSending: number = SystemStatus_switchingFunctionSupportsSending; /* SHORT_NAMED_BIT */

/**
 * @summary SystemStatus_switchingFunctionSupportsReceiving
 * @constant
 */
export
const SystemStatus_switchingFunctionSupportsReceiving: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary switchingFunctionSupportsReceiving
 * @constant
 */
export
const switchingFunctionSupportsReceiving: number = SystemStatus_switchingFunctionSupportsReceiving; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SystemStatus: $.ASN1Decoder<SystemStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SystemStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SystemStatus (el: _Element): SystemStatus {
    if (!_cached_decoder_for_SystemStatus) { _cached_decoder_for_SystemStatus = $._decodeBitString; }
    return _cached_decoder_for_SystemStatus(el);
}

let _cached_encoder_for_SystemStatus: $.ASN1Encoder<SystemStatus> | null = null;

/**
 * @summary Encodes a(n) SystemStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SystemStatus, encoded as an ASN.1 Element.
 */
export
function _encode_SystemStatus (value: SystemStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SystemStatus) { _cached_encoder_for_SystemStatus = $._encodeBitString; }
    return _cached_encoder_for_SystemStatus(value, elGetter);
}


/* eslint-enable */
