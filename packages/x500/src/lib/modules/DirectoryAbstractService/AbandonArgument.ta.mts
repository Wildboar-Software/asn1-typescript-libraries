/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    AbandonArgumentData,
    _decode_AbandonArgumentData,
    _encode_AbandonArgumentData,
} from "../DirectoryAbstractService/AbandonArgumentData.ta.mjs";
import {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta.mjs";
/**
 * @summary AbandonArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AbandonArgument  ::=
 *   OPTIONALLY-PROTECTED-SEQ { AbandonArgumentData }
 * ```
 */
export type AbandonArgument = OPTIONALLY_PROTECTED_SEQ<AbandonArgumentData>; // DefinedType

let _cached_decoder_for_AbandonArgument: $.ASN1Decoder<AbandonArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AbandonArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AbandonArgument} The decoded data structure.
 */
export function _decode_AbandonArgument(el: _Element) {
    if (!_cached_decoder_for_AbandonArgument) {
        _cached_decoder_for_AbandonArgument = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<AbandonArgumentData>(
            _decode_AbandonArgumentData
        );
    }
    return _cached_decoder_for_AbandonArgument(el);
}

let _cached_encoder_for_AbandonArgument: $.ASN1Encoder<AbandonArgument> | null = null;

/**
 * @summary Encodes a(n) AbandonArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AbandonArgument, encoded as an ASN.1 Element.
 */
export function _encode_AbandonArgument(
    value: AbandonArgument,
    elGetter: $.ASN1Encoder<AbandonArgument>
) {
    if (!_cached_encoder_for_AbandonArgument) {
        _cached_encoder_for_AbandonArgument = _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<AbandonArgumentData>(
            _encode_AbandonArgumentData
        );
    }
    return _cached_encoder_for_AbandonArgument(value, elGetter);
}


/* eslint-enable */
