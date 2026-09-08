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
import { UniversalFailure, _decode_UniversalFailure, _encode_UniversalFailure } from "../CSTA-error-definition/UniversalFailure.ta.mjs";
// export { UniversalFailure, _decode_UniversalFailure, _encode_UniversalFailure } from "../CSTA-error-definition/UniversalFailure.ta.mjs";


/**
 * @summary ErrorValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorValue  ::=  UniversalFailure
 * ```
 */
export
type ErrorValue = UniversalFailure; // DefinedType

let _cached_decoder_for_ErrorValue: $.ASN1Decoder<ErrorValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ErrorValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ErrorValue (el: _Element): ErrorValue {
    if (!_cached_decoder_for_ErrorValue) { _cached_decoder_for_ErrorValue = _decode_UniversalFailure; }
    return _cached_decoder_for_ErrorValue(el);
}

let _cached_encoder_for_ErrorValue: $.ASN1Encoder<ErrorValue> | null = null;

/**
 * @summary Encodes a(n) ErrorValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ErrorValue, encoded as an ASN.1 Element.
 */
export
function _encode_ErrorValue (value: ErrorValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ErrorValue) { _cached_encoder_for_ErrorValue = _encode_UniversalFailure; }
    return _cached_encoder_for_ErrorValue(value, elGetter);
}


/* eslint-enable */
