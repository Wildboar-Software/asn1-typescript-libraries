/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    ChangePasswordArgumentData,
    _decode_ChangePasswordArgumentData,
    _encode_ChangePasswordArgumentData,
} from "../DirectoryAbstractService/ChangePasswordArgumentData.ta.mjs";
import {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta.mjs";
/**
 * @summary ChangePasswordArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChangePasswordArgument  ::=  OPTIONALLY-PROTECTED-SEQ { ChangePasswordArgumentData }
 * ```
 */
export type ChangePasswordArgument = OPTIONALLY_PROTECTED_SEQ<ChangePasswordArgumentData>; // DefinedType

let _cached_decoder_for_ChangePasswordArgument: $.ASN1Decoder<ChangePasswordArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangePasswordArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ChangePasswordArgument} The decoded data structure.
 */
export function _decode_ChangePasswordArgument(el: _Element) {
    if (!_cached_decoder_for_ChangePasswordArgument) {
        _cached_decoder_for_ChangePasswordArgument = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<ChangePasswordArgumentData>(
            _decode_ChangePasswordArgumentData
        );
    }
    return _cached_decoder_for_ChangePasswordArgument(el);
}

let _cached_encoder_for_ChangePasswordArgument: $.ASN1Encoder<ChangePasswordArgument> | null = null;

/**
 * @summary Encodes a(n) ChangePasswordArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangePasswordArgument, encoded as an ASN.1 Element.
 */
export function _encode_ChangePasswordArgument(
    value: ChangePasswordArgument,
    elGetter: $.ASN1Encoder<ChangePasswordArgument>
) {
    if (!_cached_encoder_for_ChangePasswordArgument) {
        _cached_encoder_for_ChangePasswordArgument = _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<ChangePasswordArgumentData>(
            _encode_ChangePasswordArgumentData
        );
    }
    return _cached_encoder_for_ChangePasswordArgument(value, elGetter);
}


/* eslint-enable */
