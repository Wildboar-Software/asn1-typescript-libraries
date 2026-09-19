/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TS36413CoarseUELocation, _decode_TS36413CoarseUELocation, _encode_TS36413CoarseUELocation } from "../TS33128Payloads/TS36413CoarseUELocation.ta.mjs";
// export { TS36413CoarseUELocation, _decode_TS36413CoarseUELocation, _encode_TS36413CoarseUELocation } from "../TS33128Payloads/TS36413CoarseUELocation.ta.mjs";


/**
 * @summary CoarseLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CoarseLocation  ::=  CHOICE
 * {
 *     tS36413CoarseUELocation [1] TS36413CoarseUELocation
 * }
 * ```
 */
export
type CoarseLocation =
    { tS36413CoarseUELocation: TS36413CoarseUELocation } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CoarseLocation: $.ASN1Decoder<CoarseLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CoarseLocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CoarseLocation (el: _Element): CoarseLocation {
    if (!_cached_decoder_for_CoarseLocation) { _cached_decoder_for_CoarseLocation = $._decode_inextensible_choice<CoarseLocation>({
    "CONTEXT 1": [ "tS36413CoarseUELocation", $._decode_implicit<TS36413CoarseUELocation>(() => _decode_TS36413CoarseUELocation) ]
}); }
    return _cached_decoder_for_CoarseLocation(el);
}

let _cached_encoder_for_CoarseLocation: $.ASN1Encoder<CoarseLocation> | null = null;

/**
 * @summary Encodes a(n) CoarseLocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CoarseLocation, encoded as an ASN.1 Element.
 */
export
function _encode_CoarseLocation (value: CoarseLocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CoarseLocation) { _cached_encoder_for_CoarseLocation = $._encode_choice<CoarseLocation>({
    "tS36413CoarseUELocation": $._encode_implicit(_TagClass.context, 1, () => _encode_TS36413CoarseUELocation, $.BER),
}, $.BER); }
    return _cached_encoder_for_CoarseLocation(value, elGetter);
}


/* eslint-enable */
