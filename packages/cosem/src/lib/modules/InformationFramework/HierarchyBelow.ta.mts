/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HierarchyBelow
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HierarchyBelow  ::=  BOOLEAN
 * ```
 */
export
type HierarchyBelow = BOOLEAN; // BooleanType

let _cached_decoder_for_HierarchyBelow: $.ASN1Decoder<HierarchyBelow> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HierarchyBelow
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HierarchyBelow (el: _Element): HierarchyBelow {
    if (!_cached_decoder_for_HierarchyBelow) { _cached_decoder_for_HierarchyBelow = $._decodeBoolean; }
    return _cached_decoder_for_HierarchyBelow(el);
}

let _cached_encoder_for_HierarchyBelow: $.ASN1Encoder<HierarchyBelow> | null = null;

/**
 * @summary Encodes a(n) HierarchyBelow into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HierarchyBelow, encoded as an ASN.1 Element.
 */
export
function _encode_HierarchyBelow (value: HierarchyBelow, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HierarchyBelow) { _cached_encoder_for_HierarchyBelow = $._encodeBoolean; }
    return _cached_encoder_for_HierarchyBelow(value, elGetter);
}


/* eslint-enable */
