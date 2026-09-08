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
 * @summary MediaAttached
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaAttached  ::=  BIT STRING
 * {     mediaServiceVersion             ( 0),     -- optional parameters
 *     mediaServiceInstanceID             ( 1),     -- optional parameters
 *     mediaStreamID                 ( 2),     -- optional parameters
 *     mediaCallCharacteristics         ( 3),     -- optional parameters
 *     callCharacteristics             ( 4),     -- optional parameters
 *     mediaConnectionInfo             ( 5),     -- optional parameters
 *     privateData                 ( 6) }
 * ```
 */
export
type MediaAttached = BIT_STRING;

/**
 * @summary MediaAttached_mediaServiceVersion
 * @constant
 */
export
const MediaAttached_mediaServiceVersion: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceVersion
 * @constant
 */
export
const mediaServiceVersion: number = MediaAttached_mediaServiceVersion; /* SHORT_NAMED_BIT */

/**
 * @summary MediaAttached_mediaServiceInstanceID
 * @constant
 */
export
const MediaAttached_mediaServiceInstanceID: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceInstanceID
 * @constant
 */
export
const mediaServiceInstanceID: number = MediaAttached_mediaServiceInstanceID; /* SHORT_NAMED_BIT */

/**
 * @summary MediaAttached_mediaStreamID
 * @constant
 */
export
const MediaAttached_mediaStreamID: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary mediaStreamID
 * @constant
 */
export
const mediaStreamID: number = MediaAttached_mediaStreamID; /* SHORT_NAMED_BIT */

/**
 * @summary MediaAttached_mediaCallCharacteristics
 * @constant
 */
export
const MediaAttached_mediaCallCharacteristics: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 */
export
const mediaCallCharacteristics: number = MediaAttached_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary MediaAttached_callCharacteristics
 * @constant
 */
export
const MediaAttached_callCharacteristics: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 */
export
const callCharacteristics: number = MediaAttached_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary MediaAttached_mediaConnectionInfo
 * @constant
 */
export
const MediaAttached_mediaConnectionInfo: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary mediaConnectionInfo
 * @constant
 */
export
const mediaConnectionInfo: number = MediaAttached_mediaConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary MediaAttached_privateData
 * @constant
 */
export
const MediaAttached_privateData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = MediaAttached_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_MediaAttached: $.ASN1Decoder<MediaAttached> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaAttached
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaAttached (el: _Element): MediaAttached {
    if (!_cached_decoder_for_MediaAttached) { _cached_decoder_for_MediaAttached = $._decodeBitString; }
    return _cached_decoder_for_MediaAttached(el);
}

let _cached_encoder_for_MediaAttached: $.ASN1Encoder<MediaAttached> | null = null;

/**
 * @summary Encodes a(n) MediaAttached into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaAttached, encoded as an ASN.1 Element.
 */
export
function _encode_MediaAttached (value: MediaAttached, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaAttached) { _cached_encoder_for_MediaAttached = $._encodeBitString; }
    return _cached_encoder_for_MediaAttached(value, elGetter);
}


/* eslint-enable */
