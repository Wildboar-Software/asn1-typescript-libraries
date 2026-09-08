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
 * @summary EscapeRegisterCancel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EscapeRegisterCancel  ::=  BIT STRING    
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type EscapeRegisterCancel = BIT_STRING;

/**
 * @summary EscapeRegisterCancel_privateData
 * @constant
 */
export
const EscapeRegisterCancel_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = EscapeRegisterCancel_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary EscapeRegisterCancel_privateDataInAck
 * @constant
 */
export
const EscapeRegisterCancel_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = EscapeRegisterCancel_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_EscapeRegisterCancel: $.ASN1Decoder<EscapeRegisterCancel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EscapeRegisterCancel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EscapeRegisterCancel (el: _Element): EscapeRegisterCancel {
    if (!_cached_decoder_for_EscapeRegisterCancel) { _cached_decoder_for_EscapeRegisterCancel = $._decodeBitString; }
    return _cached_decoder_for_EscapeRegisterCancel(el);
}

let _cached_encoder_for_EscapeRegisterCancel: $.ASN1Encoder<EscapeRegisterCancel> | null = null;

/**
 * @summary Encodes a(n) EscapeRegisterCancel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EscapeRegisterCancel, encoded as an ASN.1 Element.
 */
export
function _encode_EscapeRegisterCancel (value: EscapeRegisterCancel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EscapeRegisterCancel) { _cached_encoder_for_EscapeRegisterCancel = $._encodeBitString; }
    return _cached_encoder_for_EscapeRegisterCancel(value, elGetter);
}


/* eslint-enable */
