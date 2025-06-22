/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from '../MTSAbstractService/PDSParameter.ta.mjs';
/**
 * @summary PhysicalDeliveryPersonalName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalDeliveryPersonalName  ::=  PDSParameter
 * ```
 */
export type PhysicalDeliveryPersonalName = PDSParameter; // DefinedType

let _cached_decoder_for_PhysicalDeliveryPersonalName: $.ASN1Decoder<PhysicalDeliveryPersonalName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalDeliveryPersonalName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PhysicalDeliveryPersonalName} The decoded data structure.
 */
export function _decode_PhysicalDeliveryPersonalName(el: _Element) {
    if (!_cached_decoder_for_PhysicalDeliveryPersonalName) {
        _cached_decoder_for_PhysicalDeliveryPersonalName = _decode_PDSParameter;
    }
    return _cached_decoder_for_PhysicalDeliveryPersonalName(el);
}

let _cached_encoder_for_PhysicalDeliveryPersonalName: $.ASN1Encoder<PhysicalDeliveryPersonalName> | null = null;

/**
 * @summary Encodes a(n) PhysicalDeliveryPersonalName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalDeliveryPersonalName, encoded as an ASN.1 Element.
 */
export function _encode_PhysicalDeliveryPersonalName(
    value: PhysicalDeliveryPersonalName,
    elGetter: $.ASN1Encoder<PhysicalDeliveryPersonalName>
) {
    if (!_cached_encoder_for_PhysicalDeliveryPersonalName) {
        _cached_encoder_for_PhysicalDeliveryPersonalName = _encode_PDSParameter;
    }
    return _cached_encoder_for_PhysicalDeliveryPersonalName(value, elGetter);
}


/* eslint-enable */
