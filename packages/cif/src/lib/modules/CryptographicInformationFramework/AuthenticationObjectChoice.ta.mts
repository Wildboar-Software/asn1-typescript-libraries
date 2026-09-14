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
import { AuthenticationObject, _get_decoder_for_AuthenticationObject, _get_encoder_for_AuthenticationObject } from "../CryptographicInformationFramework/AuthenticationObject.ta.mjs";
// export { AuthenticationObject, _get_decoder_for_AuthenticationObject, _get_encoder_for_AuthenticationObject } from "../CryptographicInformationFramework/AuthenticationObject.ta.mjs";
import { PasswordAttributes, _decode_PasswordAttributes, _encode_PasswordAttributes } from "../CryptographicInformationFramework/PasswordAttributes.ta.mjs";
// export { PasswordAttributes, _decode_PasswordAttributes, _encode_PasswordAttributes } from "../CryptographicInformationFramework/PasswordAttributes.ta.mjs";
import { BiometricAttributes, _decode_BiometricAttributes, _encode_BiometricAttributes } from "../CryptographicInformationFramework/BiometricAttributes.ta.mjs";
// export { BiometricAttributes, _decode_BiometricAttributes, _encode_BiometricAttributes } from "../CryptographicInformationFramework/BiometricAttributes.ta.mjs";
import { AuthKeyAttributes, _decode_AuthKeyAttributes, _encode_AuthKeyAttributes } from "../CryptographicInformationFramework/AuthKeyAttributes.ta.mjs";
// export { AuthKeyAttributes, _decode_AuthKeyAttributes, _encode_AuthKeyAttributes } from "../CryptographicInformationFramework/AuthKeyAttributes.ta.mjs";
import { ExternalAuthObjectAttributes, _decode_ExternalAuthObjectAttributes, _encode_ExternalAuthObjectAttributes } from "../CryptographicInformationFramework/ExternalAuthObjectAttributes.ta.mjs";
// export { ExternalAuthObjectAttributes, _decode_ExternalAuthObjectAttributes, _encode_ExternalAuthObjectAttributes } from "../CryptographicInformationFramework/ExternalAuthObjectAttributes.ta.mjs";
import { InternalAuthObjectAttributes, _decode_InternalAuthObjectAttributes, _encode_InternalAuthObjectAttributes } from "../CryptographicInformationFramework/InternalAuthObjectAttributes.ta.mjs";
// export { InternalAuthObjectAttributes, _decode_InternalAuthObjectAttributes, _encode_InternalAuthObjectAttributes } from "../CryptographicInformationFramework/InternalAuthObjectAttributes.ta.mjs";


/**
 * @summary AuthenticationObjectChoice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticationObjectChoice  ::=  CHOICE {
 *     pwd                 AuthenticationObject{PasswordAttributes },
 *     biometricTemplate   [0] AuthenticationObject{BiometricAttributes},
 *     authKey             [1] AuthenticationObject{AuthKeyAttributes},
 *     external            [2] AuthenticationObject{ExternalAuthObjectAttributes},
 *     internal            [3] AuthenticationObject{InternalAuthObjectAttributes},
 *     ... -- For future extensions
 * }
 * ```
 */
export
type AuthenticationObjectChoice =
    { pwd: AuthenticationObject<PasswordAttributes> } /* CHOICE_ALT_ROOT */
    | { biometricTemplate: AuthenticationObject<BiometricAttributes> } /* CHOICE_ALT_ROOT */
    | { authKey: AuthenticationObject<AuthKeyAttributes> } /* CHOICE_ALT_ROOT */
    | { external: AuthenticationObject<ExternalAuthObjectAttributes> } /* CHOICE_ALT_ROOT */
    | { internal: AuthenticationObject<InternalAuthObjectAttributes> } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_AuthenticationObjectChoice: $.ASN1Decoder<AuthenticationObjectChoice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticationObjectChoice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthenticationObjectChoice (el: _Element): AuthenticationObjectChoice {
    if (!_cached_decoder_for_AuthenticationObjectChoice) { _cached_decoder_for_AuthenticationObjectChoice = $._decode_extensible_choice<AuthenticationObjectChoice>({
    "UNIVERSAL 16": [ "pwd", _get_decoder_for_AuthenticationObject<PasswordAttributes>(_decode_PasswordAttributes) ],
    "CONTEXT 0": [ "biometricTemplate", $._decode_implicit<AuthenticationObject<BiometricAttributes>>(() => _get_decoder_for_AuthenticationObject<BiometricAttributes>(_decode_BiometricAttributes)) ],
    "CONTEXT 1": [ "authKey", $._decode_implicit<AuthenticationObject<AuthKeyAttributes>>(() => _get_decoder_for_AuthenticationObject<AuthKeyAttributes>(_decode_AuthKeyAttributes)) ],
    "CONTEXT 2": [ "external", $._decode_implicit<AuthenticationObject<ExternalAuthObjectAttributes>>(() => _get_decoder_for_AuthenticationObject<ExternalAuthObjectAttributes>(_decode_ExternalAuthObjectAttributes)) ],
    "CONTEXT 3": [ "internal", $._decode_implicit<AuthenticationObject<InternalAuthObjectAttributes>>(() => _get_decoder_for_AuthenticationObject<InternalAuthObjectAttributes>(_decode_InternalAuthObjectAttributes)) ]
}); }
    return _cached_decoder_for_AuthenticationObjectChoice(el);
}

let _cached_encoder_for_AuthenticationObjectChoice: $.ASN1Encoder<AuthenticationObjectChoice> | null = null;

/**
 * @summary Encodes a(n) AuthenticationObjectChoice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticationObjectChoice, encoded as an ASN.1 Element.
 */
export
function _encode_AuthenticationObjectChoice (value: AuthenticationObjectChoice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthenticationObjectChoice) { _cached_encoder_for_AuthenticationObjectChoice = $._encode_choice<AuthenticationObjectChoice>({
    "pwd": _get_encoder_for_AuthenticationObject<PasswordAttributes>(_encode_PasswordAttributes),
    "biometricTemplate": $._encode_implicit(_TagClass.context, 0, () => _get_encoder_for_AuthenticationObject<BiometricAttributes>(_encode_BiometricAttributes), $.BER),
    "authKey": $._encode_implicit(_TagClass.context, 1, () => _get_encoder_for_AuthenticationObject<AuthKeyAttributes>(_encode_AuthKeyAttributes), $.BER),
    "external": $._encode_implicit(_TagClass.context, 2, () => _get_encoder_for_AuthenticationObject<ExternalAuthObjectAttributes>(_encode_ExternalAuthObjectAttributes), $.BER),
    "internal": $._encode_implicit(_TagClass.context, 3, () => _get_encoder_for_AuthenticationObject<InternalAuthObjectAttributes>(_encode_InternalAuthObjectAttributes), $.BER),
}, $.BER); }
    return _cached_encoder_for_AuthenticationObjectChoice(value, elGetter);
}


/* eslint-enable */
