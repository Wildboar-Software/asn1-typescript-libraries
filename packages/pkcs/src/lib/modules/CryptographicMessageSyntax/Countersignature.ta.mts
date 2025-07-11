/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SignerInfo,
    _decode_SignerInfo,
    _encode_SignerInfo,
} from "../CryptographicMessageSyntax/SignerInfo.ta.mjs";

/**
 * @summary Countersignature
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Countersignature  ::=  SignerInfo
 * ```
 */
export type Countersignature = SignerInfo; // DefinedType


let _cached_decoder_for_Countersignature: $.ASN1Decoder<Countersignature> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Countersignature
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Countersignature} The decoded data structure.
 */
export function _decode_Countersignature(el: _Element): Countersignature {
    if (!_cached_decoder_for_Countersignature) {
        _cached_decoder_for_Countersignature = _decode_SignerInfo;
    }
    return _cached_decoder_for_Countersignature(el);
}


let _cached_encoder_for_Countersignature: $.ASN1Encoder<Countersignature> | null = null;


/**
 * @summary Encodes a(n) Countersignature into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Countersignature, encoded as an ASN.1 Element.
 */
export function _encode_Countersignature(
    value: Countersignature,
    elGetter: $.ASN1Encoder<Countersignature>
): _Element {
    if (!_cached_encoder_for_Countersignature) {
        _cached_encoder_for_Countersignature = _encode_SignerInfo;
    }
    return _cached_encoder_for_Countersignature(value, elGetter);
}


/* eslint-enable */
