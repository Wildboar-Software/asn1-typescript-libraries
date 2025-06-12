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



/* START_OF_SYMBOL_DEFINITION ObservedValue */
/**
 * @summary ObservedValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObservedValue  ::=  CHOICE {integer  INTEGER,
 *                           real     REAL
 * }
 * ```
 */
export
type ObservedValue =
    { integer: INTEGER } /* CHOICE_ALT_ROOT */
    | { real: REAL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ObservedValue */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ObservedValue */
let _cached_decoder_for_ObservedValue: $.ASN1Decoder<ObservedValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ObservedValue */

/* START_OF_SYMBOL_DEFINITION _decode_ObservedValue */
/**
 * @summary Decodes an ASN.1 element into a(n) ObservedValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObservedValue} The decoded data structure.
 */
export
function _decode_ObservedValue (el: _Element) {
    if (!_cached_decoder_for_ObservedValue) { _cached_decoder_for_ObservedValue = $._decode_inextensible_choice<ObservedValue>({
    "UNIVERSAL 2": [ "integer", $._decodeInteger ],
    "UNIVERSAL 9": [ "real", $._decodeReal ]
}); }
    return _cached_decoder_for_ObservedValue(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ObservedValue */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ObservedValue */
let _cached_encoder_for_ObservedValue: $.ASN1Encoder<ObservedValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ObservedValue */

/* START_OF_SYMBOL_DEFINITION _encode_ObservedValue */
/**
 * @summary Encodes a(n) ObservedValue into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObservedValue, encoded as an ASN.1 Element.
 */
export
function _encode_ObservedValue (value: ObservedValue, elGetter: $.ASN1Encoder<ObservedValue>) {
    if (!_cached_encoder_for_ObservedValue) { _cached_encoder_for_ObservedValue = $._encode_choice<ObservedValue>({
    "integer": $._encodeInteger,
    "real": $._encodeReal,
}, $.BER); }
    return _cached_encoder_for_ObservedValue(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ObservedValue */

/* eslint-enable */
