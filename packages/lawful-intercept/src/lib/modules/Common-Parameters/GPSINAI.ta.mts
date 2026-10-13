/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NAI, _decode_NAI, _encode_NAI } from "../Common-Parameters/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../Common-Parameters/NAI.ta.mjs";


/**
 * @summary GPSINAI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPSINAI  ::=  NAI
 * ```
 */
export
type GPSINAI = NAI; // DefinedType

let _cached_decoder_for_GPSINAI: $.ASN1Decoder<GPSINAI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GPSINAI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GPSINAI (el: _Element): GPSINAI {
    if (!_cached_decoder_for_GPSINAI) { _cached_decoder_for_GPSINAI = _decode_NAI; }
    return _cached_decoder_for_GPSINAI(el);
}

let _cached_encoder_for_GPSINAI: $.ASN1Encoder<GPSINAI> | null = null;

/**
 * @summary Encodes a(n) GPSINAI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GPSINAI, encoded as an ASN.1 Element.
 */
export
function _encode_GPSINAI (value: GPSINAI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GPSINAI) { _cached_encoder_for_GPSINAI = _encode_NAI; }
    return _cached_encoder_for_GPSINAI(value, elGetter);
}


/* eslint-enable */
