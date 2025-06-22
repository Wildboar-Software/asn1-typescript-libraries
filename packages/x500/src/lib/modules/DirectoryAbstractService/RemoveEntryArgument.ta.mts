/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    RemoveEntryArgumentData,
    _decode_RemoveEntryArgumentData,
    _encode_RemoveEntryArgumentData,
} from "../DirectoryAbstractService/RemoveEntryArgumentData.ta.mjs";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
/**
 * @summary RemoveEntryArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RemoveEntryArgument  ::=  OPTIONALLY-PROTECTED { RemoveEntryArgumentData }
 * ```
 */
export type RemoveEntryArgument = OPTIONALLY_PROTECTED<RemoveEntryArgumentData>; // DefinedType

let _cached_decoder_for_RemoveEntryArgument: $.ASN1Decoder<RemoveEntryArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RemoveEntryArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RemoveEntryArgument} The decoded data structure.
 */
export function _decode_RemoveEntryArgument(el: _Element) {
    if (!_cached_decoder_for_RemoveEntryArgument) {
        _cached_decoder_for_RemoveEntryArgument = _get_decoder_for_OPTIONALLY_PROTECTED<RemoveEntryArgumentData>(
            _decode_RemoveEntryArgumentData
        );
    }
    return _cached_decoder_for_RemoveEntryArgument(el);
}

let _cached_encoder_for_RemoveEntryArgument: $.ASN1Encoder<RemoveEntryArgument> | null = null;

/**
 * @summary Encodes a(n) RemoveEntryArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoveEntryArgument, encoded as an ASN.1 Element.
 */
export function _encode_RemoveEntryArgument(
    value: RemoveEntryArgument,
    elGetter: $.ASN1Encoder<RemoveEntryArgument>
) {
    if (!_cached_encoder_for_RemoveEntryArgument) {
        _cached_encoder_for_RemoveEntryArgument = _get_encoder_for_OPTIONALLY_PROTECTED<RemoveEntryArgumentData>(
            _encode_RemoveEntryArgumentData
        );
    }
    return _cached_encoder_for_RemoveEntryArgument(value, elGetter);
}


/* eslint-enable */
