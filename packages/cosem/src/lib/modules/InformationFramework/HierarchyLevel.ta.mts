/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HierarchyLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HierarchyLevel  ::=  INTEGER
 * ```
 */
export
type HierarchyLevel = INTEGER;

let _cached_decoder_for_HierarchyLevel: $.ASN1Decoder<HierarchyLevel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HierarchyLevel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HierarchyLevel (el: _Element): HierarchyLevel {
    if (!_cached_decoder_for_HierarchyLevel) { _cached_decoder_for_HierarchyLevel = $._decodeInteger; }
    return _cached_decoder_for_HierarchyLevel(el);
}

let _cached_encoder_for_HierarchyLevel: $.ASN1Encoder<HierarchyLevel> | null = null;

/**
 * @summary Encodes a(n) HierarchyLevel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HierarchyLevel, encoded as an ASN.1 Element.
 */
export
function _encode_HierarchyLevel (value: HierarchyLevel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HierarchyLevel) { _cached_encoder_for_HierarchyLevel = $._encodeInteger; }
    return _cached_encoder_for_HierarchyLevel(value, elGetter);
}


/* eslint-enable */
