/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "@wildboar/x500/SelectedAttributeTypes";

/**
 * @summary X520OrganizationName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * X520OrganizationName  ::=  DirectoryString {ub-organization-name}
 * ```
 */
export type X520OrganizationName = DirectoryString; // DefinedType


let _cached_decoder_for_X520OrganizationName: $.ASN1Decoder<X520OrganizationName> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) X520OrganizationName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {X520OrganizationName} The decoded data structure.
 */
export function _decode_X520OrganizationName(el: _Element): X520OrganizationName {
    if (!_cached_decoder_for_X520OrganizationName) {
        _cached_decoder_for_X520OrganizationName = _decode_DirectoryString;
    }
    return _cached_decoder_for_X520OrganizationName(el);
}


let _cached_encoder_for_X520OrganizationName: $.ASN1Encoder<X520OrganizationName> | null = null;


/**
 * @summary Encodes a(n) X520OrganizationName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The X520OrganizationName, encoded as an ASN.1 Element.
 */
export function _encode_X520OrganizationName(
    value: X520OrganizationName,
    elGetter: $.ASN1Encoder<X520OrganizationName>
): _Element {
    if (!_cached_encoder_for_X520OrganizationName) {
        _cached_encoder_for_X520OrganizationName = _encode_DirectoryString;
    }
    return _cached_encoder_for_X520OrganizationName(value, elGetter);
}


/* eslint-enable */
