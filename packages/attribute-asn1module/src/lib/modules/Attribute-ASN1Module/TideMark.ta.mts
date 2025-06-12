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
import { ObservedValue, _decode_ObservedValue, _encode_ObservedValue } from "../Attribute-ASN1Module/ObservedValue.ta.mjs";
export { ObservedValue, _decode_ObservedValue, _encode_ObservedValue } from "../Attribute-ASN1Module/ObservedValue.ta.mjs";


/* START_OF_SYMBOL_DEFINITION TideMark */
/**
 * @summary TideMark
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TideMark  ::=  CHOICE {
 *   maxTideMar   [0]  ObservedValue,
 *   minTideMark  [1]  ObservedValue
 * }
 * ```
 */
export
type TideMark =
    { maxTideMar: ObservedValue } /* CHOICE_ALT_ROOT */
    | { minTideMark: ObservedValue } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION TideMark */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TideMark */
let _cached_decoder_for_TideMark: $.ASN1Decoder<TideMark> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TideMark */

/* START_OF_SYMBOL_DEFINITION _decode_TideMark */
/**
 * @summary Decodes an ASN.1 element into a(n) TideMark
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TideMark} The decoded data structure.
 */
export
function _decode_TideMark (el: _Element) {
    if (!_cached_decoder_for_TideMark) { _cached_decoder_for_TideMark = $._decode_inextensible_choice<TideMark>({
    "CONTEXT 0": [ "maxTideMar", $._decode_explicit<ObservedValue>(() => _decode_ObservedValue) ],
    "CONTEXT 1": [ "minTideMark", $._decode_explicit<ObservedValue>(() => _decode_ObservedValue) ]
}); }
    return _cached_decoder_for_TideMark(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TideMark */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TideMark */
let _cached_encoder_for_TideMark: $.ASN1Encoder<TideMark> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TideMark */

/* START_OF_SYMBOL_DEFINITION _encode_TideMark */
/**
 * @summary Encodes a(n) TideMark into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TideMark, encoded as an ASN.1 Element.
 */
export
function _encode_TideMark (value: TideMark, elGetter: $.ASN1Encoder<TideMark>) {
    if (!_cached_encoder_for_TideMark) { _cached_encoder_for_TideMark = $._encode_choice<TideMark>({
    "maxTideMar": $._encode_explicit(_TagClass.context, 0, () => _encode_ObservedValue, $.BER),
    "minTideMark": $._encode_explicit(_TagClass.context, 1, () => _encode_ObservedValue, $.BER),
}, $.BER); }
    return _cached_encoder_for_TideMark(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TideMark */

/* eslint-enable */
