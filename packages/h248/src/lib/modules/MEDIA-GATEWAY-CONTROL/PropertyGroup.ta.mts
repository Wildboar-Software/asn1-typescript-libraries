/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PropertyParm, _decode_PropertyParm, _encode_PropertyParm } from "../MEDIA-GATEWAY-CONTROL/PropertyParm.ta.mjs";
// export { PropertyParm, _decode_PropertyParm, _encode_PropertyParm } from "../MEDIA-GATEWAY-CONTROL/PropertyParm.ta.mjs";


/**
 * @summary PropertyGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PropertyGroup  ::=  SEQUENCE OF PropertyParm
 * ```
 */
export
type PropertyGroup = PropertyParm[]; // SequenceOfType

let _cached_decoder_for_PropertyGroup: $.ASN1Decoder<PropertyGroup> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PropertyGroup
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PropertyGroup (el: _Element): PropertyGroup {
    if (!_cached_decoder_for_PropertyGroup) { _cached_decoder_for_PropertyGroup = $._decodeSequenceOf<PropertyParm>(() => _decode_PropertyParm); }
    return _cached_decoder_for_PropertyGroup(el);
}

let _cached_encoder_for_PropertyGroup: $.ASN1Encoder<PropertyGroup> | null = null;

/**
 * @summary Encodes a(n) PropertyGroup into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PropertyGroup, encoded as an ASN.1 Element.
 */
export
function _encode_PropertyGroup (value: PropertyGroup, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PropertyGroup) { _cached_encoder_for_PropertyGroup = $._encodeSequenceOf<PropertyParm>(() => _encode_PropertyParm, $.BER); }
    return _cached_encoder_for_PropertyGroup(value, elGetter);
}


/* eslint-enable */
