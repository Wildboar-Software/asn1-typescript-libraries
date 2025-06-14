/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION KeyDerivationMethod */
/**
 * @summary KeyDerivationMethod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyDerivationMethod  ::=  OBJECT IDENTIFIER
 * ```
 */
export type KeyDerivationMethod = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION KeyDerivationMethod */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyDerivationMethod */
let _cached_decoder_for_KeyDerivationMethod: $.ASN1Decoder<KeyDerivationMethod> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyDerivationMethod */

/* START_OF_SYMBOL_DEFINITION _decode_KeyDerivationMethod */
/**
 * @summary Decodes an ASN.1 element into a(n) KeyDerivationMethod
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyDerivationMethod} The decoded data structure.
 */
export function _decode_KeyDerivationMethod(el: _Element) {
    if (!_cached_decoder_for_KeyDerivationMethod) {
        _cached_decoder_for_KeyDerivationMethod = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_KeyDerivationMethod(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KeyDerivationMethod */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyDerivationMethod */
let _cached_encoder_for_KeyDerivationMethod: $.ASN1Encoder<KeyDerivationMethod> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyDerivationMethod */

/* START_OF_SYMBOL_DEFINITION _encode_KeyDerivationMethod */
/**
 * @summary Encodes a(n) KeyDerivationMethod into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyDerivationMethod, encoded as an ASN.1 Element.
 */
export function _encode_KeyDerivationMethod(
    value: KeyDerivationMethod,
    elGetter: $.ASN1Encoder<KeyDerivationMethod>
) {
    if (!_cached_encoder_for_KeyDerivationMethod) {
        _cached_encoder_for_KeyDerivationMethod = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_KeyDerivationMethod(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyDerivationMethod */

/* eslint-enable */
