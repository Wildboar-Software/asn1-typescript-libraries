/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Signed,
    _get_decoder_for_Signed,
    _get_encoder_for_Signed,
} from "../CryptoTools/Signed.ta.mjs";
import {
    TbsHandshakeSecAbort,
    _decode_TbsHandshakeSecAbort,
    _encode_TbsHandshakeSecAbort,
} from "../Wrapper/TbsHandshakeSecAbort.ta.mjs";
/**
 * @summary HandshakeSecAbort
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HandshakeSecAbort  ::=  Signed{TbsHandshakeSecAbort}
 * ```
 */
export type HandshakeSecAbort = Signed<TbsHandshakeSecAbort>; // DefinedType

let _cached_decoder_for_HandshakeSecAbort: $.ASN1Decoder<HandshakeSecAbort> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HandshakeSecAbort
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HandshakeSecAbort} The decoded data structure.
 */
export function _decode_HandshakeSecAbort(el: _Element) {
    if (!_cached_decoder_for_HandshakeSecAbort) {
        _cached_decoder_for_HandshakeSecAbort = _get_decoder_for_Signed<TbsHandshakeSecAbort>(
            _decode_TbsHandshakeSecAbort
        );
    }
    return _cached_decoder_for_HandshakeSecAbort(el);
}

let _cached_encoder_for_HandshakeSecAbort: $.ASN1Encoder<HandshakeSecAbort> | null = null;

/**
 * @summary Encodes a(n) HandshakeSecAbort into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandshakeSecAbort, encoded as an ASN.1 Element.
 */
export function _encode_HandshakeSecAbort(
    value: HandshakeSecAbort,
    elGetter: $.ASN1Encoder<HandshakeSecAbort>
) {
    if (!_cached_encoder_for_HandshakeSecAbort) {
        _cached_encoder_for_HandshakeSecAbort = _get_encoder_for_Signed<TbsHandshakeSecAbort>(
            _encode_TbsHandshakeSecAbort
        );
    }
    return _cached_encoder_for_HandshakeSecAbort(value, elGetter);
}


/* eslint-enable */
