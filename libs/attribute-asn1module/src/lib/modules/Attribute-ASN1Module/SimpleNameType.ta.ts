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



/* START_OF_SYMBOL_DEFINITION SimpleNameType */
/**
 * @summary SimpleNameType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SimpleNameType  ::=  CHOICE {number  INTEGER,
 *                            string  GraphicString
 * }
 * ```
 */
export
type SimpleNameType =
    { number_: INTEGER } /* CHOICE_ALT_ROOT */
    | { string_: GraphicString } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION SimpleNameType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SimpleNameType */
let _cached_decoder_for_SimpleNameType: $.ASN1Decoder<SimpleNameType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SimpleNameType */

/* START_OF_SYMBOL_DEFINITION _decode_SimpleNameType */
/**
 * @summary Decodes an ASN.1 element into a(n) SimpleNameType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SimpleNameType} The decoded data structure.
 */
export
function _decode_SimpleNameType (el: _Element) {
    if (!_cached_decoder_for_SimpleNameType) { _cached_decoder_for_SimpleNameType = $._decode_inextensible_choice<SimpleNameType>({
    "UNIVERSAL 2": [ "number_", $._decodeInteger ],
    "UNIVERSAL 25": [ "string_", $._decodeGraphicString ]
}); }
    return _cached_decoder_for_SimpleNameType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SimpleNameType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SimpleNameType */
let _cached_encoder_for_SimpleNameType: $.ASN1Encoder<SimpleNameType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SimpleNameType */

/* START_OF_SYMBOL_DEFINITION _encode_SimpleNameType */
/**
 * @summary Encodes a(n) SimpleNameType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SimpleNameType, encoded as an ASN.1 Element.
 */
export
function _encode_SimpleNameType (value: SimpleNameType, elGetter: $.ASN1Encoder<SimpleNameType>) {
    if (!_cached_encoder_for_SimpleNameType) { _cached_encoder_for_SimpleNameType = $._encode_choice<SimpleNameType>({
    "number_": $._encodeInteger,
    "string_": $._encodeGraphicString,
}, $.BER); }
    return _cached_encoder_for_SimpleNameType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SimpleNameType */

/* eslint-enable */
