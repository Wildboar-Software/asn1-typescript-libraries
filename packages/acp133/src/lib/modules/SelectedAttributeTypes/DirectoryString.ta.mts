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
 * @summary DirectoryString
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DirectoryString{INTEGER:maxSize}  ::=  CHOICE {
 *   teletexString    TeletexString(SIZE (1..maxSize,...)),
 *   printableString  PrintableString(SIZE (1..maxSize,...)),
 *   bmpString        BMPString(SIZE (1..maxSize,...)),
 *   universalString  UniversalString(SIZE (1..maxSize,...)),
 *   uTF8String       UTF8String(SIZE (1..maxSize,...)) }
 * ```
 */
export
type DirectoryString =
    { teletexString: TeletexString } /* CHOICE_ALT_ROOT */
    | { printableString: PrintableString } /* CHOICE_ALT_ROOT */
    | { bmpString: BMPString } /* CHOICE_ALT_ROOT */
    | { universalString: UniversalString } /* CHOICE_ALT_ROOT */
    | { uTF8String: UTF8String } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DirectoryString: $.ASN1Decoder<DirectoryString> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DirectoryString
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DirectoryString (el: _Element): DirectoryString {
    if (!_cached_decoder_for_DirectoryString) { _cached_decoder_for_DirectoryString = $._decode_inextensible_choice<DirectoryString>({
    "UNIVERSAL 20": [ "teletexString", $._decodeTeletexString ],
    "UNIVERSAL 19": [ "printableString", $._decodePrintableString ],
    "UNIVERSAL 30": [ "bmpString", $._decodeBMPString ],
    "UNIVERSAL 28": [ "universalString", $._decodeUniversalString ],
    "UNIVERSAL 12": [ "uTF8String", $._decodeUTF8String ]
}); }
    return _cached_decoder_for_DirectoryString(el);
}

let _cached_encoder_for_DirectoryString: $.ASN1Encoder<DirectoryString> | null = null;

/**
 * @summary Encodes a(n) DirectoryString into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DirectoryString, encoded as an ASN.1 Element.
 */
export
function _encode_DirectoryString (value: DirectoryString, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DirectoryString) { _cached_encoder_for_DirectoryString = $._encode_choice<DirectoryString>({
    "teletexString": $._encodeTeletexString,
    "printableString": $._encodePrintableString,
    "bmpString": $._encodeBMPString,
    "universalString": $._encodeUniversalString,
    "uTF8String": $._encodeUTF8String,
}, $.BER); }
    return _cached_encoder_for_DirectoryString(value, elGetter);
}


/* eslint-enable */
