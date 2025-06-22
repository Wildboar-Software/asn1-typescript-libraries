/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    LinkedArgumentData,
    _decode_LinkedArgumentData,
    _encode_LinkedArgumentData,
} from "../DirectoryAbstractService/LinkedArgumentData.ta.mjs";
import {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta.mjs";
/**
 * @summary LinkedArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LinkedArgument  ::=  OPTIONALLY-PROTECTED-SEQ { LinkedArgumentData }
 * ```
 */
export type LinkedArgument = OPTIONALLY_PROTECTED_SEQ<LinkedArgumentData>; // DefinedType

let _cached_decoder_for_LinkedArgument: $.ASN1Decoder<LinkedArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LinkedArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LinkedArgument} The decoded data structure.
 */
export function _decode_LinkedArgument(el: _Element) {
    if (!_cached_decoder_for_LinkedArgument) {
        _cached_decoder_for_LinkedArgument = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<LinkedArgumentData>(
            _decode_LinkedArgumentData
        );
    }
    return _cached_decoder_for_LinkedArgument(el);
}

let _cached_encoder_for_LinkedArgument: $.ASN1Encoder<LinkedArgument> | null = null;

/**
 * @summary Encodes a(n) LinkedArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LinkedArgument, encoded as an ASN.1 Element.
 */
export function _encode_LinkedArgument(
    value: LinkedArgument,
    elGetter: $.ASN1Encoder<LinkedArgument>
) {
    if (!_cached_encoder_for_LinkedArgument) {
        _cached_encoder_for_LinkedArgument = _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<LinkedArgumentData>(
            _encode_LinkedArgumentData
        );
    }
    return _cached_encoder_for_LinkedArgument(value, elGetter);
}


/* eslint-enable */
