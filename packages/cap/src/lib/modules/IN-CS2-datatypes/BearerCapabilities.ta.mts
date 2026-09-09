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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BearerCapabilities
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BearerCapabilities  ::=  BIT STRING {
 *   speech(0), bc64kbits(1), bc2x64kbits(2), bc384kbits(3), bc1536kbits(4),
 *   bc1920kbits(5), multirate(6), restrictedDigitalInfo(7), bc3-1khzAudio(8),
 *   bc7khzAudio(9), video(10)}
 * ```
 */
export
type BearerCapabilities = BIT_STRING;

/**
 * @summary BearerCapabilities_speech
 * @constant
 */
export
const BearerCapabilities_speech: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary speech
 * @constant
 */
export
const speech: number = BearerCapabilities_speech; /* SHORT_NAMED_BIT */

/**
 * @summary BearerCapabilities_bc64kbits
 * @constant
 */
export
const BearerCapabilities_bc64kbits: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary bc64kbits
 * @constant
 */
export
const bc64kbits: number = BearerCapabilities_bc64kbits; /* SHORT_NAMED_BIT */

/**
 * @summary BearerCapabilities_bc2x64kbits
 * @constant
 */
export
const BearerCapabilities_bc2x64kbits: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary bc2x64kbits
 * @constant
 */
export
const bc2x64kbits: number = BearerCapabilities_bc2x64kbits; /* SHORT_NAMED_BIT */

/**
 * @summary BearerCapabilities_bc384kbits
 * @constant
 */
export
const BearerCapabilities_bc384kbits: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary bc384kbits
 * @constant
 */
export
const bc384kbits: number = BearerCapabilities_bc384kbits; /* SHORT_NAMED_BIT */

/**
 * @summary BearerCapabilities_bc1536kbits
 * @constant
 */
export
const BearerCapabilities_bc1536kbits: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary bc1536kbits
 * @constant
 */
export
const bc1536kbits: number = BearerCapabilities_bc1536kbits; /* SHORT_NAMED_BIT */

/**
 * @summary BearerCapabilities_bc1920kbits
 * @constant
 */
export
const BearerCapabilities_bc1920kbits: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary bc1920kbits
 * @constant
 */
export
const bc1920kbits: number = BearerCapabilities_bc1920kbits; /* SHORT_NAMED_BIT */

/**
 * @summary BearerCapabilities_multirate
 * @constant
 */
export
const BearerCapabilities_multirate: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary multirate
 * @constant
 */
export
const multirate: number = BearerCapabilities_multirate; /* SHORT_NAMED_BIT */

/**
 * @summary BearerCapabilities_restrictedDigitalInfo
 * @constant
 */
export
const BearerCapabilities_restrictedDigitalInfo: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary restrictedDigitalInfo
 * @constant
 */
export
const restrictedDigitalInfo: number = BearerCapabilities_restrictedDigitalInfo; /* SHORT_NAMED_BIT */

/**
 * @summary BearerCapabilities_bc3_1khzAudio
 * @constant
 */
export
const BearerCapabilities_bc3_1khzAudio: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary bc3_1khzAudio
 * @constant
 */
export
const bc3_1khzAudio: number = BearerCapabilities_bc3_1khzAudio; /* SHORT_NAMED_BIT */

/**
 * @summary BearerCapabilities_bc7khzAudio
 * @constant
 */
export
const BearerCapabilities_bc7khzAudio: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary bc7khzAudio
 * @constant
 */
export
const bc7khzAudio: number = BearerCapabilities_bc7khzAudio; /* SHORT_NAMED_BIT */

/**
 * @summary BearerCapabilities_video
 * @constant
 */
export
const BearerCapabilities_video: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary video
 * @constant
 */
export
const video: number = BearerCapabilities_video; /* SHORT_NAMED_BIT */

let _cached_decoder_for_BearerCapabilities: $.ASN1Decoder<BearerCapabilities> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BearerCapabilities
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BearerCapabilities (el: _Element): BearerCapabilities {
    if (!_cached_decoder_for_BearerCapabilities) { _cached_decoder_for_BearerCapabilities = $._decodeBitString; }
    return _cached_decoder_for_BearerCapabilities(el);
}

let _cached_encoder_for_BearerCapabilities: $.ASN1Encoder<BearerCapabilities> | null = null;

/**
 * @summary Encodes a(n) BearerCapabilities into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BearerCapabilities, encoded as an ASN.1 Element.
 */
export
function _encode_BearerCapabilities (value: BearerCapabilities, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BearerCapabilities) { _cached_encoder_for_BearerCapabilities = $._encodeBitString; }
    return _cached_encoder_for_BearerCapabilities(value, elGetter);
}


/* eslint-enable */
