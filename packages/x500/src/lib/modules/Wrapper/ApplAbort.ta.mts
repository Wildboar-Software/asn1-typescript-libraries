/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    Signed,
    _get_decoder_for_Signed,
    _get_encoder_for_Signed,
} from "../CryptoTools/Signed.ta.mjs";
import {
    TbsApplAbort,
    _decode_TbsApplAbort,
    _encode_TbsApplAbort,
} from "../Wrapper/TbsApplAbort.ta.mjs";
/**
 * @summary ApplAbort
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ApplAbort  ::=  Signed{TbsApplAbort}
 * ```
 */
export type ApplAbort = Signed<TbsApplAbort>; // DefinedType

let _cached_decoder_for_ApplAbort: $.ASN1Decoder<ApplAbort> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ApplAbort
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ApplAbort} The decoded data structure.
 */
export function _decode_ApplAbort(el: _Element) {
    if (!_cached_decoder_for_ApplAbort) {
        _cached_decoder_for_ApplAbort = _get_decoder_for_Signed<TbsApplAbort>(
            _decode_TbsApplAbort
        );
    }
    return _cached_decoder_for_ApplAbort(el);
}

let _cached_encoder_for_ApplAbort: $.ASN1Encoder<ApplAbort> | null = null;

/**
 * @summary Encodes a(n) ApplAbort into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplAbort, encoded as an ASN.1 Element.
 */
export function _encode_ApplAbort(
    value: ApplAbort,
    elGetter: $.ASN1Encoder<ApplAbort>
) {
    if (!_cached_encoder_for_ApplAbort) {
        _cached_encoder_for_ApplAbort = _get_encoder_for_Signed<TbsApplAbort>(
            _encode_TbsApplAbort
        );
    }
    return _cached_encoder_for_ApplAbort(value, elGetter);
}


/* eslint-enable */
