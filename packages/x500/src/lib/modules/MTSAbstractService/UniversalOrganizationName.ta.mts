/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from "../MTSAbstractService/UniversalOrBMPString.ta.mjs";
/**
 * @summary UniversalOrganizationName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalOrganizationName  ::=  UniversalOrBMPString{ub-organization-name-length}
 * ```
 */
export type UniversalOrganizationName = UniversalOrBMPString; // DefinedType

let _cached_decoder_for_UniversalOrganizationName: $.ASN1Decoder<UniversalOrganizationName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalOrganizationName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalOrganizationName} The decoded data structure.
 */
export function _decode_UniversalOrganizationName(el: _Element): UniversalOrganizationName {
    if (!_cached_decoder_for_UniversalOrganizationName) {
        _cached_decoder_for_UniversalOrganizationName = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_UniversalOrganizationName(el);
}

let _cached_encoder_for_UniversalOrganizationName: $.ASN1Encoder<UniversalOrganizationName> | null = null;

/**
 * @summary Encodes a(n) UniversalOrganizationName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalOrganizationName, encoded as an ASN.1 Element.
 */
export function _encode_UniversalOrganizationName(
    value: UniversalOrganizationName,
    elGetter: $.ASN1Encoder<UniversalOrganizationName>
): _Element {
    if (!_cached_encoder_for_UniversalOrganizationName) {
        _cached_encoder_for_UniversalOrganizationName = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_UniversalOrganizationName(value, elGetter);
}


/* eslint-enable */
