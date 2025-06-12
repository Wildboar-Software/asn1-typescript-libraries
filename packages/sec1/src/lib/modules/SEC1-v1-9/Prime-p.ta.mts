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



/* START_OF_SYMBOL_DEFINITION Prime_p */
/**
 * @summary Prime_p
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Prime-p  ::=  INTEGER
 * ```
 */
export
type Prime_p = INTEGER;
/* END_OF_SYMBOL_DEFINITION Prime_p */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Prime_p */
let _cached_decoder_for_Prime_p: $.ASN1Decoder<Prime_p> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Prime_p */

/* START_OF_SYMBOL_DEFINITION _decode_Prime_p */
/**
 * @summary Decodes an ASN.1 element into a(n) Prime_p
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Prime_p} The decoded data structure.
 */
export
function _decode_Prime_p (el: _Element) {
    if (!_cached_decoder_for_Prime_p) { _cached_decoder_for_Prime_p = $._decodeInteger; }
    return _cached_decoder_for_Prime_p(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Prime_p */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Prime_p */
let _cached_encoder_for_Prime_p: $.ASN1Encoder<Prime_p> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Prime_p */

/* START_OF_SYMBOL_DEFINITION _encode_Prime_p */
/**
 * @summary Encodes a(n) Prime_p into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Prime_p, encoded as an ASN.1 Element.
 */
export
function _encode_Prime_p (value: Prime_p, elGetter: $.ASN1Encoder<Prime_p>) {
    if (!_cached_encoder_for_Prime_p) { _cached_encoder_for_Prime_p = $._encodeInteger; }
    return _cached_encoder_for_Prime_p(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Prime_p */

/* eslint-enable */
