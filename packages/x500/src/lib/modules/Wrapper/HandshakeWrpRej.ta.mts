/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Signed,
    _get_decoder_for_Signed,
    _get_encoder_for_Signed,
} from "../CryptoTools/Signed.ta.mjs";
import {
    TbsHandshakeWrpRej,
    _decode_TbsHandshakeWrpRej,
    _encode_TbsHandshakeWrpRej,
} from "../Wrapper/TbsHandshakeWrpRej.ta.mjs";
/**
 * @summary HandshakeWrpRej
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HandshakeWrpRej  ::=  Signed{TbsHandshakeWrpRej}
 * ```
 */
export type HandshakeWrpRej = Signed<TbsHandshakeWrpRej>; // DefinedType

let _cached_decoder_for_HandshakeWrpRej: $.ASN1Decoder<HandshakeWrpRej> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HandshakeWrpRej
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HandshakeWrpRej} The decoded data structure.
 */
export function _decode_HandshakeWrpRej(el: _Element): HandshakeWrpRej {
    if (!_cached_decoder_for_HandshakeWrpRej) {
        _cached_decoder_for_HandshakeWrpRej = _get_decoder_for_Signed<TbsHandshakeWrpRej>(
            _decode_TbsHandshakeWrpRej
        );
    }
    return _cached_decoder_for_HandshakeWrpRej(el);
}

let _cached_encoder_for_HandshakeWrpRej: $.ASN1Encoder<HandshakeWrpRej> | null = null;

/**
 * @summary Encodes a(n) HandshakeWrpRej into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandshakeWrpRej, encoded as an ASN.1 Element.
 */
export function _encode_HandshakeWrpRej(
    value: HandshakeWrpRej,
    elGetter: $.ASN1Encoder<HandshakeWrpRej>
): _Element {
    if (!_cached_encoder_for_HandshakeWrpRej) {
        _cached_encoder_for_HandshakeWrpRej = _get_encoder_for_Signed<TbsHandshakeWrpRej>(
            _encode_TbsHandshakeWrpRej
        );
    }
    return _cached_encoder_for_HandshakeWrpRej(value, elGetter);
}


/* eslint-enable */
