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
 * @summary PhysicalDeliveryOfficeNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalDeliveryOfficeNumber  ::=  PDSParameter
 * ```
 */
export type PhysicalDeliveryOfficeNumber = PDSParameter; // DefinedType

let _cached_decoder_for_PhysicalDeliveryOfficeNumber: $.ASN1Decoder<PhysicalDeliveryOfficeNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalDeliveryOfficeNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PhysicalDeliveryOfficeNumber} The decoded data structure.
 */
export function _decode_PhysicalDeliveryOfficeNumber(el: _Element): PhysicalDeliveryOfficeNumber {
    if (!_cached_decoder_for_PhysicalDeliveryOfficeNumber) {
        _cached_decoder_for_PhysicalDeliveryOfficeNumber = _decode_PDSParameter;
    }
    return _cached_decoder_for_PhysicalDeliveryOfficeNumber(el);
}

let _cached_encoder_for_PhysicalDeliveryOfficeNumber: $.ASN1Encoder<PhysicalDeliveryOfficeNumber> | null = null;

/**
 * @summary Encodes a(n) PhysicalDeliveryOfficeNumber into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalDeliveryOfficeNumber, encoded as an ASN.1 Element.
 */
export function _encode_PhysicalDeliveryOfficeNumber(
    value: PhysicalDeliveryOfficeNumber,
    elGetter: $.ASN1Encoder<PhysicalDeliveryOfficeNumber>
): _Element {
    if (!_cached_encoder_for_PhysicalDeliveryOfficeNumber) {
        _cached_encoder_for_PhysicalDeliveryOfficeNumber = _encode_PDSParameter;
    }
    return _cached_encoder_for_PhysicalDeliveryOfficeNumber(value, elGetter);
}


/* eslint-enable */
