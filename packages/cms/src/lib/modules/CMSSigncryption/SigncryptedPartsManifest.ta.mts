/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Signcrypted,
    _decode_Signcrypted,
    _encode_Signcrypted,
} from "../CMSSigncryption/Signcrypted.ta.mjs";

/**
 * @summary SigncryptedPartsManifest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SigncryptedPartsManifest  ::=  Signcrypted{{Manifest}}
 * ```
 */
export type SigncryptedPartsManifest = Signcrypted; // DefinedType


let _cached_decoder_for_SigncryptedPartsManifest: $.ASN1Decoder<SigncryptedPartsManifest> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SigncryptedPartsManifest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SigncryptedPartsManifest} The decoded data structure.
 */
export function _decode_SigncryptedPartsManifest(el: _Element): SigncryptedPartsManifest {
    if (!_cached_decoder_for_SigncryptedPartsManifest) {
        _cached_decoder_for_SigncryptedPartsManifest = _decode_Signcrypted;
    }
    return _cached_decoder_for_SigncryptedPartsManifest(el);
}


let _cached_encoder_for_SigncryptedPartsManifest: $.ASN1Encoder<SigncryptedPartsManifest> | null = null;


/**
 * @summary Encodes a(n) SigncryptedPartsManifest into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SigncryptedPartsManifest, encoded as an ASN.1 Element.
 */
export function _encode_SigncryptedPartsManifest(
    value: SigncryptedPartsManifest,
    elGetter: $.ASN1Encoder<SigncryptedPartsManifest>
): _Element {
    if (!_cached_encoder_for_SigncryptedPartsManifest) {
        _cached_encoder_for_SigncryptedPartsManifest = _encode_Signcrypted;
    }
    return _cached_encoder_for_SigncryptedPartsManifest(value, elGetter);
}


/* eslint-enable */
