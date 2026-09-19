/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BillingIndicator, _decode_BillingIndicator, _encode_BillingIndicator } from "../AIN-Parameters/BillingIndicator.ta.mjs";
// export { BillingIndicator, _decode_BillingIndicator, _encode_BillingIndicator } from "../AIN-Parameters/BillingIndicator.ta.mjs";


/**
 * @summary AlternateBillingIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlternateBillingIndicator  ::=  [3] IMPLICIT BillingIndicator
 * ```
 */
export
type AlternateBillingIndicator = BillingIndicator; // DefinedType

let _cached_decoder_for_AlternateBillingIndicator: $.ASN1Decoder<AlternateBillingIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlternateBillingIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlternateBillingIndicator (el: _Element): AlternateBillingIndicator {
    if (!_cached_decoder_for_AlternateBillingIndicator) { _cached_decoder_for_AlternateBillingIndicator = $._decode_implicit<AlternateBillingIndicator>(() => _decode_BillingIndicator); }
    return _cached_decoder_for_AlternateBillingIndicator(el);
}

let _cached_encoder_for_AlternateBillingIndicator: $.ASN1Encoder<AlternateBillingIndicator> | null = null;

/**
 * @summary Encodes a(n) AlternateBillingIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlternateBillingIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_AlternateBillingIndicator (value: AlternateBillingIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlternateBillingIndicator) { _cached_encoder_for_AlternateBillingIndicator = $._encode_implicit(_TagClass.context, 3, () => _encode_BillingIndicator, $.BER); }
    return _cached_encoder_for_AlternateBillingIndicator(value, elGetter);
}


/* eslint-enable */
