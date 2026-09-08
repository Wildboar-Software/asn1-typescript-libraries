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
 * @summary SpeakerVolume
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpeakerVolume  ::=  BIT STRING
 * {     speakerVolumeAbs             ( 0),     -- optional parameters
 *     speakerVolumeInc             ( 1),     -- optional parameters
 *     privateData                 ( 2) }
 * ```
 */
export
type SpeakerVolume = BIT_STRING;

/**
 * @summary SpeakerVolume_speakerVolumeAbs
 * @constant
 */
export
const SpeakerVolume_speakerVolumeAbs: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary speakerVolumeAbs
 * @constant
 */
export
const speakerVolumeAbs: number = SpeakerVolume_speakerVolumeAbs; /* SHORT_NAMED_BIT */

/**
 * @summary SpeakerVolume_speakerVolumeInc
 * @constant
 */
export
const SpeakerVolume_speakerVolumeInc: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary speakerVolumeInc
 * @constant
 */
export
const speakerVolumeInc: number = SpeakerVolume_speakerVolumeInc; /* SHORT_NAMED_BIT */

/**
 * @summary SpeakerVolume_privateData
 * @constant
 */
export
const SpeakerVolume_privateData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SpeakerVolume_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SpeakerVolume: $.ASN1Decoder<SpeakerVolume> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SpeakerVolume
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SpeakerVolume (el: _Element): SpeakerVolume {
    if (!_cached_decoder_for_SpeakerVolume) { _cached_decoder_for_SpeakerVolume = $._decodeBitString; }
    return _cached_decoder_for_SpeakerVolume(el);
}

let _cached_encoder_for_SpeakerVolume: $.ASN1Encoder<SpeakerVolume> | null = null;

/**
 * @summary Encodes a(n) SpeakerVolume into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpeakerVolume, encoded as an ASN.1 Element.
 */
export
function _encode_SpeakerVolume (value: SpeakerVolume, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SpeakerVolume) { _cached_encoder_for_SpeakerVolume = $._encodeBitString; }
    return _cached_encoder_for_SpeakerVolume(value, elGetter);
}


/* eslint-enable */
