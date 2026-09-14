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
 * @summary URL_url
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * URL-url ::= CHOICE {
 *     printable PrintableString,
 *     ia5       IA5String
 * }
 * ```
 */
export
type URL_url =
    { printable: PrintableString } /* CHOICE_ALT_ROOT */
    | { ia5: IA5String } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_URL_url: $.ASN1Decoder<URL_url> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) URL_url
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_URL_url (el: _Element): URL_url {
    if (!_cached_decoder_for_URL_url) { _cached_decoder_for_URL_url = $._decode_inextensible_choice<URL_url>({
    "UNIVERSAL 19": [ "printable", $._decodePrintableString ],
    "UNIVERSAL 22": [ "ia5", $._decodeIA5String ]
}); }
    return _cached_decoder_for_URL_url(el);
}

let _cached_encoder_for_URL_url: $.ASN1Encoder<URL_url> | null = null;

/**
 * @summary Encodes a(n) URL_url into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The URL_url, encoded as an ASN.1 Element.
 */
export
function _encode_URL_url (value: URL_url, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_URL_url) { _cached_encoder_for_URL_url = $._encode_choice<URL_url>({
    "printable": $._encodePrintableString,
    "ia5": $._encodeIA5String,
}, $.BER); }
    return _cached_encoder_for_URL_url(value, elGetter);
}


/* eslint-enable */
