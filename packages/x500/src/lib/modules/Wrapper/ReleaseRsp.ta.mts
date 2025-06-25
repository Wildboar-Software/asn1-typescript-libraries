/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Signed,
    _get_decoder_for_Signed,
    _get_encoder_for_Signed,
} from "../CryptoTools/Signed.ta.mjs";
import {
    TbsReleaseRsp,
    _decode_TbsReleaseRsp,
    _encode_TbsReleaseRsp,
} from "../Wrapper/TbsReleaseRsp.ta.mjs";
/**
 * @summary ReleaseRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReleaseRsp  ::=  Signed{TbsReleaseRsp}
 * ```
 */
export type ReleaseRsp = Signed<TbsReleaseRsp>; // DefinedType

let _cached_decoder_for_ReleaseRsp: $.ASN1Decoder<ReleaseRsp> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReleaseRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReleaseRsp} The decoded data structure.
 */
export function _decode_ReleaseRsp(el: _Element): ReleaseRsp {
    if (!_cached_decoder_for_ReleaseRsp) {
        _cached_decoder_for_ReleaseRsp = _get_decoder_for_Signed<TbsReleaseRsp>(
            _decode_TbsReleaseRsp
        );
    }
    return _cached_decoder_for_ReleaseRsp(el);
}

let _cached_encoder_for_ReleaseRsp: $.ASN1Encoder<ReleaseRsp> | null = null;

/**
 * @summary Encodes a(n) ReleaseRsp into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReleaseRsp, encoded as an ASN.1 Element.
 */
export function _encode_ReleaseRsp(
    value: ReleaseRsp,
    elGetter: $.ASN1Encoder<ReleaseRsp>
): _Element {
    if (!_cached_encoder_for_ReleaseRsp) {
        _cached_encoder_for_ReleaseRsp = _get_encoder_for_Signed<TbsReleaseRsp>(
            _encode_TbsReleaseRsp
        );
    }
    return _cached_encoder_for_ReleaseRsp(value, elGetter);
}


/* eslint-enable */
