/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Signed,
    _get_decoder_for_Signed,
    _get_encoder_for_Signed,
} from "../CryptoTools/Signed.ta.mjs";
import {
    TbsHandshakeProAbort,
    _decode_TbsHandshakeProAbort,
    _encode_TbsHandshakeProAbort,
} from "../Wrapper/TbsHandshakeProAbort.ta.mjs";
/**
 * @summary HandshakeProAbort
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HandshakeProAbort  ::=  Signed{TbsHandshakeProAbort}
 * ```
 */
export type HandshakeProAbort = Signed<TbsHandshakeProAbort>; // DefinedType

let _cached_decoder_for_HandshakeProAbort: $.ASN1Decoder<HandshakeProAbort> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HandshakeProAbort
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HandshakeProAbort} The decoded data structure.
 */
export function _decode_HandshakeProAbort(el: _Element) {
    if (!_cached_decoder_for_HandshakeProAbort) {
        _cached_decoder_for_HandshakeProAbort = _get_decoder_for_Signed<TbsHandshakeProAbort>(
            _decode_TbsHandshakeProAbort
        );
    }
    return _cached_decoder_for_HandshakeProAbort(el);
}

let _cached_encoder_for_HandshakeProAbort: $.ASN1Encoder<HandshakeProAbort> | null = null;

/**
 * @summary Encodes a(n) HandshakeProAbort into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandshakeProAbort, encoded as an ASN.1 Element.
 */
export function _encode_HandshakeProAbort(
    value: HandshakeProAbort,
    elGetter: $.ASN1Encoder<HandshakeProAbort>
) {
    if (!_cached_encoder_for_HandshakeProAbort) {
        _cached_encoder_for_HandshakeProAbort = _get_encoder_for_Signed<TbsHandshakeProAbort>(
            _encode_TbsHandshakeProAbort
        );
    }
    return _cached_encoder_for_HandshakeProAbort(value, elGetter);
}


/* eslint-enable */
