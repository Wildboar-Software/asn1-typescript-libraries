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

/* START_OF_SYMBOL_DEFINITION ManagedObjectInstanceAliasList */
/**
 * @summary ManagedObjectInstanceAliasList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ManagedObjectInstanceAliasList  ::=  SET OF GraphicString(SIZE (0..256))
 * ```
 */
export type ManagedObjectInstanceAliasList = GraphicString[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ManagedObjectInstanceAliasList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ManagedObjectInstanceAliasList */
let _cached_decoder_for_ManagedObjectInstanceAliasList: $.ASN1Decoder<ManagedObjectInstanceAliasList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ManagedObjectInstanceAliasList */

/* START_OF_SYMBOL_DEFINITION _decode_ManagedObjectInstanceAliasList */
/**
 * @summary Decodes an ASN.1 element into a(n) ManagedObjectInstanceAliasList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ManagedObjectInstanceAliasList} The decoded data structure.
 */
export function _decode_ManagedObjectInstanceAliasList(el: _Element) {
    if (!_cached_decoder_for_ManagedObjectInstanceAliasList) {
        _cached_decoder_for_ManagedObjectInstanceAliasList = $._decodeSetOf<GraphicString>(
            () => $._decodeGraphicString
        );
    }
    return _cached_decoder_for_ManagedObjectInstanceAliasList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ManagedObjectInstanceAliasList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ManagedObjectInstanceAliasList */
let _cached_encoder_for_ManagedObjectInstanceAliasList: $.ASN1Encoder<ManagedObjectInstanceAliasList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ManagedObjectInstanceAliasList */

/* START_OF_SYMBOL_DEFINITION _encode_ManagedObjectInstanceAliasList */
/**
 * @summary Encodes a(n) ManagedObjectInstanceAliasList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManagedObjectInstanceAliasList, encoded as an ASN.1 Element.
 */
export function _encode_ManagedObjectInstanceAliasList(
    value: ManagedObjectInstanceAliasList,
    elGetter: $.ASN1Encoder<ManagedObjectInstanceAliasList>
) {
    if (!_cached_encoder_for_ManagedObjectInstanceAliasList) {
        _cached_encoder_for_ManagedObjectInstanceAliasList = $._encodeSetOf<GraphicString>(
            () => $._encodeGraphicString,
            $.BER
        );
    }
    return _cached_encoder_for_ManagedObjectInstanceAliasList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ManagedObjectInstanceAliasList */

/* eslint-enable */
