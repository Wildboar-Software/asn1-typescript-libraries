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
    AttributeId,
    _decode_AttributeId,
    _encode_AttributeId,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/AttributeId.ta.mjs';
/* START_OF_SYMBOL_DEFINITION NumericAttributeIdArray */
/**
 * @summary NumericAttributeIdArray
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NumericAttributeIdArray  ::=  SEQUENCE OF AttributeId
 * ```
 */
export type NumericAttributeIdArray = AttributeId[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION NumericAttributeIdArray */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NumericAttributeIdArray */
let _cached_decoder_for_NumericAttributeIdArray: $.ASN1Decoder<NumericAttributeIdArray> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NumericAttributeIdArray */

/* START_OF_SYMBOL_DEFINITION _decode_NumericAttributeIdArray */
/**
 * @summary Decodes an ASN.1 element into a(n) NumericAttributeIdArray
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NumericAttributeIdArray} The decoded data structure.
 */
export function _decode_NumericAttributeIdArray(el: _Element) {
    if (!_cached_decoder_for_NumericAttributeIdArray) {
        _cached_decoder_for_NumericAttributeIdArray = $._decodeSequenceOf<AttributeId>(
            () => _decode_AttributeId
        );
    }
    return _cached_decoder_for_NumericAttributeIdArray(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NumericAttributeIdArray */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NumericAttributeIdArray */
let _cached_encoder_for_NumericAttributeIdArray: $.ASN1Encoder<NumericAttributeIdArray> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NumericAttributeIdArray */

/* START_OF_SYMBOL_DEFINITION _encode_NumericAttributeIdArray */
/**
 * @summary Encodes a(n) NumericAttributeIdArray into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumericAttributeIdArray, encoded as an ASN.1 Element.
 */
export function _encode_NumericAttributeIdArray(
    value: NumericAttributeIdArray,
    elGetter: $.ASN1Encoder<NumericAttributeIdArray>
) {
    if (!_cached_encoder_for_NumericAttributeIdArray) {
        _cached_encoder_for_NumericAttributeIdArray = $._encodeSequenceOf<AttributeId>(
            () => _encode_AttributeId,
            $.BER
        );
    }
    return _cached_encoder_for_NumericAttributeIdArray(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NumericAttributeIdArray */

/* eslint-enable */
