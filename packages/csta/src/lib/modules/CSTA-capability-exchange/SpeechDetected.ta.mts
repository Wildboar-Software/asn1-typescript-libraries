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
 * @summary SpeechDetected
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpeechDetected  ::=  BIT STRING
 * {     resource                 ( 0),     -- optional parameters
 *     cause                    ( 1),     -- optional parameters
 *     servicesPermitted             ( 2),     -- optional parameters
 *     privateData                 ( 3) }
 * ```
 */
export
type SpeechDetected = BIT_STRING;

/**
 * @summary SpeechDetected_resource
 * @constant
 */
export
const SpeechDetected_resource: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 */
export
const resource: number = SpeechDetected_resource; /* SHORT_NAMED_BIT */

/**
 * @summary SpeechDetected_cause
 * @constant
 */
export
const SpeechDetected_cause: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 */
export
const cause: number = SpeechDetected_cause; /* SHORT_NAMED_BIT */

/**
 * @summary SpeechDetected_servicesPermitted
 * @constant
 */
export
const SpeechDetected_servicesPermitted: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 */
export
const servicesPermitted: number = SpeechDetected_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary SpeechDetected_privateData
 * @constant
 */
export
const SpeechDetected_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SpeechDetected_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SpeechDetected: $.ASN1Decoder<SpeechDetected> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SpeechDetected
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SpeechDetected (el: _Element): SpeechDetected {
    if (!_cached_decoder_for_SpeechDetected) { _cached_decoder_for_SpeechDetected = $._decodeBitString; }
    return _cached_decoder_for_SpeechDetected(el);
}

let _cached_encoder_for_SpeechDetected: $.ASN1Encoder<SpeechDetected> | null = null;

/**
 * @summary Encodes a(n) SpeechDetected into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpeechDetected, encoded as an ASN.1 Element.
 */
export
function _encode_SpeechDetected (value: SpeechDetected, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SpeechDetected) { _cached_encoder_for_SpeechDetected = $._encodeBitString; }
    return _cached_encoder_for_SpeechDetected(value, elGetter);
}


/* eslint-enable */
