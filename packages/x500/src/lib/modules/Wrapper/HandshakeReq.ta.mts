/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Signed,
    _get_decoder_for_Signed,
    _get_encoder_for_Signed,
} from "../CryptoTools/Signed.ta.mjs";
import {
    TbsHandshakeReq,
    _decode_TbsHandshakeReq,
    _encode_TbsHandshakeReq,
} from "../Wrapper/TbsHandshakeReq.ta.mjs";
/**
 * @summary HandshakeReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HandshakeReq  ::=  Signed{TbsHandshakeReq}
 * ```
 */
export type HandshakeReq = Signed<TbsHandshakeReq>; // DefinedType

let _cached_decoder_for_HandshakeReq: $.ASN1Decoder<HandshakeReq> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HandshakeReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HandshakeReq} The decoded data structure.
 */
export function _decode_HandshakeReq(el: _Element) {
    if (!_cached_decoder_for_HandshakeReq) {
        _cached_decoder_for_HandshakeReq = _get_decoder_for_Signed<TbsHandshakeReq>(
            _decode_TbsHandshakeReq
        );
    }
    return _cached_decoder_for_HandshakeReq(el);
}

let _cached_encoder_for_HandshakeReq: $.ASN1Encoder<HandshakeReq> | null = null;

/**
 * @summary Encodes a(n) HandshakeReq into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandshakeReq, encoded as an ASN.1 Element.
 */
export function _encode_HandshakeReq(
    value: HandshakeReq,
    elGetter: $.ASN1Encoder<HandshakeReq>
) {
    if (!_cached_encoder_for_HandshakeReq) {
        _cached_encoder_for_HandshakeReq = _get_encoder_for_Signed<TbsHandshakeReq>(
            _encode_TbsHandshakeReq
        );
    }
    return _cached_encoder_for_HandshakeReq(value, elGetter);
}


/* eslint-enable */
