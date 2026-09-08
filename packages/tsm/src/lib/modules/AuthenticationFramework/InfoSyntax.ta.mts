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
import { InfoSyntax_pointer, _decode_InfoSyntax_pointer, _encode_InfoSyntax_pointer } from "../AuthenticationFramework/InfoSyntax-pointer.ta.mjs";
// export { InfoSyntax_pointer, _decode_InfoSyntax_pointer, _encode_InfoSyntax_pointer } from "../AuthenticationFramework/InfoSyntax-pointer.ta.mjs";


/**
 * @summary InfoSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InfoSyntax  ::=  CHOICE {
 *   content  UnboundedDirectoryString,
 *   pointer  SEQUENCE {
 *     name     GeneralNames,
 *     hash     HASH{HashedPolicyInfo} OPTIONAL,
 *     ... },
 *   ... }
 * ```
 */
export
type InfoSyntax =
    { content: UnboundedDirectoryString } /* CHOICE_ALT_ROOT */
    | { pointer: InfoSyntax_pointer } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_InfoSyntax: $.ASN1Decoder<InfoSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InfoSyntax
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InfoSyntax (el: _Element): InfoSyntax {
    if (!_cached_decoder_for_InfoSyntax) { _cached_decoder_for_InfoSyntax = $._decode_extensible_choice<InfoSyntax>({
    "// FIXME: COULD_NOT_COMPILE_TAG_KEY": [ "content", _decode_UnboundedDirectoryString ],
    "UNIVERSAL 16": [ "pointer", _decode_InfoSyntax_pointer ]
}); }
    return _cached_decoder_for_InfoSyntax(el);
}

let _cached_encoder_for_InfoSyntax: $.ASN1Encoder<InfoSyntax> | null = null;

/**
 * @summary Encodes a(n) InfoSyntax into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InfoSyntax, encoded as an ASN.1 Element.
 */
export
function _encode_InfoSyntax (value: InfoSyntax, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InfoSyntax) { _cached_encoder_for_InfoSyntax = $._encode_choice<InfoSyntax>({
    "content": _encode_UnboundedDirectoryString,
    "pointer": _encode_InfoSyntax_pointer,
}, $.BER); }
    return _cached_encoder_for_InfoSyntax(value, elGetter);
}


/* eslint-enable */
