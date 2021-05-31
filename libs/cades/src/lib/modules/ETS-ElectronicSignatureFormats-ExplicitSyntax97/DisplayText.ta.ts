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
import * as $ from "asn1-ts/dist/node/functional";



/* START_OF_SYMBOL_DEFINITION DisplayText */
/**
 * @summary DisplayText
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisplayText  ::=  CHOICE {
 *     visibleString       VisibleString (SIZE (1..200)),
 *     bmpString           BMPString (SIZE (1..200)),
 *     utf8String          UTF8String (SIZE (1..200)) }
 * ```
 */
export
type DisplayText =
    { visibleString: VisibleString } /* CHOICE_ALT_ROOT */
    | { bmpString: BMPString } /* CHOICE_ALT_ROOT */
    | { utf8String: UTF8String } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION DisplayText */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DisplayText */
let _cached_decoder_for_DisplayText: $.ASN1Decoder<DisplayText> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DisplayText */

/* START_OF_SYMBOL_DEFINITION _decode_DisplayText */
/**
 * @summary Decodes an ASN.1 element into a(n) DisplayText
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DisplayText} The decoded data structure.
 */
export
function _decode_DisplayText (el: _Element) {
    if (!_cached_decoder_for_DisplayText) { _cached_decoder_for_DisplayText = $._decode_inextensible_choice<DisplayText>({
    "UNIVERSAL 26": [ "visibleString", $._decodeVisibleString ],
    "UNIVERSAL 30": [ "bmpString", $._decodeBMPString ],
    "UNIVERSAL 12": [ "utf8String", $._decodeUTF8String ]
}); }
    return _cached_decoder_for_DisplayText(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DisplayText */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DisplayText */
let _cached_encoder_for_DisplayText: $.ASN1Encoder<DisplayText> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DisplayText */

/* START_OF_SYMBOL_DEFINITION _encode_DisplayText */
/**
 * @summary Encodes a(n) DisplayText into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisplayText, encoded as an ASN.1 Element.
 */
export
function _encode_DisplayText (value: DisplayText, elGetter: $.ASN1Encoder<DisplayText>) {
    if (!_cached_encoder_for_DisplayText) { _cached_encoder_for_DisplayText = $._encode_choice<DisplayText>({
    "visibleString": $._encodeVisibleString,
    "bmpString": $._encodeBMPString,
    "utf8String": $._encodeUTF8String,
}, $.BER); }
    return _cached_encoder_for_DisplayText(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DisplayText */

/* eslint-enable */
