/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta.mjs";
import {
    ModifyOperationalBindingArgumentData,
    _decode_ModifyOperationalBindingArgumentData,
    _encode_ModifyOperationalBindingArgumentData,
} from "../OperationalBindingManagement/ModifyOperationalBindingArgumentData.ta.mjs";
/**
 * @summary ModifyOperationalBindingArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyOperationalBindingArgument  ::=
 *   OPTIONALLY-PROTECTED-SEQ { ModifyOperationalBindingArgumentData }
 * ```
 */
export type ModifyOperationalBindingArgument = OPTIONALLY_PROTECTED_SEQ<ModifyOperationalBindingArgumentData>; // DefinedType

let _cached_decoder_for_ModifyOperationalBindingArgument: $.ASN1Decoder<ModifyOperationalBindingArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModifyOperationalBindingArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyOperationalBindingArgument} The decoded data structure.
 */
export function _decode_ModifyOperationalBindingArgument(el: _Element) {
    if (!_cached_decoder_for_ModifyOperationalBindingArgument) {
        _cached_decoder_for_ModifyOperationalBindingArgument = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<ModifyOperationalBindingArgumentData>(
            _decode_ModifyOperationalBindingArgumentData
        );
    }
    return _cached_decoder_for_ModifyOperationalBindingArgument(el);
}

let _cached_encoder_for_ModifyOperationalBindingArgument: $.ASN1Encoder<ModifyOperationalBindingArgument> | null = null;

/**
 * @summary Encodes a(n) ModifyOperationalBindingArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyOperationalBindingArgument, encoded as an ASN.1 Element.
 */
export function _encode_ModifyOperationalBindingArgument(
    value: ModifyOperationalBindingArgument,
    elGetter: $.ASN1Encoder<ModifyOperationalBindingArgument>
) {
    if (!_cached_encoder_for_ModifyOperationalBindingArgument) {
        _cached_encoder_for_ModifyOperationalBindingArgument = _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<ModifyOperationalBindingArgumentData>(
            _encode_ModifyOperationalBindingArgumentData
        );
    }
    return _cached_encoder_for_ModifyOperationalBindingArgument(
        value,
        elGetter
    );
}


/* eslint-enable */
