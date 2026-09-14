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
import { ECPoint, _decode_ECPoint, _encode_ECPoint } from "../ANSI-X9-62/ECPoint.ta.mjs";
// export { ECPoint, _decode_ECPoint, _encode_ECPoint } from "../ANSI-X9-62/ECPoint.ta.mjs";
import { SubjectPublicKeyInfo, _decode_SubjectPublicKeyInfo, _encode_SubjectPublicKeyInfo } from "../AuthenticationFramework/SubjectPublicKeyInfo.ta.mjs";
// export { SubjectPublicKeyInfo, _decode_SubjectPublicKeyInfo, _encode_SubjectPublicKeyInfo } from "../AuthenticationFramework/SubjectPublicKeyInfo.ta.mjs";


/**
 * @summary ECPublicKeyChoice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECPublicKeyChoice  ::=  CHOICE {
 *     raw     ECPoint, -- See ANSI X9.62,
 *     spki    SubjectPublicKeyInfo, -- See ISO/IEC 9594-8. Must contain a public elliptic curve key
 *     ...
 * }
 * ```
 */
export
type ECPublicKeyChoice =
    { raw: ECPoint } /* CHOICE_ALT_ROOT */
    | { spki: SubjectPublicKeyInfo } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ECPublicKeyChoice: $.ASN1Decoder<ECPublicKeyChoice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ECPublicKeyChoice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ECPublicKeyChoice (el: _Element): ECPublicKeyChoice {
    if (!_cached_decoder_for_ECPublicKeyChoice) { _cached_decoder_for_ECPublicKeyChoice = $._decode_extensible_choice<ECPublicKeyChoice>({
    "UNIVERSAL 4": [ "raw", _decode_ECPoint ],
    "UNIVERSAL 16": [ "spki", _decode_SubjectPublicKeyInfo ]
}); }
    return _cached_decoder_for_ECPublicKeyChoice(el);
}

let _cached_encoder_for_ECPublicKeyChoice: $.ASN1Encoder<ECPublicKeyChoice> | null = null;

/**
 * @summary Encodes a(n) ECPublicKeyChoice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECPublicKeyChoice, encoded as an ASN.1 Element.
 */
export
function _encode_ECPublicKeyChoice (value: ECPublicKeyChoice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ECPublicKeyChoice) { _cached_encoder_for_ECPublicKeyChoice = $._encode_choice<ECPublicKeyChoice>({
    "raw": _encode_ECPoint,
    "spki": _encode_SubjectPublicKeyInfo,
}, $.BER); }
    return _cached_encoder_for_ECPublicKeyChoice(value, elGetter);
}


/* eslint-enable */
