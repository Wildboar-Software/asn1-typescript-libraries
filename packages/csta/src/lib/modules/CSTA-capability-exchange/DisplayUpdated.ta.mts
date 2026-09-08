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
 * @summary DisplayUpdated
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisplayUpdated  ::=  BIT STRING
 * {     characterSetASCII             ( 0),     -- optional parameters
 *     characterSetUnicode             ( 1),     -- optional parameters
 *     characterSetProprietary         ( 2),     -- optional parameters
 *     privateData                 ( 3) }
 * ```
 */
export
type DisplayUpdated = BIT_STRING;

/**
 * @summary DisplayUpdated_characterSetASCII
 * @constant
 */
export
const DisplayUpdated_characterSetASCII: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary characterSetASCII
 * @constant
 */
export
const characterSetASCII: number = DisplayUpdated_characterSetASCII; /* SHORT_NAMED_BIT */

/**
 * @summary DisplayUpdated_characterSetUnicode
 * @constant
 */
export
const DisplayUpdated_characterSetUnicode: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary characterSetUnicode
 * @constant
 */
export
const characterSetUnicode: number = DisplayUpdated_characterSetUnicode; /* SHORT_NAMED_BIT */

/**
 * @summary DisplayUpdated_characterSetProprietary
 * @constant
 */
export
const DisplayUpdated_characterSetProprietary: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary characterSetProprietary
 * @constant
 */
export
const characterSetProprietary: number = DisplayUpdated_characterSetProprietary; /* SHORT_NAMED_BIT */

/**
 * @summary DisplayUpdated_privateData
 * @constant
 */
export
const DisplayUpdated_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = DisplayUpdated_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_DisplayUpdated: $.ASN1Decoder<DisplayUpdated> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DisplayUpdated
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DisplayUpdated (el: _Element): DisplayUpdated {
    if (!_cached_decoder_for_DisplayUpdated) { _cached_decoder_for_DisplayUpdated = $._decodeBitString; }
    return _cached_decoder_for_DisplayUpdated(el);
}

let _cached_encoder_for_DisplayUpdated: $.ASN1Encoder<DisplayUpdated> | null = null;

/**
 * @summary Encodes a(n) DisplayUpdated into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisplayUpdated, encoded as an ASN.1 Element.
 */
export
function _encode_DisplayUpdated (value: DisplayUpdated, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DisplayUpdated) { _cached_encoder_for_DisplayUpdated = $._encodeBitString; }
    return _cached_encoder_for_DisplayUpdated(value, elGetter);
}


/* eslint-enable */
