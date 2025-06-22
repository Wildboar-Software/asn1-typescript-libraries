/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    OrganizationalUnitName,
    _decode_OrganizationalUnitName,
    _encode_OrganizationalUnitName,
} from "../PkiPmiExternalDataTypes/OrganizationalUnitName.ta.mjs";

/**
 * @summary OrganizationalUnitNames
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OrganizationalUnitNames  ::=
 *   SEQUENCE SIZE (1..ub-organizational-units) OF OrganizationalUnitName
 * ```
 */
export type OrganizationalUnitNames = OrganizationalUnitName[]; // SequenceOfType

let _cached_decoder_for_OrganizationalUnitNames: $.ASN1Decoder<OrganizationalUnitNames> | null =
    null;

/**
 * @summary Decodes an ASN.1 element into a(n) OrganizationalUnitNames
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OrganizationalUnitNames} The decoded data structure.
 */
export function _decode_OrganizationalUnitNames(el: _Element) {
    if (!_cached_decoder_for_OrganizationalUnitNames) {
        _cached_decoder_for_OrganizationalUnitNames =
            $._decodeSequenceOf<OrganizationalUnitName>(
                () => _decode_OrganizationalUnitName
            );
    }
    return _cached_decoder_for_OrganizationalUnitNames(el);
}

let _cached_encoder_for_OrganizationalUnitNames: $.ASN1Encoder<OrganizationalUnitNames> | null =
    null;

/**
 * @summary Encodes a(n) OrganizationalUnitNames into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OrganizationalUnitNames, encoded as an ASN.1 Element.
 */
export function _encode_OrganizationalUnitNames(
    value: OrganizationalUnitNames,
    elGetter: $.ASN1Encoder<OrganizationalUnitNames>
) {
    if (!_cached_encoder_for_OrganizationalUnitNames) {
        _cached_encoder_for_OrganizationalUnitNames =
            $._encodeSequenceOf<OrganizationalUnitName>(
                () => _encode_OrganizationalUnitName,
                $.BER
            );
    }
    return _cached_encoder_for_OrganizationalUnitNames(value, elGetter);
}


/* eslint-enable */
