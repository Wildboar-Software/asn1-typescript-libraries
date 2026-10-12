/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CAGID, _decode_CAGID, _encode_CAGID } from "../TS33128Payloads/CAGID.ta.mjs";
// export { CAGID, _decode_CAGID, _encode_CAGID } from "../TS33128Payloads/CAGID.ta.mjs";


/**
 * @summary CellCAGList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CellCAGList  ::=  SEQUENCE (SIZE(1..MAX)) OF CAGID
 * ```
 */
export
type CellCAGList = CAGID[]; // SequenceOfType

let _cached_decoder_for_CellCAGList: $.ASN1Decoder<CellCAGList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CellCAGList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CellCAGList (el: _Element): CellCAGList {
    if (!_cached_decoder_for_CellCAGList) { _cached_decoder_for_CellCAGList = $._decodeSequenceOf<CAGID>(() => _decode_CAGID); }
    return _cached_decoder_for_CellCAGList(el);
}

let _cached_encoder_for_CellCAGList: $.ASN1Encoder<CellCAGList> | null = null;

/**
 * @summary Encodes a(n) CellCAGList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CellCAGList, encoded as an ASN.1 Element.
 */
export
function _encode_CellCAGList (value: CellCAGList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CellCAGList) { _cached_encoder_for_CellCAGList = $._encodeSequenceOf<CAGID>(() => _encode_CAGID, $.BER); }
    return _cached_encoder_for_CellCAGList(value, elGetter);
}


/* eslint-enable */
