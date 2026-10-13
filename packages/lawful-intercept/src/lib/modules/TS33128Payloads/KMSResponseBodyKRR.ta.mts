/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";
// export { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";


/**
 * @summary KMSResponseBodyKRR
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KMSResponseBodyKRR  ::=  XMLType
 * ```
 */
export
type KMSResponseBodyKRR = XMLType; // DefinedType

let _cached_decoder_for_KMSResponseBodyKRR: $.ASN1Decoder<KMSResponseBodyKRR> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KMSResponseBodyKRR
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KMSResponseBodyKRR (el: _Element): KMSResponseBodyKRR {
    if (!_cached_decoder_for_KMSResponseBodyKRR) { _cached_decoder_for_KMSResponseBodyKRR = _decode_XMLType; }
    return _cached_decoder_for_KMSResponseBodyKRR(el);
}

let _cached_encoder_for_KMSResponseBodyKRR: $.ASN1Encoder<KMSResponseBodyKRR> | null = null;

/**
 * @summary Encodes a(n) KMSResponseBodyKRR into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KMSResponseBodyKRR, encoded as an ASN.1 Element.
 */
export
function _encode_KMSResponseBodyKRR (value: KMSResponseBodyKRR, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KMSResponseBodyKRR) { _cached_encoder_for_KMSResponseBodyKRR = _encode_XMLType; }
    return _cached_encoder_for_KMSResponseBodyKRR(value, elGetter);
}


/* eslint-enable */
