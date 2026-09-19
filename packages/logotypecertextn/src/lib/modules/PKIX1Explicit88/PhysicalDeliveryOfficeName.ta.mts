/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PDSParameter, _decode_PDSParameter, _encode_PDSParameter } from "../PKIX1Explicit88/PDSParameter.ta.mjs";
// export { PDSParameter, _decode_PDSParameter, _encode_PDSParameter } from "../PKIX1Explicit88/PDSParameter.ta.mjs";


/**
 * @summary PhysicalDeliveryOfficeName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PhysicalDeliveryOfficeName  ::=  PDSParameter
 * ```
 */
export
type PhysicalDeliveryOfficeName = PDSParameter; // DefinedType

let _cached_decoder_for_PhysicalDeliveryOfficeName: $.ASN1Decoder<PhysicalDeliveryOfficeName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalDeliveryOfficeName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PhysicalDeliveryOfficeName (el: _Element): PhysicalDeliveryOfficeName {
    if (!_cached_decoder_for_PhysicalDeliveryOfficeName) { _cached_decoder_for_PhysicalDeliveryOfficeName = _decode_PDSParameter; }
    return _cached_decoder_for_PhysicalDeliveryOfficeName(el);
}

let _cached_encoder_for_PhysicalDeliveryOfficeName: $.ASN1Encoder<PhysicalDeliveryOfficeName> | null = null;

/**
 * @summary Encodes a(n) PhysicalDeliveryOfficeName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalDeliveryOfficeName, encoded as an ASN.1 Element.
 */
export
function _encode_PhysicalDeliveryOfficeName (value: PhysicalDeliveryOfficeName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PhysicalDeliveryOfficeName) { _cached_encoder_for_PhysicalDeliveryOfficeName = _encode_PDSParameter; }
    return _cached_encoder_for_PhysicalDeliveryOfficeName(value, elGetter);
}


/* eslint-enable */
