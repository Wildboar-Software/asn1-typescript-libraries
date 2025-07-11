/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from "../MTSAbstractService/UniversalPDSParameter.ta.mjs";
/**
 * @summary UniversalPhysicalDeliveryOfficeName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalPhysicalDeliveryOfficeName  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalPhysicalDeliveryOfficeName = UniversalPDSParameter; // DefinedType

let _cached_decoder_for_UniversalPhysicalDeliveryOfficeName: $.ASN1Decoder<UniversalPhysicalDeliveryOfficeName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPhysicalDeliveryOfficeName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPhysicalDeliveryOfficeName} The decoded data structure.
 */
export function _decode_UniversalPhysicalDeliveryOfficeName(el: _Element): UniversalPhysicalDeliveryOfficeName {
    if (!_cached_decoder_for_UniversalPhysicalDeliveryOfficeName) {
        _cached_decoder_for_UniversalPhysicalDeliveryOfficeName = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalPhysicalDeliveryOfficeName(el);
}

let _cached_encoder_for_UniversalPhysicalDeliveryOfficeName: $.ASN1Encoder<UniversalPhysicalDeliveryOfficeName> | null = null;

/**
 * @summary Encodes a(n) UniversalPhysicalDeliveryOfficeName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPhysicalDeliveryOfficeName, encoded as an ASN.1 Element.
 */
export function _encode_UniversalPhysicalDeliveryOfficeName(
    value: UniversalPhysicalDeliveryOfficeName,
    elGetter: $.ASN1Encoder<UniversalPhysicalDeliveryOfficeName>
): _Element {
    if (!_cached_encoder_for_UniversalPhysicalDeliveryOfficeName) {
        _cached_encoder_for_UniversalPhysicalDeliveryOfficeName = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalPhysicalDeliveryOfficeName(
        value,
        elGetter
    );
}


/* eslint-enable */
