/* eslint-disable */
import {
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
import { SecretKeyObject, _get_decoder_for_SecretKeyObject, _get_encoder_for_SecretKeyObject } from "../CryptographicInformationFramework/SecretKeyObject.ta.mjs";
import { SecretKeyAttributes, _decode_SecretKeyAttributes, _encode_SecretKeyAttributes } from "../CryptographicInformationFramework/SecretKeyAttributes.ta.mjs";
import { GenericKeyAttributes, _decode_GenericKeyAttributes, _encode_GenericKeyAttributes } from "../CryptographicInformationFramework/GenericKeyAttributes.ta.mjs";


/**
 * @summary SecretKeyChoice
 * @description
 * 
 * Secret-key CIO alternatives. Context tags [0]–[14] are historical (PKCS #15)
 * and shall not be used. ISO/IEC 7816-15:2016 §8.6.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecretKeyChoice  ::=  CHOICE {
 *     algIndependentKey SecretKeyObject {SecretKeyAttributes},
 *     genericSecretKey        [15] SecretKeyObject {GenericKeyAttributes},
 *     ... -- For future extensions
 * }
 * ```
 */
export
type SecretKeyChoice =
    { algIndependentKey: SecretKeyObject<SecretKeyAttributes> } /* CHOICE_ALT_ROOT */
    | { genericSecretKey: SecretKeyObject<GenericKeyAttributes> } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_SecretKeyChoice: $.ASN1Decoder<SecretKeyChoice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecretKeyChoice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SecretKeyChoice (el: _Element): SecretKeyChoice {
    if (!_cached_decoder_for_SecretKeyChoice) { _cached_decoder_for_SecretKeyChoice = $._decode_extensible_choice<SecretKeyChoice>({
    "UNIVERSAL 16": [ "algIndependentKey", _get_decoder_for_SecretKeyObject<SecretKeyAttributes>(_decode_SecretKeyAttributes) ],
    "CONTEXT 15": [ "genericSecretKey", $._decode_implicit<SecretKeyObject<GenericKeyAttributes>>(() => _get_decoder_for_SecretKeyObject<GenericKeyAttributes>(_decode_GenericKeyAttributes)) ]
}); }
    return _cached_decoder_for_SecretKeyChoice(el);
}

let _cached_encoder_for_SecretKeyChoice: $.ASN1Encoder<SecretKeyChoice> | null = null;

/**
 * @summary Encodes a(n) SecretKeyChoice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecretKeyChoice, encoded as an ASN.1 Element.
 */
export
function _encode_SecretKeyChoice (value: SecretKeyChoice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SecretKeyChoice) { _cached_encoder_for_SecretKeyChoice = $._encode_choice<SecretKeyChoice>({
    "algIndependentKey": _get_encoder_for_SecretKeyObject<SecretKeyAttributes>(_encode_SecretKeyAttributes),
    "genericSecretKey": $._encode_implicit(_TagClass.context, 15, () => _get_encoder_for_SecretKeyObject<GenericKeyAttributes>(_encode_GenericKeyAttributes), $.BER),
}, $.BER); }
    return _cached_encoder_for_SecretKeyChoice(value, elGetter);
}


/* eslint-enable */
