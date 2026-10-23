/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MasterOrShadowAccessPoint, _decode_MasterOrShadowAccessPoint, _encode_MasterOrShadowAccessPoint } from "../DistributedOperations/MasterOrShadowAccessPoint.ta.mjs";
// export { MasterOrShadowAccessPoint, _decode_MasterOrShadowAccessPoint, _encode_MasterOrShadowAccessPoint } from "../DistributedOperations/MasterOrShadowAccessPoint.ta.mjs";


/**
 * @summary IN_MasterAndShadowAccessPoints
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-MasterAndShadowAccessPoints  ::= 
 *   MasterOrShadowAccessPoint
 * ```
 */
export
type IN_MasterAndShadowAccessPoints = MasterOrShadowAccessPoint; // DefinedType

let _cached_decoder_for_IN_MasterAndShadowAccessPoints: $.ASN1Decoder<IN_MasterAndShadowAccessPoints> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IN_MasterAndShadowAccessPoints
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IN_MasterAndShadowAccessPoints (el: _Element): IN_MasterAndShadowAccessPoints {
    if (!_cached_decoder_for_IN_MasterAndShadowAccessPoints) { _cached_decoder_for_IN_MasterAndShadowAccessPoints = _decode_MasterOrShadowAccessPoint; }
    return _cached_decoder_for_IN_MasterAndShadowAccessPoints(el);
}

let _cached_encoder_for_IN_MasterAndShadowAccessPoints: $.ASN1Encoder<IN_MasterAndShadowAccessPoints> | null = null;

/**
 * @summary Encodes a(n) IN_MasterAndShadowAccessPoints into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_MasterAndShadowAccessPoints, encoded as an ASN.1 Element.
 */
export
function _encode_IN_MasterAndShadowAccessPoints (value: IN_MasterAndShadowAccessPoints, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IN_MasterAndShadowAccessPoints) { _cached_encoder_for_IN_MasterAndShadowAccessPoints = _encode_MasterOrShadowAccessPoint; }
    return _cached_encoder_for_IN_MasterAndShadowAccessPoints(value, elGetter);
}


/* eslint-enable */
