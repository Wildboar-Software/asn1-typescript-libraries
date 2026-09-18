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
import { OtherRevocationInfoFormat, _decode_OtherRevocationInfoFormat, _encode_OtherRevocationInfoFormat } from "../CryptographicMessageSyntax-2009/OtherRevocationInfoFormat.ta.mjs";
// export { OtherRevocationInfoFormat, _decode_OtherRevocationInfoFormat, _encode_OtherRevocationInfoFormat } from "../CryptographicMessageSyntax-2009/OtherRevocationInfoFormat.ta.mjs";


/**
 * @summary RevocationInfoChoice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RevocationInfoChoice  ::=  CHOICE {
 *     crl CertificateList,
 *     ...,
 *     [[5: other [1] IMPLICIT OtherRevocationInfoFormat ]] }
 * ```
 */
export
type RevocationInfoChoice =
    { crl: CertificateList } /* CHOICE_ALT_ROOT */
    | { other: OtherRevocationInfoFormat } /* CHOICE_ALT_EXT CHOICE_ALT_VERSION 5 */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_RevocationInfoChoice: $.ASN1Decoder<RevocationInfoChoice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RevocationInfoChoice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RevocationInfoChoice (el: _Element): RevocationInfoChoice {
    if (!_cached_decoder_for_RevocationInfoChoice) { _cached_decoder_for_RevocationInfoChoice = $._decode_extensible_choice<RevocationInfoChoice>({
    "// FIXME: COULD_NOT_COMPILE_TAG_KEY": [ "crl", _decode_CertificateList ],
    "CONTEXT 1": [ "other", $._decode_implicit<OtherRevocationInfoFormat>(() => _decode_OtherRevocationInfoFormat) ]
}); }
    return _cached_decoder_for_RevocationInfoChoice(el);
}

let _cached_encoder_for_RevocationInfoChoice: $.ASN1Encoder<RevocationInfoChoice> | null = null;

/**
 * @summary Encodes a(n) RevocationInfoChoice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RevocationInfoChoice, encoded as an ASN.1 Element.
 */
export
function _encode_RevocationInfoChoice (value: RevocationInfoChoice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RevocationInfoChoice) { _cached_encoder_for_RevocationInfoChoice = $._encode_choice<RevocationInfoChoice>({
    "crl": _encode_CertificateList,
    "other": $._encode_implicit(_TagClass.context, 1, () => _encode_OtherRevocationInfoFormat, $.BER),
}, $.BER); }
    return _cached_encoder_for_RevocationInfoChoice(value, elGetter);
}


/* eslint-enable */
