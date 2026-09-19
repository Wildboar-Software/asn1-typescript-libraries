/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ContextIDinList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContextIDinList  ::=  INTEGER(0..4294967295)
 * ```
 */
export
type ContextIDinList = INTEGER;

let _cached_decoder_for_ContextIDinList: $.ASN1Decoder<ContextIDinList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContextIDinList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ContextIDinList (el: _Element): ContextIDinList {
    if (!_cached_decoder_for_ContextIDinList) { _cached_decoder_for_ContextIDinList = $._decodeInteger; }
    return _cached_decoder_for_ContextIDinList(el);
}

let _cached_encoder_for_ContextIDinList: $.ASN1Encoder<ContextIDinList> | null = null;

/**
 * @summary Encodes a(n) ContextIDinList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContextIDinList, encoded as an ASN.1 Element.
 */
export
function _encode_ContextIDinList (value: ContextIDinList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ContextIDinList) { _cached_encoder_for_ContextIDinList = $._encodeInteger; }
    return _cached_encoder_for_ContextIDinList(value, elGetter);
}


/* eslint-enable */
