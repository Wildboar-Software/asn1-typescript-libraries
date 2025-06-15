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


/**
 * @summary ElectronicMailAddressRange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ElectronicMailAddressRange  ::=  SET OF GraphicString
 * ```
 */
export type ElectronicMailAddressRange = GraphicString[]; // SetOfType


let _cached_decoder_for_ElectronicMailAddressRange: $.ASN1Decoder<ElectronicMailAddressRange> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ElectronicMailAddressRange
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ElectronicMailAddressRange} The decoded data structure.
 */
export function _decode_ElectronicMailAddressRange(el: _Element) {
    if (!_cached_decoder_for_ElectronicMailAddressRange) {
        _cached_decoder_for_ElectronicMailAddressRange = $._decodeSetOf<GraphicString>(
            () => $._decodeGraphicString
        );
    }
    return _cached_decoder_for_ElectronicMailAddressRange(el);
}


let _cached_encoder_for_ElectronicMailAddressRange: $.ASN1Encoder<ElectronicMailAddressRange> | null = null;


/**
 * @summary Encodes a(n) ElectronicMailAddressRange into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ElectronicMailAddressRange, encoded as an ASN.1 Element.
 */
export function _encode_ElectronicMailAddressRange(
    value: ElectronicMailAddressRange,
    elGetter: $.ASN1Encoder<ElectronicMailAddressRange>
) {
    if (!_cached_encoder_for_ElectronicMailAddressRange) {
        _cached_encoder_for_ElectronicMailAddressRange = $._encodeSetOf<GraphicString>(
            () => $._encodeGraphicString,
            $.BER
        );
    }
    return _cached_encoder_for_ElectronicMailAddressRange(value, elGetter);
}


/* eslint-enable */
