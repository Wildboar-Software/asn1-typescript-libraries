/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "../AuthenticationFramework/SIGNED.ta.mjs";
import {
    TBSPDU_wrapper,
    _decode_TBSPDU_wrapper,
    _encode_TBSPDU_wrapper,
} from "../PkiPmiWrapper/TBSPDU-wrapper.ta.mjs";
/**
 * @summary PDU_wrapper
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PDU-wrapper  ::=  SIGNED{TBSPDU-wrapper}
 * ```
 */
export type PDU_wrapper = SIGNED<TBSPDU_wrapper>; // DefinedType

let _cached_decoder_for_PDU_wrapper: $.ASN1Decoder<PDU_wrapper> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDU_wrapper
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PDU_wrapper} The decoded data structure.
 */
export function _decode_PDU_wrapper(el: _Element): PDU_wrapper {
    if (!_cached_decoder_for_PDU_wrapper) {
        _cached_decoder_for_PDU_wrapper = _get_decoder_for_SIGNED<TBSPDU_wrapper>(
            _decode_TBSPDU_wrapper
        );
    }
    return _cached_decoder_for_PDU_wrapper(el);
}

let _cached_encoder_for_PDU_wrapper: $.ASN1Encoder<PDU_wrapper> | null = null;

/**
 * @summary Encodes a(n) PDU_wrapper into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDU_wrapper, encoded as an ASN.1 Element.
 */
export function _encode_PDU_wrapper(
    value: PDU_wrapper,
    elGetter: $.ASN1Encoder<PDU_wrapper>
): _Element {
    if (!_cached_encoder_for_PDU_wrapper) {
        _cached_encoder_for_PDU_wrapper = _get_encoder_for_SIGNED<TBSPDU_wrapper>(
            _encode_TBSPDU_wrapper
        );
    }
    return _cached_encoder_for_PDU_wrapper(value, elGetter);
}


/* eslint-enable */
