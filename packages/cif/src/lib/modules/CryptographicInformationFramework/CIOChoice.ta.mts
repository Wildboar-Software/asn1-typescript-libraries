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
import { PrivateKeys, _decode_PrivateKeys, _encode_PrivateKeys } from "../CryptographicInformationFramework/PrivateKeys.ta.mjs";
// export { PrivateKeys, _decode_PrivateKeys, _encode_PrivateKeys } from "../CryptographicInformationFramework/PrivateKeys.ta.mjs";
import { PublicKeys, _decode_PublicKeys, _encode_PublicKeys } from "../CryptographicInformationFramework/PublicKeys.ta.mjs";
// export { PublicKeys, _decode_PublicKeys, _encode_PublicKeys } from "../CryptographicInformationFramework/PublicKeys.ta.mjs";
import { SecretKeys, _decode_SecretKeys, _encode_SecretKeys } from "../CryptographicInformationFramework/SecretKeys.ta.mjs";
// export { SecretKeys, _decode_SecretKeys, _encode_SecretKeys } from "../CryptographicInformationFramework/SecretKeys.ta.mjs";
import { Certificates, _decode_Certificates, _encode_Certificates } from "../CryptographicInformationFramework/Certificates.ta.mjs";
// export { Certificates, _decode_Certificates, _encode_Certificates } from "../CryptographicInformationFramework/Certificates.ta.mjs";
import { DataContainerObjects, _decode_DataContainerObjects, _encode_DataContainerObjects } from "../CryptographicInformationFramework/DataContainerObjects.ta.mjs";
// export { DataContainerObjects, _decode_DataContainerObjects, _encode_DataContainerObjects } from "../CryptographicInformationFramework/DataContainerObjects.ta.mjs";
import { AuthObjects, _decode_AuthObjects, _encode_AuthObjects } from "../CryptographicInformationFramework/AuthObjects.ta.mjs";
// export { AuthObjects, _decode_AuthObjects, _encode_AuthObjects } from "../CryptographicInformationFramework/AuthObjects.ta.mjs";


/**
 * @summary CIOChoice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CIOChoice  ::=  CHOICE {
 *     privateKeys             [0] PrivateKeys,
 *     publicKeys              [1] PublicKeys,
 *     trustedPublicKeys       [2] PublicKeys,
 *     secretKeys              [3] SecretKeys,
 *     certificates            [4] Certificates,
 *     trustedCertificates     [5] Certificates,
 *     usefulCertificates      [6] Certificates,
 *     dataContainerObjects    [7] DataContainerObjects,
 *     authObjects             [8] AuthObjects,
 *     ... -- For future extensions
 * }
 * ```
 */
export
type CIOChoice =
    { privateKeys: PrivateKeys } /* CHOICE_ALT_ROOT */
    | { publicKeys: PublicKeys } /* CHOICE_ALT_ROOT */
    | { trustedPublicKeys: PublicKeys } /* CHOICE_ALT_ROOT */
    | { secretKeys: SecretKeys } /* CHOICE_ALT_ROOT */
    | { certificates: Certificates } /* CHOICE_ALT_ROOT */
    | { trustedCertificates: Certificates } /* CHOICE_ALT_ROOT */
    | { usefulCertificates: Certificates } /* CHOICE_ALT_ROOT */
    | { dataContainerObjects: DataContainerObjects } /* CHOICE_ALT_ROOT */
    | { authObjects: AuthObjects } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_CIOChoice: $.ASN1Decoder<CIOChoice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CIOChoice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CIOChoice (el: _Element): CIOChoice {
    if (!_cached_decoder_for_CIOChoice) { _cached_decoder_for_CIOChoice = $._decode_extensible_choice<CIOChoice>({
    "CONTEXT 0": [ "privateKeys", $._decode_explicit<PrivateKeys>(() => _decode_PrivateKeys) ],
    "CONTEXT 1": [ "publicKeys", $._decode_explicit<PublicKeys>(() => _decode_PublicKeys) ],
    "CONTEXT 2": [ "trustedPublicKeys", $._decode_explicit<PublicKeys>(() => _decode_PublicKeys) ],
    "CONTEXT 3": [ "secretKeys", $._decode_explicit<SecretKeys>(() => _decode_SecretKeys) ],
    "CONTEXT 4": [ "certificates", $._decode_explicit<Certificates>(() => _decode_Certificates) ],
    "CONTEXT 5": [ "trustedCertificates", $._decode_explicit<Certificates>(() => _decode_Certificates) ],
    "CONTEXT 6": [ "usefulCertificates", $._decode_explicit<Certificates>(() => _decode_Certificates) ],
    "CONTEXT 7": [ "dataContainerObjects", $._decode_explicit<DataContainerObjects>(() => _decode_DataContainerObjects) ],
    "CONTEXT 8": [ "authObjects", $._decode_explicit<AuthObjects>(() => _decode_AuthObjects) ]
}); }
    return _cached_decoder_for_CIOChoice(el);
}

let _cached_encoder_for_CIOChoice: $.ASN1Encoder<CIOChoice> | null = null;

/**
 * @summary Encodes a(n) CIOChoice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CIOChoice, encoded as an ASN.1 Element.
 */
export
function _encode_CIOChoice (value: CIOChoice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CIOChoice) { _cached_encoder_for_CIOChoice = $._encode_choice<CIOChoice>({
    "privateKeys": $._encode_explicit(_TagClass.context, 0, () => _encode_PrivateKeys, $.BER),
    "publicKeys": $._encode_explicit(_TagClass.context, 1, () => _encode_PublicKeys, $.BER),
    "trustedPublicKeys": $._encode_explicit(_TagClass.context, 2, () => _encode_PublicKeys, $.BER),
    "secretKeys": $._encode_explicit(_TagClass.context, 3, () => _encode_SecretKeys, $.BER),
    "certificates": $._encode_explicit(_TagClass.context, 4, () => _encode_Certificates, $.BER),
    "trustedCertificates": $._encode_explicit(_TagClass.context, 5, () => _encode_Certificates, $.BER),
    "usefulCertificates": $._encode_explicit(_TagClass.context, 6, () => _encode_Certificates, $.BER),
    "dataContainerObjects": $._encode_explicit(_TagClass.context, 7, () => _encode_DataContainerObjects, $.BER),
    "authObjects": $._encode_explicit(_TagClass.context, 8, () => _encode_AuthObjects, $.BER),
}, $.BER); }
    return _cached_encoder_for_CIOChoice(value, elGetter);
}


/* eslint-enable */
