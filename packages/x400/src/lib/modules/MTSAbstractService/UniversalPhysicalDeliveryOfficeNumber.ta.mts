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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from '../MTSAbstractService/UniversalPDSParameter.ta.mjs';
/**
 * @summary UniversalPhysicalDeliveryOfficeNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalPhysicalDeliveryOfficeNumber  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalPhysicalDeliveryOfficeNumber = UniversalPDSParameter; // DefinedType

let _cached_decoder_for_UniversalPhysicalDeliveryOfficeNumber: $.ASN1Decoder<UniversalPhysicalDeliveryOfficeNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPhysicalDeliveryOfficeNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPhysicalDeliveryOfficeNumber} The decoded data structure.
 */
export function _decode_UniversalPhysicalDeliveryOfficeNumber(el: _Element) {
    if (!_cached_decoder_for_UniversalPhysicalDeliveryOfficeNumber) {
        _cached_decoder_for_UniversalPhysicalDeliveryOfficeNumber = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalPhysicalDeliveryOfficeNumber(el);
}

let _cached_encoder_for_UniversalPhysicalDeliveryOfficeNumber: $.ASN1Encoder<UniversalPhysicalDeliveryOfficeNumber> | null = null;

/**
 * @summary Encodes a(n) UniversalPhysicalDeliveryOfficeNumber into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPhysicalDeliveryOfficeNumber, encoded as an ASN.1 Element.
 */
export function _encode_UniversalPhysicalDeliveryOfficeNumber(
    value: UniversalPhysicalDeliveryOfficeNumber,
    elGetter: $.ASN1Encoder<UniversalPhysicalDeliveryOfficeNumber>
) {
    if (!_cached_encoder_for_UniversalPhysicalDeliveryOfficeNumber) {
        _cached_encoder_for_UniversalPhysicalDeliveryOfficeNumber = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalPhysicalDeliveryOfficeNumber(
        value,
        elGetter
    );
}


/* eslint-enable */
