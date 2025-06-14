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
    ImplementedValues_Item,
    _decode_ImplementedValues_Item,
    _encode_ImplementedValues_Item,
} from '../RepertoireASN1Module/ImplementedValues-Item.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ImplementedValues */
/**
 * @summary ImplementedValues
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ImplementedValues  ::=
 *   SET OF
 *     SEQUENCE {attributeId   MKMF-VALUES.&id({ImplementedValuesSet}),
 *               defaultValue
 *                 [1] EXPLICIT MKMF-VALUES.&Value
 *                                ({ImplementedValuesSet}{@.attributeId}) OPTIONAL,
 *               initialValue
 *                 [2] EXPLICIT MKMF-VALUES.&Value
 *                                ({ImplementedValuesSet}{@.attributeId}) OPTIONAL,
 *               minValue
 *                 [3] EXPLICIT MKMF-VALUES.&Value
 *                                ({ImplementedValuesSet}{@.attributeId}) OPTIONAL,
 *               maxValue
 *                 [4] EXPLICIT MKMF-VALUES.&Value
 *                                ({ImplementedValuesSet}{@.attributeId}) OPTIONAL
 *     }
 * ```
 */
export type ImplementedValues = ImplementedValues_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ImplementedValues */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ImplementedValues */
let _cached_decoder_for_ImplementedValues: $.ASN1Decoder<ImplementedValues> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ImplementedValues */

/* START_OF_SYMBOL_DEFINITION _decode_ImplementedValues */
/**
 * @summary Decodes an ASN.1 element into a(n) ImplementedValues
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ImplementedValues} The decoded data structure.
 */
export function _decode_ImplementedValues(el: _Element) {
    if (!_cached_decoder_for_ImplementedValues) {
        _cached_decoder_for_ImplementedValues = $._decodeSetOf<ImplementedValues_Item>(
            () => _decode_ImplementedValues_Item
        );
    }
    return _cached_decoder_for_ImplementedValues(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ImplementedValues */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ImplementedValues */
let _cached_encoder_for_ImplementedValues: $.ASN1Encoder<ImplementedValues> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ImplementedValues */

/* START_OF_SYMBOL_DEFINITION _encode_ImplementedValues */
/**
 * @summary Encodes a(n) ImplementedValues into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ImplementedValues, encoded as an ASN.1 Element.
 */
export function _encode_ImplementedValues(
    value: ImplementedValues,
    elGetter: $.ASN1Encoder<ImplementedValues>
) {
    if (!_cached_encoder_for_ImplementedValues) {
        _cached_encoder_for_ImplementedValues = $._encodeSetOf<ImplementedValues_Item>(
            () => _encode_ImplementedValues_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ImplementedValues(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ImplementedValues */

/* eslint-enable */
