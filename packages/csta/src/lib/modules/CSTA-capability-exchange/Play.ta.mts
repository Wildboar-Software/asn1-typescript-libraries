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
 * @summary Play
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Play  ::=  BIT STRING
 * {     length                     ( 0),     -- optional parameters
 *     currentPosition             ( 1),     -- optional parameters
 *     speed                     ( 2),     -- optional parameters
 *     cause                     ( 3),     -- optional parameters
 *     servicesPermitted             ( 4),     -- optional parameters
 *     privateData                 ( 5) }
 * ```
 */
export
type Play = BIT_STRING;

/**
 * @summary Play_length
 * @constant
 */
export
const Play_length: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary length
 * @constant
 */
export
const length: number = Play_length; /* SHORT_NAMED_BIT */

/**
 * @summary Play_currentPosition
 * @constant
 */
export
const Play_currentPosition: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary currentPosition
 * @constant
 */
export
const currentPosition: number = Play_currentPosition; /* SHORT_NAMED_BIT */

/**
 * @summary Play_speed
 * @constant
 */
export
const Play_speed: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary speed
 * @constant
 */
export
const speed: number = Play_speed; /* SHORT_NAMED_BIT */

/**
 * @summary Play_cause
 * @constant
 */
export
const Play_cause: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 */
export
const cause: number = Play_cause; /* SHORT_NAMED_BIT */

/**
 * @summary Play_servicesPermitted
 * @constant
 */
export
const Play_servicesPermitted: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 */
export
const servicesPermitted: number = Play_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary Play_privateData
 * @constant
 */
export
const Play_privateData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = Play_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Play: $.ASN1Decoder<Play> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Play
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Play (el: _Element): Play {
    if (!_cached_decoder_for_Play) { _cached_decoder_for_Play = $._decodeBitString; }
    return _cached_decoder_for_Play(el);
}

let _cached_encoder_for_Play: $.ASN1Encoder<Play> | null = null;

/**
 * @summary Encodes a(n) Play into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Play, encoded as an ASN.1 Element.
 */
export
function _encode_Play (value: Play, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Play) { _cached_encoder_for_Play = $._encodeBitString; }
    return _cached_encoder_for_Play(value, elGetter);
}


/* eslint-enable */
