/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MMEServedGUMMEI, _decode_MMEServedGUMMEI, _encode_MMEServedGUMMEI } from "../TS33128Payloads/MMEServedGUMMEI.ta.mjs";
// export { MMEServedGUMMEI, _decode_MMEServedGUMMEI, _encode_MMEServedGUMMEI } from "../TS33128Payloads/MMEServedGUMMEI.ta.mjs";


/**
 * @summary MMEServedGUMMEIList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEServedGUMMEIList  ::=  SEQUENCE(SIZE (1..MAX)) OF MMEServedGUMMEI
 * ```
 */
export
type MMEServedGUMMEIList = MMEServedGUMMEI[]; // SequenceOfType

let _cached_decoder_for_MMEServedGUMMEIList: $.ASN1Decoder<MMEServedGUMMEIList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMEServedGUMMEIList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMEServedGUMMEIList (el: _Element): MMEServedGUMMEIList {
    if (!_cached_decoder_for_MMEServedGUMMEIList) { _cached_decoder_for_MMEServedGUMMEIList = $._decodeSequenceOf<MMEServedGUMMEI>(() => _decode_MMEServedGUMMEI); }
    return _cached_decoder_for_MMEServedGUMMEIList(el);
}

let _cached_encoder_for_MMEServedGUMMEIList: $.ASN1Encoder<MMEServedGUMMEIList> | null = null;

/**
 * @summary Encodes a(n) MMEServedGUMMEIList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMEServedGUMMEIList, encoded as an ASN.1 Element.
 */
export
function _encode_MMEServedGUMMEIList (value: MMEServedGUMMEIList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMEServedGUMMEIList) { _cached_encoder_for_MMEServedGUMMEIList = $._encodeSequenceOf<MMEServedGUMMEI>(() => _encode_MMEServedGUMMEI, $.BER); }
    return _cached_encoder_for_MMEServedGUMMEIList(value, elGetter);
}


/* eslint-enable */
