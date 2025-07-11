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
    AttributeId,
    _decode_AttributeId,
    _encode_AttributeId,
} from '@wildboar/cmip';
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

let _cached_decoder_for_NumericAttributeIdArray: $.ASN1Decoder<NumericAttributeIdArray> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NumericAttributeIdArray
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NumericAttributeIdArray} The decoded data structure.
 */
export function _decode_NumericAttributeIdArray(el: _Element): NumericAttributeIdArray {
    if (!_cached_decoder_for_NumericAttributeIdArray) {
        _cached_decoder_for_NumericAttributeIdArray = $._decodeSequenceOf<AttributeId>(
            () => _decode_AttributeId
        );
    }
    return _cached_decoder_for_NumericAttributeIdArray(el);
}

let _cached_encoder_for_NumericAttributeIdArray: $.ASN1Encoder<NumericAttributeIdArray> | null = null;

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
): _Element {
    if (!_cached_encoder_for_NumericAttributeIdArray) {
        _cached_encoder_for_NumericAttributeIdArray = $._encodeSequenceOf<AttributeId>(
            () => _encode_AttributeId,
            $.BER
        );
    }
    return _cached_encoder_for_NumericAttributeIdArray(value, elGetter);
}


/* eslint-enable */
