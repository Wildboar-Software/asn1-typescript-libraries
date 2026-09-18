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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ParameterValues_typeIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterValues-typeIdentifier ::= CHOICE {
 *     oid     OBJECT IDENTIFIER,
 *     string  PrintableString
 * }
 * ```
 */
export
type ParameterValues_typeIdentifier =
    { oid: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { string_: PrintableString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ParameterValues_typeIdentifier: $.ASN1Decoder<ParameterValues_typeIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterValues_typeIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterValues_typeIdentifier (el: _Element): ParameterValues_typeIdentifier {
    if (!_cached_decoder_for_ParameterValues_typeIdentifier) { _cached_decoder_for_ParameterValues_typeIdentifier = $._decode_inextensible_choice<ParameterValues_typeIdentifier>({
    "UNIVERSAL 6": [ "oid", $._decodeObjectIdentifier ],
    "UNIVERSAL 19": [ "string_", $._decodePrintableString ]
}); }
    return _cached_decoder_for_ParameterValues_typeIdentifier(el);
}

let _cached_encoder_for_ParameterValues_typeIdentifier: $.ASN1Encoder<ParameterValues_typeIdentifier> | null = null;

/**
 * @summary Encodes a(n) ParameterValues_typeIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterValues_typeIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterValues_typeIdentifier (value: ParameterValues_typeIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterValues_typeIdentifier) { _cached_encoder_for_ParameterValues_typeIdentifier = $._encode_choice<ParameterValues_typeIdentifier>({
    "oid": $._encodeObjectIdentifier,
    "string_": $._encodePrintableString,
}, $.BER); }
    return _cached_encoder_for_ParameterValues_typeIdentifier(value, elGetter);
}


/* eslint-enable */
