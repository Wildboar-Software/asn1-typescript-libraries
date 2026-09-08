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
 * @summary DeviceMaintenanceEvents
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceMaintenanceEvents  ::=  BIT STRING
 * {    backInService                         ( 0),
 *     deviceCapabilityChanged                 ( 2),
 *     outOfService                         ( 1),
 *     partiallyInService                    ( 3) }
 * ```
 */
export
type DeviceMaintenanceEvents = BIT_STRING;

/**
 * @summary DeviceMaintenanceEvents_backInService
 * @constant
 */
export
const DeviceMaintenanceEvents_backInService: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary backInService
 * @constant
 */
export
const backInService: number = DeviceMaintenanceEvents_backInService; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceMaintenanceEvents_deviceCapabilityChanged
 * @constant
 */
export
const DeviceMaintenanceEvents_deviceCapabilityChanged: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary deviceCapabilityChanged
 * @constant
 */
export
const deviceCapabilityChanged: number = DeviceMaintenanceEvents_deviceCapabilityChanged; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceMaintenanceEvents_outOfService
 * @constant
 */
export
const DeviceMaintenanceEvents_outOfService: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary outOfService
 * @constant
 */
export
const outOfService: number = DeviceMaintenanceEvents_outOfService; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceMaintenanceEvents_partiallyInService
 * @constant
 */
export
const DeviceMaintenanceEvents_partiallyInService: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary partiallyInService
 * @constant
 */
export
const partiallyInService: number = DeviceMaintenanceEvents_partiallyInService; /* SHORT_NAMED_BIT */

let _cached_decoder_for_DeviceMaintenanceEvents: $.ASN1Decoder<DeviceMaintenanceEvents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeviceMaintenanceEvents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeviceMaintenanceEvents (el: _Element): DeviceMaintenanceEvents {
    if (!_cached_decoder_for_DeviceMaintenanceEvents) { _cached_decoder_for_DeviceMaintenanceEvents = $._decodeBitString; }
    return _cached_decoder_for_DeviceMaintenanceEvents(el);
}

let _cached_encoder_for_DeviceMaintenanceEvents: $.ASN1Encoder<DeviceMaintenanceEvents> | null = null;

/**
 * @summary Encodes a(n) DeviceMaintenanceEvents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviceMaintenanceEvents, encoded as an ASN.1 Element.
 */
export
function _encode_DeviceMaintenanceEvents (value: DeviceMaintenanceEvents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeviceMaintenanceEvents) { _cached_encoder_for_DeviceMaintenanceEvents = $._encodeBitString; }
    return _cached_encoder_for_DeviceMaintenanceEvents(value, elGetter);
}


/* eslint-enable */
