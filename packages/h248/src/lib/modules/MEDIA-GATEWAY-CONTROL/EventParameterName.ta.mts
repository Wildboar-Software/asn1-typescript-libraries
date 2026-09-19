/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Name, _decode_Name, _encode_Name } from "../MEDIA-GATEWAY-CONTROL/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../MEDIA-GATEWAY-CONTROL/Name.ta.mjs";


/**
 * @summary EventParameterName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventParameterName  ::=  Name
 * ```
 */
export
type EventParameterName = Name; // DefinedType

let _cached_decoder_for_EventParameterName: $.ASN1Decoder<EventParameterName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventParameterName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventParameterName (el: _Element): EventParameterName {
    if (!_cached_decoder_for_EventParameterName) { _cached_decoder_for_EventParameterName = _decode_Name; }
    return _cached_decoder_for_EventParameterName(el);
}

let _cached_encoder_for_EventParameterName: $.ASN1Encoder<EventParameterName> | null = null;

/**
 * @summary Encodes a(n) EventParameterName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventParameterName, encoded as an ASN.1 Element.
 */
export
function _encode_EventParameterName (value: EventParameterName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventParameterName) { _cached_encoder_for_EventParameterName = _encode_Name; }
    return _cached_encoder_for_EventParameterName(value, elGetter);
}


/* eslint-enable */
