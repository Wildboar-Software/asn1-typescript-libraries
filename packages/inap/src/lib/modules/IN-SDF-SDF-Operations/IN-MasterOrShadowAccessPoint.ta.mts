/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MasterOrShadowAccessPoint, _decode_MasterOrShadowAccessPoint, _encode_MasterOrShadowAccessPoint } from "../DistributedOperations/MasterOrShadowAccessPoint.ta.mjs";
// export { MasterOrShadowAccessPoint, _decode_MasterOrShadowAccessPoint, _encode_MasterOrShadowAccessPoint } from "../DistributedOperations/MasterOrShadowAccessPoint.ta.mjs";


/**
 * @summary IN_MasterOrShadowAccessPoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-MasterOrShadowAccessPoint  ::= 
 *   MasterOrShadowAccessPoint(WITH COMPONENTS {
 *                               ...,
 *                               protocolInformation  ABSENT
 *                             })
 * ```
 */
export
type IN_MasterOrShadowAccessPoint = MasterOrShadowAccessPoint; // DefinedType

let _cached_decoder_for_IN_MasterOrShadowAccessPoint: $.ASN1Decoder<IN_MasterOrShadowAccessPoint> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IN_MasterOrShadowAccessPoint
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IN_MasterOrShadowAccessPoint (el: _Element): IN_MasterOrShadowAccessPoint {
    if (!_cached_decoder_for_IN_MasterOrShadowAccessPoint) { _cached_decoder_for_IN_MasterOrShadowAccessPoint = _decode_MasterOrShadowAccessPoint; }
    return _cached_decoder_for_IN_MasterOrShadowAccessPoint(el);
}

let _cached_encoder_for_IN_MasterOrShadowAccessPoint: $.ASN1Encoder<IN_MasterOrShadowAccessPoint> | null = null;

/**
 * @summary Encodes a(n) IN_MasterOrShadowAccessPoint into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_MasterOrShadowAccessPoint, encoded as an ASN.1 Element.
 */
export
function _encode_IN_MasterOrShadowAccessPoint (value: IN_MasterOrShadowAccessPoint, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IN_MasterOrShadowAccessPoint) { _cached_encoder_for_IN_MasterOrShadowAccessPoint = _encode_MasterOrShadowAccessPoint; }
    return _cached_encoder_for_IN_MasterOrShadowAccessPoint(value, elGetter);
}


/* eslint-enable */
