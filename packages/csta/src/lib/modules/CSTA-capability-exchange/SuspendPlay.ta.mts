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
 * @summary SuspendPlay
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SuspendPlay  ::=  BIT STRING
 * {     message                    ( 5),     -- optional parameters
 *     resource                ( 6),     -- optional parameters
 *     length                     ( 0),     -- optional parameters
 *     currentPosition             ( 1),     -- optional parameters
 *     cause                     ( 2),     -- optional parameters
 *     servicesPermitted             ( 3),     -- optional parameters
 *     privateData                 ( 4) }
 * ```
 */
export
type SuspendPlay = BIT_STRING;

/**
 * @summary SuspendPlay_message
 * @constant
 */
export
const SuspendPlay_message: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary message
 * @constant
 */
export
const message: number = SuspendPlay_message; /* SHORT_NAMED_BIT */

/**
 * @summary SuspendPlay_resource
 * @constant
 */
export
const SuspendPlay_resource: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 */
export
const resource: number = SuspendPlay_resource; /* SHORT_NAMED_BIT */

/**
 * @summary SuspendPlay_length
 * @constant
 */
export
const SuspendPlay_length: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary length
 * @constant
 */
export
const length: number = SuspendPlay_length; /* SHORT_NAMED_BIT */

/**
 * @summary SuspendPlay_currentPosition
 * @constant
 */
export
const SuspendPlay_currentPosition: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary currentPosition
 * @constant
 */
export
const currentPosition: number = SuspendPlay_currentPosition; /* SHORT_NAMED_BIT */

/**
 * @summary SuspendPlay_cause
 * @constant
 */
export
const SuspendPlay_cause: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 */
export
const cause: number = SuspendPlay_cause; /* SHORT_NAMED_BIT */

/**
 * @summary SuspendPlay_servicesPermitted
 * @constant
 */
export
const SuspendPlay_servicesPermitted: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 */
export
const servicesPermitted: number = SuspendPlay_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary SuspendPlay_privateData
 * @constant
 */
export
const SuspendPlay_privateData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SuspendPlay_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SuspendPlay: $.ASN1Decoder<SuspendPlay> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SuspendPlay
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SuspendPlay (el: _Element): SuspendPlay {
    if (!_cached_decoder_for_SuspendPlay) { _cached_decoder_for_SuspendPlay = $._decodeBitString; }
    return _cached_decoder_for_SuspendPlay(el);
}

let _cached_encoder_for_SuspendPlay: $.ASN1Encoder<SuspendPlay> | null = null;

/**
 * @summary Encodes a(n) SuspendPlay into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuspendPlay, encoded as an ASN.1 Element.
 */
export
function _encode_SuspendPlay (value: SuspendPlay, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SuspendPlay) { _cached_encoder_for_SuspendPlay = $._encodeBitString; }
    return _cached_encoder_for_SuspendPlay(value, elGetter);
}


/* eslint-enable */
