/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LastReq_Item, _decode_LastReq_Item, _encode_LastReq_Item } from "../KerberosV5Spec2/LastReq-Item.ta.mjs";
// export { LastReq_Item, _decode_LastReq_Item, _encode_LastReq_Item } from "../KerberosV5Spec2/LastReq-Item.ta.mjs";


/**
 * @summary LastReq
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LastReq          ::=      SEQUENCE OF SEQUENCE {
 *         lr-type         [0] Int32,
 *         lr-value        [1] KerberosTime
 * }
 * ```
 */
export
type LastReq = LastReq_Item[]; // SequenceOfType

let _cached_decoder_for_LastReq: $.ASN1Decoder<LastReq> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LastReq
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LastReq (el: _Element): LastReq {
    if (!_cached_decoder_for_LastReq) { _cached_decoder_for_LastReq = $._decodeSequenceOf<LastReq_Item>(() => _decode_LastReq_Item); }
    return _cached_decoder_for_LastReq(el);
}

let _cached_encoder_for_LastReq: $.ASN1Encoder<LastReq> | null = null;

/**
 * @summary Encodes a(n) LastReq into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LastReq, encoded as an ASN.1 Element.
 */
export
function _encode_LastReq (value: LastReq, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LastReq) { _cached_encoder_for_LastReq = $._encodeSequenceOf<LastReq_Item>(() => _encode_LastReq_Item, $.BER); }
    return _cached_encoder_for_LastReq(value, elGetter);
}


/* eslint-enable */
