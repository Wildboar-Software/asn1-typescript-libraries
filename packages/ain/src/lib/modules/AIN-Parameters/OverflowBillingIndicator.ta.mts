/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BillingIndicator, _decode_BillingIndicator, _encode_BillingIndicator } from "../AIN-Parameters/BillingIndicator.ta.mjs";
// export { BillingIndicator, _decode_BillingIndicator, _encode_BillingIndicator } from "../AIN-Parameters/BillingIndicator.ta.mjs";


/**
 * @summary OverflowBillingIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OverflowBillingIndicator  ::=  [38] IMPLICIT BillingIndicator
 * ```
 */
export
type OverflowBillingIndicator = BillingIndicator; // DefinedType

let _cached_decoder_for_OverflowBillingIndicator: $.ASN1Decoder<OverflowBillingIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OverflowBillingIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OverflowBillingIndicator (el: _Element): OverflowBillingIndicator {
    if (!_cached_decoder_for_OverflowBillingIndicator) { _cached_decoder_for_OverflowBillingIndicator = $._decode_implicit<OverflowBillingIndicator>(() => _decode_BillingIndicator); }
    return _cached_decoder_for_OverflowBillingIndicator(el);
}

let _cached_encoder_for_OverflowBillingIndicator: $.ASN1Encoder<OverflowBillingIndicator> | null = null;

/**
 * @summary Encodes a(n) OverflowBillingIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OverflowBillingIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_OverflowBillingIndicator (value: OverflowBillingIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OverflowBillingIndicator) { _cached_encoder_for_OverflowBillingIndicator = $._encode_implicit(_TagClass.context, 38, () => _encode_BillingIndicator, $.BER); }
    return _cached_encoder_for_OverflowBillingIndicator(value, elGetter);
}


/* eslint-enable */
