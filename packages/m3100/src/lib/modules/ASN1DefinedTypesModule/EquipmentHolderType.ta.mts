/* eslint-disable */
import {
    GraphicString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION EquipmentHolderType */
/**
 * @summary EquipmentHolderType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EquipmentHolderType  ::=  GraphicString
 * ```
 */
export type EquipmentHolderType = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION EquipmentHolderType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EquipmentHolderType */
let _cached_decoder_for_EquipmentHolderType: $.ASN1Decoder<EquipmentHolderType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EquipmentHolderType */

/* START_OF_SYMBOL_DEFINITION _decode_EquipmentHolderType */
/**
 * @summary Decodes an ASN.1 element into a(n) EquipmentHolderType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EquipmentHolderType} The decoded data structure.
 */
export function _decode_EquipmentHolderType(el: _Element) {
    if (!_cached_decoder_for_EquipmentHolderType) {
        _cached_decoder_for_EquipmentHolderType = $._decodeGraphicString;
    }
    return _cached_decoder_for_EquipmentHolderType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EquipmentHolderType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EquipmentHolderType */
let _cached_encoder_for_EquipmentHolderType: $.ASN1Encoder<EquipmentHolderType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EquipmentHolderType */

/* START_OF_SYMBOL_DEFINITION _encode_EquipmentHolderType */
/**
 * @summary Encodes a(n) EquipmentHolderType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EquipmentHolderType, encoded as an ASN.1 Element.
 */
export function _encode_EquipmentHolderType(
    value: EquipmentHolderType,
    elGetter: $.ASN1Encoder<EquipmentHolderType>
) {
    if (!_cached_encoder_for_EquipmentHolderType) {
        _cached_encoder_for_EquipmentHolderType = $._encodeGraphicString;
    }
    return _cached_encoder_for_EquipmentHolderType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EquipmentHolderType */

/* eslint-enable */
