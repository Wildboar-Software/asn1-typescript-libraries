/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BillingIndicator, _decode_BillingIndicator, _encode_BillingIndicator } from "../AIN-Parameters/BillingIndicator.ta.mjs";
// export { BillingIndicator, _decode_BillingIndicator, _encode_BillingIndicator } from "../AIN-Parameters/BillingIndicator.ta.mjs";


/**
 * @summary PrimaryBillingIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrimaryBillingIndicator  ::=  [40] IMPLICIT BillingIndicator
 * ```
 */
export
type PrimaryBillingIndicator = BillingIndicator; // DefinedType

let _cached_decoder_for_PrimaryBillingIndicator: $.ASN1Decoder<PrimaryBillingIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrimaryBillingIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrimaryBillingIndicator (el: _Element): PrimaryBillingIndicator {
    if (!_cached_decoder_for_PrimaryBillingIndicator) { _cached_decoder_for_PrimaryBillingIndicator = $._decode_implicit<PrimaryBillingIndicator>(() => _decode_BillingIndicator); }
    return _cached_decoder_for_PrimaryBillingIndicator(el);
}

let _cached_encoder_for_PrimaryBillingIndicator: $.ASN1Encoder<PrimaryBillingIndicator> | null = null;

/**
 * @summary Encodes a(n) PrimaryBillingIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrimaryBillingIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_PrimaryBillingIndicator (value: PrimaryBillingIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrimaryBillingIndicator) { _cached_encoder_for_PrimaryBillingIndicator = $._encode_implicit(_TagClass.context, 40, () => _encode_BillingIndicator, $.BER); }
    return _cached_encoder_for_PrimaryBillingIndicator(value, elGetter);
}


/* eslint-enable */
