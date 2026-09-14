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
import { DSAPublicKey, _decode_DSAPublicKey, _encode_DSAPublicKey } from "../CryptographicInformationFramework/DSAPublicKey.ta.mjs";
// export { DSAPublicKey, _decode_DSAPublicKey, _encode_DSAPublicKey } from "../CryptographicInformationFramework/DSAPublicKey.ta.mjs";
import { SubjectPublicKeyInfo, _decode_SubjectPublicKeyInfo, _encode_SubjectPublicKeyInfo } from "../AuthenticationFramework/SubjectPublicKeyInfo.ta.mjs";
// export { SubjectPublicKeyInfo, _decode_SubjectPublicKeyInfo, _encode_SubjectPublicKeyInfo } from "../AuthenticationFramework/SubjectPublicKeyInfo.ta.mjs";


/**
 * @summary DSAPublicKeyChoice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DSAPublicKeyChoice  ::=  CHOICE {
 *     raw     DSAPublicKey,
 *     spki    SubjectPublicKeyInfo, -- See ISO/IEC 9594-8. Must contain a public DSA key.
 *     ...
 * }
 * ```
 */
export
type DSAPublicKeyChoice =
    { raw: DSAPublicKey } /* CHOICE_ALT_ROOT */
    | { spki: SubjectPublicKeyInfo } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_DSAPublicKeyChoice: $.ASN1Decoder<DSAPublicKeyChoice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DSAPublicKeyChoice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DSAPublicKeyChoice (el: _Element): DSAPublicKeyChoice {
    if (!_cached_decoder_for_DSAPublicKeyChoice) { _cached_decoder_for_DSAPublicKeyChoice = $._decode_extensible_choice<DSAPublicKeyChoice>({
    "UNIVERSAL 2": [ "raw", _decode_DSAPublicKey ],
    "UNIVERSAL 16": [ "spki", _decode_SubjectPublicKeyInfo ]
}); }
    return _cached_decoder_for_DSAPublicKeyChoice(el);
}

let _cached_encoder_for_DSAPublicKeyChoice: $.ASN1Encoder<DSAPublicKeyChoice> | null = null;

/**
 * @summary Encodes a(n) DSAPublicKeyChoice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSAPublicKeyChoice, encoded as an ASN.1 Element.
 */
export
function _encode_DSAPublicKeyChoice (value: DSAPublicKeyChoice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DSAPublicKeyChoice) { _cached_encoder_for_DSAPublicKeyChoice = $._encode_choice<DSAPublicKeyChoice>({
    "raw": _encode_DSAPublicKey,
    "spki": _encode_SubjectPublicKeyInfo,
}, $.BER); }
    return _cached_encoder_for_DSAPublicKeyChoice(value, elGetter);
}


/* eslint-enable */
