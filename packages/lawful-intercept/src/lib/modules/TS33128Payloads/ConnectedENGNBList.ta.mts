/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ConnectedENGNB, _decode_ConnectedENGNB, _encode_ConnectedENGNB } from "../TS33128Payloads/ConnectedENGNB.ta.mjs";
// export { ConnectedENGNB, _decode_ConnectedENGNB, _encode_ConnectedENGNB } from "../TS33128Payloads/ConnectedENGNB.ta.mjs";


/**
 * @summary ConnectedENGNBList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectedENGNBList  ::=  SEQUENCE SIZE (1..MAX) OF ConnectedENGNB
 * ```
 */
export
type ConnectedENGNBList = ConnectedENGNB[]; // SequenceOfType

let _cached_decoder_for_ConnectedENGNBList: $.ASN1Decoder<ConnectedENGNBList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectedENGNBList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectedENGNBList (el: _Element): ConnectedENGNBList {
    if (!_cached_decoder_for_ConnectedENGNBList) { _cached_decoder_for_ConnectedENGNBList = $._decodeSequenceOf<ConnectedENGNB>(() => _decode_ConnectedENGNB); }
    return _cached_decoder_for_ConnectedENGNBList(el);
}

let _cached_encoder_for_ConnectedENGNBList: $.ASN1Encoder<ConnectedENGNBList> | null = null;

/**
 * @summary Encodes a(n) ConnectedENGNBList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectedENGNBList, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectedENGNBList (value: ConnectedENGNBList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectedENGNBList) { _cached_encoder_for_ConnectedENGNBList = $._encodeSequenceOf<ConnectedENGNB>(() => _encode_ConnectedENGNB, $.BER); }
    return _cached_encoder_for_ConnectedENGNBList(value, elGetter);
}


/* eslint-enable */
