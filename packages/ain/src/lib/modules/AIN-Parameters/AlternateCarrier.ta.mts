/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CarrierFormat, _decode_CarrierFormat, _encode_CarrierFormat } from "../AIN-Parameters/CarrierFormat.ta.mjs";
// export { CarrierFormat, _decode_CarrierFormat, _encode_CarrierFormat } from "../AIN-Parameters/CarrierFormat.ta.mjs";


/**
 * @summary AlternateCarrier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlternateCarrier  ::=  [4] IMPLICIT CarrierFormat
 * ```
 */
export
type AlternateCarrier = CarrierFormat; // DefinedType

let _cached_decoder_for_AlternateCarrier: $.ASN1Decoder<AlternateCarrier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlternateCarrier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlternateCarrier (el: _Element): AlternateCarrier {
    if (!_cached_decoder_for_AlternateCarrier) { _cached_decoder_for_AlternateCarrier = $._decode_implicit<AlternateCarrier>(() => _decode_CarrierFormat); }
    return _cached_decoder_for_AlternateCarrier(el);
}

let _cached_encoder_for_AlternateCarrier: $.ASN1Encoder<AlternateCarrier> | null = null;

/**
 * @summary Encodes a(n) AlternateCarrier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlternateCarrier, encoded as an ASN.1 Element.
 */
export
function _encode_AlternateCarrier (value: AlternateCarrier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlternateCarrier) { _cached_encoder_for_AlternateCarrier = $._encode_implicit(_TagClass.context, 4, () => _encode_CarrierFormat, $.BER); }
    return _cached_encoder_for_AlternateCarrier(value, elGetter);
}


/* eslint-enable */
