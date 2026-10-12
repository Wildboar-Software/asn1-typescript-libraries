/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CSGID, _decode_CSGID, _encode_CSGID } from "../TS33128Payloads/CSGID.ta.mjs";
// export { CSGID, _decode_CSGID, _encode_CSGID } from "../TS33128Payloads/CSGID.ta.mjs";


/**
 * @summary CSGIDList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSGIDList  ::=  SEQUENCE SIZE(1..MAX) OF CSGID
 * ```
 */
export
type CSGIDList = CSGID[]; // SequenceOfType

let _cached_decoder_for_CSGIDList: $.ASN1Decoder<CSGIDList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CSGIDList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CSGIDList (el: _Element): CSGIDList {
    if (!_cached_decoder_for_CSGIDList) { _cached_decoder_for_CSGIDList = $._decodeSequenceOf<CSGID>(() => _decode_CSGID); }
    return _cached_decoder_for_CSGIDList(el);
}

let _cached_encoder_for_CSGIDList: $.ASN1Encoder<CSGIDList> | null = null;

/**
 * @summary Encodes a(n) CSGIDList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CSGIDList, encoded as an ASN.1 Element.
 */
export
function _encode_CSGIDList (value: CSGIDList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CSGIDList) { _cached_encoder_for_CSGIDList = $._encodeSequenceOf<CSGID>(() => _encode_CSGID, $.BER); }
    return _cached_encoder_for_CSGIDList(value, elGetter);
}


/* eslint-enable */
