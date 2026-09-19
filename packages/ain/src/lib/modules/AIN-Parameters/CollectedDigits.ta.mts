/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";
// export { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";


/**
 * @summary CollectedDigits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CollectedDigits  ::=  [23] IMPLICIT AINDigits
 * ```
 */
export
type CollectedDigits = AINDigits; // DefinedType

let _cached_decoder_for_CollectedDigits: $.ASN1Decoder<CollectedDigits> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CollectedDigits
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CollectedDigits (el: _Element): CollectedDigits {
    if (!_cached_decoder_for_CollectedDigits) { _cached_decoder_for_CollectedDigits = $._decode_implicit<CollectedDigits>(() => _decode_AINDigits); }
    return _cached_decoder_for_CollectedDigits(el);
}

let _cached_encoder_for_CollectedDigits: $.ASN1Encoder<CollectedDigits> | null = null;

/**
 * @summary Encodes a(n) CollectedDigits into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CollectedDigits, encoded as an ASN.1 Element.
 */
export
function _encode_CollectedDigits (value: CollectedDigits, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CollectedDigits) { _cached_encoder_for_CollectedDigits = $._encode_implicit(_TagClass.context, 23, () => _encode_AINDigits, $.BER); }
    return _cached_encoder_for_CollectedDigits(value, elGetter);
}


/* eslint-enable */
