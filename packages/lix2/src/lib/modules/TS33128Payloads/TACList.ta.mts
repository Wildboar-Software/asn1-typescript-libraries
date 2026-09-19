/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TAC, _decode_TAC, _encode_TAC } from "../TS33128Payloads/TAC.ta.mjs";
// export { TAC, _decode_TAC, _encode_TAC } from "../TS33128Payloads/TAC.ta.mjs";


/**
 * @summary TACList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TACList  ::=  SEQUENCE OF TAC
 * ```
 */
export
type TACList = TAC[]; // SequenceOfType

let _cached_decoder_for_TACList: $.ASN1Decoder<TACList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TACList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TACList (el: _Element): TACList {
    if (!_cached_decoder_for_TACList) { _cached_decoder_for_TACList = $._decodeSequenceOf<TAC>(() => _decode_TAC); }
    return _cached_decoder_for_TACList(el);
}

let _cached_encoder_for_TACList: $.ASN1Encoder<TACList> | null = null;

/**
 * @summary Encodes a(n) TACList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TACList, encoded as an ASN.1 Element.
 */
export
function _encode_TACList (value: TACList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TACList) { _cached_encoder_for_TACList = $._encodeSequenceOf<TAC>(() => _encode_TAC, $.BER); }
    return _cached_encoder_for_TACList(value, elGetter);
}


/* eslint-enable */
