/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PackagesItem, _decode_PackagesItem, _encode_PackagesItem } from "../MEDIA-GATEWAY-CONTROL/PackagesItem.ta.mjs";
// export { PackagesItem, _decode_PackagesItem, _encode_PackagesItem } from "../MEDIA-GATEWAY-CONTROL/PackagesItem.ta.mjs";


/**
 * @summary PackagesDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PackagesDescriptor  ::=  SEQUENCE OF PackagesItem
 * ```
 */
export
type PackagesDescriptor = PackagesItem[]; // SequenceOfType

let _cached_decoder_for_PackagesDescriptor: $.ASN1Decoder<PackagesDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PackagesDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PackagesDescriptor (el: _Element): PackagesDescriptor {
    if (!_cached_decoder_for_PackagesDescriptor) { _cached_decoder_for_PackagesDescriptor = $._decodeSequenceOf<PackagesItem>(() => _decode_PackagesItem); }
    return _cached_decoder_for_PackagesDescriptor(el);
}

let _cached_encoder_for_PackagesDescriptor: $.ASN1Encoder<PackagesDescriptor> | null = null;

/**
 * @summary Encodes a(n) PackagesDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PackagesDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_PackagesDescriptor (value: PackagesDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PackagesDescriptor) { _cached_encoder_for_PackagesDescriptor = $._encodeSequenceOf<PackagesItem>(() => _encode_PackagesItem, $.BER); }
    return _cached_encoder_for_PackagesDescriptor(value, elGetter);
}


/* eslint-enable */
