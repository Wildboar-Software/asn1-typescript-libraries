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
 * @summary SuppressMTSS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SuppressMTSS  ::=  BIT STRING {
 *     suppressCUG    (0),
 *     suppressCCBS    (1) } (SIZE (2..16))
 * ```
 */
export
type SuppressMTSS = BIT_STRING;

/**
 * @summary SuppressMTSS_suppressCUG
 * @constant
 */
export
const SuppressMTSS_suppressCUG: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary suppressCUG
 * @constant
 */
export
const suppressCUG: number = SuppressMTSS_suppressCUG; /* SHORT_NAMED_BIT */

/**
 * @summary SuppressMTSS_suppressCCBS
 * @constant
 */
export
const SuppressMTSS_suppressCCBS: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary suppressCCBS
 * @constant
 */
export
const suppressCCBS: number = SuppressMTSS_suppressCCBS; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SuppressMTSS: $.ASN1Decoder<SuppressMTSS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SuppressMTSS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SuppressMTSS (el: _Element): SuppressMTSS {
    if (!_cached_decoder_for_SuppressMTSS) { _cached_decoder_for_SuppressMTSS = $._decodeBitString; }
    return _cached_decoder_for_SuppressMTSS(el);
}

let _cached_encoder_for_SuppressMTSS: $.ASN1Encoder<SuppressMTSS> | null = null;

/**
 * @summary Encodes a(n) SuppressMTSS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuppressMTSS, encoded as an ASN.1 Element.
 */
export
function _encode_SuppressMTSS (value: SuppressMTSS, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SuppressMTSS) { _cached_encoder_for_SuppressMTSS = $._encodeBitString; }
    return _cached_encoder_for_SuppressMTSS(value, elGetter);
}


/* eslint-enable */
