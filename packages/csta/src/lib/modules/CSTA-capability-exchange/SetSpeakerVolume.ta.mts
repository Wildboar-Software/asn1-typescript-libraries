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
 * @summary SetSpeakerVolume
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetSpeakerVolume  ::=  BIT STRING
 * {     speakerVolumeAbs             ( 0),     -- optional parameters
 *     speakerVolumeInc             ( 1),     -- optional parameters
 *     privateData                 ( 2),     -- optional parameters
 *     privateDataInAck             ( 3),     -- optional parameters
 *     ackModelMultiStep             ( 4),     -- misc characteristics
 *     resettedAfterCall             ( 5),     -- misc characteristics
 *     notSettableWhileActive             ( 6) }
 * ```
 */
export
type SetSpeakerVolume = BIT_STRING;

/**
 * @summary SetSpeakerVolume_speakerVolumeAbs
 * @constant
 */
export
const SetSpeakerVolume_speakerVolumeAbs: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary speakerVolumeAbs
 * @constant
 */
export
const speakerVolumeAbs: number = SetSpeakerVolume_speakerVolumeAbs; /* SHORT_NAMED_BIT */

/**
 * @summary SetSpeakerVolume_speakerVolumeInc
 * @constant
 */
export
const SetSpeakerVolume_speakerVolumeInc: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary speakerVolumeInc
 * @constant
 */
export
const speakerVolumeInc: number = SetSpeakerVolume_speakerVolumeInc; /* SHORT_NAMED_BIT */

/**
 * @summary SetSpeakerVolume_privateData
 * @constant
 */
export
const SetSpeakerVolume_privateData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SetSpeakerVolume_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetSpeakerVolume_privateDataInAck
 * @constant
 */
export
const SetSpeakerVolume_privateDataInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = SetSpeakerVolume_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetSpeakerVolume_ackModelMultiStep
 * @constant
 */
export
const SetSpeakerVolume_ackModelMultiStep: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = SetSpeakerVolume_ackModelMultiStep; /* SHORT_NAMED_BIT */

/**
 * @summary SetSpeakerVolume_resettedAfterCall
 * @constant
 */
export
const SetSpeakerVolume_resettedAfterCall: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary resettedAfterCall
 * @constant
 */
export
const resettedAfterCall: number = SetSpeakerVolume_resettedAfterCall; /* SHORT_NAMED_BIT */

/**
 * @summary SetSpeakerVolume_notSettableWhileActive
 * @constant
 */
export
const SetSpeakerVolume_notSettableWhileActive: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary notSettableWhileActive
 * @constant
 */
export
const notSettableWhileActive: number = SetSpeakerVolume_notSettableWhileActive; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SetSpeakerVolume: $.ASN1Decoder<SetSpeakerVolume> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetSpeakerVolume
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetSpeakerVolume (el: _Element): SetSpeakerVolume {
    if (!_cached_decoder_for_SetSpeakerVolume) { _cached_decoder_for_SetSpeakerVolume = $._decodeBitString; }
    return _cached_decoder_for_SetSpeakerVolume(el);
}

let _cached_encoder_for_SetSpeakerVolume: $.ASN1Encoder<SetSpeakerVolume> | null = null;

/**
 * @summary Encodes a(n) SetSpeakerVolume into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetSpeakerVolume, encoded as an ASN.1 Element.
 */
export
function _encode_SetSpeakerVolume (value: SetSpeakerVolume, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetSpeakerVolume) { _cached_encoder_for_SetSpeakerVolume = $._encodeBitString; }
    return _cached_encoder_for_SetSpeakerVolume(value, elGetter);
}


/* eslint-enable */
