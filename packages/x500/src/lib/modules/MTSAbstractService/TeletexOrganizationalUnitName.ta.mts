/* eslint-disable */
import { ASN1Element as _Element, TeletexString } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary TeletexOrganizationalUnitName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TeletexOrganizationalUnitName  ::=
 *   TeletexString(SIZE (1..ub-organizational-unit-name-length))
 * ```
 */
export type TeletexOrganizationalUnitName = TeletexString; // TeletexString

let _cached_decoder_for_TeletexOrganizationalUnitName: $.ASN1Decoder<TeletexOrganizationalUnitName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TeletexOrganizationalUnitName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TeletexOrganizationalUnitName} The decoded data structure.
 */
export function _decode_TeletexOrganizationalUnitName(el: _Element) {
    if (!_cached_decoder_for_TeletexOrganizationalUnitName) {
        _cached_decoder_for_TeletexOrganizationalUnitName =
            $._decodeTeletexString;
    }
    return _cached_decoder_for_TeletexOrganizationalUnitName(el);
}

let _cached_encoder_for_TeletexOrganizationalUnitName: $.ASN1Encoder<TeletexOrganizationalUnitName> | null = null;

/**
 * @summary Encodes a(n) TeletexOrganizationalUnitName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TeletexOrganizationalUnitName, encoded as an ASN.1 Element.
 */
export function _encode_TeletexOrganizationalUnitName(
    value: TeletexOrganizationalUnitName,
    elGetter: $.ASN1Encoder<TeletexOrganizationalUnitName>
) {
    if (!_cached_encoder_for_TeletexOrganizationalUnitName) {
        _cached_encoder_for_TeletexOrganizationalUnitName =
            $._encodeTeletexString;
    }
    return _cached_encoder_for_TeletexOrganizationalUnitName(value, elGetter);
}


/* eslint-enable */
