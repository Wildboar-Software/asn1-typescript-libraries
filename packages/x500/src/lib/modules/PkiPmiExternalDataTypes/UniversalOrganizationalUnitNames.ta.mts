/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    UniversalOrganizationalUnitName,
    _decode_UniversalOrganizationalUnitName,
    _encode_UniversalOrganizationalUnitName,
} from "../PkiPmiExternalDataTypes/UniversalOrganizationalUnitName.ta.mjs";
/**
 * @summary UniversalOrganizationalUnitNames
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalOrganizationalUnitNames  ::=
 *   SEQUENCE SIZE (1..ub-organizational-units) OF UniversalOrganizationalUnitName
 * ```
 */
export type UniversalOrganizationalUnitNames = UniversalOrganizationalUnitName[]; // SequenceOfType

let _cached_decoder_for_UniversalOrganizationalUnitNames: $.ASN1Decoder<UniversalOrganizationalUnitNames> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalOrganizationalUnitNames
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalOrganizationalUnitNames} The decoded data structure.
 */
export function _decode_UniversalOrganizationalUnitNames(el: _Element): UniversalOrganizationalUnitNames {
    if (!_cached_decoder_for_UniversalOrganizationalUnitNames) {
        _cached_decoder_for_UniversalOrganizationalUnitNames = $._decodeSequenceOf<UniversalOrganizationalUnitName>(
            () => _decode_UniversalOrganizationalUnitName
        );
    }
    return _cached_decoder_for_UniversalOrganizationalUnitNames(el);
}

let _cached_encoder_for_UniversalOrganizationalUnitNames: $.ASN1Encoder<UniversalOrganizationalUnitNames> | null = null;

/**
 * @summary Encodes a(n) UniversalOrganizationalUnitNames into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalOrganizationalUnitNames, encoded as an ASN.1 Element.
 */
export function _encode_UniversalOrganizationalUnitNames(
    value: UniversalOrganizationalUnitNames,
    elGetter: $.ASN1Encoder<UniversalOrganizationalUnitNames>
): _Element {
    if (!_cached_encoder_for_UniversalOrganizationalUnitNames) {
        _cached_encoder_for_UniversalOrganizationalUnitNames = $._encodeSequenceOf<UniversalOrganizationalUnitName>(
            () => _encode_UniversalOrganizationalUnitName,
            $.DER
        );
    }
    return _cached_encoder_for_UniversalOrganizationalUnitNames(
        value,
        elGetter
    );
}


/* eslint-enable */
