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
import { PrivateKeyObject, _get_decoder_for_PrivateKeyObject, _get_encoder_for_PrivateKeyObject } from "../CryptographicInformationFramework/PrivateKeyObject.ta.mjs";
import { PrivateRSAKeyAttributes, _decode_PrivateRSAKeyAttributes, _encode_PrivateRSAKeyAttributes } from "../CryptographicInformationFramework/PrivateRSAKeyAttributes.ta.mjs";
import { PrivateECKeyAttributes, _decode_PrivateECKeyAttributes, _encode_PrivateECKeyAttributes } from "../CryptographicInformationFramework/PrivateECKeyAttributes.ta.mjs";
import { PrivateDHKeyAttributes, _decode_PrivateDHKeyAttributes, _encode_PrivateDHKeyAttributes } from "../CryptographicInformationFramework/PrivateDHKeyAttributes.ta.mjs";
import { PrivateDSAKeyAttributes, _decode_PrivateDSAKeyAttributes, _encode_PrivateDSAKeyAttributes } from "../CryptographicInformationFramework/PrivateDSAKeyAttributes.ta.mjs";
import { PrivateKEAKeyAttributes, _decode_PrivateKEAKeyAttributes, _encode_PrivateKEAKeyAttributes } from "../CryptographicInformationFramework/PrivateKEAKeyAttributes.ta.mjs";
import { GenericKeyAttributes, _decode_GenericKeyAttributes, _encode_GenericKeyAttributes } from "../CryptographicInformationFramework/GenericKeyAttributes.ta.mjs";


/**
 * @summary PrivateKeyChoice
 * @description
 * 
 * Private-key CIO alternatives (RSA, EC, DH, DSA, KEA, or generic). ISO/IEC
 * 7816-15:2016 §8.4.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateKeyChoice  ::=  CHOICE {
 *     privateRSAKey       PrivateKeyObject{PrivateRSAKeyAttributes},
 *     privateECKey        [0] PrivateKeyObject{PrivateECKeyAttributes},
 *     privateDHKey        [1] PrivateKeyObject{PrivateDHKeyAttributes},
 *     privateDSAKey       [2] PrivateKeyObject{PrivateDSAKeyAttributes},
 *     privateKEAKey       [3] PrivateKeyObject{PrivateKEAKeyAttributes},
 *     genericPrivateKey   [4] PrivateKeyObject{GenericKeyAttributes},
 *     ... -- For future extensions
 * }
 * ```
 */
export
type PrivateKeyChoice =
    { privateRSAKey: PrivateKeyObject<PrivateRSAKeyAttributes> } /* CHOICE_ALT_ROOT */
    | { privateECKey: PrivateKeyObject<PrivateECKeyAttributes> } /* CHOICE_ALT_ROOT */
    | { privateDHKey: PrivateKeyObject<PrivateDHKeyAttributes> } /* CHOICE_ALT_ROOT */
    | { privateDSAKey: PrivateKeyObject<PrivateDSAKeyAttributes> } /* CHOICE_ALT_ROOT */
    | { privateKEAKey: PrivateKeyObject<PrivateKEAKeyAttributes> } /* CHOICE_ALT_ROOT */
    | { genericPrivateKey: PrivateKeyObject<GenericKeyAttributes> } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_PrivateKeyChoice: $.ASN1Decoder<PrivateKeyChoice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrivateKeyChoice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrivateKeyChoice (el: _Element): PrivateKeyChoice {
    if (!_cached_decoder_for_PrivateKeyChoice) { _cached_decoder_for_PrivateKeyChoice = $._decode_extensible_choice<PrivateKeyChoice>({
    "UNIVERSAL 16": [ "privateRSAKey", _get_decoder_for_PrivateKeyObject<PrivateRSAKeyAttributes>(_decode_PrivateRSAKeyAttributes) ],
    "CONTEXT 0": [ "privateECKey", $._decode_implicit<PrivateKeyObject<PrivateECKeyAttributes>>(() => _get_decoder_for_PrivateKeyObject<PrivateECKeyAttributes>(_decode_PrivateECKeyAttributes)) ],
    "CONTEXT 1": [ "privateDHKey", $._decode_implicit<PrivateKeyObject<PrivateDHKeyAttributes>>(() => _get_decoder_for_PrivateKeyObject<PrivateDHKeyAttributes>(_decode_PrivateDHKeyAttributes)) ],
    "CONTEXT 2": [ "privateDSAKey", $._decode_implicit<PrivateKeyObject<PrivateDSAKeyAttributes>>(() => _get_decoder_for_PrivateKeyObject<PrivateDSAKeyAttributes>(_decode_PrivateDSAKeyAttributes)) ],
    "CONTEXT 3": [ "privateKEAKey", $._decode_implicit<PrivateKeyObject<PrivateKEAKeyAttributes>>(() => _get_decoder_for_PrivateKeyObject<PrivateKEAKeyAttributes>(_decode_PrivateKEAKeyAttributes)) ],
    "CONTEXT 4": [ "genericPrivateKey", $._decode_implicit<PrivateKeyObject<GenericKeyAttributes>>(() => _get_decoder_for_PrivateKeyObject<GenericKeyAttributes>(_decode_GenericKeyAttributes)) ]
}); }
    return _cached_decoder_for_PrivateKeyChoice(el);
}

let _cached_encoder_for_PrivateKeyChoice: $.ASN1Encoder<PrivateKeyChoice> | null = null;

/**
 * @summary Encodes a(n) PrivateKeyChoice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateKeyChoice, encoded as an ASN.1 Element.
 */
export
function _encode_PrivateKeyChoice (value: PrivateKeyChoice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrivateKeyChoice) { _cached_encoder_for_PrivateKeyChoice = $._encode_choice<PrivateKeyChoice>({
    "privateRSAKey": _get_encoder_for_PrivateKeyObject<PrivateRSAKeyAttributes>(_encode_PrivateRSAKeyAttributes),
    "privateECKey": $._encode_implicit(_TagClass.context, 0, () => _get_encoder_for_PrivateKeyObject<PrivateECKeyAttributes>(_encode_PrivateECKeyAttributes), $.BER),
    "privateDHKey": $._encode_implicit(_TagClass.context, 1, () => _get_encoder_for_PrivateKeyObject<PrivateDHKeyAttributes>(_encode_PrivateDHKeyAttributes), $.BER),
    "privateDSAKey": $._encode_implicit(_TagClass.context, 2, () => _get_encoder_for_PrivateKeyObject<PrivateDSAKeyAttributes>(_encode_PrivateDSAKeyAttributes), $.BER),
    "privateKEAKey": $._encode_implicit(_TagClass.context, 3, () => _get_encoder_for_PrivateKeyObject<PrivateKEAKeyAttributes>(_encode_PrivateKEAKeyAttributes), $.BER),
    "genericPrivateKey": $._encode_implicit(_TagClass.context, 4, () => _get_encoder_for_PrivateKeyObject<GenericKeyAttributes>(_encode_GenericKeyAttributes), $.BER),
}, $.BER); }
    return _cached_encoder_for_PrivateKeyChoice(value, elGetter);
}


/* eslint-enable */
