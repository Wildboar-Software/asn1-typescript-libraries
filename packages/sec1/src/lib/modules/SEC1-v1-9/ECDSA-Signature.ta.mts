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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ECDSA_Sig_Value, _decode_ECDSA_Sig_Value, _encode_ECDSA_Sig_Value } from "../SEC1-v1-9/ECDSA-Sig-Value.ta.mjs";
import { ECDSA_Full_R, _decode_ECDSA_Full_R, _encode_ECDSA_Full_R } from "../SEC1-v1-9/ECDSA-Full-R.ta.mjs";
/**
 * @summary ECDSA_Signature
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECDSA-Signature  ::=  CHOICE {
 *     two-ints-plus ECDSA-Sig-Value,
 *     point-int [0] ECDSA-Full-R,
 *     ... -- Future representations may be added
 * }
 * ```
 */
export
type ECDSA_Signature =
    { two_ints_plus: ECDSA_Sig_Value } /* CHOICE_ALT_ROOT */
    | { point_int: ECDSA_Full_R } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ECDSA_Signature: $.ASN1Decoder<ECDSA_Signature> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ECDSA_Signature
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECDSA_Signature} The decoded data structure.
 */
export
function _decode_ECDSA_Signature (el: _Element) {
    if (!_cached_decoder_for_ECDSA_Signature) { _cached_decoder_for_ECDSA_Signature = $._decode_extensible_choice<ECDSA_Signature>({
    "UNIVERSAL 16": [ "two_ints_plus", _decode_ECDSA_Sig_Value ],
    "CONTEXT 0": [ "point_int", $._decode_implicit<ECDSA_Full_R>(() => _decode_ECDSA_Full_R) ]
}); }
    return _cached_decoder_for_ECDSA_Signature(el);
}

let _cached_encoder_for_ECDSA_Signature: $.ASN1Encoder<ECDSA_Signature> | null = null;

/**
 * @summary Encodes a(n) ECDSA_Signature into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECDSA_Signature, encoded as an ASN.1 Element.
 */
export
function _encode_ECDSA_Signature (value: ECDSA_Signature, elGetter: $.ASN1Encoder<ECDSA_Signature>) {
    if (!_cached_encoder_for_ECDSA_Signature) { _cached_encoder_for_ECDSA_Signature = $._encode_choice<ECDSA_Signature>({
    "two_ints_plus": _encode_ECDSA_Sig_Value,
    "point_int": $._encode_implicit(_TagClass.context, 0, () => _encode_ECDSA_Full_R, $.BER),
}, $.BER); }
    return _cached_encoder_for_ECDSA_Signature(value, elGetter);
}


/* eslint-enable */
