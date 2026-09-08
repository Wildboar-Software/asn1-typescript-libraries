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
 * @summary CarrierFreq
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CarrierFreq  ::=  CHOICE {
 *   cF1200  INTEGER(0),
 *   cF1600  INTEGER(1),
 *   cF1646  INTEGER(2),
 *   cF1680  INTEGER(3),
 *   cF1700  INTEGER(4),
 *   cF1800  INTEGER(5),
 *   cF1829  INTEGER(6),
 *   cF1867  INTEGER(7),
 *   cF1920  INTEGER(8),
 *   cF1959  INTEGER(9),
 *   cF2000  INTEGER(10),
 *   cF2400  INTEGER(11),
 *   ...
 * }
 * ```
 */
export
type CarrierFreq =
    { cF1200: INTEGER } /* CHOICE_ALT_ROOT */
    | { cF1600: INTEGER } /* CHOICE_ALT_ROOT */
    | { cF1646: INTEGER } /* CHOICE_ALT_ROOT */
    | { cF1680: INTEGER } /* CHOICE_ALT_ROOT */
    | { cF1700: INTEGER } /* CHOICE_ALT_ROOT */
    | { cF1800: INTEGER } /* CHOICE_ALT_ROOT */
    | { cF1829: INTEGER } /* CHOICE_ALT_ROOT */
    | { cF1867: INTEGER } /* CHOICE_ALT_ROOT */
    | { cF1920: INTEGER } /* CHOICE_ALT_ROOT */
    | { cF1959: INTEGER } /* CHOICE_ALT_ROOT */
    | { cF2000: INTEGER } /* CHOICE_ALT_ROOT */
    | { cF2400: INTEGER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_CarrierFreq: $.ASN1Decoder<CarrierFreq> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CarrierFreq
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CarrierFreq (el: _Element): CarrierFreq {
    if (!_cached_decoder_for_CarrierFreq) { _cached_decoder_for_CarrierFreq = $._decode_extensible_choice<CarrierFreq>({
    "CONTEXT 0": [ "cF1200", $._decodeInteger ],
    "CONTEXT 1": [ "cF1600", $._decodeInteger ],
    "CONTEXT 2": [ "cF1646", $._decodeInteger ],
    "CONTEXT 3": [ "cF1680", $._decodeInteger ],
    "CONTEXT 4": [ "cF1700", $._decodeInteger ],
    "CONTEXT 5": [ "cF1800", $._decodeInteger ],
    "CONTEXT 6": [ "cF1829", $._decodeInteger ],
    "CONTEXT 7": [ "cF1867", $._decodeInteger ],
    "CONTEXT 8": [ "cF1920", $._decodeInteger ],
    "CONTEXT 9": [ "cF1959", $._decodeInteger ],
    "CONTEXT 10": [ "cF2000", $._decodeInteger ],
    "CONTEXT 11": [ "cF2400", $._decodeInteger ]
}); }
    return _cached_decoder_for_CarrierFreq(el);
}

let _cached_encoder_for_CarrierFreq: $.ASN1Encoder<CarrierFreq> | null = null;

/**
 * @summary Encodes a(n) CarrierFreq into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CarrierFreq, encoded as an ASN.1 Element.
 */
export
function _encode_CarrierFreq (value: CarrierFreq, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CarrierFreq) { _cached_encoder_for_CarrierFreq = $._encode_choice<CarrierFreq>({
    "cF1200": $._encodeInteger,
    "cF1600": $._encodeInteger,
    "cF1646": $._encodeInteger,
    "cF1680": $._encodeInteger,
    "cF1700": $._encodeInteger,
    "cF1800": $._encodeInteger,
    "cF1829": $._encodeInteger,
    "cF1867": $._encodeInteger,
    "cF1920": $._encodeInteger,
    "cF1959": $._encodeInteger,
    "cF2000": $._encodeInteger,
    "cF2400": $._encodeInteger,
}, $.BER); }
    return _cached_encoder_for_CarrierFreq(value, elGetter);
}


/* eslint-enable */
