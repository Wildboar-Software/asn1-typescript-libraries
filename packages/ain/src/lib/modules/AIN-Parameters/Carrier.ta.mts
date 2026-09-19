/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CarrierFormat, _decode_CarrierFormat, _encode_CarrierFormat } from "../AIN-Parameters/CarrierFormat.ta.mjs";
// export { CarrierFormat, _decode_CarrierFormat, _encode_CarrierFormat } from "../AIN-Parameters/CarrierFormat.ta.mjs";


/**
 * @summary Carrier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Carrier  ::=  [41] IMPLICIT CarrierFormat
 * ```
 */
export
type Carrier = CarrierFormat; // DefinedType

let _cached_decoder_for_Carrier: $.ASN1Decoder<Carrier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Carrier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Carrier (el: _Element): Carrier {
    if (!_cached_decoder_for_Carrier) { _cached_decoder_for_Carrier = $._decode_implicit<Carrier>(() => _decode_CarrierFormat); }
    return _cached_decoder_for_Carrier(el);
}

let _cached_encoder_for_Carrier: $.ASN1Encoder<Carrier> | null = null;

/**
 * @summary Encodes a(n) Carrier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Carrier, encoded as an ASN.1 Element.
 */
export
function _encode_Carrier (value: Carrier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Carrier) { _cached_encoder_for_Carrier = $._encode_implicit(_TagClass.context, 41, () => _encode_CarrierFormat, $.BER); }
    return _cached_encoder_for_Carrier(value, elGetter);
}


/* eslint-enable */
