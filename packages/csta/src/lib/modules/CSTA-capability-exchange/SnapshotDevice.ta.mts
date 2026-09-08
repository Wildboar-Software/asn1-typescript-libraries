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
 * @summary SnapshotDevice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SnapshotDevice  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     localCallStateCompoundCallState     ( 1),     -- optional parameters
 *     localCallStateSimpleCallState         ( 2),     -- optional parameters
 *     localCallStateUnknown             ( 3),     -- optional parameters
 *     mediaServiceInfoListInAck         ( 4),     -- optional parameters
 *     mediaServiceVersionInAck         ( 5),     -- optional parameters
 *     mediaServiceInstanceInAck         ( 6),     -- optional parameters
 *     mediaStreamID                 ( 7),     -- optional parameters
 *     connectionInformation             ( 8),     -- optional parameters
 *     mediaCallCharacteristicsInAck         ( 9),     -- optional parameters
 *     privateDataInAck             (10),     -- optional parameters
 *     reportsWithSnapsDeviceData         (11) }
 * ```
 */
export
type SnapshotDevice = BIT_STRING;

/**
 * @summary SnapshotDevice_privateData
 * @constant
 */
export
const SnapshotDevice_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SnapshotDevice_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDevice_localCallStateCompoundCallState
 * @constant
 */
export
const SnapshotDevice_localCallStateCompoundCallState: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary localCallStateCompoundCallState
 * @constant
 */
export
const localCallStateCompoundCallState: number = SnapshotDevice_localCallStateCompoundCallState; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDevice_localCallStateSimpleCallState
 * @constant
 */
export
const SnapshotDevice_localCallStateSimpleCallState: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary localCallStateSimpleCallState
 * @constant
 */
export
const localCallStateSimpleCallState: number = SnapshotDevice_localCallStateSimpleCallState; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDevice_localCallStateUnknown
 * @constant
 */
export
const SnapshotDevice_localCallStateUnknown: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary localCallStateUnknown
 * @constant
 */
export
const localCallStateUnknown: number = SnapshotDevice_localCallStateUnknown; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDevice_mediaServiceInfoListInAck
 * @constant
 */
export
const SnapshotDevice_mediaServiceInfoListInAck: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceInfoListInAck
 * @constant
 */
export
const mediaServiceInfoListInAck: number = SnapshotDevice_mediaServiceInfoListInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDevice_mediaServiceVersionInAck
 * @constant
 */
export
const SnapshotDevice_mediaServiceVersionInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceVersionInAck
 * @constant
 */
export
const mediaServiceVersionInAck: number = SnapshotDevice_mediaServiceVersionInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDevice_mediaServiceInstanceInAck
 * @constant
 */
export
const SnapshotDevice_mediaServiceInstanceInAck: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceInstanceInAck
 * @constant
 */
export
const mediaServiceInstanceInAck: number = SnapshotDevice_mediaServiceInstanceInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDevice_mediaStreamID
 * @constant
 */
export
const SnapshotDevice_mediaStreamID: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary mediaStreamID
 * @constant
 */
export
const mediaStreamID: number = SnapshotDevice_mediaStreamID; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDevice_connectionInformation
 * @constant
 */
export
const SnapshotDevice_connectionInformation: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary connectionInformation
 * @constant
 */
export
const connectionInformation: number = SnapshotDevice_connectionInformation; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDevice_mediaCallCharacteristicsInAck
 * @constant
 */
export
const SnapshotDevice_mediaCallCharacteristicsInAck: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristicsInAck
 * @constant
 */
export
const mediaCallCharacteristicsInAck: number = SnapshotDevice_mediaCallCharacteristicsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDevice_privateDataInAck
 * @constant
 */
export
const SnapshotDevice_privateDataInAck: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = SnapshotDevice_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDevice_reportsWithSnapsDeviceData
 * @constant
 */
export
const SnapshotDevice_reportsWithSnapsDeviceData: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary reportsWithSnapsDeviceData
 * @constant
 */
export
const reportsWithSnapsDeviceData: number = SnapshotDevice_reportsWithSnapsDeviceData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SnapshotDevice: $.ASN1Decoder<SnapshotDevice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SnapshotDevice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SnapshotDevice (el: _Element): SnapshotDevice {
    if (!_cached_decoder_for_SnapshotDevice) { _cached_decoder_for_SnapshotDevice = $._decodeBitString; }
    return _cached_decoder_for_SnapshotDevice(el);
}

let _cached_encoder_for_SnapshotDevice: $.ASN1Encoder<SnapshotDevice> | null = null;

/**
 * @summary Encodes a(n) SnapshotDevice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SnapshotDevice, encoded as an ASN.1 Element.
 */
export
function _encode_SnapshotDevice (value: SnapshotDevice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SnapshotDevice) { _cached_encoder_for_SnapshotDevice = $._encodeBitString; }
    return _cached_encoder_for_SnapshotDevice(value, elGetter);
}


/* eslint-enable */
