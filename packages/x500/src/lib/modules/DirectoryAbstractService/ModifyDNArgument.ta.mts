/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    ModifyDNArgumentData,
    _decode_ModifyDNArgumentData,
    _encode_ModifyDNArgumentData,
} from "../DirectoryAbstractService/ModifyDNArgumentData.ta.mjs";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
/**
 * @summary ModifyDNArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyDNArgument  ::=  OPTIONALLY-PROTECTED { ModifyDNArgumentData }
 * ```
 */
export type ModifyDNArgument = OPTIONALLY_PROTECTED<ModifyDNArgumentData>; // DefinedType

let _cached_decoder_for_ModifyDNArgument: $.ASN1Decoder<ModifyDNArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModifyDNArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyDNArgument} The decoded data structure.
 */
export function _decode_ModifyDNArgument(el: _Element) {
    if (!_cached_decoder_for_ModifyDNArgument) {
        _cached_decoder_for_ModifyDNArgument = _get_decoder_for_OPTIONALLY_PROTECTED<ModifyDNArgumentData>(
            _decode_ModifyDNArgumentData
        );
    }
    return _cached_decoder_for_ModifyDNArgument(el);
}

let _cached_encoder_for_ModifyDNArgument: $.ASN1Encoder<ModifyDNArgument> | null = null;

/**
 * @summary Encodes a(n) ModifyDNArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyDNArgument, encoded as an ASN.1 Element.
 */
export function _encode_ModifyDNArgument(
    value: ModifyDNArgument,
    elGetter: $.ASN1Encoder<ModifyDNArgument>
) {
    if (!_cached_encoder_for_ModifyDNArgument) {
        _cached_encoder_for_ModifyDNArgument = _get_encoder_for_OPTIONALLY_PROTECTED<ModifyDNArgumentData>(
            _encode_ModifyDNArgumentData
        );
    }
    return _cached_encoder_for_ModifyDNArgument(value, elGetter);
}


/* eslint-enable */
