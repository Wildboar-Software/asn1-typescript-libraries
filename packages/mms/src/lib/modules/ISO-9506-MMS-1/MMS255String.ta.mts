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
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMS255String
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMS255String  ::=  CHOICE {
 *        ifChar UTF8String (SIZE(1..255)),
 *        notChar VisibleString (SIZE(1..255))
 * }
 * ```
 */
export
type MMS255String =
    { ifChar: UTF8String } /* CHOICE_ALT_ROOT */
    | { notChar: VisibleString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MMS255String: $.ASN1Decoder<MMS255String> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMS255String
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMS255String (el: _Element): MMS255String {
    if (!_cached_decoder_for_MMS255String) { _cached_decoder_for_MMS255String = $._decode_inextensible_choice<MMS255String>({
    "UNIVERSAL 12": [ "ifChar", $._decodeUTF8String ],
    "UNIVERSAL 26": [ "notChar", $._decodeVisibleString ]
}); }
    const value = _cached_decoder_for_MMS255String(el);
    const str = "ifChar" in value ? value.ifChar : value.notChar;
    if (str.length < 1 || str.length > 255) {
        throw new ASN1SizeError("MMS255String violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_MMS255String: $.ASN1Encoder<MMS255String> | null = null;

/**
 * @summary Encodes a(n) MMS255String into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMS255String, encoded as an ASN.1 Element.
 */
export
function _encode_MMS255String (value: MMS255String, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMS255String) { _cached_encoder_for_MMS255String = $._encode_choice<MMS255String>({
    "ifChar": $._encodeUTF8String,
    "notChar": $._encodeVisibleString,
}, $.BER); }
    return _cached_encoder_for_MMS255String(value, elGetter);
}


/* eslint-enable */
