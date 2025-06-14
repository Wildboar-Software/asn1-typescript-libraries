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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    Ranges_Item,
    _decode_Ranges_Item,
    _encode_Ranges_Item,
} from '../M3100ASN1TypeModule7/Ranges-Item.ta.mjs';
/* START_OF_SYMBOL_DEFINITION Ranges */
/**
 * @summary Ranges
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Ranges  ::=
 *   SET OF
 *     CHOICE {integerRange  [0]  AttributeChoiceInteger,
 *             realRange     [1]  AttributeChoiceReal}
 * ```
 */
export type Ranges = Ranges_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION Ranges */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Ranges */
let _cached_decoder_for_Ranges: $.ASN1Decoder<Ranges> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Ranges */

/* START_OF_SYMBOL_DEFINITION _decode_Ranges */
/**
 * @summary Decodes an ASN.1 element into a(n) Ranges
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Ranges} The decoded data structure.
 */
export function _decode_Ranges(el: _Element) {
    if (!_cached_decoder_for_Ranges) {
        _cached_decoder_for_Ranges = $._decodeSetOf<Ranges_Item>(
            () => _decode_Ranges_Item
        );
    }
    return _cached_decoder_for_Ranges(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Ranges */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Ranges */
let _cached_encoder_for_Ranges: $.ASN1Encoder<Ranges> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Ranges */

/* START_OF_SYMBOL_DEFINITION _encode_Ranges */
/**
 * @summary Encodes a(n) Ranges into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ranges, encoded as an ASN.1 Element.
 */
export function _encode_Ranges(value: Ranges, elGetter: $.ASN1Encoder<Ranges>) {
    if (!_cached_encoder_for_Ranges) {
        _cached_encoder_for_Ranges = $._encodeSetOf<Ranges_Item>(
            () => _encode_Ranges_Item,
            $.BER
        );
    }
    return _cached_encoder_for_Ranges(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Ranges */

/* eslint-enable */
