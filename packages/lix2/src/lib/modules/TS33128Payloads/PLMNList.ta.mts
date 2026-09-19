/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";


/**
 * @summary PLMNList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PLMNList  ::=  SEQUENCE (SIZE(1..MAX)) OF PLMNID
 * ```
 */
export
type PLMNList = PLMNID[]; // SequenceOfType

let _cached_decoder_for_PLMNList: $.ASN1Decoder<PLMNList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PLMNList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PLMNList (el: _Element): PLMNList {
    if (!_cached_decoder_for_PLMNList) { _cached_decoder_for_PLMNList = $._decodeSequenceOf<PLMNID>(() => _decode_PLMNID); }
    return _cached_decoder_for_PLMNList(el);
}

let _cached_encoder_for_PLMNList: $.ASN1Encoder<PLMNList> | null = null;

/**
 * @summary Encodes a(n) PLMNList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PLMNList, encoded as an ASN.1 Element.
 */
export
function _encode_PLMNList (value: PLMNList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PLMNList) { _cached_encoder_for_PLMNList = $._encodeSequenceOf<PLMNID>(() => _encode_PLMNID, $.BER); }
    return _cached_encoder_for_PLMNList(value, elGetter);
}


/* eslint-enable */
