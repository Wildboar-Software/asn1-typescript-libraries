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
 * @summary MicrophoneGain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MicrophoneGain  ::=  BIT STRING
 * {     microphoneGainAbs             ( 0),     -- optional parameters
 *     microphoneGainInc             ( 1),     -- optional parameters
 *     privateData                 ( 2) }
 * ```
 */
export
type MicrophoneGain = BIT_STRING;

/**
 * @summary MicrophoneGain_microphoneGainAbs
 * @constant
 */
export
const MicrophoneGain_microphoneGainAbs: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary microphoneGainAbs
 * @constant
 */
export
const microphoneGainAbs: number = MicrophoneGain_microphoneGainAbs; /* SHORT_NAMED_BIT */

/**
 * @summary MicrophoneGain_microphoneGainInc
 * @constant
 */
export
const MicrophoneGain_microphoneGainInc: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary microphoneGainInc
 * @constant
 */
export
const microphoneGainInc: number = MicrophoneGain_microphoneGainInc; /* SHORT_NAMED_BIT */

/**
 * @summary MicrophoneGain_privateData
 * @constant
 */
export
const MicrophoneGain_privateData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = MicrophoneGain_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_MicrophoneGain: $.ASN1Decoder<MicrophoneGain> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MicrophoneGain
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MicrophoneGain (el: _Element): MicrophoneGain {
    if (!_cached_decoder_for_MicrophoneGain) { _cached_decoder_for_MicrophoneGain = $._decodeBitString; }
    return _cached_decoder_for_MicrophoneGain(el);
}

let _cached_encoder_for_MicrophoneGain: $.ASN1Encoder<MicrophoneGain> | null = null;

/**
 * @summary Encodes a(n) MicrophoneGain into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MicrophoneGain, encoded as an ASN.1 Element.
 */
export
function _encode_MicrophoneGain (value: MicrophoneGain, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MicrophoneGain) { _cached_encoder_for_MicrophoneGain = $._encodeBitString; }
    return _cached_encoder_for_MicrophoneGain(value, elGetter);
}


/* eslint-enable */
