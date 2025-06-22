/* eslint-disable */
import {
    PrintableString,
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


/**
 * @summary EquipmentHolderAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EquipmentHolderAddress  ::=  SEQUENCE OF PrintableString
 * ```
 */
export type EquipmentHolderAddress = PrintableString[]; // SequenceOfType


let _cached_decoder_for_EquipmentHolderAddress: $.ASN1Decoder<EquipmentHolderAddress> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EquipmentHolderAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EquipmentHolderAddress} The decoded data structure.
 */
export function _decode_EquipmentHolderAddress(el: _Element) {
    if (!_cached_decoder_for_EquipmentHolderAddress) {
        _cached_decoder_for_EquipmentHolderAddress = $._decodeSequenceOf<PrintableString>(
            () => $._decodePrintableString
        );
    }
    return _cached_decoder_for_EquipmentHolderAddress(el);
}


let _cached_encoder_for_EquipmentHolderAddress: $.ASN1Encoder<EquipmentHolderAddress> | null = null;


/**
 * @summary Encodes a(n) EquipmentHolderAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EquipmentHolderAddress, encoded as an ASN.1 Element.
 */
export function _encode_EquipmentHolderAddress(
    value: EquipmentHolderAddress,
    elGetter: $.ASN1Encoder<EquipmentHolderAddress>
) {
    if (!_cached_encoder_for_EquipmentHolderAddress) {
        _cached_encoder_for_EquipmentHolderAddress = $._encodeSequenceOf<PrintableString>(
            () => $._encodePrintableString,
            $.BER
        );
    }
    return _cached_encoder_for_EquipmentHolderAddress(value, elGetter);
}


/* eslint-enable */
