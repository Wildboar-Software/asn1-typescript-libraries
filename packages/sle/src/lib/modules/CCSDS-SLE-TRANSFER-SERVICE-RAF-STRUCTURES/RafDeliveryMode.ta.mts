/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_DeliveryMode, _encode_DeliveryMode, DeliveryMode } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/DeliveryMode.ta.mjs";
// export { DeliveryMode, DeliveryMode_rtnTimelyOnline /* IMPORTED_LONG_NAMED_INTEGER */, rtnTimelyOnline /* IMPORTED_SHORT_NAMED_INTEGER */, DeliveryMode_rtnCompleteOnline /* IMPORTED_LONG_NAMED_INTEGER */, rtnCompleteOnline /* IMPORTED_SHORT_NAMED_INTEGER */, DeliveryMode_rtnOffline /* IMPORTED_LONG_NAMED_INTEGER */, rtnOffline /* IMPORTED_SHORT_NAMED_INTEGER */, DeliveryMode_fwdOnline /* IMPORTED_LONG_NAMED_INTEGER */, fwdOnline /* IMPORTED_SHORT_NAMED_INTEGER */, DeliveryMode_fwdOffline /* IMPORTED_LONG_NAMED_INTEGER */, fwdOffline /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DeliveryMode, _encode_DeliveryMode } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/DeliveryMode.ta.mjs";


/**
 * @summary RafDeliveryMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RafDeliveryMode              ::=  DeliveryMode
 * (   rtnTimelyOnline
 * |   rtnCompleteOnline
 * |   rtnOffline
 * )
 * ```
 */
export
type RafDeliveryMode = DeliveryMode; // DefinedType

let _cached_decoder_for_RafDeliveryMode: $.ASN1Decoder<RafDeliveryMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RafDeliveryMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RafDeliveryMode (el: _Element): RafDeliveryMode {
    if (!_cached_decoder_for_RafDeliveryMode) { _cached_decoder_for_RafDeliveryMode = _decode_DeliveryMode; }
    return _cached_decoder_for_RafDeliveryMode(el);
}

let _cached_encoder_for_RafDeliveryMode: $.ASN1Encoder<RafDeliveryMode> | null = null;

/**
 * @summary Encodes a(n) RafDeliveryMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RafDeliveryMode, encoded as an ASN.1 Element.
 */
export
function _encode_RafDeliveryMode (value: RafDeliveryMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RafDeliveryMode) { _cached_encoder_for_RafDeliveryMode = _encode_DeliveryMode; }
    return _cached_encoder_for_RafDeliveryMode(value, elGetter);
}


/* eslint-enable */
