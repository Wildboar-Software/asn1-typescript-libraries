/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_CallTypes_Item, _encode_CallTypes_Item, type CallTypes_Item } from "../CSChargingDataTypes/CallTypes-Item.ta.mjs";


/**
 * @summary CallTypes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallTypes   ::=  SET  OF
 *    INTEGER {
 *       mobileOriginated    ( 0 ),
 *       mobileTerminated    ( 1 )}
 * ```
 */
export
type CallTypes = CallTypes_Item[]; // SetOfType

let _cached_decoder_for_CallTypes: $.ASN1Decoder<CallTypes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallTypes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallTypes (el: _Element): CallTypes {
    if (!_cached_decoder_for_CallTypes) { _cached_decoder_for_CallTypes = $._decodeSetOf<CallTypes_Item>(() => _decode_CallTypes_Item); }
    return _cached_decoder_for_CallTypes(el);
}

let _cached_encoder_for_CallTypes: $.ASN1Encoder<CallTypes> | null = null;

/**
 * @summary Encodes a(n) CallTypes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallTypes, encoded as an ASN.1 Element.
 */
export
function _encode_CallTypes (value: CallTypes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallTypes) { _cached_encoder_for_CallTypes = $._encodeSetOf<CallTypes_Item>(() => _encode_CallTypes_Item, $.BER); }
    return _cached_encoder_for_CallTypes(value, elGetter);
}


/* eslint-enable */
