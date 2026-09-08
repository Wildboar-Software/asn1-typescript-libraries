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
 * @summary SymbolRate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SymbolRate  ::=  CHOICE {
 *   sR8000  INTEGER(0),
 *   sR3429  INTEGER(1),
 *   sR3200  INTEGER(2),
 *   sR3000  INTEGER(3),
 *   sR2800  INTEGER(4),
 *   sR2743  INTEGER(5),
 *   sR2400  INTEGER(6),
 *   sR1600  INTEGER(7),
 *   sR1200  INTEGER(8),
 *   sR600   INTEGER(9),
 *   ...
 * }
 * ```
 */
export
type SymbolRate =
    { sR8000: INTEGER } /* CHOICE_ALT_ROOT */
    | { sR3429: INTEGER } /* CHOICE_ALT_ROOT */
    | { sR3200: INTEGER } /* CHOICE_ALT_ROOT */
    | { sR3000: INTEGER } /* CHOICE_ALT_ROOT */
    | { sR2800: INTEGER } /* CHOICE_ALT_ROOT */
    | { sR2743: INTEGER } /* CHOICE_ALT_ROOT */
    | { sR2400: INTEGER } /* CHOICE_ALT_ROOT */
    | { sR1600: INTEGER } /* CHOICE_ALT_ROOT */
    | { sR1200: INTEGER } /* CHOICE_ALT_ROOT */
    | { sR600: INTEGER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_SymbolRate: $.ASN1Decoder<SymbolRate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SymbolRate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SymbolRate (el: _Element): SymbolRate {
    if (!_cached_decoder_for_SymbolRate) { _cached_decoder_for_SymbolRate = $._decode_extensible_choice<SymbolRate>({
    "CONTEXT 0": [ "sR8000", $._decodeInteger ],
    "CONTEXT 1": [ "sR3429", $._decodeInteger ],
    "CONTEXT 2": [ "sR3200", $._decodeInteger ],
    "CONTEXT 3": [ "sR3000", $._decodeInteger ],
    "CONTEXT 4": [ "sR2800", $._decodeInteger ],
    "CONTEXT 5": [ "sR2743", $._decodeInteger ],
    "CONTEXT 6": [ "sR2400", $._decodeInteger ],
    "CONTEXT 7": [ "sR1600", $._decodeInteger ],
    "CONTEXT 8": [ "sR1200", $._decodeInteger ],
    "CONTEXT 9": [ "sR600", $._decodeInteger ]
}); }
    return _cached_decoder_for_SymbolRate(el);
}

let _cached_encoder_for_SymbolRate: $.ASN1Encoder<SymbolRate> | null = null;

/**
 * @summary Encodes a(n) SymbolRate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SymbolRate, encoded as an ASN.1 Element.
 */
export
function _encode_SymbolRate (value: SymbolRate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SymbolRate) { _cached_encoder_for_SymbolRate = $._encode_choice<SymbolRate>({
    "sR8000": $._encodeInteger,
    "sR3429": $._encodeInteger,
    "sR3200": $._encodeInteger,
    "sR3000": $._encodeInteger,
    "sR2800": $._encodeInteger,
    "sR2743": $._encodeInteger,
    "sR2400": $._encodeInteger,
    "sR1600": $._encodeInteger,
    "sR1200": $._encodeInteger,
    "sR600": $._encodeInteger,
}, $.BER); }
    return _cached_encoder_for_SymbolRate(value, elGetter);
}


/* eslint-enable */
