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
 * @summary PhysicalDeviceFeatureEvents
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PhysicalDeviceFeatureEvents  ::=  BIT STRING
 * {    buttonInformation                     ( 0),
 *     buttonPress                         ( 1),
 *     displayUpdated                         ( 2),
 *     hookswitch                         ( 3),
 *     lampMode                         ( 4),
 *     messageWaiting                         ( 5),
 *     microphoneGain                         ( 6),
 *     microphoneMute                         ( 7),
 *     ringerStatus                        ( 8),
 *     speakerMute                         ( 9),
 *     speakerVolume                         (10) }
 * ```
 */
export
type PhysicalDeviceFeatureEvents = BIT_STRING;

/**
 * @summary PhysicalDeviceFeatureEvents_buttonInformation
 * @constant
 */
export
const PhysicalDeviceFeatureEvents_buttonInformation: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary buttonInformation
 * @constant
 */
export
const buttonInformation: number = PhysicalDeviceFeatureEvents_buttonInformation; /* SHORT_NAMED_BIT */

/**
 * @summary PhysicalDeviceFeatureEvents_buttonPress
 * @constant
 */
export
const PhysicalDeviceFeatureEvents_buttonPress: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary buttonPress
 * @constant
 */
export
const buttonPress: number = PhysicalDeviceFeatureEvents_buttonPress; /* SHORT_NAMED_BIT */

/**
 * @summary PhysicalDeviceFeatureEvents_displayUpdated
 * @constant
 */
export
const PhysicalDeviceFeatureEvents_displayUpdated: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary displayUpdated
 * @constant
 */
export
const displayUpdated: number = PhysicalDeviceFeatureEvents_displayUpdated; /* SHORT_NAMED_BIT */

/**
 * @summary PhysicalDeviceFeatureEvents_hookswitch
 * @constant
 */
export
const PhysicalDeviceFeatureEvents_hookswitch: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary hookswitch
 * @constant
 */
export
const hookswitch: number = PhysicalDeviceFeatureEvents_hookswitch; /* SHORT_NAMED_BIT */

/**
 * @summary PhysicalDeviceFeatureEvents_lampMode
 * @constant
 */
export
const PhysicalDeviceFeatureEvents_lampMode: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary lampMode
 * @constant
 */
export
const lampMode: number = PhysicalDeviceFeatureEvents_lampMode; /* SHORT_NAMED_BIT */

/**
 * @summary PhysicalDeviceFeatureEvents_messageWaiting
 * @constant
 */
export
const PhysicalDeviceFeatureEvents_messageWaiting: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary messageWaiting
 * @constant
 */
export
const messageWaiting: number = PhysicalDeviceFeatureEvents_messageWaiting; /* SHORT_NAMED_BIT */

/**
 * @summary PhysicalDeviceFeatureEvents_microphoneGain
 * @constant
 */
export
const PhysicalDeviceFeatureEvents_microphoneGain: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary microphoneGain
 * @constant
 */
export
const microphoneGain: number = PhysicalDeviceFeatureEvents_microphoneGain; /* SHORT_NAMED_BIT */

/**
 * @summary PhysicalDeviceFeatureEvents_microphoneMute
 * @constant
 */
export
const PhysicalDeviceFeatureEvents_microphoneMute: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary microphoneMute
 * @constant
 */
export
const microphoneMute: number = PhysicalDeviceFeatureEvents_microphoneMute; /* SHORT_NAMED_BIT */

/**
 * @summary PhysicalDeviceFeatureEvents_ringerStatus
 * @constant
 */
export
const PhysicalDeviceFeatureEvents_ringerStatus: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary ringerStatus
 * @constant
 */
export
const ringerStatus: number = PhysicalDeviceFeatureEvents_ringerStatus; /* SHORT_NAMED_BIT */

/**
 * @summary PhysicalDeviceFeatureEvents_speakerMute
 * @constant
 */
export
const PhysicalDeviceFeatureEvents_speakerMute: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary speakerMute
 * @constant
 */
export
const speakerMute: number = PhysicalDeviceFeatureEvents_speakerMute; /* SHORT_NAMED_BIT */

/**
 * @summary PhysicalDeviceFeatureEvents_speakerVolume
 * @constant
 */
export
const PhysicalDeviceFeatureEvents_speakerVolume: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary speakerVolume
 * @constant
 */
export
const speakerVolume: number = PhysicalDeviceFeatureEvents_speakerVolume; /* SHORT_NAMED_BIT */

let _cached_decoder_for_PhysicalDeviceFeatureEvents: $.ASN1Decoder<PhysicalDeviceFeatureEvents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalDeviceFeatureEvents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PhysicalDeviceFeatureEvents (el: _Element): PhysicalDeviceFeatureEvents {
    if (!_cached_decoder_for_PhysicalDeviceFeatureEvents) { _cached_decoder_for_PhysicalDeviceFeatureEvents = $._decodeBitString; }
    return _cached_decoder_for_PhysicalDeviceFeatureEvents(el);
}

let _cached_encoder_for_PhysicalDeviceFeatureEvents: $.ASN1Encoder<PhysicalDeviceFeatureEvents> | null = null;

/**
 * @summary Encodes a(n) PhysicalDeviceFeatureEvents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalDeviceFeatureEvents, encoded as an ASN.1 Element.
 */
export
function _encode_PhysicalDeviceFeatureEvents (value: PhysicalDeviceFeatureEvents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PhysicalDeviceFeatureEvents) { _cached_encoder_for_PhysicalDeviceFeatureEvents = $._encodeBitString; }
    return _cached_encoder_for_PhysicalDeviceFeatureEvents(value, elGetter);
}


/* eslint-enable */
