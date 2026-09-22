/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ROS, _decode_ROS, _encode_ROS } from "../Facility-Information-Element-Components/ROS.ta.mjs";
// export { ROS, _decode_ROS, _encode_ROS } from "../Facility-Information-Element-Components/ROS.ta.mjs";


/**
 * @summary Components
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Components{OPERATION:Invokable, OPERATION:Returnable}  ::=  CHOICE {
 *   gfpROS  ROS{{GFPInvokeIDSet}, {Invokable}, {Returnable}}
 * }
 * ```
 */
export
type Components =
    { gfpROS: ROS } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Components: $.ASN1Decoder<Components> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Components
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Components (el: _Element): Components {
    if (!_cached_decoder_for_Components) { _cached_decoder_for_Components = $._decode_inextensible_choice<Components>({
    "CONTEXT 1": [ "gfpROS", _decode_ROS ],
    "CONTEXT 2": [ "gfpROS", _decode_ROS ],
    "CONTEXT 3": [ "gfpROS", _decode_ROS ],
    "CONTEXT 4": [ "gfpROS", _decode_ROS ]
}); }
    return _cached_decoder_for_Components(el);
}

let _cached_encoder_for_Components: $.ASN1Encoder<Components> | null = null;

/**
 * @summary Encodes a(n) Components into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Components, encoded as an ASN.1 Element.
 */
export
function _encode_Components (value: Components, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Components) { _cached_encoder_for_Components = $._encode_choice<Components>({
    "gfpROS": _encode_ROS,
}, $.BER); }
    return _cached_encoder_for_Components(value, elGetter);
}


/* eslint-enable */
