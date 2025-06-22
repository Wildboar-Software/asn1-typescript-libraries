/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from "../PkiPmiExternalDataTypes/PDSParameter.ta.mjs";
/**
 * @summary PhysicalDeliveryOrganizationName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalDeliveryOrganizationName  ::=  PDSParameter
 * ```
 */
export type PhysicalDeliveryOrganizationName = PDSParameter; // DefinedType

let _cached_decoder_for_PhysicalDeliveryOrganizationName: $.ASN1Decoder<PhysicalDeliveryOrganizationName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalDeliveryOrganizationName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PhysicalDeliveryOrganizationName} The decoded data structure.
 */
export function _decode_PhysicalDeliveryOrganizationName(el: _Element) {
    if (!_cached_decoder_for_PhysicalDeliveryOrganizationName) {
        _cached_decoder_for_PhysicalDeliveryOrganizationName = _decode_PDSParameter;
    }
    return _cached_decoder_for_PhysicalDeliveryOrganizationName(el);
}

let _cached_encoder_for_PhysicalDeliveryOrganizationName: $.ASN1Encoder<PhysicalDeliveryOrganizationName> | null = null;

/**
 * @summary Encodes a(n) PhysicalDeliveryOrganizationName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalDeliveryOrganizationName, encoded as an ASN.1 Element.
 */
export function _encode_PhysicalDeliveryOrganizationName(
    value: PhysicalDeliveryOrganizationName,
    elGetter: $.ASN1Encoder<PhysicalDeliveryOrganizationName>
) {
    if (!_cached_encoder_for_PhysicalDeliveryOrganizationName) {
        _cached_encoder_for_PhysicalDeliveryOrganizationName = _encode_PDSParameter;
    }
    return _cached_encoder_for_PhysicalDeliveryOrganizationName(
        value,
        elGetter
    );
}


/* eslint-enable */
