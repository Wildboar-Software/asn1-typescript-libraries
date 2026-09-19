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
import { UnboundedDirectoryString, _decode_UnboundedDirectoryString, _encode_UnboundedDirectoryString } from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
// export { UnboundedDirectoryString, _decode_UnboundedDirectoryString, _encode_UnboundedDirectoryString } from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";


/**
 * @summary LocaleContextSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocaleContextSyntax  ::=  CHOICE {
 *   localeID1  OBJECT IDENTIFIER,
 *   localeID2  UnboundedDirectoryString,
 *   ... }
 * ```
 */
export
type LocaleContextSyntax =
    { localeID1: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { localeID2: UnboundedDirectoryString } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_LocaleContextSyntax: $.ASN1Decoder<LocaleContextSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocaleContextSyntax
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocaleContextSyntax (el: _Element): LocaleContextSyntax {
    if (!_cached_decoder_for_LocaleContextSyntax) { _cached_decoder_for_LocaleContextSyntax = $._decode_extensible_choice<LocaleContextSyntax>({
    "UNIVERSAL 6": [ "localeID1", $._decodeObjectIdentifier ],
    "UNIVERSAL 20": [ "localeID2", _decode_UnboundedDirectoryString ],
    "UNIVERSAL 19": [ "localeID2", _decode_UnboundedDirectoryString ],
    "UNIVERSAL 30": [ "localeID2", _decode_UnboundedDirectoryString ],
    "UNIVERSAL 28": [ "localeID2", _decode_UnboundedDirectoryString ],
    "UNIVERSAL 12": [ "localeID2", _decode_UnboundedDirectoryString ]
}); }
    return _cached_decoder_for_LocaleContextSyntax(el);
}

let _cached_encoder_for_LocaleContextSyntax: $.ASN1Encoder<LocaleContextSyntax> | null = null;

/**
 * @summary Encodes a(n) LocaleContextSyntax into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocaleContextSyntax, encoded as an ASN.1 Element.
 */
export
function _encode_LocaleContextSyntax (value: LocaleContextSyntax, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocaleContextSyntax) { _cached_encoder_for_LocaleContextSyntax = $._encode_choice<LocaleContextSyntax>({
    "localeID1": $._encodeObjectIdentifier,
    "localeID2": _encode_UnboundedDirectoryString,
}, $.BER); }
    return _cached_encoder_for_LocaleContextSyntax(value, elGetter);
}


/* eslint-enable */
