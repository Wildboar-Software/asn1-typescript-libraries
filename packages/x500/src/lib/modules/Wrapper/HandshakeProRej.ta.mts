/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Signed,
    _get_decoder_for_Signed,
    _get_encoder_for_Signed,
} from "../CryptoTools/Signed.ta.mjs";
import {
    TbsHandshakeProRej,
    _decode_TbsHandshakeProRej,
    _encode_TbsHandshakeProRej,
} from "../Wrapper/TbsHandshakeProRej.ta.mjs";
/**
 * @summary HandshakeProRej
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HandshakeProRej  ::=  Signed{TbsHandshakeProRej}
 * ```
 */
export type HandshakeProRej = Signed<TbsHandshakeProRej>; // DefinedType

let _cached_decoder_for_HandshakeProRej: $.ASN1Decoder<HandshakeProRej> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HandshakeProRej
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HandshakeProRej} The decoded data structure.
 */
export function _decode_HandshakeProRej(el: _Element): HandshakeProRej {
    if (!_cached_decoder_for_HandshakeProRej) {
        _cached_decoder_for_HandshakeProRej = _get_decoder_for_Signed<TbsHandshakeProRej>(
            _decode_TbsHandshakeProRej
        );
    }
    return _cached_decoder_for_HandshakeProRej(el);
}

let _cached_encoder_for_HandshakeProRej: $.ASN1Encoder<HandshakeProRej> | null = null;

/**
 * @summary Encodes a(n) HandshakeProRej into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandshakeProRej, encoded as an ASN.1 Element.
 */
export function _encode_HandshakeProRej(
    value: HandshakeProRej,
    elGetter: $.ASN1Encoder<HandshakeProRej>
): _Element {
    if (!_cached_encoder_for_HandshakeProRej) {
        _cached_encoder_for_HandshakeProRej = _get_encoder_for_Signed<TbsHandshakeProRej>(
            _encode_TbsHandshakeProRej
        );
    }
    return _cached_encoder_for_HandshakeProRej(value, elGetter);
}


/* eslint-enable */
