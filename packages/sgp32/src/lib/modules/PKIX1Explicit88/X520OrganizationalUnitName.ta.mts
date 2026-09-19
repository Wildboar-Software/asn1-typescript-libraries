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
 * @summary X520OrganizationalUnitName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * X520OrganizationalUnitName  ::=  CHOICE {
 *       teletexString     TeletexString
 *                           (SIZE (1..ub-organizational-unit-name)),
 *       printableString   PrintableString
 *                           (SIZE (1..ub-organizational-unit-name)),
 *       universalString   UniversalString
 *                           (SIZE (1..ub-organizational-unit-name)),
 *       utf8String        UTF8String
 *                           (SIZE (1..ub-organizational-unit-name)),
 *       bmpString         BMPString
 *                           (SIZE (1..ub-organizational-unit-name)) }
 * ```
 */
export
type X520OrganizationalUnitName =
    { teletexString: TeletexString } /* CHOICE_ALT_ROOT */
    | { printableString: PrintableString } /* CHOICE_ALT_ROOT */
    | { universalString: UniversalString } /* CHOICE_ALT_ROOT */
    | { utf8String: UTF8String } /* CHOICE_ALT_ROOT */
    | { bmpString: BMPString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_X520OrganizationalUnitName: $.ASN1Decoder<X520OrganizationalUnitName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) X520OrganizationalUnitName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_X520OrganizationalUnitName (el: _Element): X520OrganizationalUnitName {
    if (!_cached_decoder_for_X520OrganizationalUnitName) { _cached_decoder_for_X520OrganizationalUnitName = $._decode_inextensible_choice<X520OrganizationalUnitName>({
    "UNIVERSAL 20": [ "teletexString", $._decodeTeletexString ],
    "UNIVERSAL 19": [ "printableString", $._decodePrintableString ],
    "UNIVERSAL 28": [ "universalString", $._decodeUniversalString ],
    "UNIVERSAL 12": [ "utf8String", $._decodeUTF8String ],
    "UNIVERSAL 30": [ "bmpString", $._decodeBMPString ]
}); }
    return _cached_decoder_for_X520OrganizationalUnitName(el);
}

let _cached_encoder_for_X520OrganizationalUnitName: $.ASN1Encoder<X520OrganizationalUnitName> | null = null;

/**
 * @summary Encodes a(n) X520OrganizationalUnitName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The X520OrganizationalUnitName, encoded as an ASN.1 Element.
 */
export
function _encode_X520OrganizationalUnitName (value: X520OrganizationalUnitName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_X520OrganizationalUnitName) { _cached_encoder_for_X520OrganizationalUnitName = $._encode_choice<X520OrganizationalUnitName>({
    "teletexString": $._encodeTeletexString,
    "printableString": $._encodePrintableString,
    "universalString": $._encodeUniversalString,
    "utf8String": $._encodeUTF8String,
    "bmpString": $._encodeBMPString,
}, $.BER); }
    return _cached_encoder_for_X520OrganizationalUnitName(value, elGetter);
}


/* eslint-enable */
