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
 * @summary Escape
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Escape  ::=  BIT STRING
 * {     privateDataInAck             ( 0),     -- optional parameters
 *     swFunctionSupportsSending         ( 1),     -- misc characteristics
 *     swFunctionSupportsReceiving         ( 2) }
 * ```
 */
export
type Escape = BIT_STRING;

/**
 * @summary Escape_privateDataInAck
 * @constant
 */
export
const Escape_privateDataInAck: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = Escape_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary Escape_swFunctionSupportsSending
 * @constant
 */
export
const Escape_swFunctionSupportsSending: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary swFunctionSupportsSending
 * @constant
 */
export
const swFunctionSupportsSending: number = Escape_swFunctionSupportsSending; /* SHORT_NAMED_BIT */

/**
 * @summary Escape_swFunctionSupportsReceiving
 * @constant
 */
export
const Escape_swFunctionSupportsReceiving: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary swFunctionSupportsReceiving
 * @constant
 */
export
const swFunctionSupportsReceiving: number = Escape_swFunctionSupportsReceiving; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Escape: $.ASN1Decoder<Escape> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Escape
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Escape (el: _Element): Escape {
    if (!_cached_decoder_for_Escape) { _cached_decoder_for_Escape = $._decodeBitString; }
    return _cached_decoder_for_Escape(el);
}

let _cached_encoder_for_Escape: $.ASN1Encoder<Escape> | null = null;

/**
 * @summary Encodes a(n) Escape into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Escape, encoded as an ASN.1 Element.
 */
export
function _encode_Escape (value: Escape, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Escape) { _cached_encoder_for_Escape = $._encodeBitString; }
    return _cached_encoder_for_Escape(value, elGetter);
}


/* eslint-enable */
