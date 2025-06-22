/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/DirectoryString.ta.mjs";

/**
 * @summary X520OrganizationalUnitName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * X520OrganizationalUnitName  ::=  DirectoryString{ub-organizational-unit-name}
 * ```
 */
export type X520OrganizationalUnitName = DirectoryString; // DefinedType


let _cached_decoder_for_X520OrganizationalUnitName: $.ASN1Decoder<X520OrganizationalUnitName> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) X520OrganizationalUnitName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {X520OrganizationalUnitName} The decoded data structure.
 */
export function _decode_X520OrganizationalUnitName(el: _Element) {
    if (!_cached_decoder_for_X520OrganizationalUnitName) {
        _cached_decoder_for_X520OrganizationalUnitName = _decode_DirectoryString;
    }
    return _cached_decoder_for_X520OrganizationalUnitName(el);
}


let _cached_encoder_for_X520OrganizationalUnitName: $.ASN1Encoder<X520OrganizationalUnitName> | null = null;


/**
 * @summary Encodes a(n) X520OrganizationalUnitName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The X520OrganizationalUnitName, encoded as an ASN.1 Element.
 */
export function _encode_X520OrganizationalUnitName(
    value: X520OrganizationalUnitName,
    elGetter: $.ASN1Encoder<X520OrganizationalUnitName>
) {
    if (!_cached_encoder_for_X520OrganizationalUnitName) {
        _cached_encoder_for_X520OrganizationalUnitName = _encode_DirectoryString;
    }
    return _cached_encoder_for_X520OrganizationalUnitName(value, elGetter);
}


/* eslint-enable */
