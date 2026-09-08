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
 * @summary GetLampMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLampMode  ::=  BIT STRING
 * {     lamp                     ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     lampModeInAck                 ( 2),     -- optional parameters
 *     lampBrightnessNormal             ( 3),     -- optional parameters
 *     lampBrightnessDim             ( 4),     -- optional parameters
 *     lampBrightnessBright             ( 5),     -- optional parameters
 *     lampColorInAck                 ( 6),     -- optional parameters
 *     buttonInAck                 ( 7),     -- optional parameters
 *     privateDataInAck             ( 8) }
 * ```
 */
export
type GetLampMode = BIT_STRING;

/**
 * @summary GetLampMode_lamp
 * @constant
 */
export
const GetLampMode_lamp: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary lamp
 * @constant
 */
export
const lamp: number = GetLampMode_lamp; /* SHORT_NAMED_BIT */

/**
 * @summary GetLampMode_privateData
 * @constant
 */
export
const GetLampMode_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = GetLampMode_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetLampMode_lampModeInAck
 * @constant
 */
export
const GetLampMode_lampModeInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary lampModeInAck
 * @constant
 */
export
const lampModeInAck: number = GetLampMode_lampModeInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLampMode_lampBrightnessNormal
 * @constant
 */
export
const GetLampMode_lampBrightnessNormal: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary lampBrightnessNormal
 * @constant
 */
export
const lampBrightnessNormal: number = GetLampMode_lampBrightnessNormal; /* SHORT_NAMED_BIT */

/**
 * @summary GetLampMode_lampBrightnessDim
 * @constant
 */
export
const GetLampMode_lampBrightnessDim: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary lampBrightnessDim
 * @constant
 */
export
const lampBrightnessDim: number = GetLampMode_lampBrightnessDim; /* SHORT_NAMED_BIT */

/**
 * @summary GetLampMode_lampBrightnessBright
 * @constant
 */
export
const GetLampMode_lampBrightnessBright: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary lampBrightnessBright
 * @constant
 */
export
const lampBrightnessBright: number = GetLampMode_lampBrightnessBright; /* SHORT_NAMED_BIT */

/**
 * @summary GetLampMode_lampColorInAck
 * @constant
 */
export
const GetLampMode_lampColorInAck: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary lampColorInAck
 * @constant
 */
export
const lampColorInAck: number = GetLampMode_lampColorInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLampMode_buttonInAck
 * @constant
 */
export
const GetLampMode_buttonInAck: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary buttonInAck
 * @constant
 */
export
const buttonInAck: number = GetLampMode_buttonInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLampMode_privateDataInAck
 * @constant
 */
export
const GetLampMode_privateDataInAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = GetLampMode_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetLampMode: $.ASN1Decoder<GetLampMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetLampMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetLampMode (el: _Element): GetLampMode {
    if (!_cached_decoder_for_GetLampMode) { _cached_decoder_for_GetLampMode = $._decodeBitString; }
    return _cached_decoder_for_GetLampMode(el);
}

let _cached_encoder_for_GetLampMode: $.ASN1Encoder<GetLampMode> | null = null;

/**
 * @summary Encodes a(n) GetLampMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetLampMode, encoded as an ASN.1 Element.
 */
export
function _encode_GetLampMode (value: GetLampMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetLampMode) { _cached_encoder_for_GetLampMode = $._encodeBitString; }
    return _cached_encoder_for_GetLampMode(value, elGetter);
}


/* eslint-enable */
