/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { QOSFlowList, _decode_QOSFlowList, _encode_QOSFlowList } from "../TS33128Payloads/QOSFlowList.ta.mjs";
// export { QOSFlowList, _decode_QOSFlowList, _encode_QOSFlowList } from "../TS33128Payloads/QOSFlowList.ta.mjs";


/**
 * @summary QOSFlowLists
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QOSFlowLists  ::=  SEQUENCE OF QOSFlowList
 * ```
 */
export
type QOSFlowLists = QOSFlowList[]; // SequenceOfType

let _cached_decoder_for_QOSFlowLists: $.ASN1Decoder<QOSFlowLists> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) QOSFlowLists
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_QOSFlowLists (el: _Element): QOSFlowLists {
    if (!_cached_decoder_for_QOSFlowLists) { _cached_decoder_for_QOSFlowLists = $._decodeSequenceOf<QOSFlowList>(() => _decode_QOSFlowList); }
    return _cached_decoder_for_QOSFlowLists(el);
}

let _cached_encoder_for_QOSFlowLists: $.ASN1Encoder<QOSFlowLists> | null = null;

/**
 * @summary Encodes a(n) QOSFlowLists into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QOSFlowLists, encoded as an ASN.1 Element.
 */
export
function _encode_QOSFlowLists (value: QOSFlowLists, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_QOSFlowLists) { _cached_encoder_for_QOSFlowLists = $._encodeSequenceOf<QOSFlowList>(() => _encode_QOSFlowList, $.BER); }
    return _cached_encoder_for_QOSFlowLists(value, elGetter);
}


/* eslint-enable */
