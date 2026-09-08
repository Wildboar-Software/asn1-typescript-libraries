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
 * @summary CallCleared
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallCleared  ::=  BIT STRING
 * {     correlatorData                 ( 0),     -- optional parameters
 *     userData                 ( 1),     -- optional parameters
 *     mediaCallCharacteristics         ( 2),     -- optional parameters
 *     callCharacteristics             ( 3),     -- optional parameters
 *     callLinkageData             ( 6),     -- optional parameters
 *     privateData                 ( 4),     -- optional parameters
 *     callIDOnly                 ( 5) }
 * ```
 */
export
type CallCleared = BIT_STRING;

/**
 * @summary CallCleared_correlatorData
 * @constant
 */
export
const CallCleared_correlatorData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 */
export
const correlatorData: number = CallCleared_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary CallCleared_userData
 * @constant
 */
export
const CallCleared_userData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 */
export
const userData: number = CallCleared_userData; /* SHORT_NAMED_BIT */

/**
 * @summary CallCleared_mediaCallCharacteristics
 * @constant
 */
export
const CallCleared_mediaCallCharacteristics: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 */
export
const mediaCallCharacteristics: number = CallCleared_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary CallCleared_callCharacteristics
 * @constant
 */
export
const CallCleared_callCharacteristics: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 */
export
const callCharacteristics: number = CallCleared_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary CallCleared_callLinkageData
 * @constant
 */
export
const CallCleared_callLinkageData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary callLinkageData
 * @constant
 */
export
const callLinkageData: number = CallCleared_callLinkageData; /* SHORT_NAMED_BIT */

/**
 * @summary CallCleared_privateData
 * @constant
 */
export
const CallCleared_privateData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = CallCleared_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary CallCleared_callIDOnly
 * @constant
 */
export
const CallCleared_callIDOnly: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary callIDOnly
 * @constant
 */
export
const callIDOnly: number = CallCleared_callIDOnly; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CallCleared: $.ASN1Decoder<CallCleared> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallCleared
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallCleared (el: _Element): CallCleared {
    if (!_cached_decoder_for_CallCleared) { _cached_decoder_for_CallCleared = $._decodeBitString; }
    return _cached_decoder_for_CallCleared(el);
}

let _cached_encoder_for_CallCleared: $.ASN1Encoder<CallCleared> | null = null;

/**
 * @summary Encodes a(n) CallCleared into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallCleared, encoded as an ASN.1 Element.
 */
export
function _encode_CallCleared (value: CallCleared, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallCleared) { _cached_encoder_for_CallCleared = $._encodeBitString; }
    return _cached_encoder_for_CallCleared(value, elGetter);
}


/* eslint-enable */
