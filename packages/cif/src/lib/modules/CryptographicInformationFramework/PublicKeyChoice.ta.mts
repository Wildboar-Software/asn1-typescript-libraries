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
import { PublicKeyObject, _get_decoder_for_PublicKeyObject, _get_encoder_for_PublicKeyObject } from "../CryptographicInformationFramework/PublicKeyObject.ta.mjs";
// export { PublicKeyObject, _get_decoder_for_PublicKeyObject, _get_encoder_for_PublicKeyObject } from "../CryptographicInformationFramework/PublicKeyObject.ta.mjs";
import { PublicRSAKeyAttributes, _decode_PublicRSAKeyAttributes, _encode_PublicRSAKeyAttributes } from "../CryptographicInformationFramework/PublicRSAKeyAttributes.ta.mjs";
// export { PublicRSAKeyAttributes, _decode_PublicRSAKeyAttributes, _encode_PublicRSAKeyAttributes } from "../CryptographicInformationFramework/PublicRSAKeyAttributes.ta.mjs";
import { PublicECKeyAttributes, _decode_PublicECKeyAttributes, _encode_PublicECKeyAttributes } from "../CryptographicInformationFramework/PublicECKeyAttributes.ta.mjs";
// export { PublicECKeyAttributes, _decode_PublicECKeyAttributes, _encode_PublicECKeyAttributes } from "../CryptographicInformationFramework/PublicECKeyAttributes.ta.mjs";
import { PublicDHKeyAttributes, _decode_PublicDHKeyAttributes, _encode_PublicDHKeyAttributes } from "../CryptographicInformationFramework/PublicDHKeyAttributes.ta.mjs";
// export { PublicDHKeyAttributes, _decode_PublicDHKeyAttributes, _encode_PublicDHKeyAttributes } from "../CryptographicInformationFramework/PublicDHKeyAttributes.ta.mjs";
import { PublicDSAKeyAttributes, _decode_PublicDSAKeyAttributes, _encode_PublicDSAKeyAttributes } from "../CryptographicInformationFramework/PublicDSAKeyAttributes.ta.mjs";
// export { PublicDSAKeyAttributes, _decode_PublicDSAKeyAttributes, _encode_PublicDSAKeyAttributes } from "../CryptographicInformationFramework/PublicDSAKeyAttributes.ta.mjs";
import { PublicKEAKeyAttributes, _decode_PublicKEAKeyAttributes, _encode_PublicKEAKeyAttributes } from "../CryptographicInformationFramework/PublicKEAKeyAttributes.ta.mjs";
// export { PublicKEAKeyAttributes, _decode_PublicKEAKeyAttributes, _encode_PublicKEAKeyAttributes } from "../CryptographicInformationFramework/PublicKEAKeyAttributes.ta.mjs";
import { GenericKeyAttributes, _decode_GenericKeyAttributes, _encode_GenericKeyAttributes } from "../CryptographicInformationFramework/GenericKeyAttributes.ta.mjs";
// export { GenericKeyAttributes, _decode_GenericKeyAttributes, _encode_GenericKeyAttributes } from "../CryptographicInformationFramework/GenericKeyAttributes.ta.mjs";


/**
 * @summary PublicKeyChoice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PublicKeyChoice  ::=  CHOICE {
 *     publicRSAKey        PublicKeyObject{PublicRSAKeyAttributes},
 *     publicECKey         [0] PublicKeyObject{PublicECKeyAttributes},
 *     publicDHKey         [1] PublicKeyObject{PublicDHKeyAttributes},
 *     publicDSAKey        [2] PublicKeyObject{PublicDSAKeyAttributes},
 *     publicKEAKey        [3] PublicKeyObject{PublicKEAKeyAttributes},
 *     genericPublicKey    [4] PublicKeyObject{GenericKeyAttributes},
 *     ... -- For future extensions
 * }
 * ```
 */
export
type PublicKeyChoice =
    { publicRSAKey: PublicKeyObject<PublicRSAKeyAttributes> } /* CHOICE_ALT_ROOT */
    | { publicECKey: PublicKeyObject<PublicECKeyAttributes> } /* CHOICE_ALT_ROOT */
    | { publicDHKey: PublicKeyObject<PublicDHKeyAttributes> } /* CHOICE_ALT_ROOT */
    | { publicDSAKey: PublicKeyObject<PublicDSAKeyAttributes> } /* CHOICE_ALT_ROOT */
    | { publicKEAKey: PublicKeyObject<PublicKEAKeyAttributes> } /* CHOICE_ALT_ROOT */
    | { genericPublicKey: PublicKeyObject<GenericKeyAttributes> } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_PublicKeyChoice: $.ASN1Decoder<PublicKeyChoice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PublicKeyChoice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PublicKeyChoice (el: _Element): PublicKeyChoice {
    if (!_cached_decoder_for_PublicKeyChoice) { _cached_decoder_for_PublicKeyChoice = $._decode_extensible_choice<PublicKeyChoice>({
    "UNIVERSAL 16": [ "publicRSAKey", _get_decoder_for_PublicKeyObject<PublicRSAKeyAttributes>(_decode_PublicRSAKeyAttributes) ],
    "CONTEXT 0": [ "publicECKey", $._decode_implicit<PublicKeyObject<PublicECKeyAttributes>>(() => _get_decoder_for_PublicKeyObject<PublicECKeyAttributes>(_decode_PublicECKeyAttributes)) ],
    "CONTEXT 1": [ "publicDHKey", $._decode_implicit<PublicKeyObject<PublicDHKeyAttributes>>(() => _get_decoder_for_PublicKeyObject<PublicDHKeyAttributes>(_decode_PublicDHKeyAttributes)) ],
    "CONTEXT 2": [ "publicDSAKey", $._decode_implicit<PublicKeyObject<PublicDSAKeyAttributes>>(() => _get_decoder_for_PublicKeyObject<PublicDSAKeyAttributes>(_decode_PublicDSAKeyAttributes)) ],
    "CONTEXT 3": [ "publicKEAKey", $._decode_implicit<PublicKeyObject<PublicKEAKeyAttributes>>(() => _get_decoder_for_PublicKeyObject<PublicKEAKeyAttributes>(_decode_PublicKEAKeyAttributes)) ],
    "CONTEXT 4": [ "genericPublicKey", $._decode_implicit<PublicKeyObject<GenericKeyAttributes>>(() => _get_decoder_for_PublicKeyObject<GenericKeyAttributes>(_decode_GenericKeyAttributes)) ]
}); }
    return _cached_decoder_for_PublicKeyChoice(el);
}

let _cached_encoder_for_PublicKeyChoice: $.ASN1Encoder<PublicKeyChoice> | null = null;

/**
 * @summary Encodes a(n) PublicKeyChoice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PublicKeyChoice, encoded as an ASN.1 Element.
 */
export
function _encode_PublicKeyChoice (value: PublicKeyChoice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PublicKeyChoice) { _cached_encoder_for_PublicKeyChoice = $._encode_choice<PublicKeyChoice>({
    "publicRSAKey": _get_encoder_for_PublicKeyObject<PublicRSAKeyAttributes>(_encode_PublicRSAKeyAttributes),
    "publicECKey": $._encode_implicit(_TagClass.context, 0, () => _get_encoder_for_PublicKeyObject<PublicECKeyAttributes>(_encode_PublicECKeyAttributes), $.BER),
    "publicDHKey": $._encode_implicit(_TagClass.context, 1, () => _get_encoder_for_PublicKeyObject<PublicDHKeyAttributes>(_encode_PublicDHKeyAttributes), $.BER),
    "publicDSAKey": $._encode_implicit(_TagClass.context, 2, () => _get_encoder_for_PublicKeyObject<PublicDSAKeyAttributes>(_encode_PublicDSAKeyAttributes), $.BER),
    "publicKEAKey": $._encode_implicit(_TagClass.context, 3, () => _get_encoder_for_PublicKeyObject<PublicKEAKeyAttributes>(_encode_PublicKEAKeyAttributes), $.BER),
    "genericPublicKey": $._encode_implicit(_TagClass.context, 4, () => _get_encoder_for_PublicKeyObject<GenericKeyAttributes>(_encode_GenericKeyAttributes), $.BER),
}, $.BER); }
    return _cached_encoder_for_PublicKeyChoice(value, elGetter);
}


/* eslint-enable */
