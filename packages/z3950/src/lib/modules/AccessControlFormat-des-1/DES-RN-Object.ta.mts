/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DRNType, _decode_DRNType, _encode_DRNType } from "../AccessControlFormat-des-1/DRNType.ta.mjs";
// export { DRNType, _decode_DRNType, _encode_DRNType } from "../AccessControlFormat-des-1/DRNType.ta.mjs";


/**
 * @summary DES_RN_Object
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DES-RN-Object  ::=  CHOICE {
 *          challenge        [1] IMPLICIT DRNType,
 *          response         [2] IMPLICIT DRNType}
 * ```
 */
export
type DES_RN_Object =
    { challenge: DRNType } /* CHOICE_ALT_ROOT */
    | { response: DRNType } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DES_RN_Object: $.ASN1Decoder<DES_RN_Object> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DES_RN_Object
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DES_RN_Object (el: _Element): DES_RN_Object {
    if (!_cached_decoder_for_DES_RN_Object) { _cached_decoder_for_DES_RN_Object = $._decode_inextensible_choice<DES_RN_Object>({
    "CONTEXT 1": [ "challenge", $._decode_implicit<DRNType>(() => _decode_DRNType) ],
    "CONTEXT 2": [ "response", $._decode_implicit<DRNType>(() => _decode_DRNType) ]
}); }
    return _cached_decoder_for_DES_RN_Object(el);
}

let _cached_encoder_for_DES_RN_Object: $.ASN1Encoder<DES_RN_Object> | null = null;

/**
 * @summary Encodes a(n) DES_RN_Object into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DES_RN_Object, encoded as an ASN.1 Element.
 */
export
function _encode_DES_RN_Object (value: DES_RN_Object, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DES_RN_Object) { _cached_encoder_for_DES_RN_Object = $._encode_choice<DES_RN_Object>({
    "challenge": $._encode_implicit(_TagClass.context, 1, () => _encode_DRNType, $.BER),
    "response": $._encode_implicit(_TagClass.context, 2, () => _encode_DRNType, $.BER),
}, $.BER); }
    return _cached_encoder_for_DES_RN_Object(value, elGetter);
}


/* eslint-enable */
