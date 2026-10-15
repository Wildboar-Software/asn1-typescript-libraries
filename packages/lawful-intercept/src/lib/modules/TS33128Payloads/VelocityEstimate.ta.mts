/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { HorizontalVelocity, _decode_HorizontalVelocity, _encode_HorizontalVelocity } from "../TS33128Payloads/HorizontalVelocity.ta.mjs";
// export { HorizontalVelocity, _decode_HorizontalVelocity, _encode_HorizontalVelocity } from "../TS33128Payloads/HorizontalVelocity.ta.mjs";
import { HorizontalWithVerticalVelocity, _decode_HorizontalWithVerticalVelocity, _encode_HorizontalWithVerticalVelocity } from "../TS33128Payloads/HorizontalWithVerticalVelocity.ta.mjs";
// export { HorizontalWithVerticalVelocity, _decode_HorizontalWithVerticalVelocity, _encode_HorizontalWithVerticalVelocity } from "../TS33128Payloads/HorizontalWithVerticalVelocity.ta.mjs";
import { HorizontalVelocityWithUncertainty, _decode_HorizontalVelocityWithUncertainty, _encode_HorizontalVelocityWithUncertainty } from "../TS33128Payloads/HorizontalVelocityWithUncertainty.ta.mjs";
// export { HorizontalVelocityWithUncertainty, _decode_HorizontalVelocityWithUncertainty, _encode_HorizontalVelocityWithUncertainty } from "../TS33128Payloads/HorizontalVelocityWithUncertainty.ta.mjs";
import { HorizontalWithVerticalVelocityAndUncertainty, _decode_HorizontalWithVerticalVelocityAndUncertainty, _encode_HorizontalWithVerticalVelocityAndUncertainty } from "../TS33128Payloads/HorizontalWithVerticalVelocityAndUncertainty.ta.mjs";
// export { HorizontalWithVerticalVelocityAndUncertainty, _decode_HorizontalWithVerticalVelocityAndUncertainty, _encode_HorizontalWithVerticalVelocityAndUncertainty } from "../TS33128Payloads/HorizontalWithVerticalVelocityAndUncertainty.ta.mjs";


/**
 * @summary VelocityEstimate
 * @description
 * 
 * The VelocityEstimate type is derived from the data present in
 * VelocityEstimate type in TS 29.572 [24] clause 6.1.6.2.17.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.39.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VelocityEstimate  ::=  CHOICE
 * {
 *     horVelocity                         [1] HorizontalVelocity,
 *     horWithVertVelocity                 [2] HorizontalWithVerticalVelocity,
 *     horVelocityWithUncertainty          [3] HorizontalVelocityWithUncertainty,
 *     horWithVertVelocityAndUncertainty   [4] HorizontalWithVerticalVelocityAndUncertainty
 * }
 * ```
 */
export
type VelocityEstimate =
    /**
     * @description
     *
     * Velocity estimate including horizontal speed and bearing. Shall be
     * encoded as described in TS 29.572 [24] clause 6.1.6.2.18.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.39.
     */
    { horVelocity: HorizontalVelocity } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * Velocity estimate including horizontal speed and bearing, and also
     * vertical speed and vertical direction. Shall be encoded as described in
     * TS 29.572 [24] clause 6.1.6.2.19.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.39.
     */
    | { horWithVertVelocity: HorizontalWithVerticalVelocity } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * Velocity estimate including horizontal speed and bearing; it also
     * includes an uncertainty value. Shall be encoded as described in TS 29.572
     * [24] clause 6.1.6.2.20.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.39.
     */
    | { horVelocityWithUncertainty: HorizontalVelocityWithUncertainty } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * Velocity estimate including horizontal speed and bearing, and also
     * vertical speed and vertical direction; it also includes uncertainty value
     * for horizontal and vertical speeds. Shall be encoded as described in TS
     * 29.572 [24] clause 6.1.6.2.21.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.39.
     */
    | { horWithVertVelocityAndUncertainty: HorizontalWithVerticalVelocityAndUncertainty } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_VelocityEstimate: $.ASN1Decoder<VelocityEstimate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VelocityEstimate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VelocityEstimate (el: _Element): VelocityEstimate {
    if (!_cached_decoder_for_VelocityEstimate) { _cached_decoder_for_VelocityEstimate = $._decode_extensible_choice<VelocityEstimate>({
    "CONTEXT 1": [ "horVelocity", $._decode_implicit<HorizontalVelocity>(() => _decode_HorizontalVelocity) ],
    "CONTEXT 2": [ "horWithVertVelocity", $._decode_implicit<HorizontalWithVerticalVelocity>(() => _decode_HorizontalWithVerticalVelocity) ],
    "CONTEXT 3": [ "horVelocityWithUncertainty", $._decode_implicit<HorizontalVelocityWithUncertainty>(() => _decode_HorizontalVelocityWithUncertainty) ],
    "CONTEXT 4": [ "horWithVertVelocityAndUncertainty", $._decode_implicit<HorizontalWithVerticalVelocityAndUncertainty>(() => _decode_HorizontalWithVerticalVelocityAndUncertainty) ]
}); }
    return _cached_decoder_for_VelocityEstimate(el);
}

let _cached_encoder_for_VelocityEstimate: $.ASN1Encoder<VelocityEstimate> | null = null;

/**
 * @summary Encodes a(n) VelocityEstimate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VelocityEstimate, encoded as an ASN.1 Element.
 */
export
function _encode_VelocityEstimate (value: VelocityEstimate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VelocityEstimate) { _cached_encoder_for_VelocityEstimate = $._encode_choice<VelocityEstimate>({
    "horVelocity": $._encode_implicit(_TagClass.context, 1, () => _encode_HorizontalVelocity, $.BER),
    "horWithVertVelocity": $._encode_implicit(_TagClass.context, 2, () => _encode_HorizontalWithVerticalVelocity, $.BER),
    "horVelocityWithUncertainty": $._encode_implicit(_TagClass.context, 3, () => _encode_HorizontalVelocityWithUncertainty, $.BER),
    "horWithVertVelocityAndUncertainty": $._encode_implicit(_TagClass.context, 4, () => _encode_HorizontalWithVerticalVelocityAndUncertainty, $.BER),
}, $.BER); }
    return _cached_encoder_for_VelocityEstimate(value, elGetter);
}


/* eslint-enable */
