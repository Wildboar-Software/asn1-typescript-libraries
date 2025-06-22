/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from "../MTSAbstractService/UniversalOrBMPString.ta.mjs";
/**
 * @summary UniversalPDSParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalPDSParameter  ::=  UniversalOrBMPString{ub-pds-parameter-length}
 * ```
 */
export type UniversalPDSParameter = UniversalOrBMPString; // DefinedType

let _cached_decoder_for_UniversalPDSParameter: $.ASN1Decoder<UniversalPDSParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPDSParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPDSParameter} The decoded data structure.
 */
export function _decode_UniversalPDSParameter(el: _Element) {
    if (!_cached_decoder_for_UniversalPDSParameter) {
        _cached_decoder_for_UniversalPDSParameter = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_UniversalPDSParameter(el);
}

let _cached_encoder_for_UniversalPDSParameter: $.ASN1Encoder<UniversalPDSParameter> | null = null;

/**
 * @summary Encodes a(n) UniversalPDSParameter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPDSParameter, encoded as an ASN.1 Element.
 */
export function _encode_UniversalPDSParameter(
    value: UniversalPDSParameter,
    elGetter: $.ASN1Encoder<UniversalPDSParameter>
) {
    if (!_cached_encoder_for_UniversalPDSParameter) {
        _cached_encoder_for_UniversalPDSParameter = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_UniversalPDSParameter(value, elGetter);
}


/* eslint-enable */
