/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element } from "@wildboar/asn1";
import { DetectionAction, _decode_DetectionAction, _encode_DetectionAction } from "../CSTA-make-predictive-call/DetectionAction.ta.mjs";



/**
 * @summary DefaultAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DefaultAction  ::=  DetectionAction
 * ```
 */
export
type DefaultAction = DetectionAction; // DefinedType

let _cached_decoder_for_DefaultAction: $.ASN1Decoder<DefaultAction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DefaultAction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DefaultAction (el: _Element): DefaultAction {
    if (!_cached_decoder_for_DefaultAction) { _cached_decoder_for_DefaultAction = _decode_DetectionAction; }
    return _cached_decoder_for_DefaultAction(el);
}

let _cached_encoder_for_DefaultAction: $.ASN1Encoder<DefaultAction> | null = null;

/**
 * @summary Encodes a(n) DefaultAction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefaultAction, encoded as an ASN.1 Element.
 */
export
function _encode_DefaultAction (value: DefaultAction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DefaultAction) { _cached_encoder_for_DefaultAction = _encode_DetectionAction; }
    return _cached_encoder_for_DefaultAction(value, elGetter);
}


/* eslint-enable */
