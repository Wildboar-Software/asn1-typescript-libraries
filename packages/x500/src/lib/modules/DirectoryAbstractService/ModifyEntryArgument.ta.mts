/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ModifyEntryArgumentData,
    _decode_ModifyEntryArgumentData,
    _encode_ModifyEntryArgumentData,
} from "../DirectoryAbstractService/ModifyEntryArgumentData.ta.mjs";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
/**
 * @summary ModifyEntryArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyEntryArgument  ::=  OPTIONALLY-PROTECTED { ModifyEntryArgumentData }
 * ```
 */
export type ModifyEntryArgument = OPTIONALLY_PROTECTED<ModifyEntryArgumentData>; // DefinedType

let _cached_decoder_for_ModifyEntryArgument: $.ASN1Decoder<ModifyEntryArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModifyEntryArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyEntryArgument} The decoded data structure.
 */
export function _decode_ModifyEntryArgument(el: _Element): ModifyEntryArgument {
    if (!_cached_decoder_for_ModifyEntryArgument) {
        _cached_decoder_for_ModifyEntryArgument = _get_decoder_for_OPTIONALLY_PROTECTED<ModifyEntryArgumentData>(
            _decode_ModifyEntryArgumentData
        );
    }
    return _cached_decoder_for_ModifyEntryArgument(el);
}

let _cached_encoder_for_ModifyEntryArgument: $.ASN1Encoder<ModifyEntryArgument> | null = null;

/**
 * @summary Encodes a(n) ModifyEntryArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyEntryArgument, encoded as an ASN.1 Element.
 */
export function _encode_ModifyEntryArgument(
    value: ModifyEntryArgument,
    elGetter: $.ASN1Encoder<ModifyEntryArgument>
): _Element {
    if (!_cached_encoder_for_ModifyEntryArgument) {
        _cached_encoder_for_ModifyEntryArgument = _get_encoder_for_OPTIONALLY_PROTECTED<ModifyEntryArgumentData>(
            _encode_ModifyEntryArgumentData
        );
    }
    return _cached_encoder_for_ModifyEntryArgument(value, elGetter);
}


/* eslint-enable */
