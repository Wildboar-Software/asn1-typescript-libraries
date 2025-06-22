/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    Signed,
    _get_decoder_for_Signed,
    _get_encoder_for_Signed,
} from "../CryptoTools/Signed.ta.mjs";
import {
    TbsHandshakeAcc,
    _decode_TbsHandshakeAcc,
    _encode_TbsHandshakeAcc,
} from "../Wrapper/TbsHandshakeAcc.ta.mjs";
/**
 * @summary HandshakeAcc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HandshakeAcc  ::=  Signed{TbsHandshakeAcc}
 * ```
 */
export type HandshakeAcc = Signed<TbsHandshakeAcc>; // DefinedType

let _cached_decoder_for_HandshakeAcc: $.ASN1Decoder<HandshakeAcc> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HandshakeAcc
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HandshakeAcc} The decoded data structure.
 */
export function _decode_HandshakeAcc(el: _Element) {
    if (!_cached_decoder_for_HandshakeAcc) {
        _cached_decoder_for_HandshakeAcc = _get_decoder_for_Signed<TbsHandshakeAcc>(
            _decode_TbsHandshakeAcc
        );
    }
    return _cached_decoder_for_HandshakeAcc(el);
}

let _cached_encoder_for_HandshakeAcc: $.ASN1Encoder<HandshakeAcc> | null = null;

/**
 * @summary Encodes a(n) HandshakeAcc into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandshakeAcc, encoded as an ASN.1 Element.
 */
export function _encode_HandshakeAcc(
    value: HandshakeAcc,
    elGetter: $.ASN1Encoder<HandshakeAcc>
) {
    if (!_cached_encoder_for_HandshakeAcc) {
        _cached_encoder_for_HandshakeAcc = _get_encoder_for_Signed<TbsHandshakeAcc>(
            _encode_TbsHandshakeAcc
        );
    }
    return _cached_encoder_for_HandshakeAcc(value, elGetter);
}


/* eslint-enable */
